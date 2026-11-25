// Phòng thi Olympic Toán - Thống kê 2026. Không cần cài thư viện ngoài (chỉ cần Node >= 18).
// Chạy:  HOST_PASSWORD=matkhau node server.js   (Windows PowerShell: $env:HOST_PASSWORD="matkhau"; node server.js)
const http = require('http');
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const Q = require('./questions');

const PORT = process.env.PORT || 3000;
const HOST_PW = process.env.HOST_PASSWORD || 'mc2026';
const GRACE = 2000; // ms cho phép nộp trễ do độ trễ mạng
if (!process.env.HOST_PASSWORD) console.log('CANH BAO: chua dat HOST_PASSWORD, dang dung mat khau mac dinh "mc2026". Hay doi truoc khi thi!');

const players = new Map();   // id -> {name, token}
const byToken = new Map();   // token -> id
let S = { q: -1, phase: 'idle', rev: 0, startedAt: 0 };
let answers = {};            // q -> { id: {val, t} }
let scores = {};             // q -> { id: pts }

const rid = () => crypto.randomBytes(6).toString('hex');
const isHost = (req) => (req.headers['x-host-pw'] || '') === HOST_PW;

function num(s) {
  s = String(s).trim().replace(/\s/g, '').replace(',', '.');
  const m = s.match(/^(-?\d+(?:\.\d+)?)\/(\d+(?:\.\d+)?)$/);
  if (m) return Number(m[1]) / Number(m[2]);
  if (!/^-?\d+(\.\d+)?$/.test(s)) return null;
  return parseFloat(s);
}
function isCorrect(q, val) {
  if (q.ans) return String(val).trim().toUpperCase() === q.ans;
  const x = num(val);
  return x !== null && Math.abs(x - q.num) <= q.tol;
}
function openQ() {
  if (S.phase === 'open') return;
  const nx = S.phase === 'idle' ? 0 : S.q + 1;
  if (nx >= Q.length) return;
  S = { q: nx, phase: 'open', rev: S.rev + 1, startedAt: Date.now() };
  answers[nx] = {};
}
function closeQ() {
  if (S.phase !== 'open') return;
  const q = Q[S.q], lim = q.min * 60000 + GRACE;
  const good = Object.entries(answers[S.q] || {})
    .filter(([, a]) => a.t <= lim && isCorrect(q, a.val))
    .sort((a, b) => a[1].t - b[1].t);
  const pts = {};
  good.slice(0, 5).forEach(([id], i) => { pts[id] = 5 - i; });
  players.forEach((_, id) => { if (!(id in pts)) pts[id] = 0; });
  scores[S.q] = pts;
  S.phase = 'reveal';
}
function resetAll() { S = { q: -1, phase: 'idle', rev: S.rev + 1, startedAt: 0 }; answers = {}; scores = {}; }

// Tự chốt khi hết giờ (không phụ thuộc tab của MC)
setInterval(() => {
  if (S.phase === 'open' && Date.now() - S.startedAt >= Q[S.q].min * 60000 + GRACE) closeQ();
}, 250);

function stateFor(req, token) {
  const id = byToken.get(token);
  const me = id ? players.get(id) : null;
  const total = {};
  Object.values(scores).forEach(s => Object.entries(s).forEach(([k, v]) => { total[k] = (total[k] || 0) + v; }));
  const cur = S.phase === 'reveal' ? (scores[S.q] || {}) : null;
  const board = [...players.entries()]
    .map(([pid, p]) => ({ id: pid, name: p.name, total: total[pid] || 0, cur: cur ? (cur[pid] || 0) : null }))
    .sort((a, b) => b.total - a.total);
  const out = { now: Date.now(), phase: S.phase, q: S.q, nq: Q.length, rev: S.rev, board,
    me: me ? { id, name: me.name, submitted: !!(answers[S.q] && answers[S.q][id]) } : null };
  if (S.phase !== 'idle') {
    const q = Q[S.q];
    out.min = q.min; out.text = q.text; out.opts = q.opts || null;
    out.endsAt = S.startedAt + q.min * 60000;
    if (S.phase === 'reveal') out.show = q.show;
  }
  if (isHost(req)) {
    out.host = { players: players.size, answered: S.phase === 'open' ? Object.keys(answers[S.q] || {}).length : 0 };
  }
  return out;
}

function readBody(req) {
  return new Promise((res) => {
    let b = '';
    req.on('data', (c) => { b += c; if (b.length > 10000) req.destroy(); });
    req.on('end', () => { try { res(JSON.parse(b || '{}')); } catch (e) { res({}); } });
  });
}
const send = (res, code, obj) => { res.writeHead(code, { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store' }); res.end(JSON.stringify(obj)); };

http.createServer(async (req, res) => {
  const url = new URL(req.url, 'http://x');
  if (req.method === 'GET' && (url.pathname === '/' || url.pathname === '/index.html')) {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8', 'Cache-Control': 'no-store' });
    return res.end(fs.readFileSync(path.join(__dirname, 'index.html')));
  }
  if (req.method === 'GET' && url.pathname === '/api/state') return send(res, 200, stateFor(req, url.searchParams.get('token') || ''));
  if (req.method === 'POST' && url.pathname === '/api/join') {
    const b = await readBody(req);
    const name = String(b.name || '').trim().slice(0, 30);
    if (!name) return send(res, 400, { error: 'Thiếu tên' });
    let id = byToken.get(b.token);
    if (id) { players.get(id).name = name; return send(res, 200, { token: b.token, id }); }
    id = rid(); const token = rid() + rid();
    players.set(id, { name, token }); byToken.set(token, id);
    return send(res, 200, { token, id });
  }
  if (req.method === 'POST' && url.pathname === '/api/answer') {
    const b = await readBody(req);
    const id = byToken.get(b.token);
    const val = String(b.val || '').trim().slice(0, 40);
    if (!id || !val || S.phase !== 'open') return send(res, 400, { error: 'Không nộp được' });
    const t = Date.now() - S.startedAt;
    if (t > Q[S.q].min * 60000 + GRACE) return send(res, 400, { error: 'Hết giờ' });
    if (answers[S.q][id]) return send(res, 200, { ok: true, dup: true });
    answers[S.q][id] = { val, t };
    return send(res, 200, { ok: true });
  }
  if (req.method === 'POST' && url.pathname === '/api/host') {
    if (!isHost(req)) return send(res, 403, { error: 'Sai mật khẩu MC' });
    const b = await readBody(req);
    if (b.action === 'open') openQ();
    else if (b.action === 'close') closeQ();
    else if (b.action === 'reset') resetAll();
    else if (b.action === 'kick' && players.has(b.id)) { byToken.delete(players.get(b.id).token); players.delete(b.id); }
    return send(res, 200, { ok: true });
  }
  send(res, 404, { error: 'Not found' });
}).listen(PORT, '0.0.0.0', () => console.log('Phong thi dang chay tai cong ' + PORT));
