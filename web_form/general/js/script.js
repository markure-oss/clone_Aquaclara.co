!(function (o) {
  function e() {
    var e = o(".js-c-anime-elem");
    0 < e.length &&
      e.each(function (e, s) {
        var t = o(window),
          i = o(s),
          a = i.offset().top,
          s = t.scrollTop();
        a - t.height() + 150 < s && i.addClass("is-animated");
      });
  }
  (window.onload = function () {
    setTimeout(function () {
      e();
    }, 500);
  }),
    o(window).scroll(function () {
      e();
    });
})(jQuery),
  (function (n) {
    var c = n(window),
      t = 300,
      i = "swing",
      a = navigator.userAgent;
    function o() {
      return n(".js-media-query").css("font-family").replace(/"/g, "");
    }
    document.addEventListener("DOMContentLoaded", function () {
      yall({ lazyClass: "js-c-lazy", observeChanges: !0 });
    }),
      n(function () {
        var e =
            !(
              -1 < a.indexOf("iPhone") ||
              (-1 < a.indexOf("Android") && -1 < a.indexOf("Mobile"))
            ) &&
            (-1 < a.indexOf("iPad") ||
              (-1 < a.indexOf("Macintosh") && "ontouchend" in document) ||
              -1 < a.indexOf("Android")),
          s = n("window").innerWidth(),
          t = s / parseInt(n("body").css("min-width"));
        e &&
          n('meta[name="viewport"]').attr(
            "content",
            "width=" + s + "px, initial-scale=" + t
          );
      }),
      n(function () {
        var e;
        n(window).on("resize load", function () {
          clearTimeout(e),
            (e = setTimeout(function () {
              var e, s;
              (e = 0.01 * c.innerHeight()),
                (s = 0.01 * c.innerWidth()),
                document.documentElement.style.setProperty("--vh", e + "px"),
                document.documentElement.style.setProperty("--vw", s + "px");
            }, 200));
        });
      }),
      n(function () {
        function e() {
          n('img[data-src*="_sp."], img[data-src*="_pc."]').each(function () {
            "sp" != o()
              ? n(this).attr(
                  "data-src",
                  n(this).attr("data-src").replace("_sp.", "_pc.")
                )
              : n(this).attr(
                  "data-src",
                  n(this).attr("data-src").replace("_pc.", "_sp.")
                );
          }),
            n('img[src*="_sp."], img[src*="_pc."]').each(function () {
              "sp" != o()
                ? n(this).attr(
                    "src",
                    n(this).attr("src").replace("_sp.", "_pc.")
                  )
                : n(this).attr(
                    "src",
                    n(this).attr("src").replace("_pc.", "_sp.")
                  );
            });
        }
        var s, t;
        ((function () {
          if (0 < a.indexOf("Android"))
            return parseFloat(a.slice(a.indexOf("Android") + 8));
        })() <= 4.4 ||
          -1 != (t = a.toLowerCase()).indexOf("msie") ||
          -1 != t.indexOf("trident")) &&
          (e(),
          n(window).on("resize", function () {
            clearTimeout(s),
              (s = setTimeout(function () {
                e();
              }, 100));
          }));
      }),
      n('a[href="#top"]').on("click", function () {
        return n("body,html").animate({ scrollTop: "0" }, t, "swing"), !1;
      }),
      n(window).on("load", function () {
        var e,
          s = location.hash;
        !s ||
          ((e = n(s)).length &&
            ((s = n(".js-header").innerHeight()),
            (s = e.offset().top - s),
            n("body,html").animate({ scrollTop: s }, t, i)));
      }),
      n('a[href^="#"]:not([href="#top"]):not(".js-no-scroll")').on(
        "click",
        function () {
          var e = n(this).attr("href"),
            s = n("#" === e || "" === e ? "html" : e);
          if (s.length) {
            (e = n(".js-header").innerHeight()), (e = s.offset().top - e);
            return n("body,html").animate({ scrollTop: e }, t, i), !1;
          }
        }
      );
    var r = n(".js-pagetop"),
      l = "is-view";
    c.on("scroll", function () {
      var e, s;
      300 < n(this).scrollTop() ? r.addClass(l) : r.removeClass(l),
        "sp" != o() &&
          ((e = n(document).height()),
          (s = c.scrollTop()),
          e - c.height() - s <= (s = n(".l-footer-main").innerHeight() - 80)
            ? r.css({ position: "absolute", bottom: s + "px" })
            : r.removeAttr("style"));
    });
    var e = n(".js-footer-nav"),
      s = "is-view";
    c.on("scroll", function () {
      "pc" != o() &&
        (500 < n(this).scrollTop() ? e.addClass(s) : e.removeClass(s));
    });
    var d = n(".js-nav-btn"),
      h = n('.js-nav-content:not(".js-footer-nav-content .js-nav-content")'),
      u = n(".js-nav-chara"),
      v = n(".js-nav-overlay"),
      p = "is-open";
    function g() {
      v.fadeIn(t), h.addClass(p), d.addClass(p), u.text("閉じる");
    }
    function f() {
      v.fadeOut(t), h.removeClass(p), d.removeClass(p), u.text("メニュー");
    }
    d.on("click", function () {
      return n(this).hasClass("is-footer"), (h.hasClass(p) ? f : g)(), !1;
    }),
      v.on("click", function () {
        f();
      }),
      h.on("click", function (e) {
        e.stopPropagation();
      });
    var m,
      j,
      w,
      C,
      b = n(".js-footer-nav-btn"),
      k = n(".js-footer-nav-content .js-nav-content"),
      x = n(".js-nav-chara02"),
      y = n(".js-nav-overlay02"),
      T = "is-open";
    function S() {
      y.fadeOut(t), k.removeClass(T), b.removeClass(T), x.text("メニュー");
    }
    b.on("click", function () {
      return (
        n(this).hasClass("is-footer")
          ? (k.hasClass(T) ? S : g)()
          : k.hasClass(T)
          ? S()
          : (y.fadeIn(t), k.addClass(T), b.addClass(T), x.text("閉じる")),
        !1
      );
    }),
      y.on("click", function () {
        S();
      }),
      k.on("click", function (e) {
        e.stopPropagation();
      }),
      n(function () {
        var e,
          s,
          t = n(".js-header"),
          i = n(".js-mv"),
          a = "is-fixed",
          o = "is-return",
          r = 1;
        0 < i.length && ((e = t.innerHeight()), (s = i.innerHeight())),
          c.scroll(function () {
            n(this).scrollTop() > s / 2
              ? t.addClass("is-set")
              : t.removeClass("is-set"),
              n(this).scrollTop() > s + e
                ? (t.addClass(a), (r = 1))
                : (r = 0) === r &&
                  t.hasClass(a) &&
                  t
                    .addClass(o)
                    .delay(200)
                    .queue(function () {
                      n(this).removeClass(o).dequeue(),
                        n(this).removeClass(a).dequeue();
                    });
          });
      }),
      0 < n(".js-c-switch-tab").length &&
        ((m = n(".js-c-switch-tab-list")),
        (j = n(".js-c-switch-tab")),
        (w = n(".js-c-switch-content-list")),
        (C = n(".js-c-switch-content")),
        (A = "is-active"),
        j.on("click", function () {
          var e = n(this).parent(m),
            s = e.children(j),
            t = s.index(this),
            e = e.next(w).children(C);
          e.removeClass(A),
            e.eq(t).addClass(A),
            s.removeClass(A),
            n(this).addClass(A);
        }));
    var _,
      q,
      P,
      O,
      F,
      M,
      H,
      A,
      Q,
      z =
        ((z = "tab"),
        (_ = _ || window.location.href),
        (z = z.replace(/[\[\]]/g, "\\$&")),
        (_ = new RegExp("[?&]" + z + "(=([^&#]*)|&|#|$)").exec(_))
          ? _[2]
            ? decodeURIComponent(_[2].replace(/\+/g, " "))
            : ""
          : null);
    function E() {
      F.each(function (e) {
        n(this).height() < 100
          ? (F.eq(e).removeClass(H),
            M.eq(e).removeClass(H),
            F.eq(e).removeClass(A),
            M.eq(e).removeClass(A))
          : (F.eq(e).addClass(H), M.eq(e).addClass(H));
      });
    }
    z &&
      0 < n(".js-c-switch-tab").length &&
      (_ = z.split("_")) &&
      ((z = _[0]),
      (q = _[1]),
      n('.js-c-switch-tab-list[data-tab-name="' + z + '"]')
        .children(".js-c-switch-tab")
        .removeClass(A),
      n('.js-c-switch-tab-list[data-tab-name="' + z + '"]')
        .children('.js-c-switch-tab[data-tab-num="' + q + '"]')
        .addClass(A),
      n('.js-c-switch-content-list[data-tab-name="' + z + '"]')
        .children(".js-c-switch-content")
        .removeClass(A),
      n('.js-c-switch-content-list[data-tab-name="' + z + '"]')
        .children('.js-c-switch-content[data-tab-num="' + q + '"]')
        .addClass(A)),
      0 < n(".js-c-toggle-trigger").length &&
        ((q = n(".js-c-toggle-trigger")),
        (A = "is-active"),
        "pc" === o() &&
          (n(".js-toggle-second").find(".js-c-toggle-trigger").addClass(A),
          n(".js-toggle-second").find(".js-c-toggle-content").addClass(A),
          n(".js-toggle-second").find(".js-no-toggle").removeClass(A)),
        q.on("click", function () {
          n(this).toggleClass(A),
            n(this).next(".js-c-toggle-content").slideToggle(t);
        })),
      n(".js-c-inview01").on("inview", function (e, s) {
        s && n(this).addClass("is-active");
      }),
      0 < n(".js-c-view-more").length &&
        ((P = []),
        n(function () {
          n(".js-c-view-more__item").each(function () {
            var e = n(this).height();
            P.push(e), n(this).addClass("is-hide"), (O = n(this).height());
          });
        }),
        n(".js-c-view-more__trigger").click(function () {
          var e;
          n(this).hasClass("is-show")
            ? (n(this)
                .removeClass("is-show")
                .next()
                .animate({ height: O }, 200)
                .addClass("is-hide"),
              n(".js-c-view-more").removeClass("is-show"),
              n(".js-c-view-more__trigger").text("続きを見る"))
            : ((e = n(this).index(".js-c-view-more__trigger")),
              (e = P[e]),
              n(this)
                .addClass("is-show")
                .next()
                .animate({ height: e }, 200)
                .removeClass("is-hide"),
              n(".js-c-view-more").addClass("is-show"),
              n(".js-c-view-more__trigger").text("閉じる"));
        })),
      0 < n(".js-c-view-more02").length &&
        ((F = n(".js-c-view-more02__content")),
        (M = n(".js-c-view-more02__trigger")),
        (H = "is-hide"),
        (A = "is-active"),
        E(),
        n(window).on("resize", function () {
          clearTimeout(Q),
            (Q = setTimeout(function () {
              F.removeClass(H), M.removeClass(H), E();
            }, 200));
        }),
        M.click(function () {
          var e = M.index(this);
          F.eq(e).hasClass(A)
            ? (F.eq(e).removeClass(A),
              M.eq(e).removeClass(A).text("もっと見る"))
            : (F.eq(e).addClass(A), M.eq(e).addClass(A).text("閉じる"));
        })),
      new ScrollHint(".js-c-scrollable01", {
        i18n: { scrollable: "スクロールできます" },
      });
  })(jQuery),
  (function (s) {
    0 < s(".js-home-mv-slider").length &&
      s(".js-home-mv-slider").slick({
        autoplay: !0,
        arrows: !1,
        fade: !0,
        dots: !0,
        slidesToScroll: 1,
        slidesToShow: 1,
        pauseOnFocus: !1,
      }),
      0 < s(".js-c-campaign-slider01,.js-c-product-slider01").length &&
        s(".js-c-campaign-slider01,.js-c-product-slider01").slick({
          arrows: !0,
          autoplaySpeed: 4e3,
          autoplay: !0,
          infinite: !0,
          slidesToShow: 3,
          dots: !0,
          responsive: [
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                centerMode: !0,
                centerPadding: "25px",
              },
            },
          ],
        }),
      0 < s(".js-simulator-tab").length &&
        s(".js-simulator-tab").click(function () {
          s(".js-simulator-tab").removeClass("is-active"),
            s(this).addClass("is-active"),
            s(".js-simulator-content").removeClass("is-active");
          var e = s(this).index();
          s(".js-simulator-content").eq(e).addClass("is-active"),
            s(".js-home-price-simulator-slider").slick("setPosition");
        }),
      0 < s(".js-home-price-simulator-slider").length &&
        s(".js-home-price-simulator-slider").slick({
          arrows: !0,
          autoplaySpeed: 4e3,
          autoplay: 0,
          infinite: !0,
          slidesToShow: 2,
          dots: !0,
          responsive: [
            {
              breakpoint: 768,
              settings: { slidesToShow: 1, centerPadding: "25px" },
            },
          ],
        }),
      0 < s(".js-c-voice-slider01").length &&
        s(".js-c-voice-slider01").slick({
          arrows: !0,
          autoplaySpeed: 4e3,
          autoplay: !0,
          infinite: !0,
          slidesToShow: 3,
          dots: !0,
          responsive: [
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                centerMode: !0,
                centerPadding: "25px",
              },
            },
          ],
        });
  })(jQuery),
  (function (o) {
    var r, n, c, l, d, h, u;
    0 < o(".js-c-lifehack-slider01").length &&
      o(".js-c-lifehack-slider01").slick({
        arrows: !0,
        autoplaySpeed: 4e3,
        autoplay: !0,
        infinite: !0,
        slidesToShow: 3,
        dots: !0,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              centerMode: !0,
              centerPadding: "25px",
            },
          },
        ],
      }),
      0 < o(".js-c-archive-slider01").length &&
        o(".js-c-archive-slider01").slick({
          arrows: !0,
          autoplaySpeed: 4e3,
          autoplay: !0,
          infinite: !0,
          slidesToShow: 1,
          dots: !0,
          mobileFirst: !0,
          responsive: [
            {
              breakpoint: 768,
              settings: { slidesToShow: 3, slidesToScroll: 1 },
            },
          ],
        }),
      0 < o(".js-lifehack-archive-tab").length &&
        ((r = o(".js-lifehack-archive-tab-list")),
        (n = o(".js-lifehack-archive-tab")),
        (c = o(".js-lifehack-archive-tab:first-child")),
        (l = o(".js-lifehack-archive-content-list")),
        (d = o(".js-lifehack-archive-content")),
        (h = o(".js-lifehack-archive-content:first-child")),
        (u = "is-active"),
        h.addClass("is-active"),
        c.addClass("is-active"),
        n.on("click", function () {
          var e = o(this).parent(r),
            s = e.children(n),
            t = s.index(this),
            i = o(this).siblings(c),
            a = e.next(l).children(d);
          i.removeClass(u),
            ($contentFirst = e.next(l).children(h)),
            $contentFirst.removeClass(u),
            a.removeClass(u),
            a.eq(t).addClass(u),
            s.removeClass(u),
            o(this).addClass(u);
        }));
  })(jQuery),
  (function (c) {
    function e() {
      return c(".js-media-query").css("font-family").replace(/"/g, "");
    }
    var s, t, i, a, o, r, n, l, d;
    0 < c(".js-product-server-waterserver-txt-height").length &&
      "pc" == e() &&
      ((s = 0),
      c(".js-product-server-waterserver-txt-height").each(function () {
        c(this).height() > s && (s = c(this).height());
      }),
      c(".js-product-server-waterserver-txt-height").height(s)),
      0 < c(".js-product-server-waterserver-label-height").length &&
        "pc" == e() &&
        ((t = 0),
        c(".js-product-server-waterserver-label-height").each(function () {
          c(this).height() > t && (t = c(this).height());
        }),
        c(".js-product-server-waterserver-label-height").height(t)),
      0 < c(".js-product-server-waterserver-sub-trigger").length &&
        "pc" == e() &&
        ((i = c(".js-product-server-waterserver-sub-trigger")),
        (a = c(".js-product-server-waterserver-sub-trigger01")),
        (o = c(".js-product-server-waterserver-sub-trigger02")),
        (r = c(".js-product-server-waterserver-sub-trigger03")),
        (n = c(".js-product-server-waterserver-sub-trigger04")),
        (l = c(".js-product-server-waterserver__list")),
        (d = "is-active"),
        i.on("click", function () {
          a.hasClass(d) || o.hasClass(d) || r.hasClass(d) || n.hasClass(d)
            ? (l.removeClass(d), l.addClass(d))
            : setTimeout(function () {
                l.removeClass(d);
              }, 1e3);
        })),
      0 < c(".js-c-product-slider04").length &&
        c(".js-c-product-slider04").slick({
          arrows: !1,
          fade: !0,
          autoplaySpeed: 4e3,
          autoplay: !0,
          infinite: !0,
          dots: !0,
          slidesToShow: 1,
          mobileFirst: !0,
          responsive: [{ breakpoint: 768, settings: "unslick" }],
        }),
      0 < c(".js-c-product-slider02").length &&
        c(".js-c-product-slider02").slick({
          arrows: !0,
          autoplaySpeed: 4e3,
          autoplay: !0,
          infinite: !0,
          dots: !0,
          slidesToShow: 1,
          centerMode: !0,
          centerPadding: "25px",
          mobileFirst: !0,
          responsive: [{ breakpoint: 768, settings: "unslick" }],
        }),
      0 < c(".js-c-voice-slider02").length &&
        c(".js-c-voice-slider02").slick({
          arrows: !0,
          autoplaySpeed: 4e3,
          infinite: !0,
          slidesToShow: 1,
          centerMode: !0,
          centerPadding: "25px",
          dots: !0,
          mobileFirst: !0,
          responsive: [{ breakpoint: 768, settings: "unslick" }],
        }),
      "sp" == e() &&
        0 < c(".js-c-product-slider03-stage").length &&
        c(".js-c-product-slider03-stage").slick({
          arrows: !1,
          autoplaySpeed: 4e3,
          autoplay: !0,
          infinite: !0,
          slidesToShow: 1,
          centerMode: !0,
          centerPadding: "55px",
          dots: !0,
          mobileFirst: !0,
          responsive: [{ breakpoint: 768, settings: "unslick" }],
        }),
      0 < c(".js-product-use-img").length &&
        c(".js-product-use-img").each(function () {
          var e = c(this).attr("src"),
            s = c(this).attr("src").replace("off", "on"),
            t = c(this).attr("src"),
            i = c(this).attr("src").replace("off", "on"),
            a = c(this).attr("src"),
            o = c(this).attr("src").replace("off", "on"),
            r = c(this).attr("src"),
            n = c(this).attr("src").replace("off", "on");
          c(this).hover(
            function () {
              c(this).attr("src", s),
                c(this).attr("src", i),
                c(this).attr("src", o),
                c(this).attr("src", n);
            },
            function () {
              c(this).attr("src", e),
                c(this).attr("src", t),
                c(this).attr("src", a),
                c(this).attr("src", r);
            }
          );
        });
  })(jQuery),
  (function (s) {
    s("body#simulation").length &&
      0 < s(".js-simulator-tab").length &&
      s(".js-simulator-tab").click(function () {
        s(".js-simulator-tab").removeClass("is-active"),
          s(this).addClass("is-active"),
          s(".js-simulator-content").removeClass("is-active");
        var e = s(this).index();
        s(".js-simulator-content").eq(e).addClass("is-active"),
          s(".js-simulation-info-simulator-slider").slick("setPosition");
      }),
      0 < s(".js-simulation-info-simulator-slider").length &&
        s(".js-simulation-info-simulator-slider").slick({
          arrows: !0,
          autoplaySpeed: 4e3,
          autoplay: !0,
          infinite: !0,
          slidesToShow: 2,
          dots: !0,
          responsive: [
            {
              breakpoint: 768,
              settings: { slidesToShow: 1, centerPadding: "25px" },
            },
          ],
        });
  })(jQuery);
