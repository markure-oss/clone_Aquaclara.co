$(function () {
  var Common_ctr = function Common_ctr() {
    this.error_text =
      "このページから移動しますか？ 入力したデータは保存されません。";
  };
  Common_ctr.prototype = {
    window_out: function () {
      $(window).on("beforeunload", function () {
        return "このページから移動しますか？ 入力したデータは保存されません。";
      });
    },
    window_out_stop: function (_elm_name) {
      $(_elm_name).on("click", function () {
        $(window).off("beforeunload");
      });
    },
  };

  $('a[href="#top"]').on("click", function () {
    $("body, html").animate(
      {
        scrollTop: "0",
      },
      300,
      "swing"
    );
  });

  //初期設定
  var common_ctr = new Common_ctr();
  common_ctr.window_out();
  common_ctr.window_out_stop(".btn_area");
});
