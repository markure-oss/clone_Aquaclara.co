$(function () {
  var i, j, k;

  function ziperror(_e_text) {
    $("#zipCode_e").hide();
    $("#ziperr").show();
    $("#ziperr").text(_e_text);
  }

  //繧､繝吶Φ繝亥�逅�
  $("#zip_bn").on("click", function () {
    var zip_no = $("input[name=zip_no]").val().trim();
    $("#ziperr").hide();
    // if ( $('#zip_no_error').size() > 0 ) $('#zip_no_error').remove()
    if (zip_no === "") {
      ziperror("驛ｵ萓ｿ逡ｪ蜿ｷ繧貞�蜉帙＠縺ｦ縺上□縺輔＞縲�");
    } else if (zip_no.length != 7) {
      ziperror("蜊願ｧ呈焚蟄�7譁�ｭ励〒蜈･蜉帙＠縺ｦ縺上□縺輔＞縲�");
    } else if (!zip_no.match(/^[0-9]+$/)) {
      ziperror("蜊願ｧ呈焚蟄�7譁�ｭ励〒蜈･蜉帙＠縺ｦ縺上□縺輔＞縲�");
    } else {
      $.get(
        "/zipcode/addr.php",
        {
          pcode: $("input[name=zip_no]").val(),
          prefecture: $("select[name=prefecture]").val(),
        },
        function (rs) {
          var addr = rs.split(",");
          if (addr.length == 3) {
            $("select[name=prefecture]").val(addr[0]);
            $("input[name=address]").val(addr[2]);
          } else {
            ziperror("隧ｲ蠖薙☆繧倶ｽ乗園縺瑚ｦ九▽縺九ｊ縺ｾ縺帙ｓ縺ｧ縺励◆縲�");
          }
        }
      );
    }
  });
});
1;
