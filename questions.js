// Chỉnh câu hỏi và đáp án ở đây. Công thức viết trong cặp dấu ... (KaTeX).
// Trắc nghiệm: có opts (4 phương án) và ans: 'A'|'B'|'C'|'D'
// Trả lời ngắn: không có opts, dùng num (đáp án số) và tol (sai số cho phép)
// min = số phút; show = đáp án hiển thị khi công bố.
//
// MỖI CÂU có 4 "variants" (biến thể số liệu khác nhau, CÙNG dạng toán, CÙNG độ khó,
// nhưng đổi số liệu nên đáp án đúng khác nhau). Máy chủ sẽ chọn 1 biến thể cho mỗi
// lượt thi (mỗi nhóm) theo thứ tự cố định 0→1→2→3 rồi quay lại 0, để nhóm thi sau
// không thể dùng lại đáp án nhóm thi trước (kể cả khi nghe lỏm số liệu/đáp án).
// Thứ tự phương án A/B/C/D vẫn được xáo trộn ngẫu nhiên mỗi lượt như cũ (ở server.js).
const r = String.raw;


module.exports = [
  // ===== Câu 1 — Tối ưu AM-GM (năng suất & thời gian hoàn thành) =====
  { min: 3,
    variants: [
      { text: r`Công ty giao ba nhóm báo cáo cho ba chuyên viên với năng suất x,y,z>0 (báo cáo/ngày), cần 80, 60, 40 báo cáo. Do yêu cầu cân bằng nguồn lực, năng suất thỏa ràng buộc $\ln x+\ln y+\ln z=\ln 24$. Tổng thời gian hoàn thành
$$T=\dfrac{80}{x}+\dfrac{60}{y}+\dfrac{40}{z}$$
có giá trị nhỏ nhất (ngày) bằng`,
        opts: ['60,00', '62,40', '66,00', '72,00'], ans: 'A', show: 'A. 60,00' },
      { text: r`Công ty giao ba nhóm báo cáo cho ba chuyên viên với năng suất x,y,z>0 (báo cáo/ngày), cần 48, 36, 24 báo cáo. Do yêu cầu cân bằng nguồn lực, năng suất thỏa ràng buộc $\ln x+\ln y+\ln z=\ln 24$. Tổng thời gian hoàn thành
$$T=\dfrac{48}{x}+\dfrac{36}{y}+\dfrac{24}{z}$$
có giá trị nhỏ nhất (ngày) bằng`,
        opts: ['36,00', '37,44', '39,60', '43,20'], ans: 'A', show: 'A. 36,00' },
      { text: r`Công ty giao ba nhóm báo cáo cho ba chuyên viên với năng suất x,y,z>0 (báo cáo/ngày), cần 88, 66, 44 báo cáo. Do yêu cầu cân bằng nguồn lực, năng suất thỏa ràng buộc $\ln x+\ln y+\ln z=\ln 24$. Tổng thời gian hoàn thành
$$T=\dfrac{88}{x}+\dfrac{66}{y}+\dfrac{44}{z}$$
có giá trị nhỏ nhất (ngày) bằng`,
        opts: ['68,64', '66,00', '72,60', '79,20'], ans: 'B', show: 'B. 66,00' },
      { text: r`Công ty giao ba nhóm báo cáo cho ba chuyên viên với năng suất x,y,z>0 (báo cáo/ngày), cần 100, 75, 50 báo cáo. Do yêu cầu cân bằng nguồn lực, năng suất thỏa ràng buộc $\ln x+\ln y+\ln z=\ln 24$. Tổng thời gian hoàn thành
$$T=\dfrac{100}{x}+\dfrac{75}{y}+\dfrac{50}{z}$$
có giá trị nhỏ nhất (ngày) bằng`,
        opts: ['78,00', '82,50', '90,00', '75,00'], ans: 'D', show: 'D. 75,00' }
    ] },


  // ===== Câu 2 — Dự án hai giai đoạn, lợi nhuận kỳ vọng =====
  { min: 3,
    variants: [
      { text: r`Một dự án có hai giai đoạn. Giai đoạn 1 cần vốn 50 triệu đồng, thành công với xác suất p; nếu thất bại, dự án dừng và thu hồi 10 triệu. Nếu thành công, nhà đầu tư góp thêm 30 triệu cho giai đoạn 2, nhận về 200 triệu (thành công) hoặc 50 triệu (thất bại). Giai đoạn 2 thành công với xác suất 0,8 khi thị trường tốt (xác suất 0,6) và 0,3 khi thị trường xấu. Giá trị p nhỏ nhất để lợi nhuận kỳ vọng không âm là`,
        opts: ['0,31', '0,40', '0,43', '0,50'], ans: 'B', show: 'B. 0,40' },
      { text: r`Một dự án có hai giai đoạn. Giai đoạn 1 cần vốn 40 triệu đồng, thành công với xác suất p; nếu thất bại, dự án dừng và thu hồi 10 triệu. Nếu thành công, nhà đầu tư góp thêm 20 triệu cho giai đoạn 2, nhận về 200 triệu (thành công) hoặc 60 triệu (thất bại). Giai đoạn 2 thành công với xác suất 0,75 khi thị trường tốt (xác suất 0,5) và 0,25 khi thị trường xấu. Giá trị p nhỏ nhất để lợi nhuận kỳ vọng không âm là`,
        opts: ['0,23', '0,30', '0,32', '0,38'], ans: 'B', show: 'B. 0,30' },
      { text: r`Một dự án có hai giai đoạn. Giai đoạn 1 cần vốn 40 triệu đồng, thành công với xác suất p; nếu thất bại, dự án dừng và thu hồi 10 triệu. Nếu thành công, nhà đầu tư góp thêm 20 triệu cho giai đoạn 2, nhận về 250 triệu (thành công) hoặc 50 triệu (thất bại). Giai đoạn 2 thành công với xác suất 0,8 khi thị trường tốt (xác suất 0,5) và 0,2 khi thị trường xấu. Giá trị p nhỏ nhất để lợi nhuận kỳ vọng không âm là`,
        opts: ['0,19', '0,25', '0,27', '0,31'], ans: 'B', show: 'B. 0,25' },
      { text: r`Một dự án có hai giai đoạn. Giai đoạn 1 cần vốn 40 triệu đồng, thành công với xác suất p; nếu thất bại, dự án dừng và thu hồi 10 triệu. Nếu thành công, nhà đầu tư góp thêm 30 triệu cho giai đoạn 2, nhận về 150 triệu (thành công) hoặc 50 triệu (thất bại). Giai đoạn 2 thành công với xác suất 0,7 khi thị trường tốt (xác suất 0,5) và 0,3 khi thị trường xấu. Giá trị p nhỏ nhất để lợi nhuận kỳ vọng không âm là`,
        opts: ['0,39', '0,50', '0,54', '0,62'], ans: 'B', show: 'B. 0,50' }
    ] },


  // ===== Câu 3 — Lãi đơn vs lãi kép liên tục =====
  { min: 3,
    variants: [
      { text: r`Nhà đầu tư có 100 triệu đồng và cân nhắc hai lựa chọn: Tài sản 1 có lãi đơn $10\%$/năm (lãi không được nhập vào vốn); Tài sản 2 có lãi suất $7\%$/năm, ghép lãi liên tục. Với kỳ hạn n năm (n nguyên dương), giá trị n nhỏ nhất để tài sản 2 cho giá trị tích lũy cuối kỳ lớn hơn tài sản 1 là`,
        opts: ['n = 8', 'n = 9', 'n = 10', 'n = 11'], ans: 'C', show: 'C. n = 10' },
      { text: r`Nhà đầu tư có 100 triệu đồng và cân nhắc hai lựa chọn: Tài sản 1 có lãi đơn $15\%$/năm (lãi không được nhập vào vốn); Tài sản 2 có lãi suất $9\%$/năm, ghép lãi liên tục. Với kỳ hạn n năm (n nguyên dương), giá trị n nhỏ nhất để tài sản 2 cho giá trị tích lũy cuối kỳ lớn hơn tài sản 1 là`,
        opts: ['n = 9', 'n = 10', 'n = 11', 'n = 12'], ans: 'C', show: 'C. n = 11' },
      { text: r`Nhà đầu tư có 100 triệu đồng và cân nhắc hai lựa chọn: Tài sản 1 có lãi đơn $9\%$/năm (lãi không được nhập vào vốn); Tài sản 2 có lãi suất $6\%$/năm, ghép lãi liên tục. Với kỳ hạn n năm (n nguyên dương), giá trị n nhỏ nhất để tài sản 2 cho giá trị tích lũy cuối kỳ lớn hơn tài sản 1 là`,
        opts: ['n = 11', 'n = 12', 'n = 13', 'n = 14'], ans: 'C', show: 'C. n = 13' },
      { text: r`Nhà đầu tư có 100 triệu đồng và cân nhắc hai lựa chọn: Tài sản 1 có lãi đơn $12\%$/năm (lãi không được nhập vào vốn); Tài sản 2 có lãi suất $7\%$/năm, ghép lãi liên tục. Với kỳ hạn n năm (n nguyên dương), giá trị n nhỏ nhất để tài sản 2 cho giá trị tích lũy cuối kỳ lớn hơn tài sản 1 là`,
        opts: ['n = 13', 'n = 14', 'n = 15', 'n = 16'], ans: 'C', show: 'C. n = 15' }
    ] },


  // ===== Câu 4 — Xích Markov xu hướng giá cổ phiếu =====
  { min: 3,
    variants: [
      { text: r`Mỗi ngày giao dịch, giá một cổ phiếu thay đổi đúng $2\%$: hoặc tăng $2\%$, hoặc giảm $2\%$ so với ngày hôm trước. Ngày giao dịch thứ 1 là ngày giá tăng. Từ ngày thứ 2 trở đi, xu hướng đảo chiều so với ngày hôm trước (tăng sau ngày giảm, giảm sau ngày tăng) với xác suất 0,7 và giữ nguyên chiều với xác suất 0,3. Xác suất để ngày giao dịch thứ 4 là ngày giá tăng bằng`,
        opts: ['0,468', '0,532', '0,580', '0,420'], ans: 'A', show: 'A. 0,468' },
      { text: r`Mỗi ngày giao dịch, giá một cổ phiếu thay đổi đúng $2\%$: hoặc tăng $2\%$, hoặc giảm $2\%$ so với ngày hôm trước. Ngày giao dịch thứ 1 là ngày giá tăng. Từ ngày thứ 2 trở đi, xu hướng đảo chiều so với ngày hôm trước (tăng sau ngày giảm, giảm sau ngày tăng) với xác suất 0,6 và giữ nguyên chiều với xác suất 0,4. Xác suất để ngày giao dịch thứ 4 là ngày giá tăng bằng`,
        opts: ['0,496', '0,560', '0,608', '0,448'], ans: 'A', show: 'A. 0,496' },
      { text: r`Mỗi ngày giao dịch, giá một cổ phiếu thay đổi đúng $2\%$: hoặc tăng $2\%$, hoặc giảm $2\%$ so với ngày hôm trước. Ngày giao dịch thứ 1 là ngày giá tăng. Từ ngày thứ 2 trở đi, xu hướng đảo chiều so với ngày hôm trước (tăng sau ngày giảm, giảm sau ngày tăng) với xác suất 0,8 và giữ nguyên chiều với xác suất 0,2. Xác suất để ngày giao dịch thứ 4 là ngày giá tăng bằng`,
        opts: ['0,456', '0,504', '0,344', '0,392'], ans: 'D', show: 'D. 0,392' },
      { text: r`Mỗi ngày giao dịch, giá một cổ phiếu thay đổi đúng $2\%$: hoặc tăng $2\%$, hoặc giảm $2\%$ so với ngày hôm trước. Ngày giao dịch thứ 1 là ngày giá tăng. Từ ngày thứ 2 trở đi, xu hướng đảo chiều so với ngày hôm trước (tăng sau ngày giảm, giảm sau ngày tăng) với xác suất 0,75 và giữ nguyên chiều với xác suất 0,25. Xác suất để ngày giao dịch thứ 4 là ngày giá tăng bằng`,
        opts: ['0,4375', '0,5015', '0,5495', '0,3895'], ans: 'A', show: 'A. 0,4375' }
    ] },


  // ===== Câu 5 — Danh mục phương sai nhỏ nhất (3 tài sản) =====
  { min: 3,
    variants: [
      { text: r`Ba tài sản có độ lệch chuẩn lợi suất lần lượt là $\sigma_1=10\%$, $\sigma_2=20\%$, $\sigma_3=30\%$ và hệ số tương quan giữa mọi cặp tài sản đều bằng $\rho=0{,}5$. Nhà đầu tư được phép bán khống và lập danh mục w=(w1,w2,w3)T với w1+w2+w3=1 sao cho phương sai danh mục nhỏ nhất. Phương sai nhỏ nhất đó bằng`,
        opts: ['0,0081', '0,0084', '0,0100', '0,0096'], ans: 'D', show: 'D. 0,0096' },
      { text: r`Ba tài sản có độ lệch chuẩn lợi suất lần lượt là $\sigma_1=10\%$, $\sigma_2=15\%$, $\sigma_3=25\%$ và hệ số tương quan giữa mọi cặp tài sản đều bằng $\rho=0{,}4$. Nhà đầu tư được phép bán khống và lập danh mục w=(w1,w2,w3)T với w1+w2+w3=1 sao cho phương sai danh mục nhỏ nhất. Phương sai nhỏ nhất đó bằng`,
        opts: ['0,0078', '0,0080', '0,0096', '0,0092'], ans: 'D', show: 'D. 0,0092' },
      { text: r`Ba tài sản có độ lệch chuẩn lợi suất lần lượt là $\sigma_1=15\%$, $\sigma_2=20\%$, $\sigma_3=30\%$ và hệ số tương quan giữa mọi cặp tài sản đều bằng $\rho=0{,}4$. Nhà đầu tư được phép bán khống và lập danh mục w=(w1,w2,w3)T với w1+w2+w3=1 sao cho phương sai danh mục nhỏ nhất. Phương sai nhỏ nhất đó bằng`,
        opts: ['0,0165', '0,0171', '0,0204', '0,0196'], ans: 'D', show: 'D. 0,0196' },
      { text: r`Ba tài sản có độ lệch chuẩn lợi suất lần lượt là $\sigma_1=10\%$, $\sigma_2=25\%$, $\sigma_3=35\%$ và hệ số tương quan giữa mọi cặp tài sản đều bằng $\rho=0{,}5$. Nhà đầu tư được phép bán khống và lập danh mục w=(w1,w2,w3)T với w1+w2+w3=1 sao cho phương sai danh mục nhỏ nhất. Phương sai nhỏ nhất đó bằng`,
        opts: ['0,0079', '0,0082', '0,0098', '0,0094'], ans: 'D', show: 'D. 0,0094' }
    ] },


  // ===== Câu 6 — Giới hạn phương sai danh mục n tài sản =====
  { min: 4,
    variants: [
      { text: r`Xét n tài sản có phương sai bằng nhau $\sigma^2=0{,}05$ và hệ số tương quan mọi cặp bằng $\rho=0{,}2$. Nhà đầu tư phân bổ tỷ trọng tăng dần theo chỉ số:
$$w_i=\dfrac{i}{1+2+\cdots+n},\quad i=1,\dots,n.$$
Gọi V(n) là phương sai danh mục. Giá trị của
$$L=\lim_{n\to\infty}n\bigl(V(n)-\rho\sigma^2\bigr)$$
bằng`,
        opts: [r`$\dfrac{2}{75}$`, r`$\dfrac{1}{25}$`, r`$\dfrac{4}{75}$`, r`$\dfrac{1}{15}$`], ans: 'C', show: r`C. $\dfrac{4}{75}$` },
      { text: r`Xét n tài sản có phương sai bằng nhau $\sigma^2=0{,}10$ và hệ số tương quan mọi cặp bằng $\rho=0{,}2$. Nhà đầu tư phân bổ tỷ trọng tăng dần theo chỉ số:
$$w_i=\dfrac{i}{1+2+\cdots+n},\quad i=1,\dots,n.$$
Gọi V(n) là phương sai danh mục. Giá trị của
$$L=\lim_{n\to\infty}n\bigl(V(n)-\rho\sigma^2\bigr)$$
bằng`,
        opts: [r`$\dfrac{4}{75}$`, r`$\dfrac{2}{25}$`, r`$\dfrac{8}{75}$`, r`$\dfrac{2}{15}$`], ans: 'C', show: r`C. $\dfrac{8}{75}$` },
      { text: r`Xét n tài sản có phương sai bằng nhau $\sigma^2=0{,}15$ và hệ số tương quan mọi cặp bằng $\rho=0{,}25$. Nhà đầu tư phân bổ tỷ trọng tăng dần theo chỉ số:
$$w_i=\dfrac{i}{1+2+\cdots+n},\quad i=1,\dots,n.$$
Gọi V(n) là phương sai danh mục. Giá trị của
$$L=\lim_{n\to\infty}n\bigl(V(n)-\rho\sigma^2\bigr)$$
bằng`,
        opts: [r`$\dfrac{3}{40}$`, r`$\dfrac{9}{80}$`, r`$\dfrac{3}{20}$`, r`$\dfrac{3}{16}$`], ans: 'C', show: r`C. $\dfrac{3}{20}$` },
      { text: r`Xét n tài sản có phương sai bằng nhau $\sigma^2=0{,}04$ và hệ số tương quan mọi cặp bằng $\rho=0{,}4$. Nhà đầu tư phân bổ tỷ trọng tăng dần theo chỉ số:
$$w_i=\dfrac{i}{1+2+\cdots+n},\quad i=1,\dots,n.$$
Gọi V(n) là phương sai danh mục. Giá trị của
$$L=\lim_{n\to\infty}n\bigl(V(n)-\rho\sigma^2\bigr)$$
bằng`,
        opts: [r`$\dfrac{2}{125}$`, r`$\dfrac{3}{125}$`, r`$\dfrac{4}{125}$`, r`$\dfrac{1}{25}$`], ans: 'C', show: r`C. $\dfrac{4}{125}$` }
    ] },


  // ===== Câu 7 — Giá cổ phiếu là max của hai hàm, đếm số giao điểm =====
  { min: 4,
    variants: [
      { text: r`Giá một cổ phiếu P(x) (nghìn đồng) tại thời điểm $x\in[0,5]$ (tháng) chính là đường nằm trên của hai đường: đường xu hướng tăng trưởng 2x và đường hồi phục (x-4)2, tức là
$$P(x)=\max\{2^{x},\ (x-4)^{2}\},\quad x\in[0,5].$$
Gọi m và M lần lượt là mức giá thấp nhất và cao nhất của cổ phiếu trong 5 tháng đó. Có bao nhiêu số nguyên k thỏa $m\le k\le M$ sao cho đường giá cắt mức giá k (nghìn đồng) đúng hai lần, tức P(x)=k có đúng hai nghiệm phân biệt trên [0,5]?`,
        opts: ['11', '12', '13', '28'], ans: 'B', show: 'B. 12' },
      { text: r`Giá một cổ phiếu P(x) (nghìn đồng) tại thời điểm $x\in[0,4]$ (tháng) chính là đường nằm trên của hai đường: đường xu hướng tăng trưởng 2x và đường hồi phục (x-3)2, tức là
$$P(x)=\max\{2^{x},\ (x-3)^{2}\},\quad x\in[0,4].$$
Gọi m và M lần lượt là mức giá thấp nhất và cao nhất của cổ phiếu trong 4 tháng đó. Có bao nhiêu số nguyên k thỏa $m\le k\le M$ sao cho đường giá cắt mức giá k (nghìn đồng) đúng hai lần, tức P(x)=k có đúng hai nghiệm phân biệt trên [0,4]?`,
        opts: ['6', '7', '8', '14'], ans: 'B', show: 'B. 7' },
      { text: r`Giá một cổ phiếu P(x) (nghìn đồng) tại thời điểm $x\in[0,4]$ (tháng) chính là đường nằm trên của hai đường: đường xu hướng tăng trưởng 3x và đường hồi phục (x-4)2, tức là
$$P(x)=\max\{3^{x},\ (x-4)^{2}\},\quad x\in[0,4].$$
Gọi m và M lần lượt là mức giá thấp nhất và cao nhất của cổ phiếu trong 4 tháng đó. Có bao nhiêu số nguyên k thỏa $m\le k\le M$ sao cho đường giá cắt mức giá k (nghìn đồng) đúng hai lần, tức P(x)=k có đúng hai nghiệm phân biệt trên [0,4]?`,
        opts: ['10', '11', '12', '76'], ans: 'B', show: 'B. 11' },
      { text: r`Giá một cổ phiếu P(x) (nghìn đồng) tại thời điểm $x\in[0,6]$ (tháng) chính là đường nằm trên của hai đường: đường xu hướng tăng trưởng 2x và đường hồi phục (x-5)2, tức là
$$P(x)=\max\{2^{x},\ (x-5)^{2}\},\quad x\in[0,6].$$
Gọi m và M lần lượt là mức giá thấp nhất và cao nhất của cổ phiếu trong 6 tháng đó. Có bao nhiêu số nguyên k thỏa $m\le k\le M$ sao cho đường giá cắt mức giá k (nghìn đồng) đúng hai lần, tức P(x)=k có đúng hai nghiệm phân biệt trên [0,6]?`,
        opts: ['19', '20', '21', '59'], ans: 'B', show: 'B. 20' }
    ] },


  // ===== Câu 8 — Xích Markov, lợi ích trung bình dài hạn (tự luận ngắn) =====
  { min: 5,
    variants: [
      { text: r`Xét dãy $(X_t)_{t\ge0}$ nhận giá trị trong $\{1,2,3\}$ với ma trận xác suất chuyển
$$P=\begin{pmatrix}\tfrac12&\tfrac12&0\\[2pt]\tfrac12&0&\tfrac12\\[2pt]1&0&0\end{pmatrix},$$
trong đó $P_{ij}=P(X_{t+1}=j\mid X_t=i)$. Hàm thưởng $r:\{1,2,3\}\to\mathbb R$ xác định bởi r(1)=0, r(2)=8, r(3)=27. Đặt
$$G=\lim_{N\to\infty}\frac1N\,\mathbb E\Bigl[\sum_{t=1}^{N}r(X_t)\Bigr].$$
Tính G (viết dưới dạng phân số tối giản, ví dụ 3/5).`,
        num: 43 / 7, tol: 0.002, show: r`$\dfrac{43}{7}$` },
      { text: r`Xét dãy $(X_t)_{t\ge0}$ nhận giá trị trong $\{1,2,3\}$ với ma trận xác suất chuyển
$$P=\begin{pmatrix}\tfrac12&\tfrac12&0\\[2pt]\tfrac12&0&\tfrac12\\[2pt]1&0&0\end{pmatrix},$$
trong đó $P_{ij}=P(X_{t+1}=j\mid X_t=i)$. Hàm thưởng $r:\{1,2,3\}\to\mathbb R$ xác định bởi r(1)=0, r(2)=6, r(3)=20. Đặt
$$G=\lim_{N\to\infty}\frac1N\,\mathbb E\Bigl[\sum_{t=1}^{N}r(X_t)\Bigr].$$
Tính G (viết dưới dạng phân số tối giản, ví dụ 3/5).`,
        num: 32 / 7, tol: 0.002, show: r`$\dfrac{32}{7}$` },
      { text: r`Xét dãy $(X_t)_{t\ge0}$ nhận giá trị trong $\{1,2,3\}$ với ma trận xác suất chuyển
$$P=\begin{pmatrix}\tfrac12&\tfrac12&0\\[2pt]\tfrac12&0&\tfrac12\\[2pt]1&0&0\end{pmatrix},$$
trong đó $P_{ij}=P(X_{t+1}=j\mid X_t=i)$. Hàm thưởng $r:\{1,2,3\}\to\mathbb R$ xác định bởi r(1)=0, r(2)=9, r(3)=30. Đặt
$$G=\lim_{N\to\infty}\frac1N\,\mathbb E\Bigl[\sum_{t=1}^{N}r(X_t)\Bigr].$$
Tính G (viết dưới dạng phân số tối giản, ví dụ 3/5).`,
        num: 48 / 7, tol: 0.002, show: r`$\dfrac{48}{7}$` },
      { text: r`Xét dãy $(X_t)_{t\ge0}$ nhận giá trị trong $\{1,2,3\}$ với ma trận xác suất chuyển
$$P=\begin{pmatrix}\tfrac12&\tfrac12&0\\[2pt]\tfrac12&0&\tfrac12\\[2pt]1&0&0\end{pmatrix},$$
trong đó $P_{ij}=P(X_{t+1}=j\mid X_t=i)$. Hàm thưởng $r:\{1,2,3\}\to\mathbb R$ xác định bởi r(1)=0, r(2)=10, r(3)=24. Đặt
$$G=\lim_{N\to\infty}\frac1N\,\mathbb E\Bigl[\sum_{t=1}^{N}r(X_t)\Bigr].$$
Tính G (viết dưới dạng phân số tối giản, ví dụ 3/5).`,
        num: 44 / 7, tol: 0.002, show: r`$\dfrac{44}{7}$` }
    ] },


  // ===== Câu 9 — Giá trị danh mục giảm dần theo ODE, thời điểm cạn tiền =====
  { min: 5,
    variants: [
      { text: r`Giá trị danh mục V(t) (tỷ đồng, t tính theo năm) có V(0)=4. Tại mọi thời điểm, $50\%$ giá trị danh mục gửi vào tài sản phi rủi ro với lãi suất $4\%$/năm, $50\%$ còn lại đầu tư vào tài sản rủi ro có lợi suất $8\%$/năm; phí quản lý là $2\%\cdot V$ mỗi năm. Ngoài ra, mỗi năm nhà đầu tư rút đều 0,2 tỷ đồng để chi tiêu (xem như rút liên tục). Tốc độ thay đổi V'(t) bằng lợi nhuận tức thời trừ phí và trừ khoản rút. Tính thời điểm t* (năm) mà danh mục cạn tiền, tức V(t*)=0 (làm tròn đến 2 chữ số thập phân, dùng dấu chấm, ví dụ 12.34).`,
        num: 25 * Math.log(5), tol: 0.006, show: r`$25\ln 5\approx 40{,}24$` },
      { text: r`Giá trị danh mục V(t) (tỷ đồng, t tính theo năm) có V(0)=5. Tại mọi thời điểm, $40\%$ giá trị danh mục gửi vào tài sản phi rủi ro với lãi suất $3\%$/năm, $60\%$ còn lại đầu tư vào tài sản rủi ro có lợi suất $9\%$/năm; phí quản lý là $2\%\cdot V$ mỗi năm. Ngoài ra, mỗi năm nhà đầu tư rút đều 0,25 tỷ đồng để chi tiêu (xem như rút liên tục). Tốc độ thay đổi V'(t) bằng lợi nhuận tức thời trừ phí và trừ khoản rút. Tính thời điểm t* (năm) mà danh mục cạn tiền, tức V(t*)=0 (làm tròn đến 2 chữ số thập phân, dùng dấu chấm, ví dụ 12.34).`,
        num: (500 / 23) * Math.log(25 / 2), tol: 0.006, show: r`$\dfrac{500}{23}\ln\dfrac{25}{2}\approx 54{,}91$` },
      { text: r`Giá trị danh mục V(t) (tỷ đồng, t tính theo năm) có V(0)=5. Tại mọi thời điểm, $50\%$ giá trị danh mục gửi vào tài sản phi rủi ro với lãi suất $3\%$/năm, $50\%$ còn lại đầu tư vào tài sản rủi ro có lợi suất $9\%$/năm; phí quản lý là $1{,}5\%\cdot V$ mỗi năm. Ngoài ra, mỗi năm nhà đầu tư rút đều 0,3 tỷ đồng để chi tiêu (xem như rút liên tục). Tốc độ thay đổi V'(t) bằng lợi nhuận tức thời trừ phí và trừ khoản rút. Tính thời điểm t* (năm) mà danh mục cạn tiền, tức V(t*)=0 (làm tròn đến 2 chữ số thập phân, dùng dấu chấm, ví dụ 12.34).`,
        num: (400 / 9) * Math.log(2), tol: 0.006, show: r`$\dfrac{400}{9}\ln 2\approx 30{,}81$` },
      { text: r`Giá trị danh mục V(t) (tỷ đồng, t tính theo năm) có V(0)=6. Tại mọi thời điểm, $60\%$ giá trị danh mục gửi vào tài sản phi rủi ro với lãi suất $2\%$/năm, $40\%$ còn lại đầu tư vào tài sản rủi ro có lợi suất $8\%$/năm; phí quản lý là $1{,}4\%\cdot V$ mỗi năm. Ngoài ra, mỗi năm nhà đầu tư rút đều 0,24 tỷ đồng để chi tiêu (xem như rút liên tục). Tốc độ thay đổi V'(t) bằng lợi nhuận tức thời trừ phí và trừ khoản rút. Tính thời điểm t* (năm) mà danh mục cạn tiền, tức V(t*)=0 (làm tròn đến 2 chữ số thập phân, dùng dấu chấm, ví dụ 12.34).`,
        num: (200 / 3) * Math.log(2), tol: 0.006, show: r`$\dfrac{200}{3}\ln 2\approx 46{,}21$` }
    ] },


  // ===== Câu 10 — Truyền thông điệp qua nhiều người, xác suất hậu nghiệm =====
  { min: 5,
    variants: [
      { text: r`Sự kiện E = "dự án được phê duyệt" có xác suất tiên nghiệm $P(E)=60\%$. Người thứ 1 biết chính xác E có xảy ra hay không và truyền thông điệp "có"/"không" cho người thứ 2; người thứ 2 truyền cho người thứ 3, người thứ 3 truyền cho người thứ 4. Ở lần truyền thứ i (do người thứ i thực hiện), thông điệp bị đảo ngược ("có" thành "không" hoặc ngược lại) với xác suất $\dfrac{1}{2(i+1)^2}$, độc lập giữa các lần. Gọi M4 là thông điệp người thứ 4 nhận được. Tính $P(E\mid M_4=\text{có})$ (viết dưới dạng phân số tối giản, ví dụ 3/5).`,
        num: 13 / 15, tol: 0.0005, show: r`$\dfrac{13}{15}$` },
      { text: r`Sự kiện E = "dự án được phê duyệt" có xác suất tiên nghiệm $P(E)=50\%$. Người thứ 1 biết chính xác E có xảy ra hay không và truyền thông điệp "có"/"không" cho người thứ 2; người thứ 2 truyền cho người thứ 3, người thứ 3 truyền cho người thứ 4. Ở lần truyền thứ i (do người thứ i thực hiện), thông điệp bị đảo ngược ("có" thành "không" hoặc ngược lại) với xác suất $\dfrac{1}{2(i+1)^2}$, độc lập giữa các lần. Gọi M4 là thông điệp người thứ 4 nhận được. Tính $P(E\mid M_4=\text{có})$ (viết dưới dạng phân số tối giản, ví dụ 3/5).`,
        num: 13 / 16, tol: 0.0005, show: r`$\dfrac{13}{16}$` },
      { text: r`Sự kiện E = "dự án được phê duyệt" có xác suất tiên nghiệm $P(E)=70\%$. Người thứ 1 biết chính xác E có xảy ra hay không và truyền thông điệp "có"/"không" cho người thứ 2; người thứ 2 truyền cho người thứ 3, người thứ 3 truyền cho người thứ 4. Ở lần truyền thứ i (do người thứ i thực hiện), thông điệp bị đảo ngược ("có" thành "không" hoặc ngược lại) với xác suất $\dfrac{1}{2(i+1)^2}$, độc lập giữa các lần. Gọi M4 là thông điệp người thứ 4 nhận được. Tính $P(E\mid M_4=\text{có})$ (viết dưới dạng phân số tối giản, ví dụ 3/5).`,
        num: 91 / 100, tol: 0.0005, show: r`$\dfrac{91}{100}$` },
      { text: r`Sự kiện E = "dự án được phê duyệt" có xác suất tiên nghiệm $P(E)=75\%$. Người thứ 1 biết chính xác E có xảy ra hay không và truyền thông điệp "có"/"không" cho người thứ 2; người thứ 2 truyền cho người thứ 3, người thứ 3 truyền cho người thứ 4. Ở lần truyền thứ i (do người thứ i thực hiện), thông điệp bị đảo ngược ("có" thành "không" hoặc ngược lại) với xác suất $\dfrac{1}{2(i+1)^2}$, độc lập giữa các lần. Gọi M4 là thông điệp người thứ 4 nhận được. Tính $P(E\mid M_4=\text{có})$ (viết dưới dạng phân số tối giản, ví dụ 3/5).`,
        num: 13 / 14, tol: 0.0005, show: r`$\dfrac{13}{14}$` }
    ] }
];

