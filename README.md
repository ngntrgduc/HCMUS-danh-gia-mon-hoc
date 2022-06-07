# HCMUS-danh-gia-mon-hoc
Script giúp tự động đánh giá môn học trên Portal


## Hướng dẫn
- Truy cập [Portal](http://portal.hcmus.edu.vn/
), vô phần `Khảo sát/Đánh giá`
- Mở `console` trên trình duyệt bằng cách nhấn tổ hợp phím `Ctrl + Shift + i` hoặc nhấn phím `F12`, vào tab **`console`**
- Paste script ở dưới vào console và nhấn `Enter`
**Lưu ý**: script này sẽ tích toàn bộ lựa chọn và lưu lại rồi trở về màn hình chứa danh sách các môn học, không thể hoàn tác nên hãy cẩn thận khi sử dụng script này :v 
```js
$("[id$='72057594046734038']").click(); // Chọn mức độ 5 cho tất cả lựa chọn có ở môn học
for (let i = 0; i < 8; i++) {$('#bnyu4wLxFxFHxCvLtLsHH').trigger('click');} // Chuyển hướng tới trang cuối cùng bằng cách nhấn "Tiếp"
$('#btnSave').trigger('click'); // Nhấn vô nút "Hoàn tất" để lưu lại đánh giá
$('#btnBackToList').trigger('click'); // Nhấn vô nút "Danh sách" để trở về trang chứa danh sách môn học
```
> Note: Nếu muốn đánh giá full `4, 3, 2, 1 sao` thì lần lượt thay số `8` cuối cùng ở dòng đầu tiên bằng số `7, 6, 5, 4`
```js    
$("[id$='72057594046734037']").click(); // 4 sao

$("[id$='72057594046734036']").click(); // 3 sao

$("[id$='72057594046734035']").click(); // 2 sao

$("[id$='72057594046734034']").click(); // 1 sao
```

- Nếu bạn muốn đánh giá phần lớn là 5 (hoặc những mức độ khác) và muốn điều chỉnh 1 số lựa chọn khác thì bạn có thể bỏ 2 dòng cuối cùng ở đoạn script trên
```js 
$('#btnSave').trigger('click');
$('#btnBackToList').trigger('click'); 
```
như vậy thì script sẽ chỉ chạy tới trang cuối cùng mà không nhấn hoàn tất và trở về trang danh sách môn học.

- Nếu bạn muốn ở lại trang đánh giá ban đầu mà không phải đi tới trang cuối thì xoá đoạn code này
```js 
for (let i = 0; i < 8; i++) {$('#bnyu4wLxFxFHxCvLtLsHH').trigger('click');}
```






<!-- 1. I. CƠ SỞ VẬT CHẤT PHỤC VỤ DẠY VÀ HỌC TRỰC TUYẾN 
2. I. CƠ SỞ VẬT CHẤT PHỤC VỤ DẠY VÀ HỌC TRỰC TUYẾN (câu hỏi mở)
3. II. MÔN HỌC 
4. III. CHƯƠNG TRÌNH
   A. VỀ GIẢNG DẠY VÀ ĐÀO TẠO
5. A. VỀ GIẢNG DẠY VÀ ĐÀO TẠO (Câu hỏi mở)
6. III. CHƯƠNG TRÌNH
   B. VỀ ĐÁNH GIÁ VÀ TỔ CHỨC THI
7. B. VỀ ĐÁNH GIÁ VÀ TỔ CHỨC THI (Câu hỏi mở)
8. IV. ĐÁNH GIÁ CHUNG
9. V. CÂU HỎI MỞ -->