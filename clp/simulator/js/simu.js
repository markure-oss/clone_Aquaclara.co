$(function () {
  var i, j;

  /*****************
        繧ｷ繝溘Η繝ｬ繝ｼ繧ｷ繝ｧ繝ｳ繧ｿ繝冶ｨｭ螳�
    *****************/
  var $ele_simtit = $("#simu_ctr_head .simu_title");
  var $ele_simhum = $("#simu_ctr_human");
  var $ele_simnbr = $("#simu_ctr_number");

  function simu_tab_ctr(_num) {
    if (_num == -1) {
      for (i = 0; i < $ele_simtit.length; i++) {
        if ($ele_simtit.eq(i).attr("class").indexOf("simu_select") < 0) {
          _num = i;
          break;
        }
      }
    } else {
      var _sub_num = _num == 0 ? 1 : 0;
      $ele_simtit.eq(_sub_num).addClass("simu_select");
      $ele_simtit.eq(_num).removeClass("simu_select");
    }
    if (_num == 0) {
      $ele_simhum.fadeIn("100");
      $ele_simnbr.hide();
    } else if (_num == 1) {
      $ele_simhum.hide();
      $ele_simnbr.fadeIn("100");
    }
  }

  /*****************
        繧ｷ繝溘Η繝ｬ繝ｼ繧ｷ繝ｧ繝ｳ險ｭ螳�
    *****************/
  var URI_Ctr = function () {
    this.$simu_apply_bn = $("#simu_apply_bn");
    this.AQUA_URL = {
      with: "/product/server/with/",
      fab: "/product/server/fab/",
      slim: "/product/server/slim/",
      slim_s: "/product/server/slim-s/",
      form: "/webform/?agent=aid000144&route=01&lp=aquap0",
    };
    this.APAS_URL = {
      with: "/service_price/product/server/with.html",
      fab: "/service_price/product/server/fab.html",
      slim: "/service_price/product/server/slim.html",
      slim_s: "/service_price/product/server/slim-s.html",
      form: "/webform/request/check_area?entry_id=1l",
    };
    this.DETAIL_FLG = 0;

    var _URL = location.href.split("?");
    if (
      _URL[0].indexOf("aquaclara.co.jp") != -1 &&
      _URL[0].indexOf("/service_price/price/simulation.html") != -1
    ) {
      this.DETAIL_FLG = 1;
      if (_URL[1]) {
        var _parms = _URL[1].split("&");
        var _parm = "";
        for (var i = 0; i < _parms.length; i++) {
          _parm = _parms[i].split("=");
          if (_parm[0] == "apadcode")
            this.AQUA_URL["form"] =
              "/webform/?agent=aid" + _parm[1] + "&route=01&lp=aquap0";
        }
      }
    } else if (_URL[0].indexOf("aquaclara-web.jp") != -1) {
      this.DETAIL_FLG = 2;
    }
  };
  URI_Ctr.prototype = {
    set: function () {
      var _urls = {};
      if (this.DETAIL_FLG == 1) _urls = this.AQUA_URL;
      else if (this.DETAIL_FLG == 2) _urls = this.APAS_URL;

      if (this.DETAIL_FLG != 0) {
        $(".simu_with .simu_detail_info a").attr("href", _urls["with"]);
        $(".simu_fab .simu_detail_info a").attr("href", _urls["fab"]);
        $(".simu_slim .simu_detail_info a").attr("href", _urls["slim"]);
        $(".simu_slim_s .simu_detail_info a").attr("href", _urls["slim_s"]);
        this.$simu_apply_bn.find("a").attr("href", _urls["form"]);

        $(".simu_detail_info").show();
        this.$simu_apply_bn.show();
      }
    },
  };

  var Simu_Bottle_Ctr = function () {
    this.$simu_adult = $('select[name="simu_adult"]');
    this.$simu_children = $('select[name="simu_children"]');
    this.$simu_bottle = $('select[name="simu_bottle"]');
    this.ADULT_BOTTLE = 1;
    this.CHILDREN_BOTTLE = 0.8;

    this.adult_num = 0;
    this.children_num = 0;
    this.bottle_num_re = 0;
  };
  Simu_Bottle_Ctr.prototype = {
    calculation: function () {
      this.adult_num = this.$simu_adult.val();
      this.children_num = this.$simu_children.val();
      this.bottle_num_re = Math.ceil(
        this.adult_num * this.ADULT_BOTTLE +
          this.children_num * this.CHILDREN_BOTTLE
      );
    },
    set: function () {
      this.$simu_bottle.val(this.bottle_num_re);
      if (this.$simu_children.val() > 0) $(".simu_backgd2").show();
      else $(".simu_backgd2").hide();
    },
  };

  var Simu_Price_Ctr = function () {
    this.BOTTLE_PRICE = 1404;
    this.KOSODATE = 550;
  };
  Simu_Price_Ctr.prototype = {
    set: function (_bottle_num, _server_price, _ele_server) {
      function digit3(_str) {
        var _num = String(_str).replace(/,/g, "");
        while (_num != (_num = _num.replace(/^(-?\d+)(\d{3})/, "$1,$2")));
        return _num;
      }
      var _all_price = _server_price + _bottle_num * this.BOTTLE_PRICE;

      _ele_server
        .find(".simu_server_price")
        .find("span")
        .text(digit3(_server_price));
      for (i = 0; i < _ele_server.length; i++) {
        _ele_server
          .find(".simu_water_price")
          .eq(i)
          .find("span")
          .eq(0)
          .text(digit3(_bottle_num * this.BOTTLE_PRICE));
        _ele_server
          .find(".simu_water_price")
          .eq(i)
          .find("span")
          .eq(1)
          .text(_bottle_num);
        _ele_server
          .find(".simu_day_price")
          .eq(i)
          .find("span")
          .eq(0)
          .text(Math.ceil(_all_price / 30));
      }

      _ele_server.find(".simu_price span").text(digit3(_all_price));
      _ele_server
        .find(".simu_kosodate_price span")
        .text(digit3(_all_price - this.KOSODATE));

      for (i = 0; i < _ele_server.length; i++) {
        _ele_server.find(".simu_price").eq(i).hide();
        _ele_server.find(".simu_price").eq(i).fadeIn(600);
      }
    },
  };

  var Simu_Window_Ctr = function () {
    this.$simulation_cnt = $("#simulation");
    this.SP_SIZE = 500;
    this.resize_flag;
  };
  Simu_Window_Ctr.prototype = {
    set: function () {
      simu_tab_ctr(-1);
      if (this.$simulation_cnt.width() <= this.SP_SIZE) {
        if (this.resize_flag === 0 || this.resize_flag == null) {
          this.$simulation_cnt.addClass("media_sp");
          this.resize_flag = 1;
        }
      } else {
        if (this.resize_flag === 1 || this.resize_flag == null) {
          this.$simulation_cnt.removeClass("media_sp");
          this.resize_flag = 0;
        }
      }
    },
    get_sp: function () {
      if (this.$simulation_cnt.width() <= this.SP_SIZE) return 1;
      else return 0;
    },
  };

  function simu_server_price(_flg) {
    var _bottle_num;
    if (_flg == 0) _bottle_num = simu_bottle_ctr.$simu_bottle.val();
    else _bottle_num = simu_bottle_ctr.bottle_num_re;
    simu_price_ctr.set(_bottle_num, 1100, $("#simu_wrapper .simu_slim"));
    simu_price_ctr.set(_bottle_num, 1100, $("#simu_wrapper .simu_slim_s"));
    simu_price_ctr.set(_bottle_num, 1430, $("#simu_wrapper .simu_fab"));
    simu_price_ctr.set(_bottle_num, 2200, $("#simu_wrapper .simu_with"));
  }

  /*****************
       繧､繝吶Φ繝亥�逅�
    *****************/
  //繧ｷ繝溘Η繝ｬ繝ｼ繧ｷ繝ｧ繝ｳ繝懊ち繝ｳ
  $ele_simtit.on("click", function () {
    simu_tab_ctr($ele_simtit.index(this));
  });
  $('select[name="simu_adult"], select[name="simu_children"]').on(
    "change",
    function () {
      simu_bottle_ctr.calculation();
      simu_bottle_ctr.set();
      simu_server_price(1);
    }
  );
  $('select[name="simu_bottle"]').on("change", function () {
    simu_server_price(0);
  });
  $("#simu_next").on("click", function () {
    $("#simu_wrapper").slick("slickNext");
  });
  $("#simu_prev").on("click", function () {
    $("#simu_wrapper").slick("slickPrev");
  });
  $("#simu_wrapper").on("init", function (e, slick) {
    simu_bottle_ctr.calculation();
    simu_bottle_ctr.set();
    simu_server_price(1);
  });
  //繧ｦ繧｣繝ｳ繝峨え繧､繝吶Φ繝�
  $(window).on("resize", function () {
    simu_window_ctr.set();
  });

  /*****************
       繧ｷ繝溘Η繝ｬ繝ｼ繧ｷ繝ｧ繝ｳ髢｢騾｣蛻晄悄險ｭ螳�
    *****************/
  var simu_bottle_ctr = new Simu_Bottle_Ctr();
  var simu_price_ctr = new Simu_Price_Ctr();
  var simu_window_ctr = new Simu_Window_Ctr();
  var uri_ctr = new URI_Ctr();

  simu_window_ctr.set();
  uri_ctr.set();

  /*****************
        slick險ｭ螳�
    *****************/
  $("#simu_wrapper").slick({
    draggable: false,
    //centerMode: true,
    //centerPadding: '50px',
    //initialSlide: -1,
    //adaptiveHeight: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    speed: 250,
    respondTo: "slider",

    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1050,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: simu_window_ctr.SP_SIZE,
        settings: {
          dots: true,
          slidesToShow: 1,
        },
      },
    ],
  });
  $("#simu_wrapper").on("setPosition", function (event, slick) {
    if (slick.slideCount === $(this).slick("slickGetOption", "slidesToShow")) {
      $("#simu_next").hide();
      $("#simu_prev").hide();
    } else {
      $("#simu_next").show();
      $("#simu_prev").show();
    }
  });
});
1;
