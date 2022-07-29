var submitFlg = 0; // 莠悟ｺｦ謚ｼ縺礼ｦ∵ｭ｢逕ｨ繝輔Λ繧ｰ
function submitForm() {
  if (submitFlg == 0) {
    submitFlg = 1;
    document.forms[0].submit();
  }
}
$(function () {
  console.log($("#privilege .select_detail").text().trim());
  if ($("#privilege .select_detail").text().trim() == "")
    $("#privilege").hide();
});
1;
