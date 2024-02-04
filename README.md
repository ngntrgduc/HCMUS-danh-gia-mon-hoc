# HCMUS-danh-gia-mon-hoc
Script giúp tự động đánh giá môn học trên Portal, giúp giảm gánh nặng cho đôi tay của bạn.

## Lưu ý
   - Script này sẽ đánh giá `toàn bộ lựa chọn giống nhau`, lưu lại và trở về màn hình chứa danh sách các môn học, không thể chỉnh sửa lại nên hãy chắc chắn rằng bạn muốn đánh giá **giống nhau cho tất cả lựa chọn** của môn học
   - Script này chỉ sử dụng được với học phần `lý thuyết` (do học phần thực hành có 1 số môn phải lựa chọn giảng viên để đánh giá), nếu muốn sử dụng ở học phần `thực hành` thì chỉ sử dụng dòng đầu tiên để đánh giá toàn bộ lựa chọn
   - Những phần đánh giá về cơ sở vật chất, nhà trường,... cho toàn bộ môn học sẽ giống với lựa chọn của môn học đầu tiên mà bạn đánh giá, nên đừng dại đánh giá full 1 sao cho môn đầu tiên nhé

## Hướng dẫn
- Truy cập [Portal](http://portal.hcmus.edu.vn/
), vô phần `Khảo sát/Đánh giá`, chọn môn học bạn muốn đánh giá
- Mở console trên trình duyệt bằng cách nhấn tổ hợp phím `Ctrl + Shift + i` hoặc nhấn phím `F12`, vào tab `console`
- Copy script ở dưới, paste vào `console` và nhấn `Enter`
```js
$("[id$='72057594046734038']").click(); // Chọn mức độ 5 (cao nhất) cho tất cả lựa chọn có ở môn học
$('#btnSave').trigger('click'); // Nhấn vô nút "Hoàn tất" để lưu lại đánh giá
$('#btnBackToList').trigger('click'); // Nhấn vô nút "Danh sách" để trở về trang chứa danh sách môn học
```

## Một số tuỳ chỉnh khác
- Nếu muốn đánh giá ở mức độ `4, 3, 2, 1` thì lần lượt thay chữ số `8` cuối cùng của dãy số ở dòng đầu tiên bằng chữ số `7, 6, 5, 4`
```js    
$("[id$='72057594046734037']").click(); // mức độ 4

$("[id$='72057594046734036']").click(); // mức độ 3

$("[id$='72057594046734035']").click(); // mức độ 2

$("[id$='72057594046734034']").click(); // mức độ 1
```

- Nếu muốn đánh giá phần lớn lựa chọn ở một mức độ cụ thể và muốn **điều chỉnh 1 số lựa chọn khác** thì bạn chỉ cần sử dụng dòng đầu tiên ở đoạn script trên. Như vậy thì script sẽ không lưu lại đánh giá và không trở về trang danh sách môn học
```js 
$("[id$='72057594046734038']").click(); // Chọn mức độ 5 (cao nhất) cho tất cả lựa chọn có ở môn học
```
