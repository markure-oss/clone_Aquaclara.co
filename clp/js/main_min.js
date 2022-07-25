$(function () {
  var a = $(".top_order_btn");
  a.hide();
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      a.fadeIn();
    } else {
      a.fadeOut();
    }
  });
  $(".tab_label").on("click", function () {
    var m = $(this).index();
    $(this).fadeIn(700);
    $(".tab_label").removeClass("active");
    $(".tab_panel").removeClass("active");
    $(this).addClass("active");
    $(".tab_panel").eq(m).addClass("active");
    $(".slider1, .slider2, .slider3, .slider4, .slider5").slick("setPosition");
  });
  var k = ".slider1";
  var j = ".slider1_nav .slider1_nav_item";
  $(j).each(function () {
    var m = $(j).index(this);
    $(this).attr("data-index", m);
  });
  $(k).on("init", function (n) {
    var m = $(".slide-item.slick-slide.slick-current").attr("data-slick-index");
    $(j + '[data-index="' + m + '"]').addClass("thumbnail-current");
  });
  $(k).slick({
    lazyLoad: "ondemand",
    autoplay: false,
    arrows: true,
    appendArrows: $(".arrows1"),
    prevArrow:
      '<div><img src="/clp/inc/img/arrow_prev.png" class="slide-arrow prev-arrow"></div>',
    nextArrow:
      '<div><img src="/clp/inc/img/arrow_next.png" class="slide-arrow next-arrow"></div>',
    fade: true,
    swipe: true,
    infinite: true,
  });
  $(j).on("click", function () {
    var m = $(this).attr("data-index");
    $(k).slick("slickGoTo", m, false);
  });
  $(k).on("beforeChange", function (n, m, p, o) {
    $(j).each(function () {
      $(this).removeClass("thumbnail-current");
    });
    $(j + '[data-index="' + o + '"]').addClass("thumbnail-current");
  });
  var i = ".slider2";
  var h = ".slider2_nav .slider2_nav_item";
  $(h).each(function () {
    var m = $(h).index(this);
    $(this).attr("data-index", m);
  });
  $(i).on("init", function (n) {
    var m = $(".slide-item.slick-slide.slick-current").attr("data-slick-index");
    $(h + '[data-index="' + m + '"]').addClass("thumbnail-current");
  });
  $(i).slick({
    lazyLoad: "ondemand",
    autoplay: false,
    arrows: true,
    appendArrows: $(".arrows2"),
    prevArrow:
      '<div><img src="/clp/inc/img/arrow_prev.png" class="slide-arrow prev-arrow"></div>',
    nextArrow:
      '<div><img src="/clp/inc/img/arrow_next.png" class="slide-arrow next-arrow"></div>',
    fade: true,
    swipe: true,
    infinite: true,
  });
  $(h).on("click", function () {
    var m = $(this).attr("data-index");
    $(i).slick("slickGoTo", m, false);
  });
  $(i).on("beforeChange", function (n, m, p, o) {
    $(h).each(function () {
      $(this).removeClass("thumbnail-current");
    });
    $(h + '[data-index="' + o + '"]').addClass("thumbnail-current");
  });
  var g = ".slider3";
  var f = ".slider3_nav .slider3_nav_item";
  $(f).each(function () {
    var m = $(f).index(this);
    $(this).attr("data-index", m);
  });
  $(g).on("init", function (n) {
    var m = $(".slide-item.slick-slide.slick-current").attr("data-slick-index");
    $(f + '[data-index="' + m + '"]').addClass("thumbnail-current");
  });
  $(g).slick({
    lazyLoad: "ondemand",
    autoplay: false,
    arrows: true,
    appendArrows: $(".arrows3"),
    prevArrow:
      '<div><img src="/clp/inc/img/arrow_prev.png" class="slide-arrow prev-arrow"></div>',
    nextArrow:
      '<div><img src="/clp/inc/img/arrow_next.png" class="slide-arrow next-arrow"></div>',
    fade: true,
    swipe: true,
    infinite: true,
  });
  $(f).on("click", function () {
    var m = $(this).attr("data-index");
    $(g).slick("slickGoTo", m, false);
  });
  $(g).on("beforeChange", function (n, m, p, o) {
    $(f).each(function () {
      $(this).removeClass("thumbnail-current");
    });
    $(f + '[data-index="' + o + '"]').addClass("thumbnail-current");
  });
  var e = ".slider4";
  var d = ".slider4_nav .slider4_nav_item";
  $(d).each(function () {
    var m = $(d).index(this);
    $(this).attr("data-index", m);
  });
  $(e).on("init", function (n) {
    var m = $(".slide-item.slick-slide.slick-current").attr("data-slick-index");
    $(d + '[data-index="' + m + '"]').addClass("thumbnail-current");
  });
  $(e).slick({
    lazyLoad: "ondemand",
    autoplay: false,
    arrows: true,
    appendArrows: $(".arrows4"),
    prevArrow:
      '<div><img src="/clp/inc/img/arrow_prev.png" class="slide-arrow prev-arrow"></div>',
    nextArrow:
      '<div><img src="/clp/inc/img/arrow_next.png" class="slide-arrow next-arrow"></div>',
    fade: true,
    swipe: true,
    infinite: true,
  });
  $(d).on("click", function () {
    var m = $(this).attr("data-index");
    $(e).slick("slickGoTo", m, false);
  });
  $(e).on("beforeChange", function (n, m, p, o) {
    $(d).each(function () {
      $(this).removeClass("thumbnail-current");
    });
    $(d + '[data-index="' + o + '"]').addClass("thumbnail-current");
  });
  var c = ".slider5";
  var b = ".slider5_nav .slider5_nav_item";
  $(b).each(function () {
    var m = $(b).index(this);
    $(this).attr("data-index", m);
  });
  $(c).on("init", function (n) {
    var m = $(".slide-item.slick-slide.slick-current").attr("data-slick-index");
    $(b + '[data-index="' + m + '"]').addClass("thumbnail-current");
  });
  $(c).slick({
    lazyLoad: "ondemand",
    autoplay: false,
    arrows: true,
    appendArrows: $(".arrows5"),
    prevArrow:
      '<div><img src="/clp/inc/img/arrow_prev.png" class="slide-arrow prev-arrow"></div>',
    nextArrow:
      '<div><img src="/clp/inc/img/arrow_next.png" class="slide-arrow next-arrow"></div>',
    fade: true,
    swipe: true,
    infinite: true,
  });
  $(b).on("click", function () {
    var m = $(this).attr("data-index");
    $(c).slick("slickGoTo", m, false);
  });
  $(c).on("beforeChange", function (n, m, p, o) {
    $(b).each(function () {
      $(this).removeClass("thumbnail-current");
    });
    $(b + '[data-index="' + o + '"]').addClass("thumbnail-current");
  });
  $(".spec_switch").on("click", function () {
    $(this).toggleClass("spec_open");
    $(this).next(".spec_contents").slideToggle();
  });
  $(".Manga1BoxSp").slick({
    lazyLoad: "ondemand",
    infinite: false,
    autoplay: false,
    speed: 200,
    centerMode: true,
    centerPadding: "20px",
    slidesToShow: 1,
    swipe: true,
    arrows: false,
    dots: true,
    dotsClass: "slide-dots",
  });
  $(".Manga2BoxSp").slick({
    lazyLoad: "ondemand",
    infinite: false,
    autoplay: false,
    speed: 200,
    centerMode: true,
    centerPadding: "20px",
    slidesToShow: 1,
    swipe: true,
    arrows: false,
    dots: true,
    dotsClass: "slide-dots",
  });
  $(".Manga3BoxSp").slick({
    lazyLoad: "ondemand",
    infinite: false,
    autoplay: false,
    speed: 200,
    centerMode: true,
    centerPadding: "20px",
    slidesToShow: 1,
    swipe: true,
    arrows: false,
    dots: true,
    dotsClass: "slide-dots",
  });
  $(".toggle_switch").on("click", function () {
    $(this).toggleClass("open");
    $(this).next(".toggle_contents").slideToggle();
  });
  $(window).scroll(function () {
    $(".fadein").each(function () {
      var n = $(this).offset().top;
      var m = $(window).scrollTop();
      var o = $(window).height();
      if (m > n - o + 100) {
        $(this).css("opacity", "1");
        $(this).css("transform", "translateY(0)");
      }
    });
  });
  var l = $(".UpBtn");
  l.hide();
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      l.fadeIn();
    } else {
      l.fadeOut();
    }
  });
  l.click(function () {
    $("body,html").animate({ scrollTop: 0 }, 500);
    return false;
  });
});
1;
