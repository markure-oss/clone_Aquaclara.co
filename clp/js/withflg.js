$(function () {
  var allow_apcode = ["aid001378", "aid001596", "aid002310", "aid002503"];
  var deny_apcode = ["aid002558"];

  var elm_a = $("a");
  var a_num = [];

  function get_slice(_parms) {
    var _indx, _key, _val;
    var _get_parms = [];
    for (var i = 0; i < _parms.length; i++) {
      _indx = _parms[i].indexOf("=");
      if (_indx > 0) {
        _key = _parms[i].substring(0, _indx);
        _val = _parms[i].substring(_indx + 1);
        _get_parms[_key] = _val;
      }
    }
    return _get_parms;
  }

  function set_with(_elm, _num, _wtihflag) {
    //URL 螟画峩
    for (var i = 0; i < _num.length; i++) {
      _elm
        .eq(_num[i])
        .attr("href", _elm.eq(_num[i]).attr("href") + "&withfst=" + _wtihflag);
    }

    //陦ｨ遉ｺ蛻ｶ蠕｡
    if (_wtihflag == "1") {
      $(".with_first_set").show();
      $(".first_set").hide();
    } else {
      $(".with_first_set").hide();
      $(".first_set").show();
    }
  }

  for (var i = 0; i < elm_a.length; i++) {
    if (elm_a.eq(i).attr("href").indexOf("/webform/") != -1) {
      a_num.push(i);
    }
  }

  if (a_num.length > 0) {
    var parm = elm_a.eq(a_num[0]).attr("href").split("?");
    parm = parm[1].split("&");
    var parms = get_slice(parm);

    if (allow_apcode.indexOf(parms["agent"]) >= 0) set_with(elm_a, a_num, "1");
    else if (deny_apcode.indexOf(parms["agent"]) >= 0)
      set_with(elm_a, a_num, "0");
    else $(".with_first_set").hide();
  }
});
1;
