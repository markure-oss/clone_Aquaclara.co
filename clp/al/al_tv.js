$(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 800) {
      $("#head_apply").fadeIn(500);
    } else {
      $("#head_apply").fadeOut(300);
    }
  });
});
