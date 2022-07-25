$(function () {
  var lsrh = location.search;
  lsrh = lsrh.replace("?", "");
  var lsrhs = lsrh.split("&");
  var parms = {};

  lsrhs.forEach(function (val) {
    var _tmp = val.split("=");
    if (
      !(
        _tmp[0] == "ui_agency" ||
        _tmp[0] == "ui_campaign" ||
        _tmp[0] == "ui_medium" ||
        _tmp[0] == "ui_source" ||
        _tmp[0] == "apadcode" ||
        _tmp[0] == "lpmcode" ||
        _tmp[0] == "hset" ||
        _tmp[0] == "drtroute" ||
        _tmp[0] == "drtcode" ||
        _tmp[0] == "apadcode" ||
        _tmp[0] == "drtpg" ||
        _tmp[0] == "argument" ||
        _tmp[0] == "dmai" ||
        _tmp[0] == "waad"
      )
    ) {
      parms[_tmp[0]] = _tmp[1];
    }
  });

  //console.log(parms);

  $.post("/itpp/", parms).fail(function (data) {
    console.log(data);
  });
});
1;
