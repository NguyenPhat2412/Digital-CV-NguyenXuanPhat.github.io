"use strict";
"use strict";

// 📌 DOM Elements
const importBtn = document.getElementById("import-btn");
const exportBtn = document.getElementById("export-btn");
const fileInput = document.getElementById("input-file");

// 📤 **EXPORT DATA (Tải file JSON)**
exportBtn.addEventListener("click", function () {
  const jsonData = JSON.stringify(petArr, null, 2); // Format JSON đẹp hơn
  const blob = new Blob([jsonData], { type: "application/json" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "pet_data.json"; // Đặt tên file tải xuống
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  alert("Export thành công! File đã được tải xuống.");
});

// 📥 **IMPORT DATA (Đọc file JSON & cập nhật)**
importBtn.addEventListener("click", function () {
  const file = fileInput.files[0];

  if (!file) {
    alert("Vui lòng chọn file JSON để nhập dữ liệu.");
    return;
  }

  const reader = new FileReader();
  reader.onload = function (event) {
    try {
      const importedData = JSON.parse(event.target.result);

      // Kiểm tra dữ liệu hợp lệ
      if (!Array.isArray(importedData)) {
        throw new Error("Dữ liệu không đúng định dạng!");
      }

      // Kiểm tra từng đối tượng trong danh sách
      importedData.forEach((pet) => {
        if (!pet.id || !pet.name || !pet.type || !pet.breed || !pet.date) {
          throw new Error("Dữ liệu không hợp lệ! Một số trường bị thiếu.");
        }
      });

      // Thêm dữ liệu mới vào danh sách hiện tại
      petArr = [...petArr, ...importedData];

      alert("Import thành công! Dữ liệu đã được cập nhật.");
    } catch (error) {
      alert("Lỗi khi nhập dữ liệu: " + error.message);
    }
  };

  reader.readAsText(file);
});
