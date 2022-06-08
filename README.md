# HCMUS-danh-gia-mon-hoc
Script giúp tự động đánh giá môn học trên Portal

## Hướng dẫn
- Truy cập [Portal](http://portal.hcmus.edu.vn/
), vô phần `Khảo sát/Đánh giá`, chọn môn học bạn muốn đánh giá
- Mở console trên trình duyệt bằng cách nhấn tổ hợp phím `Ctrl + Shift + i` hoặc nhấn phím `F12`, vào tab **`console`**
- Paste script ở dưới vào `console` và nhấn `Enter`

### Lưu ý:
   - Script này sẽ đánh giá `toàn bộ lựa chọn giống nhau`, lưu lại và trở về màn hình chứa danh sách các môn học, không thể chỉnh sửa lại nên hãy chắc chắn rằng bạn muốn đánh giá giống nhau cho tất cả lựa chọn của môn học
   - Script này chỉ sử dụng được với học phần `lý thuyết`, nếu muốn sử dụng ở học phần `thực hành` thì chỉ sử dụng dòng đầu tiên để đánh giá toàn bộ lựa chọn 
---
```js
$("[id$='72057594046734038']").click(); // Chọn mức độ 5 (cao nhất) cho tất cả lựa chọn có ở môn học
for (let i = 0; i < 8; i++) {$('#bnyu4wLxFxFHxCvLtLsHH').trigger('click');} // Chuyển tới trang cuối cùng bằng cách nhấn "Tiếp"
$('#btnSave').trigger('click'); // Nhấn vô nút "Hoàn tất" để lưu lại đánh giá
$('#btnBackToList').trigger('click'); // Nhấn vô nút "Danh sách" để trở về trang chứa danh sách môn học
```
---
- Nếu muốn đánh giá ở mức độ `4, 3, 2, 1` thì lần lượt thay số `8` cuối cùng ở dòng đầu tiên bằng số `7, 6, 5, 4`
```js    
$("[id$='72057594046734037']").click(); // mức độ 4

$("[id$='72057594046734036']").click(); // mức độ 3

$("[id$='72057594046734035']").click(); // mức độ 2

$("[id$='72057594046734034']").click(); // mức độ 1
```

- Nếu bạn muốn đánh giá phần lớn lựa chọn ở một mức độ cụ thể và muốn điều chỉnh 1 số lựa chọn khác thì bạn có thể bỏ 2 dòng cuối cùng ở đoạn script trên
```js 
$('#btnSave').trigger('click');
$('#btnBackToList').trigger('click'); 
```
như vậy thì script sẽ chỉ chuyển tới trang cuối mà không lưu lại và trở về trang danh sách môn học

- Nếu bạn muốn ở lại trang đánh giá đầu tiên mà không phải chuyển tới trang cuối thì xoá đoạn code này
```js 
for (let i = 0; i < 8; i++) {$('#bnyu4wLxFxFHxCvLtLsHH').trigger('click');}
```
