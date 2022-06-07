// Đánh giá 5 sao
$("[id$='72057594046734038']").click();

// Nhấn vô nút "Tiếp"
$('#bnyu4wLxFxFHxCvLtLsHH').trigger('click');

// Nhấn vô nút "Hoàn tất"
$('#btnSave').trigger('click');

// Nhấn vô nút "Danh sách" để trở về
$('#btnBackToList').trigger('click');

// Tự động đánh giá và trở về danh sách học phần
$("[id$='72057594046734038']").click();
for (let i = 0; i < 8; i++) {$('#bnyu4wLxFxFHxCvLtLsHH').trigger('click');}
$('#btnSave').trigger('click');
$('#btnBackToList').trigger('click');

// Thêm đánh giá cho textarea đối với câu hỏi : "Đánh giá mức độ hài lòng về cơ sở vật chất phục vụ dạy và học thực hành/thực tập"
document.getElementById("72057594047108174").value += "Hài lòng";

// Comming soon ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
let monHoc = document.querySelectorAll("td:nth-child(4)");
let danhGia = document.querySelectorAll("td:nth-child(6)");
let soMonHoc = monHoc.length - 3;
console.log(soMonHoc)

// Kiếm tra cái nào chưa đánh giá, cái nào dã đánh giá
for (let i = 0; i < soMonHoc; i++) {
    if (danhGia[i].innerText.includes("Đánh Giá")) {
        console.log(monHoc[i].innerText + " chưa đánh giá");
    } else if (danhGia[i].innerText.includes("Xem Kết Quả")) {
        console.log(monHoc[i].innerText + " đã đánh giá");
    }
}

let mucDo = [];
for (let i = 0; i < soMonHoc; i++) {
    const input = prompt("Mức độ đánh giá cho " + monHoc[i].innerText +" trên thang từ 1 tới 5 : ");
    mucDo[i] = parseInt(input);
    console.log("Đánh giá mức độ " + mucDo[i] + " cho môn " + monHoc[i].innerText);
}