$(function () {
  var ApplySelectData = function () {
    this.ApSel = {
      apply: "",
      server: "",
      panel: "",
      bottle: "",
      plan: "",
      panelname: "",
    };
    this.ApRelation = {
      new: {
        server: ["16", "17", "19", "3", "14", "9"],
        bottle: ["12l", "7l"],
        plan: ["14", "13", "10"],
      },
      ktry: {
        server: ["3", "14", "16", "17"],
        bottle: ["12l", "7l"],
        plan: ["0"],
      },
      try: {
        server: ["3", "14"],
        bottle: ["12l"],
        plan: ["0"],
      },
    };
    this.ServMaster = {
      3: { fee: [1100, 1100], panel: ["3"] },
      14: { fee: [1100, 1100], panel: ["94"] },
      9: {
        fee: [1430, 1650],
        panel: ["111", "112", "113", "114", "115", "116", "117"],
      },
      16: { fee: [1430, 1650], panel: ["105"] },
      17: { fee: [1430, 1650], panel: ["106"] },
      19: { fee: [2200, 3300], panel: ["108", "118"] },
    };
    this.PanelMaster = {
      3: "slim",
      9: "mypane",
      94: "slims",
      105: "fab_w",
      106: "fab_b",
      108: "with_b",
      118: "with_d",
    };
    this.BottleMaster = {
      "12l": { fee: [1404, 1512] },
      "7l": { fee: [1080, 1188] },
    };
    this.WithRoute = {
      "01": "0",
      "06": "1",
      14: "0",
      21: "0",
      25: "1",
      26: "1",
      28: "1",
      29: "1",
      31: "1",
      flag: "0",
    };
    this.UrlParms = {};
    this.KtryBottleFee = 2700;
    this.CampaignCode;
  };
  ApplySelectData.prototype = {
    load: function (_parms) {
      var _tmp_array;
      for (var i = 0; i < _parms.length; i++) {
        _tmp_array = _parms[i].split("=");
        this.UrlParms[_tmp_array[0]] = _tmp_array[1];
      }

      if (this.UrlParms["withfst"] != undefined) {
        this.WithRoute.flag = this.UrlParms["withfst"];
        $("#with_route").val(this.WithRoute.flag);
      } else {
        if (
          $("#p_agent").val() == "aid002660" ||
          $("#p_agent").val() == "aid002661"
        ) {
          //イレギュラー処理（コラージュ）
          this.WithRoute.flag = "1";
        } else {
          if ($("#with_route").val() != "")
            this.WithRoute.flag = $("#with_route").val();
          else {
            $("#with_route").val(this.WithRoute[this.UrlParms["route"]]);
            this.WithRoute.flag = $("#with_route").val();
          }
        }
      }
      this.CampaignCode = $("#campaignCode").val();
    },
    record: function (_flag) {
      if (_flag == undefined) _flag = 0;
      var _apply_elements = $('#apply_select input[name="applyType"]');
      var _server_elements = $('#server_select input[name="serverType"]');
      var _panel_elements = $('#panel_select input[name="serverColor"]');
      var _bottle_elements = $('#bottle_select input[name="bottleType"]');
      var _plan_elements = $('#plan_select input[name="babyaquaBonus"]');
      var _tmp_array;
      var _fstsel = function (_input_elements, _select_num) {
        for (var i = 0; i < _input_elements.length; i++) {
          if (_input_elements.eq(i).val() == _select_num) {
            _input_elements.eq(i).prop("checked", true);
            break;
          }
        }
      };

      if (_flag == 1 && this.UrlParms["fstsel"] != undefined)
        _tmp_array = this.UrlParms["fstsel"].split(",");

      //区分
      if (_tmp_array != undefined && _tmp_array[0] != "")
        _fstsel(_apply_elements, _tmp_array[0]);
      if (_apply_elements.filter("input:checked").val() == undefined)
        _apply_elements.eq(0).prop("checked", true);
      this.ApSel.apply = _apply_elements.filter("input:checked").val();
      //サーバー
      if (_tmp_array != undefined && _tmp_array[1] != "")
        _fstsel(_server_elements, _tmp_array[1]);
      var _type_server = this.ApRelation[this.ApSel.apply].server;
      if (_server_elements.filter("input:checked").val() == undefined)
        _server_elements.eq(0).prop("checked", true);
      if (
        $.inArray(
          _server_elements.filter("input:checked").val(),
          _type_server
        ) == -1
      ) {
        for (var i = 0; i < _server_elements.length; i++) {
          if (_server_elements.eq(i).val() == _type_server[0]) {
            _server_elements.eq(i).prop("checked", true);
            break;
          }
        }
      }
      this.ApSel.server = _server_elements.filter("input:checked").val();
      //パネル
      if (_tmp_array != undefined && _tmp_array[2] != "")
        _fstsel(_panel_elements, _tmp_array[2]);
      if (
        $.inArray(
          _panel_elements.filter("input:checked").val(),
          this.ServMaster[this.ApSel.server].panel
        ) == -1
      ) {
        loop: for (var i = 0; i < _panel_elements.length; i++) {
          for (
            var j = 0;
            j < this.ServMaster[this.ApSel.server].panel.length;
            j++
          ) {
            if (
              _panel_elements.eq(i).val() ==
              this.ServMaster[this.ApSel.server].panel[j]
            ) {
              _panel_elements.eq(i).prop("checked", true);
              break loop;
            }
          }
        }
      }
      this.ApSel.panel = _panel_elements.filter("input:checked").val();
      //ボトル
      if (_tmp_array != undefined && _tmp_array[3] != "")
        _fstsel(_bottle_elements, _tmp_array[3]);
      var _type_bottle = this.ApRelation[this.ApSel.apply].bottle;
      if (_bottle_elements.filter("input:checked").val() == undefined)
        _bottle_elements.eq(0).prop("checked", true);
      if (
        $.inArray(
          _bottle_elements.filter("input:checked").val(),
          _type_bottle
        ) == -1
      ) {
        for (var i = 0; i < _bottle_elements.length; i++) {
          if (_bottle_elements.eq(i).val() == _type_bottle[0]) {
            _bottle_elements.eq(i).prop("checked", true);
            break;
          }
        }
      }
      this.ApSel.bottle = $('input[name="bottleType"]:checked').val();
      //プラン
      if (_tmp_array != undefined && _tmp_array[4] != "")
        _fstsel(_plan_elements, _tmp_array[4]);
      var _type_plan = this.ApRelation[this.ApSel.apply].plan;
      if (
        $.inArray(_plan_elements.filter("input:checked").val(), _type_plan) ==
        -1
      ) {
        for (var i = 0; i < _plan_elements.length; i++) {
          if (_plan_elements.eq(i).val() == _type_plan[0]) {
            _plan_elements.eq(i).prop("checked", true);
            break;
          }
        }
      }
      this.ApSel.plan = _plan_elements.filter("input:checked").val();
      //サーバー画像名
      this.ApSel.panelname = this.PanelMaster[this.ApSel.panel];
      //かなもら
      if (this.ApSel.apply == "new") {
        $("#lot_flag").val(1);
        if (this.CampaignCode != undefined)
          $("#campaignCode").val(this.CampaignCode);
      } else if (this.ApSel.apply == "ktry" || this.ApSel.apply == "try") {
        $("#lot_flag").val("");
        if (!($("#p_route").val() == "27")) {
          $("#campaignCode").val("");
        }
      }
    },
    get_apply: function (_flag) {
      if (_flag == undefined) _flag = 0;
      if (_flag == 0) return this.ApSel;
      if (_flag == 1) return { apply: this.ApSel.apply };
      if (_flag == 2) return { server: this.ApSel.server };
      if (_flag == 3) return { bottle: this.ApSel.panel };
      if (_flag == 4) return { bottle: this.ApSel.bottle };
      if (_flag == 5) return { plan: this.ApSel.plan };
    },
    fee: function () {
      var _support = 0;
      var _bottle = 0;
      if (this.ApSel.apply == "new") {
        if (this.ApSel.plan == "14" || this.ApSel.plan == "10") {
          _support = this.ServMaster[this.ApSel.server].fee[0];
          _bottle = this.BottleMaster[this.ApSel.bottle].fee[0];
        } else if (this.ApSel.plan == "13") {
          _support = this.ServMaster[this.ApSel.server].fee[1];
          _bottle = this.BottleMaster[this.ApSel.bottle].fee[1];
        }
      }
      if (this.ApSel.apply == "ktry") {
        _bottle = this.KtryBottleFee;
      }
      return [_support, _bottle];
    },
    get_set: function () {
      var _select = {
        server: this.ApRelation[this.ApSel.apply].server,
        panel: this.ServMaster[this.ApSel.server].panel,
        bottle: this.ApRelation[this.ApSel.apply].bottle,
        plan: this.ApRelation[this.ApSel.apply].plan,
        nestle: this.WithRoute.flag,
      };
      return _select;
    },
  };

  var DisplayControl = function () {
    this.HelpSpeed = 300;
    this.FormSpeed = 300;
    this.ScrollSpeed = 600;
    this.WidthSp = 768;
  };
  DisplayControl.prototype = {
    helpset: function (_element) {
      if (_element.attr("class") == "help_icon") {
        var _state = _element.parent(".form_title").prev(".form_help");
        if (_state.css("display") == "none") _state.show(this.HelpSpeed);
        else _state.hide(this.HelpSpeed);
      } else if (_element.attr("class") == "form_help") {
        _element.hide(this.HelpSpeed);
      }
    },
    planset: function (_apply, _fee, _set, _name) {
      if (_name == undefined) _name = "applyType";
      //サーバー表示
      if (_name == "applyType") {
        $('input[name="serverType"]').parents("li").hide();
        for (var i = 0; i < $('input[name="serverType"]').length; i++) {
          if (
            $.inArray($('input[name="serverType"]').eq(i).val(), _set.server) !=
            -1
          ) {
            $('input[name="serverType"]')
              .eq(i)
              .parents("li")
              .fadeIn(this.FormSpeed);
          }
        }
      }
      //サーバー注釈表示
      if (_name == "applyType" || _name == "serverType") {
        $("#server_select_attention .attention").hide();
        if (_apply.apply == "new") {
          if (
            _apply.server == "16" ||
            _apply.server == "17" ||
            _apply.server == "19"
          )
            $("#server_select_attention .attention")
              .eq(0)
              .fadeIn(this.FormSpeed);
          else
            $("#server_select_attention .attention")
              .eq(1)
              .fadeIn(this.FormSpeed);
        }
      }
      //パネル表示
      if (_name == "applyType" || _name == "serverType") {
        $("#panel_select").hide();
        $('input[name="serverColor"]').parents("li").hide();
        if (_set.panel.length > 1) {
          $("#panel_select").show();
          for (var i = 0; i < $('input[name="serverColor"]').length; i++) {
            if (
              $.inArray(
                $('input[name="serverColor"]').eq(i).val(),
                _set.panel
              ) != -1
            )
              $('input[name="serverColor"]')
                .eq(i)
                .parents("li")
                .fadeIn(this.FormSpeed);
          }
        }
      }
      //画像表示
      if (
        _name == "applyType" ||
        _name == "serverType" ||
        _name == "serverColor"
      ) {
        $(
          "#server_image img, #server_scene1 img, #server_scene2 img, #server_onwpoint span"
        ).hide();
        $("#server_image img")
          .attr("src", "img/" + _apply.panelname + ".png")
          .fadeIn(this.FormSpeed);
        $("#server_scene1 img")
          .attr("src", "img/" + _apply.panelname + "_scene1.png")
          .fadeIn(this.FormSpeed);
        $("#server_scene2 img")
          .attr("src", "img/" + _apply.panelname + "_scene2.png")
          .fadeIn(this.FormSpeed);
        $("#server_onwpoint span." + _apply.panelname).show();
      }
      //ボトル表示
      if (_name == "applyType") {
        $('#bottle_select input[name="bottleType"]').parents("li").hide();
        for (
          var i = 0;
          i < $('#bottle_select input[name="bottleType"]').length;
          i++
        ) {
          if (
            $.inArray(
              $('#bottle_select input[name="bottleType"]').eq(i).val(),
              _set.bottle
            ) != -1
          )
            $('#bottle_select input[name="bottleType"]')
              .eq(i)
              .parents("li")
              .fadeIn(this.FormSpeed);
        }
      }

      //プラン表示
      if (_name == "applyType") {
        if (_apply.plan == "0") $("#plan_select").hide();
        else $("#plan_select").show();
      }
      if (_name == "applyType" || _name == "babyaquaBonus") {
        $("#pltwo, #plnormal, #plkosodate").hide();
        if (_apply.plan == "14") $("#pltwo").fadeIn(this.FormSpeed);
        else if (_apply.plan == "13") $("#plnormal").fadeIn(this.FormSpeed);
        else if (_apply.plan == "10") $("#plkosodate").fadeIn(this.FormSpeed);
      }
      //料金周り
      var _digit3 = function (_str) {
        var _num = String(_str).replace(/,/g, "");
        while (_num != (_num = _num.replace(/^(-?\d+)(\d{3})/, "$1,$2")));
        return _num;
      };
      var _support_ck = 0;
      var _bottle_ck = 0;
      if ($("#support_fee span.fee").text().replace(",", "") == _fee[0])
        _support_ck = 1;
      if ($("#water_fee span.fee").text().replace(",", "") == _fee[1])
        _bottle_ck = 1;
      $("#support_fee span.fee").text(_digit3(_fee[0]));
      $("#water_fee span.fee").text(_digit3(_fee[1]));
      if (_apply.apply == "ktry") $("#water_fee span.unit").text("yên/ 5 chiếc");
      else $("#water_fee span.unit").text(" yên/ chiếc");
      if (_support_ck == 0) {
        $("#support_fee span.fee").hide();
        $("#support_fee span.fee").fadeIn(this.FormSpeed);
      }
      if (_bottle_ck == 0) {
        $("#water_fee span.fee").hide();
        $("#water_fee span.fee").fadeIn(this.FormSpeed);
      }
      //申込み特典内容
      if (_name == "applyType" || _name == "serverType") {
        $("#plan_set span").hide();
        if (_apply.apply == "new") {
          if (_set.nestle == "1" && _apply.server == "19")
            $("#plan_set span.wnew").show();
          else $("#plan_set span.new").show();
        } else if (_apply.apply == "ktry") $("#plan_set span.ktry").show();
        else if (_apply.apply == "try") $("#plan_set span.try").show();
      }
      //特別特典
      if (
        _name == "applyType" ||
        _name == "bottleType" ||
        _name == "babyaquaBonus"
      ) {
        var _special_show = function (_elements) {
          var _flg = 0;
          for (var i = 0; i < _elements.length; i++) {
            if (_elements.eq(i).text() != "") {
              _elements.eq(i).show();
              _flg = 1;
            }
          }
          return _flg;
        };
        var _special_flg = 0;
        $("#special_benefits, #special_benefits dt").hide();
        if (_apply.apply == "new") {
          _special_flg = _special_show($("#special_benefits dt.new"));
          if (_apply.bottle == "12l")
            $("#special_benefits dt.new" + ".bt7").hide();
          if (_apply.bottle == "7l")
            $("#special_benefits dt.new" + ".bt12").hide();
          if (_apply.plan == "10")
            _special_flg = _special_show($("#special_benefits dt.kosodate"));
        } else if (_apply.apply == "ktry")
          _special_flg = _special_show($("#special_benefits dt.ktry"));
        else if (_apply.apply == "try")
          _special_flg = _special_show($("#special_benefits dt.try"));
        if (_special_flg == 1) $("#special_benefits").show();
      }
      //特典注釈
      if (
        _name == "applyType" ||
        _name == "serverType" ||
        _name == "babyaquaBonus"
      ) {
        $("#plan_caution span").hide();
        if (_apply.apply == "new") {
          if (_set.nestle == "1" && _apply.server == "19")
            $("#plan_caution span.wnew").show();
          else $("#plan_caution span.new").show();
          if (_apply.plan == "10") $("#plan_caution span.kosodate").show();
        } else if (_apply.apply == "ktry") $("#plan_caution span.ktry").show();
        else if (_apply.apply == "try") $("#plan_caution span.try").show();
        $("#price_detail span.all").show();
      }

      //ヘルプ関係
      if (_name == "applyType") {
        $("#apnew, #apwnew, #apktry, #aptry").hide();
        if (_apply.apply == "new") {
          if (_set.nestle == "1" && _apply.server == "19")
            $("#apwnew").fadeIn(this.FormSpeed);
          else $("#apnew").fadeIn(this.FormSpeed);
        } else if (_apply.apply == "ktry") $("#apktry").fadeIn(this.FormSpeed);
        else if (_apply.apply == "try") $("#aptry").fadeIn(this.FormSpeed);
      }

      //オプション表示
      if (_apply.apply == "new") $("#lot_select, #aquahikari").show();
      else if (_apply.apply == "ktry" || _apply.apply == "try")
        $("#lot_select, #aquahikari").hide();

      if (
        _name == "applyType" ||
        _name == "babyaquaBonus" ||
        _name == "handoverContent"
      ) {
        $("#lot_select #lot_caution").fadeIn(this.FormSpeed);
        var _lot_text = $(
          '#lot_select input[name="handoverContent"]:checked'
        ).val();
        //注釈処理
        $("#lot_caution span").hide();
        if (_lot_text == "ソーダストリーム ジェネシス v2を希望")
          $("#lot_caution .pre1").fadeIn(this.FormSpeed);
        else if (_lot_text == "レコルト ポットデュオ キャレを希望")
          $("#lot_caution .pre1").fadeIn(this.FormSpeed);
        //希望しない処理
        if (_apply.plan == "13") {
          $("#lot_select li.lot_not").fadeIn(this.FormSpeed);
        } else {
          $("#lot_select li.lot_not").hide();
          if (_lot_text == "希望しない")
            $('#lot_select input[name="handoverContent"]:checked').prop(
              "checked",
              false
            );
        }
      }

      //ネスレ対応
      if (_set.nestle == "0" && _apply.server == "19") {
        $(".nestle_block").hide();
        $(".btn_area .next_bn").hide();
        $("#next_nestle").show();
      } else {
        $(".nestle_block").show();
        $(".btn_area .next_bn").show();
        $("#next_nestle").hide();
      }

      //位置調整
      if (_name == "serverType" || _name == "serverColor") {
        var _elements_top =
          $("#server_select").parent(".form_block").offset().top - 30;
        if (_elements_top > $(window).scrollTop())
          $("html, body").animate(
            { scrollTop: _elements_top },
            this.ScrollSpeed,
            "swing"
          );
      }
      if (_name == "bottleType" || _name == "babyaquaBonus") {
        var _elements_top =
          $("#bottle_select").parent(".form_block").offset().top - 30;
        if (_elements_top > $(window).scrollTop())
          $("html, body").animate(
            { scrollTop: _elements_top },
            this.ScrollSpeed,
            "swing"
          );
      }

      //表示微修正
      var _border_set = function (_elements, _type) {
        var _array_ck = [];
        var _radius_set = function (_list, _type) {
          if (_type.indexOf("all") != -1) {
            _list.addClass("radius_all");
            _list.before().addClass("radius_all");
          }
          if (_type.indexOf("top") != -1) {
            _list.addClass("radius_top");
            _list.before().addClass("radius_top");
          }
          if (_type.indexOf("bottom") != -1) {
            _list.addClass("radius_bottom");
            _list.before().addClass("radius_bottom");
          }
          if (_type.indexOf("left") != -1) {
            _list.addClass("radius_left");
            _list.before().addClass("radius_left");
          }
          if (_type.indexOf("right") != -1) {
            _list.addClass("radius_right");
            _list.before().addClass("radius_right");
          }
          if (_type.indexOf("t_l") != -1) {
            _list.addClass("radius_t_l");
            _list.before().addClass("radius_t_l");
          }
          if (_type.indexOf("t_r") != -1) {
            _list.addClass("radius_t_r");
            _list.before().addClass("radius_t_r");
          }
          if (_type.indexOf("b_l") != -1) {
            _list.addClass("radius_b_l");
            _list.before().addClass("radius_b_l");
          }
          if (_type.indexOf("b_r") != -1) {
            _list.addClass("radius_b_r");
            _list.before().addClass("radius_b_r");
          }
        };
        if (!window.matchMedia("(min-width: " + this.WidthSp + "px)").matches) {
          for (var i = 0; _elements.length > i; i++) {
            if (_elements.eq(i).parents("li").css("display") == "none");
            else _array_ck.push(i);
          }
          _elements.removeClass();
          _elements.addClass("panel");
          _elements.addClass("radius_reset");
          if (_array_ck.length == 1)
            _radius_set(_elements.eq(_array_ck[0]), "all");
          if (_type == "type1") {
            if (_array_ck.length != 1) {
              _radius_set(_elements.eq(_array_ck[0]), "top");
              _radius_set(
                _elements.eq(_array_ck[_array_ck.length - 1]),
                "bottom"
              );
            }
          }
          if (_type == "type2") {
            if (_array_ck.length == 2) {
              _radius_set(_elements.eq(_array_ck[0]), "left");
              _radius_set(_elements.eq(_array_ck[1]), "right");
            } else if (_array_ck.length > 2) {
              _radius_set(_elements.eq(_array_ck[0]), "t_l");
              _radius_set(_elements.eq(_array_ck[1]), "t_r");
              if (_array_ck.length == 3) {
                _radius_set(_elements.eq(_array_ck[2]), "b_l");
              } else {
                if (_array_ck.length % 2 == 0) {
                  _radius_set(
                    _elements.eq(_array_ck[_array_ck.length - 2]),
                    "b_l"
                  );
                  _radius_set(
                    _elements.eq(_array_ck[_array_ck.length - 1]),
                    "b_r"
                  );
                } else {
                  _radius_set(
                    _elements.eq(_array_ck[_array_ck.length - 2]),
                    "b_r"
                  );
                  _radius_set(
                    _elements.eq(_array_ck[_array_ck.length - 1]),
                    "b_l"
                  );
                }
              }
            }
            for (var i = 0; _array_ck.length > i; i++) {
              if (i % 2 == 0)
                _elements
                  .eq(_array_ck[i])
                  .parents("li")
                  .css("margin-left", "0");
              else
                _elements
                  .eq(_array_ck[i])
                  .parents("li")
                  .css("margin-left", "-1px");
            }
          }
        }
      };
      _border_set($("#server_select span.panel"), "type2");
      _border_set($("#panel_select span.panel"), "type2");
      _border_set($("#bottle_select span.panel"), "type2");
      _border_set($("#plan_select span.panel"), "type1");
    },
    nestleck: function () {
      //URL対応
      var __cookie_get = function (_cname) {
        if (document.cookie != "") {
          var _cookie_list = document.cookie.split("; ");
          var _list_tmp;
          for (var i = 0; _cookie_list.length > i; i++) {
            _list_tmp = _cookie_list[i].split("=");
            if (_list_tmp[0] == _cname) return _list_tmp[1];
          }
        }
      };
      var _href = "https://shop.nestle.jp/front/contents/aquaclara2/?ask10=";
      _href =
        _href + "toritsugi_code=n" + $("#p_agent").val().replace("aid", "");
      if (
        $('input[name="userCode"]').val() != "" &&
        $('input[name="userCode"]').val() != null
      )
        _href += "|notice_code=" + $('input[name="userCode"]').val();
      if (
        $('input[name="campaignCode"]').val() != "" &&
        $('input[name="campaignCode"]').val() != null
      )
        _href += "|hq_campaign_id=" + $('input[name="campaignCode"]').val();
      if (
        $('input[name="memberCode"]').val() != "" &&
        $('input[name="memberCode"]').val() != null
      )
        _href += "|shop_customer_id=" + $('input[name="memberCode"]').val();

      //A8対応
      if ($("#a8_cookie").val()) _href += "&a8=" + $("#a8_cookie").val();
      //AD-X対応
      if ($("#t_cookie").val()) _href += "&t=" + $("#t_cookie").val();
      //MS.Track対応
      if ($("#fpc_cookie").val()) _href += "&fpc=" + $("#fpc_cookie").val();
      //at対応
      if ($("#atnct_cookie").val())
        _href += "&atnct=" + $("#atnct_cookie").val();
      //yahoo対応
      var _ck_yh = __cookie_get("_yah_jhkb");
      if (_ck_yh) {
        var _ck_tmp = _ck_yh.split(",");
        if (_ck_tmp[0] == "") _href += "&yclid=" + _ck_tmp[1];
        else _href += "&prefix=" + _ck_tmp[0] + "&yclid=" + _ck_tmp[1];
      }
      //visumo対応
      var _ck_vm = __cookie_get("VisumoJPSession");
      if (_ck_vm) _href += "&vjps=" + _ck_vm;

      $("#next_nestle a").attr("href", _href);

      //エラーチェック
      var _error_flag = 1;
      var _e_text_ck = function (_name, _etext) {
        if (_etext == undefined) _etext = "";
        var _fsttext_elem = $("#input .first_explanation");
        var _input_elem = $('input[name="' + _name + '"]');

        _input_elem.removeClass("error_f");
        _input_elem.prev(".error").remove();
        _fsttext_elem.next(".error_all").remove();

        if (_etext != "") {
          _input_elem.addClass("error_f");
          _fsttext_elem.after(
            '<p class="error_all">入力内容に誤りがあります。エラーが表示されている項目を確認してください。</p>'
          );
          _input_elem.before(
            '<p id="' + _name + '_e" class="error">' + _etext + "</p>"
          );
        }
      };

      //申込みコード
      var _userCode = $('input[name="userCode"]');
      if (_userCode.size()) {
        if (_userCode.val() != "") {
          if (_userCode.val().match(/[^A-Za-z0-9]+/)) {
            _e_text_ck(
              "userCode",
              "お申込みコードは半角英数字で入力してください。"
            );
            _error_flag = 0;
          } else _e_text_ck("userCode");
        } else if ($("#p_route").val() == "14" && _userCode.val() == "") {
          _e_text_ck("userCode", "お申込コードを入力してください。");
          _error_flag = 0;
        } else _e_text_ck("userCode");
      }

      //会員ID
      var _memberCode = $('input[name="memberCode"]');
      if (_memberCode.size()) {
        var _memCodeTxt = $("#mem_code_title").text().replace("必須", "");
        if (_memberCode.val() != "") {
          if (_memberCode.val().match(/[^\w\-]+/)) {
            this.memberCode_error_fg = 0;
            _e_text_ck(
              "memberCode",
              _memCodeTxt + "は半角英数字と'_'、'-'で入力してください。"
            );
            _error_flag = 0;
          } else _e_text_ck("memberCode");
        } else if (_memberCode.val() == "") {
          _e_text_ck("memberCode", _memCodeTxt + "を入力してください。");
          _error_flag = 0;
        } else _e_text_ck("memberCode");
      }
      return _error_flag;
    },
  };

  //初期設定
  var display_control = new DisplayControl();
  var apply_select_data = new ApplySelectData();

  var image_files = [
    "fab_b.png",
    "fab_b_scene1.png",
    "fab_b_scene2.png",
    "with_d.png",
    "with_d_scene1.png",
    "with_d_scene2.png",
    "with_b.png",
    "with_b_scene1.png",
    "with_b_scene2.png",
    "slim.png",
    "slim_scene1.png",
    "slim_scene2.png",
    "slims.png",
    "slims_scene1.png",
    "slims_scene2.png",
  ];
  for (var i = 0; i < image_files.length; i++) {
    $("<img>").attr("src", "img/" + image_files[i]);
  }

  apply_select_data.load(location.search.replace("?", "").split("&"));
  apply_select_data.record(1);
  display_control.planset(
    apply_select_data.get_apply(),
    apply_select_data.fee(),
    apply_select_data.get_set()
  );
  $(window).on("load", function () {
    apply_select_data.record(1);
    display_control.planset(
      apply_select_data.get_apply(),
      apply_select_data.fee(),
      apply_select_data.get_set()
    );
  });
  //イベント処理
  $(".help_icon, .form_help").on("click", function () {
    display_control.helpset($(this));
  });
  $(
    'input[name="applyType"], input[name="serverType"], input[name="serverColor"], input[name="bottleType"], input[name="babyaquaBonus"]'
  ).on("change", function () {
    apply_select_data.record();
    display_control.planset(
      apply_select_data.get_apply(),
      apply_select_data.fee(),
      apply_select_data.get_set(),
      $(this).attr("name")
    );
  });
  $('input[name="handoverContent"]').on("change", function () {
    display_control.planset(
      apply_select_data.get_apply(),
      apply_select_data.fee(),
      apply_select_data.get_set(),
      $(this).attr("name")
    );
  });
  $("#next_nestle").on("click", function () {
    if (!display_control.nestleck()) {
      return false;
    }
  });

  //イレギュラー処理
  if (
    $("#p_agent").val() == "aid002497" ||
    $("#p_agent").val() == "aid001118" ||
    $("#p_agent").val() == "aid002143"
  ) {
    if (
      $('#lot_select input[name="handoverContent"]:checked').val() == undefined
    )
      $('#lot_select input[name="handoverContent"]')
        .eq(0)
        .prop("checked", true);
  }
});
