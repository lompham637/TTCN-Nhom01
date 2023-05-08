const menuBtn = document.querySelector(".menu-btn i");
const menu = document.querySelector(".menu");

menuBtn.onclick = function () {
  menu.classList.toggle("show");
  menuBtn.classList.toggle("fa-close");
};

$(document).ready(function () {
  $("#banner .box").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: `<button type="button" class="slick-prev">
        <i class="fa fa-angle-left"></i>
      </button>`,
    nextArrow: `<button type="button" class="slick-next">
        <i class="fa fa-angle-right"></i>
      </button>`,
  });
});
