// Lấy tất cả các phần tử <a> trong navbar
const navLinks = document.querySelectorAll(".navbar a");

// Lặp qua các phần tử và thêm sự kiện click
navLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    // Loại bỏ lớp "active" khỏi tất cả các liên kết
    navLinks.forEach((link) => link.classList.remove("active"));

    // Thêm lớp "active" vào liên kết được nhấp chuột
    event.target.classList.add("active");
  });
});