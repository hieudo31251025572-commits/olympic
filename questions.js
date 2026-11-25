// Chỉnh câu hỏi và đáp án ở đây. Công thức viết trong cặp dấu $...$ (KaTeX).
// Trắc nghiệm: có opts (4 phương án) và ans: 'A'|'B'|'C'|'D'
// Trả lời ngắn: không có opts, dùng num (đáp án số) và tol (sai số cho phép)
// min = số phút; show = đáp án hiển thị khi công bố.
const r = String.raw;
module.exports = [
  { min: 3,
    text: r`Công ty giao ba nhóm báo cáo cho ba chuyên viên với năng suất $x,y,z>0$ (báo cáo/ngày), cần $80$, $60$, $40$ báo cáo. Do yêu cầu cân bằng nguồn lực, năng suất thỏa ràng buộc $\ln x+\ln y+\ln z=\ln 24$. Tổng thời gian hoàn thành $T=\dfrac{80}{x}+\dfrac{60}{y}+\dfrac{40}{z}$ có giá trị nhỏ nhất (ngày) bằng`,
    opts: ['60,00', '62,40', '66,00', '72,00'], ans: 'A', show: 'A. 60,00' },
  { min: 3,
    text: r`Một dự án có hai giai đoạn. Giai đoạn 1 cần vốn $50$ triệu đồng, thành công với xác suất $p$; nếu thất bại, dự án dừng và thu hồi $10$ triệu. Nếu thành công, nhà đầu tư góp thêm $30$ triệu cho giai đoạn 2, nhận về $200$ triệu (thành công) hoặc $50$ triệu (thất bại). Giai đoạn 2 thành công với xác suất $0{,}8$ khi thị trường tốt (xác suất $0{,}6$) và $0{,}3$ khi thị trường xấu. Giá trị $p$ nhỏ nhất để lợi nhuận kỳ vọng không âm là`,
    opts: ['0,31', '0,40', '0,43', '0,50'], ans: 'B', show: 'B. 0,40' },
  { min: 3,
    text: r`Nhà đầu tư có $100$ triệu đồng và cân nhắc hai lựa chọn: Tài sản 1 có lãi đơn $10\%$/năm (lãi không được nhập vào vốn); Tài sản 2 có lãi suất $7\%$/năm, ghép lãi liên tục. Với kỳ hạn $n$ năm ($n$ nguyên dương), giá trị $n$ nhỏ nhất để tài sản 2 cho giá trị tích lũy cuối kỳ lớn hơn tài sản 1 là`,
    opts: ['n = 8', 'n = 9', 'n = 10', 'n = 11'], ans: 'C', show: 'C. n = 10' },
  { min: 3,
    text: r`Mỗi ngày giao dịch, giá một cổ phiếu thay đổi đúng $2\%$: hoặc tăng $2\%$, hoặc giảm $2\%$ so với ngày hôm trước. Ngày giao dịch thứ $1$ là ngày giá tăng. Từ ngày thứ $2$ trở đi, xu hướng đảo chiều so với ngày hôm trước (tăng sau ngày giảm, giảm sau ngày tăng) với xác suất $0{,}7$ và giữ nguyên chiều với xác suất $0{,}3$. Xác suất để ngày giao dịch thứ $4$ là ngày giá tăng bằng`,
    opts: ['0,468', '0,532', '0,580', '0,420'], ans: 'A', show: 'A. 0,468' },
  { min: 3,
    text: r`Ba tài sản có độ lệch chuẩn lợi suất lần lượt là $\sigma_1=10\%$, $\sigma_2=20\%$, $\sigma_3=30\%$ và hệ số tương quan giữa mọi cặp tài sản đều bằng $\rho=0{,}5$. Nhà đầu tư được phép bán khống và lập danh mục $w=(w_1,w_2,w_3)^T$ với $w_1+w_2+w_3=1$ sao cho phương sai danh mục nhỏ nhất. Phương sai nhỏ nhất đó bằng`,
    opts: ['0,0081', '0,0084', '0,0100', '0,0096'], ans: 'D', show: 'D. 0,0096' },
  { min: 4,
    text: r`Xét $n$ tài sản có phương sai bằng nhau $\sigma^2=0{,}05$ và hệ số tương quan mọi cặp bằng $\rho=0{,}2$. Nhà đầu tư phân bổ tỷ trọng tăng dần theo chỉ số: $w_i=\dfrac{i}{1+2+\cdots+n}$, $i=1,\dots,n$. Gọi $V(n)$ là phương sai danh mục. Giá trị của $L=\displaystyle\lim_{n\to\infty}n\bigl(V(n)-\rho\sigma^2\bigr)$ bằng`,
    opts: [r`$\dfrac{2}{75}$`, r`$\dfrac{1}{25}$`, r`$\dfrac{4}{75}$`, r`$\dfrac{1}{15}$`], ans: 'C', show: r`C. $\dfrac{4}{75}$` },
  { min: 4,
    text: r`Giá một cổ phiếu $P(x)$ (nghìn đồng) tại thời điểm $x\in[0,5]$ (tháng) chính là đường nằm trên của hai đường: đường xu hướng tăng trưởng $2^{x}$ và đường hồi phục $(x-4)^{2}$, tức là $P(x)=\max\{2^{x},\ (x-4)^{2}\}$, $x\in[0,5]$. Gọi $m$ và $M$ lần lượt là mức giá thấp nhất và cao nhất của cổ phiếu trong $5$ tháng đó. Có bao nhiêu số nguyên $k$ thỏa $m\le k\le M$ sao cho đường giá cắt mức giá $k$ (nghìn đồng) đúng hai lần, tức $P(x)=k$ có đúng hai nghiệm phân biệt trên $[0,5]$?`,
    opts: ['11', '12', '13', '28'], ans: 'B', show: 'B. 12' },
  { min: 5,
    text: r`Xét dãy $(X_t)_{t\ge0}$ nhận giá trị trong $\{1,2,3\}$ với ma trận xác suất chuyển $P=\begin{pmatrix}\tfrac12&\tfrac12&0\\\tfrac12&0&\tfrac12\\1&0&0\end{pmatrix}$, trong đó $P_{ij}=P(X_{t+1}=j\mid X_t=i)$. Hàm thưởng $r:\{1,2,3\}\to\mathbb R$ xác định bởi $r(1)=0$, $r(2)=8$, $r(3)=27$. Đặt $G=\lim_{N\to\infty}\frac1N\,\mathbb E\left[\sum_{t=1}^{N}r(X_t)\right]$. Tính $G$ (viết dưới dạng phân số tối giản, ví dụ 3/5).`,
    num: 43 / 7, tol: 0.002, show: r`$\dfrac{43}{7}$` },
  { min: 5,
    text: r`Giá trị danh mục $V(t)$ (tỷ đồng, $t$ tính theo năm) có $V(0)=4$. Tại mọi thời điểm, $50\%$ giá trị danh mục gửi vào tài sản phi rủi ro với lãi suất $4\%$/năm, $50\%$ còn lại đầu tư vào tài sản rủi ro có lợi suất $8\%$/năm; phí quản lý là $2\%\cdot V$ mỗi năm. Ngoài ra, mỗi năm nhà đầu tư rút đều $0{,}2$ tỷ đồng để chi tiêu (xem như rút liên tục). Tốc độ thay đổi $V'(t)$ bằng lợi nhuận tức thời trừ phí và trừ khoản rút. Tính thời điểm $t^*$ (năm) mà danh mục cạn tiền, tức $V(t^*)=0$ (làm tròn đến $2$ chữ số thập phân, dùng dấu chấm, ví dụ 12.34).`,
    num: 25 * Math.log(5), tol: 0.006, show: r`$25\ln 5\approx 40{,}24$` },
  { min: 5,
    text: r`Sự kiện $E$ = “dự án được phê duyệt” có xác suất tiên nghiệm $P(E)=60\%$. Người thứ $1$ biết chính xác $E$ có xảy ra hay không và truyền thông điệp “có”/“không” cho người thứ $2$; người thứ $2$ truyền cho người thứ $3$, người thứ $3$ truyền cho người thứ $4$. Ở lần truyền thứ $i$ (do người thứ $i$ thực hiện), thông điệp bị đảo ngược (“có” thành “không” hoặc ngược lại) với xác suất $\dfrac{1}{2(i+1)^2}$, độc lập giữa các lần. Gọi $M_4$ là thông điệp người thứ $4$ nhận được. Tính $P(E\mid M_4=\text{có})$ (viết dưới dạng phân số tối giản, ví dụ 3/5).`,
    num: 13 / 15, tol: 0.0005, show: r`$\dfrac{13}{15}$` }
];
