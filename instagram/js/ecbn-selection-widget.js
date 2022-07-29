!function(e){
    var t={};function i(r){
        if(t[
            r
        ])return t[
            r
        ].exports;var n=t[
            r
        ]={
            i: r,
            l: !1,
            exports: {}
        };return e[
            r
        ].call(n.exports,
        n,
        n.exports,
        i),
        n.l=!0,
        n.exports
    }i.m=e,
    i.c=t,
    i.d=function(e,
    t,
    r){
        i.o(e,
        t)||Object.defineProperty(e,
        t,
        {
            enumerable: !0,
            get: r
        })
    },
    i.r=function(e){
        "undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,
        Symbol.toStringTag,
        {
            value: "Module"
        }),
        Object.defineProperty(e,
        "__esModule",
        {
            value: !0
        })
    },
    i.t=function(e,
    t){
        if(1&t&&(e=i(e)),
        8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),
        Object.defineProperty(r,
        "default",
        {
            enumerable: !0,
            value: e
        }),
        2&t&&"string"!=typeof e)for(var n in e)i.d(r,
        n,
        function(t){
            return e[
                t
            ]
        }.bind(null,
        n));return r
    },
    i.n=function(e){
        var t=e&&e.__esModule?function(){
            return e.default
        }: function(){
            return e
        };return i.d(t,
        "a",
        t),
        t
    },
    i.o=function(e,
    t){
        return Object.prototype.hasOwnProperty.call(e,
        t)
    },
    i.p="static_front/js",
    i(i.s=0)
}([
    function(e,
    t,
    i){
        const r=i(1);var n=n?n+1: 1;!function(){
            "use strict";var e=!1;if(!(n>1)){
                var t=null,
                i={
                    selectionDesignApi: "https://www.visumo.jp/MediaManagement/WebApi/SelectionDesign?selection={$selection}&userid={$userid}",
                    selectionApi: "https://www.visumo.jp/MediaManagement/WebApi/Selection?id={$selection}&userid={$userid}&tag={$tag}&tags={$tags}&isMoreRead={$isMoreRead}",
                    selectionPageApi: "https://www.visumo.jp/MediaManagement/WebApi/SelectionPage?id={$selection}&userid={$userid}&tag={$tag}&tags={$tags}&page={$page}&isallcontent={$isallcontent}",
                    selectionTilePageApi: "https://www.visumo.jp/MediaManagement/WebApi/SelectionTilePage?id={$selection}&userid={$userid}&code={$goods}&variationGroup={$variationGroup}&tag={$tag}&tags={$tags}&page={$page}&device={$device}&isallcontent={$isallcontent}",
                    goodsApi: "https://www.visumo.jp/MediaManagement/WebApi/Product?selection={$selection}&userid={$userid}&code={$goods}&variationGroup={$variationGroup}&tag={$tag}&tags={$tags}&isMoreRead={$isMoreRead}",
                    previewApi: "https://www.visumo.jp/MediaManagement/WebApi/Preview?id={$mediaid}&selection={$selection}&userid={$userid}",
                    userPostFirstViewApi: "https://www.visumo.jp/MediaManagement/SelfMedia/GetUserPostFirstView?selection={$selection}&userid={$userid}",
                    creatSessionApi: "https://contents.api.visumo.jp/Contents/Media/Session",
                    getSessionApi: "https://contents.api.visumo.jp/Contents/Media/Session",
                    likeApi: "https://contents.api.visumo.jp/Contents/Media/Like",
                    getLikedMediasApi: "https://contents.api.visumo.jp/Contents/Media/LikedMedias",
                    getLikedCountsApi: "https://contents.api.visumo.jp/Contents/Media/LikedCounts",
                    pageViewUrl: "https://www.visumo.jp/MediaManagement/WebApi/PageView",
                    baseUrl: "https://www.visumo.jp",
                    scriptUrls: [
                        "https://www.visumo.jp/Content/js/tracking.js",
                        "//ajax.googleapis.com/ajax/libs/jquery/3.0.0/jquery.min.js"
                    ],
                    cssUrl: "https://www.visumo.jp/static_front/css/ecbn-selection-widget_version{$cssversion}_v15.css",
                    lazyLoadScriptUrls: [
                        {
                            url: "//assets.pinterest.com/js/pinit.js",
                            callback: function(e){
                                e.setAttribute("data-pin-build",
                                "parsePins")
                            }
                        },
                        {
                            url: "//platform.twitter.com/widgets.js"
                        },
                        {
                            url: "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v11.0&appId=1820468811588339"
                        },
                        {
                            url: "https://d.line-scdn.net/r/web/social-plugin/js/thirdparty/loader.min.js"
                        }
                    ],
                    previewTimeout: "5000",
                    defaultTimeout: "7000",
                    poweredByVisumoUrl: "https://visumo.asia/social_curator?utm_source=powered-by-visumo&utm_medium=referral"
                },
                a={
                    loadCss: function(e){
                        var r=t(".ecbn-selection-widget"),
                        n=J._getOptions(r);w.create({
                            type: "selection-design",
                            selection: n.selection,
                            userid: n.userid
                        }).call().done((function(t){
                            var n=document.createElement("link");n.type="text/css",
                            n.rel="stylesheet",
                            n.href=i.cssUrl.replace("{$cssversion}",
                            t.CssVersion),
                            document.getElementsByTagName("head")[
                                0
                            ].appendChild(n);var a=(new Date).getTime(),
                            s=setInterval((function(){
                                ((new Date).getTime()-a)/1e3>30?clearInterval(s): "none"===r.css("display")&&(clearInterval(s),
                                r.css({
                                    cssText: "display: block;"
                                }),
                                e())
                            }),
                            10)
                        }))
                    },
                    loadScript: function(e,
                    t,
                    i){
                        if(0!==t.length){
                            var r=document.createElement("script");r.setAttribute("type",
                            "text/javascript"),
                            r.setAttribute("src",
                            t.shift()),
                            r.onload=function(){
                                a.loadScript(e,
                                t,
                                i)
                            },
                            e.appendChild(r)
                        }else i()
                    },
                    lazyLoadScripts: function(e,
                    t){
                        for(var i=0;i<t.length;i++){
                            var r=document.createElement("script");r.setAttribute("type",
                            "text/javascript"),
                            r.setAttribute("src",
                            t[
                                i
                            ].url),
                            t[
                                i
                            ].callback&&t[
                                i
                            ].callback(r),
                            e.appendChild(r)
                        }
                    },
                    load: function(e,
                    t){
                        this.loadScript(e,
                        i.scriptUrls,
                        t)
                    },
                    createLoading: function(e){
                        var i=t('  <div class="ecbn-widget-loading">    <div class="ball-pulse">      <div></div>      <div></div>      <div></div>    </div></div>').appendTo(e);return i.onResize=function(){
                            var t=e.height(),
                            r=e.width();i.css({
                                height: String(t||300)+"px",
                                width: r+"px",
                                backgroundColor: "transparent"
                            })
                        },
                        i.onResize(),
                        i
                    }
                },
                s=window.matchMedia("screen and (max-width: 720px)").matches?"sp": "pc",
                o=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(e){
                    window.setTimeout(e,
                    1e3/30)
                },
                l=function(e){
                    var r=function(){
                        return localStorage.getItem("vjs_media_session_"+e)
                    };return{
                        init: function(){
                            r()||this.createSessionAsync()
                        },
                        createSessionAsync: function(){
                            return t.ajax({
                                url: i.creatSessionApi,
                                type: "POST",
                                data: JSON.stringify({
                                    userId: e
                                }),
                                dataType: "json",
                                contentType: "application/json; charset=utf-8"
                            }).then((function(t){
                                var i;i=t.sessionKey,
                                localStorage.setItem("vjs_media_session_"+e,
                                i)
                            }))
                        },
                        getSessionKeyAsync: function(){
                            return t.ajax({
                                url: i.getSessionApi,
                                type: "GET",
                                data: {
                                    userId: e,
                                    sessionKey: r()
                                },
                                dataType: "json",
                                contentType: "application/json; charset=utf-8"
                            })
                        },
                        getLocalSessionKey: function(){
                            return r()
                        }
                    }
                },
                d=function(e){
                    return{
                        likeActionAsync: function(r){
                            return t.ajax({
                                url: i.likeApi,
                                type: "POST",
                                data: JSON.stringify({
                                    userId: e,
                                    instaMediaId: r.instaMediaId,
                                    sessionKey: l(e).getLocalSessionKey()
                                }),
                                dataType: "json",
                                contentType: "application/json; charset=utf-8"
                            })
                        },
                        getLikedCountsAsync: function(r){
                            var n="userId="+encodeURI(e)+t(r.instaMediaIds).map((function(){
                                return "&instaMediaIds="+encodeURI(this)
                            })).get().join("");return t.ajax({
                                url: i.getLikedCountsApi+"?"+n,
                                type: "GET",
                                dataType: "json",
                                contentType: "application/json; charset=utf-8"
                            })
                        },
                        getLikedMediasAsync: function(r){
                            var n="userId="+encodeURI(e)+("&sessionKey="+encodeURI(l(e).getLocalSessionKey()))+t(r.instaMediaIds).map((function(){
                                return "&instaMediaIds="+encodeURI(this)
                            })).get().join("");return t.ajax({
                                url: i.getLikedMediasApi+"?"+n,
                                type: "GET",
                                dataType: "json",
                                contentType: "application/json; charset=utf-8"
                            })
                        }
                    }
                },
                c=function(e){
                    var i=e.viewObject,
                    r=e.userId,
                    n=function(e){
                        return e.replace(/[ !"#$%&'()*+,.\/:;<=>?@\[\\\]^`{|}~]/g,
                        "\\$&")
                    },
                    a=function(e,
                    i){
                        t(".ecbn-selection-like-count-raw-"+n(e)).text(i)
                    },
                    s=function(e,
                    i){
                        i?t(".ecbn-selection-like-count-"+n(e)).addClass("ecbn-like-count--active"): t(".ecbn-selection-like-count-"+n(e)).removeClass("ecbn-like-count--active")
                    };return{
                        on: function(){
                            var e=i.find(".ecbn-selection-like-count").map((function(){
                                return t(this).data("id")
                            })).get();0!=e.length&&(!function(e){
                                d(r).getLikedMediasAsync({
                                    instaMediaIds: e
                                }).done((function(e){
                                    t(e.likedInstaMediaIds).each((function(){
                                        s(this,
                                        !0)
                                    }))
                                }))
                            }(e),
                            function(e){
                                d(r).getLikedCountsAsync({
                                    instaMediaIds: e
                                }).done((function(e){
                                    t(e.likeCounts).each((function(){
                                        a(this.instaMediaId,
                                        this.likeCount)
                                    }))
                                }))
                            }(e),
                            u(i,
                            ".ecbn-selection-like-count",
                            (function(e){
                                var i=t(this),
                                o=t(this).data("id");return function(e,
                                t){
                                    var i=!e.hasClass("ecbn-like-count--active"),
                                    r=e.find(".ecbn-selection-like-count-raw-"+n(t)).text(),
                                    o=i?++r: --r;o<0&&(o=0),
                                    a(t,
                                    r),
                                    s(t,
                                    i)
                                }(i,
                                o),
                                d(r).likeActionAsync({
                                    instaMediaId: o
                                }),
                                !1
                            })))
                        }
                    }
                },
                u=function(e,
                t,
                i){
                    var r=e.find(t);r.off("touchstart mousedown",
                    t),
                    r.off("touchmove mousemove",
                    t),
                    r.off("touchend mouseup click",
                    t);var n=0,
                    a=0,
                    s=0,
                    o=0;return r.on("touchstart mousedown",
                    (function(e){
                        if("touchstart"===e.type){
                            var t=e.touches[
                                0
                            ];if(!t)return;a=n=t.pageX,
                            o=s=t.clientY
                        }else a=n=e.clientX,
                        o=s=e.clientY
                    })),
                    r.on("touchmove mousemove",
                    (function(e){
                        if("touchmove"===e.type){
                            var t=e.touches[
                                0
                            ];if(!t)return;a=t.pageX,
                            o=t.clientY
                        }else a=e.clientX,
                        o=e.clientY
                    })),
                    r.on("touchend click",
                    (function(e){
                        if(Math.abs(n-a)<3&&Math.abs(s-o)<3)return e.stopPropagation(),
                        i.call(this,
                        e);e.cancelable&&e.preventDefault()
                    })),
                    r
                },
                h=function(){
                    return(new Date).getTime()
                },
                f="",
                g=window.navigator.userAgent.toLowerCase();-1!==g.indexOf("msie")||-1!==g.indexOf("trident")?f="ms": -1!==g.indexOf("chrome")||-1!==g.indexOf("safari")||-1!==g.indexOf("applewebkit")||-1!==g.indexOf("firefox")?f="webkit": -1!==g.indexOf("opera")&&(f="o");var p,
                v=(p=0,
                {
                    set: function(e){
                        e?(t("body").css("overflow"),
                        p=t(window).scrollTop(),
                        t("body").css("position",
                        "fixed")): (t("body").css("position",
                        ""),
                        t(window).scrollTop(p))
                    }
                }),
                m=function(e){
                    return t('<div class="ecbn-widget-loading-container">  <div class="ecbn-widget-loading">    <div class="ball-pulse">      <div></div>      <div></div>      <div></div>    </div>  </div></div>').appendTo(e)
                },
                y=function(e,
                i){
                    e.find(".ecbn-widget-loading-container").fadeOut(300,
                    (function(){
                        t(this).remove(),
                        i&&i()
                    }))
                },
                b=function(e,
                t){
                    e.find(".ecbn-widget-loading-container").css("visibility",
                    "hidden")
                },
                _=function(e,
                t){
                    t?e.removeClass("processing").addClass("processing"): e.removeClass("processing")
                },
                T=function(e){
                    return e.hasClass("processing")
                },
                E={
                    Setting: {
                        prefix: "visumo_",
                        currentInfo: {
                            selectionId: "",
                            postId: "",
                            goodsId: "",
                            tag: ""
                        },
                        Initailized: !1,
                        Enabled: !1,
                        eventType: void 0!==window.ontouchstart?"touchstart.gaevent": "click.gaevent"
                    },
                    Initailize: function(e){
                        if(!E.Setting.Initailized){
                            switch(E.Setting.Initailized=!0,
                            !0){
                                case "Analytics"===e&&"undefined"!=typeof ga: E.Execute.Apply=E.Execute.Func.AnalyticsJS;break;case "Gtag"===e&&"undefined"!=typeof gtag: E.Execute.Apply=E.Execute.Func.GtagJS;break;case "Gtag"===e&&"undefined"==typeof gtag&&"undefined"!=typeof dataLayer: E.Execute.Apply=E.Execute.Func.GtagCustomizeJS;break;default: return
                            }window.visumo_ga_active=!0,
                            E.Binding(),
                            E.Setting.Enabled=!0
                        }
                    },
                    Execute: {
                        Apply: function(){},
                        Func: {
                            AnalyticsJS: function(e){
                                ga("send",
                                "event",
                                e.category,
                                e.action,
                                e.label)
                            },
                            GtagJS: function(e){
                                gtag("event",
                                e.action,
                                {
                                    event_category: e.category,
                                    event_label: e.label
                                })
                            },
                            GtagCustomizeJS: function(e){
                                !function(){
                                    dataLayer.push(arguments)
                                }("event",
                                e.action,
                                {
                                    event_category: e.category,
                                    event_label: e.label
                                })
                            }
                        }
                    },
                    PreviewClick: function(e,
                    t){
                        if(!0===E.Setting.Enabled){
                            E.Setting.currentInfo.selectionId=e;var i="";switch(!0){
                                case 0!==t.find("img").length: E.Setting.currentInfo.postId=t.find("img").attr("data-image-url"),
                                i="image";break;case 0!==t.find("video").length: E.Setting.currentInfo.postId=t.find("video").attr("data-image-url"),
                                i="video";break;default: E.Setting.currentInfo.postId="undefined",
                                i="undefined"
                            }var r={};r.category=E.Setting.prefix+e,
                            r.action=E.Setting.prefix+"Preview",
                            r.label=E.Setting.prefix+"type="+i+"_"+E.Setting.currentInfo.postId,
                            E.Execute.Apply(r)
                        }
                    },
                    Event: {
                        PreviewItemClick: function(e){
                            if(!0===E.Setting.Enabled){
                                E.Setting.currentInfo.goodsId=t(e).data("productcd");var i={};i.category=E.Setting.prefix+E.Setting.currentInfo.selectionId,
                                i.action=E.Setting.prefix+E.Setting.currentInfo.goodsId,
                                i.label=E.Setting.prefix+E.Setting.currentInfo.postId,
                                E.Execute.Apply(i)
                            }
                        },
                        TabClick: function(e){
                            if(!0===E.Setting.Enabled){
                                var i=t(e).parents(".ecbn-selection-widget").attr("data-selection"),
                                r=t(e).find(".ecbn-selection-page-tabs--link").text();if(E.Setting.currentInfo.selectionId!==i||E.Setting.currentInfo.tag!==r){
                                    E.Setting.currentInfo.selectionId=i,
                                    E.Setting.currentInfo.tag=r;var n={};n.category=E.Setting.prefix+i,
                                    n.action=E.Setting.prefix+"TagFilter",
                                    n.label=E.Setting.prefix+r,
                                    E.Execute.Apply(n)
                                }
                            }
                        },
                        PreviewVideoClick: function(e,
                        t){
                            if(!0===E.Setting.Enabled){
                                E.Setting.currentInfo.postId=t.find("video").attr("data-image-url");var i={};i.category=E.Setting.prefix+E.Setting.currentInfo.selectionId,
                                i.action=E.Setting.prefix+"Video_"+e,
                                i.label=E.Setting.prefix+E.Setting.currentInfo.postId,
                                E.Execute.Apply(i)
                            }
                        }
                    },
                    Binding: function(){
                        t(document).on("click",
                        '.ecbn-selection-widget .ecbn-selection-page-tabs--item:not(".not-bind")',
                        (function(){
                            E.Event.TabClick(this)
                        }))
                    },
                    TabLinkClick: function(e){
                        E.Event.TabClick(e)
                    },
                    PreviewBinding: function(e){
                        !0===E.Setting.Enabled&&(u(e,
                        ".ecbn-selection-preview-content .ecbn-selection-item-url",
                        (function(e){
                            "touchstart.gaevent"===E.Setting.eventType&&"click"===e.type||E.Event.PreviewItemClick(this)
                        })),
                        0!==e.find("video").length&&E.VideoBinding(e))
                    },
                    VideoBinding: function(e){
                        var t=e.find("video");t.off("play.visumoga").on("play.visumoga",
                        (function(){
                            this.currentTime>0||E.Event.PreviewVideoClick("play",
                            e)
                        })),
                        t.off("pause.visumoga").on("pause.visumoga",
                        (function(){
                            this.currentTime!==this.duration&&E.Event.PreviewVideoClick("pause",
                            e)
                        })),
                        t.off("ended.visumoga").on("ended.visumoga",
                        (function(){
                            E.Event.PreviewVideoClick("ended",
                            e)
                        })),
                        t.paused||E.Event.PreviewVideoClick("play",
                        e)
                    }
                },
                w=function(){
                    this._initialize.apply(this,
                    arguments)
                };w.prototype._initialize=function(e,
                t){
                    this._apiUrl=e,
                    this._timeOut=t||0
                },
                w.prototype.call=function(){
                    return t.ajax({
                        url: this._apiUrl,
                        type: "GET",
                        timeout: this._timeOut
                    })
                },
                w.prototype.post=function(e){
                    return t.ajax({
                        type: "POST",
                        url: this._apiUrl,
                        data: JSON.stringify(e),
                        contentType: "application/json",
                        dataType: "json"
                    })
                },
                w.prototype.load=function(e,
                i){
                    var r=new t.Deferred;return this.call().done((function(n){
                        n.match(/^\r?\n$/g)&&e.css("min-height",
                        "0");var a=n;a&&(a=a.replace(/(&#64;)/g,
                        "@")),
                        i?t(e).html(a): t(e).append(a),
                        r.resolve()
                    })).fail((function(e){
                        r.reject(e)
                    })),
                    r.promise()
                },
                w.create=function(e){
                    var r="",
                    n=i.defaultTimeout;if("selection"===e.type)r=i.selectionApi.replace("{$selection}",
                    e.selection).replace("{$userid}",
                    e.userid).replace("{$tag}",
                    e.tag?encodeURIComponent(e.tag): "").replace("{$tags}",
                    e.tags?encodeURIComponent(e.tags): "").replace("{$isMoreRead}",
                    e.isMoreRead);else if("selection-page"===e.type)r=i.selectionPageApi.replace("{$selection}",
                    e.selection).replace("{$userid}",
                    e.userid).replace("{$tag}",
                    e.tag?encodeURIComponent(e.tag): "").replace("{$tags}",
                    e.tags?encodeURIComponent(e.tags): "").replace("{$page}",
                    e.page).replace("{$isallcontent}",
                    e.isallcontent);else if("selection-tile"===e.type)r=i.selectionTilePageApi.replace("{$selection}",
                    e.selection).replace("{$userid}",
                    e.userid).replace("{$goods}",
                    "").replace("{$variationGroup}",
                    "").replace("{$tag}",
                    e.tag?encodeURIComponent(e.tag): "").replace("{$tags}",
                    e.tags?encodeURIComponent(e.tags): "").replace("{$page}",
                    e.page).replace("{$device}",
                    e.device).replace("{$isallcontent}",
                    e.isallcontent);else if("goods"===e.type)r=i.goodsApi.replace("{$selection}",
                    e.selection).replace("{$userid}",
                    e.userid).replace("{$goods}",
                    e[
                        "goods-hidden-id"
                    ]?t("#"+e[
                        "goods-hidden-id"
                    ]).val(): "").replace("{$variationGroup}",
                    e[
                        "itemgroup-hidden-id"
                    ]?t("#"+e[
                        "itemgroup-hidden-id"
                    ]).val(): "").replace("{$tag}",
                    e.tag?encodeURIComponent(e.tag): "").replace("{$tags}",
                    e.tags?encodeURIComponent(e.tags): "").replace("{$isMoreRead}",
                    e.isMoreRead);else if("goods-tile"===e.type)r=i.selectionTilePageApi.replace("{$selection}",
                    e.selection).replace("{$userid}",
                    e.userid).replace("{$goods}",
                    e[
                        "goods-hidden-id"
                    ]?t("#"+e[
                        "goods-hidden-id"
                    ]).val(): "").replace("{$variationGroup}",
                    e[
                        "itemgroup-hidden-id"
                    ]?t("#"+e[
                        "itemgroup-hidden-id"
                    ]).val(): "").replace("{$tag}",
                    e.tag?encodeURIComponent(e.tag): "").replace("{$tags}",
                    e.tags?encodeURIComponent(e.tags): "").replace("{$page}",
                    e.page).replace("{$device}",
                    e.device).replace("{$isallcontent}",
                    e.isallcontent);else if("preview"===e.type)r=i.previewApi.replace("{$mediaid}",
                    e.mediaid).replace("{$selection}",
                    e.selection).replace("{$userid}",
                    e.userid),
                    n=i.previewTimeout;else if("selection-design"===e.type)r=i.selectionDesignApi.replace("{$selection}",
                    e.selection).replace("{$userid}",
                    e.userid);else{
                        if("selection-cssversion"!==e.type)throw new Error("bad arguments for Api.create.");r=i.selectionCssApi.replace("{$selection}",
                        e.selection).replace("{$userid}",
                        e.userid)
                    }return new w(r,
                    n)
                };var S,
                A=(S=null,
                {
                    play: function(e,
                    t){
                        A.destroy(),
                        t.lastIndexOf(".m3u8")>0&&r.isSupported()&&(null==S&&(S=new r),
                        S.loadSource(t),
                        S.attachMedia(e),
                        S.on(r.Events.MANIFEST_PARSED,
                        (function(){
                            setTimeout((function(){
                                e.play()
                            }),
                            0)
                        })))
                    },
                    destroy: function(){
                        null!=S&&(S.destroy(),
                        S=null)
                    }
                }),
                R=function(){};R.prototype.shownFirstView=function(e,
                t){
                    if("selection"!==e.parents(".ecbn-selection-widget").data("type")&&"selection-page"!==e.parents(".ecbn-selection-widget").data("type")&&"selection-tile"!==e.parents(".ecbn-selection-widget").data("type"))return this.isFirstView=!0,
                    void t();if(window.pageYOffset+window.innerHeight>=e.offset().top-1e3)return this.isFirstView=!0,
                    void t();var i=this;window.addEventListener("scroll",
                    (function(){
                        !i.isFirstView&&window.pageYOffset+window.innerHeight>=e.offset().top-1e3&&(i.isFirstView=!0,
                        t())
                    }))
                };var k=function(){};k.prototype.showTwitter=function(e){
                    var t=e.find(".ecbn-share-twitter");0!==t.length&&"undefined"!=typeof twttr&&(t.empty(),
                    twttr&&twttr.widgets.createShareButton(document.URL,
                    t.get(0),
                    {
                        lang: "ja",
                        size: "small"
                    }))
                },
                k.prototype.showFacebook=function(e){
                    var t=e.find(".ecbn-share-facebook");0!==t.length&&"undefined"!=typeof FB&&(t.empty(),
                    t.html(this.createFacebook()),
                    FB.XFBML.parse())
                },
                k.prototype.showLine=function(e){
                    var t=e.find(".ecbn-share-line");0!==t.length&&"undefined"!=typeof LineIt&&(t.empty(),
                    t.html(this.createLine()),
                    LineIt.loadButton())
                },
                k.prototype.showPinterest=function(e){
                    var i=e.find(".ecbn-share-pinterest");if(0!==i.length&&"undefined"!=typeof parsePins){
                        var r=e.find(".ecbn-selection-snap-image").find("img").attr("src");r||(r=e.find(".ecbn-selection-snap-image").find("video").attr("poster")),
                        i.empty(),
                        i.html(this.createPinterest(r)),
                        parsePins(document.getElementById("#ecbn-share-pinterest--link"));var n=setInterval((function(){
                            var e=t(".ecbn-share-pinterest").find("a");-1!==e.attr("class").indexOf("PIN_")&&(clearInterval(n),
                            e.unbind("click").click((function(){
                                return window.open(this.href,
                                "PINwindow",
                                "width=600, height=600, menubar=no, toolbar=no, scrollbars=yes"),
                                !1
                            })))
                        }),
                        10)
                    }
                },
                k.prototype.createFacebook=function(){
                    return t('<div class="fb-share-button"></div>').attr("data-href",
                    document.URL).attr("data-layout",
                    "button").attr("data-lazy",
                    "false").attr("data-size",
                    "small").html((function(){
                        return '<a class="fb-xfbml-parse-ignore" target="_blank" href="https://www.facebook.com/sharer/sharer.php?u='+encodeURIComponent(document.URL)+'&amp;src=sdkpreparse">シェア</a>'
                    }))
                },
                k.prototype.createLine=function(){
                    return t('<div class="line-it-button" ></div>').attr("data-lang",
                    "ja").attr("data-type",
                    "share-a").attr("data-ver",
                    "2").attr("data-url",
                    document.URL).css("display",
                    "none")
                },
                k.prototype.createPinterest=function(e){
                    var i=encodeURIComponent(document.URL),
                    r=encodeURIComponent(t("title").text());return t('<a id="ecbn-share-pinterest--link" href="//www.pinterest.com/pin/create/button/?url='+i+"&media="+encodeURIComponent(e)+"&description="+r+'" data-pin-do="buttonBookmark"></a>')
                };var L,
                D=function(e,
                t){
                    t?e.removeClass("ecbn-selection-content--active").addClass("ecbn-selection-content--active"): e.removeClass("ecbn-selection-content--active")
                },
                I=(L=null,
                function(e){
                    if(void 0===this._initialize)throw new Error("error");this._initialize.apply(this,
                    [
                        e
                    ]),
                    L=this;var i=this._$layer;t(window).on("resize",
                    {
                        instance: L
                    },
                    (function(e){
                        e.data.instance.onResize()
                    }));var r=t(".ecbn-page-top");r.hide();var n=.2*t(window).height();i.scroll((function(){
                        i.scrollTop()>n?r.show(): r.hide()
                    })),
                    r.click((function(){
                        return i.animate({
                            scrollTop: 0
                        },
                        500),
                        !1
                    }))
                }),
                x={};I.getInstance=function(e){
                    var t=I.getSelectionLogicalId(e);return x[
                        t
                    ]||(x[
                        t
                    ]=new I(e)),
                    x[
                        t
                    ]
                },
                I.prototype._$layer=null,
                I.prototype._$wrapper=null,
                I.prototype._index=0,
                I.prototype._tagName="",
                I.prototype._$list=[],
                I.prototype._$loader=null,
                I.prototype._cache={},
                I.prototype._currentOptions={},
                I.prototype._initialize=function(e){
                    this._$layer=t("#__inner_lightbox.ecbn-selection-preview-"+I.getSelectionLogicalId(e)).first(),
                    this._$wrapper=this._$layer.find(".ecbn-selection-preview-wrapper"),
                    this._$overlay=this._$layer.find(".ecbn-selection-preview-overlay"),
                    this._$widget=e,
                    this._$layer.css("overflow",
                    "hidden"),
                    this._$overlay.css("background-color",
                    "#000"),
                    this._$loader=a.createLoading(this._$layer),
                    this._$loader.hide(),
                    this.hls=null;var i=this,
                    r=this._$layer;this._$layer.on("click",
                    (function(){
                        A.destroy(),
                        r.attr("data-isnew-design")&&(i.hide(),
                        O.deleteParam())
                    })),
                    this._$wrapper.on("click",
                    (function(e){
                        r.attr("data-isnew-design")&&e.stopPropagation()
                    })),
                    this._$wrapper.on("click",
                    ".ecbn-selection-preview-close",
                    (function(e){
                        A.destroy(),
                        i.hide(),
                        O.deleteParam()
                    })),
                    this._$wrapper.on("click",
                    ".ecbn-selection-prevarrow",
                    (function(e){
                        A.destroy(),
                        i.prev()
                    })),
                    this._$wrapper.on("click",
                    ".ecbn-selection-nextarrow",
                    (function(e){
                        A.destroy(),
                        i.next()
                    })),
                    this._$wrapper.css("opacity",
                    "0")
                },
                I.prototype.appendEvent=function(e){
                    var t=this;this._$wrapper.on("click",
                    ".ecbn-selection-prevarrow",
                    (function(e){
                        t.prev()
                    })),
                    this._$wrapper.on("click",
                    ".ecbn-selection-nextarrow",
                    (function(e){
                        t.next()
                    }))
                },
                I.prototype.setList=function(e){
                    this._$list=e
                },
                I.prototype.setIndex=function(e){
                    this._index=e
                },
                I.prototype.setTag=function(e){
                    this._tagName=e
                },
                I.prototype.getCurrentId=function(){
                    return this._$list.eq(this._index).data("id")
                },
                I.prototype._isFirstDirectPreview=!0,
                I.prototype._loadContent=function(){
                    var r,
                    n=new t.Deferred,
                    s=this,
                    o=this._$layer.find(".ecbn-selection-preview-content");this._currentOptions.PreviewMediaId&&s._isFirstDirectPreview?(r=this._currentOptions.PreviewMediaId,
                    s._isFirstDirectPreview=!1): r=this.getCurrentId();var l,
                    d,
                    u=this._currentOptions.selection+r,
                    h=this._currentOptions.selection;return l=".ecbn-selection-item",
                    (d=o.find(l)).off("touchstart mousedown",
                    l),
                    d.off("touchmove mousemove",
                    l),
                    d.off("touchend mouseup click",
                    l),
                    O.deleteParam(),
                    O.setParam(r),
                    s._cache[
                        u
                    ]?s._$wrapper.animate({
                        opacity: 0,
                        top: "25px"
                    },
                    150,
                    "easeOutQuart",
                    (function(){
                        if(o.html(s._cache[
                            u
                        ]),
                        o.find(".ecbn-selection-business-operator-comment").each((function(){
                            ""!=t(this).text()?o.find(".ecbn-selection-business-operator-comment-box").show(): o.find(".ecbn-selection-business-operator-comment-box").hide()
                        })),
                        o.find(".ecbn-selection-free-comment2").each((function(){
                            ""!=t(this).text()?o.find(".ecbn-selection-free-comment2-box").show(): o.find(".ecbn-selection-free-comment2-box").hide()
                        })),
                        o.find(".ecbn-selection-free-comment3").each((function(){
                            ""!=t(this).text()?o.find(".ecbn-selection-free-comment3-box").show(): o.find(".ecbn-selection-free-comment3-box").hide()
                        })),
                        o.find("video").each((function(){
                            var e=t(this),
                            i=e.attr("src");e.on("resize",
                            (function(){
                                e.prop("clientWidth")<e.prop("clientHeight")?e.addClass("portrait"): e.removeClass("portrait")
                            })),
                            A.play(e[
                                0
                            ],
                            i)
                        })),
                        o.find(".ecbn-share_button").length>0)if(e){
                            var r=new k;r.showTwitter(o),
                            r.showFacebook(o),
                            r.showLine(o),
                            r.showPinterest(o)
                        }else a.lazyLoadScripts(document.getElementsByTagName("head")[
                            0
                        ],
                        i.lazyLoadScriptUrls),
                        e=!0,
                        setTimeout((function(){
                            var e=new k;e.showTwitter(o),
                            e.showFacebook(o),
                            e.showLine(o),
                            e.showPinterest(o)
                        }),
                        3e3);if(c({
                            userId: s._currentOptions.userid,
                            viewObject: o
                        }).on(),
                        "undefined"!=typeof dataLayer){
                            var l="";o.find(".ecbn-selection-snap-image").children().each((function(){
                                t(this).data("image-url")&&(l=t(this).data("image-url"))
                            })),
                            l&&s.pushGtmEvent("touchend",
                            h,
                            l)
                        }n.resolve()
                    })): w.create({
                        type: "preview",
                        mediaid: r,
                        selection: this._currentOptions.selection,
                        userid: this._currentOptions.userid
                    }).call(o).done((function(r){
                        return s._currentOptions.PreviewMediaId&&!0===t(r).data("ecbn-selection-preview-data-notexists")||s._currentOptions.PreviewMediaId&&s.isOtherPreviewLoad()?n.reject(): (s.isLoad=!0,
                        s._cache[
                            u
                        ]=r,
                        void s._$wrapper.animate({
                            opacity: 0,
                            top: "25px"
                        },
                        150,
                        "easeOutQuart",
                        (function(){
                            if(o.html(r),
                            o.find(".ecbn-selection-business-operator-comment").each((function(){
                                ""!=t(this).text()?o.find(".ecbn-selection-business-operator-comment-box").show(): o.find(".ecbn-selection-business-operator-comment-box").hide()
                            })),
                            o.find(".ecbn-selection-free-comment2").each((function(){
                                ""!=t(this).text()?o.find(".ecbn-selection-free-comment2-box").show(): o.find(".ecbn-selection-free-comment2-box").hide()
                            })),
                            o.find(".ecbn-selection-free-comment3").each((function(){
                                ""!=t(this).text()?o.find(".ecbn-selection-free-comment3-box").show(): o.find(".ecbn-selection-free-comment3-box").hide()
                            })),
                            o.find("video").each((function(){
                                var e=t(this),
                                i=e.attr("src");e.on("resize",
                                (function(){
                                    e.prop("clientWidth")<e.prop("clientHeight")?e.addClass("portrait"): e.removeClass("portrait")
                                })),
                                A.play(e[
                                    0
                                ],
                                i)
                            })),
                            o.find(".ecbn-share_button").length>0)if(e){
                                (l=new k).showTwitter(o),
                                l.showFacebook(o),
                                l.showLine(o),
                                l.showPinterest(o)
                            }else{
                                a.lazyLoadScripts(document.getElementsByTagName("head")[
                                    0
                                ],
                                i.lazyLoadScriptUrls),
                                e=!0;var l=new k,
                                d=0,
                                u=setInterval((function(){
                                    "undefined"!=typeof twttr&&(clearInterval(u),
                                    l.showTwitter(o)),
                                    ++d>99&&clearInterval(u)
                                }),
                                100),
                                f=0,
                                g=setInterval((function(){
                                    "undefined"!=typeof FB&&(clearInterval(g),
                                    l.showFacebook(o)),
                                    ++f>99&&clearInterval(g)
                                }),
                                100),
                                p=0,
                                v=setInterval((function(){
                                    "undefined"!=typeof LineIt&&(clearInterval(v),
                                    l.showLine(o)),
                                    ++p>99&&clearInterval(v)
                                }),
                                100),
                                m=0,
                                y=setInterval((function(){
                                    "undefined"!=typeof parsePins&&(clearInterval(y),
                                    l.showPinterest(o)),
                                    ++m>99&&clearInterval(y)
                                }),
                                100)
                            }if(c({
                                userId: s._currentOptions.userid,
                                viewObject: o
                            }).on(),
                            !s._currentOptions.PreviewMediaId&&"undefined"!=typeof dataLayer){
                                var b="";o.find(".ecbn-selection-snap-image").children().each((function(){
                                    t(this).data("image-url")&&(b=t(this).data("image-url"))
                                })),
                                b&&s.pushGtmEvent("touchend",
                                h,
                                b)
                            }n.resolve()
                        })))
                    })).fail((function(e){
                        var r="";r+='  <div class="ecbn-preview-error-body">',
                        r+="    <p>現在、サーバーが大変混雑しております。</p>",
                        r+="    <p>しばらく時間をおいてからお試しくださいますようお願いします。</p>",
                        r+='    <div class="ecbn-preview-error-footer"><span class="ecbn-preview-error-powered-pre">powered by</span><a class="ecbn-preview-error-powered-name" href="'+i.poweredByVisumoUrl+'" target="_blank">visumo</a></div>',
                        r+="  </div>",
                        o.html(t(r)),
                        n.resolve()
                    })),
                    n.promise()
                },
                I.prototype._showLayer=function(){
                    var e=new t.Deferred;return this._$layer.is(":hidden")?this._$layer.fadeIn(150,
                    (function(){
                        e.resolve()
                    })): e.resolve(),
                    e.promise()
                },
                I.prototype.onResize=function(){
                    this._slider&&this._slider.onResize(),
                    this._$loader&&this._$loader.onResize()
                },
                I.prototype._loadImages=function(){
                    var e=new t.Deferred,
                    i=this._$layer.find(".ecbn-selection-preview-content").find("img"),
                    r=i.length;this._$layer.find(".ecbn-selection-right-item-list").data("exists-goods");return r>0?(i.each((function(){
                        var e=t(this);e.attr("src",
                        e.data("url"))
                    })),
                    e.resolve()): e.resolve(),
                    e.promise()
                },
                I.prototype._setupSlider=function(){
                    var e=this,
                    i=this._$layer.find(".ecbn-selection-right-item-list").wrap((function(){
                        return t('<div class="ecbn-selection-preview-slide-wrapper"></div>').append('<div class="ecbn-selection-slider-view"></div>')
                    }));if(i.parent().css({
                        width: "100%",
                        overflow: "hidden"
                    }),
                    "True"===this._$layer.find(".ecbn-selection-right-item-list").data("exists-goods")){
                        var r=t.extend({},
                        Z,
                        {
                            centering: !0,
                            container: ".ecbn-selection-preview-slide-wrapper",
                            target: ".ecbn-selection-right-item-list"
                        });this._slider=new H(this._$layer,
                        r),
                        this.pager=V.create(i.parent(),
                        ".ecbn-selection-right-item-list",
                        !0),
                        this._slider.setPager(this.pager),
                        u(i,
                        ".ecbn-selection-item",
                        (function(i,
                        r){
                            return!!e.isShow&&(location.href=t(this).find("a").attr("href"),
                            !0)
                        })),
                        this.showGoodsLoadingAnimation()
                    }
                },
                I.prototype._showContent=function(){
                    var e=new t.Deferred,
                    i=this;this._$layer.css("overflow",
                    ""),
                    this._$wrapper.css({
                        display: "block",
                        opacity: "0"
                    }),
                    this._setupSlider(),
                    this._$layer.find(".selection-prev-image").css("display",
                    "block"),
                    this._$layer.find(".ecbn-selection-next-image").css("display",
                    "block"),
                    this._index<1?this._$layer.find(".ecbn-selection-prevarrow").hide(): this._$layer.find(".ecbn-selection-prevarrow").show(),
                    this._index>=this._$list.length-1?this._$layer.find(".ecbn-selection-nextarrow").hide(): this._$layer.find(".ecbn-selection-nextarrow").show();var r=this._$layer.find(".ecbn-selection-right-item-list");return i.blur(!0),
                    this._$wrapper.animate({
                        opacity: 1,
                        top: "0"
                    },
                    100,
                    "easeOutQuart",
                    (function(){
                        e.resolve(),
                        i._slider&&i.pager.update(0,
                        r.children().length,
                        i._slider)
                    })),
                    i._$overlay.css("background-color",
                    ""),
                    e.promise()
                },
                I.prototype.show=function(e){
                    this._slider&&this._slider.destroy(),
                    this._slider=null,
                    this._currentOptions=e,
                    this._$wrapper.css("opacity",
                    0),
                    this._$layer.attr("data-isnew-design",
                    !0),
                    this._$layer.removeClass("ecbn-selection-preview-new").addClass("ecbn-selection-preview-new"),
                    this._$overlay.css("background-color",
                    "#000"),
                    this.blur(!1),
                    this.disableBgScroll(),
                    this._currentOptions.PreviewMediaId?this.overlayHide(): (this.overlayShow(),
                    this._$loader.show());var r=this;return t.when(this._showLayer(),
                    this._loadContent()).then(this.bindSelf("_showContent")).then(this.bindSelf("_loadImages"),
                    (function(){
                        return r._currentOptions.PreviewMediaId?(r.hide(!0),
                        r._currentOptions.PreviewMediaId=null,
                        (new t.Deferred).reject().promise()): (r.hideGoodsLoadingAnimation(),
                        r._showContent(),
                        r._$loader.hide(),
                        r.isShow=!0,
                        r._$layer.find(".ecbn-selection-preview-content").html('<p style="padding-bottom: 1em;">読み込みに失敗しました.</p>'),
                        r.overlayShow(),
                        (new t.Deferred).resolve().promise())
                    })).then((function(){
                        r.overlayShow(),
                        r._currentOptions.PreviewMediaId=null,
                        r.hideGoodsLoadingAnimation(),
                        r.showGoods(),
                        r._$loader.hide(),
                        r.isShow=!0;var e={
                            userid: r._currentOptions.userid,
                            type: "preview",
                            selection: r._currentOptions.selection,
                            mediaid: r.getCurrentId()
                        };t.get(i.pageViewUrl,
                        e),
                        E.PreviewClick(r._currentOptions.selection,
                        r._$layer.find(".ecbn-selection-preview-content .ecbn-selection-snap-image")),
                        E.PreviewBinding(r._$wrapper);var n=r._currentOptions[
                            "goods-hidden-id"
                        ]?t("#"+r._currentOptions[
                            "goods-hidden-id"
                        ]).val(): "",
                        a={
                            userid: r._currentOptions.userid,
                            selection: r._currentOptions.selection,
                            mediaid: r.getCurrentId(),
                            type: r._currentOptions.type,
                            tag: r._tagName,
                            productcd: n
                        };VisumoJPTracking.PhotoClick(a);var s=!1;return r._$layer.removeClass("ecbn-pointer-events-none"),
                        u(r._$layer,
                        ".ecbn-selection-preview-content .ecbn-selection-item-url",
                        (function(e){
                            if("click"==e.type&&!s){
                                s=!0;var i=t(this).data("url"),
                                n=t(this).data("goods-detail-preview-mode"),
                                a=t(this);"#"===a.attr("href")&&a.attr("href",
                                i),
                                a.attr("rel",
                                "noopener noreferrer"),
                                1===n?a.attr("target",
                                "_blank"): e.preventDefault();var o={
                                    userid: r._currentOptions.userid,
                                    selection: r._currentOptions.selection,
                                    mediaid: r.getCurrentId(),
                                    type: r._currentOptions.type,
                                    tag: r._tagName,
                                    productcd: t(this).attr("data-productcd")
                                };VisumoJPTracking.ProductClick(o,
                                (function(){
                                    s=!1,
                                    0===n&&(a.off("click"),
                                    a[
                                        0
                                    ].click())
                                }))
                            }
                        })),
                        (new t.Deferred).resolve().promise()
                    }),
                    (function(){
                        return(new t.Deferred).reject().promise()
                    }))
                },
                I.prototype.bindSelf=function(e){
                    var t=this,
                    i=this[
                        e
                    ];return function(){
                        return i.apply(t,
                        arguments)
                    }
                },
                I.prototype.next=function(){
                    this._$layer.attr("data-isnew-design")&&this._index<this._$list.length-1&&(this._index++,
                    this.show(this._currentOptions))
                },
                I.prototype.prev=function(){
                    this._$layer.attr("data-isnew-design")&&this._index>0&&(this._index--,
                    this.show(this._currentOptions))
                },
                I.prototype.blur=function(e){
                    e?t("body").children().each((function(){
                        t(this).hasClass("ecbn-selection-preview")||t(this).removeClass("ecbn-background-blur").addClass("ecbn-background-blur")
                    })): t("body").children().each((function(){
                        t(this).removeClass("ecbn-background-blur")
                    }))
                },
                I.prototype.showGoodsLoadingAnimation=function(){
                    var e=this._$wrapper.find(".ecbn-selection-preview-slide-wrapper");m(e);var t=e.find(".ecbn-selection-slider-view").height()/2;e.find(".ecbn-widget-loading-container").css("top",
                    "-"+t.toString(10)+"px")
                },
                I.prototype.hideGoodsLoadingAnimation=function(){
                    var e=this._$wrapper.find(".ecbn-selection-preview-slide-wrapper");b(e)
                },
                I.prototype.showGoods=function(){
                    var e=this._$wrapper.find(".ecbn-selection-right-item-list");e.css("display",
                    "none").css("visibility",
                    "visible"),
                    e.fadeIn(500)
                },
                I.prototype.disableBgScroll=function(){
                    t("body").css("top")&&"auto"!==t("body").css("top")&&"0px"!==t("body").css("top")||(this._currentScrolltop=t("html,body").scrollTop()),
                    t("body").css({
                        top: -this._currentScrolltop
                    }),
                    t("body").addClass("ecbn-selection-preview-overflow-hidden")
                },
                I.prototype.enableBgScroll=function(){
                    t("body").removeClass("ecbn-selection-preview-overflow-hidden"),
                    t("body").css({
                        top: ""
                    }),
                    t("html, body").scrollTop(this._currentScrolltop)
                },
                I.prototype.hide=function(e){
                    if(this.isShow&&!this._$layer.is(":hidden")||e){
                        var t=this;t.isShow=!1,
                        t.isLoad=!1,
                        this._$loader.hide(),
                        this.blur(!1),
                        this._$overlay.css("background-color",
                        ""),
                        this._$wrapper.animate({
                            opacity: 0,
                            top: "25px"
                        },
                        700,
                        "easeOutQuart"),
                        this._$layer.fadeOut(10,
                        (function(){
                            t._$layer.find(".ecbn-selection-preview-content").html(""),
                            t._$layer.addClass("ecbn-pointer-events-none")
                        })),
                        t.enableBgScroll()
                    }
                },
                I.prototype.overlayHide=function(e){
                    this._$layer.find(".ecbn-selection-preview-overlay").css("opacity",
                    "0")
                },
                I.prototype.overlayShow=function(e){
                    this._$layer.find(".ecbn-selection-preview-overlay").css("opacity",
                    "0.5")
                },
                I.getSelectionLogicalId=function(e){
                    return e.closest(".ecbn-selection-widget").data("selection")
                },
                I.prototype.isOtherPreviewLoad=function(){
                    for(var e=I.getSelectionLogicalId(this._$widget),
                    t=Object.keys(x),
                    i=0;i<t.length;i++)if(e!==t[
                        i
                    ]&&!0===x[
                        t[
                            i
                        ]
                    ].isLoad)return!0;return!1
                },
                I.prototype.pushGtmEvent=function(e,
                t,
                i){
                    dataLayer.push({
                        event: e,
                        selection: t,
                        imageUrl: i
                    })
                };var O={
                    _directPreviewParamName: "vsmsc",
                    getParam: function(e){
                        e||(e=window.location.href);var t=this._directPreviewParamName.replace(/[\[\]]/g,
                        "\\$&"),
                        i=new RegExp("[?&]"+t+"(=([^&#]*)|&|#|$)").exec(e);return i?i[
                            2
                        ]?decodeURIComponent(i[
                            2
                        ].replace(/\+/g,
                        " ")): "": null
                    },
                    deleteParam: function(){
                        var e=location.search,
                        t=location.hash,
                        i="";if(""!==e)for(var r=e.slice(1).split("&"),
                        n=0;n<r.length;n++){
                            var a=r[
                                n
                            ].split("="),
                            s=a[
                                0
                            ],
                            o=a[
                                1
                            ];s!==this._directPreviewParamName&&(i+=""!==i?"&": "?",
                            i+=s+"="+o)
                        }history.replaceState(null,
                        null,
                        location.href.split(/[#\?]/)[
                            0
                        ]+i+t)
                    },
                    setParam: function(e){
                        var t=location.search,
                        i=location.hash;""!==t?t+="&"+this._directPreviewParamName+"="+e: t="?"+this._directPreviewParamName+"="+e,
                        history.replaceState(null,
                        null,
                        location.href.split(/[#\?]/)[
                            0
                        ]+t+i)
                    },
                    showDirectPreview: function(e){
                        var i=new t.Deferred,
                        r=O.getParam();if(r){
                            var n=I.getInstance(this);n.setList(this.find(".ecbn-selection-snap a"));var a=0,
                            s=-1;n._$list.each((function(){
                                t(this).data("id")===r&&(s=a),
                                a++
                            })),
                            -1===s&&(n._$list.length=0),
                            n.setIndex(s),
                            e.PreviewMediaId=r,
                            n.show(e).then((function(){
                                i.resolve()
                            })).catch((function(){
                                i.reject()
                            }))
                        }else i.resolve();return i.promise()
                    }
                },
                C=function(){
                    if(!(this instanceof C))return new C
                };C.prototype.getParam=function(e){
                    var t=window.location.search;if(t.length<1)return null;for(var i=t.substring(1).split("&"),
                    r=0;r<i.length;r++){
                        var n=i[
                            r
                        ].split("=");if(n[
                            0
                        ]==e)return decodeURIComponent(n[
                            1
                        ])
                    }return null
                },
                C.prototype.changeUrl=function(e,
                t){
                    var i=window.location.search,
                    r=window.location.hash,
                    n="";if(""==i)n+="?"+e+"="+t;else{
                        for(var a=i.slice(1).split("&"),
                        s=0;s<a.length;s++){
                            var o=a[
                                s
                            ].split("="),
                            l=o[
                                0
                            ],
                            d=o[
                                1
                            ];l!==e&&(n+=""!==n?"&": "?",
                            n+=l+"="+d)
                        }n+=n?"&"+e+"="+t: "?"+e+"="+t
                    }history.replaceState(null,
                    null,
                    location.href.split(/[#\?]/)[
                        0
                    ]+n+r)
                };var P={
                    _updatables: [],
                    update: function(){
                        for(var e=this._updatables.length-1;e>=0;e--)this._updatables[
                            e
                        ]()
                    },
                    add: function(e){
                        this._updatables.push(e)
                    },
                    remove: function(e){
                        var t=this._updatables.indexOf(e);t>=0&&this._updatables.splice(t,
                        1)
                    }
                },
                M=function(e){
                    this._initialize.apply(this,
                    arguments)
                };M.prototype={
                    _initialize: function(e){
                        this._targets=[],
                        this.setElement(e)
                    },
                    setElement: function(e){
                        this._container&&(this._container.removeEventListener("touchstart",
                        this,
                        {
                            passive: !1
                        }),
                        this._container.removeEventListener("touchend",
                        this,
                        {
                            passive: !1
                        }),
                        this._container.removeEventListener("touchmove",
                        this,
                        {
                            passive: !1
                        }),
                        this._container.removeEventListener("touchcancel",
                        this,
                        {
                            passive: !1
                        }),
                        this._container.removeEventListener("mousemove",
                        this,
                        {
                            passive: !1
                        }),
                        this._container.removeEventListener("mouseup",
                        this,
                        {
                            passive: !1
                        }),
                        this._container.removeEventListener("mousedown",
                        this,
                        {
                            passive: !1
                        }),
                        this._container.removeEventListener("mouseleave",
                        this,
                        {
                            passive: !1
                        })),
                        e&&(e.addEventListener("touchstart",
                        this,
                        {
                            passive: !1
                        }),
                        e.addEventListener("touchend",
                        this,
                        {
                            passive: !1
                        }),
                        e.addEventListener("touchmove",
                        this,
                        {
                            passive: !1
                        }),
                        e.addEventListener("touchcancel",
                        this,
                        {
                            passive: !1
                        }),
                        e.addEventListener("mousemove",
                        this,
                        {
                            passive: !1
                        }),
                        e.addEventListener("mouseup",
                        this,
                        {
                            passive: !1
                        }),
                        e.addEventListener("mousedown",
                        this,
                        {
                            passive: !1
                        }),
                        e.addEventListener("mouseleave",
                        this,
                        {
                            passive: !1
                        })),
                        this._container=e
                    },
                    destroy: function(){
                        this.setElement(null),
                        this.clearTargets()
                    },
                    addTarget: function(e){
                        this._targets.push(e)
                    },
                    removeTarget: function(e){
                        var t=this._targets,
                        i=t.indexOf(e);-1!==i&&t.splice(i,
                        1)
                    },
                    clearTargets: function(){
                        this._targets.length=0,
                        this._targets=[]
                    },
                    handleEvent: function(e){
                        for(var t=this._targets,
                        i=t.length,
                        r=0;r<i;r++)t[
                            r
                        ].update(e)
                    }
                };var F=0,
                N=1,
                U=2,
                B=3,
                G=4,
                j=function(){
                    this._initialize.apply(this,
                    arguments)
                };j.prototype._prevX=0,
                j.prototype._prevTime=0,
                j.prototype._totalDx=0,
                j.prototype._lastSpeed=0,
                j.prototype._isMove=!1,
                j.prototype.status=F,
                j.prototype.startStatus=F,
                j.prototype._ditector=null,
                j.prototype.enabled=!0,
                j.prototype._initialize=function(e){
                    this._ditector=new M(e),
                    this._ditector.addTarget(this)
                },
                j.prototype.destroy=function(){
                    this._ditector.destroy(),
                    this._ditector=null
                },
                j.prototype._onStarted=!1,
                j.prototype.setOnMove=function(e){
                    this.onMove=e
                },
                j.prototype.setOnMoveEnd=function(e){
                    this.onMoveEnd=e
                },
                j.prototype.setOnMoveStart=function(e){
                    this.onMoveStart=e
                },
                j.prototype.update=function(e){
                    var t,
                    i,
                    r=h();if("touchmove"===e.type||"mousemove"===e.type&&this._isMove){
                        if(!this.enabled)return;if(this.status!==U&&this.status!==N)return;if("touchmove"===e.type){
                            if(!(i=e.touches[
                                0
                            ]))return;t=i.pageX-this._prevX,
                            this._prevX=i.pageX
                        }else t=e.clientX-this._prevX,
                        this._prevX=e.clientX;this._lastSpeed=t/(r-this._prevTime),
                        this._prevTime=r,
                        this._onStarted||(this._onStarted=!0,
                        this.onMoveStart(-this._lastSpeed,
                        this.startStatus)),
                        this._totalDx+=t,
                        this.status=U,
                        this.onMove(t,
                        this._totalDx)
                    }else if("touchend"===e.type||"touchcancel"===e.type||("mouseup"===e.type||"mouseleave"===e.type)&&this._isMove)this.status===U?this.onMoveEnd(this._lastSpeed,
                    this._totalDx): this.status=B,
                    e.preventDefault(),
                    this._isMove=!1;else if("touchstart"===e.type||"mousedown"===e.type){
                        if(!this.enabled)return;if(this.status===U)return;if("mousedown"===e.type&&e.preventDefault(),
                        this._totalDx=0,
                        this.startStatus=this.status,
                        this.status=N,
                        this._isMove=!0,
                        "touchstart"===e.type){
                            if(!(i=e.touches[
                                0
                            ]))return;this._prevX=i.pageX
                        }else this._prevX=e.clientX;this._onStarted=!1,
                        this._lastSpeed=0
                    }
                };var$=f+"Transform",
                K={
                    easeOutBack: function(e,
                    t,
                    i,
                    r,
                    n){
                        var a=!n||isNaN(n.overshoot)?1.70158: n.overshoot;return i*((e=e/r-1)*e*((a+1)*e+a)+1)+t
                    },
                    easeOutQuart: function(e,
                    t,
                    i,
                    r){
                        return-i*((e=e/r-1)*e*e*e-1)+t
                    }
                },
                H=function(){
                    this._initialize.apply(this,
                    arguments)
                };H.cancelTouch=function(e){
                    e.stopPropagation()
                },
                H.prototype={
                    _position: null,
                    _target: null,
                    _pager: null,
                    _flickManager: null,
                    _totalItems: 0,
                    itemWidth: 0,
                    _currentIndex: 0,
                    _$container: null,
                    _currentMotion: null,
                    _nextIndex: 0,
                    _lastDiff: 0,
                    _applyPosition: function(){
                        this._target.style[
                            $
                        ]="translate3d("+this._position.x+"px, 0, 0)"
                    },
                    _applyElasticAnimation: function(e){
                        var i=this,
                        r=h(),
                        n=this._position.x,
                        a=this._$container.find(this._options.container).outerWidth(!0),
                        s=-this.totalWidth+a,
                        o=0;t(this._target).children().each((function(e){
                            if(i._nextIndex-1<e)return!1;o-=t(this).outerWidth(!0)
                        })),
                        this._lastDiff=0,
                        o<s&&(this._lastDiff=s-o,
                        o=s),
                        this.itemWidth<=this._lastDiff&&(this._nextIndex-=Math.floor(this._lastDiff/this.itemWidth));var l=e?1e3: 400,
                        d=K.easeOutQuart;this._flickManager.status=G,
                        this.clearElasticAnimation(),
                        this._currentMotion=function(){
                            var e=h()-r;i._position.x=d(e,
                            n,
                            o-n,
                            l),
                            e>=l&&(i._position.x=o,
                            i._currentIndex=i._nextIndex,
                            i._flickManager.status=F,
                            i.clearElasticAnimation(),
                            i.updatePager()),
                            i._applyPosition()
                        },
                        P.add(this._currentMotion),
                        this.updatePager()
                    },
                    clearElasticAnimation: function(){
                        "function"==typeof this._currentMotion&&(P.remove(this._currentMotion),
                        this._currentMotion=null)
                    },
                    enabled: function(e){
                        this._flickManager.enabled=e
                    },
                    _initialize: function(e,
                    i){
                        var r,
                        n=this;this._options=i,
                        this._position={
                            x: 0
                        },
                        this._$container=e,
                        this._target=e.find(i.target)[
                            0
                        ],
                        this.itemWidth=t(this._target).children().outerWidth(!0),
                        this.totalWidth=(r=0,
                        t(n._target).children().each((function(){
                            r+=t(this).outerWidth(!0)
                        })),
                        r);var a=e.find(i.container)[
                            0
                        ];this._options.centering&&t(this._target).css("text-align",
                        "center"),
                        this.onResize(),
                        n._totalItems=this._target.children.length;var s=new j(a);s.setOnMoveStart((function(e,
                        t){
                            n.clearElasticAnimation();var i=n.getLimitIndex(),
                            r=e>0?"floor": "ceil";t!==F&&(n._currentIndex=-Math[
                                r
                            ](n._position.x/n.itemWidth)),
                            n._currentIndex>i&&(n._currentIndex=i),
                            n._currentIndex<0&&(n._currentIndex=0)
                        })),
                        s.setOnMove((function(e){
                            n._position.x+=e,
                            n._applyPosition()
                        })),
                        s.setOnMoveEnd((function(e,
                        t){
                            var i=n.getLimitIndex(),
                            r=!1,
                            a=n._lastDiff>0?n.itemWidth-n._lastDiff%n.itemWidth: 0,
                            s=(t+a)/n.itemWidth;Math.abs(t+a)>50?n._nextIndex=n._currentIndex-(t>0?Math.ceil(s): Math.floor(s)): n._nextIndex=n._currentIndex,
                            n._nextIndex<=0&&(n._nextIndex=0,
                            Math.abs(s)>=1&&(r=!0)),
                            n._nextIndex>=i&&(n._nextIndex=i,
                            Math.abs(s)>=1&&(r=!0)),
                            n._applyElasticAnimation(r,
                            e)
                        })),
                        n._flickManager=s
                    },
                    getLimitIndex: function(){
                        var e=0,
                        i=this.totalWidth-this._$container.find(this._options.container).outerWidth(!0);return i<0?0: (t(this._target).children().each((function(){
                            if(i-=t(this).outerWidth(!0),
                            e++,
                            i<0)return!1
                        })),
                        e)
                    },
                    next: function(){
                        var e=this.getLimitIndex();this._flickManager.status===F&&this._currentIndex<e&&this._nextIndex<e&&this._nextIndex++,
                        this._applyElasticAnimation()
                    },
                    prev: function(){
                        this._flickManager.status===F&&this._currentIndex>0&&this._nextIndex>0&&this._nextIndex--,
                        this._applyElasticAnimation()
                    },
                    getStatus: function(){
                        return this._flickManager.status
                    },
                    destroy: function(){
                        this._flickManager.destroy(),
                        this._flickManager=null,
                        this.setPager(null),
                        this._pager=null,
                        this._target=null
                    },
                    updatePager: function(){
                        this._pager&&this._pager.update(this._currentIndex,
                        this._totalItems,
                        this)
                    },
                    onResize: function(){
                        var e=t(this._target);this.itemWidth=e.children().outerWidth(!0);var i=e.parent().outerWidth(!0),
                        r=function(){
                            var i=0;return e.children().each((function(){
                                i+=t(this).outerWidth(!0)
                            })),
                            i
                        }();i<r?(e.css("width",
                        String(r+1)+"px"),
                        this._options.centering&&e.find(".ecbn-selection-item").each((function(){
                            t(this).is(":hidden")||t(this).css("display",
                            "block").css("float",
                            "left")
                        }))): (e.css("width",
                        "100%"),
                        this._options.centering&&e.find(".ecbn-selection-item").each((function(){
                            t(this).is(":hidden")||t(this).css("display",
                            "inline-block").css("float",
                            "none")
                        }))),
                        this.updatePager()
                    },
                    setPager: function(e){
                        if(this._pager&&(this._pager.next.off("click touchstart touchmove touchend mousedown mousemove mouseup"),
                        this._pager.prev.off("click touchstart touchmove touchend mousedown mousemove mouseup")),
                        e){
                            var t=this;this._pager=e,
                            e.next.on("touchstart touchmove touchend mousedown mousemove mouseup",
                            (function(e){
                                e.stopPropagation()
                            })),
                            e.prev.on("touchstart touchmove touchend mousedown mousemove mouseup",
                            (function(e){
                                e.stopPropagation()
                            })),
                            e.next.on("click",
                            (function(e){
                                e.stopPropagation(),
                                t._flickManager.status=F,
                                t.next()
                            })),
                            e.prev.on("click",
                            (function(e){
                                e.stopPropagation(),
                                t._flickManager.status=F,
                                t.prev()
                            })),
                            this.updatePager()
                        }
                    }
                };var V={
                    create: function(e,
                    i,
                    r){
                        var n={};t(i);return t('<div class="ecbn-selection-slider-controls"></div>').append((function(){
                            if(r)return n.prev=t('<a class="ecbn-selection-slider-prev" href="javascript:void(0);">Prev</a>'),
                            n.next=t('<a class="ecbn-selection-slider-next" href="javascript:void(0);">Next</a>'),
                            t('<div class="ecbn-selection-slider-controls-direction"></div>').append(n.prev).append(n.next)
                        })).appendTo(e),
                        n.update=function(t,
                        i,
                        a){
                            r&&(a.totalWidth<=e.outerWidth(!0)?(n.next.css("display",
                            "none"),
                            n.prev.css("display",
                            "none"),
                            a.enabled(!1)): t<=0?(n.next.css("display",
                            "block"),
                            n.prev.css("display",
                            "none"),
                            a.enabled(!0)): t===a.getLimitIndex()?(n.next.css("display",
                            "none"),
                            n.prev.css("display",
                            "block"),
                            a.enabled(!0)): (n.next.css("display",
                            "block"),
                            n.prev.css("display",
                            "block"),
                            a.enabled(!0)))
                        },
                        n
                    }
                };(function e(){
                    o(e),
                    P.update()
                })();var W=function(e){
                    var r=null;t(".ecbn-user-post-content-wrapper .ecbn-user-post-select--items").css("height",
                    "500px");window.addEventListener("message",
                    (function(e){
                        e.origin===i.baseUrl&&t(".ecbn-user-post-frame").css("height",
                        e.data+10+"px")
                    }),
                    !1),
                    function(e){
                        t(".ecbn-user-post").remove();(r=t('<div class="ecbn-user-post">  <div class="ecbn-user-post-overlay"></div>  <div class="ecbn-user-post-wrapper">    <div class="ecbn-user-post-header">      <span class="ecbn-user-post-close">×</span>    </div>    <div class="ecbn-user-post-content">    </div>  </div></div>')).appendTo("body"),
                        v.set(!0),
                        t(".ecbn-user-post-overlay, .ecbn-user-post-close").on("click",
                        (function(){
                            t(".ecbn-user-post").fadeOut(300),
                            v.set(!1)
                        }))
                    }(),
                    m(t(".ecbn-user-post-content")),
                    function(e,
                    r){
                        var n=i.userPostFirstViewApi.replace("{$selection}",
                        e.selection).replace("{$userid}",
                        e.userid),
                        a="";t(a+='<iframe id="ecbn-user-post-frame" class="ecbn-user-post-frame" src="'+n+'" frameborder="0" scrolling="no" style="width:100%;display:none;" ></iframe>').on("load",
                        (function(){
                            r()
                        })).appendTo(".ecbn-user-post-content")
                    }(e,
                    (function(){
                        y(r,
                        (function(){
                            t(".ecbn-user-post-frame").fadeIn(300)
                        }))
                    }))
                },
                Y=function(e){
                    e.fn.__innerLightBox=function(t,
                    r,
                    n){
                        var a=e("#__inner_lightbox"),
                        s=e("#__inner_lightbox").find(".ecbn-selection-preview-wrapper");a.off("click").on("click",
                        (function(){
                            a.attr("data-isnew-design")||a.is(":hidden")||a.fadeOut(200)
                        })),
                        s.off("click").on("click",
                        (function(e){
                            e.stopPropagation()
                        })),
                        s.find(".ecbn-selection-preview-close").off("click").on("click",
                        (function(e){
                            if(!a.attr("data-isnew-design"))return a.fadeOut(200),
                            e.preventDefault(),
                            !1
                        }));var o=function(i){
                            var r=[];function n(){
                                r=[],
                                t.find(i).each((function(){
                                    r.push(e(this))
                                }))
                            }return{
                                before: function(e){
                                    n();for(var t=0,
                                    i=0;i<r.length;i++)if(r[
                                        i
                                    ].is(e)){
                                        t=i-1;break
                                    }return t>=0?r[
                                        t
                                    ]: null
                                },
                                after: function(e){
                                    n();for(var t=0,
                                    i=0;i<r.length;i++)if(r[
                                        i
                                    ].is(e)){
                                        t=i+1;break
                                    }return t<r.length?r[
                                        t
                                    ]: null
                                }
                            }
                        }(r);return this.each((function(){
                            e(this).on("click",
                            (function(t){
                                return a.removeAttr("data-isnew-design"),
                                a.removeClass("ecbn-selection-preview-new"),
                                s.find(".ecbn-selection-preview-content").html("<p>now loading...</p>"),
                                a.fadeIn(200),
                                s.css({
                                    opacity: "1",
                                    top: "",
                                    display: "block"
                                }),
                                function t(r,
                                n,
                                o,
                                l){
                                    w.create({
                                        type: "preview",
                                        mediaid: r.data("id"),
                                        selection: n,
                                        userid: o
                                    }).load(s.find(".ecbn-selection-preview-content"),
                                    !0).then((function(){
                                        var d=l.before(r),
                                        c=l.after(r);d&&(s.find(".selection-prev-image").find("a").show(),
                                        s.find(".selection-prev-image").find("a").off("click").on("click",
                                        (function(){
                                            a.attr("data-isnew-design")||t(d,
                                            n,
                                            o,
                                            l)
                                        }))),
                                        c&&(s.find(".ecbn-selection-next-image").find("a").show(),
                                        s.find(".ecbn-selection-next-image").find("a").off("click").on("click",
                                        (function(){
                                            a.attr("data-isnew-design")||t(c,
                                            n,
                                            o,
                                            l)
                                        }))),
                                        s.find(".ecbn-selection-item-url").each((function(){
                                            e(this).attr("href",
                                            e(this).data("url"))
                                        }));var u={
                                            userid: o,
                                            type: "preview",
                                            selection: n,
                                            mediaid: r.data("id")
                                        };return e.get(i.pageViewUrl,
                                        u),
                                        E.PreviewClick(n,
                                        s.find(".ecbn-selection-preview-content .ecbn-selection-snap-image")),
                                        E.PreviewBinding(s),
                                        J._loadListImages(s.find(".ecbn-selection-item"))
                                    })).done((function(e){
                                        var t=s.find(".ecbn-selection-right-item-list");"True"==t.data("exists-goods")&&t.__innerSlider({
                                            wrapperClass: "ecbn-selection-preview-slide-wrapper",
                                            centering: !0
                                        })
                                    }))
                                }(e(this),
                                n.selection,
                                n.userid,
                                o),
                                t.preventDefault(),
                                !1
                            }))
                        }))
                    }
                },
                z=function(e){
                    var t={
                        wrapperClass: "ecbn-selection-slide-wrapper",
                        pageNaviSpeedSec: "1s",
                        swipeSpeedSec: "0.8s",
                        centering: !1,
                        sideNavi: !0
                    },
                    i=[],
                    r=0;e.fn.__innerSlider=function(n){
                        var a=e.extend({},
                        t,
                        n);return this.each((function(){
                            if(!e(this).is(".ecbn-selection-slider-start")){
                                var t={
                                    $slider: null,
                                    $viewPort: null,
                                    $wrapper: null,
                                    $prevNavi: null,
                                    $nextNavi: null,
                                    itemInfo: {
                                        itemLength: 0,
                                        itemAllOuterWidth: 0,
                                        itemOuterWidth: 0,
                                        viewportOuterWidth: 0
                                    },
                                    enableSlide: !1
                                };t.$slider=e(this),
                                t.$slider.addClass("ecbn-selection-slider-start");var n="slider"+++r;t.$slider.attr("sliderid",
                                n),
                                i[
                                    n
                                ]=t;var s=function(){
                                    return{
                                        render: function(){
                                            i.apply(t,
                                            arguments),
                                            r.apply(t,
                                            arguments),
                                            n.apply(t,
                                            arguments)
                                        },
                                        reRender: function(){
                                            i.apply(t,
                                            arguments),
                                            r.apply(t,
                                            arguments),
                                            n.apply(t,
                                            arguments)
                                        }
                                    };function i(){
                                        var i,
                                        r;this.$slider.children().length>0?(this.itemInfo.itemLength=this.$slider.children().length,
                                        this.itemInfo.itemOuterWidth=this.$slider.children().outerWidth(!0),
                                        this.itemInfo.itemAllOuterWidth=(i=0,
                                        t.$slider.children().each((function(){
                                            i+=e(this).outerWidth(!0)
                                        })),
                                        i+20)): (this.itemInfo.itemLength=0,
                                        this.itemInfo.itemOuterWidth=0,
                                        this.itemInfo.itemAllOuterWidth=0),
                                        this.itemInfo.viewportOuterWidth=((r=this).$wrapper.css("width",
                                        "100%"),
                                        r.$slider.css("width",
                                        "100%"),
                                        r.$wrapper.css("width",
                                        r.$wrapper.outerWidth(!0)),
                                        r.$wrapper.outerWidth(!0))
                                    }function r(){
                                        this.itemInfo.viewportOuterWidth>this.itemInfo.itemAllOuterWidth?(this.$prevNavi.hide(),
                                        this.$nextNavi.hide(),
                                        this.enableSlide=!1): (this.$prevNavi.show(),
                                        this.$nextNavi.show(),
                                        this.enableSlide=!0)
                                    }function n(){
                                        this.itemInfo.itemAllOuterWidth>0&&this.itemInfo.viewportOuterWidth<this.itemInfo.itemAllOuterWidth?(this.$slider.css("width",
                                        this.itemInfo.itemAllOuterWidth),
                                        a.centering&&this.$slider.find(".ecbn-selection-item").each((function(){
                                            e(this).is(":hidden")||e(this).css("display",
                                            "block").css("float",
                                            "left")
                                        }))): (this.$slider.css("width",
                                        "100%"),
                                        this.$slider.css("transform",
                                        "translate3d(0px, 0, 0)"),
                                        this.$slider.css("-webkit-transform",
                                        "translate3d(0px, 0, 0)"),
                                        a.centering&&this.$slider.find(".ecbn-selection-item").each((function(){
                                            e(this).is(":hidden")||e(this).css("display",
                                            "inline-block").css("float",
                                            "none")
                                        })))
                                    }
                                }();t.$slider.wrap((function(){
                                    return e('<div id="'+n+'" class="'+a.wrapperClass+'"></div>').append('<div class="ecbn-selection-slider-view"></div>')
                                })),
                                t.$viewPort=t.$slider.parent(),
                                t.$wrapper=t.$viewPort.parent(),
                                e('<div class="ecbn-selection-slider-controls"></div>').append((function(){
                                    return a.sideNavi?(t.$prevNavi=e('<a class="ecbn-selection-slider-prev" href="javascript:void(0);">Prev</a>'),
                                    t.$nextNavi=e('<a class="ecbn-selection-slider-next" href="javascript:void(0);">Next</a>'),
                                    e('<div class="ecbn-selection-slider-controls-direction"></div>').append(t.$prevNavi).append(t.$nextNavi)): ""
                                })).appendTo("#"+n),
                                t.$viewPort.css("overflow",
                                "hidden"),
                                s.render(),
                                function(){
                                    var e=0;t.$prevNavi.on("click",
                                    (function(e){
                                        return i(a.pageNaviSpeedSec,
                                        t.itemInfo.itemOuterWidth),
                                        e.preventDefault(),
                                        !1
                                    })),
                                    t.$nextNavi.on("click",
                                    (function(e){
                                        return i(a.pageNaviSpeedSec,
                                        -1*t.itemInfo.itemOuterWidth),
                                        e.preventDefault(),
                                        !1
                                    }));function i(i,
                                    r){
                                        if(r>0)e+r>0?e=0: e+=r;else{
                                            var n=t.$viewPort.outerWidth(!0)-t.itemInfo.itemAllOuterWidth;e+r<n?e=n: e+=r
                                        }t.$slider.css("transition-duration",
                                        i),
                                        t.$slider.css("transform",
                                        "translate3d("+e+"px, 0, 0)"),
                                        t.$slider.css("-webkit-transition-duration",
                                        i),
                                        t.$slider.css("-webkit-transform",
                                        "translate3d("+e+"px, 0, 0)")
                                    }!function(e,
                                    t,
                                    i,
                                    r){
                                        var n,
                                        a,
                                        s=0,
                                        o=!1,
                                        l=!1,
                                        d="ontouchstart"in window;function c(e){
                                            var t,
                                            i;return e.touches&&e.touches[
                                                0
                                            ]?(t=e.touches[
                                                0
                                            ].clientX,
                                            i=e.touches[
                                                0
                                            ].clientY): e.originalEvent&&e.originalEvent.changedTouches?(t=e.originalEvent.changedTouches[
                                                0
                                            ].clientX,
                                            i=e.originalEvent.changedTouches[
                                                0
                                            ].clientY): e.clientX&&e.clientY&&(t=e.clientX,
                                            i=e.clientY),
                                            {
                                                clientX: t,
                                                clientY: i
                                            }
                                        }e.on("touchstart",
                                        (function(e){
                                            t()&&(o=!0,
                                            l=!1,
                                            n=c(e),
                                            a=n,
                                            s=Date.now())
                                        })),
                                        e.on("mousedown",
                                        (function(e){
                                            t()&&(o=!0,
                                            l=!1,
                                            n=c(e),
                                            a=n,
                                            s=Date.now(),
                                            e.preventDefault())
                                        })),
                                        e.on(d?"touchmove": "mousemove",
                                        (function(e){
                                            if(t()&&o){
                                                var r=c(e);Math.abs(a.clientX-r.clientX)>0&&(l=!0,
                                                i(n,
                                                r,
                                                a)),
                                                a=r,
                                                e.preventDefault()
                                            }
                                        })),
                                        e.on(d?"touchend": "mouseup",
                                        (function(e){
                                            if(t()){
                                                var i=Date.now()-s,
                                                d=c(e),
                                                u=Math.abs(n.clientX-a.clientX);l&&i<400&&r(n,
                                                d,
                                                a),
                                                o=!1,
                                                l=!1,
                                                u>0&&e.preventDefault()
                                            }
                                        })),
                                        e.on({
                                            mouseenter: function(){},
                                            mouseleave: function(){
                                                o=!1,
                                                l=!1
                                            }
                                        }),
                                        e.find("img").on("click touchend",
                                        (function(e){
                                            if(t())return l||Math.abs(n.clientX-a.clientX)>0?(l=!1,
                                            !1): void 0
                                        }))
                                    }(t.$viewPort,
                                    (function(){
                                        return t.enableSlide
                                    }),
                                    (function(e,
                                    t,
                                    r){
                                        (r.clientX-t.clientX>0||r.clientX-t.clientX<0)&&i("0s",
                                        t.clientX-r.clientX)
                                    }),
                                    (function(e,
                                    t,
                                    r){
                                        var n=Math.abs(e.clientX-r.clientX);e.clientX-r.clientX>0?i(a.swipeSpeedSec,
                                        -n): i(a.swipeSpeedSec,
                                        n)
                                    }))
                                }();var o=!1;e(window).bind("resize",
                                (function(){
                                    !1!==o&&clearTimeout(o),
                                    o=setTimeout((function(){
                                        s.reRender()
                                    }),
                                    10)
                                }))
                            }
                        }))
                    }
                },
                q=function(e){
                    var r=this._$widget;w.create(e).load(r).then((function(){
                        return r.find(".ecbn-user-post-btn").on("click",
                        (function(){
                            W.apply(r,
                            [
                                e
                            ])
                        })),
                        r.find(".ecbn-selection-preview").appendTo("body"),
                        J._loadListImages(r.find(".ecbn-selection-snap li"))
                    })).done((function(n){
                        if(n.length>0){
                            var a={
                                userid: e.userid,
                                type: e.type,
                                selection: e.selection
                            };"goods"!==e.type&&"goods-tile"!==e.type||(a.goods=e.goods),
                            (new R).shownFirstView(r.find(".ecbn-selection-snap"),
                            (function(){
                                t.get(i.pageViewUrl,
                                a)
                            }))
                        }r.find(".ecbn-selection-snap li").fadeIn(),
                        r.find(".ecbn-selection-snap").__innerSlider({
                            wrapperClass: "ecbn-selection-slide-wrapper"
                        }),
                        r.find(".ecbn-selection-snap a").__innerLightBox(r,
                        ".ecbn-selection-snap a",
                        e)
                    }))
                },
                X=function(e){
                    var i=this,
                    r=this._$widget,
                    n=new t.Deferred;function s(){
                        var n=!1,
                        a=null;(n=r.find(".ecbn-selection-page-tabs").length>0)&&((a=r.find(".ecbn-selection-page-tabs li")).addClass("not-bind"),
                        e.tag?(a.removeClass("ecbn-selection-page-tabs--active"),
                        a.each((function(i,
                        r){
                            if(t(r).text().trim()===e.tag)return t(r).addClass("ecbn-selection-page-tabs--active"),
                            !1
                        }))): a.eq(0).addClass("ecbn-selection-page-tabs--active")),
                        n&&a.on("click",
                        (function(){
                            E.TabLinkClick(this);var n,
                            s=(n=0,
                            a.each((function(){
                                if(t(this).hasClass("ecbn-selection-page-tabs--active"))return!1;n++
                            })),
                            n),
                            o=a.index(this);if(s!==o){
                                a.removeClass("ecbn-selection-page-tabs--active"),
                                a.eq(o).addClass("ecbn-selection-page-tabs--active"),
                                delete i._$loader,
                                delete i._slider,
                                delete i._pager;var l=a.eq(o).text().trim();0===o&&(l=null),
                                X.apply(i,
                                [
                                    t.extend({},
                                    e,
                                    {
                                        tag: l,
                                        isMoreRead: !0
                                    })
                                ]);var d=new C,
                                c=r.attr("data-selection");d.changeUrl("vsmsctag",
                                l||""),
                                d.changeUrl("vsmsccollection",
                                c)
                            }
                        }))
                    }return i._$loader=a.createLoading(r),
                    w.create(e).load(r,
                    !0).then(this.bindSelf(this._onCompleteLoad),
                    (function(){
                        r.hide()
                    })).then(this.bindSelf(this._showWidget)).done((function(){
                        s(),
                        c({
                            userId: r.attr("data-userid"),
                            viewObject: r
                        }).on(),
                        r.find(".ecbn-user-post-btn").on("click",
                        (function(){
                            W.apply(r,
                            [
                                e
                            ])
                        })),
                        u(r,
                        ".ecbn-selection-item",
                        (function(i,
                        n){
                            var a=this;setTimeout((function(){
                                var i=I.getInstance(r);i.setList(r.find(".ecbn-selection-snap a")),
                                i.setIndex(t(a).index()),
                                i.show(e)
                            }),
                            1)
                        })),
                        t(window).on("resize",
                        (function(){
                            i.onResize()
                        })),
                        n.resolve()
                    })).fail((function(){
                        s(),
                        n.resolve()
                    })),
                    n.promise()
                },
                Q=function(e,
                r){
                    var n=this._$widget,
                    a=!1,
                    o=n.data("align-row"),
                    l={
                        type: e.type,
                        selection: e.selection,
                        userid: e.userid,
                        tag: e.tag,
                        tags: e.tags,
                        page: 1
                    };function d(){
                        var e=null,
                        i=null,
                        r=function(){
                            if(a=n.find(".ecbn-selection-page-tabs").length>0){
                                n.find(".ecbn-selection-content").wrap('<div class="ecbn-selection-page-tabs-box"></div>'),
                                e=n.find(".ecbn-selection-page-tabs li"),
                                i=n.find(".ecbn-selection-page-tabs-box"),
                                e.not(":first").each((function(){
                                    t('<div class="ecbn-selection-content"><ul class="ecbn-selection-snap"></ul></div>').appendTo(i)
                                }));var r=0;return l.tag?(e.removeClass("ecbn-selection-page-tabs--active"),
                                e.each((function(e,
                                i){
                                    if(t(i).text().trim()===l.tag)return t(i).addClass("ecbn-selection-page-tabs--active"),
                                    r=e,
                                    !1
                                }))): e.eq(0).addClass("ecbn-selection-page-tabs--active"),
                                r
                            }
                        }();return a&&e.on("click",
                        (function(){
                            var r,
                            a=(r=0,
                            e.each((function(){
                                if(t(this).hasClass("ecbn-selection-page-tabs--active"))return!1;r++
                            })),
                            r),
                            s=e.index(this);if(a!==s){
                                e.removeClass("ecbn-selection-page-tabs--active"),
                                e.eq(s).addClass("ecbn-selection-page-tabs--active");var d=i.children().eq(s),
                                c=i.find(".ecbn-selection-content--active");c.length&&D(c,
                                !1),
                                i.children().hide();var u=e.eq(s).text().trim();d.text()?d.show("fast",
                                (function(){
                                    d.find("li").fadeIn(300,
                                    (function(){
                                        d.css("height",
                                        "")
                                    })),
                                    d.find(".ecbn-selection-snap li").length>0&&d.find(".ecbn-selection-snap").__innerTilesView({
                                        mode: "repaint",
                                        itemSelector: ".ecbn-selection-item",
                                        alignRow: o
                                    })
                                })): d.show("fast",
                                (function(){
                                    d.css("height",
                                    ""),
                                    T(d)||(0===s&&(u=null),
                                    f(d,
                                    t.extend({},
                                    l,
                                    {
                                        page: 0,
                                        tag: u,
                                        isallcontent: !1
                                    })))
                                })),
                                D(d,
                                !0),
                                d.closest(".ecbn-selection-page-wrapper").find(".ecbn-selection-image-loading-more").show();var h=new C,
                                g=n.attr("data-selection"),
                                p=d.closest(".ecbn-selection-page-wrapper").find(".ecbn-selection-page-tabs--item").eq(0).text().trim();h.changeUrl("vsmsctag",
                                u===p?"": u),
                                h.changeUrl("vsmsccollection",
                                g)
                            }
                        })),
                        r
                    }function h(l){
                        var h=new t.Deferred,
                        g=null;return "selection-tile"!==l.type&&"goods-tile"!==l.type||(l.device=s),
                        l.isallcontent=!0,
                        w.create(l).load(n).then((function(){
                            l.isallcontent=!1;var t=d();if(a){
                                if(0!=t){
                                    var i=n.find(".ecbn-selection-page-tabs-box").children();i.eq(0).insertAfter(i.eq(t))
                                }g=n.find(".ecbn-selection-page-tabs-box").children().eq(t)
                            }else g=n.find(".ecbn-selection-content");return n.find(".ecbn-user-post-btn").on("click",
                            (function(){
                                W.apply(n,
                                [
                                    e
                                ])
                            })),
                            n.find(".ecbn-selection-preview").appendTo("body"),
                            m(n.find(".ecbn-selection-page-wrapper")),
                            J._loadListImages(g.find(".ecbn-selection-snap li"))
                        })).done((function(a){
                            if(c({
                                userId: n.attr("data-userid"),
                                viewObject: n
                            }).on(),
                            a.length>0){
                                var s={
                                    userid: e.userid,
                                    type: e.type,
                                    selection: e.selection
                                };"goods"!==e.type&&"goods-tile"!==e.type||(s.goods=e.goods),
                                (new R).shownFirstView(g.find(".ecbn-selection-snap"),
                                (function(){
                                    t.get(i.pageViewUrl,
                                    s)
                                }))
                            }y(n.find(".ecbn-selection-page-wrapper")),
                            g.find(".ecbn-selection-snap li").fadeIn(100),
                            g.find(".ecbn-selection-snap").__innerTilesView({
                                itemSelector: ".ecbn-selection-item",
                                alignRow: o
                            }),
                            r?u(g,
                            ".ecbn-selection-item",
                            (function(i,
                            r){
                                var n=this;setTimeout((function(){
                                    var i=I.getInstance(g);i.setList(g.find(".ecbn-selection-snap a")),
                                    i.setIndex(t(n).index()),
                                    i.setTag(l.tag),
                                    i.show(e)
                                }),
                                1)
                            })): g.find(".ecbn-selection-snap a").__innerLightBox(n,
                            ".ecbn-selection-snap a",
                            e),
                            "selection-tile"!=l.type&&"goods-tile"!=l.type||g.closest(".ecbn-selection-page-wrapper").find(".ecbn-selection-page-more").off("click").on("click",
                            (function(){
                                var e=t(this).closest(".ecbn-selection-page-wrapper"),
                                i=e.find(".ecbn-selection-page-tabs--active a").text().trim();i||(i=l.tag);var r,
                                n=(r=0,
                                e.find(".ecbn-selection-page-tabs--item").each((function(e,
                                i){
                                    if(r=e,
                                    t(i).hasClass("ecbn-selection-page-tabs--active"))return!1
                                })),
                                e.find(".ecbn-selection-content").eq(r));i===e.find(".ecbn-selection-page-tabs--item").eq(0).text().trim()&&(i="");var a=n.data("current-page")||1;f(n,
                                t.extend({},
                                l,
                                {
                                    page: a,
                                    tag: i,
                                    isallcontent: !1
                                })),
                                n.data("current-page",
                                a+1)
                            })),
                            D(g,
                            !0),
                            h.resolve(g,
                            l)
                        })),
                        h.promise()
                    }function f(i,
                    n){
                        i&&0!==i.length&&!T(i)&&(_(i,
                        !0),
                        function(e){
                            var i=new t.Deferred,
                            r=t(window);m(e);var n=setInterval((function(){
                                e.find(".ecbn-widget-loading-container").offset().top<r.scrollTop()+r.height()&&e.hasClass("ecbn-selection-content--active")&&(clearInterval(n),
                                i.resolve())
                            }),
                            10);return i.promise()
                        }(i).then((function(){
                            "selection-tile"!=n.type&&"goods-tile"!=n.type||(n.device=s);var e=new t.Deferred;return n.page+=1,
                            w.create(n).call().done((function(r){
                                var a=t(r);a.appendTo(i.find(".ecbn-selection-snap")),
                                i.find("#ecbn-selection-item-last").length>0?(i.closest(".ecbn-selection-page-wrapper").find(".ecbn-selection-image-loading-more").hide(),
                                e.resolve(a)): (e.resolve(a),
                                i.closest(".ecbn-selection-page-wrapper").find(".ecbn-selection-image-loading-more").show()),
                                c({
                                    userId: n.userid,
                                    viewObject: a
                                }).on()
                            })).fail((function(){
                                i.closest(".ecbn-selection-page-wrapper").find(".ecbn-selection-image-loading-more").hide(),
                                e.reject()
                            })),
                            e.promise()
                        })).then((function(e){
                            return J._loadListImages(e)
                        })).then((function(a){
                            y(i);var s=i.find(".ecbn-selection-snap");a.each((function(){
                                var a=t(this).closest("li");a.fadeIn(450),
                                s.__innerTilesView({
                                    mode: "append",
                                    appendItem: a,
                                    itemSelector: ".ecbn-selection-item",
                                    alignRow: o
                                }),
                                r?u(i,
                                a.find("a"),
                                (function(t,
                                r){
                                    setTimeout((function(){
                                        var t=I.getInstance(i);t.setList(i.find(".ecbn-selection-snap a")),
                                        t.setIndex(a.index()),
                                        t.setTag(n.tag),
                                        t.show(e)
                                    }),
                                    1)
                                })): i.find(a.find("a")).__innerLightBox(i,
                                ".ecbn-selection-snap a",
                                e)
                            })),
                            "selection-tile"===n.type||"goods-tile"===n.type?(y(i),
                            _(i,
                            !1)): (_(i,
                            !1),
                            f(i,
                            n))
                        })).fail((function(){
                            y(i),
                            _(i,
                            !1)
                        })))
                    }return "goods-tile"===e.type&&(l[
                        "goods-hidden-id"
                    ]=e[
                        "goods-hidden-id"
                    ],
                    l[
                        "itemgroup-hidden-id"
                    ]=e[
                        "itemgroup-hidden-id"
                    ]),
                    "selection-tile"===l.type||"goods-tile"===l.type?h(t.extend(!0,
                    {},
                    l)): h(t.extend(!0,
                    {},
                    l)).then(f)
                },
                J=function(e){
                    this._initialize.apply(this,
                    arguments)
                };J.prototype._$widget=null,
                J.prototype._initialize=function(e){
                    this._$widget=e,
                    e.css("_position",
                    "relative")
                },
                J.prototype._slider=null,
                J.prototype._pager=null,
                J.prototype._$loader=null,
                J.prototype._onCompleteLoad=function(e){
                    var i=this._$widget;i.find(".ecbn-selection-preview").appendTo("body"),
                    i.find(".ecbn-selection-footer2,.ecbn-selection-footer").hide(),
                    this._$loader.show();var r=J._getOptions(i);return i.find(".ecbn-selection-snap").wrap((function(){
                        return "selection"===r.type&&0!==i.find(".ecbn-selection-page-tabs-area").length?t('<div class="ecbn-selection-slide-wrapper"></div>').append('<div class="ecbn-selection-tabs-box"></div>').append('<div class="ecbn-selection-slider-view"></div>'): t('<div class="ecbn-selection-slide-wrapper"></div>').append('<div class="ecbn-selection-slider-view"></div>')
                    })),
                    J._loadListImages(i.find(".ecbn-selection-snap"))
                };var Z={
                    pageNaviSpeedSec: "1s",
                    swipeSpeedSec: "0.8s",
                    centering: !1,
                    sideNavi: !0
                };J.prototype._showWidget=function(e){
                    var r=new t.Deferred;if(e.length>0){
                        var n={
                            userid: this._$widget.data("userid"),
                            type: this._$widget.data("type"),
                            selection: this._$widget.data("selection")
                        };"goods"!==this._$widget.data("type")&&"goods-tile"!==this._$widget.data("type")||(n.goods=this._$widget.data("goods")),
                        (new R).shownFirstView(this._$widget.find(".ecbn-selection-snap"),
                        (function(){
                            t.get(i.pageViewUrl,
                            n)
                        }))
                    }var a=this._$widget,
                    s=a.find(".ecbn-selection-slide-wrapper");return s.css({
                        "overflow-x": "hidden"
                    }),
                    this._$loader.fadeOut(300),
                    e.length>0?(a.find(".ecbn-selection-snap").find(".ecbn-selection-item").fadeIn(700),
                    a.find(".ecbn-selection-footer2,.ecbn-selection-footer").fadeIn(700,
                    (function(){
                        r.resolve(s)
                    })),
                    this._initSlider()): r.reject(s),
                    r.promise()
                },
                J.prototype._setupPager=function(e){
                    this._pager||(this._pager=V.create(this._$widget.find(e.container),
                    e.target,
                    e.sideNavi))
                },
                J.prototype._initSlider=function(){
                    var e=t.extend({},
                    Z,
                    {
                        container: ".ecbn-selection-slide-wrapper",
                        target: ".ecbn-selection-snap"
                    });this._setupPager(e),
                    this._slider=new H(this._$widget,
                    e),
                    this._slider.setPager(this._pager)
                },
                J.prototype.bindSelf=function(e){
                    var t=this;return function(){
                        return e.apply(t,
                        arguments)
                    }
                },
                J.prototype.onResize=function(){
                    this._slider&&this._slider.onResize(),
                    this._$loader&&this._$loader.onResize()
                },
                J._loadListImages=function(e){
                    var i=new t.Deferred,
                    r=e.find(".ecbn-selection-image"),
                    n=r.length,
                    a=[],
                    s=[],
                    o=0,
                    l=function(){
                        r.each((function(){
                            for(var e=0;e<a.length;e++)t(a[
                                e
                            ]).attr("src")===t(this).attr("src")&&s.push(t(a[
                                e
                            ]))
                        }))
                    };return r.on("load",
                    (function(){
                        a.push(t(this)),
                        ++o===n&&(l(),
                        i.resolve(t(s)))
                    })).on("error",
                    (function(){
                        t(this).closest("li").remove(),
                        ++o===n&&(l(),
                        i.resolve(t(s)))
                    })),
                    r.each((function(){
                        t(this).closest("li").hide(),
                        t(this).prop("src",
                        t(this).data("url"))
                    })),
                    0==r.length&&setTimeout((function(){
                        i.resolve(t(a))
                    }),
                    1),
                    i.promise()
                },
                J._getOptions=function(e){
                    var t={},
                    i=e.attr("data-selection"),
                    r=new C,
                    n=r.getParam("vsmsccollection"),
                    a=i==n?r.getParam("vsmsctag"): "",
                    s=i==n?r.getParam("vsmsctags"): "";return t.type=e.attr("data-type"),
                    t.selection=i,
                    t.userid=e.attr("data-userid"),
                    t[
                        "goods-hidden-id"
                    ]=e.attr("data-goods-hidden-id"),
                    t[
                        "itemgroup-hidden-id"
                    ]=e.attr("data-itemgroup-hidden-id"),
                    t.tag=e.attr("data-tag")?e.attr("data-tag"): a,
                    t.tags=e.attr("data-tags")?e.attr("data-tags"): s,
                    t
                },
                J._isValidOptions=function(e){
                    if("goods"!==e.type&&"selection"!==e.type&&"selection-page"!==e.type&&"selection-tile"!==e.type&&"goods-tile"!==e.type)return!1;if("goods"===e.type||"goods-tile"===e.type){
                        if(!e[
                            "goods-hidden-id"
                        ]&&!e[
                            "itemgroup-hidden-id"
                        ])return!1;if(e[
                            "goods-hidden-id"
                        ]&&!t("#"+e[
                            "goods-hidden-id"
                        ]).val())return!1;if(e[
                            "itemgroup-hidden-id"
                        ]&&!t("#"+e[
                            "itemgroup-hidden-id"
                        ]).val())return!1
                    }return!!e.userid&&e.selection
                },
                J.prototype.boot=function(){
                    var e=this._$widget,
                    i=new t.Deferred,
                    r=this,
                    n=J._getOptions(e);return J._isValidOptions(n)?(w.create({
                        type: "selection-design",
                        selection: n.selection,
                        userid: n.userid
                    }).call().done((function(t){
                        t.IsSuccess?(e.attr("data-isnew-design",
                        t.IsNewDesign),
                        e.attr("data-ga-eventtracking",
                        t.GoogleAnalyticsJS),
                        t.IsNewDesign&&e.addClass("ecbn-selection-widget-new"),
                        t.IsNewDesign?"goods"===n.type||"selection"===n.type?(n.isMoreRead=!1,
                        X.apply(r,
                        [
                            n
                        ]).then((function(){
                            O.showDirectPreview.apply(r._$widget,
                            [
                                n
                            ])
                        }))): "selection-page"!==n.type&&"selection-tile"!==n.type&&"goods-tile"!==n.type||Q.apply(r,
                        [
                            n,
                            !0
                        ]).then((function(){
                            O.showDirectPreview.apply(r._$widget,
                            [
                                n
                            ])
                        })): "goods"===n.type||"selection"===n.type?(n.isMoreRead=!1,
                        q.apply(r,
                        [
                            n
                        ])): "selection-page"===n.type&&Q.apply(r,
                        [
                            n
                        ]),
                        i.resolve()): e.css("min-height",
                        "0")
                    })),
                    i.promise()): i.reject()
                };var ee=void 0!==window.jQuery;a.load(document.getElementsByTagName("head")[
                    0
                ],
                (function(){
                    t=ee?jQuery.noConflict(!0): jQuery,
                    a.loadCss((function(){
                        var e;t.easing.easeOutQuart=function(e,
                        t,
                        i,
                        r,
                        n){
                            return K.easeOutQuart(t,
                            i,
                            r,
                            n)
                        },
                        Y(t),
                        z(t),
                        function(e){
                            e.fn.__innerTilesView=function(t){
                                var i=e.extend({},
                                {
                                    mode: "init",
                                    itemSelector: null,
                                    appendItem: null
                                },
                                t),
                                r=this;r.css("position",
                                "relative"),
                                r.saveHeightRows=function(e){
                                    r.attr("HeightRows",
                                    JSON.stringify(e))
                                },
                                r.loadHeightRows=function(t){
                                    return e.parseJSON(r.attr("HeightRows"))
                                };var n=function(){
                                    var e,
                                    t,
                                    n=(r.css("width",
                                    "100%"),
                                    r.width()),
                                    a=r.closest(".ecbn-selection-widget").attr("data-type"),
                                    s=r.closest(".ecbn-selection-page-wrapper");if("selection-tile"===a||"goods-tile"===a){
                                        e=s.attr("data-image_col_count");var o=parseFloat(100/e)+"%";r.find(".ecbn-selection-item").css("width",
                                        o),
                                        t=r.children(i.itemSelector).outerWidth(!0)
                                    }else t=r.children(i.itemSelector).outerWidth(!0),
                                    e=Math.floor(n/t);return{
                                        tilesWidth: n,
                                        itemWidth: t,
                                        rowNum: e
                                    }
                                },
                                a=function(i){
                                    var r=function(){
                                        for(var e=[],
                                        t=0;t<i.rowNum;t++)e.push(0);return e
                                    }(),
                                    n=[],
                                    a=[];return{
                                        getHeightRow: function(){
                                            return r
                                        },
                                        setHeightRow: function(e){
                                            r=e
                                        },
                                        getMaxHeight: function(){
                                            return Math.max.apply(null,
                                            r)
                                        },
                                        appendTile: function(s,
                                        o){
                                            var l=Math.min.apply(null,
                                            r),
                                            d=e.inArray(l,
                                            r);n.push(s),
                                            a.push({
                                                top: r[
                                                    d
                                                ],
                                                left: d*i.itemWidth
                                            }),
                                            t.alignRow?r[
                                                d
                                            ]+=o: r[
                                                d
                                            ]+=s.outerHeight(!0)
                                        },
                                        getLayoutLength: function(){
                                            return n.length
                                        },
                                        layouts: function(e){
                                            return{
                                                $item: n[
                                                    e
                                                ],
                                                position: a[
                                                    e
                                                ]
                                            }
                                        }
                                    }
                                },
                                o=function(e,
                                t){
                                    e.$item.css("position",
                                    "absolute"),
                                    t?e.$item.stop().animate({
                                        top: e.position.top,
                                        left: e.position.left
                                    }): e.$item.css({
                                        top: e.position.top,
                                        left: e.position.left
                                    })
                                },
                                l=function(s){
                                    var l=n(),
                                    c=a(l);let u;r.attr("HeightRows")||d();let h=0;r.children(i.itemSelector).each((function(n){
                                        if(n%l.rowNum==0){
                                            u=0;for(let t=0;t<l.rowNum;t++){
                                                const t=e(r.children(i.itemSelector)[
                                                    h
                                                ]);u=u<t.outerHeight(!0)?t.outerHeight(!0): u,
                                                h++
                                            }
                                        }t.alignRow?c.appendTile(e(this),
                                        u): c.appendTile(e(this))
                                    }));for(var f=0;f<c.getLayoutLength();f++)o(c.layouts(f),
                                    s),
                                    r.css("height",
                                    c.getMaxHeight()+"px");r.css("width",
                                    l.itemWidth*l.rowNum+"px"),
                                    r.saveHeightRows(c.getHeightRow())
                                };function d(){
                                    if("sp"!==s||"append"!==i.mode){
                                        var e=null;window.addEventListener("resize",
                                        (function(t){
                                            null!=e&&clearTimeout(e),
                                            e=setTimeout((function(){
                                                r.is(":visible")&&l(!0)
                                            }),
                                            200)
                                        }))
                                    }
                                }"init"===i.mode&&l(!1),
                                "append"===i.mode&&function(){
                                    var s=n(),
                                    l=a(s);r.attr("HeightRows")||d(),
                                    r.attr("HeightRows")&&l.setHeightRow(r.loadHeightRows());for(var c=0,
                                    u=0;u<s.rowNum;u++){
                                        const t=r.children(i.itemSelector),
                                        n=t[
                                            t.length-u
                                        ];c=c<e(n).outerHeight(!0)?e(n).outerHeight(!0): c
                                    }t.alignRow?l.appendTile(i.appendItem,
                                    c): l.appendTile(i.appendItem),
                                    o(l.layouts(0),
                                    !1),
                                    r.css("height",
                                    l.getMaxHeight()+"px"),
                                    r.css("width",
                                    s.itemWidth*s.rowNum+"px"),
                                    r.saveHeightRows(l.getHeightRow())
                                }(),
                                "repaint"===i.mode&&l(!0)
                            }
                        }(t),
                        t(".ecbn-selection-widget").each((function(){
                            if(!t(this).hasClass("initailized")){
                                t(this).addClass("initailized");var e=new J(t(this));e.boot().then((function(){
                                    E.Initailize(e._$widget.attr("data-ga-eventtracking"))
                                }))
                            }
                        })),
                        e=t.unique(t(".ecbn-selection-widget").map((function(){
                            return t(this).data("userid")
                        }))),
                        t(e).each((function(){
                            l(this).init()
                        }))
                    }))
                }))
            }
        }()
    },
    function(e,
    t,
    i){
        var r;"undefined"!=typeof window&&(r=function(){
            return function(e){
                var t={};function i(r){
                    if(t[
                        r
                    ])return t[
                        r
                    ].exports;var n=t[
                        r
                    ]={
                        i: r,
                        l: !1,
                        exports: {}
                    };return e[
                        r
                    ].call(n.exports,
                    n,
                    n.exports,
                    i),
                    n.l=!0,
                    n.exports
                }return i.m=e,
                i.c=t,
                i.d=function(e,
                t,
                r){
                    i.o(e,
                    t)||Object.defineProperty(e,
                    t,
                    {
                        enumerable: !0,
                        get: r
                    })
                },
                i.r=function(e){
                    "undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,
                    Symbol.toStringTag,
                    {
                        value: "Module"
                    }),
                    Object.defineProperty(e,
                    "__esModule",
                    {
                        value: !0
                    })
                },
                i.t=function(e,
                t){
                    if(1&t&&(e=i(e)),
                    8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),
                    Object.defineProperty(r,
                    "default",
                    {
                        enumerable: !0,
                        value: e
                    }),
                    2&t&&"string"!=typeof e)for(var n in e)i.d(r,
                    n,
                    function(t){
                        return e[
                            t
                        ]
                    }.bind(null,
                    n));return r
                },
                i.n=function(e){
                    var t=e&&e.__esModule?function(){
                        return e.default
                    }: function(){
                        return e
                    };return i.d(t,
                    "a",
                    t),
                    t
                },
                i.o=function(e,
                t){
                    return Object.prototype.hasOwnProperty.call(e,
                    t)
                },
                i.p="/dist/",
                i(i.s="./src/hls.ts")
            }({
                "./node_modules/eventemitter3/index.js": /*!*********************************************!*\
  !*** ./node_modules/eventemitter3/index.js ***!
  \*********************************************//*! no static exports found *//*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,
                t,
                i){
                    "use strict";var r=Object.prototype.hasOwnProperty,
                    n="~";function a(){}function s(e,
                    t,
                    i){
                        this.fn=e,
                        this.context=t,
                        this.once=i||!1
                    }function o(e,
                    t,
                    i,
                    r,
                    a){
                        if("function"!=typeof i)throw new TypeError("The listener must be a function");var o=new s(i,
                        r||e,
                        a),
                        l=n?n+t: t;return e._events[
                            l
                        ]?e._events[
                            l
                        ].fn?e._events[
                            l
                        ]=[
                            e._events[
                                l
                            ],
                            o
                        ]: e._events[
                            l
                        ].push(o): (e._events[
                            l
                        ]=o,
                        e._eventsCount++),
                        e
                    }function l(e,
                    t){
                        0==--e._eventsCount?e._events=new a: delete e._events[
                            t
                        ]
                    }function d(){
                        this._events=new a,
                        this._eventsCount=0
                    }Object.create&&(a.prototype=Object.create(null),
                    (new a).__proto__||(n=!1)),
                    d.prototype.eventNames=function(){
                        var e,
                        t,
                        i=[];if(0===this._eventsCount)return i;for(t in e=this._events)r.call(e,
                        t)&&i.push(n?t.slice(1): t);return Object.getOwnPropertySymbols?i.concat(Object.getOwnPropertySymbols(e)): i
                    },
                    d.prototype.listeners=function(e){
                        var t=n?n+e: e,
                        i=this._events[
                            t
                        ];if(!i)return[];if(i.fn)return[
                            i.fn
                        ];for(var r=0,
                        a=i.length,
                        s=new Array(a);r<a;r++)s[
                            r
                        ]=i[
                            r
                        ].fn;return s
                    },
                    d.prototype.listenerCount=function(e){
                        var t=n?n+e: e,
                        i=this._events[
                            t
                        ];return i?i.fn?1: i.length: 0
                    },
                    d.prototype.emit=function(e,
                    t,
                    i,
                    r,
                    a,
                    s){
                        var o=n?n+e: e;if(!this._events[
                            o
                        ])return!1;var l,
                        d,
                        c=this._events[
                            o
                        ],
                        u=arguments.length;if(c.fn){
                            switch(c.once&&this.removeListener(e,
                            c.fn,
                            void 0,
                            !0),
                            u){
                                case 1: return c.fn.call(c.context),
                                !0;case 2: return c.fn.call(c.context,
                                t),
                                !0;case 3: return c.fn.call(c.context,
                                t,
                                i),
                                !0;case 4: return c.fn.call(c.context,
                                t,
                                i,
                                r),
                                !0;case 5: return c.fn.call(c.context,
                                t,
                                i,
                                r,
                                a),
                                !0;case 6: return c.fn.call(c.context,
                                t,
                                i,
                                r,
                                a,
                                s),
                                !0
                            }for(d=1,
                            l=new Array(u-1);d<u;d++)l[
                                d-1
                            ]=arguments[
                                d
                            ];c.fn.apply(c.context,
                            l)
                        }else{
                            var h,
                            f=c.length;for(d=0;d<f;d++)switch(c[
                                d
                            ].once&&this.removeListener(e,
                            c[
                                d
                            ].fn,
                            void 0,
                            !0),
                            u){
                                case 1: c[
                                    d
                                ].fn.call(c[
                                    d
                                ].context);break;case 2: c[
                                    d
                                ].fn.call(c[
                                    d
                                ].context,
                                t);break;case 3: c[
                                    d
                                ].fn.call(c[
                                    d
                                ].context,
                                t,
                                i);break;case 4: c[
                                    d
                                ].fn.call(c[
                                    d
                                ].context,
                                t,
                                i,
                                r);break;default: if(!l)for(h=1,
                                l=new Array(u-1);h<u;h++)l[
                                    h-1
                                ]=arguments[
                                    h
                                ];c[
                                    d
                                ].fn.apply(c[
                                    d
                                ].context,
                                l)
                            }
                        }return!0
                    },
                    d.prototype.on=function(e,
                    t,
                    i){
                        return o(this,
                        e,
                        t,
                        i,
                        !1)
                    },
                    d.prototype.once=function(e,
                    t,
                    i){
                        return o(this,
                        e,
                        t,
                        i,
                        !0)
                    },
                    d.prototype.removeListener=function(e,
                    t,
                    i,
                    r){
                        var a=n?n+e: e;if(!this._events[
                            a
                        ])return this;if(!t)return l(this,
                        a),
                        this;var s=this._events[
                            a
                        ];if(s.fn)s.fn!==t||r&&!s.once||i&&s.context!==i||l(this,
                        a);else{
                            for(var o=0,
                            d=[],
                            c=s.length;o<c;o++)(s[
                                o
                            ].fn!==t||r&&!s[
                                o
                            ].once||i&&s[
                                o
                            ].context!==i)&&d.push(s[
                                o
                            ]);d.length?this._events[
                                a
                            ]=1===d.length?d[
                                0
                            ]: d: l(this,
                            a)
                        }return this
                    },
                    d.prototype.removeAllListeners=function(e){
                        var t;return e?(t=n?n+e: e,
                        this._events[
                            t
                        ]&&l(this,
                        t)): (this._events=new a,
                        this._eventsCount=0),
                        this
                    },
                    d.prototype.off=d.prototype.removeListener,
                    d.prototype.addListener=d.prototype.on,
                    d.prefixed=n,
                    d.EventEmitter=d,
                    e.exports=d
                },
                "./node_modules/url-toolkit/src/url-toolkit.js": /*!*****************************************************!*\
  !*** ./node_modules/url-toolkit/src/url-toolkit.js ***!
  \*****************************************************//*! no static exports found *//*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,
                t,
                i){
                    var r,
                    n,
                    a,
                    s,
                    o;r=/^((?:[a-zA-Z0-9+\-.]+:)?)(\/\/[^\/?#]*)?((?:[^\/?#]*\/)*[^;?#]*)?(;[^?#]*)?(\?[^#]*)?(#.*)?$/,
                    n=/^([^\/?#]*)(.*)$/,
                    a=/(?:\/|^)\.(?=\/)/g,
                    s=/(?:\/|^)\.\.\/(?!\.\.\/)[^\/]*(?=\/)/g,
                    o={
                        buildAbsoluteURL: function(e,
                        t,
                        i){
                            if(i=i||{},
                            e=e.trim(),
                            !(t=t.trim())){
                                if(!i.alwaysNormalize)return e;var r=o.parseURL(e);if(!r)throw new Error("Error trying to parse base URL.");return r.path=o.normalizePath(r.path),
                                o.buildURLFromParts(r)
                            }var a=o.parseURL(t);if(!a)throw new Error("Error trying to parse relative URL.");if(a.scheme)return i.alwaysNormalize?(a.path=o.normalizePath(a.path),
                            o.buildURLFromParts(a)): t;var s=o.parseURL(e);if(!s)throw new Error("Error trying to parse base URL.");if(!s.netLoc&&s.path&&"/"!==s.path[
                                0
                            ]){
                                var l=n.exec(s.path);s.netLoc=l[
                                    1
                                ],
                                s.path=l[
                                    2
                                ]
                            }s.netLoc&&!s.path&&(s.path="/");var d={
                                scheme: s.scheme,
                                netLoc: a.netLoc,
                                path: null,
                                params: a.params,
                                query: a.query,
                                fragment: a.fragment
                            };if(!a.netLoc&&(d.netLoc=s.netLoc,
                            "/"!==a.path[
                                0
                            ]))if(a.path){
                                var c=s.path,
                                u=c.substring(0,
                                c.lastIndexOf("/")+1)+a.path;d.path=o.normalizePath(u)
                            }else d.path=s.path,
                            a.params||(d.params=s.params,
                            a.query||(d.query=s.query));return null===d.path&&(d.path=i.alwaysNormalize?o.normalizePath(a.path): a.path),
                            o.buildURLFromParts(d)
                        },
                        parseURL: function(e){
                            var t=r.exec(e);return t?{
                                scheme: t[
                                    1
                                ]||"",
                                netLoc: t[
                                    2
                                ]||"",
                                path: t[
                                    3
                                ]||"",
                                params: t[
                                    4
                                ]||"",
                                query: t[
                                    5
                                ]||"",
                                fragment: t[
                                    6
                                ]||""
                            }: null
                        },
                        normalizePath: function(e){
                            for(e=e.split("").reverse().join("").replace(a,
                            "");e.length!==(e=e.replace(s,
                            "")).length;);return e.split("").reverse().join("")
                        },
                        buildURLFromParts: function(e){
                            return e.scheme+e.netLoc+e.path+e.params+e.query+e.fragment
                        }
                    },
                    e.exports=o
                },
                "./node_modules/webworkify-webpack/index.js": /*!**************************************************!*\
  !*** ./node_modules/webworkify-webpack/index.js ***!
  \**************************************************//*! no static exports found *//*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,
                t,
                i){
                    function r(e){
                        var t={};function i(r){
                            if(t[
                                r
                            ])return t[
                                r
                            ].exports;var n=t[
                                r
                            ]={
                                i: r,
                                l: !1,
                                exports: {}
                            };return e[
                                r
                            ].call(n.exports,
                            n,
                            n.exports,
                            i),
                            n.l=!0,
                            n.exports
                        }i.m=e,
                        i.c=t,
                        i.i=function(e){
                            return e
                        },
                        i.d=function(e,
                        t,
                        r){
                            i.o(e,
                            t)||Object.defineProperty(e,
                            t,
                            {
                                configurable: !1,
                                enumerable: !0,
                                get: r
                            })
                        },
                        i.r=function(e){
                            Object.defineProperty(e,
                            "__esModule",
                            {
                                value: !0
                            })
                        },
                        i.n=function(e){
                            var t=e&&e.__esModule?function(){
                                return e.default
                            }: function(){
                                return e
                            };return i.d(t,
                            "a",
                            t),
                            t
                        },
                        i.o=function(e,
                        t){
                            return Object.prototype.hasOwnProperty.call(e,
                            t)
                        },
                        i.p="/",
                        i.oe=function(e){
                            throw console.error(e),
                            e
                        };var r=i(i.s=ENTRY_MODULE);return r.default||r
                    }function n(e){
                        return(e+"").replace(/[.?*+^$[\]\\(){}|-]/g,
                        "\\$&")
                    }function a(e,
                    t,
                    r){
                        var a={};a[
                            r
                        ]=[];var s=t.toString(),
                        o=s.match(/^function\s?\w*\(\w+,\s*\w+,\s*(\w+)\)/);if(!o)return a;for(var l,
                        d=o[
                            1
                        ],
                        c=new RegExp("(\\\\n|\\W)"+n(d)+"\\(\\s*(/\\*.*?\\*/)?\\s*.*?([\\.|\\-|\\+|\\w|/|@]+).*?\\)",
                        "g");l=c.exec(s);)"dll-reference"!==l[
                            3
                        ]&&a[
                            r
                        ].push(l[
                            3
                        ]);for(c=new RegExp("\\("+n(d)+'\\("(dll-reference\\s([\\.|\\-|\\+|\\w|/|@]+))"\\)\\)\\(\\s*(/\\*.*?\\*/)?\\s*.*?([\\.|\\-|\\+|\\w|/|@]+).*?\\)',
                        "g");l=c.exec(s);)e[
                            l[
                                2
                            ]
                        ]||(a[
                            r
                        ].push(l[
                            1
                        ]),
                        e[
                            l[
                                2
                            ]
                        ]=i(l[
                            1
                        ]).m),
                        a[
                            l[
                                2
                            ]
                        ]=a[
                            l[
                                2
                            ]
                        ]||[],
                        a[
                            l[
                                2
                            ]
                        ].push(l[
                            4
                        ]);for(var u,
                        h=Object.keys(a),
                        f=0;f<h.length;f++)for(var g=0;g<a[
                            h[
                                f
                            ]
                        ].length;g++)u=a[
                            h[
                                f
                            ]
                        ][
                            g
                        ],
                        isNaN(1*u)||(a[
                            h[
                                f
                            ]
                        ][
                            g
                        ]=1*a[
                            h[
                                f
                            ]
                        ][
                            g
                        ]);return a
                    }function s(e){
                        return Object.keys(e).reduce((function(t,
                        i){
                            return t||e[
                                i
                            ].length>0
                        }),
                        !1)
                    }e.exports=function(e,
                    t){
                        t=t||{};var n={
                            main: i.m
                        },
                        o=t.all?{
                            main: Object.keys(n.main)
                        }: function(e,
                        t){
                            for(var i={
                                main: [
                                    t
                                ]
                            },
                            r={
                                main: []
                            },
                            n={
                                main: {}
                            };s(i);)for(var o=Object.keys(i),
                            l=0;l<o.length;l++){
                                var d=o[
                                    l
                                ],
                                c=i[
                                    d
                                ].pop();if(n[
                                    d
                                ]=n[
                                    d
                                ]||{},
                                !n[
                                    d
                                ][
                                    c
                                ]&&e[
                                    d
                                ][
                                    c
                                ]){
                                    n[
                                        d
                                    ][
                                        c
                                    ]=!0,
                                    r[
                                        d
                                    ]=r[
                                        d
                                    ]||[],
                                    r[
                                        d
                                    ].push(c);for(var u=a(e,
                                    e[
                                        d
                                    ][
                                        c
                                    ],
                                    d),
                                    h=Object.keys(u),
                                    f=0;f<h.length;f++)i[
                                        h[
                                            f
                                        ]
                                    ]=i[
                                        h[
                                            f
                                        ]
                                    ]||[],
                                    i[
                                        h[
                                            f
                                        ]
                                    ]=i[
                                        h[
                                            f
                                        ]
                                    ].concat(u[
                                        h[
                                            f
                                        ]
                                    ])
                                }
                            }return r
                        }(n,
                        e),
                        l="";Object.keys(o).filter((function(e){
                            return "main"!==e
                        })).forEach((function(e){
                            for(var t=0;o[
                                e
                            ][
                                t
                            ];)t++;o[
                                e
                            ].push(t),
                            n[
                                e
                            ][
                                t
                            ]="(function(module, exports, __webpack_require__) { module.exports = __webpack_require__; })",
                            l=l+"var "+e+" = ("+r.toString().replace("ENTRY_MODULE",
                            JSON.stringify(t))+")({"+o[
                                e
                            ].map((function(t){
                                return JSON.stringify(t)+": "+n[
                                    e
                                ][
                                    t
                                ].toString()
                            })).join(",")+"});\n"
                        })),
                        l=l+"new (("+r.toString().replace("ENTRY_MODULE",
                        JSON.stringify(e))+")({"+o.main.map((function(e){
                            return JSON.stringify(e)+": "+n.main[
                                e
                            ].toString()
                        })).join(",")+"}))(self);";var d=new window.Blob([
                            l
                        ],
                        {
                            type: "text/javascript"
                        });if(t.bare)return d;var c=(window.URL||window.webkitURL||window.mozURL||window.msURL).createObjectURL(d),
                        u=new window.Worker(c);return u.objectURL=c,
                        u
                    }
                },
                "./src/crypt/decrypter.js": /*!********************************************!*\
  !*** ./src/crypt/decrypter.js + 3 modules ***!
  \********************************************//*! exports provided: default *//*! ModuleConcatenation bailout: Cannot concat with ./src/errors.ts because of ./src/hls.ts *//*! ModuleConcatenation bailout: Cannot concat with ./src/events.js because of ./src/hls.ts *//*! ModuleConcatenation bailout: Cannot concat with ./src/utils/get-self-scope.js because of ./src/hls.ts *//*! ModuleConcatenation bailout: Cannot concat with ./src/utils/logger.js because of ./src/hls.ts */function(e,
                t,
                i){
                    "use strict";i.r(t);var r=function(){
                        function e(e,
                        t){
                            this.subtle=e,
                            this.aesIV=t
                        }return e.prototype.decrypt=function(e,
                        t){
                            return this.subtle.decrypt({
                                name: "AES-CBC",
                                iv: this.aesIV
                            },
                            t,
                            e)
                        },
                        e
                    }(),
                    n=function(){
                        function e(e,
                        t){
                            this.subtle=e,
                            this.key=t
                        }return e.prototype.expandKey=function(){
                            return this.subtle.importKey("raw",
                            this.key,
                            {
                                name: "AES-CBC"
                            },
                            !1,
                            [
                                "encrypt",
                                "decrypt"
                            ])
                        },
                        e
                    }(),
                    a=function(){
                        function e(){
                            this.rcon=[
                                0,
                                1,
                                2,
                                4,
                                8,
                                16,
                                32,
                                64,
                                128,
                                27,
                                54
                            ],
                            this.subMix=[
                                new Uint32Array(256),
                                new Uint32Array(256),
                                new Uint32Array(256),
                                new Uint32Array(256)
                            ],
                            this.invSubMix=[
                                new Uint32Array(256),
                                new Uint32Array(256),
                                new Uint32Array(256),
                                new Uint32Array(256)
                            ],
                            this.sBox=new Uint32Array(256),
                            this.invSBox=new Uint32Array(256),
                            this.key=new Uint32Array(0),
                            this.initTable()
                        }var t=e.prototype;return t.uint8ArrayToUint32Array_=function(e){
                            for(var t=new DataView(e),
                            i=new Uint32Array(4),
                            r=0;r<4;r++)i[
                                r
                            ]=t.getUint32(4*r);return i
                        },
                        t.initTable=function(){
                            var e=this.sBox,
                            t=this.invSBox,
                            i=this.subMix,
                            r=i[
                                0
                            ],
                            n=i[
                                1
                            ],
                            a=i[
                                2
                            ],
                            s=i[
                                3
                            ],
                            o=this.invSubMix,
                            l=o[
                                0
                            ],
                            d=o[
                                1
                            ],
                            c=o[
                                2
                            ],
                            u=o[
                                3
                            ],
                            h=new Uint32Array(256),
                            f=0,
                            g=0,
                            p=0;for(p=0;p<256;p++)h[
                                p
                            ]=p<128?p<<1: p<<1^283;for(p=0;p<256;p++){
                                var v=g^g<<1^g<<2^g<<3^g<<4;v=v>>>8^255&v^99,
                                e[
                                    f
                                ]=v,
                                t[
                                    v
                                ]=f;var m=h[
                                    f
                                ],
                                y=h[
                                    m
                                ],
                                b=h[
                                    y
                                ],
                                _=257*h[
                                    v
                                ]^16843008*v;r[
                                    f
                                ]=_<<24|_>>>8,
                                n[
                                    f
                                ]=_<<16|_>>>16,
                                a[
                                    f
                                ]=_<<8|_>>>24,
                                s[
                                    f
                                ]=_,
                                _=16843009*b^65537*y^257*m^16843008*f,
                                l[
                                    v
                                ]=_<<24|_>>>8,
                                d[
                                    v
                                ]=_<<16|_>>>16,
                                c[
                                    v
                                ]=_<<8|_>>>24,
                                u[
                                    v
                                ]=_,
                                f?(f=m^h[
                                    h[
                                        h[
                                            b^m
                                        ]
                                    ]
                                ],
                                g^=h[
                                    h[
                                        g
                                    ]
                                ]): f=g=1
                            }
                        },
                        t.expandKey=function(e){
                            for(var t=this.uint8ArrayToUint32Array_(e),
                            i=!0,
                            r=0;r<t.length&&i;)i=t[
                                r
                            ]===this.key[
                                r
                            ],
                            r++;if(!i){
                                this.key=t;var n=this.keySize=t.length;if(4!==n&&6!==n&&8!==n)throw new Error("Invalid aes key size="+n);var a,
                                s,
                                o,
                                l,
                                d=this.ksRows=4*(n+6+1),
                                c=this.keySchedule=new Uint32Array(d),
                                u=this.invKeySchedule=new Uint32Array(d),
                                h=this.sBox,
                                f=this.rcon,
                                g=this.invSubMix,
                                p=g[
                                    0
                                ],
                                v=g[
                                    1
                                ],
                                m=g[
                                    2
                                ],
                                y=g[
                                    3
                                ];for(a=0;a<d;a++)a<n?o=c[
                                    a
                                ]=t[
                                    a
                                ]: (l=o,
                                a%n==0?(l=h[
                                    (l=l<<8|l>>>24)>>>24
                                ]<<24|h[
                                    l>>>16&255
                                ]<<16|h[
                                    l>>>8&255
                                ]<<8|h[
                                    255&l
                                ],
                                l^=f[
                                    a/n|0
                                ]<<24): n>6&&a%n==4&&(l=h[
                                    l>>>24
                                ]<<24|h[
                                    l>>>16&255
                                ]<<16|h[
                                    l>>>8&255
                                ]<<8|h[
                                    255&l
                                ]),
                                c[
                                    a
                                ]=o=(c[
                                    a-n
                                ]^l)>>>0);for(s=0;s<d;s++)a=d-s,
                                l=3&s?c[
                                    a
                                ]: c[
                                    a-4
                                ],
                                u[
                                    s
                                ]=s<4||a<=4?l: p[
                                    h[
                                        l>>>24
                                    ]
                                ]^v[
                                    h[
                                        l>>>16&255
                                    ]
                                ]^m[
                                    h[
                                        l>>>8&255
                                    ]
                                ]^y[
                                    h[
                                        255&l
                                    ]
                                ],
                                u[
                                    s
                                ]=u[
                                    s
                                ]>>>0
                            }
                        },
                        t.networkToHostOrderSwap=function(e){
                            return e<<24|(65280&e)<<8|(16711680&e)>>8|e>>>24
                        },
                        t.decrypt=function(e,
                        t,
                        i,
                        r){
                            for(var n,
                            a,
                            s,
                            o,
                            l,
                            d,
                            c,
                            u,
                            h,
                            f,
                            g,
                            p,
                            v,
                            m,
                            y,
                            b,
                            _,
                            T=this.keySize+6,
                            E=this.invKeySchedule,
                            w=this.invSBox,
                            S=this.invSubMix,
                            A=S[
                                0
                            ],
                            R=S[
                                1
                            ],
                            k=S[
                                2
                            ],
                            L=S[
                                3
                            ],
                            D=this.uint8ArrayToUint32Array_(i),
                            I=D[
                                0
                            ],
                            x=D[
                                1
                            ],
                            O=D[
                                2
                            ],
                            C=D[
                                3
                            ],
                            P=new Int32Array(e),
                            M=new Int32Array(P.length),
                            F=this.networkToHostOrderSwap;t<P.length;){
                                for(h=F(P[
                                    t
                                ]),
                                f=F(P[
                                    t+1
                                ]),
                                g=F(P[
                                    t+2
                                ]),
                                p=F(P[
                                    t+3
                                ]),
                                l=h^E[
                                    0
                                ],
                                d=p^E[
                                    1
                                ],
                                c=g^E[
                                    2
                                ],
                                u=f^E[
                                    3
                                ],
                                v=4,
                                m=1;m<T;m++)n=A[
                                    l>>>24
                                ]^R[
                                    d>>16&255
                                ]^k[
                                    c>>8&255
                                ]^L[
                                    255&u
                                ]^E[
                                    v
                                ],
                                a=A[
                                    d>>>24
                                ]^R[
                                    c>>16&255
                                ]^k[
                                    u>>8&255
                                ]^L[
                                    255&l
                                ]^E[
                                    v+1
                                ],
                                s=A[
                                    c>>>24
                                ]^R[
                                    u>>16&255
                                ]^k[
                                    l>>8&255
                                ]^L[
                                    255&d
                                ]^E[
                                    v+2
                                ],
                                o=A[
                                    u>>>24
                                ]^R[
                                    l>>16&255
                                ]^k[
                                    d>>8&255
                                ]^L[
                                    255&c
                                ]^E[
                                    v+3
                                ],
                                l=n,
                                d=a,
                                c=s,
                                u=o,
                                v+=4;n=w[
                                    l>>>24
                                ]<<24^w[
                                    d>>16&255
                                ]<<16^w[
                                    c>>8&255
                                ]<<8^w[
                                    255&u
                                ]^E[
                                    v
                                ],
                                a=w[
                                    d>>>24
                                ]<<24^w[
                                    c>>16&255
                                ]<<16^w[
                                    u>>8&255
                                ]<<8^w[
                                    255&l
                                ]^E[
                                    v+1
                                ],
                                s=w[
                                    c>>>24
                                ]<<24^w[
                                    u>>16&255
                                ]<<16^w[
                                    l>>8&255
                                ]<<8^w[
                                    255&d
                                ]^E[
                                    v+2
                                ],
                                o=w[
                                    u>>>24
                                ]<<24^w[
                                    l>>16&255
                                ]<<16^w[
                                    d>>8&255
                                ]<<8^w[
                                    255&c
                                ]^E[
                                    v+3
                                ],
                                v+=3,
                                M[
                                    t
                                ]=F(n^I),
                                M[
                                    t+1
                                ]=F(o^x),
                                M[
                                    t+2
                                ]=F(s^O),
                                M[
                                    t+3
                                ]=F(a^C),
                                I=h,
                                x=f,
                                O=g,
                                C=p,
                                t+=4
                            }return r?(y=M.buffer,
                            b=y.byteLength,
                            (_=b&&new DataView(y).getUint8(b-1))?y.slice(0,
                            b-_): y): M.buffer
                        },
                        t.destroy=function(){
                            this.key=void 0,
                            this.keySize=void 0,
                            this.ksRows=void 0,
                            this.sBox=void 0,
                            this.invSBox=void 0,
                            this.subMix=void 0,
                            this.invSubMix=void 0,
                            this.keySchedule=void 0,
                            this.invKeySchedule=void 0,
                            this.rcon=void 0
                        },
                        e
                    }(),
                    s=i("./src/errors.ts"),
                    o=i("./src/utils/logger.js"),
                    l=i("./src/events.js"),
                    d=i("./src/utils/get-self-scope.js"),
                    c=Object(d.getSelfScope)(),
                    u=function(){
                        function e(e,
                        t,
                        i){
                            var r=(void 0===i?{}: i).removePKCS7Padding,
                            n=void 0===r||r;if(this.logEnabled=!0,
                            this.observer=e,
                            this.config=t,
                            this.removePKCS7Padding=n,
                            n)try{
                                var a=c.crypto;a&&(this.subtle=a.subtle||a.webkitSubtle)
                            }catch(e){}this.disableWebCrypto=!this.subtle
                        }var t=e.prototype;return t.isSync=function(){
                            return this.disableWebCrypto&&this.config.enableSoftwareAES
                        },
                        t.decrypt=function(e,
                        t,
                        i,
                        s){
                            var l=this;if(this.disableWebCrypto&&this.config.enableSoftwareAES){
                                this.logEnabled&&(o.logger.log("JS AES decrypt"),
                                this.logEnabled=!1);var d=this.decryptor;d||(this.decryptor=d=new a),
                                d.expandKey(t),
                                s(d.decrypt(e,
                                0,
                                i,
                                this.removePKCS7Padding))
                            }else{
                                this.logEnabled&&(o.logger.log("WebCrypto AES decrypt"),
                                this.logEnabled=!1);var c=this.subtle;this.key!==t&&(this.key=t,
                                this.fastAesKey=new n(c,
                                t)),
                                this.fastAesKey.expandKey().then((function(n){
                                    new r(c,
                                    i).decrypt(e,
                                    n).catch((function(r){
                                        l.onWebCryptoError(r,
                                        e,
                                        t,
                                        i,
                                        s)
                                    })).then((function(e){
                                        s(e)
                                    }))
                                })).catch((function(r){
                                    l.onWebCryptoError(r,
                                    e,
                                    t,
                                    i,
                                    s)
                                }))
                            }
                        },
                        t.onWebCryptoError=function(e,
                        t,
                        i,
                        r,
                        n){
                            this.config.enableSoftwareAES?(o.logger.log("WebCrypto Error, disable WebCrypto API"),
                            this.disableWebCrypto=!0,
                            this.logEnabled=!0,
                            this.decrypt(t,
                            i,
                            r,
                            n)): (o.logger.error("decrypting error : "+e.message),
                            this.observer.trigger(l.default.ERROR,
                            {
                                type: s.ErrorTypes.MEDIA_ERROR,
                                details: s.ErrorDetails.FRAG_DECRYPT_ERROR,
                                fatal: !0,
                                reason: e.message
                            }))
                        },
                        t.destroy=function(){
                            var e=this.decryptor;e&&(e.destroy(),
                            this.decryptor=void 0)
                        },
                        e
                    }();t.default=u
                },
                "./src/demux/demuxer-inline.js": /*!**************************************************!*\
  !*** ./src/demux/demuxer-inline.js + 12 modules ***!
  \**************************************************//*! exports provided: default *//*! ModuleConcatenation bailout: Cannot concat with ./src/crypt/decrypter.js because of ./src/hls.ts *//*! ModuleConcatenation bailout: Cannot concat with ./src/demux/id3.js because of ./src/hls.ts *//*! ModuleConcatenation bailout: Cannot concat with ./src/demux/mp4demuxer.js because of ./src/hls.ts *//*! ModuleConcatenation bailout: Cannot concat with ./src/errors.ts because of ./src/hls.ts *//*! ModuleConcatenation bailout: Cannot concat with ./src/events.js because of ./src/hls.ts *//*! ModuleConcatenation bailout: Cannot concat with ./src/polyfills/number.js because of ./src/hls.ts *//*! ModuleConcatenation bailout: Cannot concat with ./src/utils/get-self-scope.js because of ./src/hls.ts *//*! ModuleConcatenation bailout: Cannot concat with ./src/utils/logger.js because of ./src/hls.ts */function(e,
                t,
                i){
                    "use strict";i.r(t);var r=i("./src/events.js"),
                    n=i("./src/errors.ts"),
                    a=i("./src/crypt/decrypter.js"),
                    s=i("./src/polyfills/number.js"),
                    o=i("./src/utils/logger.js"),
                    l=i("./src/utils/get-self-scope.js");function d(e,
                    t){
                        return 255===e[
                            t
                        ]&&240==(246&e[
                            t+1
                        ])
                    }function c(e,
                    t){
                        return 1&e[
                            t+1
                        ]?7: 9
                    }function u(e,
                    t){
                        return(3&e[
                            t+3
                        ])<<11|e[
                            t+4
                        ]<<3|(224&e[
                            t+5
                        ])>>>5
                    }function h(e,
                    t){
                        return!!(t+1<e.length&&d(e,
                        t))
                    }function f(e,
                    t){
                        if(h(e,
                        t)){
                            var i=c(e,
                            t);if(t+i>=e.length)return!1;var r=u(e,
                            t);if(r<=i)return!1;var n=t+r;if(n===e.length||n+1<e.length&&d(e,
                            n))return!0
                        }return!1
                    }function g(e,
                    t,
                    i,
                    a,
                    s){
                        if(!e.samplerate){
                            var l=function(e,
                            t,
                            i,
                            a){
                                var s,
                                l,
                                d,
                                c,
                                u,
                                h=navigator.userAgent.toLowerCase(),
                                f=a,
                                g=[
                                    96e3,
                                    88200,
                                    64e3,
                                    48e3,
                                    44100,
                                    32e3,
                                    24e3,
                                    22050,
                                    16e3,
                                    12e3,
                                    11025,
                                    8e3,
                                    7350
                                ];if(s=1+((192&t[
                                    i+2
                                ])>>>6),
                                !((l=(60&t[
                                    i+2
                                ])>>>2)>g.length-1))return c=(1&t[
                                    i+2
                                ])<<2,
                                c|=(192&t[
                                    i+3
                                ])>>>6,
                                o.logger.log("manifest codec:"+a+",ADTS data:type:"+s+",sampleingIndex:"+l+"["+g[
                                    l
                                ]+"Hz],channelConfig:"+c),
                                /firefox/i.test(h)?l>=6?(s=5,
                                u=new Array(4),
                                d=l-3): (s=2,
                                u=new Array(2),
                                d=l): -1!==h.indexOf("android")?(s=2,
                                u=new Array(2),
                                d=l): (s=5,
                                u=new Array(4),
                                a&&(-1!==a.indexOf("mp4a.40.29")||-1!==a.indexOf("mp4a.40.5"))||!a&&l>=6?d=l-3: ((a&&-1!==a.indexOf("mp4a.40.2")&&(l>=6&&1===c||/vivaldi/i.test(h))||!a&&1===c)&&(s=2,
                                u=new Array(2)),
                                d=l)),
                                u[
                                    0
                                ]=s<<3,
                                u[
                                    0
                                ]|=(14&l)>>1,
                                u[
                                    1
                                ]|=(1&l)<<7,
                                u[
                                    1
                                ]|=c<<3,
                                5===s&&(u[
                                    1
                                ]|=(14&d)>>1,
                                u[
                                    2
                                ]=(1&d)<<7,
                                u[
                                    2
                                ]|=8,
                                u[
                                    3
                                ]=0),
                                {
                                    config: u,
                                    samplerate: g[
                                        l
                                    ],
                                    channelCount: c,
                                    codec: "mp4a.40."+s,
                                    manifestCodec: f
                                };e.trigger(r.default.ERROR,
                                {
                                    type: n.ErrorTypes.MEDIA_ERROR,
                                    details: n.ErrorDetails.FRAG_PARSING_ERROR,
                                    fatal: !0,
                                    reason: "invalid ADTS sampling index:"+l
                                })
                            }(t,
                            i,
                            a,
                            s);e.config=l.config,
                            e.samplerate=l.samplerate,
                            e.channelCount=l.channelCount,
                            e.codec=l.codec,
                            e.manifestCodec=l.manifestCodec,
                            o.logger.log("parsed codec:"+e.codec+",rate:"+l.samplerate+",nb channel:"+l.channelCount)
                        }
                    }function p(e){
                        return 9216e4/e
                    }function v(e,
                    t,
                    i,
                    r,
                    n){
                        var a=function(e,
                        t,
                        i,
                        r,
                        n){
                            var a,
                            s,
                            o=e.length;if(a=c(e,
                            t),
                            s=u(e,
                            t),
                            (s-=a)>0&&t+a+s<=o)return{
                                headerLength: a,
                                frameLength: s,
                                stamp: i+r*n
                            }
                        }(t,
                        i,
                        r,
                        n,
                        p(e.samplerate));if(a){
                            var s=a.stamp,
                            o=a.headerLength,
                            l=a.frameLength,
                            d={
                                unit: t.subarray(i+o,
                                i+o+l),
                                pts: s,
                                dts: s
                            };return e.samples.push(d),
                            {
                                sample: d,
                                length: l+o
                            }
                        }
                    }var m=i("./src/demux/id3.js"),
                    y=function(){
                        function e(e,
                        t,
                        i){
                            this.observer=e,
                            this.config=i,
                            this.remuxer=t
                        }var t=e.prototype;return t.resetInitSegment=function(e,
                        t,
                        i,
                        r){
                            this._audioTrack={
                                container: "audio/adts",
                                type: "audio",
                                id: 0,
                                sequenceNumber: 0,
                                isAAC: !0,
                                samples: [],
                                len: 0,
                                manifestCodec: t,
                                duration: r,
                                inputTimeScale: 9e4
                            }
                        },
                        t.resetTimeStamp=function(){},
                        e.probe=function(e){
                            if(!e)return!1;for(var t=(m.default.getID3Data(e,
                            0)||[]).length,
                            i=e.length;t<i;t++)if(f(e,
                            t))return o.logger.log("ADTS sync word found !"),
                            !0;return!1
                        },
                        t.append=function(e,
                        t,
                        i,
                        r){
                            for(var n=this._audioTrack,
                            a=m.default.getID3Data(e,
                            0)||[],
                            l=m.default.getTimeStamp(a),
                            d=Object(s.isFiniteNumber)(l)?90*l: 9e4*t,
                            c=0,
                            u=d,
                            f=e.length,
                            p=a.length,
                            y=[
                                {
                                    pts: u,
                                    dts: u,
                                    data: a
                                }
                            ];p<f-1;)if(h(e,
                            p)&&p+5<f){
                                g(n,
                                this.observer,
                                e,
                                p,
                                n.manifestCodec);var b=v(n,
                                e,
                                p,
                                d,
                                c);if(!b){
                                    o.logger.log("Unable to parse AAC frame");break
                                }p+=b.length,
                                u=b.sample.pts,
                                c++
                            }else m.default.isHeader(e,
                            p)?(a=m.default.getID3Data(e,
                            p),
                            y.push({
                                pts: u,
                                dts: u,
                                data: a
                            }),
                            p+=a.length): p++;this.remuxer.remux(n,
                            {
                                samples: []
                            },
                            {
                                samples: y,
                                inputTimeScale: 9e4
                            },
                            {
                                samples: []
                            },
                            t,
                            i,
                            r)
                        },
                        t.destroy=function(){},
                        e
                    }(),
                    b=i("./src/demux/mp4demuxer.js"),
                    _={
                        BitratesMap: [
                            32,
                            64,
                            96,
                            128,
                            160,
                            192,
                            224,
                            256,
                            288,
                            320,
                            352,
                            384,
                            416,
                            448,
                            32,
                            48,
                            56,
                            64,
                            80,
                            96,
                            112,
                            128,
                            160,
                            192,
                            224,
                            256,
                            320,
                            384,
                            32,
                            40,
                            48,
                            56,
                            64,
                            80,
                            96,
                            112,
                            128,
                            160,
                            192,
                            224,
                            256,
                            320,
                            32,
                            48,
                            56,
                            64,
                            80,
                            96,
                            112,
                            128,
                            144,
                            160,
                            176,
                            192,
                            224,
                            256,
                            8,
                            16,
                            24,
                            32,
                            40,
                            48,
                            56,
                            64,
                            80,
                            96,
                            112,
                            128,
                            144,
                            160
                        ],
                        SamplingRateMap: [
                            44100,
                            48e3,
                            32e3,
                            22050,
                            24e3,
                            16e3,
                            11025,
                            12e3,
                            8e3
                        ],
                        SamplesCoefficients: [
                            [
                                0,
                                72,
                                144,
                                12
                            ],
                            [
                                0,
                                0,
                                0,
                                0
                            ],
                            [
                                0,
                                72,
                                144,
                                12
                            ],
                            [
                                0,
                                144,
                                144,
                                12
                            ]
                        ],
                        BytesInSlot: [
                            0,
                            1,
                            1,
                            4
                        ],
                        appendFrame: function(e,
                        t,
                        i,
                        r,
                        n){
                            if(!(i+24>t.length)){
                                var a=this.parseHeader(t,
                                i);if(a&&i+a.frameLength<=t.length){
                                    var s=r+n*(9e4*a.samplesPerFrame/a.sampleRate),
                                    o={
                                        unit: t.subarray(i,
                                        i+a.frameLength),
                                        pts: s,
                                        dts: s
                                    };return e.config=[],
                                    e.channelCount=a.channelCount,
                                    e.samplerate=a.sampleRate,
                                    e.samples.push(o),
                                    {
                                        sample: o,
                                        length: a.frameLength
                                    }
                                }
                            }
                        },
                        parseHeader: function(e,
                        t){
                            var i=e[
                                t+1
                            ]>>3&3,
                            r=e[
                                t+1
                            ]>>1&3,
                            n=e[
                                t+2
                            ]>>4&15,
                            a=e[
                                t+2
                            ]>>2&3,
                            s=e[
                                t+2
                            ]>>1&1;if(1!==i&&0!==n&&15!==n&&3!==a){
                                var o=3===i?3-r: 3===r?3: 4,
                                l=1e3*_.BitratesMap[
                                    14*o+n-1
                                ],
                                d=3===i?0: 2===i?1: 2,
                                c=_.SamplingRateMap[
                                    3*d+a
                                ],
                                u=e[
                                    t+3
                                ]>>6==3?1: 2,
                                h=_.SamplesCoefficients[
                                    i
                                ][
                                    r
                                ],
                                f=_.BytesInSlot[
                                    r
                                ],
                                g=8*h*f;return{
                                    sampleRate: c,
                                    channelCount: u,
                                    frameLength: parseInt(h*l/c+s,
                                    10)*f,
                                    samplesPerFrame: g
                                }
                            }
                        },
                        isHeaderPattern: function(e,
                        t){
                            return 255===e[
                                t
                            ]&&224==(224&e[
                                t+1
                            ])&&0!=(6&e[
                                t+1
                            ])
                        },
                        isHeader: function(e,
                        t){
                            return!!(t+1<e.length&&this.isHeaderPattern(e,
                            t))
                        },
                        probe: function(e,
                        t){
                            if(t+1<e.length&&this.isHeaderPattern(e,
                            t)){
                                var i=this.parseHeader(e,
                                t),
                                r=4;i&&i.frameLength&&(r=i.frameLength);var n=t+r;if(n===e.length||n+1<e.length&&this.isHeaderPattern(e,
                                n))return!0
                            }return!1
                        }
                    },
                    T=_,
                    E=function(){
                        function e(e){
                            this.data=e,
                            this.bytesAvailable=e.byteLength,
                            this.word=0,
                            this.bitsAvailable=0
                        }var t=e.prototype;return t.loadWord=function(){
                            var e=this.data,
                            t=this.bytesAvailable,
                            i=e.byteLength-t,
                            r=new Uint8Array(4),
                            n=Math.min(4,
                            t);if(0===n)throw new Error("no bytes available");r.set(e.subarray(i,
                            i+n)),
                            this.word=new DataView(r.buffer).getUint32(0),
                            this.bitsAvailable=8*n,
                            this.bytesAvailable-=n
                        },
                        t.skipBits=function(e){
                            var t;this.bitsAvailable>e?(this.word<<=e,
                            this.bitsAvailable-=e): (e-=this.bitsAvailable,
                            e-=(t=e>>3)>>3,
                            this.bytesAvailable-=t,
                            this.loadWord(),
                            this.word<<=e,
                            this.bitsAvailable-=e)
                        },
                        t.readBits=function(e){
                            var t=Math.min(this.bitsAvailable,
                            e),
                            i=this.word>>>32-t;return e>32&&o.logger.error("Cannot read more than 32 bits at a time"),
                            this.bitsAvailable-=t,
                            this.bitsAvailable>0?this.word<<=t: this.bytesAvailable>0&&this.loadWord(),
                            (t=e-t)>0&&this.bitsAvailable?i<<t|this.readBits(t): i
                        },
                        t.skipLZ=function(){
                            var e;for(e=0;e<this.bitsAvailable;++e)if(0!=(this.word&2147483648>>>e))return this.word<<=e,
                            this.bitsAvailable-=e,
                            e;return this.loadWord(),
                            e+this.skipLZ()
                        },
                        t.skipUEG=function(){
                            this.skipBits(1+this.skipLZ())
                        },
                        t.skipEG=function(){
                            this.skipBits(1+this.skipLZ())
                        },
                        t.readUEG=function(){
                            var e=this.skipLZ();return this.readBits(e+1)-1
                        },
                        t.readEG=function(){
                            var e=this.readUEG();return 1&e?1+e>>>1: -1*(e>>>1)
                        },
                        t.readBoolean=function(){
                            return 1===this.readBits(1)
                        },
                        t.readUByte=function(){
                            return this.readBits(8)
                        },
                        t.readUShort=function(){
                            return this.readBits(16)
                        },
                        t.readUInt=function(){
                            return this.readBits(32)
                        },
                        t.skipScalingList=function(e){
                            var t,
                            i=8,
                            r=8;for(t=0;t<e;t++)0!==r&&(r=(i+this.readEG()+256)%256),
                            i=0===r?i: r
                        },
                        t.readSPS=function(){
                            var e,
                            t,
                            i,
                            r,
                            n,
                            a,
                            s,
                            o=0,
                            l=0,
                            d=0,
                            c=0,
                            u=this.readUByte.bind(this),
                            h=this.readBits.bind(this),
                            f=this.readUEG.bind(this),
                            g=this.readBoolean.bind(this),
                            p=this.skipBits.bind(this),
                            v=this.skipEG.bind(this),
                            m=this.skipUEG.bind(this),
                            y=this.skipScalingList.bind(this);if(u(),
                            e=u(),
                            h(5),
                            p(3),
                            u(),
                            m(),
                            100===e||110===e||122===e||244===e||44===e||83===e||86===e||118===e||128===e){
                                var b=f();if(3===b&&p(1),
                                m(),
                                m(),
                                p(1),
                                g())for(a=3!==b?8: 12,
                                s=0;s<a;s++)g()&&y(s<6?16: 64)
                            }m();var _=f();if(0===_)f();else if(1===_)for(p(1),
                            v(),
                            v(),
                            t=f(),
                            s=0;s<t;s++)v();m(),
                            p(1),
                            i=f(),
                            r=f(),
                            0===(n=h(1))&&p(1),
                            p(1),
                            g()&&(o=f(),
                            l=f(),
                            d=f(),
                            c=f());var T=[
                                1,
                                1
                            ];if(g()&&g())switch(u()){
                                case 1: T=[
                                    1,
                                    1
                                ];break;case 2: T=[
                                    12,
                                    11
                                ];break;case 3: T=[
                                    10,
                                    11
                                ];break;case 4: T=[
                                    16,
                                    11
                                ];break;case 5: T=[
                                    40,
                                    33
                                ];break;case 6: T=[
                                    24,
                                    11
                                ];break;case 7: T=[
                                    20,
                                    11
                                ];break;case 8: T=[
                                    32,
                                    11
                                ];break;case 9: T=[
                                    80,
                                    33
                                ];break;case 10: T=[
                                    18,
                                    11
                                ];break;case 11: T=[
                                    15,
                                    11
                                ];break;case 12: T=[
                                    64,
                                    33
                                ];break;case 13: T=[
                                    160,
                                    99
                                ];break;case 14: T=[
                                    4,
                                    3
                                ];break;case 15: T=[
                                    3,
                                    2
                                ];break;case 16: T=[
                                    2,
                                    1
                                ];break;case 255: T=[
                                    u()<<8|u(),
                                    u()<<8|u()
                                ]
                            }return{
                                width: Math.ceil(16*(i+1)-2*o-2*l),
                                height: (2-n)*(r+1)*16-(n?2: 4)*(d+c),
                                pixelRatio: T
                            }
                        },
                        t.readSliceType=function(){
                            return this.readUByte(),
                            this.readUEG(),
                            this.readUEG()
                        },
                        e
                    }(),
                    w=function(){
                        function e(e,
                        t,
                        i,
                        r){
                            this.decryptdata=i,
                            this.discardEPB=r,
                            this.decrypter=new a.default(e,
                            t,
                            {
                                removePKCS7Padding: !1
                            })
                        }var t=e.prototype;return t.decryptBuffer=function(e,
                        t){
                            this.decrypter.decrypt(e,
                            this.decryptdata.key.buffer,
                            this.decryptdata.iv.buffer,
                            t)
                        },
                        t.decryptAacSample=function(e,
                        t,
                        i,
                        r){
                            var n=e[
                                t
                            ].unit,
                            a=n.subarray(16,
                            n.length-n.length%16),
                            s=a.buffer.slice(a.byteOffset,
                            a.byteOffset+a.length),
                            o=this;this.decryptBuffer(s,
                            (function(a){
                                a=new Uint8Array(a),
                                n.set(a,
                                16),
                                r||o.decryptAacSamples(e,
                                t+1,
                                i)
                            }))
                        },
                        t.decryptAacSamples=function(e,
                        t,
                        i){
                            for(;;t++){
                                if(t>=e.length)return void i();if(!(e[
                                    t
                                ].unit.length<32)){
                                    var r=this.decrypter.isSync();if(this.decryptAacSample(e,
                                    t,
                                    i,
                                    r),
                                    !r)return
                                }
                            }
                        },
                        t.getAvcEncryptedData=function(e){
                            for(var t=16*Math.floor((e.length-48)/160)+16,
                            i=new Int8Array(t),
                            r=0,
                            n=32;n<=e.length-16;n+=160,
                            r+=16)i.set(e.subarray(n,
                            n+16),
                            r);return i
                        },
                        t.getAvcDecryptedUnit=function(e,
                        t){
                            t=new Uint8Array(t);for(var i=0,
                            r=32;r<=e.length-16;r+=160,
                            i+=16)e.set(t.subarray(i,
                            i+16),
                            r);return e
                        },
                        t.decryptAvcSample=function(e,
                        t,
                        i,
                        r,
                        n,
                        a){
                            var s=this.discardEPB(n.data),
                            o=this.getAvcEncryptedData(s),
                            l=this;this.decryptBuffer(o.buffer,
                            (function(o){
                                n.data=l.getAvcDecryptedUnit(s,
                                o),
                                a||l.decryptAvcSamples(e,
                                t,
                                i+1,
                                r)
                            }))
                        },
                        t.decryptAvcSamples=function(e,
                        t,
                        i,
                        r){
                            for(;;t++,
                            i=0){
                                if(t>=e.length)return void r();for(var n=e[
                                    t
                                ].units;!(i>=n.length);i++){
                                    var a=n[
                                        i
                                    ];if(!(a.data.length<=48||1!==a.type&&5!==a.type)){
                                        var s=this.decrypter.isSync();if(this.decryptAvcSample(e,
                                        t,
                                        i,
                                        r,
                                        a,
                                        s),
                                        !s)return
                                    }
                                }
                            }
                        },
                        e
                    }(),
                    S={
                        video: 1,
                        audio: 2,
                        id3: 3,
                        text: 4
                    },
                    A=function(){
                        function e(e,
                        t,
                        i,
                        r){
                            this.observer=e,
                            this.config=i,
                            this.typeSupported=r,
                            this.remuxer=t,
                            this.sampleAes=null,
                            this.pmtUnknownTypes={}
                        }var t=e.prototype;return t.setDecryptData=function(e){
                            null!=e&&null!=e.key&&"SAMPLE-AES"===e.method?this.sampleAes=new w(this.observer,
                            this.config,
                            e,
                            this.discardEPB): this.sampleAes=null
                        },
                        e.probe=function(t){
                            var i=e._syncOffset(t);return!(i<0||(i&&o.logger.warn("MPEG2-TS detected but first sync word found @ offset "+i+", junk ahead ?"),
                            0))
                        },
                        e._syncOffset=function(e){
                            for(var t=Math.min(1e3,
                            e.length-564),
                            i=0;i<t;){
                                if(71===e[
                                    i
                                ]&&71===e[
                                    i+188
                                ]&&71===e[
                                    i+376
                                ])return i;i++
                            }return-1
                        },
                        e.createTrack=function(e,
                        t){
                            return{
                                container: "video"===e||"audio"===e?"video/mp2t": void 0,
                                type: e,
                                id: S[
                                    e
                                ],
                                pid: -1,
                                inputTimeScale: 9e4,
                                sequenceNumber: 0,
                                samples: [],
                                dropped: "video"===e?0: void 0,
                                isAAC: "audio"===e||void 0,
                                duration: "audio"===e?t: void 0
                            }
                        },
                        t.resetInitSegment=function(t,
                        i,
                        r,
                        n){
                            this.pmtParsed=!1,
                            this._pmtId=-1,
                            this.pmtUnknownTypes={},
                            this._avcTrack=e.createTrack("video",
                            n),
                            this._audioTrack=e.createTrack("audio",
                            n),
                            this._id3Track=e.createTrack("id3",
                            n),
                            this._txtTrack=e.createTrack("text",
                            n),
                            this.aacOverFlow=null,
                            this.aacLastPTS=null,
                            this.avcSample=null,
                            this.audioCodec=i,
                            this.videoCodec=r,
                            this._duration=n
                        },
                        t.resetTimeStamp=function(){},
                        t.append=function(t,
                        i,
                        a,
                        s){
                            var l,
                            d,
                            c,
                            u,
                            h,
                            f=t.length,
                            g=!1;this.pmtUnknownTypes={},
                            this.contiguous=a;var p=this.pmtParsed,
                            v=this._avcTrack,
                            m=this._audioTrack,
                            y=this._id3Track,
                            b=v.pid,
                            _=m.pid,
                            T=y.pid,
                            E=this._pmtId,
                            w=v.pesData,
                            S=m.pesData,
                            A=y.pesData,
                            R=this._parsePAT,
                            k=this._parsePMT.bind(this),
                            L=this._parsePES,
                            D=this._parseAVCPES.bind(this),
                            I=this._parseAACPES.bind(this),
                            x=this._parseMPEGPES.bind(this),
                            O=this._parseID3PES.bind(this),
                            C=e._syncOffset(t);for(f-=(f+C)%188,
                            l=C;l<f;l+=188)if(71===t[
                                l
                            ]){
                                if(d=!!(64&t[
                                    l+1
                                ]),
                                c=((31&t[
                                    l+1
                                ])<<8)+t[
                                    l+2
                                ],
                                (48&t[
                                    l+3
                                ])>>4>1){
                                    if((u=l+5+t[
                                        l+4
                                    ])===l+188)continue
                                }else u=l+4;switch(c){
                                    case b: d&&(w&&(h=L(w))&&D(h,
                                    !1),
                                    w={
                                        data: [],
                                        size: 0
                                    }),
                                    w&&(w.data.push(t.subarray(u,
                                    l+188)),
                                    w.size+=l+188-u);break;case _: d&&(S&&(h=L(S))&&(m.isAAC?I(h): x(h)),
                                    S={
                                        data: [],
                                        size: 0
                                    }),
                                    S&&(S.data.push(t.subarray(u,
                                    l+188)),
                                    S.size+=l+188-u);break;case T: d&&(A&&(h=L(A))&&O(h),
                                    A={
                                        data: [],
                                        size: 0
                                    }),
                                    A&&(A.data.push(t.subarray(u,
                                    l+188)),
                                    A.size+=l+188-u);break;case 0: d&&(u+=t[
                                        u
                                    ]+1),
                                    E=this._pmtId=R(t,
                                    u);break;case E: d&&(u+=t[
                                        u
                                    ]+1);var P=k(t,
                                    u,
                                    !0===this.typeSupported.mpeg||!0===this.typeSupported.mp3,
                                    null!=this.sampleAes);(b=P.avc)>0&&(v.pid=b),
                                    (_=P.audio)>0&&(m.pid=_,
                                    m.isAAC=P.isAAC),
                                    (T=P.id3)>0&&(y.pid=T),
                                    g&&!p&&(o.logger.log("reparse from beginning"),
                                    g=!1,
                                    l=C-188),
                                    p=this.pmtParsed=!0;break;case 17: case 8191: break;default: g=!0
                                }
                            }else this.observer.trigger(r.default.ERROR,
                            {
                                type: n.ErrorTypes.MEDIA_ERROR,
                                details: n.ErrorDetails.FRAG_PARSING_ERROR,
                                fatal: !1,
                                reason: "TS packet did not start with 0x47"
                            });w&&(h=L(w))?(D(h,
                            !0),
                            v.pesData=null): v.pesData=w,
                            S&&(h=L(S))?(m.isAAC?I(h): x(h),
                            m.pesData=null): (S&&S.size&&o.logger.log("last AAC PES packet truncated,might overlap between fragments"),
                            m.pesData=S),
                            A&&(h=L(A))?(O(h),
                            y.pesData=null): y.pesData=A,
                            null==this.sampleAes?this.remuxer.remux(m,
                            v,
                            y,
                            this._txtTrack,
                            i,
                            a,
                            s): this.decryptAndRemux(m,
                            v,
                            y,
                            this._txtTrack,
                            i,
                            a,
                            s)
                        },
                        t.decryptAndRemux=function(e,
                        t,
                        i,
                        r,
                        n,
                        a,
                        s){
                            if(e.samples&&e.isAAC){
                                var o=this;this.sampleAes.decryptAacSamples(e.samples,
                                0,
                                (function(){
                                    o.decryptAndRemuxAvc(e,
                                    t,
                                    i,
                                    r,
                                    n,
                                    a,
                                    s)
                                }))
                            }else this.decryptAndRemuxAvc(e,
                            t,
                            i,
                            r,
                            n,
                            a,
                            s)
                        },
                        t.decryptAndRemuxAvc=function(e,
                        t,
                        i,
                        r,
                        n,
                        a,
                        s){
                            if(t.samples){
                                var o=this;this.sampleAes.decryptAvcSamples(t.samples,
                                0,
                                0,
                                (function(){
                                    o.remuxer.remux(e,
                                    t,
                                    i,
                                    r,
                                    n,
                                    a,
                                    s)
                                }))
                            }else this.remuxer.remux(e,
                            t,
                            i,
                            r,
                            n,
                            a,
                            s)
                        },
                        t.destroy=function(){
                            this._initPTS=this._initDTS=void 0,
                            this._duration=0
                        },
                        t._parsePAT=function(e,
                        t){
                            return(31&e[
                                t+10
                            ])<<8|e[
                                t+11
                            ]
                        },
                        t._trackUnknownPmt=function(e,
                        t,
                        i){
                            var r=this.pmtUnknownTypes[
                                e
                            ]||0;return 0===r&&(this.pmtUnknownTypes[
                                e
                            ]=0,
                            t.call(o.logger,
                            i)),
                            this.pmtUnknownTypes[
                                e
                            ]++,
                            r
                        },
                        t._parsePMT=function(e,
                        t,
                        i,
                        r){
                            var n,
                            a,
                            s={
                                audio: -1,
                                avc: -1,
                                id3: -1,
                                isAAC: !0
                            };for(n=t+3+((15&e[
                                t+1
                            ])<<8|e[
                                t+2
                            ])-4,
                            t+=12+((15&e[
                                t+10
                            ])<<8|e[
                                t+11
                            ]);t<n;){
                                switch(a=(31&e[
                                    t+1
                                ])<<8|e[
                                    t+2
                                ],
                                e[
                                    t
                                ]){
                                    case 207: if(!r){
                                        this._trackUnknownPmt(e[
                                            t
                                        ],
                                        o.logger.warn,
                                        "ADTS AAC with AES-128-CBC frame encryption found in unencrypted stream");break
                                    }case 15: -1===s.audio&&(s.audio=a);break;case 21: -1===s.id3&&(s.id3=a);break;case 219: if(!r){
                                        this._trackUnknownPmt(e[
                                            t
                                        ],
                                        o.logger.warn,
                                        "H.264 with AES-128-CBC slice encryption found in unencrypted stream");break
                                    }case 27: -1===s.avc&&(s.avc=a);break;case 3: case 4: i?-1===s.audio&&(s.audio=a,
                                    s.isAAC=!1): this._trackUnknownPmt(e[
                                        t
                                    ],
                                    o.logger.warn,
                                    "MPEG audio found, not supported in this browser");break;case 36: this._trackUnknownPmt(e[
                                        t
                                    ],
                                    o.logger.warn,
                                    "Unsupported HEVC stream type found");break;default: this._trackUnknownPmt(e[
                                        t
                                    ],
                                    o.logger.log,
                                    "Unknown stream type:"+e[
                                        t
                                    ])
                                }t+=5+((15&e[
                                    t+3
                                ])<<8|e[
                                    t+4
                                ])
                            }return s
                        },
                        t._parsePES=function(e){
                            var t,
                            i,
                            r,
                            n,
                            a,
                            s,
                            l,
                            d,
                            c=0,
                            u=e.data;if(!e||0===e.size)return null;for(;u[
                                0
                            ].length<19&&u.length>1;){
                                var h=new Uint8Array(u[
                                    0
                                ].length+u[
                                    1
                                ].length);h.set(u[
                                    0
                                ]),
                                h.set(u[
                                    1
                                ],
                                u[
                                    0
                                ].length),
                                u[
                                    0
                                ]=h,
                                u.splice(1,
                                1)
                            }if(1===((t=u[
                                0
                            ])[
                                0
                            ]<<16)+(t[
                                1
                            ]<<8)+t[
                                2
                            ]){
                                if((r=(t[
                                    4
                                ]<<8)+t[
                                    5
                                ])&&r>e.size-6)return null;if(192&(i=t[
                                    7
                                ])&&(s=536870912*(14&t[
                                    9
                                ])+4194304*(255&t[
                                    10
                                ])+16384*(254&t[
                                    11
                                ])+128*(255&t[
                                    12
                                ])+(254&t[
                                    13
                                ])/2,
                                64&i?s-(l=536870912*(14&t[
                                    14
                                ])+4194304*(255&t[
                                    15
                                ])+16384*(254&t[
                                    16
                                ])+128*(255&t[
                                    17
                                ])+(254&t[
                                    18
                                ])/2)>54e5&&(o.logger.warn(Math.round((s-l)/9e4)+"s delta between PTS and DTS, align them"),
                                s=l): l=s),
                                d=(n=t[
                                    8
                                ])+9,
                                e.size<=d)return null;e.size-=d,
                                a=new Uint8Array(e.size);for(var f=0,
                                g=u.length;f<g;f++){
                                    var p=(t=u[
                                        f
                                    ]).byteLength;if(d){
                                        if(d>p){
                                            d-=p;continue
                                        }t=t.subarray(d),
                                        p-=d,
                                        d=0
                                    }a.set(t,
                                    c),
                                    c+=p
                                }return r&&(r-=n+3),
                                {
                                    data: a,
                                    pts: s,
                                    dts: l,
                                    len: r
                                }
                            }return null
                        },
                        t.pushAccesUnit=function(e,
                        t){
                            if(e.units.length&&e.frame){
                                var i=t.samples,
                                r=i.length;if(isNaN(e.pts)){
                                    if(!r)return void t.dropped++;var n=i[
                                        r-1
                                    ];e.pts=n.pts,
                                    e.dts=n.dts
                                }!this.config.forceKeyFrameOnDiscontinuity||!0===e.key||t.sps&&(r||this.contiguous)?(e.id=r,
                                i.push(e)): t.dropped++
                            }e.debug.length&&o.logger.log(e.pts+"/"+e.dts+":"+e.debug)
                        },
                        t._parseAVCPES=function(e,
                        t){
                            var i,
                            r,
                            n,
                            a=this,
                            s=this._avcTrack,
                            o=this._parseAVCNALu(e.data),
                            l=this.avcSample,
                            d=!1,
                            c=this.pushAccesUnit.bind(this),
                            u=function(e,
                            t,
                            i,
                            r){
                                return{
                                    key: e,
                                    pts: t,
                                    dts: i,
                                    units: [],
                                    debug: r
                                }
                            };e.data=null,
                            l&&o.length&&!s.audFound&&(c(l,
                            s),
                            l=this.avcSample=u(!1,
                            e.pts,
                            e.dts,
                            "")),
                            o.forEach((function(t){
                                switch(t.type){
                                    case 1: r=!0,
                                    l||(l=a.avcSample=u(!0,
                                    e.pts,
                                    e.dts,
                                    "")),
                                    l.frame=!0;var o=t.data;if(d&&o.length>4){
                                        var h=new E(o).readSliceType();2!==h&&4!==h&&7!==h&&9!==h||(l.key=!0)
                                    }break;case 5: r=!0,
                                    l||(l=a.avcSample=u(!0,
                                    e.pts,
                                    e.dts,
                                    "")),
                                    l.key=!0,
                                    l.frame=!0;break;case 6: r=!0,
                                    (i=new E(a.discardEPB(t.data))).readUByte();for(var f=0,
                                    g=0,
                                    p=!1,
                                    v=0;!p&&i.bytesAvailable>1;){
                                        f=0;do{
                                            f+=v=i.readUByte()
                                        }while(255===v);g=0;do{
                                            g+=v=i.readUByte()
                                        }while(255===v);if(4===f&&0!==i.bytesAvailable){
                                            if(p=!0,
                                            181===i.readUByte()&&49===i.readUShort()&&1195456820===i.readUInt()&&3===i.readUByte()){
                                                var y=i.readUByte(),
                                                b=31&y,
                                                _=[
                                                    y,
                                                    i.readUByte()
                                                ];for(n=0;n<b;n++)_.push(i.readUByte()),
                                                _.push(i.readUByte()),
                                                _.push(i.readUByte());a._insertSampleInOrder(a._txtTrack.samples,
                                                {
                                                    type: 3,
                                                    pts: e.pts,
                                                    bytes: _
                                                })
                                            }
                                        }else if(5===f&&0!==i.bytesAvailable){
                                            if(p=!0,
                                            g>16){
                                                var T=[];for(n=0;n<16;n++)T.push(i.readUByte().toString(16)),
                                                3!==n&&5!==n&&7!==n&&9!==n||T.push("-");var w=g-16,
                                                S=new Uint8Array(w);for(n=0;n<w;n++)S[
                                                    n
                                                ]=i.readUByte();a._insertSampleInOrder(a._txtTrack.samples,
                                                {
                                                    pts: e.pts,
                                                    payloadType: f,
                                                    uuid: T.join(""),
                                                    userDataBytes: S,
                                                    userData: Object(m.utf8ArrayToStr)(S.buffer)
                                                })
                                            }
                                        }else if(g<i.bytesAvailable)for(n=0;n<g;n++)i.readUByte()
                                    }break;case 7: if(r=!0,
                                    d=!0,
                                    !s.sps){
                                        var A=(i=new E(t.data)).readSPS();s.width=A.width,
                                        s.height=A.height,
                                        s.pixelRatio=A.pixelRatio,
                                        s.sps=[
                                            t.data
                                        ],
                                        s.duration=a._duration;var R=t.data.subarray(1,
                                        4),
                                        k="avc1.";for(n=0;n<3;n++){
                                            var L=R[
                                                n
                                            ].toString(16);L.length<2&&(L="0"+L),
                                            k+=L
                                        }s.codec=k
                                    }break;case 8: r=!0,
                                    s.pps||(s.pps=[
                                        t.data
                                    ]);break;case 9: r=!1,
                                    s.audFound=!0,
                                    l&&c(l,
                                    s),
                                    l=a.avcSample=u(!1,
                                    e.pts,
                                    e.dts,
                                    "");break;case 12: r=!1;break;default: r=!1,
                                    l&&(l.debug+="unknown NAL "+t.type+" ")
                                }l&&r&&l.units.push(t)
                            })),
                            t&&l&&(c(l,
                            s),
                            this.avcSample=null)
                        },
                        t._insertSampleInOrder=function(e,
                        t){
                            var i=e.length;if(i>0){
                                if(t.pts>=e[
                                    i-1
                                ].pts)e.push(t);else for(var r=i-1;r>=0;r--)if(t.pts<e[
                                    r
                                ].pts){
                                    e.splice(r,
                                    0,
                                    t);break
                                }
                            }else e.push(t)
                        },
                        t._getLastNalUnit=function(){
                            var e,
                            t=this.avcSample;if(!t||0===t.units.length){
                                var i=this._avcTrack.samples;t=i[
                                    i.length-1
                                ]
                            }if(t){
                                var r=t.units;e=r[
                                    r.length-1
                                ]
                            }return e
                        },
                        t._parseAVCNALu=function(e){
                            var t,
                            i,
                            r,
                            n,
                            a=0,
                            s=e.byteLength,
                            o=this._avcTrack,
                            l=o.naluState||0,
                            d=l,
                            c=[],
                            u=-1;for(-1===l&&(u=0,
                            n=31&e[
                                0
                            ],
                            l=0,
                            a=1);a<s;)if(t=e[
                                a++
                            ],
                            l)if(1!==l)if(t)if(1===t){
                                if(u>=0)r={
                                    data: e.subarray(u,
                                    a-l-1),
                                    type: n
                                },
                                c.push(r);else{
                                    var h=this._getLastNalUnit();if(h&&(d&&a<=4-d&&h.state&&(h.data=h.data.subarray(0,
                                    h.data.byteLength-d)),
                                    (i=a-l-1)>0)){
                                        var f=new Uint8Array(h.data.byteLength+i);f.set(h.data,
                                        0),
                                        f.set(e.subarray(0,
                                        i),
                                        h.data.byteLength),
                                        h.data=f
                                    }
                                }a<s?(u=a,
                                n=31&e[
                                    a
                                ],
                                l=0): l=-1
                            }else l=0;else l=3;else l=t?0: 2;else l=t?0: 1;if(u>=0&&l>=0&&(r={
                                data: e.subarray(u,
                                s),
                                type: n,
                                state: l
                            },
                            c.push(r)),
                            0===c.length){
                                var g=this._getLastNalUnit();if(g){
                                    var p=new Uint8Array(g.data.byteLength+e.byteLength);p.set(g.data,
                                    0),
                                    p.set(e,
                                    g.data.byteLength),
                                    g.data=p
                                }
                            }return o.naluState=l,
                            c
                        },
                        t.discardEPB=function(e){
                            for(var t,
                            i,
                            r=e.byteLength,
                            n=[],
                            a=1;a<r-2;)0===e[
                                a
                            ]&&0===e[
                                a+1
                            ]&&3===e[
                                a+2
                            ]?(n.push(a+2),
                            a+=2): a++;if(0===n.length)return e;t=r-n.length,
                            i=new Uint8Array(t);var s=0;for(a=0;a<t;s++,
                            a++)s===n[
                                0
                            ]&&(s++,
                            n.shift()),
                            i[
                                a
                            ]=e[
                                s
                            ];return i
                        },
                        t._parseAACPES=function(e){
                            var t,
                            i,
                            a,
                            s,
                            l,
                            d,
                            c,
                            u=this._audioTrack,
                            f=e.data,
                            m=e.pts,
                            y=this.aacOverFlow,
                            b=this.aacLastPTS;if(y){
                                var _=new Uint8Array(y.byteLength+f.byteLength);_.set(y,
                                0),
                                _.set(f,
                                y.byteLength),
                                f=_
                            }for(a=0,
                            l=f.length;a<l-1&&!h(f,
                            a);a++);if(!a||(a<l-1?(d="AAC PES did not start with ADTS header,offset:"+a,
                            c=!1): (d="no ADTS header found in AAC PES",
                            c=!0),
                            o.logger.warn("parsing error:"+d),
                            this.observer.trigger(r.default.ERROR,
                            {
                                type: n.ErrorTypes.MEDIA_ERROR,
                                details: n.ErrorDetails.FRAG_PARSING_ERROR,
                                fatal: c,
                                reason: d
                            }),
                            !c)){
                                if(g(u,
                                this.observer,
                                f,
                                a,
                                this.audioCodec),
                                i=0,
                                t=p(u.samplerate),
                                y&&b){
                                    var T=b+t;Math.abs(T-m)>1&&(o.logger.log("AAC: align PTS for overlapping frames by "+Math.round((T-m)/90)),
                                    m=T)
                                }for(;a<l;){
                                    if(h(f,
                                    a)){
                                        if(a+5<l){
                                            var E=v(u,
                                            f,
                                            a,
                                            m,
                                            i);if(E){
                                                a+=E.length,
                                                s=E.sample.pts,
                                                i++;continue
                                            }
                                        }break
                                    }a++
                                }y=a<l?f.subarray(a,
                                l): null,
                                this.aacOverFlow=y,
                                this.aacLastPTS=s
                            }
                        },
                        t._parseMPEGPES=function(e){
                            for(var t=e.data,
                            i=t.length,
                            r=0,
                            n=0,
                            a=e.pts;n<i;)if(T.isHeader(t,
                            n)){
                                var s=T.appendFrame(this._audioTrack,
                                t,
                                n,
                                a,
                                r);if(!s)break;n+=s.length,
                                r++
                            }else n++
                        },
                        t._parseID3PES=function(e){
                            this._id3Track.samples.push(e)
                        },
                        e
                    }(),
                    R=function(){
                        function e(e,
                        t,
                        i){
                            this.observer=e,
                            this.config=i,
                            this.remuxer=t
                        }var t=e.prototype;return t.resetInitSegment=function(e,
                        t,
                        i,
                        r){
                            this._audioTrack={
                                container: "audio/mpeg",
                                type: "audio",
                                id: -1,
                                sequenceNumber: 0,
                                isAAC: !1,
                                samples: [],
                                len: 0,
                                manifestCodec: t,
                                duration: r,
                                inputTimeScale: 9e4
                            }
                        },
                        t.resetTimeStamp=function(){},
                        e.probe=function(e){
                            var t,
                            i,
                            r=m.default.getID3Data(e,
                            0);if(r&&void 0!==m.default.getTimeStamp(r))for(t=r.length,
                            i=Math.min(e.length-1,
                            t+100);t<i;t++)if(T.probe(e,
                            t))return o.logger.log("MPEG Audio sync word found !"),
                            !0;return!1
                        },
                        t.append=function(e,
                        t,
                        i,
                        r){
                            for(var n=m.default.getID3Data(e,
                            0)||[],
                            a=m.default.getTimeStamp(n),
                            s=void 0!==a?90*a: 9e4*t,
                            o=n.length,
                            l=e.length,
                            d=0,
                            c=0,
                            u=this._audioTrack,
                            h=[
                                {
                                    pts: s,
                                    dts: s,
                                    data: n
                                }
                            ];o<l;)if(T.isHeader(e,
                            o)){
                                var f=T.appendFrame(u,
                                e,
                                o,
                                s,
                                d);if(!f)break;o+=f.length,
                                c=f.sample.pts,
                                d++
                            }else m.default.isHeader(e,
                            o)?(n=m.default.getID3Data(e,
                            o),
                            h.push({
                                pts: c,
                                dts: c,
                                data: n
                            }),
                            o+=n.length): o++;this.remuxer.remux(u,
                            {
                                samples: []
                            },
                            {
                                samples: h,
                                inputTimeScale: 9e4
                            },
                            {
                                samples: []
                            },
                            t,
                            i,
                            r)
                        },
                        t.destroy=function(){},
                        e
                    }(),
                    k=function(){
                        function e(){}return e.getSilentFrame=function(e,
                        t){
                            switch(e){
                                case "mp4a.40.2": if(1===t)return new Uint8Array([
                                    0,
                                    200,
                                    0,
                                    128,
                                    35,
                                    128
                                ]);if(2===t)return new Uint8Array([
                                    33,
                                    0,
                                    73,
                                    144,
                                    2,
                                    25,
                                    0,
                                    35,
                                    128
                                ]);if(3===t)return new Uint8Array([
                                    0,
                                    200,
                                    0,
                                    128,
                                    32,
                                    132,
                                    1,
                                    38,
                                    64,
                                    8,
                                    100,
                                    0,
                                    142
                                ]);if(4===t)return new Uint8Array([
                                    0,
                                    200,
                                    0,
                                    128,
                                    32,
                                    132,
                                    1,
                                    38,
                                    64,
                                    8,
                                    100,
                                    0,
                                    128,
                                    44,
                                    128,
                                    8,
                                    2,
                                    56
                                ]);if(5===t)return new Uint8Array([
                                    0,
                                    200,
                                    0,
                                    128,
                                    32,
                                    132,
                                    1,
                                    38,
                                    64,
                                    8,
                                    100,
                                    0,
                                    130,
                                    48,
                                    4,
                                    153,
                                    0,
                                    33,
                                    144,
                                    2,
                                    56
                                ]);if(6===t)return new Uint8Array([
                                    0,
                                    200,
                                    0,
                                    128,
                                    32,
                                    132,
                                    1,
                                    38,
                                    64,
                                    8,
                                    100,
                                    0,
                                    130,
                                    48,
                                    4,
                                    153,
                                    0,
                                    33,
                                    144,
                                    2,
                                    0,
                                    178,
                                    0,
                                    32,
                                    8,
                                    224
                                ]);break;default: if(1===t)return new Uint8Array([
                                    1,
                                    64,
                                    34,
                                    128,
                                    163,
                                    78,
                                    230,
                                    128,
                                    186,
                                    8,
                                    0,
                                    0,
                                    0,
                                    28,
                                    6,
                                    241,
                                    193,
                                    10,
                                    90,
                                    90,
                                    90,
                                    90,
                                    90,
                                    90,
                                    90,
                                    90,
                                    90,
                                    90,
                                    90,
                                    90,
                                    90,
                                    90,
                                    90,
                                    90,
                                    90,
                                    90,
                                    90,
                                    90,
                                    90,
                                    90,
                                    90,
                                    90,
                                    90,
                                    90,
                                    90,
                                    90,
                                    90,
                                    90,
                                    90,
                                    90,
                                    90,
                                    90,
                                    90,
                                    90,
                                    90,
                                    90,
                                    90,
                                    90,
                                    94
                                ]);if(2===t)return new Uint8Array([
                                    1,
                                    64,
                                    34,
                                    128,
                                    163,
                                    94,
                                    230,
                                    128,
                                    186,
                                    8,
                                    0,
                                    0,
                                    0,
                                    0,
                                    149,
                                    0,
                                    6,
                                    241,
                                    161,
                                    10,
                                    90,
                                    90,
                                    90,
                                    90,
                                    90,
                                    90,
                                    90,
                                    90,
                                    90,
                                    90,
                                    90,
                                    90,
                                    90,
                                    90,
                                    90,
                                    90,
                                    90,
                                    90,
                                    90,
                                    90,
                                    90,
                                    90,
                                    90,
                                    90,
                                    90,
                                    90,
                                    90,
                                    90,
                                    90,
                                    90,
                                    90,
                                    90,
                                    90,
                                    90,
                                    90,
                                    90,
                                    90,
                                    90,
                                    94
                                ]);if(3===t)return new Uint8Array([
                                    1,
                                    64,
                                    34,
                                    128,
                                    163,
                                    94,
                                    230,
                                    128,
                                    186,
                                    8,
                                    0,
                                    0,
                                    0,
                                    0,
                                    149,
                                    0,
                                    6,
                                    241,
                                    161,
                                    10,
                                    90,
                                    90,
                                    90,
                                    90,
                                    90,
                                    90,
                                    90,
                                    90,
                                    90,
                                    90,
                                    90,
                                    90,
                                    90,
                                    90,
                                    90,
                                    90,
                                    90,
                                    90,
                                    90,
                                    90,
                                    90,
                                    90,
                                    90,
                                    90,
                                    90,
                                    90,
                                    90,
                                    90,
                                    90,
                                    90,
                                    90,
                                    90,
                                    90,
                                    90,
                                    90,
                                    90,
                                    90,
                                    90,
                                    94
                                ])
                            }return null
                        },
                        e
                    }(),
                    L=Math.pow(2,
                    32)-1,
                    D=function(){
                        function e(){}return e.init=function(){
                            var t;for(t in e.types={
                                avc1: [],
                                avcC: [],
                                btrt: [],
                                dinf: [],
                                dref: [],
                                esds: [],
                                ftyp: [],
                                hdlr: [],
                                mdat: [],
                                mdhd: [],
                                mdia: [],
                                mfhd: [],
                                minf: [],
                                moof: [],
                                moov: [],
                                mp4a: [],
                                ".mp3": [],
                                mvex: [],
                                mvhd: [],
                                pasp: [],
                                sdtp: [],
                                stbl: [],
                                stco: [],
                                stsc: [],
                                stsd: [],
                                stsz: [],
                                stts: [],
                                tfdt: [],
                                tfhd: [],
                                traf: [],
                                trak: [],
                                trun: [],
                                trex: [],
                                tkhd: [],
                                vmhd: [],
                                smhd: []
                            },
                            e.types)e.types.hasOwnProperty(t)&&(e.types[
                                t
                            ]=[
                                t.charCodeAt(0),
                                t.charCodeAt(1),
                                t.charCodeAt(2),
                                t.charCodeAt(3)
                            ]);var i=new Uint8Array([
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                118,
                                105,
                                100,
                                101,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                86,
                                105,
                                100,
                                101,
                                111,
                                72,
                                97,
                                110,
                                100,
                                108,
                                101,
                                114,
                                0
                            ]),
                            r=new Uint8Array([
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                115,
                                111,
                                117,
                                110,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                83,
                                111,
                                117,
                                110,
                                100,
                                72,
                                97,
                                110,
                                100,
                                108,
                                101,
                                114,
                                0
                            ]);e.HDLR_TYPES={
                                video: i,
                                audio: r
                            };var n=new Uint8Array([
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                1,
                                0,
                                0,
                                0,
                                12,
                                117,
                                114,
                                108,
                                32,
                                0,
                                0,
                                0,
                                1
                            ]),
                            a=new Uint8Array([
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0
                            ]);e.STTS=e.STSC=e.STCO=a,
                            e.STSZ=new Uint8Array([
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0
                            ]),
                            e.VMHD=new Uint8Array([
                                0,
                                0,
                                0,
                                1,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0
                            ]),
                            e.SMHD=new Uint8Array([
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0
                            ]),
                            e.STSD=new Uint8Array([
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                1
                            ]);var s=new Uint8Array([
                                105,
                                115,
                                111,
                                109
                            ]),
                            o=new Uint8Array([
                                97,
                                118,
                                99,
                                49
                            ]),
                            l=new Uint8Array([
                                0,
                                0,
                                0,
                                1
                            ]);e.FTYP=e.box(e.types.ftyp,
                            s,
                            l,
                            s,
                            o),
                            e.DINF=e.box(e.types.dinf,
                            e.box(e.types.dref,
                            n))
                        },
                        e.box=function(e){
                            for(var t,
                            i=Array.prototype.slice.call(arguments,
                            1),
                            r=8,
                            n=i.length,
                            a=n;n--;)r+=i[
                                n
                            ].byteLength;for((t=new Uint8Array(r))[
                                0
                            ]=r>>24&255,
                            t[
                                1
                            ]=r>>16&255,
                            t[
                                2
                            ]=r>>8&255,
                            t[
                                3
                            ]=255&r,
                            t.set(e,
                            4),
                            n=0,
                            r=8;n<a;n++)t.set(i[
                                n
                            ],
                            r),
                            r+=i[
                                n
                            ].byteLength;return t
                        },
                        e.hdlr=function(t){
                            return e.box(e.types.hdlr,
                            e.HDLR_TYPES[
                                t
                            ])
                        },
                        e.mdat=function(t){
                            return e.box(e.types.mdat,
                            t)
                        },
                        e.mdhd=function(t,
                        i){
                            i*=t;var r=Math.floor(i/(L+1)),
                            n=Math.floor(i%(L+1));return e.box(e.types.mdhd,
                            new Uint8Array([
                                1,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                2,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                3,
                                t>>24&255,
                                t>>16&255,
                                t>>8&255,
                                255&t,
                                r>>24,
                                r>>16&255,
                                r>>8&255,
                                255&r,
                                n>>24,
                                n>>16&255,
                                n>>8&255,
                                255&n,
                                85,
                                196,
                                0,
                                0
                            ]))
                        },
                        e.mdia=function(t){
                            return e.box(e.types.mdia,
                            e.mdhd(t.timescale,
                            t.duration),
                            e.hdlr(t.type),
                            e.minf(t))
                        },
                        e.mfhd=function(t){
                            return e.box(e.types.mfhd,
                            new Uint8Array([
                                0,
                                0,
                                0,
                                0,
                                t>>24,
                                t>>16&255,
                                t>>8&255,
                                255&t
                            ]))
                        },
                        e.minf=function(t){
                            return "audio"===t.type?e.box(e.types.minf,
                            e.box(e.types.smhd,
                            e.SMHD),
                            e.DINF,
                            e.stbl(t)): e.box(e.types.minf,
                            e.box(e.types.vmhd,
                            e.VMHD),
                            e.DINF,
                            e.stbl(t))
                        },
                        e.moof=function(t,
                        i,
                        r){
                            return e.box(e.types.moof,
                            e.mfhd(t),
                            e.traf(r,
                            i))
                        },
                        e.moov=function(t){
                            for(var i=t.length,
                            r=[];i--;)r[
                                i
                            ]=e.trak(t[
                                i
                            ]);return e.box.apply(null,
                            [
                                e.types.moov,
                                e.mvhd(t[
                                    0
                                ].timescale,
                                t[
                                    0
                                ].duration)
                            ].concat(r).concat(e.mvex(t)))
                        },
                        e.mvex=function(t){
                            for(var i=t.length,
                            r=[];i--;)r[
                                i
                            ]=e.trex(t[
                                i
                            ]);return e.box.apply(null,
                            [
                                e.types.mvex
                            ].concat(r))
                        },
                        e.mvhd=function(t,
                        i){
                            i*=t;var r=Math.floor(i/(L+1)),
                            n=Math.floor(i%(L+1)),
                            a=new Uint8Array([
                                1,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                2,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                3,
                                t>>24&255,
                                t>>16&255,
                                t>>8&255,
                                255&t,
                                r>>24,
                                r>>16&255,
                                r>>8&255,
                                255&r,
                                n>>24,
                                n>>16&255,
                                n>>8&255,
                                255&n,
                                0,
                                1,
                                0,
                                0,
                                1,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                1,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                1,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                64,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                255,
                                255,
                                255,
                                255
                            ]);return e.box(e.types.mvhd,
                            a)
                        },
                        e.sdtp=function(t){
                            var i,
                            r,
                            n=t.samples||[],
                            a=new Uint8Array(4+n.length);for(r=0;r<n.length;r++)i=n[
                                r
                            ].flags,
                            a[
                                r+4
                            ]=i.dependsOn<<4|i.isDependedOn<<2|i.hasRedundancy;return e.box(e.types.sdtp,
                            a)
                        },
                        e.stbl=function(t){
                            return e.box(e.types.stbl,
                            e.stsd(t),
                            e.box(e.types.stts,
                            e.STTS),
                            e.box(e.types.stsc,
                            e.STSC),
                            e.box(e.types.stsz,
                            e.STSZ),
                            e.box(e.types.stco,
                            e.STCO))
                        },
                        e.avc1=function(t){
                            var i,
                            r,
                            n,
                            a=[],
                            s=[];for(i=0;i<t.sps.length;i++)n=(r=t.sps[
                                i
                            ]).byteLength,
                            a.push(n>>>8&255),
                            a.push(255&n),
                            a=a.concat(Array.prototype.slice.call(r));for(i=0;i<t.pps.length;i++)n=(r=t.pps[
                                i
                            ]).byteLength,
                            s.push(n>>>8&255),
                            s.push(255&n),
                            s=s.concat(Array.prototype.slice.call(r));var o=e.box(e.types.avcC,
                            new Uint8Array([
                                1,
                                a[
                                    3
                                ],
                                a[
                                    4
                                ],
                                a[
                                    5
                                ],
                                255,
                                224|t.sps.length
                            ].concat(a).concat([
                                t.pps.length
                            ]).concat(s))),
                            l=t.width,
                            d=t.height,
                            c=t.pixelRatio[
                                0
                            ],
                            u=t.pixelRatio[
                                1
                            ];return e.box(e.types.avc1,
                            new Uint8Array([
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                1,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                l>>8&255,
                                255&l,
                                d>>8&255,
                                255&d,
                                0,
                                72,
                                0,
                                0,
                                0,
                                72,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                1,
                                18,
                                100,
                                97,
                                105,
                                108,
                                121,
                                109,
                                111,
                                116,
                                105,
                                111,
                                110,
                                47,
                                104,
                                108,
                                115,
                                46,
                                106,
                                115,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                24,
                                17,
                                17
                            ]),
                            o,
                            e.box(e.types.btrt,
                            new Uint8Array([
                                0,
                                28,
                                156,
                                128,
                                0,
                                45,
                                198,
                                192,
                                0,
                                45,
                                198,
                                192
                            ])),
                            e.box(e.types.pasp,
                            new Uint8Array([
                                c>>24,
                                c>>16&255,
                                c>>8&255,
                                255&c,
                                u>>24,
                                u>>16&255,
                                u>>8&255,
                                255&u
                            ])))
                        },
                        e.esds=function(e){
                            var t=e.config.length;return new Uint8Array([
                                0,
                                0,
                                0,
                                0,
                                3,
                                23+t,
                                0,
                                1,
                                0,
                                4,
                                15+t,
                                64,
                                21,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                5
                            ].concat([
                                t
                            ]).concat(e.config).concat([
                                6,
                                1,
                                2
                            ]))
                        },
                        e.mp4a=function(t){
                            var i=t.samplerate;return e.box(e.types.mp4a,
                            new Uint8Array([
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                1,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                t.channelCount,
                                0,
                                16,
                                0,
                                0,
                                0,
                                0,
                                i>>8&255,
                                255&i,
                                0,
                                0
                            ]),
                            e.box(e.types.esds,
                            e.esds(t)))
                        },
                        e.mp3=function(t){
                            var i=t.samplerate;return e.box(e.types[
                                ".mp3"
                            ],
                            new Uint8Array([
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                1,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                t.channelCount,
                                0,
                                16,
                                0,
                                0,
                                0,
                                0,
                                i>>8&255,
                                255&i,
                                0,
                                0
                            ]))
                        },
                        e.stsd=function(t){
                            return "audio"===t.type?t.isAAC||"mp3"!==t.codec?e.box(e.types.stsd,
                            e.STSD,
                            e.mp4a(t)): e.box(e.types.stsd,
                            e.STSD,
                            e.mp3(t)): e.box(e.types.stsd,
                            e.STSD,
                            e.avc1(t))
                        },
                        e.tkhd=function(t){
                            var i=t.id,
                            r=t.duration*t.timescale,
                            n=t.width,
                            a=t.height,
                            s=Math.floor(r/(L+1)),
                            o=Math.floor(r%(L+1));return e.box(e.types.tkhd,
                            new Uint8Array([
                                1,
                                0,
                                0,
                                7,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                2,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                3,
                                i>>24&255,
                                i>>16&255,
                                i>>8&255,
                                255&i,
                                0,
                                0,
                                0,
                                0,
                                s>>24,
                                s>>16&255,
                                s>>8&255,
                                255&s,
                                o>>24,
                                o>>16&255,
                                o>>8&255,
                                255&o,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                1,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                1,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                64,
                                0,
                                0,
                                0,
                                n>>8&255,
                                255&n,
                                0,
                                0,
                                a>>8&255,
                                255&a,
                                0,
                                0
                            ]))
                        },
                        e.traf=function(t,
                        i){
                            var r=e.sdtp(t),
                            n=t.id,
                            a=Math.floor(i/(L+1)),
                            s=Math.floor(i%(L+1));return e.box(e.types.traf,
                            e.box(e.types.tfhd,
                            new Uint8Array([
                                0,
                                0,
                                0,
                                0,
                                n>>24,
                                n>>16&255,
                                n>>8&255,
                                255&n
                            ])),
                            e.box(e.types.tfdt,
                            new Uint8Array([
                                1,
                                0,
                                0,
                                0,
                                a>>24,
                                a>>16&255,
                                a>>8&255,
                                255&a,
                                s>>24,
                                s>>16&255,
                                s>>8&255,
                                255&s
                            ])),
                            e.trun(t,
                            r.length+16+20+8+16+8+8),
                            r)
                        },
                        e.trak=function(t){
                            return t.duration=t.duration||4294967295,
                            e.box(e.types.trak,
                            e.tkhd(t),
                            e.mdia(t))
                        },
                        e.trex=function(t){
                            var i=t.id;return e.box(e.types.trex,
                            new Uint8Array([
                                0,
                                0,
                                0,
                                0,
                                i>>24,
                                i>>16&255,
                                i>>8&255,
                                255&i,
                                0,
                                0,
                                0,
                                1,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                1,
                                0,
                                1
                            ]))
                        },
                        e.trun=function(t,
                        i){
                            var r,
                            n,
                            a,
                            s,
                            o,
                            l,
                            d=t.samples||[],
                            c=d.length,
                            u=12+16*c,
                            h=new Uint8Array(u);for(i+=8+u,
                            h.set([
                                0,
                                0,
                                15,
                                1,
                                c>>>24&255,
                                c>>>16&255,
                                c>>>8&255,
                                255&c,
                                i>>>24&255,
                                i>>>16&255,
                                i>>>8&255,
                                255&i
                            ],
                            0),
                            r=0;r<c;r++)a=(n=d[
                                r
                            ]).duration,
                            s=n.size,
                            o=n.flags,
                            l=n.cts,
                            h.set([
                                a>>>24&255,
                                a>>>16&255,
                                a>>>8&255,
                                255&a,
                                s>>>24&255,
                                s>>>16&255,
                                s>>>8&255,
                                255&s,
                                o.isLeading<<2|o.dependsOn,
                                o.isDependedOn<<6|o.hasRedundancy<<4|o.paddingValue<<1|o.isNonSync,
                                61440&o.degradPrio,
                                15&o.degradPrio,
                                l>>>24&255,
                                l>>>16&255,
                                l>>>8&255,
                                255&l
                            ],
                            12+16*r);return e.box(e.types.trun,
                            h)
                        },
                        e.initSegment=function(t){
                            e.types||e.init();var i,
                            r=e.moov(t);return(i=new Uint8Array(e.FTYP.byteLength+r.byteLength)).set(e.FTYP),
                            i.set(r,
                            e.FTYP.byteLength),
                            i
                        },
                        e
                    }();function I(e,
                    t,
                    i,
                    r){
                        void 0===i&&(i=1),
                        void 0===r&&(r=!1);var n=e*t*i;return r?Math.round(n): n
                    }function x(e,
                    t){
                        return void 0===t&&(t=!1),
                        I(e,
                        1e3,
                        1/9e4,
                        t)
                    }function O(e,
                    t){
                        return void 0===t&&(t=1),
                        I(e,
                        9e4,
                        1/t)
                    }var C=O(10),
                    P=O(.2),
                    M=null;function F(e,
                    t){
                        var i;if(void 0===t)return e;for(i=t<e?-8589934592: 8589934592;Math.abs(e-t)>4294967296;)e+=i;return e
                    }var N,
                    U=function(){
                        function e(e,
                        t,
                        i,
                        r){
                            if(this.observer=e,
                            this.config=t,
                            this.typeSupported=i,
                            this.ISGenerated=!1,
                            null===M){
                                var n=navigator.userAgent.match(/Chrome\/(\d+)/i);M=n?parseInt(n[
                                    1
                                ]): 0
                            }
                        }var t=e.prototype;return t.destroy=function(){},
                        t.resetTimeStamp=function(e){
                            this._initPTS=this._initDTS=e
                        },
                        t.resetInitSegment=function(){
                            this.ISGenerated=!1
                        },
                        t.getVideoStartPts=function(e){
                            var t=!1,
                            i=e.reduce((function(e,
                            i){
                                var r=i.pts-e;return r<-4294967296?(t=!0,
                                F(e,
                                i.pts)): r>0?e: i.pts
                            }),
                            e[
                                0
                            ].pts);return t&&o.logger.debug("PTS rollover detected"),
                            i
                        },
                        t.remux=function(e,
                        t,
                        i,
                        n,
                        a,
                        s,
                        l){
                            if(this.ISGenerated||this.generateIS(e,
                            t,
                            a),
                            this.ISGenerated){
                                var d=e.samples.length,
                                c=t.samples.length,
                                u=a,
                                h=a;if(d&&c){
                                    var f=this.getVideoStartPts(t.samples),
                                    g=(F(e.samples[
                                        0
                                    ].pts,
                                    f)-f)/t.inputTimeScale;u+=Math.max(0,
                                    g),
                                    h+=Math.max(0,
                                    -g)
                                }if(d){
                                    e.timescale||(o.logger.warn("regenerate InitSegment as audio detected"),
                                    this.generateIS(e,
                                    t,
                                    a));var p,
                                    v=this.remuxAudio(e,
                                    u,
                                    s,
                                    l);c&&(v&&(p=v.endPTS-v.startPTS),
                                    t.timescale||(o.logger.warn("regenerate InitSegment as video detected"),
                                    this.generateIS(e,
                                    t,
                                    a)),
                                    this.remuxVideo(t,
                                    h,
                                    s,
                                    p))
                                }else if(c){
                                    var m=this.remuxVideo(t,
                                    h,
                                    s,
                                    0,
                                    l);m&&e.codec&&this.remuxEmptyAudio(e,
                                    u,
                                    s,
                                    m)
                                }
                            }i.samples.length&&this.remuxID3(i,
                            a),
                            n.samples.length&&this.remuxText(n,
                            a),
                            this.observer.trigger(r.default.FRAG_PARSED)
                        },
                        t.generateIS=function(e,
                        t,
                        i){
                            var a,
                            s,
                            l=this.observer,
                            d=e.samples,
                            c=t.samples,
                            u=this.typeSupported,
                            h="audio/mp4",
                            f={},
                            g={
                                tracks: f
                            },
                            p=void 0===this._initPTS;if(p&&(a=s=1/0),
                            e.config&&d.length&&(e.timescale=e.samplerate,
                            o.logger.log("audio sampling rate : "+e.samplerate),
                            e.isAAC||(u.mpeg?(h="audio/mpeg",
                            e.codec=""): u.mp3&&(e.codec="mp3")),
                            f.audio={
                                container: h,
                                codec: e.codec,
                                initSegment: !e.isAAC&&u.mpeg?new Uint8Array: D.initSegment([
                                    e
                                ]),
                                metadata: {
                                    channelCount: e.channelCount
                                }
                            },
                            p&&(a=s=d[
                                0
                            ].pts-Math.round(e.inputTimeScale*i))),
                            t.sps&&t.pps&&c.length){
                                var v=t.inputTimeScale;if(t.timescale=v,
                                f.video={
                                    container: "video/mp4",
                                    codec: t.codec,
                                    initSegment: D.initSegment([
                                        t
                                    ]),
                                    metadata: {
                                        width: t.width,
                                        height: t.height
                                    }
                                },
                                p){
                                    var m=this.getVideoStartPts(c),
                                    y=Math.round(v*i);s=Math.min(s,
                                    F(c[
                                        0
                                    ].dts,
                                    m)-y),
                                    a=Math.min(a,
                                    m-y),
                                    this.observer.trigger(r.default.INIT_PTS_FOUND,
                                    {
                                        initPTS: a
                                    })
                                }
                            }else p&&f.audio&&this.observer.trigger(r.default.INIT_PTS_FOUND,
                            {
                                initPTS: a
                            });Object.keys(f).length?(l.trigger(r.default.FRAG_PARSING_INIT_SEGMENT,
                            g),
                            this.ISGenerated=!0,
                            p&&(this._initPTS=a,
                            this._initDTS=s)): l.trigger(r.default.ERROR,
                            {
                                type: n.ErrorTypes.MEDIA_ERROR,
                                details: n.ErrorDetails.FRAG_PARSING_ERROR,
                                fatal: !1,
                                reason: "no audio/video samples found"
                            })
                        },
                        t.remuxVideo=function(e,
                        t,
                        i,
                        a){
                            var s,
                            l,
                            d,
                            c,
                            u,
                            h=e.timescale,
                            f=e.samples,
                            g=[],
                            p=f.length,
                            v=this._initPTS,
                            m=8,
                            y=Number.POSITIVE_INFINITY,
                            b=Number.NEGATIVE_INFINITY,
                            _=0,
                            T=!1,
                            E=this.nextAvcDts;if(0!==p){
                                i||(E=t*h-(f[
                                    0
                                ].pts-F(f[
                                    0
                                ].dts,
                                f[
                                    0
                                ].pts)));for(var w=0;w<p;w++){
                                    var S=f[
                                        w
                                    ];S.pts=F(S.pts-v,
                                    E),
                                    S.dts=F(S.dts-v,
                                    E),
                                    S.dts>S.pts&&(_=Math.max(Math.min(_,
                                    S.pts-S.dts),
                                    -1*P)),
                                    S.dts<f[
                                        w>0?w-1: w
                                    ].dts&&(T=!0)
                                }T&&f.sort((function(e,
                                t){
                                    var i=e.dts-t.dts,
                                    r=e.pts-t.pts;return i||r||e.id-t.id
                                })),
                                c=f[
                                    0
                                ].dts,
                                u=f[
                                    p-1
                                ].dts;var A=Math.round((u-c)/(p-1));if(_<0){
                                    if(_<-2*A){
                                        o.logger.warn("PTS < DTS detected in video samples, offsetting DTS from PTS by "+x(-A,
                                        !0)+" ms");for(var R=_,
                                        k=0;k<p;k++)f[
                                            k
                                        ].dts=R=Math.max(R,
                                        f[
                                            k
                                        ].pts-A),
                                        f[
                                            k
                                        ].pts=Math.max(R,
                                        f[
                                            k
                                        ].pts)
                                    }else{
                                        o.logger.warn("PTS < DTS detected in video samples, shifting DTS by "+x(_,
                                        !0)+" ms to overcome this issue");for(var L=0;L<p;L++)f[
                                            L
                                        ].dts=f[
                                            L
                                        ].dts+_
                                    }c=f[
                                        0
                                    ].dts,
                                    u=f[
                                        p-1
                                    ].dts
                                }if(i){
                                    var I=c-E,
                                    O=I>A;if(O||I<-1){
                                        O?o.logger.warn("AVC: "+x(I,
                                        !0)+" ms ("+I+"dts) hole between fragments detected, filling it"): o.logger.warn("AVC: "+x(-I,
                                        !0)+" ms ("+I+"dts) overlapping between fragments detected"),
                                        c=E;var C=f[
                                            0
                                        ].pts-I;f[
                                            0
                                        ].dts=c,
                                        f[
                                            0
                                        ].pts=C,
                                        o.logger.log("Video: First PTS/DTS adjusted: "+x(C,
                                        !0)+"/"+x(c,
                                        !0)+", delta: "+x(I,
                                        !0)+" ms")
                                    }
                                }M&&M<75&&(c=Math.max(0,
                                c));for(var N=0,
                                U=0,
                                B=0;B<p;B++){
                                    for(var G=f[
                                        B
                                    ],
                                    j=G.units,
                                    $=j.length,
                                    K=0,
                                    H=0;H<$;H++)K+=j[
                                        H
                                    ].data.length;U+=K,
                                    N+=$,
                                    G.length=K,
                                    G.dts=Math.max(G.dts,
                                    c),
                                    G.pts=Math.max(G.pts,
                                    G.dts,
                                    0),
                                    y=Math.min(G.pts,
                                    y),
                                    b=Math.max(G.pts,
                                    b)
                                }u=f[
                                    p-1
                                ].dts;var V=U+4*N+8;try{
                                    l=new Uint8Array(V)
                                }catch(e){
                                    return void this.observer.trigger(r.default.ERROR,
                                    {
                                        type: n.ErrorTypes.MUX_ERROR,
                                        details: n.ErrorDetails.REMUX_ALLOC_ERROR,
                                        fatal: !1,
                                        bytes: V,
                                        reason: "fail allocating video mdat "+V
                                    })
                                }var W=new DataView(l.buffer);W.setUint32(0,
                                V),
                                l.set(D.types.mdat,
                                4);for(var Y=0;Y<p;Y++){
                                    for(var z,
                                    q=f[
                                        Y
                                    ],
                                    X=q.units,
                                    Q=0,
                                    J=0,
                                    Z=X.length;J<Z;J++){
                                        var ee=X[
                                            J
                                        ],
                                        te=ee.data,
                                        ie=ee.data.byteLength;W.setUint32(m,
                                        ie),
                                        m+=4,
                                        l.set(te,
                                        m),
                                        m+=ie,
                                        Q+=4+ie
                                    }if(Y<p-1)s=f[
                                        Y+1
                                    ].dts-q.dts;else{
                                        var re=this.config,
                                        ne=q.dts-f[
                                            Y>0?Y-1: Y
                                        ].dts;if(re.stretchShortVideoTrack){
                                            var ae=re.maxBufferHole,
                                            se=Math.floor(ae*h),
                                            oe=(a?y+a*h: this.nextAudioPts)-q.pts;oe>se?((s=oe-ne)<0&&(s=ne),
                                            o.logger.log("It is approximately "+x(oe,
                                            !1)+" ms to the next segment; using duration "+x(s,
                                            !1)+" ms for the last video frame.")): s=ne
                                        }else s=ne
                                    }z=Math.round(q.pts-q.dts),
                                    g.push({
                                        size: Q,
                                        duration: s,
                                        cts: z,
                                        flags: {
                                            isLeading: 0,
                                            isDependedOn: 0,
                                            hasRedundancy: 0,
                                            degradPrio: 0,
                                            dependsOn: q.key?2: 1,
                                            isNonSync: q.key?0: 1
                                        }
                                    })
                                }this.nextAvcDts=u+s;var le=e.dropped;if(e.nbNalu=0,
                                e.dropped=0,
                                g.length&&navigator.userAgent.toLowerCase().indexOf("chrome")>-1){
                                    var de=g[
                                        0
                                    ].flags;de.dependsOn=2,
                                    de.isNonSync=0
                                }e.samples=g,
                                d=D.moof(e.sequenceNumber++,
                                c,
                                e),
                                e.samples=[];var ce={
                                    data1: d,
                                    data2: l,
                                    startPTS: y/h,
                                    endPTS: (b+s)/h,
                                    startDTS: c/h,
                                    endDTS: this.nextAvcDts/h,
                                    type: "video",
                                    hasAudio: !1,
                                    hasVideo: !0,
                                    nb: g.length,
                                    dropped: le
                                };return this.observer.trigger(r.default.FRAG_PARSING_DATA,
                                ce),
                                ce
                            }
                        },
                        t.remuxAudio=function(e,
                        t,
                        i,
                        a){
                            var s,
                            l,
                            d,
                            c,
                            u,
                            h,
                            f=e.inputTimeScale,
                            g=e.timescale,
                            p=f/g,
                            v=(e.isAAC?1024: 1152)*p,
                            m=this._initPTS,
                            y=!e.isAAC&&this.typeSupported.mpeg,
                            b=y?0: 8,
                            _=e.samples,
                            T=[],
                            E=this.nextAudioPts;if(i|=_.length&&E&&(a&&Math.abs(t-E/f)<.1||Math.abs(_[
                                0
                            ].pts-E-m)<20*v),
                            _.forEach((function(e){
                                e.pts=e.dts=F(e.pts-m,
                                t*f)
                            })),
                            0!==(_=_.filter((function(e){
                                return e.pts>=0
                            }))).length){
                                if(i||(E=a?Math.max(0,
                                t*f): _[
                                    0
                                ].pts),
                                e.isAAC)for(var w=this.config.maxAudioFramesDrift,
                                S=0,
                                A=E;S<_.length;){
                                    var R=_[
                                        S
                                    ],
                                    L=R.pts,
                                    I=L-A;if(I<=-w*v)i||S>0?(o.logger.warn("Dropping 1 audio frame @ "+x(A,
                                    !0)/1e3+"s due to "+x(I,
                                    !0)+" ms overlap."),
                                    _.splice(S,
                                    1)): (o.logger.warn("Audio frame @ "+x(L,
                                    !0)/1e3+"s overlaps nextAudioPts by "+x(I,
                                    !0)+" ms."),
                                    A=L+v,
                                    S++);else if(I>=w*v&&I<C&&A){
                                        var O=Math.round(I/v);o.logger.warn("Injecting "+O+" audio frames @ "+x(A,
                                        !0)/1e3+"s due to "+x(I,
                                        !0)+" ms gap.");for(var P=0;P<O;P++){
                                            var M=Math.max(A,
                                            0);(l=k.getSilentFrame(e.manifestCodec||e.codec,
                                            e.channelCount))||(o.logger.log("Unable to get silent frame for given audio codec; duplicating last frame instead."),
                                            l=R.unit.subarray()),
                                            _.splice(S,
                                            0,
                                            {
                                                unit: l,
                                                pts: M,
                                                dts: M
                                            }),
                                            A+=v,
                                            S++
                                        }R.pts=R.dts=A,
                                        A+=v,
                                        S++
                                    }else Math.abs(I),
                                    R.pts=R.dts=A,
                                    A+=v,
                                    S++
                                }for(var N=_.length,
                                U=0;N--;)U+=_[
                                    N
                                ].unit.byteLength;for(var B=0,
                                G=_.length;B<G;B++){
                                    var j=_[
                                        B
                                    ],
                                    $=j.unit,
                                    K=j.pts;if(void 0!==h&&s)s.duration=Math.round((K-h)/p);else{
                                        var H=K-E,
                                        V=0;if(i&&e.isAAC&&H){
                                            if(H>0&&H<C)V=Math.round((K-E)/v),
                                            o.logger.log(x(H,
                                            !0)+" ms hole between AAC samples detected,filling it"),
                                            V>0&&((l=k.getSilentFrame(e.manifestCodec||e.codec,
                                            e.channelCount))||(l=$.subarray()),
                                            U+=V*l.length);else if(H<-12){
                                                o.logger.log("drop overlapping AAC sample, expected/parsed/delta: "+x(E,
                                                !0)+" ms / "+x(K,
                                                !0)+" ms / "+x(-H,
                                                !0)+" ms"),
                                                U-=$.byteLength;continue
                                            }K=E
                                        }if(u=K,
                                        !(U>0))return;U+=b;try{
                                            d=new Uint8Array(U)
                                        }catch(e){
                                            return void this.observer.trigger(r.default.ERROR,
                                            {
                                                type: n.ErrorTypes.MUX_ERROR,
                                                details: n.ErrorDetails.REMUX_ALLOC_ERROR,
                                                fatal: !1,
                                                bytes: U,
                                                reason: "fail allocating audio mdat "+U
                                            })
                                        }y||(new DataView(d.buffer).setUint32(0,
                                        U),
                                        d.set(D.types.mdat,
                                        4));for(var W=0;W<V;W++)(l=k.getSilentFrame(e.manifestCodec||e.codec,
                                        e.channelCount))||(o.logger.log("Unable to get silent frame for given audio codec; duplicating this frame instead."),
                                        l=$.subarray()),
                                        d.set(l,
                                        b),
                                        b+=l.byteLength,
                                        s={
                                            size: l.byteLength,
                                            cts: 0,
                                            duration: 1024,
                                            flags: {
                                                isLeading: 0,
                                                isDependedOn: 0,
                                                hasRedundancy: 0,
                                                degradPrio: 0,
                                                dependsOn: 1
                                            }
                                        },
                                        T.push(s)
                                    }d.set($,
                                    b);var Y=$.byteLength;b+=Y,
                                    s={
                                        size: Y,
                                        cts: 0,
                                        duration: 0,
                                        flags: {
                                            isLeading: 0,
                                            isDependedOn: 0,
                                            hasRedundancy: 0,
                                            degradPrio: 0,
                                            dependsOn: 1
                                        }
                                    },
                                    T.push(s),
                                    h=K
                                }var z=0;if((N=T.length)>=2&&(z=T[
                                    N-2
                                ].duration,
                                s.duration=z),
                                N){
                                    this.nextAudioPts=E=h+p*z,
                                    e.samples=T,
                                    c=y?new Uint8Array: D.moof(e.sequenceNumber++,
                                    u/p,
                                    e),
                                    e.samples=[];var q=u/f,
                                    X=E/f,
                                    Q={
                                        data1: c,
                                        data2: d,
                                        startPTS: q,
                                        endPTS: X,
                                        startDTS: q,
                                        endDTS: X,
                                        type: "audio",
                                        hasAudio: !0,
                                        hasVideo: !1,
                                        nb: N
                                    };return this.observer.trigger(r.default.FRAG_PARSING_DATA,
                                    Q),
                                    Q
                                }return null
                            }
                        },
                        t.remuxEmptyAudio=function(e,
                        t,
                        i,
                        r){
                            var n=e.inputTimeScale,
                            a=n/(e.samplerate?e.samplerate: n),
                            s=this.nextAudioPts,
                            l=(void 0!==s?s: r.startDTS*n)+this._initDTS,
                            d=r.endDTS*n+this._initDTS,
                            c=1024*a,
                            u=Math.ceil((d-l)/c),
                            h=k.getSilentFrame(e.manifestCodec||e.codec,
                            e.channelCount);if(o.logger.warn("remux empty Audio"),
                            h){
                                for(var f=[],
                                g=0;g<u;g++){
                                    var p=l+g*c;f.push({
                                        unit: h,
                                        pts: p,
                                        dts: p
                                    })
                                }e.samples=f,
                                this.remuxAudio(e,
                                t,
                                i)
                            }else o.logger.trace("Unable to remuxEmptyAudio since we were unable to get a silent frame for given audio codec!")
                        },
                        t.remuxID3=function(e,
                        t){
                            var i=e.samples.length;if(i){
                                for(var n=e.inputTimeScale,
                                a=this._initPTS,
                                s=this._initDTS,
                                o=0;o<i;o++){
                                    var l=e.samples[
                                        o
                                    ];l.pts=F(l.pts-a,
                                    t*n)/n,
                                    l.dts=F(l.dts-s,
                                    t*n)/n
                                }this.observer.trigger(r.default.FRAG_PARSING_METADATA,
                                {
                                    samples: e.samples
                                }),
                                e.samples=[]
                            }
                        },
                        t.remuxText=function(e,
                        t){
                            var i=e.samples.length,
                            n=e.inputTimeScale,
                            a=this._initPTS;if(i){
                                for(var s=0;s<i;s++){
                                    var o=e.samples[
                                        s
                                    ];o.pts=F(o.pts-a,
                                    t*n)/n
                                }e.samples.sort((function(e,
                                t){
                                    return e.pts-t.pts
                                })),
                                this.observer.trigger(r.default.FRAG_PARSING_USERDATA,
                                {
                                    samples: e.samples
                                })
                            }e.samples=[]
                        },
                        e
                    }(),
                    B=function(){
                        function e(e){
                            this.observer=e
                        }var t=e.prototype;return t.destroy=function(){},
                        t.resetTimeStamp=function(){},
                        t.resetInitSegment=function(){},
                        t.remux=function(e,
                        t,
                        i,
                        n,
                        a,
                        s,
                        o,
                        l){
                            var d=this.observer,
                            c="";e&&(c+="audio"),
                            t&&(c+="video"),
                            d.trigger(r.default.FRAG_PARSING_DATA,
                            {
                                data1: l,
                                startPTS: a,
                                startDTS: a,
                                type: c,
                                hasAudio: !!e,
                                hasVideo: !!t,
                                nb: 1,
                                dropped: 0
                            }),
                            d.trigger(r.default.FRAG_PARSED)
                        },
                        e
                    }(),
                    G=Object(l.getSelfScope)();try{
                        N=G.performance.now.bind(G.performance)
                    }catch(e){
                        o.logger.debug("Unable to use Performance API on this environment"),
                        N=G.Date.now
                    }var j=function(){
                        function e(e,
                        t,
                        i,
                        r){
                            this.observer=e,
                            this.typeSupported=t,
                            this.config=i,
                            this.vendor=r
                        }var t=e.prototype;return t.destroy=function(){
                            var e=this.demuxer;e&&e.destroy()
                        },
                        t.push=function(e,
                        t,
                        i,
                        n,
                        s,
                        o,
                        l,
                        d,
                        c,
                        u,
                        h,
                        f){
                            var g=this;if(e.byteLength>0&&null!=t&&null!=t.key&&"AES-128"===t.method){
                                var p=this.decrypter;null==p&&(p=this.decrypter=new a.default(this.observer,
                                this.config));var v=N();p.decrypt(e,
                                t.key.buffer,
                                t.iv.buffer,
                                (function(e){
                                    var a=N();g.observer.trigger(r.default.FRAG_DECRYPTED,
                                    {
                                        stats: {
                                            tstart: v,
                                            tdecrypt: a
                                        }
                                    }),
                                    g.pushDecrypted(new Uint8Array(e),
                                    t,
                                    new Uint8Array(i),
                                    n,
                                    s,
                                    o,
                                    l,
                                    d,
                                    c,
                                    u,
                                    h,
                                    f)
                                }))
                            }else this.pushDecrypted(new Uint8Array(e),
                            t,
                            new Uint8Array(i),
                            n,
                            s,
                            o,
                            l,
                            d,
                            c,
                            u,
                            h,
                            f)
                        },
                        t.pushDecrypted=function(e,
                        t,
                        i,
                        a,
                        s,
                        o,
                        l,
                        d,
                        c,
                        u,
                        h,
                        f){
                            var g=this.demuxer,
                            p=this.remuxer;if(!g||l||d){
                                for(var v,
                                m=this.observer,
                                _=this.typeSupported,
                                T=this.config,
                                E=[
                                    {
                                        demux: A,
                                        remux: U
                                    },
                                    {
                                        demux: b.default,
                                        remux: B
                                    },
                                    {
                                        demux: y,
                                        remux: U
                                    },
                                    {
                                        demux: R,
                                        remux: U
                                    }
                                ],
                                w=0,
                                S=E.length;w<S&&!(v=E[
                                    w
                                ]).demux.probe(e);w++);if(!v)return void m.trigger(r.default.ERROR,
                                {
                                    type: n.ErrorTypes.MEDIA_ERROR,
                                    details: n.ErrorDetails.FRAG_PARSING_ERROR,
                                    fatal: !0,
                                    reason: "no demux matching with content found"
                                });p&&p instanceof v.remux||(p=new v.remux(m,
                                T,
                                _,
                                this.vendor)),
                                g&&g instanceof v.demux||(g=new v.demux(m,
                                p,
                                T,
                                _),
                                this.probe=v.demux.probe),
                                this.demuxer=g,
                                this.remuxer=p
                            }(l||d)&&(g.resetInitSegment(i,
                            a,
                            s,
                            u),
                            p.resetInitSegment()),
                            l&&(g.resetTimeStamp(f),
                            p.resetTimeStamp(f)),
                            "function"==typeof g.setDecryptData&&g.setDecryptData(t),
                            g.append(e,
                            o,
                            c,
                            h)
                        },
                        e
                    }();t.default=j
                },
                "./src/demux/demuxer-worker.js": /*!*************************************!*\
  !*** ./src/demux/demuxer-worker.js ***!
  \*************************************//*! exports provided: default *//*! ModuleConcatenation bailout: Module is referenced from these modules with unsupported syntax: ./src/demux/demuxer.js (referenced with require.resolve) */function(e,
                t,
                i){
                    "use strict";i.r(t);var r=i(/*! ../demux/demuxer-inline */"./src/demux/demuxer-inline.js"),
                    n=i(/*! ../events */"./src/events.js"),
                    a=i(/*! ../utils/logger */"./src/utils/logger.js"),
                    s=i(/*! eventemitter3 */"./node_modules/eventemitter3/index.js");t.default=function(e){
                        var t=new s.EventEmitter;t.trigger=function(e){
                            for(var i=arguments.length,
                            r=new Array(i>1?i-1: 0),
                            n=1;n<i;n++)r[
                                n-1
                            ]=arguments[
                                n
                            ];t.emit.apply(t,
                            [
                                e,
                                e
                            ].concat(r))
                        },
                        t.off=function(e){
                            for(var i=arguments.length,
                            r=new Array(i>1?i-1: 0),
                            n=1;n<i;n++)r[
                                n-1
                            ]=arguments[
                                n
                            ];t.removeListener.apply(t,
                            [
                                e
                            ].concat(r))
                        };var i=function(t,
                        i){
                            e.postMessage({
                                event: t,
                                data: i
                            })
                        };e.addEventListener("message",
                        (function(n){
                            var s=n.data;switch(s.cmd){
                                case "init": var o=JSON.parse(s.config);e.demuxer=new r.default(t,
                                s.typeSupported,
                                o,
                                s.vendor),
                                Object(a.enableLogs)(o.debug),
                                i("init",
                                null);break;case "demux": e.demuxer.push(s.data,
                                s.decryptdata,
                                s.initSegment,
                                s.audioCodec,
                                s.videoCodec,
                                s.timeOffset,
                                s.discontinuity,
                                s.trackSwitch,
                                s.contiguous,
                                s.duration,
                                s.accurateTimeOffset,
                                s.defaultInitPTS)
                            }
                        })),
                        t.on(n.default.FRAG_DECRYPTED,
                        i),
                        t.on(n.default.FRAG_PARSING_INIT_SEGMENT,
                        i),
                        t.on(n.default.FRAG_PARSED,
                        i),
                        t.on(n.default.ERROR,
                        i),
                        t.on(n.default.FRAG_PARSING_METADATA,
                        i),
                        t.on(n.default.FRAG_PARSING_USERDATA,
                        i),
                        t.on(n.default.INIT_PTS_FOUND,
                        i),
                        t.on(n.default.FRAG_PARSING_DATA,
                        (function(t,
                        i){
                            var r=[],
                            n={
                                event: t,
                                data: i
                            };i.data1&&(n.data1=i.data1.buffer,
                            r.push(i.data1.buffer),
                            delete i.data1),
                            i.data2&&(n.data2=i.data2.buffer,
                            r.push(i.data2.buffer),
                            delete i.data2),
                            e.postMessage(n,
                            r)
                        }))
                    }
                },
                "./src/demux/id3.js": /*!**************************!*\
  !*** ./src/demux/id3.js ***!
  \**************************//*! exports provided: default, utf8ArrayToStr */function(e,
                t,
                i){
                    "use strict";i.r(t),
                    i.d(t,
                    "utf8ArrayToStr",
                    (function(){
                        return o
                    }));var r,
                    n=i(/*! ../utils/get-self-scope */"./src/utils/get-self-scope.js"),
                    a=function(){
                        function e(){}return e.isHeader=function(e,
                        t){
                            return t+10<=e.length&&73===e[
                                t
                            ]&&68===e[
                                t+1
                            ]&&51===e[
                                t+2
                            ]&&e[
                                t+3
                            ]<255&&e[
                                t+4
                            ]<255&&e[
                                t+6
                            ]<128&&e[
                                t+7
                            ]<128&&e[
                                t+8
                            ]<128&&e[
                                t+9
                            ]<128
                        },
                        e.isFooter=function(e,
                        t){
                            return t+10<=e.length&&51===e[
                                t
                            ]&&68===e[
                                t+1
                            ]&&73===e[
                                t+2
                            ]&&e[
                                t+3
                            ]<255&&e[
                                t+4
                            ]<255&&e[
                                t+6
                            ]<128&&e[
                                t+7
                            ]<128&&e[
                                t+8
                            ]<128&&e[
                                t+9
                            ]<128
                        },
                        e.getID3Data=function(t,
                        i){
                            for(var r=i,
                            n=0;e.isHeader(t,
                            i);)n+=10,
                            n+=e._readSize(t,
                            i+6),
                            e.isFooter(t,
                            i+10)&&(n+=10),
                            i+=n;if(n>0)return t.subarray(r,
                            r+n)
                        },
                        e._readSize=function(e,
                        t){
                            var i=0;return i=(127&e[
                                t
                            ])<<21,
                            i|=(127&e[
                                t+1
                            ])<<14,
                            i|=(127&e[
                                t+2
                            ])<<7,
                            i|=127&e[
                                t+3
                            ]
                        },
                        e.getTimeStamp=function(t){
                            for(var i=e.getID3Frames(t),
                            r=0;r<i.length;r++){
                                var n=i[
                                    r
                                ];if(e.isTimeStampFrame(n))return e._readTimeStamp(n)
                            }
                        },
                        e.isTimeStampFrame=function(e){
                            return e&&"PRIV"===e.key&&"com.apple.streaming.transportStreamTimestamp"===e.info
                        },
                        e._getFrameData=function(t){
                            var i=String.fromCharCode(t[
                                0
                            ],
                            t[
                                1
                            ],
                            t[
                                2
                            ],
                            t[
                                3
                            ]),
                            r=e._readSize(t,
                            4);return{
                                type: i,
                                size: r,
                                data: t.subarray(10,
                                10+r)
                            }
                        },
                        e.getID3Frames=function(t){
                            for(var i=0,
                            r=[];e.isHeader(t,
                            i);){
                                for(var n=e._readSize(t,
                                i+6),
                                a=(i+=10)+n;i+8<a;){
                                    var s=e._getFrameData(t.subarray(i)),
                                    o=e._decodeFrame(s);o&&r.push(o),
                                    i+=s.size+10
                                }e.isFooter(t,
                                i)&&(i+=10)
                            }return r
                        },
                        e._decodeFrame=function(t){
                            return "PRIV"===t.type?e._decodePrivFrame(t): "T"===t.type[
                                0
                            ]?e._decodeTextFrame(t): "W"===t.type[
                                0
                            ]?e._decodeURLFrame(t): void 0
                        },
                        e._readTimeStamp=function(e){
                            if(8===e.data.byteLength){
                                var t=new Uint8Array(e.data),
                                i=1&t[
                                    3
                                ],
                                r=(t[
                                    4
                                ]<<23)+(t[
                                    5
                                ]<<15)+(t[
                                    6
                                ]<<7)+t[
                                    7
                                ];return r/=45,
                                i&&(r+=47721858.84),
                                Math.round(r)
                            }
                        },
                        e._decodePrivFrame=function(t){
                            if(!(t.size<2)){
                                var i=e._utf8ArrayToStr(t.data,
                                !0),
                                r=new Uint8Array(t.data.subarray(i.length+1));return{
                                    key: t.type,
                                    info: i,
                                    data: r.buffer
                                }
                            }
                        },
                        e._decodeTextFrame=function(t){
                            if(!(t.size<2)){
                                if("TXXX"===t.type){
                                    var i=1,
                                    r=e._utf8ArrayToStr(t.data.subarray(i),
                                    !0);i+=r.length+1;var n=e._utf8ArrayToStr(t.data.subarray(i));return{
                                        key: t.type,
                                        info: r,
                                        data: n
                                    }
                                }var a=e._utf8ArrayToStr(t.data.subarray(1));return{
                                    key: t.type,
                                    data: a
                                }
                            }
                        },
                        e._decodeURLFrame=function(t){
                            if("WXXX"===t.type){
                                if(t.size<2)return;var i=1,
                                r=e._utf8ArrayToStr(t.data.subarray(i),
                                !0);i+=r.length+1;var n=e._utf8ArrayToStr(t.data.subarray(i));return{
                                    key: t.type,
                                    info: r,
                                    data: n
                                }
                            }var a=e._utf8ArrayToStr(t.data);return{
                                key: t.type,
                                data: a
                            }
                        },
                        e._utf8ArrayToStr=function(e,
                        t){
                            void 0===t&&(t=!1);var i=s();if(i){
                                var r=i.decode(e);if(t){
                                    var n=r.indexOf("\0");return-1!==n?r.substring(0,
                                    n): r
                                }return r.replace(/\0/g,
                                "")
                            }for(var a,
                            o,
                            l,
                            d=e.length,
                            c="",
                            u=0;u<d;){
                                if(0===(a=e[
                                    u++
                                ])&&t)return c;if(0!==a&&3!==a)switch(a>>4){
                                    case 0: case 1: case 2: case 3: case 4: case 5: case 6: case 7: c+=String.fromCharCode(a);break;case 12: case 13: o=e[
                                        u++
                                    ],
                                    c+=String.fromCharCode((31&a)<<6|63&o);break;case 14: o=e[
                                        u++
                                    ],
                                    l=e[
                                        u++
                                    ],
                                    c+=String.fromCharCode((15&a)<<12|(63&o)<<6|(63&l)<<0)
                                }
                            }return c
                        },
                        e
                    }();function s(){
                        var e=Object(n.getSelfScope)();return r||void 0===e.TextDecoder||(r=new e.TextDecoder("utf-8")),
                        r
                    }var o=a._utf8ArrayToStr;t.default=a
                },
                "./src/demux/mp4demuxer.js": /*!*********************************!*\
  !*** ./src/demux/mp4demuxer.js ***!
  \*********************************//*! exports provided: default */function(e,
                t,
                i){
                    "use strict";i.r(t);var r=i(/*! ../utils/logger */"./src/utils/logger.js"),
                    n=i(/*! ../events */"./src/events.js"),
                    a=Math.pow(2,
                    32)-1,
                    s=function(){
                        function e(e,
                        t){
                            this.observer=e,
                            this.remuxer=t
                        }var t=e.prototype;return t.resetTimeStamp=function(e){
                            this.initPTS=e
                        },
                        t.resetInitSegment=function(t,
                        i,
                        r,
                        a){
                            if(t&&t.byteLength){
                                var s=this.initData=e.parseInitSegment(t);null==i&&(i="mp4a.40.5"),
                                null==r&&(r="avc1.42e01e");var o={};s.audio&&s.video?o.audiovideo={
                                    container: "video/mp4",
                                    codec: i+","+r,
                                    initSegment: a?t: null
                                }: (s.audio&&(o.audio={
                                    container: "audio/mp4",
                                    codec: i,
                                    initSegment: a?t: null
                                }),
                                s.video&&(o.video={
                                    container: "video/mp4",
                                    codec: r,
                                    initSegment: a?t: null
                                })),
                                this.observer.trigger(n.default.FRAG_PARSING_INIT_SEGMENT,
                                {
                                    tracks: o
                                })
                            }else i&&(this.audioCodec=i),
                            r&&(this.videoCodec=r)
                        },
                        e.probe=function(t){
                            return e.findBox({
                                data: t,
                                start: 0,
                                end: Math.min(t.length,
                                16384)
                            },
                            [
                                "moof"
                            ]).length>0
                        },
                        e.bin2str=function(e){
                            return String.fromCharCode.apply(null,
                            e)
                        },
                        e.readUint16=function(e,
                        t){
                            e.data&&(t+=e.start,
                            e=e.data);var i=e[
                                t
                            ]<<8|e[
                                t+1
                            ];return i<0?65536+i: i
                        },
                        e.readUint32=function(e,
                        t){
                            e.data&&(t+=e.start,
                            e=e.data);var i=e[
                                t
                            ]<<24|e[
                                t+1
                            ]<<16|e[
                                t+2
                            ]<<8|e[
                                t+3
                            ];return i<0?4294967296+i: i
                        },
                        e.writeUint32=function(e,
                        t,
                        i){
                            e.data&&(t+=e.start,
                            e=e.data),
                            e[
                                t
                            ]=i>>24,
                            e[
                                t+1
                            ]=i>>16&255,
                            e[
                                t+2
                            ]=i>>8&255,
                            e[
                                t+3
                            ]=255&i
                        },
                        e.findBox=function(t,
                        i){
                            var r,
                            n,
                            a,
                            s,
                            o,
                            l,
                            d=[];if(t.data?(o=t.start,
                            a=t.end,
                            t=t.data): (o=0,
                            a=t.byteLength),
                            !i.length)return null;for(r=o;r<a;)l=(n=e.readUint32(t,
                            r))>1?r+n: a,
                            e.bin2str(t.subarray(r+4,
                            r+8))===i[
                                0
                            ]&&(1===i.length?d.push({
                                data: t,
                                start: r+8,
                                end: l
                            }): (s=e.findBox({
                                data: t,
                                start: r+8,
                                end: l
                            },
                            i.slice(1))).length&&(d=d.concat(s))),
                            r=l;return d
                        },
                        e.parseSegmentIndex=function(t){
                            var i,
                            r=e.findBox(t,
                            [
                                "moov"
                            ])[
                                0
                            ],
                            n=r?r.end: null,
                            a=0,
                            s=e.findBox(t,
                            [
                                "sidx"
                            ]);if(!s||!s[
                                0
                            ])return null;i=[];var o=(s=s[
                                0
                            ]).data[
                                0
                            ];a=0===o?8: 16;var l=e.readUint32(s,
                            a);a+=4,
                            a+=0===o?8: 16,
                            a+=2;var d=s.end+0,
                            c=e.readUint16(s,
                            a);a+=2;for(var u=0;u<c;u++){
                                var h=a,
                                f=e.readUint32(s,
                                h);h+=4;var g=2147483647&f;if(1==(2147483648&f)>>>31)return void console.warn("SIDX has hierarchical references (not supported)");var p=e.readUint32(s,
                                h);h+=4,
                                i.push({
                                    referenceSize: g,
                                    subsegmentDuration: p,
                                    info: {
                                        duration: p/l,
                                        start: d,
                                        end: d+g-1
                                    }
                                }),
                                d+=g,
                                a=h+=4
                            }return{
                                earliestPresentationTime: 0,
                                timescale: l,
                                version: o,
                                referencesCount: c,
                                references: i,
                                moovEndOffset: n
                            }
                        },
                        e.parseInitSegment=function(t){
                            var i=[];return e.findBox(t,
                            [
                                "moov",
                                "trak"
                            ]).forEach((function(t){
                                var n=e.findBox(t,
                                [
                                    "tkhd"
                                ])[
                                    0
                                ];if(n){
                                    var a=n.data[
                                        n.start
                                    ],
                                    s=0===a?12: 20,
                                    o=e.readUint32(n,
                                    s),
                                    l=e.findBox(t,
                                    [
                                        "mdia",
                                        "mdhd"
                                    ])[
                                        0
                                    ];if(l){
                                        s=0===(a=l.data[
                                            l.start
                                        ])?12: 20;var d=e.readUint32(l,
                                        s),
                                        c=e.findBox(t,
                                        [
                                            "mdia",
                                            "hdlr"
                                        ])[
                                            0
                                        ];if(c){
                                            var u={
                                                soun: "audio",
                                                vide: "video"
                                            }[
                                                e.bin2str(c.data.subarray(c.start+8,
                                                c.start+12))
                                            ];if(u){
                                                var h=e.findBox(t,
                                                [
                                                    "mdia",
                                                    "minf",
                                                    "stbl",
                                                    "stsd"
                                                ]);if(h.length){
                                                    h=h[
                                                        0
                                                    ];var f=e.bin2str(h.data.subarray(h.start+12,
                                                    h.start+16));r.logger.log("MP4Demuxer:"+u+":"+f+" found")
                                                }i[
                                                    o
                                                ]={
                                                    timescale: d,
                                                    type: u
                                                },
                                                i[
                                                    u
                                                ]={
                                                    timescale: d,
                                                    id: o
                                                }
                                            }
                                        }
                                    }
                                }
                            })),
                            i
                        },
                        e.getStartDTS=function(t,
                        i){
                            var r,
                            n,
                            a;return r=e.findBox(i,
                            [
                                "moof",
                                "traf"
                            ]),
                            n=[].concat.apply([],
                            r.map((function(i){
                                return e.findBox(i,
                                [
                                    "tfhd"
                                ]).map((function(r){
                                    var n,
                                    a;return n=e.readUint32(r,
                                    4),
                                    a=t[
                                        n
                                    ].timescale||9e4,
                                    e.findBox(i,
                                    [
                                        "tfdt"
                                    ]).map((function(t){
                                        var i,
                                        r;return i=t.data[
                                            t.start
                                        ],
                                        r=e.readUint32(t,
                                        4),
                                        1===i&&(r*=Math.pow(2,
                                        32),
                                        r+=e.readUint32(t,
                                        8)),
                                        r
                                    }))[
                                        0
                                    ]/a
                                }))
                            }))),
                            a=Math.min.apply(null,
                            n),
                            isFinite(a)?a: 0
                        },
                        e.offsetStartDTS=function(t,
                        i,
                        r){
                            e.findBox(i,
                            [
                                "moof",
                                "traf"
                            ]).map((function(i){
                                return e.findBox(i,
                                [
                                    "tfhd"
                                ]).map((function(n){
                                    var s=e.readUint32(n,
                                    4),
                                    o=t[
                                        s
                                    ].timescale||9e4;e.findBox(i,
                                    [
                                        "tfdt"
                                    ]).map((function(t){
                                        var i=t.data[
                                            t.start
                                        ],
                                        n=e.readUint32(t,
                                        4);if(0===i)e.writeUint32(t,
                                        4,
                                        n-r*o);else{
                                            n*=Math.pow(2,
                                            32),
                                            n+=e.readUint32(t,
                                            8),
                                            n-=r*o,
                                            n=Math.max(n,
                                            0);var s=Math.floor(n/(a+1)),
                                            l=Math.floor(n%(a+1));e.writeUint32(t,
                                            4,
                                            s),
                                            e.writeUint32(t,
                                            8,
                                            l)
                                        }
                                    }))
                                }))
                            }))
                        },
                        t.append=function(t,
                        i,
                        r,
                        a){
                            var s=this.initData;s||(this.resetInitSegment(t,
                            this.audioCodec,
                            this.videoCodec,
                            !1),
                            s=this.initData);var o,
                            l=this.initPTS;if(void 0===l){
                                var d=e.getStartDTS(s,
                                t);this.initPTS=l=d-i,
                                this.observer.trigger(n.default.INIT_PTS_FOUND,
                                {
                                    initPTS: l
                                })
                            }e.offsetStartDTS(s,
                            t,
                            l),
                            o=e.getStartDTS(s,
                            t),
                            this.remuxer.remux(s.audio,
                            s.video,
                            null,
                            null,
                            o,
                            r,
                            a,
                            t)
                        },
                        t.destroy=function(){},
                        e
                    }();t.default=s
                },
                "./src/errors.ts": /*!***********************!*\
  !*** ./src/errors.ts ***!
  \***********************//*! exports provided: ErrorTypes, ErrorDetails */function(e,
                t,
                i){
                    "use strict";var r,
                    n;i.r(t),
                    i.d(t,
                    "ErrorTypes",
                    (function(){
                        return r
                    })),
                    i.d(t,
                    "ErrorDetails",
                    (function(){
                        return n
                    })),
                    function(e){
                        e.NETWORK_ERROR="networkError",
                        e.MEDIA_ERROR="mediaError",
                        e.KEY_SYSTEM_ERROR="keySystemError",
                        e.MUX_ERROR="muxError",
                        e.OTHER_ERROR="otherError"
                    }(r||(r={})),
                    function(e){
                        e.KEY_SYSTEM_NO_KEYS="keySystemNoKeys",
                        e.KEY_SYSTEM_NO_ACCESS="keySystemNoAccess",
                        e.KEY_SYSTEM_NO_SESSION="keySystemNoSession",
                        e.KEY_SYSTEM_LICENSE_REQUEST_FAILED="keySystemLicenseRequestFailed",
                        e.KEY_SYSTEM_NO_INIT_DATA="keySystemNoInitData",
                        e.MANIFEST_LOAD_ERROR="manifestLoadError",
                        e.MANIFEST_LOAD_TIMEOUT="manifestLoadTimeOut",
                        e.MANIFEST_PARSING_ERROR="manifestParsingError",
                        e.MANIFEST_INCOMPATIBLE_CODECS_ERROR="manifestIncompatibleCodecsError",
                        e.LEVEL_EMPTY_ERROR="levelEmptyError",
                        e.LEVEL_LOAD_ERROR="levelLoadError",
                        e.LEVEL_LOAD_TIMEOUT="levelLoadTimeOut",
                        e.LEVEL_SWITCH_ERROR="levelSwitchError",
                        e.AUDIO_TRACK_LOAD_ERROR="audioTrackLoadError",
                        e.AUDIO_TRACK_LOAD_TIMEOUT="audioTrackLoadTimeOut",
                        e.FRAG_LOAD_ERROR="fragLoadError",
                        e.FRAG_LOAD_TIMEOUT="fragLoadTimeOut",
                        e.FRAG_DECRYPT_ERROR="fragDecryptError",
                        e.FRAG_PARSING_ERROR="fragParsingError",
                        e.REMUX_ALLOC_ERROR="remuxAllocError",
                        e.KEY_LOAD_ERROR="keyLoadError",
                        e.KEY_LOAD_TIMEOUT="keyLoadTimeOut",
                        e.BUFFER_ADD_CODEC_ERROR="bufferAddCodecError",
                        e.BUFFER_APPEND_ERROR="bufferAppendError",
                        e.BUFFER_APPENDING_ERROR="bufferAppendingError",
                        e.BUFFER_STALLED_ERROR="bufferStalledError",
                        e.BUFFER_FULL_ERROR="bufferFullError",
                        e.BUFFER_SEEK_OVER_HOLE="bufferSeekOverHole",
                        e.BUFFER_NUDGE_ON_STALL="bufferNudgeOnStall",
                        e.INTERNAL_EXCEPTION="internalException"
                    }(n||(n={}))
                },
                "./src/events.js": /*!***********************!*\
  !*** ./src/events.js ***!
  \***********************//*! exports provided: default */function(e,
                t,
                i){
                    "use strict";i.r(t),
                    t.default={
                        MEDIA_ATTACHING: "hlsMediaAttaching",
                        MEDIA_ATTACHED: "hlsMediaAttached",
                        MEDIA_DETACHING: "hlsMediaDetaching",
                        MEDIA_DETACHED: "hlsMediaDetached",
                        BUFFER_RESET: "hlsBufferReset",
                        BUFFER_CODECS: "hlsBufferCodecs",
                        BUFFER_CREATED: "hlsBufferCreated",
                        BUFFER_APPENDING: "hlsBufferAppending",
                        BUFFER_APPENDED: "hlsBufferAppended",
                        BUFFER_EOS: "hlsBufferEos",
                        BUFFER_FLUSHING: "hlsBufferFlushing",
                        BUFFER_FLUSHED: "hlsBufferFlushed",
                        MANIFEST_LOADING: "hlsManifestLoading",
                        MANIFEST_LOADED: "hlsManifestLoaded",
                        MANIFEST_PARSED: "hlsManifestParsed",
                        LEVEL_SWITCHING: "hlsLevelSwitching",
                        LEVEL_SWITCHED: "hlsLevelSwitched",
                        LEVEL_LOADING: "hlsLevelLoading",
                        LEVEL_LOADED: "hlsLevelLoaded",
                        LEVEL_UPDATED: "hlsLevelUpdated",
                        LEVEL_PTS_UPDATED: "hlsLevelPtsUpdated",
                        LEVELS_UPDATED: "hlsLevelsUpdated",
                        AUDIO_TRACKS_UPDATED: "hlsAudioTracksUpdated",
                        AUDIO_TRACK_SWITCHING: "hlsAudioTrackSwitching",
                        AUDIO_TRACK_SWITCHED: "hlsAudioTrackSwitched",
                        AUDIO_TRACK_LOADING: "hlsAudioTrackLoading",
                        AUDIO_TRACK_LOADED: "hlsAudioTrackLoaded",
                        SUBTITLE_TRACKS_UPDATED: "hlsSubtitleTracksUpdated",
                        SUBTITLE_TRACK_SWITCH: "hlsSubtitleTrackSwitch",
                        SUBTITLE_TRACK_LOADING: "hlsSubtitleTrackLoading",
                        SUBTITLE_TRACK_LOADED: "hlsSubtitleTrackLoaded",
                        SUBTITLE_FRAG_PROCESSED: "hlsSubtitleFragProcessed",
                        CUES_PARSED: "hlsCuesParsed",
                        NON_NATIVE_TEXT_TRACKS_FOUND: "hlsNonNativeTextTracksFound",
                        INIT_PTS_FOUND: "hlsInitPtsFound",
                        FRAG_LOADING: "hlsFragLoading",
                        FRAG_LOAD_PROGRESS: "hlsFragLoadProgress",
                        FRAG_LOAD_EMERGENCY_ABORTED: "hlsFragLoadEmergencyAborted",
                        FRAG_LOADED: "hlsFragLoaded",
                        FRAG_DECRYPTED: "hlsFragDecrypted",
                        FRAG_PARSING_INIT_SEGMENT: "hlsFragParsingInitSegment",
                        FRAG_PARSING_USERDATA: "hlsFragParsingUserdata",
                        FRAG_PARSING_METADATA: "hlsFragParsingMetadata",
                        FRAG_PARSING_DATA: "hlsFragParsingData",
                        FRAG_PARSED: "hlsFragParsed",
                        FRAG_BUFFERED: "hlsFragBuffered",
                        FRAG_CHANGED: "hlsFragChanged",
                        FPS_DROP: "hlsFpsDrop",
                        FPS_DROP_LEVEL_CAPPING: "hlsFpsDropLevelCapping",
                        ERROR: "hlsError",
                        DESTROYING: "hlsDestroying",
                        KEY_LOADING: "hlsKeyLoading",
                        KEY_LOADED: "hlsKeyLoaded",
                        STREAM_STATE_TRANSITION: "hlsStreamStateTransition",
                        LIVE_BACK_BUFFER_REACHED: "hlsLiveBackBufferReached"
                    }
                },
                "./src/hls.ts": /*!*********************************!*\
  !*** ./src/hls.ts + 50 modules ***!
  \*********************************//*! exports provided: default *//*! ModuleConcatenation bailout: Cannot concat with ./src/crypt/decrypter.js because of ./src/demux/demuxer-worker.js *//*! ModuleConcatenation bailout: Cannot concat with ./src/demux/demuxer-inline.js because of ./src/demux/demuxer-worker.js *//*! ModuleConcatenation bailout: Cannot concat with ./src/demux/id3.js because of ./src/demux/demuxer-worker.js *//*! ModuleConcatenation bailout: Cannot concat with ./src/demux/mp4demuxer.js because of ./src/demux/demuxer-worker.js *//*! ModuleConcatenation bailout: Cannot concat with ./src/errors.ts because of ./src/demux/demuxer-worker.js *//*! ModuleConcatenation bailout: Cannot concat with ./src/events.js because of ./src/demux/demuxer-worker.js *//*! ModuleConcatenation bailout: Cannot concat with ./src/polyfills/number.js because of ./src/demux/demuxer-worker.js *//*! ModuleConcatenation bailout: Cannot concat with ./src/utils/get-self-scope.js because of ./src/demux/demuxer-worker.js *//*! ModuleConcatenation bailout: Cannot concat with ./src/utils/logger.js because of ./src/demux/demuxer-worker.js *//*! ModuleConcatenation bailout: Cannot concat with ./node_modules/eventemitter3/index.js (<- Module is not an ECMAScript module) *//*! ModuleConcatenation bailout: Cannot concat with ./node_modules/url-toolkit/src/url-toolkit.js (<- Module is not an ECMAScript module) */function(e,
                t,
                i){
                    "use strict";i.r(t),
                    i.d(t,
                    "default",
                    (function(){
                        return ai
                    }));var r={};i.r(r),
                    i.d(r,
                    "newCue",
                    (function(){
                        return ft
                    }));var n,
                    a,
                    s=i("./node_modules/url-toolkit/src/url-toolkit.js"),
                    o=i("./src/errors.ts"),
                    l=i("./src/polyfills/number.js"),
                    d=i("./src/events.js"),
                    c=i("./src/utils/logger.js"),
                    u={
                        hlsEventGeneric: !0,
                        hlsHandlerDestroying: !0,
                        hlsHandlerDestroyed: !0
                    },
                    h=function(){
                        function e(e){
                            this.hls=void 0,
                            this.handledEvents=void 0,
                            this.useGenericHandler=void 0,
                            this.hls=e,
                            this.onEvent=this.onEvent.bind(this);for(var t=arguments.length,
                            i=new Array(t>1?t-1: 0),
                            r=1;r<t;r++)i[
                                r-1
                            ]=arguments[
                                r
                            ];this.handledEvents=i,
                            this.useGenericHandler=!0,
                            this.registerListeners()
                        }var t=e.prototype;return t.destroy=function(){
                            this.onHandlerDestroying(),
                            this.unregisterListeners(),
                            this.onHandlerDestroyed()
                        },
                        t.onHandlerDestroying=function(){},
                        t.onHandlerDestroyed=function(){},
                        t.isEventHandler=function(){
                            return "object"==typeof this.handledEvents&&this.handledEvents.length&&"function"==typeof this.onEvent
                        },
                        t.registerListeners=function(){
                            this.isEventHandler()&&this.handledEvents.forEach((function(e){
                                if(u[
                                    e
                                ])throw new Error("Forbidden event-name: "+e);this.hls.on(e,
                                this.onEvent)
                            }),
                            this)
                        },
                        t.unregisterListeners=function(){
                            this.isEventHandler()&&this.handledEvents.forEach((function(e){
                                this.hls.off(e,
                                this.onEvent)
                            }),
                            this)
                        },
                        t.onEvent=function(e,
                        t){
                            this.onEventGeneric(e,
                            t)
                        },
                        t.onEventGeneric=function(e,
                        t){
                            try{
                                (function(e,
                                t){
                                    var i="on"+e.replace("hls",
                                    "");if("function"!=typeof this[
                                        i
                                    ])throw new Error("Event "+e+" has no generic handler in this "+this.constructor.name+" class (tried "+i+")");return this[
                                        i
                                    ].bind(this,
                                    t)
                                }).call(this,
                                e,
                                t).call()
                            }catch(t){
                                c.logger.error("An internal error happened while handling event "+e+'. Error message: "'+t.message+'". Here is a stacktrace:',
                                t),
                                this.hls.trigger(d.default.ERROR,
                                {
                                    type: o.ErrorTypes.OTHER_ERROR,
                                    details: o.ErrorDetails.INTERNAL_EXCEPTION,
                                    fatal: !1,
                                    event: e,
                                    err: t
                                })
                            }
                        },
                        e
                    }();!function(e){
                        e.MANIFEST="manifest",
                        e.LEVEL="level",
                        e.AUDIO_TRACK="audioTrack",
                        e.SUBTITLE_TRACK="subtitleTrack"
                    }(n||(n={})),
                    function(e){
                        e.MAIN="main",
                        e.AUDIO="audio",
                        e.SUBTITLE="subtitle"
                    }(a||(a={}));var f=i("./src/demux/mp4demuxer.js");function g(e,
                    t){
                        for(var i=0;i<t.length;i++){
                            var r=t[
                                i
                            ];r.enumerable=r.enumerable||!1,
                            r.configurable=!0,
                            "value"in r&&(r.writable=!0),
                            Object.defineProperty(e,
                            r.key,
                            r)
                        }
                    }var p,
                    v=function(){
                        function e(e,
                        t){
                            this._uri=null,
                            this.baseuri=void 0,
                            this.reluri=void 0,
                            this.method=null,
                            this.key=null,
                            this.iv=null,
                            this.baseuri=e,
                            this.reluri=t
                        }var t,
                        i,
                        r;return t=e,
                        (i=[
                            {
                                key: "uri",
                                get: function(){
                                    return!this._uri&&this.reluri&&(this._uri=Object(s.buildAbsoluteURL)(this.baseuri,
                                    this.reluri,
                                    {
                                        alwaysNormalize: !0
                                    })),
                                    this._uri
                                }
                            }
                        ])&&g(t.prototype,
                        i),
                        r&&g(t,
                        r),
                        e
                    }();function m(e,
                    t){
                        for(var i=0;i<t.length;i++){
                            var r=t[
                                i
                            ];r.enumerable=r.enumerable||!1,
                            r.configurable=!0,
                            "value"in r&&(r.writable=!0),
                            Object.defineProperty(e,
                            r.key,
                            r)
                        }
                    }!function(e){
                        e.AUDIO="audio",
                        e.VIDEO="video"
                    }(p||(p={}));var y=function(){
                        function e(){
                            var e;this._url=null,
                            this._byteRange=null,
                            this._decryptdata=null,
                            this._elementaryStreams=((e={})[
                                p.AUDIO
                            ]=!1,
                            e[
                                p.VIDEO
                            ]=!1,
                            e),
                            this.deltaPTS=0,
                            this.rawProgramDateTime=null,
                            this.programDateTime=null,
                            this.title=null,
                            this.tagList=[],
                            this.cc=void 0,
                            this.type=void 0,
                            this.relurl=void 0,
                            this.baseurl=void 0,
                            this.duration=void 0,
                            this.start=void 0,
                            this.sn=0,
                            this.urlId=0,
                            this.level=0,
                            this.levelkey=void 0,
                            this.loader=void 0
                        }var t,
                        i,
                        r,
                        n=e.prototype;return n.setByteRange=function(e,
                        t){
                            var i=e.split("@",
                            2),
                            r=[];1===i.length?r[
                                0
                            ]=t?t.byteRangeEndOffset: 0: r[
                                0
                            ]=parseInt(i[
                                1
                            ]),
                            r[
                                1
                            ]=parseInt(i[
                                0
                            ])+r[
                                0
                            ],
                            this._byteRange=r
                        },
                        n.addElementaryStream=function(e){
                            this._elementaryStreams[
                                e
                            ]=!0
                        },
                        n.hasElementaryStream=function(e){
                            return!0===this._elementaryStreams[
                                e
                            ]
                        },
                        n.createInitializationVector=function(e){
                            for(var t=new Uint8Array(16),
                            i=12;i<16;i++)t[
                                i
                            ]=e>>8*(15-i)&255;return t
                        },
                        n.setDecryptDataFromLevelKey=function(e,
                        t){
                            var i=e;return(null==e?void 0: e.method)&&e.uri&&!e.iv&&((i=new v(e.baseuri,
                            e.reluri)).method=e.method,
                            i.iv=this.createInitializationVector(t)),
                            i
                        },
                        t=e,
                        (i=[
                            {
                                key: "url",
                                get: function(){
                                    return!this._url&&this.relurl&&(this._url=Object(s.buildAbsoluteURL)(this.baseurl,
                                    this.relurl,
                                    {
                                        alwaysNormalize: !0
                                    })),
                                    this._url
                                },
                                set: function(e){
                                    this._url=e
                                }
                            },
                            {
                                key: "byteRange",
                                get: function(){
                                    return this._byteRange?this._byteRange: []
                                }
                            },
                            {
                                key: "byteRangeStartOffset",
                                get: function(){
                                    return this.byteRange[
                                        0
                                    ]
                                }
                            },
                            {
                                key: "byteRangeEndOffset",
                                get: function(){
                                    return this.byteRange[
                                        1
                                    ]
                                }
                            },
                            {
                                key: "decryptdata",
                                get: function(){
                                    if(!this.levelkey&&!this._decryptdata)return null;if(!this._decryptdata&&this.levelkey){
                                        var e=this.sn;"number"!=typeof e&&(this.levelkey&&"AES-128"===this.levelkey.method&&!this.levelkey.iv&&c.logger.warn('missing IV for initialization segment with method="'+this.levelkey.method+'" - compliance issue'),
                                        e=0),
                                        this._decryptdata=this.setDecryptDataFromLevelKey(this.levelkey,
                                        e)
                                    }return this._decryptdata
                                }
                            },
                            {
                                key: "endProgramDateTime",
                                get: function(){
                                    if(null===this.programDateTime)return null;if(!Object(l.isFiniteNumber)(this.programDateTime))return null;var e=Object(l.isFiniteNumber)(this.duration)?this.duration: 0;return this.programDateTime+1e3*e
                                }
                            },
                            {
                                key: "encrypted",
                                get: function(){
                                    return!(!this.decryptdata||null===this.decryptdata.uri||null!==this.decryptdata.key)
                                }
                            }
                        ])&&m(t.prototype,
                        i),
                        r&&m(t,
                        r),
                        e
                    }();function b(e,
                    t){
                        for(var i=0;i<t.length;i++){
                            var r=t[
                                i
                            ];r.enumerable=r.enumerable||!1,
                            r.configurable=!0,
                            "value"in r&&(r.writable=!0),
                            Object.defineProperty(e,
                            r.key,
                            r)
                        }
                    }var _=function(){
                        function e(e){
                            this.endCC=0,
                            this.endSN=0,
                            this.fragments=[],
                            this.initSegment=null,
                            this.live=!0,
                            this.needSidxRanges=!1,
                            this.startCC=0,
                            this.startSN=0,
                            this.startTimeOffset=null,
                            this.targetduration=0,
                            this.totalduration=0,
                            this.type=null,
                            this.url=e,
                            this.version=null
                        }var t,
                        i,
                        r;return t=e,
                        (i=[
                            {
                                key: "hasProgramDateTime",
                                get: function(){
                                    return!(!this.fragments[
                                        0
                                    ]||!Object(l.isFiniteNumber)(this.fragments[
                                        0
                                    ].programDateTime))
                                }
                            }
                        ])&&b(t.prototype,
                        i),
                        r&&b(t,
                        r),
                        e
                    }(),
                    T=/^(\d+)x(\d+)$/,
                    E=/\s*(.+?)\s*=((?:\".*?\")|.*?)(?:,|$)/g,
                    w=function(){
                        function e(t){
                            for(var i in "string"==typeof t&&(t=e.parseAttrList(t)),
                            t)t.hasOwnProperty(i)&&(this[
                                i
                            ]=t[
                                i
                            ])
                        }var t=e.prototype;return t.decimalInteger=function(e){
                            var t=parseInt(this[
                                e
                            ],
                            10);return t>Number.MAX_SAFE_INTEGER?1/0: t
                        },
                        t.hexadecimalInteger=function(e){
                            if(this[
                                e
                            ]){
                                var t=(this[
                                    e
                                ]||"0x").slice(2);t=(1&t.length?"0": "")+t;for(var i=new Uint8Array(t.length/2),
                                r=0;r<t.length/2;r++)i[
                                    r
                                ]=parseInt(t.slice(2*r,
                                2*r+2),
                                16);return i
                            }return null
                        },
                        t.hexadecimalIntegerAsNumber=function(e){
                            var t=parseInt(this[
                                e
                            ],
                            16);return t>Number.MAX_SAFE_INTEGER?1/0: t
                        },
                        t.decimalFloatingPoint=function(e){
                            return parseFloat(this[
                                e
                            ])
                        },
                        t.enumeratedString=function(e){
                            return this[
                                e
                            ]
                        },
                        t.decimalResolution=function(e){
                            var t=T.exec(this[
                                e
                            ]);if(null!==t)return{
                                width: parseInt(t[
                                    1
                                ],
                                10),
                                height: parseInt(t[
                                    2
                                ],
                                10)
                            }
                        },
                        e.parseAttrList=function(e){
                            var t,
                            i={};for(E.lastIndex=0;null!==(t=E.exec(e));){
                                var r=t[
                                    2
                                ];0===r.indexOf('"')&&r.lastIndexOf('"')===r.length-1&&(r=r.slice(1,
                                -1)),
                                i[
                                    t[
                                        1
                                    ]
                                ]=r
                            }return i
                        },
                        e
                    }(),
                    S={
                        audio: {
                            a3ds: !0,
                            "ac-3": !0,
                            "ac-4": !0,
                            alac: !0,
                            alaw: !0,
                            dra1: !0,
                            "dts+": !0,
                            "dts-": !0,
                            dtsc: !0,
                            dtse: !0,
                            dtsh: !0,
                            "ec-3": !0,
                            enca: !0,
                            g719: !0,
                            g726: !0,
                            m4ae: !0,
                            mha1: !0,
                            mha2: !0,
                            mhm1: !0,
                            mhm2: !0,
                            mlpa: !0,
                            mp4a: !0,
                            "raw ": !0,
                            Opus: !0,
                            samr: !0,
                            sawb: !0,
                            sawp: !0,
                            sevc: !0,
                            sqcp: !0,
                            ssmv: !0,
                            twos: !0,
                            ulaw: !0
                        },
                        video: {
                            avc1: !0,
                            avc2: !0,
                            avc3: !0,
                            avc4: !0,
                            avcp: !0,
                            drac: !0,
                            dvav: !0,
                            dvhe: !0,
                            encv: !0,
                            hev1: !0,
                            hvc1: !0,
                            mjp2: !0,
                            mp4v: !0,
                            mvc1: !0,
                            mvc2: !0,
                            mvc3: !0,
                            mvc4: !0,
                            resv: !0,
                            rv60: !0,
                            s263: !0,
                            svc1: !0,
                            svc2: !0,
                            "vc-1": !0,
                            vp08: !0,
                            vp09: !0
                        }
                    };function A(e,
                    t){
                        return MediaSource.isTypeSupported((t||"video")+'/mp4;codecs="'+e+'"')
                    }var R=/(?:#EXT-X-STREAM-INF:([^\n\r]*)[\r\n]+([^\r\n]+)|#EXT-X-SESSION-DATA:([^\n\r]*)[\r\n]+)/g,
                    k=/#EXT-X-MEDIA:(.*)/g,
                    L=new RegExp([
                        /#EXTINF:\s*(\d*(?:\.\d+)?)(?:,(.*)\s+)?/.source,
                        /|(?!#)([\S+ ?]+)/.source,
                        /|#EXT-X-BYTERANGE:*(.+)/.source,
                        /|#EXT-X-PROGRAM-DATE-TIME:(.+)/.source,
                        /|#.*/.source
                    ].join(""),
                    "g"),
                    D=/(?:(?:#(EXTM3U))|(?:#EXT-X-(PLAYLIST-TYPE):(.+))|(?:#EXT-X-(MEDIA-SEQUENCE): *(\d+))|(?:#EXT-X-(TARGETDURATION): *(\d+))|(?:#EXT-X-(KEY):(.+))|(?:#EXT-X-(START):(.+))|(?:#EXT-X-(ENDLIST))|(?:#EXT-X-(DISCONTINUITY-SEQ)UENCE:(\d+))|(?:#EXT-X-(DIS)CONTINUITY))|(?:#EXT-X-(VERSION):(\d+))|(?:#EXT-X-(MAP):(.+))|(?:(#)([^:]*):(.*))|(?:(#)(.*))(?:.*)\r?\n?/,
                    I=/\.(mp4|m4s|m4v|m4a)$/i,
                    x=function(){
                        function e(){}return e.findGroup=function(e,
                        t){
                            for(var i=0;i<e.length;i++){
                                var r=e[
                                    i
                                ];if(r.id===t)return r
                            }
                        },
                        e.convertAVC1ToAVCOTI=function(e){
                            var t,
                            i=e.split(".");return i.length>2?(t=i.shift()+".",
                            t+=parseInt(i.shift()).toString(16),
                            t+=("000"+parseInt(i.shift()).toString(16)).substr(-4)): t=e,
                            t
                        },
                        e.resolve=function(e,
                        t){
                            return s.buildAbsoluteURL(t,
                            e,
                            {
                                alwaysNormalize: !0
                            })
                        },
                        e.parseMasterPlaylist=function(t,
                        i){
                            var r,
                            n=[],
                            a={},
                            s=!1;function o(e,
                            t){
                                [
                                    "video",
                                    "audio"
                                ].forEach((function(i){
                                    var r=e.filter((function(e){
                                        return function(e,
                                        t){
                                            var i=S[
                                                t
                                            ];return!!i&&!0===i[
                                                e.slice(0,
                                                4)
                                            ]
                                        }(e,
                                        i)
                                    }));if(r.length){
                                        var n=r.filter((function(e){
                                            return 0===e.lastIndexOf("avc1",
                                            0)||0===e.lastIndexOf("mp4a",
                                            0)
                                        }));t[
                                            i+"Codec"
                                        ]=n.length>0?n[
                                            0
                                        ]: r[
                                            0
                                        ],
                                        e=e.filter((function(e){
                                            return-1===r.indexOf(e)
                                        }))
                                    }
                                })),
                                t.unknownCodecs=e
                            }for(R.lastIndex=0;null!=(r=R.exec(t));)if(r[
                                1
                            ]){
                                var l={},
                                d=l.attrs=new w(r[
                                    1
                                ]);l.url=e.resolve(r[
                                    2
                                ],
                                i);var c=d.decimalResolution("RESOLUTION");c&&(l.width=c.width,
                                l.height=c.height),
                                l.bitrate=d.decimalInteger("AVERAGE-BANDWIDTH")||d.decimalInteger("BANDWIDTH"),
                                l.name=d.NAME,
                                o([].concat((d.CODECS||"").split(/[ ,]+/)),
                                l),
                                l.videoCodec&&-1!==l.videoCodec.indexOf("avc1")&&(l.videoCodec=e.convertAVC1ToAVCOTI(l.videoCodec)),
                                n.push(l)
                            }else if(r[
                                3
                            ]){
                                var u=new w(r[
                                    3
                                ]);u[
                                    "DATA-ID"
                                ]&&(s=!0,
                                a[
                                    u[
                                        "DATA-ID"
                                    ]
                                ]=u)
                            }return{
                                levels: n,
                                sessionData: s?a: null
                            }
                        },
                        e.parseMasterPlaylistMedia=function(t,
                        i,
                        r,
                        n){
                            var a;void 0===n&&(n=[]);var s=[],
                            o=0;for(k.lastIndex=0;null!==(a=k.exec(t));){
                                var l=new w(a[
                                    1
                                ]);if(l.TYPE===r){
                                    var d={
                                        attrs: l,
                                        id: o++,
                                        groupId: l[
                                            "GROUP-ID"
                                        ],
                                        instreamId: l[
                                            "INSTREAM-ID"
                                        ],
                                        name: l.NAME||l.LANGUAGE,
                                        type: r,
                                        default: "YES"===l.DEFAULT,
                                        autoselect: "YES"===l.AUTOSELECT,
                                        forced: "YES"===l.FORCED,
                                        lang: l.LANGUAGE
                                    };if(l.URI&&(d.url=e.resolve(l.URI,
                                    i)),
                                    n.length){
                                        var c=e.findGroup(n,
                                        d.groupId);d.audioCodec=c?c.codec: n[
                                            0
                                        ].codec
                                    }s.push(d)
                                }
                            }return s
                        },
                        e.parseLevelPlaylist=function(e,
                        t,
                        i,
                        r,
                        n){
                            var a,
                            s,
                            o,
                            d=0,
                            u=0,
                            h=new _(t),
                            f=0,
                            g=null,
                            p=new y,
                            m=null;for(L.lastIndex=0;null!==(a=L.exec(e));){
                                var b=a[
                                    1
                                ];if(b){
                                    p.duration=parseFloat(b);var T=(" "+a[
                                        2
                                    ]).slice(1);p.title=T||null,
                                    p.tagList.push(T?[
                                        "INF",
                                        b,
                                        T
                                    ]: [
                                        "INF",
                                        b
                                    ])
                                }else if(a[
                                    3
                                ]){
                                    if(Object(l.isFiniteNumber)(p.duration)){
                                        var E=d++;p.type=r,
                                        p.start=u,
                                        o&&(p.levelkey=o),
                                        p.sn=E,
                                        p.level=i,
                                        p.cc=f,
                                        p.urlId=n,
                                        p.baseurl=t,
                                        p.relurl=(" "+a[
                                            3
                                        ]).slice(1),
                                        O(p,
                                        g),
                                        h.fragments.push(p),
                                        g=p,
                                        u+=p.duration,
                                        p=new y
                                    }
                                }else if(a[
                                    4
                                ]){
                                    var S=(" "+a[
                                        4
                                    ]).slice(1);g?p.setByteRange(S,
                                    g): p.setByteRange(S)
                                }else if(a[
                                    5
                                ])p.rawProgramDateTime=(" "+a[
                                    5
                                ]).slice(1),
                                p.tagList.push([
                                    "PROGRAM-DATE-TIME",
                                    p.rawProgramDateTime
                                ]),
                                null===m&&(m=h.fragments.length);else{
                                    if(!(a=a[
                                        0
                                    ].match(D))){
                                        c.logger.warn("No matches on slow regex match for level playlist!");continue
                                    }for(s=1;s<a.length&&void 0===a[
                                        s
                                    ];s++);var A=(" "+a[
                                        s+1
                                    ]).slice(1),
                                    R=(" "+a[
                                        s+2
                                    ]).slice(1);switch(a[
                                        s
                                    ]){
                                        case"#": p.tagList.push(R?[
                                            A,
                                            R
                                        ]: [
                                            A
                                        ]);break;case "PLAYLIST-TYPE": h.type=A.toUpperCase();break;case "MEDIA-SEQUENCE": d=h.startSN=parseInt(A);break;case "TARGETDURATION": h.targetduration=parseFloat(A);break;case "VERSION": h.version=parseInt(A);break;case "EXTM3U": break;case "ENDLIST": h.live=!1;break;case "DIS": f++,
                                        p.tagList.push([
                                            "DIS"
                                        ]);break;case "DISCONTINUITY-SEQ": f=parseInt(A);break;case "KEY": var k=new w(A),
                                        x=k.enumeratedString("METHOD"),
                                        C=k.URI,
                                        P=k.hexadecimalInteger("IV");if("com.apple.streamingkeydelivery"===(k.KEYFORMAT||"identity")){
                                            c.logger.warn("Keyformat com.apple.streamingkeydelivery is not supported");continue
                                        }x&&(o=new v(t,
                                        C),
                                        C&&[
                                            "AES-128",
                                            "SAMPLE-AES",
                                            "SAMPLE-AES-CENC"
                                        ].indexOf(x)>=0&&(o.method=x,
                                        o.key=null,
                                        o.iv=P));break;case "START": var M=new w(A).decimalFloatingPoint("TIME-OFFSET");Object(l.isFiniteNumber)(M)&&(h.startTimeOffset=M);break;case "MAP": var F=new w(A);p.relurl=F.URI,
                                        F.BYTERANGE&&p.setByteRange(F.BYTERANGE),
                                        p.baseurl=t,
                                        p.level=i,
                                        p.type=r,
                                        p.sn="initSegment",
                                        h.initSegment=p,
                                        (p=new y).rawProgramDateTime=h.initSegment.rawProgramDateTime;break;default: c.logger.warn("line parsed but not handled: "+a)
                                    }
                                }
                            }return(p=g)&&!p.relurl&&(h.fragments.pop(),
                            u-=p.duration),
                            h.totalduration=u,
                            h.averagetargetduration=u/h.fragments.length,
                            h.endSN=d-1,
                            h.startCC=h.fragments[
                                0
                            ]?h.fragments[
                                0
                            ].cc: 0,
                            h.endCC=f,
                            !h.initSegment&&h.fragments.length&&h.fragments.every((function(e){
                                return I.test(e.relurl)
                            }))&&(c.logger.warn("MP4 fragments found but no init segment (probably no MAP, incomplete M3U8), trying to fetch SIDX"),
                            (p=new y).relurl=h.fragments[
                                0
                            ].relurl,
                            p.baseurl=t,
                            p.level=i,
                            p.type=r,
                            p.sn="initSegment",
                            h.initSegment=p,
                            h.needSidxRanges=!0),
                            m&&function(e,
                            t){
                                for(var i=e[
                                    t
                                ],
                                r=t-1;r>=0;r--){
                                    var n=e[
                                        r
                                    ];n.programDateTime=i.programDateTime-1e3*n.duration,
                                    i=n
                                }
                            }(h.fragments,
                            m),
                            h
                        },
                        e
                    }();function O(e,
                    t){
                        e.rawProgramDateTime?e.programDateTime=Date.parse(e.rawProgramDateTime): (null==t?void 0: t.programDateTime)&&(e.programDateTime=t.endProgramDateTime),
                        Object(l.isFiniteNumber)(e.programDateTime)||(e.programDateTime=null,
                        e.rawProgramDateTime=null)
                    }var C=window.performance,
                    P=function(e){
                        var t,
                        i;function r(t){
                            var i;return(i=e.call(this,
                            t,
                            d.default.MANIFEST_LOADING,
                            d.default.LEVEL_LOADING,
                            d.default.AUDIO_TRACK_LOADING,
                            d.default.SUBTITLE_TRACK_LOADING)||this).loaders={},
                            i
                        }i=e,
                        (t=r).prototype=Object.create(i.prototype),
                        t.prototype.constructor=t,
                        t.__proto__=i,
                        r.canHaveQualityLevels=function(e){
                            return e!==n.AUDIO_TRACK&&e!==n.SUBTITLE_TRACK
                        },
                        r.mapContextToLevelType=function(e){
                            switch(e.type){
                                case n.AUDIO_TRACK: return a.AUDIO;case n.SUBTITLE_TRACK: return a.SUBTITLE;default: return a.MAIN
                            }
                        },
                        r.getResponseUrl=function(e,
                        t){
                            var i=e.url;return void 0!==i&&0!==i.indexOf("data:")||(i=t.url),
                            i
                        };var s=r.prototype;return s.createInternalLoader=function(e){
                            var t=this.hls.config,
                            i=t.pLoader,
                            r=t.loader,
                            n=new(i||r)(t);return e.loader=n,
                            this.loaders[
                                e.type
                            ]=n,
                            n
                        },
                        s.getInternalLoader=function(e){
                            return this.loaders[
                                e.type
                            ]
                        },
                        s.resetInternalLoader=function(e){
                            this.loaders[
                                e
                            ]&&delete this.loaders[
                                e
                            ]
                        },
                        s.destroyInternalLoaders=function(){
                            for(var e in this.loaders){
                                var t=this.loaders[
                                    e
                                ];t&&t.destroy(),
                                this.resetInternalLoader(e)
                            }
                        },
                        s.destroy=function(){
                            this.destroyInternalLoaders(),
                            e.prototype.destroy.call(this)
                        },
                        s.onManifestLoading=function(e){
                            this.load({
                                url: e.url,
                                type: n.MANIFEST,
                                level: 0,
                                id: null,
                                responseType: "text"
                            })
                        },
                        s.onLevelLoading=function(e){
                            this.load({
                                url: e.url,
                                type: n.LEVEL,
                                level: e.level,
                                id: e.id,
                                responseType: "text"
                            })
                        },
                        s.onAudioTrackLoading=function(e){
                            this.load({
                                url: e.url,
                                type: n.AUDIO_TRACK,
                                level: null,
                                id: e.id,
                                responseType: "text"
                            })
                        },
                        s.onSubtitleTrackLoading=function(e){
                            this.load({
                                url: e.url,
                                type: n.SUBTITLE_TRACK,
                                level: null,
                                id: e.id,
                                responseType: "text"
                            })
                        },
                        s.load=function(e){
                            var t=this.hls.config;c.logger.debug("Loading playlist of type "+e.type+", level: "+e.level+", id: "+e.id);var i,
                            r,
                            a,
                            s,
                            o=this.getInternalLoader(e);if(o){
                                var l=o.context;if(l&&l.url===e.url)return c.logger.trace("playlist request ongoing"),
                                !1;c.logger.warn("aborting previous loader for type: "+e.type),
                                o.abort()
                            }switch(e.type){
                                case n.MANIFEST: i=t.manifestLoadingMaxRetry,
                                r=t.manifestLoadingTimeOut,
                                a=t.manifestLoadingRetryDelay,
                                s=t.manifestLoadingMaxRetryTimeout;break;case n.LEVEL: i=0,
                                s=0,
                                a=0,
                                r=t.levelLoadingTimeOut;break;default: i=t.levelLoadingMaxRetry,
                                r=t.levelLoadingTimeOut,
                                a=t.levelLoadingRetryDelay,
                                s=t.levelLoadingMaxRetryTimeout
                            }o=this.createInternalLoader(e);var d={
                                timeout: r,
                                maxRetry: i,
                                retryDelay: a,
                                maxRetryDelay: s
                            },
                            u={
                                onSuccess: this.loadsuccess.bind(this),
                                onError: this.loaderror.bind(this),
                                onTimeout: this.loadtimeout.bind(this)
                            };return c.logger.debug("Calling internal loader delegate for URL: "+e.url),
                            o.load(e,
                            d,
                            u),
                            !0
                        },
                        s.loadsuccess=function(e,
                        t,
                        i,
                        r){
                            if(void 0===r&&(r=null),
                            i.isSidxRequest)return this._handleSidxRequest(e,
                            i),
                            void this._handlePlaylistLoaded(e,
                            t,
                            i,
                            r);if(this.resetInternalLoader(i.type),
                            "string"!=typeof e.data)throw new Error('expected responseType of "text" for PlaylistLoader');var n=e.data;t.tload=C.now(),
                            0===n.indexOf("#EXTM3U")?n.indexOf("#EXTINF:")>0||n.indexOf("#EXT-X-TARGETDURATION:")>0?this._handleTrackOrLevelPlaylist(e,
                            t,
                            i,
                            r): this._handleMasterPlaylist(e,
                            t,
                            i,
                            r): this._handleManifestParsingError(e,
                            i,
                            "no EXTM3U delimiter",
                            r)
                        },
                        s.loaderror=function(e,
                        t,
                        i){
                            void 0===i&&(i=null),
                            this._handleNetworkError(t,
                            i,
                            !1,
                            e)
                        },
                        s.loadtimeout=function(e,
                        t,
                        i){
                            void 0===i&&(i=null),
                            this._handleNetworkError(t,
                            i,
                            !0)
                        },
                        s._handleMasterPlaylist=function(e,
                        t,
                        i,
                        n){
                            var a=this.hls,
                            s=e.data,
                            o=r.getResponseUrl(e,
                            i),
                            l=x.parseMasterPlaylist(s,
                            o),
                            u=l.levels,
                            h=l.sessionData;if(u.length){
                                var f=u.map((function(e){
                                    return{
                                        id: e.attrs.AUDIO,
                                        codec: e.audioCodec
                                    }
                                })),
                                g=x.parseMasterPlaylistMedia(s,
                                o,
                                "AUDIO",
                                f),
                                p=x.parseMasterPlaylistMedia(s,
                                o,
                                "SUBTITLES"),
                                v=x.parseMasterPlaylistMedia(s,
                                o,
                                "CLOSED-CAPTIONS");if(g.length){
                                    var m=!1;g.forEach((function(e){
                                        e.url||(m=!0)
                                    })),
                                    !1===m&&u[
                                        0
                                    ].audioCodec&&!u[
                                        0
                                    ].attrs.AUDIO&&(c.logger.log("audio codec signaled in quality level, but no embedded audio track signaled, create one"),
                                    g.unshift({
                                        type: "main",
                                        name: "main",
                                        default: !1,
                                        autoselect: !1,
                                        forced: !1,
                                        id: -1,
                                        attrs: {},
                                        url: ""
                                    }))
                                }a.trigger(d.default.MANIFEST_LOADED,
                                {
                                    levels: u,
                                    audioTracks: g,
                                    subtitles: p,
                                    captions: v,
                                    url: o,
                                    stats: t,
                                    networkDetails: n,
                                    sessionData: h
                                })
                            }else this._handleManifestParsingError(e,
                            i,
                            "no level found in manifest",
                            n)
                        },
                        s._handleTrackOrLevelPlaylist=function(e,
                        t,
                        i,
                        a){
                            var s=this.hls,
                            c=i.id,
                            u=i.level,
                            h=i.type,
                            f=r.getResponseUrl(e,
                            i),
                            g=Object(l.isFiniteNumber)(c)?c: 0,
                            p=Object(l.isFiniteNumber)(u)?u: g,
                            v=r.mapContextToLevelType(i),
                            m=x.parseLevelPlaylist(e.data,
                            f,
                            p,
                            v,
                            g);if(m.tload=t.tload,
                            m.fragments.length){
                                if(h===n.MANIFEST){
                                    var y={
                                        url: f,
                                        details: m
                                    };s.trigger(d.default.MANIFEST_LOADED,
                                    {
                                        levels: [
                                            y
                                        ],
                                        audioTracks: [],
                                        url: f,
                                        stats: t,
                                        networkDetails: a,
                                        sessionData: null
                                    })
                                }if(t.tparsed=C.now(),
                                m.needSidxRanges){
                                    var b=m.initSegment.url;this.load({
                                        url: b,
                                        isSidxRequest: !0,
                                        type: h,
                                        level: u,
                                        levelDetails: m,
                                        id: c,
                                        rangeStart: 0,
                                        rangeEnd: 2048,
                                        responseType: "arraybuffer"
                                    })
                                }else i.levelDetails=m,
                                this._handlePlaylistLoaded(e,
                                t,
                                i,
                                a)
                            }else s.trigger(d.default.ERROR,
                            {
                                type: o.ErrorTypes.NETWORK_ERROR,
                                details: o.ErrorDetails.LEVEL_EMPTY_ERROR,
                                fatal: !1,
                                url: f,
                                reason: "no fragments found in level",
                                level: "number"==typeof i.level?i.level: void 0
                            })
                        },
                        s._handleSidxRequest=function(e,
                        t){
                            if("string"==typeof e.data)throw new Error("sidx request must be made with responseType of array buffer");var i=f.default.parseSegmentIndex(new Uint8Array(e.data));if(i){
                                var r=i.references,
                                n=t.levelDetails;r.forEach((function(e,
                                t){
                                    var i=e.info;if(n){
                                        var r=n.fragments[
                                            t
                                        ];0===r.byteRange.length&&r.setByteRange(String(1+i.end-i.start)+"@"+String(i.start))
                                    }
                                })),
                                n&&n.initSegment.setByteRange(String(i.moovEndOffset)+"@0")
                            }
                        },
                        s._handleManifestParsingError=function(e,
                        t,
                        i,
                        r){
                            this.hls.trigger(d.default.ERROR,
                            {
                                type: o.ErrorTypes.NETWORK_ERROR,
                                details: o.ErrorDetails.MANIFEST_PARSING_ERROR,
                                fatal: !0,
                                url: e.url,
                                reason: i,
                                networkDetails: r
                            })
                        },
                        s._handleNetworkError=function(e,
                        t,
                        i,
                        r){
                            var a,
                            s;void 0===i&&(i=!1),
                            void 0===r&&(r=null),
                            c.logger.info("A network error occured while loading a "+e.type+"-type playlist");var l=this.getInternalLoader(e);switch(e.type){
                                case n.MANIFEST: a=i?o.ErrorDetails.MANIFEST_LOAD_TIMEOUT: o.ErrorDetails.MANIFEST_LOAD_ERROR,
                                s=!0;break;case n.LEVEL: a=i?o.ErrorDetails.LEVEL_LOAD_TIMEOUT: o.ErrorDetails.LEVEL_LOAD_ERROR,
                                s=!1;break;case n.AUDIO_TRACK: a=i?o.ErrorDetails.AUDIO_TRACK_LOAD_TIMEOUT: o.ErrorDetails.AUDIO_TRACK_LOAD_ERROR,
                                s=!1;break;default: s=!1
                            }l&&(l.abort(),
                            this.resetInternalLoader(e.type));var u={
                                type: o.ErrorTypes.NETWORK_ERROR,
                                details: a,
                                fatal: s,
                                url: e.url,
                                loader: l,
                                context: e,
                                networkDetails: t
                            };r&&(u.response=r),
                            this.hls.trigger(d.default.ERROR,
                            u)
                        },
                        s._handlePlaylistLoaded=function(e,
                        t,
                        i,
                        a){
                            var s=i.type,
                            o=i.level,
                            l=i.id,
                            c=i.levelDetails;if(c&&c.targetduration)if(r.canHaveQualityLevels(i.type))this.hls.trigger(d.default.LEVEL_LOADED,
                            {
                                details: c,
                                level: o||0,
                                id: l||0,
                                stats: t,
                                networkDetails: a
                            });else switch(s){
                                case n.AUDIO_TRACK: this.hls.trigger(d.default.AUDIO_TRACK_LOADED,
                                {
                                    details: c,
                                    id: l,
                                    stats: t,
                                    networkDetails: a
                                });break;case n.SUBTITLE_TRACK: this.hls.trigger(d.default.SUBTITLE_TRACK_LOADED,
                                {
                                    details: c,
                                    id: l,
                                    stats: t,
                                    networkDetails: a
                                })
                            }else this._handleManifestParsingError(e,
                            i,
                            "invalid target duration",
                            a)
                        },
                        r
                    }(h),
                    M=function(e){
                        var t,
                        i;function r(t){
                            var i;return(i=e.call(this,
                            t,
                            d.default.FRAG_LOADING)||this).loaders={},
                            i
                        }i=e,
                        (t=r).prototype=Object.create(i.prototype),
                        t.prototype.constructor=t,
                        t.__proto__=i;var n=r.prototype;return n.destroy=function(){
                            var t=this.loaders;for(var i in t){
                                var r=t[
                                    i
                                ];r&&r.destroy()
                            }this.loaders={},
                            e.prototype.destroy.call(this)
                        },
                        n.onFragLoading=function(e){
                            var t=e.frag,
                            i=t.type,
                            r=this.loaders,
                            n=this.hls.config,
                            a=n.fLoader,
                            s=n.loader;t.loaded=0;var o,
                            d,
                            u,
                            h=r[
                                i
                            ];h&&(c.logger.warn("abort previous fragment loader for type: "+i),
                            h.abort()),
                            h=r[
                                i
                            ]=t.loader=n.fLoader?new a(n): new s(n),
                            o={
                                url: t.url,
                                frag: t,
                                responseType: "arraybuffer",
                                progressData: !1
                            };var f=t.byteRangeStartOffset,
                            g=t.byteRangeEndOffset;Object(l.isFiniteNumber)(f)&&Object(l.isFiniteNumber)(g)&&(o.rangeStart=f,
                            o.rangeEnd=g),
                            d={
                                timeout: n.fragLoadingTimeOut,
                                maxRetry: 0,
                                retryDelay: 0,
                                maxRetryDelay: n.fragLoadingMaxRetryTimeout
                            },
                            u={
                                onSuccess: this.loadsuccess.bind(this),
                                onError: this.loaderror.bind(this),
                                onTimeout: this.loadtimeout.bind(this),
                                onProgress: this.loadprogress.bind(this)
                            },
                            h.load(o,
                            d,
                            u)
                        },
                        n.loadsuccess=function(e,
                        t,
                        i,
                        r){
                            void 0===r&&(r=null);var n=e.data,
                            a=i.frag;a.loader=void 0,
                            this.loaders[
                                a.type
                            ]=void 0,
                            this.hls.trigger(d.default.FRAG_LOADED,
                            {
                                payload: n,
                                frag: a,
                                stats: t,
                                networkDetails: r
                            })
                        },
                        n.loaderror=function(e,
                        t,
                        i){
                            void 0===i&&(i=null);var r=t.frag,
                            n=r.loader;n&&n.abort(),
                            this.loaders[
                                r.type
                            ]=void 0,
                            this.hls.trigger(d.default.ERROR,
                            {
                                type: o.ErrorTypes.NETWORK_ERROR,
                                details: o.ErrorDetails.FRAG_LOAD_ERROR,
                                fatal: !1,
                                frag: t.frag,
                                response: e,
                                networkDetails: i
                            })
                        },
                        n.loadtimeout=function(e,
                        t,
                        i){
                            void 0===i&&(i=null);var r=t.frag,
                            n=r.loader;n&&n.abort(),
                            this.loaders[
                                r.type
                            ]=void 0,
                            this.hls.trigger(d.default.ERROR,
                            {
                                type: o.ErrorTypes.NETWORK_ERROR,
                                details: o.ErrorDetails.FRAG_LOAD_TIMEOUT,
                                fatal: !1,
                                frag: t.frag,
                                networkDetails: i
                            })
                        },
                        n.loadprogress=function(e,
                        t,
                        i,
                        r){
                            void 0===r&&(r=null);var n=t.frag;n.loaded=e.loaded,
                            this.hls.trigger(d.default.FRAG_LOAD_PROGRESS,
                            {
                                frag: n,
                                stats: e,
                                networkDetails: r
                            })
                        },
                        r
                    }(h),
                    F=function(e){
                        var t,
                        i;function r(t){
                            var i;return(i=e.call(this,
                            t,
                            d.default.KEY_LOADING)||this).loaders={},
                            i.decryptkey=null,
                            i.decrypturl=null,
                            i
                        }i=e,
                        (t=r).prototype=Object.create(i.prototype),
                        t.prototype.constructor=t,
                        t.__proto__=i;var n=r.prototype;return n.destroy=function(){
                            for(var t in this.loaders){
                                var i=this.loaders[
                                    t
                                ];i&&i.destroy()
                            }this.loaders={},
                            e.prototype.destroy.call(this)
                        },
                        n.onKeyLoading=function(e){
                            var t=e.frag,
                            i=t.type,
                            r=this.loaders[
                                i
                            ];if(t.decryptdata){
                                var n=t.decryptdata.uri;if(n!==this.decrypturl||null===this.decryptkey){
                                    var a=this.hls.config;if(r&&(c.logger.warn("abort previous key loader for type:"+i),
                                    r.abort()),
                                    !n)return void c.logger.warn("key uri is falsy");t.loader=this.loaders[
                                        i
                                    ]=new a.loader(a),
                                    this.decrypturl=n,
                                    this.decryptkey=null;var s={
                                        url: n,
                                        frag: t,
                                        responseType: "arraybuffer"
                                    },
                                    o={
                                        timeout: a.fragLoadingTimeOut,
                                        maxRetry: 0,
                                        retryDelay: a.fragLoadingRetryDelay,
                                        maxRetryDelay: a.fragLoadingMaxRetryTimeout
                                    },
                                    l={
                                        onSuccess: this.loadsuccess.bind(this),
                                        onError: this.loaderror.bind(this),
                                        onTimeout: this.loadtimeout.bind(this)
                                    };t.loader.load(s,
                                    o,
                                    l)
                                }else this.decryptkey&&(t.decryptdata.key=this.decryptkey,
                                this.hls.trigger(d.default.KEY_LOADED,
                                {
                                    frag: t
                                }))
                            }else c.logger.warn("Missing decryption data on fragment in onKeyLoading")
                        },
                        n.loadsuccess=function(e,
                        t,
                        i){
                            var r=i.frag;r.decryptdata?(this.decryptkey=r.decryptdata.key=new Uint8Array(e.data),
                            r.loader=void 0,
                            delete this.loaders[
                                r.type
                            ],
                            this.hls.trigger(d.default.KEY_LOADED,
                            {
                                frag: r
                            })): c.logger.error("after key load, decryptdata unset")
                        },
                        n.loaderror=function(e,
                        t){
                            var i=t.frag,
                            r=i.loader;r&&r.abort(),
                            delete this.loaders[
                                i.type
                            ],
                            this.hls.trigger(d.default.ERROR,
                            {
                                type: o.ErrorTypes.NETWORK_ERROR,
                                details: o.ErrorDetails.KEY_LOAD_ERROR,
                                fatal: !1,
                                frag: i,
                                response: e
                            })
                        },
                        n.loadtimeout=function(e,
                        t){
                            var i=t.frag,
                            r=i.loader;r&&r.abort(),
                            delete this.loaders[
                                i.type
                            ],
                            this.hls.trigger(d.default.ERROR,
                            {
                                type: o.ErrorTypes.NETWORK_ERROR,
                                details: o.ErrorDetails.KEY_LOAD_TIMEOUT,
                                fatal: !1,
                                frag: i
                            })
                        },
                        r
                    }(h),
                    N="NOT_LOADED",
                    U="APPENDING",
                    B="PARTIAL",
                    G="OK",
                    j=function(e){
                        var t,
                        i;function r(t){
                            var i;return(i=e.call(this,
                            t,
                            d.default.BUFFER_APPENDED,
                            d.default.FRAG_BUFFERED,
                            d.default.FRAG_LOADED)||this).bufferPadding=.2,
                            i.fragments=Object.create(null),
                            i.timeRanges=Object.create(null),
                            i.config=t.config,
                            i
                        }i=e,
                        (t=r).prototype=Object.create(i.prototype),
                        t.prototype.constructor=t,
                        t.__proto__=i;var n=r.prototype;return n.destroy=function(){
                            this.fragments=Object.create(null),
                            this.timeRanges=Object.create(null),
                            this.config=null,
                            h.prototype.destroy.call(this),
                            e.prototype.destroy.call(this)
                        },
                        n.getBufferedFrag=function(e,
                        t){
                            var i=this.fragments,
                            r=Object.keys(i).filter((function(r){
                                var n=i[
                                    r
                                ];if(n.body.type!==t)return!1;if(!n.buffered)return!1;var a=n.body;return a.startPTS<=e&&e<=a.endPTS
                            }));if(0===r.length)return null;var n=r.pop();return i[
                                n
                            ].body
                        },
                        n.detectEvictedFragments=function(e,
                        t){
                            var i=this;Object.keys(this.fragments).forEach((function(r){
                                var n=i.fragments[
                                    r
                                ];if(n&&n.buffered){
                                    var a=n.range[
                                        e
                                    ];if(a)for(var s=a.time,
                                    o=0;o<s.length;o++){
                                        var l=s[
                                            o
                                        ];if(!i.isTimeBuffered(l.startPTS,
                                        l.endPTS,
                                        t)){
                                            i.removeFragment(n.body);break
                                        }
                                    }
                                }
                            }))
                        },
                        n.detectPartialFragments=function(e){
                            var t=this,
                            i=this.getFragmentKey(e),
                            r=this.fragments[
                                i
                            ];r&&(r.buffered=!0,
                            Object.keys(this.timeRanges).forEach((function(i){
                                if(e.hasElementaryStream(i)){
                                    var n=t.timeRanges[
                                        i
                                    ];r.range[
                                        i
                                    ]=t.getBufferedTimes(e.startPTS,
                                    e.endPTS,
                                    n)
                                }
                            })))
                        },
                        n.getBufferedTimes=function(e,
                        t,
                        i){
                            for(var r,
                            n,
                            a=[],
                            s=!1,
                            o=0;o<i.length;o++){
                                if(r=i.start(o)-this.bufferPadding,
                                n=i.end(o)+this.bufferPadding,
                                e>=r&&t<=n){
                                    a.push({
                                        startPTS: Math.max(e,
                                        i.start(o)),
                                        endPTS: Math.min(t,
                                        i.end(o))
                                    });break
                                }if(e<n&&t>r)a.push({
                                    startPTS: Math.max(e,
                                    i.start(o)),
                                    endPTS: Math.min(t,
                                    i.end(o))
                                }),
                                s=!0;else if(t<=r)break
                            }return{
                                time: a,
                                partial: s
                            }
                        },
                        n.getFragmentKey=function(e){
                            return e.type+"_"+e.level+"_"+e.urlId+"_"+e.sn
                        },
                        n.getPartialFragment=function(e){
                            var t,
                            i,
                            r,
                            n=this,
                            a=null,
                            s=0;return Object.keys(this.fragments).forEach((function(o){
                                var l=n.fragments[
                                    o
                                ];n.isPartial(l)&&(i=l.body.startPTS-n.bufferPadding,
                                r=l.body.endPTS+n.bufferPadding,
                                e>=i&&e<=r&&(t=Math.min(e-i,
                                r-e),
                                s<=t&&(a=l.body,
                                s=t)))
                            })),
                            a
                        },
                        n.getState=function(e){
                            var t=this.getFragmentKey(e),
                            i=this.fragments[
                                t
                            ],
                            r=N;return void 0!==i&&(r=i.buffered?!0===this.isPartial(i)?B: G: U),
                            r
                        },
                        n.isPartial=function(e){
                            return!0===e.buffered&&(void 0!==e.range.video&&!0===e.range.video.partial||void 0!==e.range.audio&&!0===e.range.audio.partial)
                        },
                        n.isTimeBuffered=function(e,
                        t,
                        i){
                            for(var r,
                            n,
                            a=0;a<i.length;a++){
                                if(r=i.start(a)-this.bufferPadding,
                                n=i.end(a)+this.bufferPadding,
                                e>=r&&t<=n)return!0;if(t<=r)return!1
                            }return!1
                        },
                        n.onFragLoaded=function(e){
                            var t=e.frag;Object(l.isFiniteNumber)(t.sn)&&!t.bitrateTest&&(this.fragments[
                                this.getFragmentKey(t)
                            ]={
                                body: t,
                                range: Object.create(null),
                                buffered: !1
                            })
                        },
                        n.onBufferAppended=function(e){
                            var t=this;this.timeRanges=e.timeRanges,
                            Object.keys(this.timeRanges).forEach((function(e){
                                var i=t.timeRanges[
                                    e
                                ];t.detectEvictedFragments(e,
                                i)
                            }))
                        },
                        n.onFragBuffered=function(e){
                            this.detectPartialFragments(e.frag)
                        },
                        n.hasFragment=function(e){
                            var t=this.getFragmentKey(e);return void 0!==this.fragments[
                                t
                            ]
                        },
                        n.removeFragment=function(e){
                            var t=this.getFragmentKey(e);delete this.fragments[
                                t
                            ]
                        },
                        n.removeAllFragments=function(){
                            this.fragments=Object.create(null)
                        },
                        r
                    }(h),
                    $={
                        search: function(e,
                        t){
                            for(var i=0,
                            r=e.length-1,
                            n=null,
                            a=null;i<=r;){
                                var s=t(a=e[
                                    n=(i+r)/2|0
                                ]);if(s>0)i=n+1;else{
                                    if(!(s<0))return a;r=n-1
                                }
                            }return null
                        }
                    },
                    K=function(){
                        function e(){}return e.isBuffered=function(e,
                        t){
                            try{
                                if(e)for(var i=e.buffered,
                                r=0;r<i.length;r++)if(t>=i.start(r)&&t<=i.end(r))return!0
                            }catch(e){}return!1
                        },
                        e.bufferInfo=function(e,
                        t,
                        i){
                            try{
                                if(e){
                                    var r,
                                    n=e.buffered,
                                    a=[];for(r=0;r<n.length;r++)a.push({
                                        start: n.start(r),
                                        end: n.end(r)
                                    });return this.bufferedInfo(a,
                                    t,
                                    i)
                                }
                            }catch(e){}return{
                                len: 0,
                                start: t,
                                end: t,
                                nextStart: void 0
                            }
                        },
                        e.bufferedInfo=function(e,
                        t,
                        i){
                            e.sort((function(e,
                            t){
                                var i=e.start-t.start;return i||t.end-e.end
                            }));var r=[];if(i)for(var n=0;n<e.length;n++){
                                var a=r.length;if(a){
                                    var s=r[
                                        a-1
                                    ].end;e[
                                        n
                                    ].start-s<i?e[
                                        n
                                    ].end>s&&(r[
                                        a-1
                                    ].end=e[
                                        n
                                    ].end): r.push(e[
                                        n
                                    ])
                                }else r.push(e[
                                    n
                                ])
                            }else r=e;for(var o,
                            l=0,
                            d=t,
                            c=t,
                            u=0;u<r.length;u++){
                                var h=r[
                                    u
                                ].start,
                                f=r[
                                    u
                                ].end;if(t+i>=h&&t<f)d=h,
                                l=(c=f)-t;else if(t+i<h){
                                    o=h;break
                                }
                            }return{
                                len: l,
                                start: d,
                                end: c,
                                nextStart: o
                            }
                        },
                        e
                    }(),
                    H=i("./node_modules/eventemitter3/index.js"),
                    V=i("./node_modules/webworkify-webpack/index.js"),
                    W=i("./src/demux/demuxer-inline.js");function Y(){
                        return window.MediaSource||window.WebKitMediaSource
                    }var z=i("./src/utils/get-self-scope.js"),
                    q=function(e){
                        var t,
                        i;function r(){
                            return e.apply(this,
                            arguments)||this
                        }return i=e,
                        (t=r).prototype=Object.create(i.prototype),
                        t.prototype.constructor=t,
                        t.__proto__=i,
                        r.prototype.trigger=function(e){
                            for(var t=arguments.length,
                            i=new Array(t>1?t-1: 0),
                            r=1;r<t;r++)i[
                                r-1
                            ]=arguments[
                                r
                            ];this.emit.apply(this,
                            [
                                e,
                                e
                            ].concat(i))
                        },
                        r
                    }(H.EventEmitter),
                    X=Object(z.getSelfScope)(),
                    Q=Y()||{
                        isTypeSupported: function(){
                            return!1
                        }
                    },
                    J=function(){
                        function e(e,
                        t){
                            var i=this;this.hls=e,
                            this.id=t;var r=this.observer=new q,
                            n=e.config,
                            a=function(t,
                            r){
                                (r=r||{}).frag=i.frag,
                                r.id=i.id,
                                e.trigger(t,
                                r)
                            };r.on(d.default.FRAG_DECRYPTED,
                            a),
                            r.on(d.default.FRAG_PARSING_INIT_SEGMENT,
                            a),
                            r.on(d.default.FRAG_PARSING_DATA,
                            a),
                            r.on(d.default.FRAG_PARSED,
                            a),
                            r.on(d.default.ERROR,
                            a),
                            r.on(d.default.FRAG_PARSING_METADATA,
                            a),
                            r.on(d.default.FRAG_PARSING_USERDATA,
                            a),
                            r.on(d.default.INIT_PTS_FOUND,
                            a);var s={
                                mp4: Q.isTypeSupported("video/mp4"),
                                mpeg: Q.isTypeSupported("audio/mpeg"),
                                mp3: Q.isTypeSupported('audio/mp4; codecs="mp3"')
                            },
                            l=navigator.vendor;if(n.enableWorker&&"undefined"!=typeof Worker){
                                var u;c.logger.log("demuxing in webworker");try{
                                    u=this.w=V(/*! ../demux/demuxer-worker.js */"./src/demux/demuxer-worker.js"),
                                    this.onwmsg=this.onWorkerMessage.bind(this),
                                    u.addEventListener("message",
                                    this.onwmsg),
                                    u.onerror=function(t){
                                        e.trigger(d.default.ERROR,
                                        {
                                            type: o.ErrorTypes.OTHER_ERROR,
                                            details: o.ErrorDetails.INTERNAL_EXCEPTION,
                                            fatal: !0,
                                            event: "demuxerWorker",
                                            err: {
                                                message: t.message+" ("+t.filename+":"+t.lineno+")"
                                            }
                                        })
                                    },
                                    u.postMessage({
                                        cmd: "init",
                                        typeSupported: s,
                                        vendor: l,
                                        id: t,
                                        config: JSON.stringify(n)
                                    })
                                }catch(e){
                                    c.logger.warn("Error in worker:",
                                    e),
                                    c.logger.error("Error while initializing DemuxerWorker, fallback on DemuxerInline"),
                                    u&&X.URL.revokeObjectURL(u.objectURL),
                                    this.demuxer=new W.default(r,
                                    s,
                                    n,
                                    l),
                                    this.w=void 0
                                }
                            }else this.demuxer=new W.default(r,
                            s,
                            n,
                            l)
                        }var t=e.prototype;return t.destroy=function(){
                            var e=this.w;if(e)e.removeEventListener("message",
                            this.onwmsg),
                            e.terminate(),
                            this.w=null;else{
                                var t=this.demuxer;t&&(t.destroy(),
                                this.demuxer=null)
                            }var i=this.observer;i&&(i.removeAllListeners(),
                            this.observer=null)
                        },
                        t.push=function(e,
                        t,
                        i,
                        r,
                        n,
                        a,
                        s,
                        o){
                            var d=this.w,
                            u=Object(l.isFiniteNumber)(n.startPTS)?n.startPTS: n.start,
                            h=n.decryptdata,
                            f=this.frag,
                            g=!(f&&n.cc===f.cc),
                            p=!(f&&n.level===f.level),
                            v=f&&n.sn===f.sn+1,
                            m=!p&&v;if(g&&c.logger.log(this.id+":discontinuity detected"),
                            p&&c.logger.log(this.id+":switch detected"),
                            this.frag=n,
                            d)d.postMessage({
                                cmd: "demux",
                                data: e,
                                decryptdata: h,
                                initSegment: t,
                                audioCodec: i,
                                videoCodec: r,
                                timeOffset: u,
                                discontinuity: g,
                                trackSwitch: p,
                                contiguous: m,
                                duration: a,
                                accurateTimeOffset: s,
                                defaultInitPTS: o
                            },
                            e instanceof ArrayBuffer?[
                                e
                            ]: []);else{
                                var y=this.demuxer;y&&y.push(e,
                                h,
                                t,
                                i,
                                r,
                                u,
                                g,
                                p,
                                m,
                                a,
                                s,
                                o)
                            }
                        },
                        t.onWorkerMessage=function(e){
                            var t=e.data,
                            i=this.hls;switch(t.event){
                                case "init": X.URL.revokeObjectURL(this.w.objectURL);break;case d.default.FRAG_PARSING_DATA: t.data.data1=new Uint8Array(t.data1),
                                t.data2&&(t.data.data2=new Uint8Array(t.data2));default: t.data=t.data||{},
                                t.data.frag=this.frag,
                                t.data.id=this.id,
                                i.trigger(t.event,
                                t.data)
                            }
                        },
                        e
                    }();function Z(e,
                    t,
                    i){
                        switch(t){
                            case "audio": e.audioGroupIds||(e.audioGroupIds=[]),
                            e.audioGroupIds.push(i);break;case "text": e.textGroupIds||(e.textGroupIds=[]),
                            e.textGroupIds.push(i)
                        }
                    }function ee(e,
                    t,
                    i){
                        var r=e[
                            t
                        ],
                        n=e[
                            i
                        ],
                        a=n.startPTS;if(Object(l.isFiniteNumber)(a))i>t?(r.duration=a-r.start,
                        r.duration<0&&c.logger.warn("negative duration computed for frag "+r.sn+",level "+r.level+", there should be some duration drift between playlist and fragment!")): (n.duration=r.start-a,
                        n.duration<0&&c.logger.warn("negative duration computed for frag "+n.sn+",level "+n.level+", there should be some duration drift between playlist and fragment!"));else if(i>t){
                            var s=r.cc===n.cc;n.start=r.start+(s&&r.minEndPTS?r.minEndPTS-r.start: r.duration)
                        }else n.start=Math.max(r.start-n.duration,
                        0)
                    }function te(e,
                    t,
                    i,
                    r,
                    n,
                    a){
                        var s=i,
                        o=r;if(Object(l.isFiniteNumber)(t.startPTS)){
                            var d=Math.abs(t.startPTS-i);Object(l.isFiniteNumber)(t.deltaPTS)?t.deltaPTS=Math.max(d,
                            t.deltaPTS): t.deltaPTS=d,
                            s=Math.max(i,
                            t.startPTS),
                            i=Math.min(i,
                            t.startPTS),
                            o=Math.min(r,
                            t.endPTS),
                            r=Math.max(r,
                            t.endPTS),
                            n=Math.min(n,
                            t.startDTS),
                            a=Math.max(a,
                            t.endDTS)
                        }var c=i-t.start;t.start=t.startPTS=i,
                        t.maxStartPTS=s,
                        t.endPTS=r,
                        t.minEndPTS=o,
                        t.startDTS=n,
                        t.endDTS=a,
                        t.duration=r-i;var u,
                        h,
                        f,
                        g=t.sn;if(!e||g<e.startSN||g>e.endSN)return 0;for(u=g-e.startSN,
                        (h=e.fragments)[
                            u
                        ]=t,
                        f=u;f>0;f--)ee(h,
                        f,
                        f-1);for(f=u;f<h.length-1;f++)ee(h,
                        f,
                        f+1);return e.PTSKnown=!0,
                        c
                    }function ie(e,
                    t){
                        t.initSegment&&e.initSegment&&(t.initSegment=e.initSegment);var i,
                        r=0;if(re(e,
                        t,
                        (function(e,
                        n){
                            r=e.cc-n.cc,
                            Object(l.isFiniteNumber)(e.startPTS)&&(n.start=n.startPTS=e.startPTS,
                            n.endPTS=e.endPTS,
                            n.duration=e.duration,
                            n.backtracked=e.backtracked,
                            n.dropped=e.dropped,
                            i=n),
                            t.PTSKnown=!0
                        })),
                        t.PTSKnown){
                            if(r){
                                c.logger.log("discontinuity sliding from playlist, take drift into account");for(var n=t.fragments,
                                a=0;a<n.length;a++)n[
                                    a
                                ].cc+=r
                            }i?te(t,
                            i,
                            i.startPTS,
                            i.endPTS,
                            i.startDTS,
                            i.endDTS): function(e,
                            t){
                                var i=t.startSN-e.startSN,
                                r=e.fragments,
                                n=t.fragments;if(!(i<0||i>r.length))for(var a=0;a<n.length;a++)n[
                                    a
                                ].start+=r[
                                    i
                                ].start
                            }(e,
                            t),
                            t.PTSKnown=e.PTSKnown
                        }
                    }function re(e,
                    t,
                    i){
                        if(e&&t)for(var r=Math.max(e.startSN,
                        t.startSN)-t.startSN,
                        n=Math.min(e.endSN,
                        t.endSN)-t.startSN,
                        a=t.startSN-e.startSN,
                        s=r;s<=n;s++){
                            var o=e.fragments[
                                a+s
                            ],
                            l=t.fragments[
                                s
                            ];if(!o||!l)break;i(o,
                            l,
                            s)
                        }
                    }function ne(e,
                    t,
                    i){
                        var r=1e3*(t.averagetargetduration?t.averagetargetduration: t.targetduration),
                        n=r/2;return e&&t.endSN===e.endSN&&(r=n),
                        i&&(r=Math.max(n,
                        r-(window.performance.now()-i))),
                        Math.round(r)
                    }var ae={
                        toString: function(e){
                            for(var t="",
                            i=e.length,
                            r=0;r<i;r++)t+="["+e.start(r).toFixed(3)+","+e.end(r).toFixed(3)+"]";return t
                        }
                    };function se(e,
                    t){
                        t.fragments.forEach((function(t){
                            if(t){
                                var i=t.start+e;t.start=t.startPTS=i,
                                t.endPTS=i+t.duration
                            }
                        })),
                        t.PTSKnown=!0
                    }function oe(e,
                    t,
                    i){
                        !function(e,
                        t,
                        i){
                            if(function(e,
                            t,
                            i){
                                var r=!1;return t&&t.details&&i&&(i.endCC>i.startCC||e&&e.cc<i.startCC)&&(r=!0),
                                r
                            }(e,
                            i,
                            t)){
                                var r=function(e,
                                t){
                                    var i=e.fragments,
                                    r=t.fragments;if(r.length&&i.length){
                                        var n=function(e,
                                        t){
                                            for(var i=null,
                                            r=0;r<e.length;r+=1){
                                                var n=e[
                                                    r
                                                ];if(n&&n.cc===t){
                                                    i=n;break
                                                }
                                            }return i
                                        }(i,
                                        r[
                                            0
                                        ].cc);if(n&&(!n||n.startPTS))return n;c.logger.log("No frag in previous level to align on")
                                    }else c.logger.log("No fragments to align")
                                }(i.details,
                                t);r&&(c.logger.log("Adjusting PTS using last level due to CC increase within current level"),
                                se(r.start,
                                t))
                            }
                        }(e,
                        i,
                        t),
                        !i.PTSKnown&&t&&function(e,
                        t){
                            if(t&&t.fragments.length){
                                if(!e.hasProgramDateTime||!t.hasProgramDateTime)return;var i=t.fragments[
                                    0
                                ].programDateTime,
                                r=(e.fragments[
                                    0
                                ].programDateTime-i)/1e3+t.fragments[
                                    0
                                ].start;Object(l.isFiniteNumber)(r)&&(c.logger.log("adjusting PTS using programDateTime delta, sliding:"+r.toFixed(3)),
                                se(r,
                                e))
                            }
                        }(i,
                        t.details)
                    }function le(e,
                    t,
                    i){
                        if(null===t||!Array.isArray(e)||!e.length||!Object(l.isFiniteNumber)(t))return null;if(t<(e[
                            0
                        ].programDateTime||0))return null;if(t>=(e[
                            e.length-1
                        ].endProgramDateTime||0))return null;i=i||0;for(var r=0;r<e.length;++r){
                            var n=e[
                                r
                            ];if(ue(t,
                            i,
                            n))return n
                        }return null
                    }function de(e,
                    t,
                    i,
                    r){
                        void 0===i&&(i=0),
                        void 0===r&&(r=0);var n=null;if(e?n=t[
                            e.sn-t[
                                0
                            ].sn+1
                        ]: 0===i&&0===t[
                            0
                        ].start&&(n=t[
                            0
                        ]),
                        n&&0===ce(i,
                        r,
                        n))return n;var a=$.search(t,
                        ce.bind(null,
                        i,
                        r));return a||n
                    }function ce(e,
                    t,
                    i){
                        void 0===e&&(e=0),
                        void 0===t&&(t=0);var r=Math.min(t,
                        i.duration+(i.deltaPTS?i.deltaPTS: 0));return i.start+i.duration-r<=e?1: i.start-r>e&&i.start?-1: 0
                    }function ue(e,
                    t,
                    i){
                        var r=1e3*Math.min(t,
                        i.duration+(i.deltaPTS?i.deltaPTS: 0));return(i.endProgramDateTime||0)-r>e
                    }var he=function(){
                        function e(e,
                        t,
                        i,
                        r){
                            this.config=e,
                            this.media=t,
                            this.fragmentTracker=i,
                            this.hls=r,
                            this.nudgeRetry=0,
                            this.stallReported=!1,
                            this.stalled=null,
                            this.moved=!1,
                            this.seeking=!1
                        }var t=e.prototype;return t.poll=function(e){
                            var t=this.config,
                            i=this.media,
                            r=this.stalled,
                            n=i.currentTime,
                            a=i.seeking,
                            s=this.seeking&&!a,
                            o=!this.seeking&&a;if(this.seeking=a,
                            n===e){
                                if((o||s)&&(this.stalled=null),
                                !i.paused&&!i.ended&&0!==i.playbackRate&&i.buffered.length){
                                    var l=K.bufferInfo(i,
                                    n,
                                    0),
                                    d=l.len>0,
                                    u=l.nextStart||0;if(d||u){
                                        if(a){
                                            var h=l.len>2,
                                            f=!u||u-n>2&&!this.fragmentTracker.getPartialFragment(n);if(h||f)return;this.moved=!1
                                        }if(!this.moved&&this.stalled){
                                            var g=Math.max(u,
                                            l.start||0)-n;if(g>0&&g<=2)return void this._trySkipBufferHole(null)
                                        }var p=self.performance.now();if(null!==r){
                                            var v=p-r;!a&&v>=250&&this._reportStall(l.len);var m=K.bufferInfo(i,
                                            n,
                                            t.maxBufferHole);this._tryFixBufferStall(m,
                                            v)
                                        }else this.stalled=p
                                    }
                                }
                            }else if(this.moved=!0,
                            null!==r){
                                if(this.stallReported){
                                    var y=self.performance.now()-r;c.logger.warn("playback not stuck anymore @"+n+", after "+Math.round(y)+"ms"),
                                    this.stallReported=!1
                                }this.stalled=null,
                                this.nudgeRetry=0
                            }
                        },
                        t._tryFixBufferStall=function(e,
                        t){
                            var i=this.config,
                            r=this.fragmentTracker,
                            n=this.media.currentTime,
                            a=r.getPartialFragment(n);a&&this._trySkipBufferHole(a)||e.len>i.maxBufferHole&&t>1e3*i.highBufferWatchdogPeriod&&(c.logger.warn("Trying to nudge playhead over buffer-hole"),
                            this.stalled=null,
                            this._tryNudgeBuffer())
                        },
                        t._reportStall=function(e){
                            var t=this.hls,
                            i=this.media;this.stallReported||(this.stallReported=!0,
                            c.logger.warn("Playback stalling at @"+i.currentTime+" due to low buffer (buffer="+e+")"),
                            t.trigger(d.default.ERROR,
                            {
                                type: o.ErrorTypes.MEDIA_ERROR,
                                details: o.ErrorDetails.BUFFER_STALLED_ERROR,
                                fatal: !1,
                                buffer: e
                            }))
                        },
                        t._trySkipBufferHole=function(e){
                            for(var t=this.config,
                            i=this.hls,
                            r=this.media,
                            n=r.currentTime,
                            a=0,
                            s=0;s<r.buffered.length;s++){
                                var l=r.buffered.start(s);if(n+t.maxBufferHole>=a&&n<l){
                                    var u=Math.max(l+.05,
                                    r.currentTime+.1);return c.logger.warn("skipping hole, adjusting currentTime from "+n+" to "+u),
                                    this.moved=!0,
                                    this.stalled=null,
                                    r.currentTime=u,
                                    e&&i.trigger(d.default.ERROR,
                                    {
                                        type: o.ErrorTypes.MEDIA_ERROR,
                                        details: o.ErrorDetails.BUFFER_SEEK_OVER_HOLE,
                                        fatal: !1,
                                        reason: "fragment loaded with buffer holes, seeking from "+n+" to "+u,
                                        frag: e
                                    }),
                                    u
                                }a=r.buffered.end(s)
                            }return 0
                        },
                        t._tryNudgeBuffer=function(){
                            var e=this.config,
                            t=this.hls,
                            i=this.media,
                            r=i.currentTime,
                            n=(this.nudgeRetry||0)+1;if(this.nudgeRetry=n,
                            n<e.nudgeMaxRetry){
                                var a=r+n*e.nudgeOffset;c.logger.warn("Nudging 'currentTime' from "+r+" to "+a),
                                i.currentTime=a,
                                t.trigger(d.default.ERROR,
                                {
                                    type: o.ErrorTypes.MEDIA_ERROR,
                                    details: o.ErrorDetails.BUFFER_NUDGE_ON_STALL,
                                    fatal: !1
                                })
                            }else c.logger.error("Playhead still not moving while enough data buffered @"+r+" after "+e.nudgeMaxRetry+" nudges"),
                            t.trigger(d.default.ERROR,
                            {
                                type: o.ErrorTypes.MEDIA_ERROR,
                                details: o.ErrorDetails.BUFFER_STALLED_ERROR,
                                fatal: !0
                            })
                        },
                        e
                    }();function fe(e){
                        if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e
                    }var ge=function(e){
                        var t,
                        i;function r(t){
                            for(var i,
                            r=arguments.length,
                            n=new Array(r>1?r-1: 0),
                            a=1;a<r;a++)n[
                                a-1
                            ]=arguments[
                                a
                            ];return(i=e.call.apply(e,
                            [
                                this,
                                t
                            ].concat(n))||this)._boundTick=void 0,
                            i._tickTimer=null,
                            i._tickInterval=null,
                            i._tickCallCount=0,
                            i._boundTick=i.tick.bind(fe(i)),
                            i
                        }i=e,
                        (t=r).prototype=Object.create(i.prototype),
                        t.prototype.constructor=t,
                        t.__proto__=i;var n=r.prototype;return n.onHandlerDestroying=function(){
                            this.clearNextTick(),
                            this.clearInterval()
                        },
                        n.hasInterval=function(){
                            return!!this._tickInterval
                        },
                        n.hasNextTick=function(){
                            return!!this._tickTimer
                        },
                        n.setInterval=function(e){
                            return!this._tickInterval&&(this._tickInterval=self.setInterval(this._boundTick,
                            e),
                            !0)
                        },
                        n.clearInterval=function(){
                            return!!this._tickInterval&&(self.clearInterval(this._tickInterval),
                            this._tickInterval=null,
                            !0)
                        },
                        n.clearNextTick=function(){
                            return!!this._tickTimer&&(self.clearTimeout(this._tickTimer),
                            this._tickTimer=null,
                            !0)
                        },
                        n.tick=function(){
                            this._tickCallCount++,
                            1===this._tickCallCount&&(this.doTick(),
                            this._tickCallCount>1&&(this.clearNextTick(),
                            this._tickTimer=self.setTimeout(this._boundTick,
                            0)),
                            this._tickCallCount=0)
                        },
                        n.doTick=function(){},
                        r
                    }(h),
                    pe="STOPPED",
                    ve="STARTING",
                    me="IDLE",
                    ye="PAUSED",
                    be="KEY_LOADING",
                    _e="FRAG_LOADING",
                    Te="FRAG_LOADING_WAITING_RETRY",
                    Ee="WAITING_TRACK",
                    we="PARSING",
                    Se="PARSED",
                    Ae="BUFFER_FLUSHING",
                    Re="ENDED",
                    ke="ERROR",
                    Le="WAITING_INIT_PTS",
                    De="WAITING_LEVEL",
                    Ie=function(e){
                        var t,
                        i;function r(){
                            return e.apply(this,
                            arguments)||this
                        }i=e,
                        (t=r).prototype=Object.create(i.prototype),
                        t.prototype.constructor=t,
                        t.__proto__=i;var n=r.prototype;return n.doTick=function(){},
                        n.startLoad=function(){},
                        n.stopLoad=function(){
                            var e=this.fragCurrent;e&&(e.loader&&e.loader.abort(),
                            this.fragmentTracker.removeFragment(e)),
                            this.demuxer&&(this.demuxer.destroy(),
                            this.demuxer=null),
                            this.fragCurrent=null,
                            this.fragPrevious=null,
                            this.clearInterval(),
                            this.clearNextTick(),
                            this.state=pe
                        },
                        n._streamEnded=function(e,
                        t){
                            var i=this.fragCurrent,
                            r=this.fragmentTracker;if(!t.live&&i&&!i.backtracked&&i.sn===t.endSN&&!e.nextStart){
                                var n=r.getState(i);return n===B||n===G
                            }return!1
                        },
                        n.onMediaSeeking=function(){
                            var e=this.config,
                            t=this.media,
                            i=this.mediaBuffer,
                            r=this.state,
                            n=t?t.currentTime: null,
                            a=K.bufferInfo(i||t,
                            n,
                            this.config.maxBufferHole);if(c.logger.log("media seeking to "+(Object(l.isFiniteNumber)(n)?n.toFixed(3): n)),
                            r===_e){
                                var s=this.fragCurrent;if(0===a.len&&s){
                                    var o=e.maxFragLookUpTolerance,
                                    d=s.start-o,
                                    u=s.start+s.duration+o;n<d||n>u?(s.loader&&(c.logger.log("seeking outside of buffer while fragment load in progress, cancel fragment load"),
                                    s.loader.abort()),
                                    this.fragCurrent=null,
                                    this.fragPrevious=null,
                                    this.state=me): c.logger.log("seeking outside of buffer but within currently loaded fragment range")
                                }
                            }else r===Re&&(0===a.len&&(this.fragPrevious=null,
                            this.fragCurrent=null),
                            this.state=me);t&&(this.lastCurrentTime=n),
                            this.loadedmetadata||(this.nextLoadPosition=this.startPosition=n),
                            this.tick()
                        },
                        n.onMediaEnded=function(){
                            this.startPosition=this.lastCurrentTime=0
                        },
                        n.onHandlerDestroying=function(){
                            this.stopLoad(),
                            e.prototype.onHandlerDestroying.call(this)
                        },
                        n.onHandlerDestroyed=function(){
                            this.state=pe,
                            this.fragmentTracker=null
                        },
                        n.computeLivePosition=function(e,
                        t){
                            var i=void 0!==this.config.liveSyncDuration?this.config.liveSyncDuration: this.config.liveSyncDurationCount*t.targetduration;return e+Math.max(0,
                            t.totalduration-i)
                        },
                        r
                    }(ge);function xe(e,
                    t){
                        for(var i=0;i<t.length;i++){
                            var r=t[
                                i
                            ];r.enumerable=r.enumerable||!1,
                            r.configurable=!0,
                            "value"in r&&(r.writable=!0),
                            Object.defineProperty(e,
                            r.key,
                            r)
                        }
                    }var Oe,
                    Ce=function(e){
                        var t,
                        i;function r(t,
                        i){
                            var r;return(r=e.call(this,
                            t,
                            d.default.MEDIA_ATTACHED,
                            d.default.MEDIA_DETACHING,
                            d.default.MANIFEST_LOADING,
                            d.default.MANIFEST_PARSED,
                            d.default.LEVEL_LOADED,
                            d.default.LEVELS_UPDATED,
                            d.default.KEY_LOADED,
                            d.default.FRAG_LOADED,
                            d.default.FRAG_LOAD_EMERGENCY_ABORTED,
                            d.default.FRAG_PARSING_INIT_SEGMENT,
                            d.default.FRAG_PARSING_DATA,
                            d.default.FRAG_PARSED,
                            d.default.ERROR,
                            d.default.AUDIO_TRACK_SWITCHING,
                            d.default.AUDIO_TRACK_SWITCHED,
                            d.default.BUFFER_CREATED,
                            d.default.BUFFER_APPENDED,
                            d.default.BUFFER_FLUSHED)||this).fragmentTracker=i,
                            r.config=t.config,
                            r.audioCodecSwap=!1,
                            r._state=pe,
                            r.stallReported=!1,
                            r.gapController=null,
                            r.altAudio=!1,
                            r.audioOnly=!1,
                            r.bitrateTest=!1,
                            r
                        }i=e,
                        (t=r).prototype=Object.create(i.prototype),
                        t.prototype.constructor=t,
                        t.__proto__=i;var n,
                        s,
                        u,
                        h=r.prototype;return h.startLoad=function(e){
                            if(this.levels){
                                var t=this.lastCurrentTime,
                                i=this.hls;if(this.stopLoad(),
                                this.setInterval(100),
                                this.level=-1,
                                this.fragLoadError=0,
                                !this.startFragRequested){
                                    var r=i.startLevel;-1===r&&(i.config.testBandwidth?(r=0,
                                    this.bitrateTest=!0): r=i.nextAutoLevel),
                                    this.level=i.nextLoadLevel=r,
                                    this.loadedmetadata=!1
                                }t>0&&-1===e&&(c.logger.log("override startPosition with lastCurrentTime @"+t.toFixed(3)),
                                e=t),
                                this.state=me,
                                this.nextLoadPosition=this.startPosition=this.lastCurrentTime=e,
                                this.tick()
                            }else this.forceStartLoad=!0,
                            this.state=pe
                        },
                        h.stopLoad=function(){
                            this.forceStartLoad=!1,
                            e.prototype.stopLoad.call(this)
                        },
                        h.doTick=function(){
                            switch(this.state){
                                case Ae: this.fragLoadError=0;break;case me: this._doTickIdle();break;case De: var e=this.levels[
                                    this.level
                                ];e&&e.details&&(this.state=me);break;case Te: var t=window.performance.now(),
                                i=this.retryDate;(!i||t>=i||this.media&&this.media.seeking)&&(c.logger.log("mediaController: retryDate reached, switch back to IDLE state"),
                                this.state=me)
                            }this._checkBuffer(),
                            this._checkFragmentChanged()
                        },
                        h._doTickIdle=function(){
                            var e=this.hls,
                            t=e.config,
                            i=this.media;if(void 0!==this.levelLastLoaded&&(i||!this.startFragRequested&&t.startFragPrefetch))if(this.altAudio&&this.audioOnly)this.demuxer.frag=null;else{
                                var r;r=this.loadedmetadata?i.currentTime: this.nextLoadPosition;var n=e.nextLoadLevel,
                                a=this.levels[
                                    n
                                ];if(a){
                                    var s,
                                    o=a.bitrate;s=o?Math.max(8*t.maxBufferSize/o,
                                    t.maxBufferLength): t.maxBufferLength,
                                    s=Math.min(s,
                                    t.maxMaxBufferLength);var l=r<t.maxBufferHole?Math.max(2,
                                    t.maxBufferHole): t.maxBufferHole,
                                    u=K.bufferInfo(this.mediaBuffer?this.mediaBuffer: i,
                                    r,
                                    l),
                                    h=u.len;if(!(h>=s)){
                                        c.logger.trace("buffer length of "+h.toFixed(3)+" is below max of "+s.toFixed(3)+". checking for more payload ..."),
                                        this.level=e.nextLoadLevel=n;var f=a.details;if(!f||f.live&&this.levelLastLoaded!==n)this.state=De;else{
                                            if(this._streamEnded(u,
                                            f)){
                                                var g={};return this.altAudio&&(g.type="video"),
                                                this.hls.trigger(d.default.BUFFER_EOS,
                                                g),
                                                void(this.state=Re)
                                            }this._fetchPayloadOrEos(r,
                                            u,
                                            f)
                                        }
                                    }
                                }
                            }
                        },
                        h._fetchPayloadOrEos=function(e,
                        t,
                        i){
                            var r=this.fragPrevious,
                            n=(this.level,
                            i.fragments),
                            a=n.length;if(0!==a){
                                var s,
                                o=n[
                                    0
                                ].start,
                                l=n[
                                    a-1
                                ].start+n[
                                    a-1
                                ].duration,
                                d=t.end;if(i.initSegment&&!i.initSegment.data)s=i.initSegment;else if(i.live){
                                    var u=this.config.initialLiveManifestSize;if(a<u)return void c.logger.warn("Can not start playback of a level, reason: not enough fragments "+a+" < "+u);if(null===(s=this._ensureFragmentAtLivePoint(i,
                                    d,
                                    o,
                                    l,
                                    r,
                                    n)))return
                                }else d<o&&(s=n[
                                    0
                                ]);s||(s=this._findFragment(o,
                                r,
                                a,
                                n,
                                d,
                                l,
                                i)),
                                s&&(s.encrypted?this._loadKey(s,
                                i): this._loadFragment(s,
                                i,
                                e,
                                d))
                            }
                        },
                        h._ensureFragmentAtLivePoint=function(e,
                        t,
                        i,
                        r,
                        n,
                        a){
                            var s,
                            o=this.hls.config,
                            d=this.media,
                            u=1/0;if(void 0!==o.liveMaxLatencyDuration?u=o.liveMaxLatencyDuration: Object(l.isFiniteNumber)(o.liveMaxLatencyDurationCount)&&(u=o.liveMaxLatencyDurationCount*e.targetduration),
                            t<Math.max(i-o.maxFragLookUpTolerance,
                            r-u)){
                                var h=this.liveSyncPosition=this.computeLivePosition(i,
                                e);t=h,
                                d&&!d.paused&&d.readyState&&d.duration>h&&h>d.currentTime&&(c.logger.log("buffer end: "+t.toFixed(3)+" is located too far from the end of live sliding playlist, reset currentTime to : "+h.toFixed(3)),
                                d.currentTime=h),
                                this.nextLoadPosition=h
                            }if(e.PTSKnown&&t>r&&d&&d.readyState)return null;if(this.startFragRequested&&!e.PTSKnown&&n)if(e.hasProgramDateTime)c.logger.log("live playlist, switching playlist, load frag with same PDT: "+n.programDateTime),
                            s=le(a,
                            n.endProgramDateTime,
                            o.maxFragLookUpTolerance);else{
                                var f=n.sn+1;if(f>=e.startSN&&f<=e.endSN){
                                    var g=a[
                                        f-e.startSN
                                    ];n.cc===g.cc&&(s=g,
                                    c.logger.log("live playlist, switching playlist, load frag with next SN: "+s.sn))
                                }s||(s=$.search(a,
                                (function(e){
                                    return n.cc-e.cc
                                })))&&c.logger.log("live playlist, switching playlist, load frag with same CC: "+s.sn)
                            }return s
                        },
                        h._findFragment=function(e,
                        t,
                        i,
                        r,
                        n,
                        a,
                        s){
                            var o,
                            l=this.hls.config;if(o=n<a?de(t,
                            r,
                            n,
                            n>a-l.maxFragLookUpTolerance?0: l.maxFragLookUpTolerance): r[
                                i-1
                            ]){
                                var d=o.sn-s.startSN,
                                u=t&&o.level===t.level,
                                h=r[
                                    d-1
                                ],
                                f=r[
                                    d+1
                                ];if(t&&o.sn===t.sn)if(u&&!o.backtracked)if(o.sn<s.endSN){
                                    var g=t.deltaPTS;g&&g>l.maxBufferHole&&t.dropped&&d?(o=h,
                                    c.logger.warn("Previous fragment was dropped with large PTS gap between audio and video. Maybe fragment is not starting with a keyframe? Loading previous one to try to overcome this")): (o=f,
                                    this.fragmentTracker.getState(o)!==G&&c.logger.log("Re-loading fragment with SN: "+o.sn))
                                }else o=null;else o.backtracked&&(f&&f.backtracked?(c.logger.warn("Already backtracked from fragment "+f.sn+", will not backtrack to fragment "+o.sn+". Loading fragment "+f.sn),
                                o=f): (c.logger.warn("Loaded fragment with dropped frames, backtracking 1 segment to find a keyframe"),
                                o.dropped=0,
                                h?(o=h).backtracked=!0: d&&(o=null)))
                            }return o
                        },
                        h._loadKey=function(e,
                        t){
                            c.logger.log("Loading key for "+e.sn+" of ["+t.startSN+"-"+t.endSN+"], level "+this.level),
                            this.state=be,
                            this.hls.trigger(d.default.KEY_LOADING,
                            {
                                frag: e
                            })
                        },
                        h._loadFragment=function(e,
                        t,
                        i,
                        r){
                            var n=this.fragmentTracker.getState(e);this.fragCurrent=e,
                            "initSegment"!==e.sn&&(this.startFragRequested=!0),
                            Object(l.isFiniteNumber)(e.sn)&&!e.bitrateTest&&(this.nextLoadPosition=e.start+e.duration),
                            e.backtracked||n===N||n===B?(e.autoLevel=this.hls.autoLevelEnabled,
                            e.bitrateTest=this.bitrateTest,
                            c.logger.log("Loading "+e.sn+" of ["+t.startSN+"-"+t.endSN+"], level "+this.level+", "+(this.loadedmetadata?"currentTime": "nextLoadPosition")+": "+parseFloat(i.toFixed(3))+", bufferEnd: "+parseFloat(r.toFixed(3))),
                            this.hls.trigger(d.default.FRAG_LOADING,
                            {
                                frag: e
                            }),
                            this.demuxer||(this.demuxer=new J(this.hls,
                            "main")),
                            this.state=_e): n===U&&this._reduceMaxBufferLength(e.duration)&&this.fragmentTracker.removeFragment(e)
                        },
                        h.getBufferedFrag=function(e){
                            return this.fragmentTracker.getBufferedFrag(e,
                            a.MAIN)
                        },
                        h.followingBufferedFrag=function(e){
                            return e?this.getBufferedFrag(e.endPTS+.5): null
                        },
                        h._checkFragmentChanged=function(){
                            var e,
                            t,
                            i=this.media;if(i&&i.readyState&&!1===i.seeking&&((t=i.currentTime)>this.lastCurrentTime&&(this.lastCurrentTime=t),
                            K.isBuffered(i,
                            t)?e=this.getBufferedFrag(t): K.isBuffered(i,
                            t+.1)&&(e=this.getBufferedFrag(t+.1)),
                            e)){
                                var r=e;if(r!==this.fragPlaying){
                                    this.hls.trigger(d.default.FRAG_CHANGED,
                                    {
                                        frag: r
                                    });var n=r.level;this.fragPlaying&&this.fragPlaying.level===n||this.hls.trigger(d.default.LEVEL_SWITCHED,
                                    {
                                        level: n
                                    }),
                                    this.fragPlaying=r
                                }
                            }
                        },
                        h.immediateLevelSwitch=function(){
                            if(c.logger.log("immediateLevelSwitch"),
                            !this.immediateSwitch){
                                this.immediateSwitch=!0;var e,
                                t=this.media;t?(e=t.paused)||t.pause(): e=!0,
                                this.previouslyPaused=e
                            }var i=this.fragCurrent;i&&i.loader&&i.loader.abort(),
                            this.fragCurrent=null,
                            this.flushMainBuffer(0,
                            Number.POSITIVE_INFINITY)
                        },
                        h.immediateLevelSwitchEnd=function(){
                            var e=this.media;e&&e.buffered.length&&(this.immediateSwitch=!1,
                            e.currentTime>0&&K.isBuffered(e,
                            e.currentTime)&&(e.currentTime-=1e-4),
                            this.previouslyPaused||e.play())
                        },
                        h.nextLevelSwitch=function(){
                            var e=this.media;if(e&&e.readyState){
                                var t,
                                i=this.getBufferedFrag(e.currentTime);if(i&&i.startPTS>1&&this.flushMainBuffer(0,
                                i.startPTS-1),
                                e.paused)t=0;else{
                                    var r=this.hls.nextLoadLevel,
                                    n=this.levels[
                                        r
                                    ],
                                    a=this.fragLastKbps;t=a&&this.fragCurrent?this.fragCurrent.duration*n.bitrate/(1e3*a)+1: 0
                                }var s=this.getBufferedFrag(e.currentTime+t);if(s){
                                    var o=this.followingBufferedFrag(s);if(o){
                                        var l=this.fragCurrent;l&&l.loader&&l.loader.abort(),
                                        this.fragCurrent=null;var d=Math.max(s.endPTS,
                                        o.maxStartPTS+Math.min(this.config.maxFragLookUpTolerance,
                                        o.duration));this.flushMainBuffer(d,
                                        Number.POSITIVE_INFINITY)
                                    }
                                }
                            }
                        },
                        h.flushMainBuffer=function(e,
                        t){
                            this.state=Ae;var i={
                                startOffset: e,
                                endOffset: t
                            };this.altAudio&&(i.type="video"),
                            this.hls.trigger(d.default.BUFFER_FLUSHING,
                            i)
                        },
                        h.onMediaAttached=function(e){
                            var t=this.media=this.mediaBuffer=e.media;this.onvseeking=this.onMediaSeeking.bind(this),
                            this.onvseeked=this.onMediaSeeked.bind(this),
                            this.onvended=this.onMediaEnded.bind(this),
                            t.addEventListener("seeking",
                            this.onvseeking),
                            t.addEventListener("seeked",
                            this.onvseeked),
                            t.addEventListener("ended",
                            this.onvended);var i=this.config;this.levels&&i.autoStartLoad&&this.hls.startLoad(i.startPosition),
                            this.gapController=new he(i,
                            t,
                            this.fragmentTracker,
                            this.hls)
                        },
                        h.onMediaDetaching=function(){
                            var e=this.media;e&&e.ended&&(c.logger.log("MSE detaching and video ended, reset startPosition"),
                            this.startPosition=this.lastCurrentTime=0);var t=this.levels;t&&t.forEach((function(e){
                                e.details&&e.details.fragments.forEach((function(e){
                                    e.backtracked=void 0
                                }))
                            })),
                            e&&(e.removeEventListener("seeking",
                            this.onvseeking),
                            e.removeEventListener("seeked",
                            this.onvseeked),
                            e.removeEventListener("ended",
                            this.onvended),
                            this.onvseeking=this.onvseeked=this.onvended=null),
                            this.fragmentTracker.removeAllFragments(),
                            this.media=this.mediaBuffer=null,
                            this.loadedmetadata=!1,
                            this.stopLoad()
                        },
                        h.onMediaSeeked=function(){
                            var e=this.media,
                            t=e?e.currentTime: void 0;Object(l.isFiniteNumber)(t)&&c.logger.log("media seeked to "+t.toFixed(3)),
                            this.tick()
                        },
                        h.onManifestLoading=function(){
                            c.logger.log("trigger BUFFER_RESET"),
                            this.hls.trigger(d.default.BUFFER_RESET),
                            this.fragmentTracker.removeAllFragments(),
                            this.stalled=!1,
                            this.startPosition=this.lastCurrentTime=0
                        },
                        h.onManifestParsed=function(e){
                            var t,
                            i=!1,
                            r=!1;e.levels.forEach((function(e){
                                (t=e.audioCodec)&&(-1!==t.indexOf("mp4a.40.2")&&(i=!0),
                                -1!==t.indexOf("mp4a.40.5")&&(r=!0))
                            })),
                            this.audioCodecSwitch=i&&r,
                            this.audioCodecSwitch&&c.logger.log("both AAC/HE-AAC audio found in levels; declaring level codec as HE-AAC"),
                            this.altAudio=e.altAudio,
                            this.levels=e.levels,
                            this.startFragRequested=!1;var n=this.config;(n.autoStartLoad||this.forceStartLoad)&&this.hls.startLoad(n.startPosition)
                        },
                        h.onLevelLoaded=function(e){
                            var t=e.details,
                            i=e.level,
                            r=this.levels[
                                this.levelLastLoaded
                            ],
                            n=this.levels[
                                i
                            ],
                            a=t.totalduration,
                            s=0;if(c.logger.log("level "+i+" loaded ["+t.startSN+","+t.endSN+"],duration:"+a),
                            t.live||n.details&&n.details.live){
                                var o=n.details;o&&t.fragments.length>0?(ie(o,
                                t),
                                s=t.fragments[
                                    0
                                ].start,
                                this.liveSyncPosition=this.computeLivePosition(s,
                                o),
                                t.PTSKnown&&Object(l.isFiniteNumber)(s)?c.logger.log("live playlist sliding:"+s.toFixed(3)): (c.logger.log("live playlist - outdated PTS, unknown sliding"),
                                oe(this.fragPrevious,
                                r,
                                t))): (c.logger.log("live playlist - first load, unknown sliding"),
                                t.PTSKnown=!1,
                                oe(this.fragPrevious,
                                r,
                                t))
                            }else t.PTSKnown=!1;if(n.details=t,
                            this.levelLastLoaded=i,
                            this.hls.trigger(d.default.LEVEL_UPDATED,
                            {
                                details: t,
                                level: i
                            }),
                            !1===this.startFragRequested){
                                if(-1===this.startPosition||-1===this.lastCurrentTime){
                                    var u=t.startTimeOffset;Object(l.isFiniteNumber)(u)?(u<0&&(c.logger.log("negative start time offset "+u+", count from end of last fragment"),
                                    u=s+a+u),
                                    c.logger.log("start time offset found in playlist, adjust startPosition to "+u),
                                    this.startPosition=u): t.live?(this.startPosition=this.computeLivePosition(s,
                                    t),
                                    c.logger.log("configure startPosition to "+this.startPosition)): this.startPosition=0,
                                    this.lastCurrentTime=this.startPosition
                                }this.nextLoadPosition=this.startPosition
                            }this.state===De&&(this.state=me),
                            this.tick()
                        },
                        h.onKeyLoaded=function(){
                            this.state===be&&(this.state=me,
                            this.tick())
                        },
                        h.onFragLoaded=function(e){
                            var t=this.fragCurrent,
                            i=this.hls,
                            r=this.levels,
                            n=this.media,
                            a=e.frag;if(this.state===_e&&t&&"main"===a.type&&a.level===t.level&&a.sn===t.sn){
                                var s=e.stats,
                                o=r[
                                    t.level
                                ],
                                l=o.details;if(this.bitrateTest=!1,
                                this.stats=s,
                                c.logger.log("Loaded "+t.sn+" of ["+l.startSN+" ,"+l.endSN+"],level "+t.level),
                                a.bitrateTest&&i.nextLoadLevel)this.state=me,
                                this.startFragRequested=!1,
                                s.tparsed=s.tbuffered=window.performance.now(),
                                i.trigger(d.default.FRAG_BUFFERED,
                                {
                                    stats: s,
                                    frag: t,
                                    id: "main"
                                }),
                                this.tick();else if("initSegment"===a.sn)this.state=me,
                                s.tparsed=s.tbuffered=window.performance.now(),
                                l.initSegment.data=e.payload,
                                i.trigger(d.default.FRAG_BUFFERED,
                                {
                                    stats: s,
                                    frag: t,
                                    id: "main"
                                }),
                                this.tick();else{
                                    c.logger.log("Parsing "+t.sn+" of ["+l.startSN+" ,"+l.endSN+"],level "+t.level+", cc "+t.cc),
                                    this.state=we,
                                    this.pendingBuffering=!0,
                                    this.appended=!1,
                                    a.bitrateTest&&(a.bitrateTest=!1,
                                    this.fragmentTracker.onFragLoaded({
                                        frag: a
                                    }));var u=!(n&&n.seeking)&&(l.PTSKnown||!l.live),
                                    h=l.initSegment?l.initSegment.data: [],
                                    f=this._getAudioCodec(o);(this.demuxer=this.demuxer||new J(this.hls,
                                    "main")).push(e.payload,
                                    h,
                                    f,
                                    o.videoCodec,
                                    t,
                                    l.totalduration,
                                    u)
                                }
                            }this.fragLoadError=0
                        },
                        h.onFragParsingInitSegment=function(e){
                            var t=this.fragCurrent,
                            i=e.frag;if(t&&"main"===e.id&&i.sn===t.sn&&i.level===t.level&&this.state===we){
                                var r,
                                n,
                                a=e.tracks;if(this.audioOnly=a.audio&&!a.video,
                                this.altAudio&&!this.audioOnly&&delete a.audio,
                                n=a.audio){
                                    var s=this.levels[
                                        this.level
                                    ].audioCodec,
                                    o=navigator.userAgent.toLowerCase();s&&this.audioCodecSwap&&(c.logger.log("swapping playlist audio codec"),
                                    s=-1!==s.indexOf("mp4a.40.5")?"mp4a.40.2": "mp4a.40.5"),
                                    this.audioCodecSwitch&&1!==n.metadata.channelCount&&-1===o.indexOf("firefox")&&(s="mp4a.40.5"),
                                    -1!==o.indexOf("android")&&"audio/mpeg"!==n.container&&(s="mp4a.40.2",
                                    c.logger.log("Android: force audio codec to "+s)),
                                    n.levelCodec=s,
                                    n.id=e.id
                                }for(r in(n=a.video)&&(n.levelCodec=this.levels[
                                    this.level
                                ].videoCodec,
                                n.id=e.id),
                                this.hls.trigger(d.default.BUFFER_CODECS,
                                a),
                                a){
                                    n=a[
                                        r
                                    ],
                                    c.logger.log("main track:"+r+",container:"+n.container+",codecs[level/parsed]=["+n.levelCodec+"/"+n.codec+"]");var l=n.initSegment;l&&(this.appended=!0,
                                    this.pendingBuffering=!0,
                                    this.hls.trigger(d.default.BUFFER_APPENDING,
                                    {
                                        type: r,
                                        data: l,
                                        parent: "main",
                                        content: "initSegment"
                                    }))
                                }this.tick()
                            }
                        },
                        h.onFragParsingData=function(e){
                            var t=this,
                            i=this.fragCurrent,
                            r=e.frag;if(i&&"main"===e.id&&r.sn===i.sn&&r.level===i.level&&("audio"!==e.type||!this.altAudio)&&this.state===we){
                                var n=this.levels[
                                    this.level
                                ],
                                a=i;if(Object(l.isFiniteNumber)(e.endPTS)||(e.endPTS=e.startPTS+i.duration,
                                e.endDTS=e.startDTS+i.duration),
                                !0===e.hasAudio&&a.addElementaryStream(p.AUDIO),
                                !0===e.hasVideo&&a.addElementaryStream(p.VIDEO),
                                c.logger.log("Parsed "+e.type+",PTS:["+e.startPTS.toFixed(3)+","+e.endPTS.toFixed(3)+"],DTS:["+e.startDTS.toFixed(3)+"/"+e.endDTS.toFixed(3)+"],nb:"+e.nb+",dropped:"+(e.dropped||0)),
                                "video"===e.type)if(a.dropped=e.dropped,
                                a.dropped)if(a.backtracked)c.logger.warn("Already backtracked on this fragment, appending with the gap",
                                a.sn);else{
                                    var s=n.details;if(!s||a.sn!==s.startSN)return c.logger.warn("missing video frame(s), backtracking fragment",
                                    a.sn),
                                    this.fragmentTracker.removeFragment(a),
                                    a.backtracked=!0,
                                    this.nextLoadPosition=e.startPTS,
                                    this.state=me,
                                    this.fragPrevious=a,
                                    this.demuxer&&(this.demuxer.destroy(),
                                    this.demuxer=null),
                                    void this.tick();c.logger.warn("missing video frame(s) on first frag, appending with gap",
                                    a.sn)
                                }else a.backtracked=!1;var o=te(n.details,
                                a,
                                e.startPTS,
                                e.endPTS,
                                e.startDTS,
                                e.endDTS),
                                u=this.hls;u.trigger(d.default.LEVEL_PTS_UPDATED,
                                {
                                    details: n.details,
                                    level: this.level,
                                    drift: o,
                                    type: e.type,
                                    start: e.startPTS,
                                    end: e.endPTS
                                }),
                                [
                                    e.data1,
                                    e.data2
                                ].forEach((function(i){
                                    i&&i.length&&t.state===we&&(t.appended=!0,
                                    t.pendingBuffering=!0,
                                    u.trigger(d.default.BUFFER_APPENDING,
                                    {
                                        type: e.type,
                                        data: i,
                                        parent: "main",
                                        content: "data"
                                    }))
                                })),
                                this.tick()
                            }
                        },
                        h.onFragParsed=function(e){
                            var t=this.fragCurrent,
                            i=e.frag;t&&"main"===e.id&&i.sn===t.sn&&i.level===t.level&&this.state===we&&(this.stats.tparsed=window.performance.now(),
                            this.state=Se,
                            this._checkAppendedParsed())
                        },
                        h.onAudioTrackSwitching=function(e){
                            var t=this.altAudio,
                            i=!!e.url,
                            r=e.id;if(!i){
                                if(this.mediaBuffer!==this.media){
                                    c.logger.log("switching on main audio, use media.buffered to schedule main fragment loading"),
                                    this.mediaBuffer=this.media;var n=this.fragCurrent;n.loader&&(c.logger.log("switching to main audio track, cancel main fragment load"),
                                    n.loader.abort()),
                                    this.fragCurrent=null,
                                    this.fragPrevious=null,
                                    this.demuxer&&(this.demuxer.destroy(),
                                    this.demuxer=null),
                                    this.state=me
                                }var a=this.hls;t&&a.trigger(d.default.BUFFER_FLUSHING,
                                {
                                    startOffset: 0,
                                    endOffset: Number.POSITIVE_INFINITY,
                                    type: "audio"
                                }),
                                a.trigger(d.default.AUDIO_TRACK_SWITCHED,
                                {
                                    id: r
                                })
                            }
                        },
                        h.onAudioTrackSwitched=function(e){
                            var t=e.id,
                            i=!!this.hls.audioTracks[
                                t
                            ].url;if(i){
                                var r=this.videoBuffer;r&&this.mediaBuffer!==r&&(c.logger.log("switching on alternate audio, use video.buffered to schedule main fragment loading"),
                                this.mediaBuffer=r)
                            }this.altAudio=i,
                            this.tick()
                        },
                        h.onBufferCreated=function(e){
                            var t,
                            i,
                            r=e.tracks,
                            n=!1;for(var a in r){
                                var s=r[
                                    a
                                ];"main"===s.id?(i=a,
                                t=s,
                                "video"===a&&(this.videoBuffer=r[
                                    a
                                ].buffer)): n=!0
                            }n&&t?(c.logger.log("alternate track found, use "+i+".buffered to schedule main fragment loading"),
                            this.mediaBuffer=t.buffer): this.mediaBuffer=this.media
                        },
                        h.onBufferAppended=function(e){
                            if("main"===e.parent){
                                var t=this.state;t!==we&&t!==Se||(this.pendingBuffering=e.pending>0,
                                this._checkAppendedParsed())
                            }
                        },
                        h._checkAppendedParsed=function(){
                            if(!(this.state!==Se||this.appended&&this.pendingBuffering)){
                                var e=this.fragCurrent;if(e){
                                    var t=this.mediaBuffer?this.mediaBuffer: this.media;c.logger.log("main buffered : "+ae.toString(t.buffered)),
                                    this.fragPrevious=e;var i=this.stats;i.tbuffered=window.performance.now(),
                                    this.fragLastKbps=Math.round(8*i.total/(i.tbuffered-i.tfirst)),
                                    this.hls.trigger(d.default.FRAG_BUFFERED,
                                    {
                                        stats: i,
                                        frag: e,
                                        id: "main"
                                    }),
                                    this.state=me
                                }(this.loadedmetadata||this.startPosition<=0)&&this.tick()
                            }
                        },
                        h.onError=function(e){
                            var t=e.frag||this.fragCurrent;if(!t||"main"===t.type){
                                var i=!!this.media&&K.isBuffered(this.media,
                                this.media.currentTime)&&K.isBuffered(this.media,
                                this.media.currentTime+.5);switch(e.details){
                                    case o.ErrorDetails.FRAG_LOAD_ERROR: case o.ErrorDetails.FRAG_LOAD_TIMEOUT: case o.ErrorDetails.KEY_LOAD_ERROR: case o.ErrorDetails.KEY_LOAD_TIMEOUT: if(!e.fatal)if(this.fragLoadError+1<=this.config.fragLoadingMaxRetry){
                                        var r=Math.min(Math.pow(2,
                                        this.fragLoadError)*this.config.fragLoadingRetryDelay,
                                        this.config.fragLoadingMaxRetryTimeout);c.logger.warn("mediaController: frag loading failed, retry in "+r+" ms"),
                                        this.retryDate=window.performance.now()+r,
                                        this.loadedmetadata||(this.startFragRequested=!1,
                                        this.nextLoadPosition=this.startPosition),
                                        this.fragLoadError++,
                                        this.state=Te
                                    }else c.logger.error("mediaController: "+e.details+" reaches max retry, redispatch as fatal ..."),
                                    e.fatal=!0,
                                    this.state=ke;break;case o.ErrorDetails.LEVEL_LOAD_ERROR: case o.ErrorDetails.LEVEL_LOAD_TIMEOUT: this.state!==ke&&(e.fatal?(this.state=ke,
                                    c.logger.warn("streamController: "+e.details+",switch to "+this.state+" state ...")): e.levelRetry||this.state!==De||(this.state=me));break;case o.ErrorDetails.BUFFER_FULL_ERROR: "main"!==e.parent||this.state!==we&&this.state!==Se||(i?(this._reduceMaxBufferLength(this.config.maxBufferLength),
                                    this.state=me): (c.logger.warn("buffer full error also media.currentTime is not buffered, flush everything"),
                                    this.fragCurrent=null,
                                    this.flushMainBuffer(0,
                                    Number.POSITIVE_INFINITY)))
                                }
                            }
                        },
                        h._reduceMaxBufferLength=function(e){
                            var t=this.config;return t.maxMaxBufferLength>=e&&(t.maxMaxBufferLength/=2,
                            c.logger.warn("main:reduce max buffer length to "+t.maxMaxBufferLength+"s"),
                            !0)
                        },
                        h._checkBuffer=function(){
                            var e=this.media;if(e&&0!==e.readyState){
                                var t=(this.mediaBuffer?this.mediaBuffer: e).buffered;!this.loadedmetadata&&t.length?(this.loadedmetadata=!0,
                                this._seekToStartPos()): this.immediateSwitch?this.immediateLevelSwitchEnd(): this.gapController.poll(this.lastCurrentTime,
                                t)
                            }
                        },
                        h.onFragLoadEmergencyAborted=function(){
                            this.state=me,
                            this.loadedmetadata||(this.startFragRequested=!1,
                            this.nextLoadPosition=this.startPosition),
                            this.tick()
                        },
                        h.onBufferFlushed=function(){
                            var e=this.mediaBuffer?this.mediaBuffer: this.media;if(e){
                                var t=this.audioOnly?p.AUDIO: p.VIDEO;this.fragmentTracker.detectEvictedFragments(t,
                                e.buffered)
                            }this.state=me,
                            this.fragPrevious=null
                        },
                        h.onLevelsUpdated=function(e){
                            this.levels=e.levels
                        },
                        h.swapAudioCodec=function(){
                            this.audioCodecSwap=!this.audioCodecSwap
                        },
                        h._seekToStartPos=function(){
                            var e=this.media,
                            t=e.currentTime,
                            i=this.startPosition;if(t!==i&&i>=0){
                                if(e.seeking)return void c.logger.log("could not seek to "+i+", already seeking at "+t);var r=(e.buffered.length?e.buffered.start(0): 0)-i;r>0&&r<this.config.maxBufferHole&&(c.logger.log("adjusting start position by "+r+" to match buffer start"),
                                i+=r,
                                this.startPosition=i),
                                c.logger.log("seek to target start position "+i+" from current time "+t+". ready state "+e.readyState),
                                e.currentTime=i
                            }
                        },
                        h._getAudioCodec=function(e){
                            var t=this.config.defaultAudioCodec||e.audioCodec;return this.audioCodecSwap&&(c.logger.log("swapping playlist audio codec"),
                            t&&(t=-1!==t.indexOf("mp4a.40.5")?"mp4a.40.2": "mp4a.40.5")),
                            t
                        },
                        n=r,
                        (s=[
                            {
                                key: "state",
                                set: function(e){
                                    if(this.state!==e){
                                        var t=this.state;this._state=e,
                                        c.logger.log("main stream-controller: "+t+"->"+e),
                                        this.hls.trigger(d.default.STREAM_STATE_TRANSITION,
                                        {
                                            previousState: t,
                                            nextState: e
                                        })
                                    }
                                },
                                get: function(){
                                    return this._state
                                }
                            },
                            {
                                key: "currentLevel",
                                get: function(){
                                    var e=this.media;if(e){
                                        var t=this.getBufferedFrag(e.currentTime);if(t)return t.level
                                    }return-1
                                }
                            },
                            {
                                key: "nextBufferedFrag",
                                get: function(){
                                    var e=this.media;return e?this.followingBufferedFrag(this.getBufferedFrag(e.currentTime)): null
                                }
                            },
                            {
                                key: "nextLevel",
                                get: function(){
                                    var e=this.nextBufferedFrag;return e?e.level: -1
                                }
                            },
                            {
                                key: "liveSyncPosition",
                                get: function(){
                                    return this._liveSyncPosition
                                },
                                set: function(e){
                                    this._liveSyncPosition=e
                                }
                            }
                        ])&&xe(n.prototype,
                        s),
                        u&&xe(n,
                        u),
                        r
                    }(Ie);function Pe(e,
                    t){
                        for(var i=0;i<t.length;i++){
                            var r=t[
                                i
                            ];r.enumerable=r.enumerable||!1,
                            r.configurable=!0,
                            "value"in r&&(r.writable=!0),
                            Object.defineProperty(e,
                            r.key,
                            r)
                        }
                    }var Me=function(e){
                        var t,
                        i;function r(t){
                            var i;return(i=e.call(this,
                            t,
                            d.default.MANIFEST_LOADED,
                            d.default.LEVEL_LOADED,
                            d.default.AUDIO_TRACK_SWITCHED,
                            d.default.FRAG_LOADED,
                            d.default.ERROR)||this).canload=!1,
                            i.currentLevelIndex=null,
                            i.manualLevelIndex=-1,
                            i.timer=null,
                            Oe=/chrome|firefox/.test(navigator.userAgent.toLowerCase()),
                            i
                        }i=e,
                        (t=r).prototype=Object.create(i.prototype),
                        t.prototype.constructor=t,
                        t.__proto__=i;var n,
                        a,
                        s,
                        l=r.prototype;return l.onHandlerDestroying=function(){
                            this.clearTimer(),
                            this.manualLevelIndex=-1
                        },
                        l.clearTimer=function(){
                            null!==this.timer&&(clearTimeout(this.timer),
                            this.timer=null)
                        },
                        l.startLoad=function(){
                            var e=this._levels;this.canload=!0,
                            this.levelRetryCount=0,
                            e&&e.forEach((function(e){
                                e.loadError=0;var t=e.details;t&&t.live&&(e.details=void 0)
                            })),
                            null!==this.timer&&this.loadLevel()
                        },
                        l.stopLoad=function(){
                            this.canload=!1
                        },
                        l.onManifestLoaded=function(e){
                            var t,
                            i=[],
                            r=[],
                            n={},
                            a=null,
                            s=!1,
                            l=!1;if(e.levels.forEach((function(e){
                                var t=e.attrs;e.loadError=0,
                                e.fragmentError=!1,
                                s=s||!!e.videoCodec,
                                l=l||!!e.audioCodec,
                                Oe&&e.audioCodec&&-1!==e.audioCodec.indexOf("mp4a.40.34")&&(e.audioCodec=void 0),
                                (a=n[
                                    e.bitrate
                                ])?a.url.push(e.url): (e.url=[
                                    e.url
                                ],
                                e.urlId=0,
                                n[
                                    e.bitrate
                                ]=e,
                                i.push(e)),
                                t&&(t.AUDIO&&Z(a||e,
                                "audio",
                                t.AUDIO),
                                t.SUBTITLES&&Z(a||e,
                                "text",
                                t.SUBTITLES))
                            })),
                            s&&l&&(i=i.filter((function(e){
                                return!!e.videoCodec
                            }))),
                            i=i.filter((function(e){
                                var t=e.audioCodec,
                                i=e.videoCodec;return(!t||A(t,
                                "audio"))&&(!i||A(i,
                                "video"))
                            })),
                            e.audioTracks&&(r=e.audioTracks.filter((function(e){
                                return!e.audioCodec||A(e.audioCodec,
                                "audio")
                            }))).forEach((function(e,
                            t){
                                e.id=t
                            })),
                            i.length>0){
                                t=i[
                                    0
                                ].bitrate,
                                i.sort((function(e,
                                t){
                                    return e.bitrate-t.bitrate
                                })),
                                this._levels=i;for(var u=0;u<i.length;u++)if(i[
                                    u
                                ].bitrate===t){
                                    this._firstLevel=u,
                                    c.logger.log("manifest loaded,"+i.length+" level(s) found, first bitrate:"+t);break
                                }var h=l&&!s;this.hls.trigger(d.default.MANIFEST_PARSED,
                                {
                                    levels: i,
                                    audioTracks: r,
                                    firstLevel: this._firstLevel,
                                    stats: e.stats,
                                    audio: l,
                                    video: s,
                                    altAudio: !h&&r.some((function(e){
                                        return!!e.url
                                    }))
                                })
                            }else this.hls.trigger(d.default.ERROR,
                            {
                                type: o.ErrorTypes.MEDIA_ERROR,
                                details: o.ErrorDetails.MANIFEST_INCOMPATIBLE_CODECS_ERROR,
                                fatal: !0,
                                url: this.hls.url,
                                reason: "no level with compatible codecs found in manifest"
                            })
                        },
                        l.setLevelInternal=function(e){
                            var t=this._levels,
                            i=this.hls;if(e>=0&&e<t.length){
                                if(this.clearTimer(),
                                this.currentLevelIndex!==e){
                                    c.logger.log("switching to level "+e),
                                    this.currentLevelIndex=e;var r=t[
                                        e
                                    ];r.level=e,
                                    i.trigger(d.default.LEVEL_SWITCHING,
                                    r)
                                }var n=t[
                                    e
                                ],
                                a=n.details;if(!a||a.live){
                                    var s=n.urlId;i.trigger(d.default.LEVEL_LOADING,
                                    {
                                        url: n.url[
                                            s
                                        ],
                                        level: e,
                                        id: s
                                    })
                                }
                            }else i.trigger(d.default.ERROR,
                            {
                                type: o.ErrorTypes.OTHER_ERROR,
                                details: o.ErrorDetails.LEVEL_SWITCH_ERROR,
                                level: e,
                                fatal: !1,
                                reason: "invalid level idx"
                            })
                        },
                        l.onError=function(e){
                            if(e.fatal)e.type===o.ErrorTypes.NETWORK_ERROR&&this.clearTimer();else{
                                var t,
                                i=!1,
                                r=!1;switch(e.details){
                                    case o.ErrorDetails.FRAG_LOAD_ERROR: case o.ErrorDetails.FRAG_LOAD_TIMEOUT: case o.ErrorDetails.KEY_LOAD_ERROR: case o.ErrorDetails.KEY_LOAD_TIMEOUT: t=e.frag.level,
                                    r=!0;break;case o.ErrorDetails.LEVEL_LOAD_ERROR: case o.ErrorDetails.LEVEL_LOAD_TIMEOUT: t=e.context.level,
                                    i=!0;break;case o.ErrorDetails.REMUX_ALLOC_ERROR: t=e.level,
                                    i=!0
                                }void 0!==t&&this.recoverLevel(e,
                                t,
                                i,
                                r)
                            }
                        },
                        l.recoverLevel=function(e,
                        t,
                        i,
                        r){
                            var n,
                            a,
                            s,
                            o=this,
                            l=this.hls.config,
                            d=e.details,
                            u=this._levels[
                                t
                            ];if(u.loadError++,
                            u.fragmentError=r,
                            i){
                                if(!(this.levelRetryCount+1<=l.levelLoadingMaxRetry))return c.logger.error("level controller, cannot recover from "+d+" error"),
                                this.currentLevelIndex=null,
                                this.clearTimer(),
                                void(e.fatal=!0);a=Math.min(Math.pow(2,
                                this.levelRetryCount)*l.levelLoadingRetryDelay,
                                l.levelLoadingMaxRetryTimeout),
                                this.timer=setTimeout((function(){
                                    return o.loadLevel()
                                }),
                                a),
                                e.levelRetry=!0,
                                this.levelRetryCount++,
                                c.logger.warn("level controller, "+d+", retry in "+a+" ms, current retry count is "+this.levelRetryCount)
                            }(i||r)&&((n=u.url.length)>1&&u.loadError<n?(u.urlId=(u.urlId+1)%n,
                            u.details=void 0,
                            c.logger.warn("level controller, "+d+" for level "+t+": switching to redundant URL-id "+u.urlId)): -1===this.manualLevelIndex?(s=0===t?this._levels.length-1: t-1,
                            c.logger.warn("level controller, "+d+": switch to "+s),
                            this.hls.nextAutoLevel=this.currentLevelIndex=s): r&&(c.logger.warn("level controller, "+d+": reload a fragment"),
                            this.currentLevelIndex=null))
                        },
                        l.onFragLoaded=function(e){
                            var t=e.frag;if(void 0!==t&&"main"===t.type){
                                var i=this._levels[
                                    t.level
                                ];void 0!==i&&(i.fragmentError=!1,
                                i.loadError=0,
                                this.levelRetryCount=0)
                            }
                        },
                        l.onLevelLoaded=function(e){
                            var t=this,
                            i=e.level,
                            r=e.details;if(i===this.currentLevelIndex){
                                var n=this._levels[
                                    i
                                ];if(n.fragmentError||(n.loadError=0,
                                this.levelRetryCount=0),
                                r.live){
                                    var a=ne(n.details,
                                    r,
                                    e.stats.trequest);c.logger.log("live playlist, reload in "+Math.round(a)+" ms"),
                                    this.timer=setTimeout((function(){
                                        return t.loadLevel()
                                    }),
                                    a)
                                }else this.clearTimer()
                            }
                        },
                        l.onAudioTrackSwitched=function(e){
                            var t=this.hls.audioTracks[
                                e.id
                            ].groupId,
                            i=this.hls.levels[
                                this.currentLevelIndex
                            ];if(i&&i.audioGroupIds){
                                for(var r=-1,
                                n=0;n<i.audioGroupIds.length;n++)if(i.audioGroupIds[
                                    n
                                ]===t){
                                    r=n;break
                                }r!==i.urlId&&(i.urlId=r,
                                this.startLoad())
                            }
                        },
                        l.loadLevel=function(){
                            if(c.logger.debug("call to loadLevel"),
                            null!==this.currentLevelIndex&&this.canload){
                                var e=this._levels[
                                    this.currentLevelIndex
                                ];if("object"==typeof e&&e.url.length>0){
                                    var t=this.currentLevelIndex,
                                    i=e.urlId,
                                    r=e.url[
                                        i
                                    ];c.logger.log("Attempt loading level index "+t+" with URL-id "+i),
                                    this.hls.trigger(d.default.LEVEL_LOADING,
                                    {
                                        url: r,
                                        level: t,
                                        id: i
                                    })
                                }
                            }
                        },
                        l.removeLevel=function(e,
                        t){
                            var i=this.levels.filter((function(i,
                            r){
                                return r!==e||i.url.length>1&&void 0!==t&&(i.url=i.url.filter((function(e,
                                i){
                                    return i!==t
                                })),
                                i.urlId=0,
                                !0)
                            })).map((function(e,
                            t){
                                var i=e.details;return i&&i.fragments&&i.fragments.forEach((function(e){
                                    e.level=t
                                })),
                                e
                            }));this._levels=i,
                            this.hls.trigger(d.default.LEVELS_UPDATED,
                            {
                                levels: i
                            })
                        },
                        n=r,
                        (a=[
                            {
                                key: "levels",
                                get: function(){
                                    return this._levels
                                }
                            },
                            {
                                key: "level",
                                get: function(){
                                    return this.currentLevelIndex
                                },
                                set: function(e){
                                    var t=this._levels;t&&(e=Math.min(e,
                                    t.length-1),
                                    this.currentLevelIndex===e&&t[
                                        e
                                    ].details||this.setLevelInternal(e))
                                }
                            },
                            {
                                key: "manualLevel",
                                get: function(){
                                    return this.manualLevelIndex
                                },
                                set: function(e){
                                    this.manualLevelIndex=e,
                                    void 0===this._startLevel&&(this._startLevel=e),
                                    -1!==e&&(this.level=e)
                                }
                            },
                            {
                                key: "firstLevel",
                                get: function(){
                                    return this._firstLevel
                                },
                                set: function(e){
                                    this._firstLevel=e
                                }
                            },
                            {
                                key: "startLevel",
                                get: function(){
                                    if(void 0===this._startLevel){
                                        var e=this.hls.config.startLevel;return void 0!==e?e: this._firstLevel
                                    }return this._startLevel
                                },
                                set: function(e){
                                    this._startLevel=e
                                }
                            },
                            {
                                key: "nextLoadLevel",
                                get: function(){
                                    return-1!==this.manualLevelIndex?this.manualLevelIndex: this.hls.nextAutoLevel
                                },
                                set: function(e){
                                    this.level=e,
                                    -1===this.manualLevelIndex&&(this.hls.nextAutoLevel=e)
                                }
                            }
                        ])&&Pe(n.prototype,
                        a),
                        s&&Pe(n,
                        s),
                        r
                    }(h),
                    Fe=i("./src/demux/id3.js");function Ne(e,
                    t){
                        var i;try{
                            i=new Event("addtrack")
                        }catch(e){
                            (i=document.createEvent("Event")).initEvent("addtrack",
                            !1,
                            !1)
                        }i.track=e,
                        t.dispatchEvent(i)
                    }function Ue(e){
                        if(null==e?void 0: e.cues)for(;e.cues.length>0;)e.removeCue(e.cues[
                            0
                        ])
                    }var Be=function(e){
                        var t,
                        i;function r(t){
                            var i;return(i=e.call(this,
                            t,
                            d.default.MEDIA_ATTACHED,
                            d.default.MEDIA_DETACHING,
                            d.default.FRAG_PARSING_METADATA,
                            d.default.LIVE_BACK_BUFFER_REACHED)||this).id3Track=void 0,
                            i.media=void 0,
                            i
                        }i=e,
                        (t=r).prototype=Object.create(i.prototype),
                        t.prototype.constructor=t,
                        t.__proto__=i;var n=r.prototype;return n.destroy=function(){
                            h.prototype.destroy.call(this)
                        },
                        n.onMediaAttached=function(e){
                            this.media=e.media,
                            this.media
                        },
                        n.onMediaDetaching=function(){
                            Ue(this.id3Track),
                            this.id3Track=void 0,
                            this.media=void 0
                        },
                        n.getID3Track=function(e){
                            for(var t=0;t<e.length;t++){
                                var i=e[
                                    t
                                ];if("metadata"===i.kind&&"id3"===i.label)return Ne(i,
                                this.media),
                                i
                            }return this.media.addTextTrack("metadata",
                            "id3")
                        },
                        n.onFragParsingMetadata=function(e){
                            var t=e.frag,
                            i=e.samples;this.id3Track||(this.id3Track=this.getID3Track(this.media.textTracks),
                            this.id3Track.mode="hidden");for(var r=window.WebKitDataCue||window.VTTCue||window.TextTrackCue,
                            n=0;n<i.length;n++){
                                var a=Fe.default.getID3Frames(i[
                                    n
                                ].data);if(a){
                                    var s=Math.max(i[
                                        n
                                    ].pts,
                                    0),
                                    o=n<i.length-1?i[
                                        n+1
                                    ].pts: t.endPTS;o||(o=t.start+t.duration),
                                    o-s<=0&&(o=s+.25);for(var l=0;l<a.length;l++){
                                        var d=a[
                                            l
                                        ];if(!Fe.default.isTimeStampFrame(d)){
                                            var c=new r(s,
                                            o,
                                            "");c.value=d,
                                            this.id3Track.addCue(c)
                                        }
                                    }
                                }
                            }
                        },
                        n.onLiveBackBufferReached=function(e){
                            var t=e.bufferEnd,
                            i=this.id3Track;if(i&&i.cues&&i.cues.length){
                                var r=function(e,
                                t){
                                    if(t<e[
                                        0
                                    ].endTime)return e[
                                        0
                                    ];if(t>e[
                                        e.length-1
                                    ].endTime)return e[
                                        e.length-1
                                    ];for(var i=0,
                                    r=e.length-1;i<=r;){
                                        var n=Math.floor((r+i)/2);if(t<e[
                                            n
                                        ].endTime)r=n-1;else{
                                            if(!(t>e[
                                                n
                                            ].endTime))return e[
                                                n
                                            ];i=n+1
                                        }
                                    }return e[
                                        i
                                    ].endTime-t<t-e[
                                        r
                                    ].endTime?e[
                                        i
                                    ]: e[
                                        r
                                    ]
                                }(i.cues,
                                t);if(r)for(;i.cues[
                                    0
                                ]!==r;)i.removeCue(i.cues[
                                    0
                                ])
                            }
                        },
                        r
                    }(h),
                    Ge=function(){
                        function e(e){
                            this.alpha_=void 0,
                            this.estimate_=void 0,
                            this.totalWeight_=void 0,
                            this.alpha_=e?Math.exp(Math.log(.5)/e): 0,
                            this.estimate_=0,
                            this.totalWeight_=0
                        }var t=e.prototype;return t.sample=function(e,
                        t){
                            var i=Math.pow(this.alpha_,
                            e);this.estimate_=t*(1-i)+i*this.estimate_,
                            this.totalWeight_+=e
                        },
                        t.getTotalWeight=function(){
                            return this.totalWeight_
                        },
                        t.getEstimate=function(){
                            if(this.alpha_){
                                var e=1-Math.pow(this.alpha_,
                                this.totalWeight_);return this.estimate_/e
                            }return this.estimate_
                        },
                        e
                    }(),
                    je=function(){
                        function e(e,
                        t,
                        i,
                        r){
                            this.hls=void 0,
                            this.defaultEstimate_=void 0,
                            this.minWeight_=void 0,
                            this.minDelayMs_=void 0,
                            this.slow_=void 0,
                            this.fast_=void 0,
                            this.hls=e,
                            this.defaultEstimate_=r,
                            this.minWeight_=.001,
                            this.minDelayMs_=50,
                            this.slow_=new Ge(t),
                            this.fast_=new Ge(i)
                        }var t=e.prototype;return t.sample=function(e,
                        t){
                            var i=(e=Math.max(e,
                            this.minDelayMs_))/1e3,
                            r=8*t/i;this.fast_.sample(i,
                            r),
                            this.slow_.sample(i,
                            r)
                        },
                        t.canEstimate=function(){
                            var e=this.fast_;return e&&e.getTotalWeight()>=this.minWeight_
                        },
                        t.getEstimate=function(){
                            return this.canEstimate()?Math.min(this.fast_.getEstimate(),
                            this.slow_.getEstimate()): this.defaultEstimate_
                        },
                        t.destroy=function(){},
                        e
                    }();function $e(e,
                    t){
                        for(var i=0;i<t.length;i++){
                            var r=t[
                                i
                            ];r.enumerable=r.enumerable||!1,
                            r.configurable=!0,
                            "value"in r&&(r.writable=!0),
                            Object.defineProperty(e,
                            r.key,
                            r)
                        }
                    }var Ke=window.performance,
                    He=function(e){
                        var t,
                        i;function r(t){
                            var i;return(i=e.call(this,
                            t,
                            d.default.FRAG_LOADING,
                            d.default.FRAG_LOADED,
                            d.default.FRAG_BUFFERED,
                            d.default.ERROR)||this).lastLoadedFragLevel=0,
                            i._nextAutoLevel=-1,
                            i.hls=t,
                            i.timer=null,
                            i._bwEstimator=null,
                            i.onCheck=i._abandonRulesCheck.bind(function(e){
                                if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e
                            }(i)),
                            i
                        }i=e,
                        (t=r).prototype=Object.create(i.prototype),
                        t.prototype.constructor=t,
                        t.__proto__=i;var n,
                        a,
                        s,
                        u=r.prototype;return u.destroy=function(){
                            this.clearTimer(),
                            h.prototype.destroy.call(this)
                        },
                        u.onFragLoading=function(e){
                            var t=e.frag;if("main"===t.type&&(this.timer||(this.fragCurrent=t,
                            this.timer=setInterval(this.onCheck,
                            100)),
                            !this._bwEstimator)){
                                var i,
                                r,
                                n=this.hls,
                                a=n.config,
                                s=t.level;n.levels[
                                    s
                                ].details.live?(i=a.abrEwmaFastLive,
                                r=a.abrEwmaSlowLive): (i=a.abrEwmaFastVoD,
                                r=a.abrEwmaSlowVoD),
                                this._bwEstimator=new je(n,
                                r,
                                i,
                                a.abrEwmaDefaultEstimate)
                            }
                        },
                        u._abandonRulesCheck=function(){
                            var e=this.hls,
                            t=e.media,
                            i=this.fragCurrent;if(i){
                                var r=i.loader;if(!r||r.stats&&r.stats.aborted)return c.logger.warn("frag loader destroy or aborted, disarm abandonRules"),
                                this.clearTimer(),
                                void(this._nextAutoLevel=-1);var n=r.stats;if(t&&n&&(!t.paused&&0!==t.playbackRate||!t.readyState)&&i.autoLevel&&i.level){
                                    var a=Ke.now()-n.trequest,
                                    s=Math.abs(t.playbackRate);if(a>500*i.duration/s){
                                        var o=e.levels,
                                        l=Math.max(1,
                                        n.bw?n.bw/8: 1e3*n.loaded/a),
                                        u=o[
                                            i.level
                                        ];if(!u)return;var h=u.realBitrate?Math.max(u.realBitrate,
                                        u.bitrate): u.bitrate,
                                        f=n.total?n.total: Math.max(n.loaded,
                                        Math.round(i.duration*h/8)),
                                        g=t.currentTime,
                                        p=(f-n.loaded)/l,
                                        v=(K.bufferInfo(t,
                                        g,
                                        e.config.maxBufferHole).end-g)/s;if(v<2*i.duration/s&&p>v){
                                            var m,
                                            y=e.minAutoLevel;for(m=i.level-1;m>y;m--){
                                                var b=o[
                                                    m
                                                ].realBitrate?Math.max(o[
                                                    m
                                                ].realBitrate,
                                                o[
                                                    m
                                                ].bitrate): o[
                                                    m
                                                ].bitrate;if(i.duration*b/(6.4*l)<v)break
                                            }void 0<p&&(c.logger.warn("loading too slow, abort fragment loading and switch to level "+m+":fragLoadedDelay["+m+"]<fragLoadedDelay["+(i.level-1)+"];bufferStarvationDelay:"+(void 0).toFixed(1)+"<"+p.toFixed(1)+":"+v.toFixed(1)),
                                            e.nextLoadLevel=m,
                                            this._bwEstimator.sample(a,
                                            n.loaded),
                                            r.abort(),
                                            this.clearTimer(),
                                            e.trigger(d.default.FRAG_LOAD_EMERGENCY_ABORTED,
                                            {
                                                frag: i,
                                                stats: n
                                            }))
                                        }
                                    }
                                }
                            }
                        },
                        u.onFragLoaded=function(e){
                            var t=e.frag;if("main"===t.type&&Object(l.isFiniteNumber)(t.sn)){
                                if(this.clearTimer(),
                                this.lastLoadedFragLevel=t.level,
                                this._nextAutoLevel=-1,
                                this.hls.config.abrMaxWithRealBitrate){
                                    var i=this.hls.levels[
                                        t.level
                                    ],
                                    r=(i.loaded?i.loaded.bytes: 0)+e.stats.loaded,
                                    n=(i.loaded?i.loaded.duration: 0)+e.frag.duration;i.loaded={
                                        bytes: r,
                                        duration: n
                                    },
                                    i.realBitrate=Math.round(8*r/n)
                                }if(e.frag.bitrateTest){
                                    var a=e.stats;a.tparsed=a.tbuffered=a.tload,
                                    this.onFragBuffered(e)
                                }
                            }
                        },
                        u.onFragBuffered=function(e){
                            var t=e.stats,
                            i=e.frag;if(!0!==t.aborted&&"main"===i.type&&Object(l.isFiniteNumber)(i.sn)&&(!i.bitrateTest||t.tload===t.tbuffered)){
                                var r=t.tparsed-t.trequest;c.logger.log("latency/loading/parsing/append/kbps:"+Math.round(t.tfirst-t.trequest)+"/"+Math.round(t.tload-t.tfirst)+"/"+Math.round(t.tparsed-t.tload)+"/"+Math.round(t.tbuffered-t.tparsed)+"/"+Math.round(8*t.loaded/(t.tbuffered-t.trequest))),
                                this._bwEstimator.sample(r,
                                t.loaded),
                                t.bwEstimate=this._bwEstimator.getEstimate(),
                                i.bitrateTest?this.bitrateTestDelay=r/1e3: this.bitrateTestDelay=0
                            }
                        },
                        u.onError=function(e){
                            switch(e.details){
                                case o.ErrorDetails.FRAG_LOAD_ERROR: case o.ErrorDetails.FRAG_LOAD_TIMEOUT: this.clearTimer()
                            }
                        },
                        u.clearTimer=function(){
                            clearInterval(this.timer),
                            this.timer=null
                        },
                        u._findBestLevel=function(e,
                        t,
                        i,
                        r,
                        n,
                        a,
                        s,
                        o,
                        l){
                            for(var d=n;d>=r;d--){
                                var u=l[
                                    d
                                ];if(u){
                                    var h=u.details,
                                    f=h?h.totalduration/h.fragments.length: t,
                                    g=!!h&&h.live,
                                    p=void 0;p=d<=e?s*i: o*i;var v=l[
                                        d
                                    ].realBitrate?Math.max(l[
                                        d
                                    ].realBitrate,
                                    l[
                                        d
                                    ].bitrate): l[
                                        d
                                    ].bitrate,
                                    m=v*f/p;if(c.logger.trace("level/adjustedbw/bitrate/avgDuration/maxFetchDuration/fetchDuration: "+d+"/"+Math.round(p)+"/"+v+"/"+f+"/"+a+"/"+m),
                                    p>v&&(!m||g&&!this.bitrateTestDelay||m<a))return d
                                }
                            }return-1
                        },
                        n=r,
                        (a=[
                            {
                                key: "nextAutoLevel",
                                get: function(){
                                    var e=this._nextAutoLevel,
                                    t=this._bwEstimator;if(!(-1===e||t&&t.canEstimate()))return e;var i=this._nextABRAutoLevel;return-1!==e&&(i=Math.min(e,
                                    i)),
                                    i
                                },
                                set: function(e){
                                    this._nextAutoLevel=e
                                }
                            },
                            {
                                key: "_nextABRAutoLevel",
                                get: function(){
                                    var e=this.hls,
                                    t=e.maxAutoLevel,
                                    i=e.levels,
                                    r=e.config,
                                    n=e.minAutoLevel,
                                    a=e.media,
                                    s=this.lastLoadedFragLevel,
                                    o=this.fragCurrent?this.fragCurrent.duration: 0,
                                    l=a?a.currentTime: 0,
                                    d=a&&0!==a.playbackRate?Math.abs(a.playbackRate): 1,
                                    u=this._bwEstimator?this._bwEstimator.getEstimate(): r.abrEwmaDefaultEstimate,
                                    h=(K.bufferInfo(a,
                                    l,
                                    r.maxBufferHole).end-l)/d,
                                    f=this._findBestLevel(s,
                                    o,
                                    u,
                                    n,
                                    t,
                                    h,
                                    r.abrBandWidthFactor,
                                    r.abrBandWidthUpFactor,
                                    i);if(f>=0)return f;c.logger.trace("rebuffering expected to happen, lets try to find a quality level minimizing the rebuffering");var g=o?Math.min(o,
                                    r.maxStarvationDelay): r.maxStarvationDelay,
                                    p=r.abrBandWidthFactor,
                                    v=r.abrBandWidthUpFactor;if(0===h){
                                        var m=this.bitrateTestDelay;m&&(g=(o?Math.min(o,
                                        r.maxLoadingDelay): r.maxLoadingDelay)-m,
                                        c.logger.trace("bitrate test took "+Math.round(1e3*m)+"ms, set first fragment max fetchDuration to "+Math.round(1e3*g)+" ms"),
                                        p=v=1)
                                    }return f=this._findBestLevel(s,
                                    o,
                                    u,
                                    n,
                                    t,
                                    h+g,
                                    p,
                                    v,
                                    i),
                                    Math.max(f,
                                    0)
                                }
                            }
                        ])&&$e(n.prototype,
                        a),
                        s&&$e(n,
                        s),
                        r
                    }(h),
                    Ve=Y(),
                    We=function(e){
                        var t,
                        i;function r(t){
                            var i;return(i=e.call(this,
                            t,
                            d.default.MEDIA_ATTACHING,
                            d.default.MEDIA_DETACHING,
                            d.default.MANIFEST_PARSED,
                            d.default.BUFFER_RESET,
                            d.default.BUFFER_APPENDING,
                            d.default.BUFFER_CODECS,
                            d.default.BUFFER_EOS,
                            d.default.BUFFER_FLUSHING,
                            d.default.LEVEL_PTS_UPDATED,
                            d.default.LEVEL_UPDATED)||this)._msDuration=null,
                            i._levelDuration=null,
                            i._levelTargetDuration=10,
                            i._live=null,
                            i._objectUrl=null,
                            i._needsFlush=!1,
                            i._needsEos=!1,
                            i.config=void 0,
                            i.audioTimestampOffset=void 0,
                            i.bufferCodecEventsExpected=0,
                            i._bufferCodecEventsTotal=0,
                            i.media=null,
                            i.mediaSource=null,
                            i.segments=[],
                            i.parent=void 0,
                            i.appending=!1,
                            i.appended=0,
                            i.appendError=0,
                            i.flushBufferCounter=0,
                            i.tracks={},
                            i.pendingTracks={},
                            i.sourceBuffer={},
                            i.flushRange=[],
                            i._onMediaSourceOpen=function(){
                                c.logger.log("media source opened"),
                                i.hls.trigger(d.default.MEDIA_ATTACHED,
                                {
                                    media: i.media
                                });var e=i.mediaSource;e&&e.removeEventListener("sourceopen",
                                i._onMediaSourceOpen),
                                i.checkPendingTracks()
                            },
                            i._onMediaSourceClose=function(){
                                c.logger.log("media source closed")
                            },
                            i._onMediaSourceEnded=function(){
                                c.logger.log("media source ended")
                            },
                            i._onSBUpdateEnd=function(){
                                if(i.audioTimestampOffset&&i.sourceBuffer.audio){
                                    var e=i.sourceBuffer.audio;c.logger.warn("change mpeg audio timestamp offset from "+e.timestampOffset+" to "+i.audioTimestampOffset),
                                    e.timestampOffset=i.audioTimestampOffset,
                                    delete i.audioTimestampOffset
                                }i._needsFlush&&i.doFlush(),
                                i._needsEos&&i.checkEos(),
                                i.appending=!1;var t=i.parent,
                                r=i.segments.reduce((function(e,
                                i){
                                    return i.parent===t?e+1: e
                                }),
                                0),
                                n={},
                                a=i.sourceBuffer;for(var s in a){
                                    var o=a[
                                        s
                                    ];if(!o)throw Error("handling source buffer update end error: source buffer for "+s+" uninitilized and unable to update buffered TimeRanges.");n[
                                        s
                                    ]=o.buffered
                                }i.hls.trigger(d.default.BUFFER_APPENDED,
                                {
                                    parent: t,
                                    pending: r,
                                    timeRanges: n
                                }),
                                i._needsFlush||i.doAppending(),
                                i.updateMediaElementDuration(),
                                0===r&&i.flushLiveBackBuffer()
                            },
                            i._onSBUpdateError=function(e){
                                c.logger.error("sourceBuffer error:",
                                e),
                                i.hls.trigger(d.default.ERROR,
                                {
                                    type: o.ErrorTypes.MEDIA_ERROR,
                                    details: o.ErrorDetails.BUFFER_APPENDING_ERROR,
                                    fatal: !1
                                })
                            },
                            i.config=t.config,
                            i
                        }i=e,
                        (t=r).prototype=Object.create(i.prototype),
                        t.prototype.constructor=t,
                        t.__proto__=i;var n=r.prototype;return n.destroy=function(){
                            h.prototype.destroy.call(this)
                        },
                        n.onLevelPtsUpdated=function(e){
                            var t=e.type,
                            i=this.tracks.audio;if("audio"===t&&i&&"audio/mpeg"===i.container){
                                var r=this.sourceBuffer.audio;if(!r)throw Error("Level PTS Updated and source buffer for audio uninitalized");if(Math.abs(r.timestampOffset-e.start)>.1){
                                    var n=r.updating;try{
                                        r.abort()
                                    }catch(e){
                                        c.logger.warn("can not abort audio buffer: "+e)
                                    }n?this.audioTimestampOffset=e.start: (c.logger.warn("change mpeg audio timestamp offset from "+r.timestampOffset+" to "+e.start),
                                    r.timestampOffset=e.start)
                                }
                            }
                        },
                        n.onManifestParsed=function(e){
                            var t=2;(e.audio&&!e.video||!e.altAudio)&&(t=1),
                            this.bufferCodecEventsExpected=this._bufferCodecEventsTotal=t,
                            c.logger.log(this.bufferCodecEventsExpected+" bufferCodec event(s) expected")
                        },
                        n.onMediaAttaching=function(e){
                            var t=this.media=e.media;if(t&&Ve){
                                var i=this.mediaSource=new Ve;i.addEventListener("sourceopen",
                                this._onMediaSourceOpen),
                                i.addEventListener("sourceended",
                                this._onMediaSourceEnded),
                                i.addEventListener("sourceclose",
                                this._onMediaSourceClose),
                                t.src=window.URL.createObjectURL(i),
                                this._objectUrl=t.src
                            }
                        },
                        n.onMediaDetaching=function(){
                            c.logger.log("media source detaching");var e=this.mediaSource;if(e){
                                if("open"===e.readyState)try{
                                    e.endOfStream()
                                }catch(e){
                                    c.logger.warn("onMediaDetaching:"+e.message+" while calling endOfStream")
                                }e.removeEventListener("sourceopen",
                                this._onMediaSourceOpen),
                                e.removeEventListener("sourceended",
                                this._onMediaSourceEnded),
                                e.removeEventListener("sourceclose",
                                this._onMediaSourceClose),
                                this.media&&(this._objectUrl&&window.URL.revokeObjectURL(this._objectUrl),
                                this.media.src===this._objectUrl?(this.media.removeAttribute("src"),
                                this.media.load()): c.logger.warn("media.src was changed by a third party - skip cleanup")),
                                this.mediaSource=null,
                                this.media=null,
                                this._objectUrl=null,
                                this.bufferCodecEventsExpected=this._bufferCodecEventsTotal,
                                this.pendingTracks={},
                                this.tracks={},
                                this.sourceBuffer={},
                                this.flushRange=[],
                                this.segments=[],
                                this.appended=0
                            }this.hls.trigger(d.default.MEDIA_DETACHED)
                        },
                        n.checkPendingTracks=function(){
                            var e=this.bufferCodecEventsExpected,
                            t=this.pendingTracks,
                            i=Object.keys(t).length;(i&&!e||2===i)&&(this.createSourceBuffers(t),
                            this.pendingTracks={},
                            this.doAppending())
                        },
                        n.onBufferReset=function(){
                            var e=this.sourceBuffer;for(var t in e){
                                var i=e[
                                    t
                                ];try{
                                    i&&(this.mediaSource&&this.mediaSource.removeSourceBuffer(i),
                                    i.removeEventListener("updateend",
                                    this._onSBUpdateEnd),
                                    i.removeEventListener("error",
                                    this._onSBUpdateError))
                                }catch(e){}
                            }this.sourceBuffer={},
                            this.flushRange=[],
                            this.segments=[],
                            this.appended=0
                        },
                        n.onBufferCodecs=function(e){
                            var t=this;Object.keys(this.sourceBuffer).length||(Object.keys(e).forEach((function(i){
                                t.pendingTracks[
                                    i
                                ]=e[
                                    i
                                ]
                            })),
                            this.bufferCodecEventsExpected=Math.max(this.bufferCodecEventsExpected-1,
                            0),
                            this.mediaSource&&"open"===this.mediaSource.readyState&&this.checkPendingTracks())
                        },
                        n.createSourceBuffers=function(e){
                            var t=this.sourceBuffer,
                            i=this.mediaSource;if(!i)throw Error("createSourceBuffers called when mediaSource was null");for(var r in e)if(!t[
                                r
                            ]){
                                var n=e[
                                    r
                                ];if(!n)throw Error("source buffer exists for track "+r+", however track does not");var a=n.levelCodec||n.codec,
                                s=n.container+";codecs="+a;c.logger.log("creating sourceBuffer("+s+")");try{
                                    var l=t[
                                        r
                                    ]=i.addSourceBuffer(s);l.addEventListener("updateend",
                                    this._onSBUpdateEnd),
                                    l.addEventListener("error",
                                    this._onSBUpdateError),
                                    this.tracks[
                                        r
                                    ]={
                                        buffer: l,
                                        codec: a,
                                        id: n.id,
                                        container: n.container,
                                        levelCodec: n.levelCodec
                                    }
                                }catch(e){
                                    c.logger.error("error while trying to add sourceBuffer:"+e.message),
                                    this.hls.trigger(d.default.ERROR,
                                    {
                                        type: o.ErrorTypes.MEDIA_ERROR,
                                        details: o.ErrorDetails.BUFFER_ADD_CODEC_ERROR,
                                        fatal: !1,
                                        err: e,
                                        mimeType: s
                                    })
                                }
                            }this.hls.trigger(d.default.BUFFER_CREATED,
                            {
                                tracks: this.tracks
                            })
                        },
                        n.onBufferAppending=function(e){
                            this._needsFlush||(this.segments?this.segments.push(e): this.segments=[
                                e
                            ],
                            this.doAppending())
                        },
                        n.onBufferEos=function(e){
                            for(var t in this.sourceBuffer)if(!e.type||e.type===t){
                                var i=this.sourceBuffer[
                                    t
                                ];i&&!i.ended&&(i.ended=!0,
                                c.logger.log(t+" sourceBuffer now EOS"))
                            }this.checkEos()
                        },
                        n.checkEos=function(){
                            var e=this.sourceBuffer,
                            t=this.mediaSource;if(t&&"open"===t.readyState){
                                for(var i in e){
                                    var r=e[
                                        i
                                    ];if(r){
                                        if(!r.ended)return;if(r.updating)return void(this._needsEos=!0)
                                    }
                                }c.logger.log("all media data are available, signal endOfStream() to MediaSource and stop loading fragment");try{
                                    t.endOfStream()
                                }catch(e){
                                    c.logger.warn("exception while calling mediaSource.endOfStream()")
                                }this._needsEos=!1
                            }else this._needsEos=!1
                        },
                        n.onBufferFlushing=function(e){
                            e.type?this.flushRange.push({
                                start: e.startOffset,
                                end: e.endOffset,
                                type: e.type
                            }): (this.flushRange.push({
                                start: e.startOffset,
                                end: e.endOffset,
                                type: "video"
                            }),
                            this.flushRange.push({
                                start: e.startOffset,
                                end: e.endOffset,
                                type: "audio"
                            })),
                            this.flushBufferCounter=0,
                            this.doFlush()
                        },
                        n.flushLiveBackBuffer=function(){
                            if(this._live){
                                var e=this.config.liveBackBufferLength;if(isFinite(e)&&!(e<0))if(this.media)for(var t=this.media.currentTime,
                                i=this.sourceBuffer,
                                r=Object.keys(i),
                                n=t-Math.max(e,
                                this._levelTargetDuration),
                                a=r.length-1;a>=0;a--){
                                    var s=r[
                                        a
                                    ],
                                    o=i[
                                        s
                                    ];if(o){
                                        var l=o.buffered;l.length>0&&n>l.start(0)&&this.removeBufferRange(s,
                                        o,
                                        0,
                                        n)&&this.hls.trigger(d.default.LIVE_BACK_BUFFER_REACHED,
                                        {
                                            bufferEnd: n
                                        })
                                    }
                                }else c.logger.error("flushLiveBackBuffer called without attaching media")
                            }
                        },
                        n.onLevelUpdated=function(e){
                            var t=e.details;t.fragments.length>0&&(this._levelDuration=t.totalduration+t.fragments[
                                0
                            ].start,
                            this._levelTargetDuration=t.averagetargetduration||t.targetduration||10,
                            this._live=t.live,
                            this.updateMediaElementDuration())
                        },
                        n.updateMediaElementDuration=function(){
                            var e,
                            t=this.config;if(null!==this._levelDuration&&this.media&&this.mediaSource&&this.sourceBuffer&&0!==this.media.readyState&&"open"===this.mediaSource.readyState){
                                for(var i in this.sourceBuffer){
                                    var r=this.sourceBuffer[
                                        i
                                    ];if(r&&!0===r.updating)return
                                }e=this.media.duration,
                                null===this._msDuration&&(this._msDuration=this.mediaSource.duration),
                                !0===this._live&&!0===t.liveDurationInfinity?(c.logger.log("Media Source duration is set to Infinity"),
                                this._msDuration=this.mediaSource.duration=1/0): (this._levelDuration>this._msDuration&&this._levelDuration>e||!Object(l.isFiniteNumber)(e))&&(c.logger.log("Updating Media Source duration to "+this._levelDuration.toFixed(3)),
                                this._msDuration=this.mediaSource.duration=this._levelDuration)
                            }
                        },
                        n.doFlush=function(){
                            for(;this.flushRange.length;){
                                var e=this.flushRange[
                                    0
                                ];if(!this.flushBuffer(e.start,
                                e.end,
                                e.type))return void(this._needsFlush=!0);this.flushRange.shift(),
                                this.flushBufferCounter=0
                            }if(0===this.flushRange.length){
                                this._needsFlush=!1;var t=0,
                                i=this.sourceBuffer;try{
                                    for(var r in i){
                                        var n=i[
                                            r
                                        ];n&&(t+=n.buffered.length)
                                    }
                                }catch(e){
                                    c.logger.error("error while accessing sourceBuffer.buffered")
                                }this.appended=t,
                                this.hls.trigger(d.default.BUFFER_FLUSHED)
                            }
                        },
                        n.doAppending=function(){
                            var e=this.config,
                            t=this.hls,
                            i=this.segments,
                            r=this.sourceBuffer;if(Object.keys(r).length){
                                if(!this.media||this.media.error)return this.segments=[],
                                void c.logger.error("trying to append although a media error occured, flush segment and abort");if(!this.appending){
                                    var n=i.shift();if(n)try{
                                        var a=r[
                                            n.type
                                        ];if(!a)return void this._onSBUpdateEnd();if(a.updating)return void i.unshift(n);a.ended=!1,
                                        this.parent=n.parent,
                                        a.appendBuffer(n.data),
                                        this.appendError=0,
                                        this.appended++,
                                        this.appending=!0
                                    }catch(r){
                                        c.logger.error("error while trying to append buffer:"+r.message),
                                        i.unshift(n);var s={
                                            type: o.ErrorTypes.MEDIA_ERROR,
                                            parent: n.parent,
                                            details: "",
                                            fatal: !1
                                        };22===r.code?(this.segments=[],
                                        s.details=o.ErrorDetails.BUFFER_FULL_ERROR): (this.appendError++,
                                        s.details=o.ErrorDetails.BUFFER_APPEND_ERROR,
                                        this.appendError>e.appendErrorMaxRetry&&(c.logger.log("fail "+e.appendErrorMaxRetry+" times to append segment in sourceBuffer"),
                                        this.segments=[],
                                        s.fatal=!0)),
                                        t.trigger(d.default.ERROR,
                                        s)
                                    }
                                }
                            }
                        },
                        n.flushBuffer=function(e,
                        t,
                        i){
                            var r=this.sourceBuffer;if(!Object.keys(r).length)return!0;var n="null";if(this.media&&(n=this.media.currentTime.toFixed(3)),
                            c.logger.log("flushBuffer,pos/start/end: "+n+"/"+e+"/"+t),
                            this.flushBufferCounter>=this.appended)return c.logger.warn("abort flushing too many retries"),
                            !0;var a=r[
                                i
                            ];if(a){
                                if(a.ended=!1,
                                a.updating)return c.logger.warn("cannot flush, sb updating in progress"),
                                !1;if(this.removeBufferRange(i,
                                a,
                                e,
                                t))return this.flushBufferCounter++,
                                !1
                            }return c.logger.log("buffer flushed"),
                            !0
                        },
                        n.removeBufferRange=function(e,
                        t,
                        i,
                        r){
                            try{
                                for(var n=0;n<t.buffered.length;n++){
                                    var a=t.buffered.start(n),
                                    s=t.buffered.end(n),
                                    o=Math.max(a,
                                    i),
                                    l=Math.min(s,
                                    r);if(Math.min(l,
                                    s)-o>.5){
                                        var d="null";return this.media&&(d=this.media.currentTime.toString()),
                                        c.logger.log("sb remove "+e+" ["+o+","+l+"], of ["+a+","+s+"], pos:"+d),
                                        t.remove(o,
                                        l),
                                        !0
                                    }
                                }
                            }catch(e){
                                c.logger.warn("removeBufferRange failed",
                                e)
                            }return!1
                        },
                        r
                    }(h);function Ye(e,
                    t){
                        for(var i=0;i<t.length;i++){
                            var r=t[
                                i
                            ];r.enumerable=r.enumerable||!1,
                            r.configurable=!0,
                            "value"in r&&(r.writable=!0),
                            Object.defineProperty(e,
                            r.key,
                            r)
                        }
                    }var ze=function(e){
                        var t,
                        i;function r(t){
                            var i;return(i=e.call(this,
                            t,
                            d.default.FPS_DROP_LEVEL_CAPPING,
                            d.default.MEDIA_ATTACHING,
                            d.default.MANIFEST_PARSED,
                            d.default.LEVELS_UPDATED,
                            d.default.BUFFER_CODECS,
                            d.default.MEDIA_DETACHING)||this).autoLevelCapping=Number.POSITIVE_INFINITY,
                            i.firstLevel=null,
                            i.levels=[],
                            i.media=null,
                            i.restrictedLevels=[],
                            i.timer=null,
                            i.clientRect=null,
                            i
                        }i=e,
                        (t=r).prototype=Object.create(i.prototype),
                        t.prototype.constructor=t,
                        t.__proto__=i;var n,
                        a,
                        s,
                        o=r.prototype;return o.destroy=function(){
                            this.hls.config.capLevelToPlayerSize&&(this.media=null,
                            this.clientRect=null,
                            this.stopCapping())
                        },
                        o.onFpsDropLevelCapping=function(e){
                            r.isLevelAllowed(e.droppedLevel,
                            this.restrictedLevels)&&this.restrictedLevels.push(e.droppedLevel)
                        },
                        o.onMediaAttaching=function(e){
                            this.media=e.media instanceof window.HTMLVideoElement?e.media: null
                        },
                        o.onManifestParsed=function(e){
                            var t=this.hls;this.restrictedLevels=[],
                            this.levels=e.levels,
                            this.firstLevel=e.firstLevel,
                            t.config.capLevelToPlayerSize&&e.video&&this.startCapping()
                        },
                        o.onBufferCodecs=function(e){
                            this.hls.config.capLevelToPlayerSize&&e.video&&this.startCapping()
                        },
                        o.onLevelsUpdated=function(e){
                            this.levels=e.levels
                        },
                        o.onMediaDetaching=function(){
                            this.stopCapping()
                        },
                        o.detectPlayerSize=function(){
                            if(this.media){
                                var e=this.levels?this.levels.length: 0;if(e){
                                    var t=this.hls;t.autoLevelCapping=this.getMaxLevel(e-1),
                                    t.autoLevelCapping>this.autoLevelCapping&&t.streamController.nextLevelSwitch(),
                                    this.autoLevelCapping=t.autoLevelCapping
                                }
                            }
                        },
                        o.getMaxLevel=function(e){
                            var t=this;if(!this.levels)return-1;var i=this.levels.filter((function(i,
                            n){
                                return r.isLevelAllowed(n,
                                t.restrictedLevels)&&n<=e
                            }));return this.clientRect=null,
                            r.getMaxLevelByMediaSize(i,
                            this.mediaWidth,
                            this.mediaHeight)
                        },
                        o.startCapping=function(){
                            this.timer||(this.autoLevelCapping=Number.POSITIVE_INFINITY,
                            this.hls.firstLevel=this.getMaxLevel(this.firstLevel),
                            clearInterval(this.timer),
                            this.timer=setInterval(this.detectPlayerSize.bind(this),
                            1e3),
                            this.detectPlayerSize())
                        },
                        o.stopCapping=function(){
                            this.restrictedLevels=[],
                            this.firstLevel=null,
                            this.autoLevelCapping=Number.POSITIVE_INFINITY,
                            this.timer&&(this.timer=clearInterval(this.timer),
                            this.timer=null)
                        },
                        o.getDimensions=function(){
                            if(this.clientRect)return this.clientRect;var e=this.media,
                            t={
                                width: 0,
                                height: 0
                            };if(e){
                                var i=e.getBoundingClientRect();t.width=i.width,
                                t.height=i.height,
                                t.width||t.height||(t.width=i.right-i.left||e.width||0,
                                t.height=i.bottom-i.top||e.height||0)
                            }return this.clientRect=t,
                            t
                        },
                        r.isLevelAllowed=function(e,
                        t){
                            return void 0===t&&(t=[]),
                            -1===t.indexOf(e)
                        },
                        r.getMaxLevelByMediaSize=function(e,
                        t,
                        i){
                            if(!e||e&&!e.length)return-1;for(var r,
                            n,
                            a=e.length-1,
                            s=0;s<e.length;s+=1){
                                var o=e[
                                    s
                                ];if((o.width>=t||o.height>=i)&&(r=o,
                                !(n=e[
                                    s+1
                                ])||r.width!==n.width||r.height!==n.height)){
                                    a=s;break
                                }
                            }return a
                        },
                        n=r,
                        s=[
                            {
                                key: "contentScaleFactor",
                                get: function(){
                                    var e=1;try{
                                        e=window.devicePixelRatio
                                    }catch(e){}return e
                                }
                            }
                        ],
                        (a=[
                            {
                                key: "mediaWidth",
                                get: function(){
                                    return this.getDimensions().width*r.contentScaleFactor
                                }
                            },
                            {
                                key: "mediaHeight",
                                get: function(){
                                    return this.getDimensions().height*r.contentScaleFactor
                                }
                            }
                        ])&&Ye(n.prototype,
                        a),
                        s&&Ye(n,
                        s),
                        r
                    }(h),
                    qe=window.performance,
                    Xe=function(e){
                        var t,
                        i;function r(t){
                            return e.call(this,
                            t,
                            d.default.MEDIA_ATTACHING)||this
                        }i=e,
                        (t=r).prototype=Object.create(i.prototype),
                        t.prototype.constructor=t,
                        t.__proto__=i;var n=r.prototype;return n.destroy=function(){
                            this.timer&&clearInterval(this.timer),
                            this.isVideoPlaybackQualityAvailable=!1
                        },
                        n.onMediaAttaching=function(e){
                            var t=this.hls.config;t.capLevelOnFPSDrop&&("function"==typeof(this.video=e.media instanceof window.HTMLVideoElement?e.media: null).getVideoPlaybackQuality&&(this.isVideoPlaybackQualityAvailable=!0),
                            clearInterval(this.timer),
                            this.timer=setInterval(this.checkFPSInterval.bind(this),
                            t.fpsDroppedMonitoringPeriod))
                        },
                        n.checkFPS=function(e,
                        t,
                        i){
                            var r=qe.now();if(t){
                                if(this.lastTime){
                                    var n=r-this.lastTime,
                                    a=i-this.lastDroppedFrames,
                                    s=t-this.lastDecodedFrames,
                                    o=1e3*a/n,
                                    l=this.hls;if(l.trigger(d.default.FPS_DROP,
                                    {
                                        currentDropped: a,
                                        currentDecoded: s,
                                        totalDroppedFrames: i
                                    }),
                                    o>0&&a>l.config.fpsDroppedMonitoringThreshold*s){
                                        var u=l.currentLevel;c.logger.warn("drop FPS ratio greater than max allowed value for currentLevel: "+u),
                                        u>0&&(-1===l.autoLevelCapping||l.autoLevelCapping>=u)&&(u-=1,
                                        l.trigger(d.default.FPS_DROP_LEVEL_CAPPING,
                                        {
                                            level: u,
                                            droppedLevel: l.currentLevel
                                        }),
                                        l.autoLevelCapping=u,
                                        l.streamController.nextLevelSwitch())
                                    }
                                }this.lastTime=r,
                                this.lastDroppedFrames=i,
                                this.lastDecodedFrames=t
                            }
                        },
                        n.checkFPSInterval=function(){
                            var e=this.video;if(e)if(this.isVideoPlaybackQualityAvailable){
                                var t=e.getVideoPlaybackQuality();this.checkFPS(e,
                                t.totalVideoFrames,
                                t.droppedVideoFrames)
                            }else this.checkFPS(e,
                            e.webkitDecodedFrameCount,
                            e.webkitDroppedFrameCount)
                        },
                        r
                    }(h),
                    Qe=function(){
                        function e(e){
                            e&&e.xhrSetup&&(this.xhrSetup=e.xhrSetup)
                        }var t=e.prototype;return t.destroy=function(){
                            this.abort(),
                            this.loader=null
                        },
                        t.abort=function(){
                            var e=this.loader;e&&4!==e.readyState&&(this.stats.aborted=!0,
                            e.abort()),
                            window.clearTimeout(this.requestTimeout),
                            this.requestTimeout=null,
                            window.clearTimeout(this.retryTimeout),
                            this.retryTimeout=null
                        },
                        t.load=function(e,
                        t,
                        i){
                            this.context=e,
                            this.config=t,
                            this.callbacks=i,
                            this.stats={
                                trequest: window.performance.now(),
                                retry: 0
                            },
                            this.retryDelay=t.retryDelay,
                            this.loadInternal()
                        },
                        t.loadInternal=function(){
                            var e,
                            t=this.context;e=this.loader=new window.XMLHttpRequest;var i=this.stats;i.tfirst=0,
                            i.loaded=0;var r=this.xhrSetup;try{
                                if(r)try{
                                    r(e,
                                    t.url)
                                }catch(i){
                                    e.open("GET",
                                    t.url,
                                    !0),
                                    r(e,
                                    t.url)
                                }e.readyState||e.open("GET",
                                t.url,
                                !0)
                            }catch(i){
                                return void this.callbacks.onError({
                                    code: e.status,
                                    text: i.message
                                },
                                t,
                                e)
                            }t.rangeEnd&&e.setRequestHeader("Range",
                            "bytes="+t.rangeStart+"-"+(t.rangeEnd-1)),
                            e.onreadystatechange=this.readystatechange.bind(this),
                            e.onprogress=this.loadprogress.bind(this),
                            e.responseType=t.responseType,
                            this.requestTimeout=window.setTimeout(this.loadtimeout.bind(this),
                            this.config.timeout),
                            e.send()
                        },
                        t.readystatechange=function(e){
                            var t=e.currentTarget,
                            i=t.readyState,
                            r=this.stats,
                            n=this.context,
                            a=this.config;if(!r.aborted&&i>=2)if(window.clearTimeout(this.requestTimeout),
                            0===r.tfirst&&(r.tfirst=Math.max(window.performance.now(),
                            r.trequest)),
                            4===i){
                                var s=t.status;if(s>=200&&s<300){
                                    var o,
                                    l;r.tload=Math.max(r.tfirst,
                                    window.performance.now()),
                                    l="arraybuffer"===n.responseType?(o=t.response).byteLength: (o=t.responseText).length,
                                    r.loaded=r.total=l;var d={
                                        url: t.responseURL,
                                        data: o
                                    };this.callbacks.onSuccess(d,
                                    r,
                                    n,
                                    t)
                                }else r.retry>=a.maxRetry||s>=400&&s<499?(c.logger.error(s+" while loading "+n.url),
                                this.callbacks.onError({
                                    code: s,
                                    text: t.statusText
                                },
                                n,
                                t)): (c.logger.warn(s+" while loading "+n.url+", retrying in "+this.retryDelay+"..."),
                                this.destroy(),
                                this.retryTimeout=window.setTimeout(this.loadInternal.bind(this),
                                this.retryDelay),
                                this.retryDelay=Math.min(2*this.retryDelay,
                                a.maxRetryDelay),
                                r.retry++)
                            }else this.requestTimeout=window.setTimeout(this.loadtimeout.bind(this),
                            a.timeout)
                        },
                        t.loadtimeout=function(){
                            c.logger.warn("timeout while loading "+this.context.url),
                            this.callbacks.onTimeout(this.stats,
                            this.context,
                            null)
                        },
                        t.loadprogress=function(e){
                            var t=e.currentTarget,
                            i=this.stats;i.loaded=e.loaded,
                            e.lengthComputable&&(i.total=e.total);var r=this.callbacks.onProgress;r&&r(i,
                            this.context,
                            null,
                            t)
                        },
                        e
                    }();function Je(e,
                    t){
                        for(var i=0;i<t.length;i++){
                            var r=t[
                                i
                            ];r.enumerable=r.enumerable||!1,
                            r.configurable=!0,
                            "value"in r&&(r.writable=!0),
                            Object.defineProperty(e,
                            r.key,
                            r)
                        }
                    }var Ze=function(e){
                        var t,
                        i;function r(t){
                            var i;return(i=e.call(this,
                            t,
                            d.default.MANIFEST_LOADING,
                            d.default.MANIFEST_PARSED,
                            d.default.AUDIO_TRACK_LOADED,
                            d.default.AUDIO_TRACK_SWITCHED,
                            d.default.LEVEL_LOADED,
                            d.default.ERROR)||this)._trackId=-1,
                            i._selectDefaultTrack=!0,
                            i.tracks=[],
                            i.trackIdBlacklist=Object.create(null),
                            i.audioGroupId=null,
                            i
                        }i=e,
                        (t=r).prototype=Object.create(i.prototype),
                        t.prototype.constructor=t,
                        t.__proto__=i;var n,
                        a,
                        s,
                        l=r.prototype;return l.onManifestLoading=function(){
                            this.tracks=[],
                            this._trackId=-1,
                            this._selectDefaultTrack=!0
                        },
                        l.onManifestParsed=function(e){
                            var t=this.tracks=e.audioTracks||[];this.hls.trigger(d.default.AUDIO_TRACKS_UPDATED,
                            {
                                audioTracks: t
                            }),
                            this._selectAudioGroup(this.hls.nextLoadLevel)
                        },
                        l.onAudioTrackLoaded=function(e){
                            if(e.id>=this.tracks.length)c.logger.warn("Invalid audio track id:",
                            e.id);else{
                                if(c.logger.log("audioTrack "+e.id+" loaded"),
                                this.tracks[
                                    e.id
                                ].details=e.details,
                                e.details.live&&!this.hasInterval()){
                                    var t=1e3*e.details.targetduration;this.setInterval(t)
                                }!e.details.live&&this.hasInterval()&&this.clearInterval()
                            }
                        },
                        l.onAudioTrackSwitched=function(e){
                            var t=this.tracks[
                                e.id
                            ].groupId;t&&this.audioGroupId!==t&&(this.audioGroupId=t)
                        },
                        l.onLevelLoaded=function(e){
                            this._selectAudioGroup(e.level)
                        },
                        l.onError=function(e){
                            e.type===o.ErrorTypes.NETWORK_ERROR&&(e.fatal&&this.clearInterval(),
                            e.details===o.ErrorDetails.AUDIO_TRACK_LOAD_ERROR&&(c.logger.warn("Network failure on audio-track id:",
                            e.context.id),
                            this._handleLoadError()))
                        },
                        l._setAudioTrack=function(e){
                            if(this._trackId===e&&this.tracks[
                                this._trackId
                            ].details)c.logger.debug("Same id as current audio-track passed, and track details available -> no-op");else if(e<0||e>=this.tracks.length)c.logger.warn("Invalid id passed to audio-track controller");else{
                                var t=this.tracks[
                                    e
                                ];c.logger.log("Now switching to audio-track index "+e),
                                this.clearInterval(),
                                this._trackId=e;var i=t.url,
                                r=t.type,
                                n=t.id;this.hls.trigger(d.default.AUDIO_TRACK_SWITCHING,
                                {
                                    id: n,
                                    type: r,
                                    url: i
                                }),
                                this._loadTrackDetailsIfNeeded(t)
                            }
                        },
                        l.doTick=function(){
                            this._updateTrack(this._trackId)
                        },
                        l._selectAudioGroup=function(e){
                            var t=this.hls.levels[
                                e
                            ];if(t&&t.audioGroupIds){
                                var i=t.audioGroupIds[
                                    t.urlId
                                ];this.audioGroupId!==i&&(this.audioGroupId=i,
                                this._selectInitialAudioTrack())
                            }
                        },
                        l._selectInitialAudioTrack=function(){
                            var e=this,
                            t=this.tracks;if(t.length){
                                var i=this.tracks[
                                    this._trackId
                                ],
                                r=null;if(i&&(r=i.name),
                                this._selectDefaultTrack){
                                    var n=t.filter((function(e){
                                        return e.default
                                    }));n.length?t=n: c.logger.warn("No default audio tracks defined")
                                }var a=!1,
                                s=function(){
                                    t.forEach((function(t){
                                        a||e.audioGroupId&&t.groupId!==e.audioGroupId||r&&r!==t.name||(e._setAudioTrack(t.id),
                                        a=!0)
                                    }))
                                };s(),
                                a||(r=null,
                                s()),
                                a||(c.logger.error("No track found for running audio group-ID: "+this.audioGroupId),
                                this.hls.trigger(d.default.ERROR,
                                {
                                    type: o.ErrorTypes.MEDIA_ERROR,
                                    details: o.ErrorDetails.AUDIO_TRACK_LOAD_ERROR,
                                    fatal: !0
                                }))
                            }
                        },
                        l._needsTrackLoading=function(e){
                            var t=e.details,
                            i=e.url;return!(t&&!t.live||!i)
                        },
                        l._loadTrackDetailsIfNeeded=function(e){
                            if(this._needsTrackLoading(e)){
                                var t=e.url,
                                i=e.id;c.logger.log("loading audio-track playlist for id: "+i),
                                this.hls.trigger(d.default.AUDIO_TRACK_LOADING,
                                {
                                    url: t,
                                    id: i
                                })
                            }
                        },
                        l._updateTrack=function(e){
                            if(!(e<0||e>=this.tracks.length)){
                                this.clearInterval(),
                                this._trackId=e,
                                c.logger.log("trying to update audio-track "+e);var t=this.tracks[
                                    e
                                ];this._loadTrackDetailsIfNeeded(t)
                            }
                        },
                        l._handleLoadError=function(){
                            this.trackIdBlacklist[
                                this._trackId
                            ]=!0;var e=this._trackId,
                            t=this.tracks[
                                e
                            ],
                            i=t.name,
                            r=t.language,
                            n=t.groupId;c.logger.warn("Loading failed on audio track id: "+e+", group-id: "+n+', name/language: "'+i+'" / "'+r+'"');for(var a=e,
                            s=0;s<this.tracks.length;s++)if(!this.trackIdBlacklist[
                                s
                            ]&&this.tracks[
                                s
                            ].name===i){
                                a=s;break
                            }a!==e?(c.logger.log("Attempting audio-track fallback id:",
                            a,
                            "group-id:",
                            this.tracks[
                                a
                            ].groupId),
                            this._setAudioTrack(a)): c.logger.warn('No fallback audio-track found for name/language: "'+i+'" / "'+r+'"')
                        },
                        n=r,
                        (a=[
                            {
                                key: "audioTracks",
                                get: function(){
                                    return this.tracks
                                }
                            },
                            {
                                key: "audioTrack",
                                get: function(){
                                    return this._trackId
                                },
                                set: function(e){
                                    this._setAudioTrack(e),
                                    this._selectDefaultTrack=!1
                                }
                            }
                        ])&&Je(n.prototype,
                        a),
                        s&&Je(n,
                        s),
                        r
                    }(ge);function et(e,
                    t){
                        for(var i=0;i<t.length;i++){
                            var r=t[
                                i
                            ];r.enumerable=r.enumerable||!1,
                            r.configurable=!0,
                            "value"in r&&(r.writable=!0),
                            Object.defineProperty(e,
                            r.key,
                            r)
                        }
                    }var tt=window.performance,
                    it=function(e){
                        var t,
                        i;function r(t,
                        i){
                            var r;return(r=e.call(this,
                            t,
                            d.default.MEDIA_ATTACHED,
                            d.default.MEDIA_DETACHING,
                            d.default.AUDIO_TRACKS_UPDATED,
                            d.default.AUDIO_TRACK_SWITCHING,
                            d.default.AUDIO_TRACK_LOADED,
                            d.default.KEY_LOADED,
                            d.default.FRAG_LOADED,
                            d.default.FRAG_PARSING_INIT_SEGMENT,
                            d.default.FRAG_PARSING_DATA,
                            d.default.FRAG_PARSED,
                            d.default.ERROR,
                            d.default.BUFFER_RESET,
                            d.default.BUFFER_CREATED,
                            d.default.BUFFER_APPENDED,
                            d.default.BUFFER_FLUSHED,
                            d.default.INIT_PTS_FOUND)||this).fragmentTracker=i,
                            r.config=t.config,
                            r.audioCodecSwap=!1,
                            r._state=pe,
                            r.initPTS=[],
                            r.waitingFragment=null,
                            r.videoTrackCC=null,
                            r.waitingVideoCC=null,
                            r
                        }i=e,
                        (t=r).prototype=Object.create(i.prototype),
                        t.prototype.constructor=t,
                        t.__proto__=i;var n,
                        a,
                        s,
                        u=r.prototype;return u.onInitPtsFound=function(e){
                            var t=e.id,
                            i=e.frag.cc,
                            r=e.initPTS;"main"===t&&(this.initPTS[
                                i
                            ]=r,
                            this.videoTrackCC=i,
                            c.logger.log("InitPTS for cc: "+i+" found from main: "+r),
                            this.state===Le&&this.tick())
                        },
                        u.startLoad=function(e){
                            if(this.tracks){
                                var t=this.lastCurrentTime;this.stopLoad(),
                                this.setInterval(100),
                                this.fragLoadError=0,
                                t>0&&-1===e?(c.logger.log("audio:override startPosition with lastCurrentTime @"+t.toFixed(3)),
                                this.state=me): (this.lastCurrentTime=this.startPosition?this.startPosition: e,
                                this.state=ve),
                                this.nextLoadPosition=this.startPosition=this.lastCurrentTime,
                                this.tick()
                            }else this.startPosition=e,
                            this.state=pe
                        },
                        u.doTick=function(){
                            var e,
                            t,
                            i,
                            r=this.hls,
                            n=r.config;switch(this.state){
                                case ke: case ye: case Ae: break;case ve: this.state=Ee,
                                this.loadedmetadata=!1;break;case me: var a=this.tracks;if(!a)break;if(!this.media&&(this.startFragRequested||!n.startFragPrefetch))break;if(this.loadedmetadata)e=this.media.currentTime;else if(void 0===(e=this.nextLoadPosition))break;var s=this.mediaBuffer?this.mediaBuffer: this.media,
                                o=this.videoBuffer?this.videoBuffer: this.media,
                                u=e<n.maxBufferHole?Math.max(2,
                                n.maxBufferHole): n.maxBufferHole,
                                h=K.bufferInfo(s,
                                e,
                                u),
                                f=K.bufferInfo(o,
                                e,
                                u),
                                g=h.len,
                                p=h.end,
                                v=this.fragPrevious,
                                m=Math.min(n.maxBufferLength,
                                n.maxMaxBufferLength),
                                y=Math.max(m,
                                f.len),
                                b=this.audioSwitch,
                                _=this.trackId;if((g<y||b)&&_<a.length){
                                    if(void 0===(i=a[
                                        _
                                    ].details)){
                                        this.state=Ee;break
                                    }if(!b&&this._streamEnded(h,
                                    i))return this.hls.trigger(d.default.BUFFER_EOS,
                                    {
                                        type: "audio"
                                    }),
                                    void(this.state=Re);var T,
                                    E=i.fragments,
                                    w=E.length,
                                    S=E[
                                        0
                                    ].start,
                                    A=E[
                                        w-1
                                    ].start+E[
                                        w-1
                                    ].duration;if(b)if(i.live&&!i.PTSKnown)c.logger.log("switching audiotrack, live stream, unknown PTS,load first fragment"),
                                    p=0;else if(p=e,
                                    i.PTSKnown&&e<S){
                                        if(!(h.end>S||h.nextStart))return;c.logger.log("alt audio track ahead of main track, seek to start of alt audio track"),
                                        this.media.currentTime=S+.05
                                    }if(i.initSegment&&!i.initSegment.data)T=i.initSegment;else if(p<=S){
                                        if(T=E[
                                            0
                                        ],
                                        null!==this.videoTrackCC&&T.cc!==this.videoTrackCC&&(T=function(e,
                                        t){
                                            return$.search(e,
                                            (function(e){
                                                return e.cc<t?1: e.cc>t?-1: 0
                                            }))
                                        }(E,
                                        this.videoTrackCC)),
                                        i.live&&T.loadIdx&&T.loadIdx===this.fragLoadIdx){
                                            var R=h.nextStart?h.nextStart: S;return c.logger.log("no alt audio available @currentTime:"+this.media.currentTime+", seeking @"+(R+.05)),
                                            void(this.media.currentTime=R+.05)
                                        }
                                    }else{
                                        var k,
                                        L=n.maxFragLookUpTolerance,
                                        D=v?E[
                                            v.sn-E[
                                                0
                                            ].sn+1
                                        ]: void 0;p<A?(p>A-L&&(L=0),
                                        k=D&&!ce(p,
                                        L,
                                        D)?D: $.search(E,
                                        (function(e){
                                            return ce(p,
                                            L,
                                            e)
                                        }))): k=E[
                                            w-1
                                        ],
                                        k&&(T=k,
                                        S=k.start,
                                        v&&T.level===v.level&&T.sn===v.sn&&(T.sn<i.endSN?(T=E[
                                            T.sn+1-i.startSN
                                        ],
                                        this.fragmentTracker.getState(T)!==G&&c.logger.log("SN just loaded, load next one: "+T.sn)): T=null))
                                    }T&&(T.encrypted?(c.logger.log("Loading key for "+T.sn+" of ["+i.startSN+" ,"+i.endSN+"],track "+_),
                                    this.state=be,
                                    r.trigger(d.default.KEY_LOADING,
                                    {
                                        frag: T
                                    })): (this.fragCurrent=T,
                                    (b||this.fragmentTracker.getState(T)===N)&&(c.logger.log("Loading "+T.sn+", cc: "+T.cc+" of ["+i.startSN+" ,"+i.endSN+"],track "+_+", "+(this.loadedmetadata?"currentTime": "nextLoadPosition")+": "+e+", bufferEnd: "+p.toFixed(3)),
                                    "initSegment"!==T.sn&&(this.startFragRequested=!0),
                                    Object(l.isFiniteNumber)(T.sn)&&(this.nextLoadPosition=T.start+T.duration),
                                    r.trigger(d.default.FRAG_LOADING,
                                    {
                                        frag: T
                                    }),
                                    this.state=_e)))
                                }break;case Ee: (t=this.tracks[
                                    this.trackId
                                ])&&t.details&&(this.state=me);break;case Te: var I=tt.now(),
                                x=this.retryDate,
                                O=(s=this.media)&&s.seeking;(!x||I>=x||O)&&(c.logger.log("audioStreamController: retryDate reached, switch back to IDLE state"),
                                this.state=me);break;case Le: var C=this.waitingFragment;if(C){
                                    var P=C.frag.cc;if(void 0!==this.initPTS[
                                        P
                                    ])this.waitingFragment=null,
                                    this.state=_e,
                                    this.onFragLoaded(C);else if(this.videoTrackCC!==this.waitingVideoCC)c.logger.log("Waiting fragment cc ("+P+") cancelled because video is at cc "+this.videoTrackCC),
                                    this.clearWaitingFragment();else{
                                        var M=K.bufferInfo(this.mediaBuffer,
                                        this.media.currentTime,
                                        n.maxBufferHole);ce(M.end,
                                        n.maxFragLookUpTolerance,
                                        C.frag)<0&&(c.logger.log("Waiting fragment cc ("+P+") @ "+C.frag.start+" cancelled because another fragment at "+M.end+" is needed"),
                                        this.clearWaitingFragment())
                                    }
                                }else this.state=me
                            }
                        },
                        u.clearWaitingFragment=function(){
                            var e=this.waitingFragment;e&&(this.fragmentTracker.removeFragment(e.frag),
                            this.waitingFragment=null,
                            this.waitingVideoCC=null,
                            this.state=me)
                        },
                        u.onMediaAttached=function(e){
                            var t=this.media=this.mediaBuffer=e.media;this.onvseeking=this.onMediaSeeking.bind(this),
                            this.onvended=this.onMediaEnded.bind(this),
                            t.addEventListener("seeking",
                            this.onvseeking),
                            t.addEventListener("ended",
                            this.onvended);var i=this.config;this.tracks&&i.autoStartLoad&&this.startLoad(i.startPosition)
                        },
                        u.onMediaDetaching=function(){
                            var e=this.media;e&&e.ended&&(c.logger.log("MSE detaching and video ended, reset startPosition"),
                            this.startPosition=this.lastCurrentTime=0),
                            e&&(e.removeEventListener("seeking",
                            this.onvseeking),
                            e.removeEventListener("ended",
                            this.onvended),
                            this.onvseeking=this.onvseeked=this.onvended=null),
                            this.media=this.mediaBuffer=this.videoBuffer=null,
                            this.loadedmetadata=!1,
                            this.fragmentTracker.removeAllFragments(),
                            this.stopLoad()
                        },
                        u.onAudioTracksUpdated=function(e){
                            c.logger.log("audio tracks updated"),
                            this.tracks=e.audioTracks
                        },
                        u.onAudioTrackSwitching=function(e){
                            var t=!!e.url;this.trackId=e.id,
                            this.fragCurrent=null,
                            this.clearWaitingFragment(),
                            this.state=ye,
                            t?this.setInterval(100): this.demuxer&&(this.demuxer.destroy(),
                            this.demuxer=null),
                            t&&(this.audioSwitch=!0,
                            this.state=me),
                            this.tick()
                        },
                        u.onAudioTrackLoaded=function(e){
                            var t=e.details,
                            i=e.id,
                            r=this.tracks[
                                i
                            ],
                            n=r.details,
                            a=t.totalduration,
                            s=0;if(c.logger.log("track "+i+" loaded ["+t.startSN+","+t.endSN+"],duration:"+a),
                            t.live||n&&n.live?n&&t.fragments.length>0?(ie(n,
                            t),
                            s=t.fragments[
                                0
                            ].start,
                            t.PTSKnown?c.logger.log("live audio playlist sliding:"+s.toFixed(3)): c.logger.log("live audio playlist - outdated PTS, unknown sliding")): (t.PTSKnown=!1,
                            c.logger.log("live audio playlist - first load, unknown sliding")): t.PTSKnown=!1,
                            r.details=t,
                            !this.startFragRequested){
                                if(-1===this.startPosition){
                                    var o=t.startTimeOffset;Object(l.isFiniteNumber)(o)?(c.logger.log("start time offset found in playlist, adjust startPosition to "+o),
                                    this.startPosition=o): t.live?(this.startPosition=this.computeLivePosition(s,
                                    t),
                                    c.logger.log("compute startPosition for audio-track to "+this.startPosition)): this.startPosition=0
                                }this.nextLoadPosition=this.startPosition
                            }this.state===Ee&&(this.state=me),
                            this.tick()
                        },
                        u.onKeyLoaded=function(){
                            this.state===be&&(this.state=me,
                            this.tick())
                        },
                        u.onFragLoaded=function(e){
                            var t=this.fragCurrent,
                            i=e.frag;if(this.state===_e&&t&&"audio"===i.type&&i.level===t.level&&i.sn===t.sn){
                                var r=this.tracks[
                                    this.trackId
                                ],
                                n=r.details,
                                a=n.totalduration,
                                s=t.level,
                                o=t.sn,
                                l=t.cc,
                                u=this.config.defaultAudioCodec||r.audioCodec||"mp4a.40.2",
                                h=this.stats=e.stats;if("initSegment"===o)this.state=me,
                                h.tparsed=h.tbuffered=tt.now(),
                                n.initSegment.data=e.payload,
                                this.hls.trigger(d.default.FRAG_BUFFERED,
                                {
                                    stats: h,
                                    frag: t,
                                    id: "audio"
                                }),
                                this.tick();else{
                                    this.state=we,
                                    this.appended=!1,
                                    this.demuxer||(this.demuxer=new J(this.hls,
                                    "audio"));var f=this.initPTS[
                                        l
                                    ],
                                    g=n.initSegment?n.initSegment.data: [];void 0!==f?(this.pendingBuffering=!0,
                                    c.logger.log("Demuxing "+o+" of ["+n.startSN+" ,"+n.endSN+"],track "+s),
                                    this.demuxer.push(e.payload,
                                    g,
                                    u,
                                    null,
                                    t,
                                    a,
                                    !1,
                                    f)): (c.logger.log("Unknown video PTS for cc "+l+", waiting for video PTS before demuxing audio frag "+o+" of ["+n.startSN+" ,"+n.endSN+"],track "+s),
                                    this.waitingFragment=e,
                                    this.waitingVideoCC=this.videoTrackCC,
                                    this.state=Le)
                                }
                            }this.fragLoadError=0
                        },
                        u.onFragParsingInitSegment=function(e){
                            var t=this.fragCurrent,
                            i=e.frag;if(t&&"audio"===e.id&&i.sn===t.sn&&i.level===t.level&&this.state===we){
                                var r,
                                n=e.tracks;if(n.video&&delete n.video,
                                r=n.audio){
                                    r.levelCodec=r.codec,
                                    r.id=e.id,
                                    this.hls.trigger(d.default.BUFFER_CODECS,
                                    n),
                                    c.logger.log("audio track:audio,container:"+r.container+",codecs[level/parsed]=["+r.levelCodec+"/"+r.codec+"]");var a=r.initSegment;if(a){
                                        var s={
                                            type: "audio",
                                            data: a,
                                            parent: "audio",
                                            content: "initSegment"
                                        };this.audioSwitch?this.pendingData=[
                                            s
                                        ]: (this.appended=!0,
                                        this.pendingBuffering=!0,
                                        this.hls.trigger(d.default.BUFFER_APPENDING,
                                        s))
                                    }this.tick()
                                }
                            }
                        },
                        u.onFragParsingData=function(e){
                            var t=this,
                            i=this.fragCurrent,
                            r=e.frag;if(i&&"audio"===e.id&&"audio"===e.type&&r.sn===i.sn&&r.level===i.level&&this.state===we){
                                var n=this.trackId,
                                a=this.tracks[
                                    n
                                ],
                                s=this.hls;Object(l.isFiniteNumber)(e.endPTS)||(e.endPTS=e.startPTS+i.duration,
                                e.endDTS=e.startDTS+i.duration),
                                i.addElementaryStream(p.AUDIO),
                                c.logger.log("parsed "+e.type+",PTS:["+e.startPTS.toFixed(3)+","+e.endPTS.toFixed(3)+"],DTS:["+e.startDTS.toFixed(3)+"/"+e.endDTS.toFixed(3)+"],nb:"+e.nb),
                                te(a.details,
                                i,
                                e.startPTS,
                                e.endPTS);var u=this.media,
                                h=!1;if(this.audioSwitch)if(u&&u.readyState){
                                    var f=u.currentTime;c.logger.log("switching audio track : currentTime:"+f),
                                    f>=e.startPTS&&(c.logger.log("switching audio track : flushing all audio"),
                                    this.state=Ae,
                                    s.trigger(d.default.BUFFER_FLUSHING,
                                    {
                                        startOffset: 0,
                                        endOffset: Number.POSITIVE_INFINITY,
                                        type: "audio"
                                    }),
                                    h=!0,
                                    this.audioSwitch=!1,
                                    s.trigger(d.default.AUDIO_TRACK_SWITCHED,
                                    {
                                        id: n
                                    }))
                                }else this.audioSwitch=!1,
                                s.trigger(d.default.AUDIO_TRACK_SWITCHED,
                                {
                                    id: n
                                });var g=this.pendingData;if(!g)return c.logger.warn("Apparently attempt to enqueue media payload without codec initialization data upfront"),
                                void s.trigger(d.default.ERROR,
                                {
                                    type: o.ErrorTypes.MEDIA_ERROR,
                                    details: null,
                                    fatal: !0
                                });this.audioSwitch||([
                                    e.data1,
                                    e.data2
                                ].forEach((function(t){
                                    t&&t.length&&g.push({
                                        type: e.type,
                                        data: t,
                                        parent: "audio",
                                        content: "data"
                                    })
                                })),
                                !h&&g.length&&(g.forEach((function(e){
                                    t.state===we&&(t.pendingBuffering=!0,
                                    t.hls.trigger(d.default.BUFFER_APPENDING,
                                    e))
                                })),
                                this.pendingData=[],
                                this.appended=!0)),
                                this.tick()
                            }
                        },
                        u.onFragParsed=function(e){
                            var t=this.fragCurrent,
                            i=e.frag;t&&"audio"===e.id&&i.sn===t.sn&&i.level===t.level&&this.state===we&&(this.stats.tparsed=tt.now(),
                            this.state=Se,
                            this._checkAppendedParsed())
                        },
                        u.onBufferReset=function(){
                            this.mediaBuffer=this.videoBuffer=null,
                            this.loadedmetadata=!1
                        },
                        u.onBufferCreated=function(e){
                            var t=e.tracks.audio;t&&(this.mediaBuffer=t.buffer,
                            this.loadedmetadata=!0),
                            e.tracks.video&&(this.videoBuffer=e.tracks.video.buffer)
                        },
                        u.onBufferAppended=function(e){
                            if("audio"===e.parent){
                                var t=this.state;t!==we&&t!==Se||(this.pendingBuffering=e.pending>0,
                                this._checkAppendedParsed())
                            }
                        },
                        u._checkAppendedParsed=function(){
                            if(!(this.state!==Se||this.appended&&this.pendingBuffering)){
                                var e=this.fragCurrent,
                                t=this.stats,
                                i=this.hls;if(e){
                                    this.fragPrevious=e,
                                    t.tbuffered=tt.now(),
                                    i.trigger(d.default.FRAG_BUFFERED,
                                    {
                                        stats: t,
                                        frag: e,
                                        id: "audio"
                                    });var r=this.mediaBuffer?this.mediaBuffer: this.media;r&&c.logger.log("audio buffered : "+ae.toString(r.buffered)),
                                    this.audioSwitch&&this.appended&&(this.audioSwitch=!1,
                                    i.trigger(d.default.AUDIO_TRACK_SWITCHED,
                                    {
                                        id: this.trackId
                                    })),
                                    this.state=me
                                }this.tick()
                            }
                        },
                        u.onError=function(e){
                            var t=e.frag;if(!t||"audio"===t.type)switch(e.details){
                                case o.ErrorDetails.FRAG_LOAD_ERROR: case o.ErrorDetails.FRAG_LOAD_TIMEOUT: var i=e.frag;if(i&&"audio"!==i.type)break;if(!e.fatal){
                                    var r=this.fragLoadError;r?r++: r=1;var n=this.config;if(r<=n.fragLoadingMaxRetry){
                                        this.fragLoadError=r;var a=Math.min(Math.pow(2,
                                        r-1)*n.fragLoadingRetryDelay,
                                        n.fragLoadingMaxRetryTimeout);c.logger.warn("AudioStreamController: frag loading failed, retry in "+a+" ms"),
                                        this.retryDate=tt.now()+a,
                                        this.state=Te
                                    }else c.logger.error("AudioStreamController: "+e.details+" reaches max retry, redispatch as fatal ..."),
                                    e.fatal=!0,
                                    this.state=ke
                                }break;case o.ErrorDetails.AUDIO_TRACK_LOAD_ERROR: case o.ErrorDetails.AUDIO_TRACK_LOAD_TIMEOUT: case o.ErrorDetails.KEY_LOAD_ERROR: case o.ErrorDetails.KEY_LOAD_TIMEOUT: this.state!==ke&&(this.state=e.fatal?ke: me,
                                c.logger.warn("AudioStreamController: "+e.details+" while loading frag, now switching to "+this.state+" state ..."));break;case o.ErrorDetails.BUFFER_FULL_ERROR: if("audio"===e.parent&&(this.state===we||this.state===Se)){
                                    var s=this.mediaBuffer,
                                    l=this.media.currentTime;if(s&&K.isBuffered(s,
                                    l)&&K.isBuffered(s,
                                    l+.5)){
                                        var u=this.config;u.maxMaxBufferLength>=u.maxBufferLength&&(u.maxMaxBufferLength/=2,
                                        c.logger.warn("AudioStreamController: reduce max buffer length to "+u.maxMaxBufferLength+"s")),
                                        this.state=me
                                    }else c.logger.warn("AudioStreamController: buffer full error also media.currentTime is not buffered, flush audio buffer"),
                                    this.fragCurrent=null,
                                    this.state=Ae,
                                    this.hls.trigger(d.default.BUFFER_FLUSHING,
                                    {
                                        startOffset: 0,
                                        endOffset: Number.POSITIVE_INFINITY,
                                        type: "audio"
                                    })
                                }
                            }
                        },
                        u.onBufferFlushed=function(){
                            var e=this,
                            t=this.pendingData;t&&t.length?(c.logger.log("AudioStreamController: appending pending audio data after buffer flushed"),
                            t.forEach((function(t){
                                e.hls.trigger(d.default.BUFFER_APPENDING,
                                t)
                            })),
                            this.appended=!0,
                            this.pendingData=[],
                            this.state=Se): (this.state=me,
                            this.fragPrevious=null,
                            this.tick())
                        },
                        n=r,
                        (a=[
                            {
                                key: "state",
                                set: function(e){
                                    if(this.state!==e){
                                        var t=this.state;this._state=e,
                                        c.logger.log("audio stream:"+t+"->"+e)
                                    }
                                },
                                get: function(){
                                    return this._state
                                }
                            }
                        ])&&et(n.prototype,
                        a),
                        s&&et(n,
                        s),
                        r
                    }(Ie),
                    rt=function(){
                        if("undefined"!=typeof window&&window.VTTCue)return window.VTTCue;var e={
                            "": !0,
                            lr: !0,
                            rl: !0
                        },
                        t={
                            start: !0,
                            middle: !0,
                            end: !0,
                            left: !0,
                            right: !0
                        };function i(e){
                            return "string"==typeof e&&!!t[
                                e.toLowerCase()
                            ]&&e.toLowerCase()
                        }function r(e){
                            for(var t=1;t<arguments.length;t++){
                                var i=arguments[
                                    t
                                ];for(var r in i)e[
                                    r
                                ]=i[
                                    r
                                ]
                            }return e
                        }function n(t,
                        n,
                        a){
                            var s=this,
                            o={
                                enumerable: !0
                            };s.hasBeenReset=!1;var l="",
                            d=!1,
                            c=t,
                            u=n,
                            h=a,
                            f=null,
                            g="",
                            p=!0,
                            v="auto",
                            m="start",
                            y=50,
                            b="middle",
                            _=50,
                            T="middle";Object.defineProperty(s,
                            "id",
                            r({},
                            o,
                            {
                                get: function(){
                                    return l
                                },
                                set: function(e){
                                    l=""+e
                                }
                            })),
                            Object.defineProperty(s,
                            "pauseOnExit",
                            r({},
                            o,
                            {
                                get: function(){
                                    return d
                                },
                                set: function(e){
                                    d=!!e
                                }
                            })),
                            Object.defineProperty(s,
                            "startTime",
                            r({},
                            o,
                            {
                                get: function(){
                                    return c
                                },
                                set: function(e){
                                    if("number"!=typeof e)throw new TypeError("Start time must be set to a number.");c=e,
                                    this.hasBeenReset=!0
                                }
                            })),
                            Object.defineProperty(s,
                            "endTime",
                            r({},
                            o,
                            {
                                get: function(){
                                    return u
                                },
                                set: function(e){
                                    if("number"!=typeof e)throw new TypeError("End time must be set to a number.");u=e,
                                    this.hasBeenReset=!0
                                }
                            })),
                            Object.defineProperty(s,
                            "text",
                            r({},
                            o,
                            {
                                get: function(){
                                    return h
                                },
                                set: function(e){
                                    h=""+e,
                                    this.hasBeenReset=!0
                                }
                            })),
                            Object.defineProperty(s,
                            "region",
                            r({},
                            o,
                            {
                                get: function(){
                                    return f
                                },
                                set: function(e){
                                    f=e,
                                    this.hasBeenReset=!0
                                }
                            })),
                            Object.defineProperty(s,
                            "vertical",
                            r({},
                            o,
                            {
                                get: function(){
                                    return g
                                },
                                set: function(t){
                                    var i=function(t){
                                        return "string"==typeof t&&!!e[
                                            t.toLowerCase()
                                        ]&&t.toLowerCase()
                                    }(t);if(!1===i)throw new SyntaxError("An invalid or illegal string was specified.");g=i,
                                    this.hasBeenReset=!0
                                }
                            })),
                            Object.defineProperty(s,
                            "snapToLines",
                            r({},
                            o,
                            {
                                get: function(){
                                    return p
                                },
                                set: function(e){
                                    p=!!e,
                                    this.hasBeenReset=!0
                                }
                            })),
                            Object.defineProperty(s,
                            "line",
                            r({},
                            o,
                            {
                                get: function(){
                                    return v
                                },
                                set: function(e){
                                    if("number"!=typeof e&&"auto"!==e)throw new SyntaxError("An invalid number or illegal string was specified.");v=e,
                                    this.hasBeenReset=!0
                                }
                            })),
                            Object.defineProperty(s,
                            "lineAlign",
                            r({},
                            o,
                            {
                                get: function(){
                                    return m
                                },
                                set: function(e){
                                    var t=i(e);if(!t)throw new SyntaxError("An invalid or illegal string was specified.");m=t,
                                    this.hasBeenReset=!0
                                }
                            })),
                            Object.defineProperty(s,
                            "position",
                            r({},
                            o,
                            {
                                get: function(){
                                    return y
                                },
                                set: function(e){
                                    if(e<0||e>100)throw new Error("Position must be between 0 and 100.");y=e,
                                    this.hasBeenReset=!0
                                }
                            })),
                            Object.defineProperty(s,
                            "positionAlign",
                            r({},
                            o,
                            {
                                get: function(){
                                    return b
                                },
                                set: function(e){
                                    var t=i(e);if(!t)throw new SyntaxError("An invalid or illegal string was specified.");b=t,
                                    this.hasBeenReset=!0
                                }
                            })),
                            Object.defineProperty(s,
                            "size",
                            r({},
                            o,
                            {
                                get: function(){
                                    return _
                                },
                                set: function(e){
                                    if(e<0||e>100)throw new Error("Size must be between 0 and 100.");_=e,
                                    this.hasBeenReset=!0
                                }
                            })),
                            Object.defineProperty(s,
                            "align",
                            r({},
                            o,
                            {
                                get: function(){
                                    return T
                                },
                                set: function(e){
                                    var t=i(e);if(!t)throw new SyntaxError("An invalid or illegal string was specified.");T=t,
                                    this.hasBeenReset=!0
                                }
                            })),
                            s.displayState=void 0
                        }return n.prototype.getCueAsHTML=function(){
                            return window.WebVTT.convertCueToDOMTree(window,
                            this.text)
                        },
                        n
                    }(),
                    nt=function(){
                        return{
                            decode: function(e){
                                if(!e)return"";if("string"!=typeof e)throw new Error("Error - expected string data.");return decodeURIComponent(encodeURIComponent(e))
                            }
                        }
                    };function at(){
                        this.window=window,
                        this.state="INITIAL",
                        this.buffer="",
                        this.decoder=new nt,
                        this.regionList=[]
                    }function st(){
                        this.values=Object.create(null)
                    }function ot(e,
                    t,
                    i,
                    r){
                        var n=r?e.split(r): [
                            e
                        ];for(var a in n)if("string"==typeof n[
                            a
                        ]){
                            var s=n[
                                a
                            ].split(i);2===s.length&&t(s[
                                0
                            ],
                            s[
                                1
                            ])
                        }
                    }st.prototype={
                        set: function(e,
                        t){
                            this.get(e)||""===t||(this.values[
                                e
                            ]=t)
                        },
                        get: function(e,
                        t,
                        i){
                            return i?this.has(e)?this.values[
                                e
                            ]: t[
                                i
                            ]: this.has(e)?this.values[
                                e
                            ]: t
                        },
                        has: function(e){
                            return e in this.values
                        },
                        alt: function(e,
                        t,
                        i){
                            for(var r=0;r<i.length;++r)if(t===i[
                                r
                            ]){
                                this.set(e,
                                t);break
                            }
                        },
                        integer: function(e,
                        t){
                            /^-?\d+$/.test(t)&&this.set(e,
                            parseInt(t,
                            10))
                        },
                        percent: function(e,
                        t){
                            return!!(t.match(/^([\d]{1,3})(\.[\d]*)?%$/)&&(t=parseFloat(t))>=0&&t<=100)&&(this.set(e,
                            t),
                            !0)
                        }
                    };var lt=new rt(0,
                    0,
                    0),
                    dt="middle"===lt.align?"middle": "center";function ct(e,
                    t,
                    i){
                        var r=e;function n(){
                            var t=function(e){
                                function t(e,
                                t,
                                i,
                                r){
                                    return 3600*(0|e)+60*(0|t)+(0|i)+(0|r)/1e3
                                }var i=e.match(/^(\d+):(\d{2})(:\d{2})?\.(\d{3})/);return i?i[
                                    3
                                ]?t(i[
                                    1
                                ],
                                i[
                                    2
                                ],
                                i[
                                    3
                                ].replace(":",
                                ""),
                                i[
                                    4
                                ]): i[
                                    1
                                ]>59?t(i[
                                    1
                                ],
                                i[
                                    2
                                ],
                                0,
                                i[
                                    4
                                ]): t(0,
                                i[
                                    1
                                ],
                                i[
                                    2
                                ],
                                i[
                                    4
                                ]): null
                            }(e);if(null===t)throw new Error("Malformed timestamp: "+r);return e=e.replace(/^[^\sa-zA-Z-]+/,
                            ""),
                            t
                        }function a(){
                            e=e.replace(/^\s+/,
                            "")
                        }if(a(),
                        t.startTime=n(),
                        a(),
                        "--\x3e"!==e.substr(0,
                        3))throw new Error("Malformed time stamp (time stamps must be separated by '--\x3e'): "+r);e=e.substr(3),
                        a(),
                        t.endTime=n(),
                        a(),
                        function(e,
                        t){
                            var r=new st;ot(e,
                            (function(e,
                            t){
                                switch(e){
                                    case "region": for(var n=i.length-1;n>=0;n--)if(i[
                                        n
                                    ].id===t){
                                        r.set(e,
                                        i[
                                            n
                                        ].region);break
                                    }break;case "vertical": r.alt(e,
                                    t,
                                    [
                                        "rl",
                                        "lr"
                                    ]);break;case "line": var a=t.split(","),
                                    s=a[
                                        0
                                    ];r.integer(e,
                                    s),
                                    r.percent(e,
                                    s)&&r.set("snapToLines",
                                    !1),
                                    r.alt(e,
                                    s,
                                    [
                                        "auto"
                                    ]),
                                    2===a.length&&r.alt("lineAlign",
                                    a[
                                        1
                                    ],
                                    [
                                        "start",
                                        dt,
                                        "end"
                                    ]);break;case "position": a=t.split(","),
                                    r.percent(e,
                                    a[
                                        0
                                    ]),
                                    2===a.length&&r.alt("positionAlign",
                                    a[
                                        1
                                    ],
                                    [
                                        "start",
                                        dt,
                                        "end",
                                        "line-left",
                                        "line-right",
                                        "auto"
                                    ]);break;case "size": r.percent(e,
                                    t);break;case "align": r.alt(e,
                                    t,
                                    [
                                        "start",
                                        dt,
                                        "end",
                                        "left",
                                        "right"
                                    ])
                                }
                            }),
                            /:/,
                            /\s/),
                            t.region=r.get("region",
                            null),
                            t.vertical=r.get("vertical",
                            "");var n=r.get("line",
                            "auto");"auto"===n&&-1===lt.line&&(n=-1),
                            t.line=n,
                            t.lineAlign=r.get("lineAlign",
                            "start"),
                            t.snapToLines=r.get("snapToLines",
                            !0),
                            t.size=r.get("size",
                            100),
                            t.align=r.get("align",
                            dt);var a=r.get("position",
                            "auto");"auto"===a&&50===lt.position&&(a="start"===t.align||"left"===t.align?0: "end"===t.align||"right"===t.align?100: 50),
                            t.position=a
                        }(e,
                        t)
                    }function ut(e){
                        return e.replace(/<br(?: \/)?>/gi,
                        "\n")
                    }at.prototype={
                        parse: function(e){
                            var t=this;function i(){
                                var e=t.buffer,
                                i=0;for(e=ut(e);i<e.length&&"\r"!==e[
                                    i
                                ]&&"\n"!==e[
                                    i
                                ];)++i;var r=e.substr(0,
                                i);return "\r"===e[
                                    i
                                ]&&++i,
                                "\n"===e[
                                    i
                                ]&&++i,
                                t.buffer=e.substr(i),
                                r
                            }e&&(t.buffer+=t.decoder.decode(e,
                            {
                                stream: !0
                            }));try{
                                var r;if("INITIAL"===t.state){
                                    if(!/\r\n|\n/.test(t.buffer))return this;var n=(r=i()).match(/^(ï»¿)?WEBVTT([ \t].*)?$/);if(!n||!n[
                                        0
                                    ])throw new Error("Malformed WebVTT signature.");t.state="HEADER"
                                }for(var a=!1;t.buffer;){
                                    if(!/\r\n|\n/.test(t.buffer))return this;switch(a?a=!1: r=i(),
                                    t.state){
                                        case "HEADER": /:/.test(r)?ot(r,
                                        (function(e,
                                        t){}),
                                        /:/): r||(t.state="ID");continue;case "NOTE": r||(t.state="ID");continue;case "ID": if(/^NOTE($|[ \t])/.test(r)){
                                            t.state="NOTE";break
                                        }if(!r)continue;if(t.cue=new rt(0,
                                        0,
                                        ""),
                                        t.state="CUE",
                                        -1===r.indexOf("--\x3e")){
                                            t.cue.id=r;continue
                                        }case "CUE": try{
                                            ct(r,
                                            t.cue,
                                            t.regionList)
                                        }catch(e){
                                            t.cue=null,
                                            t.state="BADCUE";continue
                                        }t.state="CUETEXT";continue;case "CUETEXT": var s=-1!==r.indexOf("--\x3e");if(!r||s&&(a=!0)){
                                            t.oncue&&t.oncue(t.cue),
                                            t.cue=null,
                                            t.state="ID";continue
                                        }t.cue.text&&(t.cue.text+="\n"),
                                        t.cue.text+=r;continue;case "BADCUE": r||(t.state="ID");continue
                                    }
                                }
                            }catch(e){
                                "CUETEXT"===t.state&&t.cue&&t.oncue&&t.oncue(t.cue),
                                t.cue=null,
                                t.state="INITIAL"===t.state?"BADWEBVTT": "BADCUE"
                            }return this
                        },
                        flush: function(){
                            try{
                                if(this.buffer+=this.decoder.decode(),
                                (this.cue||"HEADER"===this.state)&&(this.buffer+="\n\n",
                                this.parse()),
                                "INITIAL"===this.state)throw new Error("Malformed WebVTT signature.")
                            }catch(e){
                                throw e
                            }return this.onflush&&this.onflush(),
                            this
                        }
                    };var ht=at;function ft(e,
                    t,
                    i,
                    r){
                        for(var n,
                        a,
                        s,
                        o,
                        l,
                        d=[],
                        c=window.VTTCue||TextTrackCue,
                        u=0;u<r.rows.length;u++)if(s=!0,
                        o=0,
                        l="",
                        !(n=r.rows[
                            u
                        ]).isEmpty()){
                            for(var h=0;h<n.chars.length;h++)n.chars[
                                h
                            ].uchar.match(/\s/)&&s?o++: (l+=n.chars[
                                h
                            ].uchar,
                            s=!1);n.cueStartTime=t,
                            t===i&&(i+=1e-4),
                            a=new c(t,
                            i,
                            ut(l.trim())),
                            o>=16?o--: o++,
                            navigator.userAgent.match(/Firefox\//)?a.line=u+1: a.line=u>7?u-2: u+1,
                            a.align="left",
                            a.position=Math.max(0,
                            Math.min(100,
                            o/32*100)),
                            d.push(a),
                            e&&e.addCue(a)
                        }return d
                    }var gt,
                    pt={
                        42: 225,
                        92: 233,
                        94: 237,
                        95: 243,
                        96: 250,
                        123: 231,
                        124: 247,
                        125: 209,
                        126: 241,
                        127: 9608,
                        128: 174,
                        129: 176,
                        130: 189,
                        131: 191,
                        132: 8482,
                        133: 162,
                        134: 163,
                        135: 9834,
                        136: 224,
                        137: 32,
                        138: 232,
                        139: 226,
                        140: 234,
                        141: 238,
                        142: 244,
                        143: 251,
                        144: 193,
                        145: 201,
                        146: 211,
                        147: 218,
                        148: 220,
                        149: 252,
                        150: 8216,
                        151: 161,
                        152: 42,
                        153: 8217,
                        154: 9473,
                        155: 169,
                        156: 8480,
                        157: 8226,
                        158: 8220,
                        159: 8221,
                        160: 192,
                        161: 194,
                        162: 199,
                        163: 200,
                        164: 202,
                        165: 203,
                        166: 235,
                        167: 206,
                        168: 207,
                        169: 239,
                        170: 212,
                        171: 217,
                        172: 249,
                        173: 219,
                        174: 171,
                        175: 187,
                        176: 195,
                        177: 227,
                        178: 205,
                        179: 204,
                        180: 236,
                        181: 210,
                        182: 242,
                        183: 213,
                        184: 245,
                        185: 123,
                        186: 125,
                        187: 92,
                        188: 94,
                        189: 95,
                        190: 124,
                        191: 8764,
                        192: 196,
                        193: 228,
                        194: 214,
                        195: 246,
                        196: 223,
                        197: 165,
                        198: 164,
                        199: 9475,
                        200: 197,
                        201: 229,
                        202: 216,
                        203: 248,
                        204: 9487,
                        205: 9491,
                        206: 9495,
                        207: 9499
                    },
                    vt=function(e){
                        var t=e;return pt.hasOwnProperty(e)&&(t=pt[
                            e
                        ]),
                        String.fromCharCode(t)
                    },
                    mt={
                        17: 1,
                        18: 3,
                        21: 5,
                        22: 7,
                        23: 9,
                        16: 11,
                        19: 12,
                        20: 14
                    },
                    yt={
                        17: 2,
                        18: 4,
                        21: 6,
                        22: 8,
                        23: 10,
                        19: 13,
                        20: 15
                    },
                    bt={
                        25: 1,
                        26: 3,
                        29: 5,
                        30: 7,
                        31: 9,
                        24: 11,
                        27: 12,
                        28: 14
                    },
                    _t={
                        25: 2,
                        26: 4,
                        29: 6,
                        30: 8,
                        31: 10,
                        27: 13,
                        28: 15
                    },
                    Tt=[
                        "white",
                        "green",
                        "blue",
                        "cyan",
                        "red",
                        "yellow",
                        "magenta",
                        "black",
                        "transparent"
                    ];!function(e){
                        e[
                            e.ERROR=0
                        ]="ERROR",
                        e[
                            e.TEXT=1
                        ]="TEXT",
                        e[
                            e.WARNING=2
                        ]="WARNING",
                        e[
                            e.INFO=2
                        ]="INFO",
                        e[
                            e.DEBUG=3
                        ]="DEBUG",
                        e[
                            e.DATA=3
                        ]="DATA"
                    }(gt||(gt={}));var Et=function(){
                        function e(){
                            this.time=null,
                            this.verboseLevel=gt.ERROR
                        }return e.prototype.log=function(e,
                        t){
                            this.verboseLevel>=e&&c.logger.log(this.time+" ["+e+"] "+t)
                        },
                        e
                    }(),
                    wt=function(e){
                        for(var t=[],
                        i=0;i<e.length;i++)t.push(e[
                            i
                        ].toString(16));return t
                    },
                    St=function(){
                        function e(e,
                        t,
                        i,
                        r,
                        n){
                            this.foreground=void 0,
                            this.underline=void 0,
                            this.italics=void 0,
                            this.background=void 0,
                            this.flash=void 0,
                            this.foreground=e||"white",
                            this.underline=t||!1,
                            this.italics=i||!1,
                            this.background=r||"black",
                            this.flash=n||!1
                        }var t=e.prototype;return t.reset=function(){
                            this.foreground="white",
                            this.underline=!1,
                            this.italics=!1,
                            this.background="black",
                            this.flash=!1
                        },
                        t.setStyles=function(e){
                            for(var t=[
                                "foreground",
                                "underline",
                                "italics",
                                "background",
                                "flash"
                            ],
                            i=0;i<t.length;i++){
                                var r=t[
                                    i
                                ];e.hasOwnProperty(r)&&(this[
                                    r
                                ]=e[
                                    r
                                ])
                            }
                        },
                        t.isDefault=function(){
                            return "white"===this.foreground&&!this.underline&&!this.italics&&"black"===this.background&&!this.flash
                        },
                        t.equals=function(e){
                            return this.foreground===e.foreground&&this.underline===e.underline&&this.italics===e.italics&&this.background===e.background&&this.flash===e.flash
                        },
                        t.copy=function(e){
                            this.foreground=e.foreground,
                            this.underline=e.underline,
                            this.italics=e.italics,
                            this.background=e.background,
                            this.flash=e.flash
                        },
                        t.toString=function(){
                            return "color="+this.foreground+", underline="+this.underline+", italics="+this.italics+", background="+this.background+", flash="+this.flash
                        },
                        e
                    }(),
                    At=function(){
                        function e(e,
                        t,
                        i,
                        r,
                        n,
                        a){
                            this.uchar=void 0,
                            this.penState=void 0,
                            this.uchar=e||" ",
                            this.penState=new St(t,
                            i,
                            r,
                            n,
                            a)
                        }var t=e.prototype;return t.reset=function(){
                            this.uchar=" ",
                            this.penState.reset()
                        },
                        t.setChar=function(e,
                        t){
                            this.uchar=e,
                            this.penState.copy(t)
                        },
                        t.setPenState=function(e){
                            this.penState.copy(e)
                        },
                        t.equals=function(e){
                            return this.uchar===e.uchar&&this.penState.equals(e.penState)
                        },
                        t.copy=function(e){
                            this.uchar=e.uchar,
                            this.penState.copy(e.penState)
                        },
                        t.isEmpty=function(){
                            return" "===this.uchar&&this.penState.isDefault()
                        },
                        e
                    }(),
                    Rt=function(){
                        function e(e){
                            this.chars=void 0,
                            this.pos=void 0,
                            this.currPenState=void 0,
                            this.cueStartTime=void 0,
                            this.logger=void 0,
                            this.chars=[];for(var t=0;t<100;t++)this.chars.push(new At);this.logger=e,
                            this.pos=0,
                            this.currPenState=new St
                        }var t=e.prototype;return t.equals=function(e){
                            for(var t=!0,
                            i=0;i<100;i++)if(!this.chars[
                                i
                            ].equals(e.chars[
                                i
                            ])){
                                t=!1;break
                            }return t
                        },
                        t.copy=function(e){
                            for(var t=0;t<100;t++)this.chars[
                                t
                            ].copy(e.chars[
                                t
                            ])
                        },
                        t.isEmpty=function(){
                            for(var e=!0,
                            t=0;t<100;t++)if(!this.chars[
                                t
                            ].isEmpty()){
                                e=!1;break
                            }return e
                        },
                        t.setCursor=function(e){
                            this.pos!==e&&(this.pos=e),
                            this.pos<0?(this.logger.log(gt.DEBUG,
                            "Negative cursor position "+this.pos),
                            this.pos=0): this.pos>100&&(this.logger.log(gt.DEBUG,
                            "Too large cursor position "+this.pos),
                            this.pos=100)
                        },
                        t.moveCursor=function(e){
                            var t=this.pos+e;if(e>1)for(var i=this.pos+1;i<t+1;i++)this.chars[
                                i
                            ].setPenState(this.currPenState);this.setCursor(t)
                        },
                        t.backSpace=function(){
                            this.moveCursor(-1),
                            this.chars[
                                this.pos
                            ].setChar(" ",
                            this.currPenState)
                        },
                        t.insertChar=function(e){
                            e>=144&&this.backSpace();var t=vt(e);this.pos>=100?this.logger.log(gt.ERROR,
                            "Cannot insert "+e.toString(16)+" ("+t+") at position "+this.pos+". Skipping it!"): (this.chars[
                                this.pos
                            ].setChar(t,
                            this.currPenState),
                            this.moveCursor(1))
                        },
                        t.clearFromPos=function(e){
                            var t;for(t=e;t<100;t++)this.chars[
                                t
                            ].reset()
                        },
                        t.clear=function(){
                            this.clearFromPos(0),
                            this.pos=0,
                            this.currPenState.reset()
                        },
                        t.clearToEndOfRow=function(){
                            this.clearFromPos(this.pos)
                        },
                        t.getTextString=function(){
                            for(var e=[],
                            t=!0,
                            i=0;i<100;i++){
                                var r=this.chars[
                                    i
                                ].uchar;" "!==r&&(t=!1),
                                e.push(r)
                            }return t?"": e.join("")
                        },
                        t.setPenStyles=function(e){
                            this.currPenState.setStyles(e),
                            this.chars[
                                this.pos
                            ].setPenState(this.currPenState)
                        },
                        e
                    }(),
                    kt=function(){
                        function e(e){
                            this.rows=void 0,
                            this.currRow=void 0,
                            this.nrRollUpRows=void 0,
                            this.lastOutputScreen=void 0,
                            this.logger=void 0,
                            this.rows=[];for(var t=0;t<15;t++)this.rows.push(new Rt(e));this.logger=e,
                            this.currRow=14,
                            this.nrRollUpRows=null,
                            this.lastOutputScreen=null,
                            this.reset()
                        }var t=e.prototype;return t.reset=function(){
                            for(var e=0;e<15;e++)this.rows[
                                e
                            ].clear();this.currRow=14
                        },
                        t.equals=function(e){
                            for(var t=!0,
                            i=0;i<15;i++)if(!this.rows[
                                i
                            ].equals(e.rows[
                                i
                            ])){
                                t=!1;break
                            }return t
                        },
                        t.copy=function(e){
                            for(var t=0;t<15;t++)this.rows[
                                t
                            ].copy(e.rows[
                                t
                            ])
                        },
                        t.isEmpty=function(){
                            for(var e=!0,
                            t=0;t<15;t++)if(!this.rows[
                                t
                            ].isEmpty()){
                                e=!1;break
                            }return e
                        },
                        t.backSpace=function(){
                            this.rows[
                                this.currRow
                            ].backSpace()
                        },
                        t.clearToEndOfRow=function(){
                            this.rows[
                                this.currRow
                            ].clearToEndOfRow()
                        },
                        t.insertChar=function(e){
                            this.rows[
                                this.currRow
                            ].insertChar(e)
                        },
                        t.setPen=function(e){
                            this.rows[
                                this.currRow
                            ].setPenStyles(e)
                        },
                        t.moveCursor=function(e){
                            this.rows[
                                this.currRow
                            ].moveCursor(e)
                        },
                        t.setCursor=function(e){
                            this.logger.log(gt.INFO,
                            "setCursor: "+e),
                            this.rows[
                                this.currRow
                            ].setCursor(e)
                        },
                        t.setPAC=function(e){
                            this.logger.log(gt.INFO,
                            "pacData = "+JSON.stringify(e));var t=e.row-1;if(this.nrRollUpRows&&t<this.nrRollUpRows-1&&(t=this.nrRollUpRows-1),
                            this.nrRollUpRows&&this.currRow!==t){
                                for(var i=0;i<15;i++)this.rows[
                                    i
                                ].clear();var r=this.currRow+1-this.nrRollUpRows,
                                n=this.lastOutputScreen;if(n){
                                    var a=n.rows[
                                        r
                                    ].cueStartTime,
                                    s=this.logger.time;if(a&&null!==s&&a<s)for(var o=0;o<this.nrRollUpRows;o++)this.rows[
                                        t-this.nrRollUpRows+o+1
                                    ].copy(n.rows[
                                        r+o
                                    ])
                                }
                            }this.currRow=t;var l=this.rows[
                                this.currRow
                            ];if(null!==e.indent){
                                var d=e.indent,
                                c=Math.max(d-1,
                                0);l.setCursor(e.indent),
                                e.color=l.chars[
                                    c
                                ].penState.foreground
                            }var u={
                                foreground: e.color,
                                underline: e.underline,
                                italics: e.italics,
                                background: "black",
                                flash: !1
                            };this.setPen(u)
                        },
                        t.setBkgData=function(e){
                            this.logger.log(gt.INFO,
                            "bkgData = "+JSON.stringify(e)),
                            this.backSpace(),
                            this.setPen(e),
                            this.insertChar(32)
                        },
                        t.setRollUpRows=function(e){
                            this.nrRollUpRows=e
                        },
                        t.rollUp=function(){
                            if(null!==this.nrRollUpRows){
                                this.logger.log(gt.TEXT,
                                this.getDisplayText());var e=this.currRow+1-this.nrRollUpRows,
                                t=this.rows.splice(e,
                                1)[
                                    0
                                ];t.clear(),
                                this.rows.splice(this.currRow,
                                0,
                                t),
                                this.logger.log(gt.INFO,
                                "Rolling up")
                            }else this.logger.log(gt.DEBUG,
                            "roll_up but nrRollUpRows not set yet")
                        },
                        t.getDisplayText=function(e){
                            e=e||!1;for(var t=[],
                            i="",
                            r=-1,
                            n=0;n<15;n++){
                                var a=this.rows[
                                    n
                                ].getTextString();a&&(r=n+1,
                                e?t.push("Row "+r+": '"+a+"'"): t.push(a.trim()))
                            }return t.length>0&&(i=e?"["+t.join(" | ")+"]": t.join("\n")),
                            i
                        },
                        t.getTextAndFormat=function(){
                            return this.rows
                        },
                        e
                    }(),
                    Lt=function(){
                        function e(e,
                        t,
                        i){
                            this.chNr=void 0,
                            this.outputFilter=void 0,
                            this.mode=void 0,
                            this.verbose=void 0,
                            this.displayedMemory=void 0,
                            this.nonDisplayedMemory=void 0,
                            this.lastOutputScreen=void 0,
                            this.currRollUpRow=void 0,
                            this.writeScreen=void 0,
                            this.cueStartTime=void 0,
                            this.logger=void 0,
                            this.chNr=e,
                            this.outputFilter=t,
                            this.mode=null,
                            this.verbose=0,
                            this.displayedMemory=new kt(i),
                            this.nonDisplayedMemory=new kt(i),
                            this.lastOutputScreen=new kt(i),
                            this.currRollUpRow=this.displayedMemory.rows[
                                14
                            ],
                            this.writeScreen=this.displayedMemory,
                            this.mode=null,
                            this.cueStartTime=null,
                            this.logger=i
                        }var t=e.prototype;return t.reset=function(){
                            this.mode=null,
                            this.displayedMemory.reset(),
                            this.nonDisplayedMemory.reset(),
                            this.lastOutputScreen.reset(),
                            this.outputFilter.reset(),
                            this.currRollUpRow=this.displayedMemory.rows[
                                14
                            ],
                            this.writeScreen=this.displayedMemory,
                            this.mode=null,
                            this.cueStartTime=null
                        },
                        t.getHandler=function(){
                            return this.outputFilter
                        },
                        t.setHandler=function(e){
                            this.outputFilter=e
                        },
                        t.setPAC=function(e){
                            this.writeScreen.setPAC(e)
                        },
                        t.setBkgData=function(e){
                            this.writeScreen.setBkgData(e)
                        },
                        t.setMode=function(e){
                            e!==this.mode&&(this.mode=e,
                            this.logger.log(gt.INFO,
                            "MODE="+e),
                            "MODE_POP-ON"===this.mode?this.writeScreen=this.nonDisplayedMemory: (this.writeScreen=this.displayedMemory,
                            this.writeScreen.reset()),
                            "MODE_ROLL-UP"!==this.mode&&(this.displayedMemory.nrRollUpRows=null,
                            this.nonDisplayedMemory.nrRollUpRows=null),
                            this.mode=e)
                        },
                        t.insertChars=function(e){
                            for(var t=0;t<e.length;t++)this.writeScreen.insertChar(e[
                                t
                            ]);var i=this.writeScreen===this.displayedMemory?"DISP": "NON_DISP";this.logger.log(gt.INFO,
                            i+": "+this.writeScreen.getDisplayText(!0)),
                            "MODE_PAINT-ON"!==this.mode&&"MODE_ROLL-UP"!==this.mode||(this.logger.log(gt.TEXT,
                            "DISPLAYED: "+this.displayedMemory.getDisplayText(!0)),
                            this.outputDataUpdate())
                        },
                        t.ccRCL=function(){
                            this.logger.log(gt.INFO,
                            "RCL - Resume Caption Loading"),
                            this.setMode("MODE_POP-ON")
                        },
                        t.ccBS=function(){
                            this.logger.log(gt.INFO,
                            "BS - BackSpace"),
                            "MODE_TEXT"!==this.mode&&(this.writeScreen.backSpace(),
                            this.writeScreen===this.displayedMemory&&this.outputDataUpdate())
                        },
                        t.ccAOF=function(){},
                        t.ccAON=function(){},
                        t.ccDER=function(){
                            this.logger.log(gt.INFO,
                            "DER- Delete to End of Row"),
                            this.writeScreen.clearToEndOfRow(),
                            this.outputDataUpdate()
                        },
                        t.ccRU=function(e){
                            this.logger.log(gt.INFO,
                            "RU("+e+") - Roll Up"),
                            this.writeScreen=this.displayedMemory,
                            this.setMode("MODE_ROLL-UP"),
                            this.writeScreen.setRollUpRows(e)
                        },
                        t.ccFON=function(){
                            this.logger.log(gt.INFO,
                            "FON - Flash On"),
                            this.writeScreen.setPen({
                                flash: !0
                            })
                        },
                        t.ccRDC=function(){
                            this.logger.log(gt.INFO,
                            "RDC - Resume Direct Captioning"),
                            this.setMode("MODE_PAINT-ON")
                        },
                        t.ccTR=function(){
                            this.logger.log(gt.INFO,
                            "TR"),
                            this.setMode("MODE_TEXT")
                        },
                        t.ccRTD=function(){
                            this.logger.log(gt.INFO,
                            "RTD"),
                            this.setMode("MODE_TEXT")
                        },
                        t.ccEDM=function(){
                            this.logger.log(gt.INFO,
                            "EDM - Erase Displayed Memory"),
                            this.displayedMemory.reset(),
                            this.outputDataUpdate(!0)
                        },
                        t.ccCR=function(){
                            this.logger.log(gt.INFO,
                            "CR - Carriage Return"),
                            this.writeScreen.rollUp(),
                            this.outputDataUpdate(!0)
                        },
                        t.ccENM=function(){
                            this.logger.log(gt.INFO,
                            "ENM - Erase Non-displayed Memory"),
                            this.nonDisplayedMemory.reset()
                        },
                        t.ccEOC=function(){
                            if(this.logger.log(gt.INFO,
                            "EOC - End Of Caption"),
                            "MODE_POP-ON"===this.mode){
                                var e=this.displayedMemory;this.displayedMemory=this.nonDisplayedMemory,
                                this.nonDisplayedMemory=e,
                                this.writeScreen=this.nonDisplayedMemory,
                                this.logger.log(gt.TEXT,
                                "DISP: "+this.displayedMemory.getDisplayText())
                            }this.outputDataUpdate(!0)
                        },
                        t.ccTO=function(e){
                            this.logger.log(gt.INFO,
                            "TO("+e+") - Tab Offset"),
                            this.writeScreen.moveCursor(e)
                        },
                        t.ccMIDROW=function(e){
                            var t={
                                flash: !1
                            };if(t.underline=e%2==1,
                            t.italics=e>=46,
                            t.italics)t.foreground="white";else{
                                var i=Math.floor(e/2)-16;t.foreground=[
                                    "white",
                                    "green",
                                    "blue",
                                    "cyan",
                                    "red",
                                    "yellow",
                                    "magenta"
                                ][
                                    i
                                ]
                            }this.logger.log(gt.INFO,
                            "MIDROW: "+JSON.stringify(t)),
                            this.writeScreen.setPen(t)
                        },
                        t.outputDataUpdate=function(e){
                            void 0===e&&(e=!1);var t=this.logger.time;null!==t&&this.outputFilter&&(null!==this.cueStartTime||this.displayedMemory.isEmpty()?this.displayedMemory.equals(this.lastOutputScreen)||(this.outputFilter.newCue(this.cueStartTime,
                            t,
                            this.lastOutputScreen),
                            e&&this.outputFilter.dispatchCue&&this.outputFilter.dispatchCue(),
                            this.cueStartTime=this.displayedMemory.isEmpty()?null: t): this.cueStartTime=t,
                            this.lastOutputScreen.copy(this.displayedMemory))
                        },
                        t.cueSplitAtTime=function(e){
                            this.outputFilter&&(this.displayedMemory.isEmpty()||(this.outputFilter.newCue&&this.outputFilter.newCue(this.cueStartTime,
                            e,
                            this.displayedMemory),
                            this.cueStartTime=e))
                        },
                        e
                    }();function Dt(e,
                    t,
                    i){
                        i.a=e,
                        i.b=t
                    }function It(e,
                    t,
                    i){
                        return i.a===e&&i.b===t
                    }var xt=function(){
                        function e(e,
                        t,
                        i){
                            this.channels=void 0,
                            this.currentChannel=0,
                            this.cmdHistory=void 0,
                            this.logger=void 0;var r=new Et;this.channels=[
                                null,
                                new Lt(e,
                                t,
                                r),
                                new Lt(e+1,
                                i,
                                r)
                            ],
                            this.cmdHistory={
                                a: null,
                                b: null
                            },
                            this.logger=r
                        }var t=e.prototype;return t.getHandler=function(e){
                            return this.channels[
                                e
                            ].getHandler()
                        },
                        t.setHandler=function(e,
                        t){
                            this.channels[
                                e
                            ].setHandler(t)
                        },
                        t.addData=function(e,
                        t){
                            var i,
                            r,
                            n,
                            a=!1;this.logger.time=e;for(var s=0;s<t.length;s+=2)if(r=127&t[
                                s
                            ],
                            n=127&t[
                                s+1
                            ],
                            0!==r||0!==n){
                                if(this.logger.log(gt.DATA,
                                "["+wt([
                                    t[
                                        s
                                    ],
                                    t[
                                        s+1
                                    ]
                                ])+"] -> ("+wt([
                                    r,
                                    n
                                ])+")"),
                                (i=this.parseCmd(r,
                                n))||(i=this.parseMidrow(r,
                                n)),
                                i||(i=this.parsePAC(r,
                                n)),
                                i||(i=this.parseBackgroundAttributes(r,
                                n)),
                                !i&&(a=this.parseChars(r,
                                n))){
                                    var o=this.currentChannel;o&&o>0?this.channels[
                                        o
                                    ].insertChars(a): this.logger.log(gt.WARNING,
                                    "No channel found yet. TEXT-MODE?")
                                }i||a||this.logger.log(gt.WARNING,
                                "Couldn't parse cleaned data "+wt([
                                    r,
                                    n
                                ])+" orig: "+wt([
                                    t[
                                        s
                                    ],
                                    t[
                                        s+1
                                    ]
                                ]))
                            }
                        },
                        t.parseCmd=function(e,
                        t){
                            var i=this.cmdHistory;if(!((20===e||28===e||21===e||29===e)&&t>=32&&t<=47||(23===e||31===e)&&t>=33&&t<=35))return!1;if(It(e,
                            t,
                            i))return Dt(null,
                            null,
                            i),
                            this.logger.log(gt.DEBUG,
                            "Repeated command ("+wt([
                                e,
                                t
                            ])+") is dropped"),
                            !0;var r=20===e||21===e||23===e?1: 2,
                            n=this.channels[
                                r
                            ];return 20===e||21===e||28===e||29===e?32===t?n.ccRCL(): 33===t?n.ccBS(): 34===t?n.ccAOF(): 35===t?n.ccAON(): 36===t?n.ccDER(): 37===t?n.ccRU(2): 38===t?n.ccRU(3): 39===t?n.ccRU(4): 40===t?n.ccFON(): 41===t?n.ccRDC(): 42===t?n.ccTR(): 43===t?n.ccRTD(): 44===t?n.ccEDM(): 45===t?n.ccCR(): 46===t?n.ccENM(): 47===t&&n.ccEOC(): n.ccTO(t-32),
                            Dt(e,
                            t,
                            i),
                            this.currentChannel=r,
                            !0
                        },
                        t.parseMidrow=function(e,
                        t){
                            var i=0;if((17===e||25===e)&&t>=32&&t<=47){
                                if((i=17===e?1: 2)!==this.currentChannel)return this.logger.log(gt.ERROR,
                                "Mismatch channel in midrow parsing"),
                                !1;var r=this.channels[
                                    i
                                ];return!!r&&(r.ccMIDROW(t),
                                this.logger.log(gt.DEBUG,
                                "MIDROW ("+wt([
                                    e,
                                    t
                                ])+")"),
                                !0)
                            }return!1
                        },
                        t.parsePAC=function(e,
                        t){
                            var i,
                            r=this.cmdHistory;if(!((e>=17&&e<=23||e>=25&&e<=31)&&t>=64&&t<=127||(16===e||24===e)&&t>=64&&t<=95))return!1;if(It(e,
                            t,
                            r))return Dt(null,
                            null,
                            r),
                            !0;var n=e<=23?1: 2;i=t>=64&&t<=95?1===n?mt[
                                e
                            ]: bt[
                                e
                            ]: 1===n?yt[
                                e
                            ]: _t[
                                e
                            ];var a=this.channels[
                                n
                            ];return!!a&&(a.setPAC(this.interpretPAC(i,
                            t)),
                            Dt(e,
                            t,
                            r),
                            this.currentChannel=n,
                            !0)
                        },
                        t.interpretPAC=function(e,
                        t){
                            var i=t,
                            r={
                                color: null,
                                italics: !1,
                                indent: null,
                                underline: !1,
                                row: e
                            };return i=t>95?t-96: t-64,
                            r.underline=1==(1&i),
                            i<=13?r.color=[
                                "white",
                                "green",
                                "blue",
                                "cyan",
                                "red",
                                "yellow",
                                "magenta",
                                "white"
                            ][
                                Math.floor(i/2)
                            ]: i<=15?(r.italics=!0,
                            r.color="white"): r.indent=4*Math.floor((i-16)/2),
                            r
                        },
                        t.parseChars=function(e,
                        t){
                            var i,
                            r=null,
                            n=null;if(e>=25?(i=2,
                            n=e-8): (i=1,
                            n=e),
                            n>=17&&n<=19){
                                var a=t;a=17===n?t+80: 18===n?t+112: t+144,
                                this.logger.log(gt.INFO,
                                "Special char '"+vt(a)+"' in channel "+i),
                                r=[
                                    a
                                ]
                            }else e>=32&&e<=127&&(r=0===t?[
                                e
                            ]: [
                                e,
                                t
                            ]);if(r){
                                var s=wt(r);this.logger.log(gt.DEBUG,
                                "Char codes =  "+s.join(",")),
                                Dt(e,
                                t,
                                this.cmdHistory)
                            }return r
                        },
                        t.parseBackgroundAttributes=function(e,
                        t){
                            var i;if(!((16===e||24===e)&&t>=32&&t<=47||(23===e||31===e)&&t>=45&&t<=47))return!1;var r={};16===e||24===e?(i=Math.floor((t-32)/2),
                            r.background=Tt[
                                i
                            ],
                            t%2==1&&(r.background=r.background+"_semi")): 45===t?r.background="transparent": (r.foreground="black",
                            47===t&&(r.underline=!0));var n=e<=23?1: 2;return this.channels[
                                n
                            ].setBkgData(r),
                            Dt(e,
                            t,
                            this.cmdHistory),
                            !0
                        },
                        t.reset=function(){
                            for(var e=0;e<Object.keys(this.channels).length;e++){
                                var t=this.channels[
                                    e
                                ];t&&t.reset()
                            }this.cmdHistory={
                                a: null,
                                b: null
                            }
                        },
                        t.cueSplitAtTime=function(e){
                            for(var t=0;t<this.channels.length;t++){
                                var i=this.channels[
                                    t
                                ];i&&i.cueSplitAtTime(e)
                            }
                        },
                        e
                    }(),
                    Ot=function(){
                        function e(e,
                        t){
                            this.timelineController=void 0,
                            this.cueRanges=[],
                            this.trackName=void 0,
                            this.startTime=null,
                            this.endTime=null,
                            this.screen=null,
                            this.timelineController=e,
                            this.trackName=t
                        }var t=e.prototype;return t.dispatchCue=function(){
                            null!==this.startTime&&(this.timelineController.addCues(this.trackName,
                            this.startTime,
                            this.endTime,
                            this.screen,
                            this.cueRanges),
                            this.startTime=null)
                        },
                        t.newCue=function(e,
                        t,
                        i){
                            (null===this.startTime||this.startTime>e)&&(this.startTime=e),
                            this.endTime=t,
                            this.screen=i,
                            this.timelineController.createCaptionsTrack(this.trackName)
                        },
                        t.reset=function(){
                            this.cueRanges=[]
                        },
                        e
                    }(),
                    Ct=function(e,
                    t,
                    i){
                        return e.substr(i||0,
                        t.length)===t
                    },
                    Pt=function(e){
                        for(var t=5381,
                        i=e.length;i;)t=33*t^e.charCodeAt(--i);return(t>>>0).toString()
                    },
                    Mt={
                        parse: function(e,
                        t,
                        i,
                        r,
                        n,
                        a){
                            var s,
                            o=Object(Fe.utf8ArrayToStr)(new Uint8Array(e)).trim().replace(/\r\n|\n\r|\n|\r/g,
                            "\n").split("\n"),
                            d="00:00.000",
                            c=0,
                            u=0,
                            h=0,
                            f=[],
                            g=!0,
                            p=!1,
                            v=new ht;v.oncue=function(e){
                                var t=i[
                                    r
                                ],
                                n=i.ccOffset;t&&t.new&&(void 0!==u?n=i.ccOffset=t.start: function(e,
                                t,
                                i){
                                    var r=e[
                                        t
                                    ],
                                    n=e[
                                        r.prevCC
                                    ];if(!n||!n.new&&r.new)return e.ccOffset=e.presentationOffset=r.start,
                                    void(r.new=!1);for(;n&&n.new;)e.ccOffset+=r.start-n.start,
                                    r.new=!1,
                                    n=e[
                                        (r=n).prevCC
                                    ];e.presentationOffset=i
                                }(i,
                                r,
                                h)),
                                h&&(n=h-i.presentationOffset),
                                p&&(e.startTime+=n-u,
                                e.endTime+=n-u),
                                e.id=Pt(e.startTime.toString())+Pt(e.endTime.toString())+Pt(e.text),
                                e.text=decodeURIComponent(encodeURIComponent(e.text)),
                                e.endTime>0&&f.push(e)
                            },
                            v.onparsingerror=function(e){
                                s=e
                            },
                            v.onflush=function(){
                                s&&a?a(s): n(f)
                            },
                            o.forEach((function(e){
                                if(g){
                                    if(Ct(e,
                                    "X-TIMESTAMP-MAP=")){
                                        g=!1,
                                        p=!0,
                                        e.substr(16).split(",").forEach((function(e){
                                            Ct(e,
                                            "LOCAL:")?d=e.substr(6): Ct(e,
                                            "MPEGTS:")&&(c=parseInt(e.substr(7)))
                                        }));try{
                                            t+(9e4*i[
                                                r
                                            ].start||0)<0&&(t+=8589934592),
                                            c-=t,
                                            u=function(e){
                                                var t=parseInt(e.substr(-3)),
                                                i=parseInt(e.substr(-6,
                                                2)),
                                                r=parseInt(e.substr(-9,
                                                2)),
                                                n=e.length>9?parseInt(e.substr(0,
                                                e.indexOf(":"))): 0;if(!(Object(l.isFiniteNumber)(t)&&Object(l.isFiniteNumber)(i)&&Object(l.isFiniteNumber)(r)&&Object(l.isFiniteNumber)(n)))throw Error("Malformed X-TIMESTAMP-MAP: Local:"+e);return t+=1e3*i,
                                                t+=6e4*r,
                                                t+=36e5*n
                                            }(d)/1e3,
                                            h=c/9e4
                                        }catch(e){
                                            p=!1,
                                            s=e
                                        }return
                                    }""===e&&(g=!1)
                                }v.parse(e+"\n")
                            })),
                            v.flush()
                        }
                    };function Ft(e){
                        if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e
                    }function Nt(e,
                    t){
                        return e&&e.label===t.name&&!(e.textTrack1||e.textTrack2)
                    }var Ut=function(e){
                        var t,
                        i;function r(t){
                            var i;if((i=e.call(this,
                            t,
                            d.default.MEDIA_ATTACHING,
                            d.default.MEDIA_DETACHING,
                            d.default.FRAG_PARSING_USERDATA,
                            d.default.FRAG_DECRYPTED,
                            d.default.MANIFEST_LOADING,
                            d.default.MANIFEST_LOADED,
                            d.default.FRAG_LOADED,
                            d.default.INIT_PTS_FOUND)||this).media=null,
                            i.config=void 0,
                            i.enabled=!0,
                            i.Cues=void 0,
                            i.textTracks=[],
                            i.tracks=[],
                            i.initPTS=[],
                            i.unparsedVttFrags=[],
                            i.captionsTracks={},
                            i.nonNativeCaptionsTracks={},
                            i.captionsProperties=void 0,
                            i.cea608Parser1=void 0,
                            i.cea608Parser2=void 0,
                            i.lastSn=-1,
                            i.prevCC=-1,
                            i.vttCCs={
                                ccOffset: 0,
                                presentationOffset: 0,
                                0: {
                                    start: 0,
                                    prevCC: -1,
                                    new: !1
                                }
                            },
                            i.hls=t,
                            i.config=t.config,
                            i.Cues=t.config.cueHandler,
                            i.captionsProperties={
                                textTrack1: {
                                    label: i.config.captionsTextTrack1Label,
                                    languageCode: i.config.captionsTextTrack1LanguageCode
                                },
                                textTrack2: {
                                    label: i.config.captionsTextTrack2Label,
                                    languageCode: i.config.captionsTextTrack2LanguageCode
                                },
                                textTrack3: {
                                    label: i.config.captionsTextTrack3Label,
                                    languageCode: i.config.captionsTextTrack3LanguageCode
                                },
                                textTrack4: {
                                    label: i.config.captionsTextTrack4Label,
                                    languageCode: i.config.captionsTextTrack4LanguageCode
                                }
                            },
                            i.config.enableCEA708Captions){
                                var r=new Ot(Ft(i),
                                "textTrack1"),
                                n=new Ot(Ft(i),
                                "textTrack2"),
                                a=new Ot(Ft(i),
                                "textTrack3"),
                                s=new Ot(Ft(i),
                                "textTrack4");i.cea608Parser1=new xt(1,
                                r,
                                n),
                                i.cea608Parser2=new xt(3,
                                a,
                                s)
                            }return i
                        }i=e,
                        (t=r).prototype=Object.create(i.prototype),
                        t.prototype.constructor=t,
                        t.__proto__=i;var n=r.prototype;return n.addCues=function(e,
                        t,
                        i,
                        r,
                        n){
                            for(var a,
                            s,
                            o,
                            l,
                            c=!1,
                            u=n.length;u--;){
                                var h=n[
                                    u
                                ],
                                f=(a=h[
                                    0
                                ],
                                s=h[
                                    1
                                ],
                                o=t,
                                l=i,
                                Math.min(s,
                                l)-Math.max(a,
                                o));if(f>=0&&(h[
                                    0
                                ]=Math.min(h[
                                    0
                                ],
                                t),
                                h[
                                    1
                                ]=Math.max(h[
                                    1
                                ],
                                i),
                                c=!0,
                                f/(i-t)>.5))return
                            }if(c||n.push([
                                t,
                                i
                            ]),
                            this.config.renderTextTracksNatively)this.Cues.newCue(this.captionsTracks[
                                e
                            ],
                            t,
                            i,
                            r);else{
                                var g=this.Cues.newCue(null,
                                t,
                                i,
                                r);this.hls.trigger(d.default.CUES_PARSED,
                                {
                                    type: "captions",
                                    cues: g,
                                    track: e
                                })
                            }
                        },
                        n.onInitPtsFound=function(e){
                            var t=this,
                            i=e.frag,
                            r=e.id,
                            n=e.initPTS,
                            a=this.unparsedVttFrags;"main"===r&&(this.initPTS[
                                i.cc
                            ]=n),
                            a.length&&(this.unparsedVttFrags=[],
                            a.forEach((function(e){
                                t.onFragLoaded(e)
                            })))
                        },
                        n.getExistingTrack=function(e){
                            var t=this.media;if(t)for(var i=0;i<t.textTracks.length;i++){
                                var r=t.textTracks[
                                    i
                                ];if(r[
                                    e
                                ])return r
                            }return null
                        },
                        n.createCaptionsTrack=function(e){
                            this.config.renderTextTracksNatively?this.createNativeTrack(e): this.createNonNativeTrack(e)
                        },
                        n.createNativeTrack=function(e){
                            if(!this.captionsTracks[
                                e
                            ]){
                                var t=this.captionsProperties,
                                i=this.captionsTracks,
                                r=this.media,
                                n=t[
                                    e
                                ],
                                a=n.label,
                                s=n.languageCode,
                                o=this.getExistingTrack(e);if(o)i[
                                    e
                                ]=o,
                                Ue(i[
                                    e
                                ]),
                                Ne(i[
                                    e
                                ],
                                r);else{
                                    var l=this.createTextTrack("captions",
                                    a,
                                    s);l&&(l[
                                        e
                                    ]=!0,
                                    i[
                                        e
                                    ]=l)
                                }
                            }
                        },
                        n.createNonNativeTrack=function(e){
                            if(!this.nonNativeCaptionsTracks[
                                e
                            ]){
                                var t=this.captionsProperties[
                                    e
                                ];if(t){
                                    var i={
                                        _id: e,
                                        label: t.label,
                                        kind: "captions",
                                        default: !!t.media&&!!t.media.default,
                                        closedCaptions: t.media
                                    };this.nonNativeCaptionsTracks[
                                        e
                                    ]=i,
                                    this.hls.trigger(d.default.NON_NATIVE_TEXT_TRACKS_FOUND,
                                    {
                                        tracks: [
                                            i
                                        ]
                                    })
                                }
                            }
                        },
                        n.createTextTrack=function(e,
                        t,
                        i){
                            var r=this.media;if(r)return r.addTextTrack(e,
                            t,
                            i)
                        },
                        n.destroy=function(){
                            e.prototype.destroy.call(this)
                        },
                        n.onMediaAttaching=function(e){
                            this.media=e.media,
                            this._cleanTracks()
                        },
                        n.onMediaDetaching=function(){
                            var e=this.captionsTracks;Object.keys(e).forEach((function(t){
                                Ue(e[
                                    t
                                ]),
                                delete e[
                                    t
                                ]
                            })),
                            this.nonNativeCaptionsTracks={}
                        },
                        n.onManifestLoading=function(){
                            this.lastSn=-1,
                            this.prevCC=-1,
                            this.vttCCs={
                                ccOffset: 0,
                                presentationOffset: 0,
                                0: {
                                    start: 0,
                                    prevCC: -1,
                                    new: !1
                                }
                            },
                            this._cleanTracks(),
                            this.tracks=[],
                            this.captionsTracks={},
                            this.nonNativeCaptionsTracks={}
                        },
                        n._cleanTracks=function(){
                            var e=this.media;if(e){
                                var t=e.textTracks;if(t)for(var i=0;i<t.length;i++)Ue(t[
                                    i
                                ])
                            }
                        },
                        n.onManifestLoaded=function(e){
                            var t=this;if(this.textTracks=[],
                            this.unparsedVttFrags=this.unparsedVttFrags||[],
                            this.initPTS=[],
                            this.cea608Parser1&&this.cea608Parser2&&(this.cea608Parser1.reset(),
                            this.cea608Parser2.reset()),
                            this.config.enableWebVTT){
                                var i=e.subtitles||[],
                                r=this.tracks&&i&&this.tracks.length===i.length;if(this.tracks=e.subtitles||[],
                                this.config.renderTextTracksNatively){
                                    var n=this.media?this.media.textTracks: [];this.tracks.forEach((function(e,
                                    i){
                                        var r;if(i<n.length){
                                            for(var a=null,
                                            s=0;s<n.length;s++)if(Nt(n[
                                                s
                                            ],
                                            e)){
                                                a=n[
                                                    s
                                                ];break
                                            }a&&(r=a)
                                        }r||(r=t.createTextTrack("subtitles",
                                        e.name,
                                        e.lang)),
                                        e.default?r.mode=t.hls.subtitleDisplay?"showing": "hidden": r.mode="disabled",
                                        t.textTracks.push(r)
                                    }))
                                }else if(!r&&this.tracks&&this.tracks.length){
                                    var a=this.tracks.map((function(e){
                                        return{
                                            label: e.name,
                                            kind: e.type.toLowerCase(),
                                            default: e.default,
                                            subtitleTrack: e
                                        }
                                    }));this.hls.trigger(d.default.NON_NATIVE_TEXT_TRACKS_FOUND,
                                    {
                                        tracks: a
                                    })
                                }
                            }this.config.enableCEA708Captions&&e.captions&&e.captions.forEach((function(e){
                                var i=/(?:CC|SERVICE)([1-4])/.exec(e.instreamId);if(i){
                                    var r="textTrack"+i[
                                        1
                                    ],
                                    n=t.captionsProperties[
                                        r
                                    ];n&&(n.label=e.name,
                                    e.lang&&(n.languageCode=e.lang),
                                    n.media=e)
                                }
                            }))
                        },
                        n.onFragLoaded=function(e){
                            var t=e.frag,
                            i=e.payload,
                            r=this.cea608Parser1,
                            n=this.cea608Parser2,
                            a=this.initPTS,
                            s=this.lastSn,
                            o=this.unparsedVttFrags;if("main"===t.type){
                                var c=t.sn;t.sn!==s+1&&r&&n&&(r.reset(),
                                n.reset()),
                                this.lastSn=c
                            }else if("subtitle"===t.type)if(i.byteLength){
                                if(!Object(l.isFiniteNumber)(a[
                                    t.cc
                                ]))return o.push(e),
                                void(a.length&&this.hls.trigger(d.default.SUBTITLE_FRAG_PROCESSED,
                                {
                                    success: !1,
                                    frag: t
                                }));var u=t.decryptdata;null!=u&&null!=u.key&&"AES-128"===u.method||this._parseVTTs(t,
                                i)
                            }else this.hls.trigger(d.default.SUBTITLE_FRAG_PROCESSED,
                            {
                                success: !1,
                                frag: t
                            })
                        },
                        n._parseVTTs=function(e,
                        t){
                            var i=this,
                            r=this.hls,
                            n=this.prevCC,
                            a=this.textTracks,
                            s=this.vttCCs;s[
                                e.cc
                            ]||(s[
                                e.cc
                            ]={
                                start: e.start,
                                prevCC: n,
                                new: !0
                            },
                            this.prevCC=e.cc),
                            Mt.parse(t,
                            this.initPTS[
                                e.cc
                            ],
                            s,
                            e.cc,
                            (function(t){
                                if(i.config.renderTextTracksNatively){
                                    var n=a[
                                        e.level
                                    ];if("disabled"===n.mode)return void r.trigger(d.default.SUBTITLE_FRAG_PROCESSED,
                                    {
                                        success: !1,
                                        frag: e
                                    });t.forEach((function(e){
                                        if(!n.cues.getCueById(e.id))try{
                                            if(n.addCue(e),
                                            !n.cues.getCueById(e.id))throw new Error("addCue is failed for: "+e)
                                        }catch(i){
                                            c.logger.debug("Failed occurred on adding cues: "+i);var t=new window.TextTrackCue(e.startTime,
                                            e.endTime,
                                            e.text);t.id=e.id,
                                            n.addCue(t)
                                        }
                                    }))
                                }else{
                                    var s=i.tracks[
                                        e.level
                                    ].default?"default": "subtitles"+e.level;r.trigger(d.default.CUES_PARSED,
                                    {
                                        type: "subtitles",
                                        cues: t,
                                        track: s
                                    })
                                }r.trigger(d.default.SUBTITLE_FRAG_PROCESSED,
                                {
                                    success: !0,
                                    frag: e
                                })
                            }),
                            (function(t){
                                c.logger.log("Failed to parse VTT cue: "+t),
                                r.trigger(d.default.SUBTITLE_FRAG_PROCESSED,
                                {
                                    success: !1,
                                    frag: e
                                })
                            }))
                        },
                        n.onFragDecrypted=function(e){
                            var t=e.frag,
                            i=e.payload;if("subtitle"===t.type){
                                if(!Object(l.isFiniteNumber)(this.initPTS[
                                    t.cc
                                ]))return void this.unparsedVttFrags.push(e);this._parseVTTs(t,
                                i)
                            }
                        },
                        n.onFragParsingUserdata=function(e){
                            var t=this.cea608Parser1,
                            i=this.cea608Parser2;if(this.enabled&&t&&i)for(var r=0;r<e.samples.length;r++){
                                var n=e.samples[
                                    r
                                ].bytes;if(n){
                                    var a=this.extractCea608Data(n);t.addData(e.samples[
                                        r
                                    ].pts,
                                    a[
                                        0
                                    ]),
                                    i.addData(e.samples[
                                        r
                                    ].pts,
                                    a[
                                        1
                                    ])
                                }
                            }
                        },
                        n.extractCea608Data=function(e){
                            for(var t=31&e[
                                0
                            ],
                            i=2,
                            r=[
                                [],
                                []
                            ],
                            n=0;n<t;n++){
                                var a=e[
                                    i++
                                ],
                                s=127&e[
                                    i++
                                ],
                                o=127&e[
                                    i++
                                ],
                                l=3&a;0===s&&0===o||0!=(4&a)&&(0!==l&&1!==l||(r[
                                    l
                                ].push(s),
                                r[
                                    l
                                ].push(o)))
                            }return r
                        },
                        r
                    }(h);function Bt(e,
                    t){
                        for(var i=0;i<t.length;i++){
                            var r=t[
                                i
                            ];r.enumerable=r.enumerable||!1,
                            r.configurable=!0,
                            "value"in r&&(r.writable=!0),
                            Object.defineProperty(e,
                            r.key,
                            r)
                        }
                    }function Gt(e){
                        for(var t=[],
                        i=0;i<e.length;i++){
                            var r=e[
                                i
                            ];"subtitles"===r.kind&&r.label&&t.push(e[
                                i
                            ])
                        }return t
                    }var jt,
                    $t=function(e){
                        var t,
                        i;function r(t){
                            var i;return(i=e.call(this,
                            t,
                            d.default.MEDIA_ATTACHED,
                            d.default.MEDIA_DETACHING,
                            d.default.MANIFEST_LOADED,
                            d.default.SUBTITLE_TRACK_LOADED)||this).tracks=[],
                            i.trackId=-1,
                            i.media=null,
                            i.stopped=!0,
                            i.subtitleDisplay=!0,
                            i.queuedDefaultTrack=null,
                            i
                        }i=e,
                        (t=r).prototype=Object.create(i.prototype),
                        t.prototype.constructor=t,
                        t.__proto__=i;var n,
                        a,
                        s,
                        o=r.prototype;return o.destroy=function(){
                            h.prototype.destroy.call(this)
                        },
                        o.onMediaAttached=function(e){
                            var t=this;this.media=e.media,
                            this.media&&(Object(l.isFiniteNumber)(this.queuedDefaultTrack)&&(this.subtitleTrack=this.queuedDefaultTrack,
                            this.queuedDefaultTrack=null),
                            this.trackChangeListener=this._onTextTracksChanged.bind(this),
                            this.useTextTrackPolling=!(this.media.textTracks&&"onchange"in this.media.textTracks),
                            this.useTextTrackPolling?this.subtitlePollingInterval=setInterval((function(){
                                t.trackChangeListener()
                            }),
                            500): this.media.textTracks.addEventListener("change",
                            this.trackChangeListener))
                        },
                        o.onMediaDetaching=function(){
                            this.media&&(this.useTextTrackPolling?clearInterval(this.subtitlePollingInterval): this.media.textTracks.removeEventListener("change",
                            this.trackChangeListener),
                            Object(l.isFiniteNumber)(this.subtitleTrack)&&(this.queuedDefaultTrack=this.subtitleTrack),
                            Gt(this.media.textTracks).forEach((function(e){
                                Ue(e)
                            })),
                            this.subtitleTrack=-1,
                            this.media=null)
                        },
                        o.onManifestLoaded=function(e){
                            var t=this,
                            i=e.subtitles||[];this.tracks=i,
                            this.hls.trigger(d.default.SUBTITLE_TRACKS_UPDATED,
                            {
                                subtitleTracks: i
                            }),
                            i.forEach((function(e){
                                e.default&&(t.media?t.subtitleTrack=e.id: t.queuedDefaultTrack=e.id)
                            }))
                        },
                        o.onSubtitleTrackLoaded=function(e){
                            var t=this,
                            i=e.id,
                            r=e.details,
                            n=this.trackId,
                            a=this.tracks,
                            s=a[
                                n
                            ];if(i>=a.length||i!==n||!s||this.stopped)this._clearReloadTimer();else if(c.logger.log("subtitle track "+i+" loaded"),
                            r.live){
                                var o=ne(s.details,
                                r,
                                e.stats.trequest);c.logger.log("Reloading live subtitle playlist in "+o+"ms"),
                                this.timer=setTimeout((function(){
                                    t._loadCurrentTrack()
                                }),
                                o)
                            }else this._clearReloadTimer()
                        },
                        o.startLoad=function(){
                            this.stopped=!1,
                            this._loadCurrentTrack()
                        },
                        o.stopLoad=function(){
                            this.stopped=!0,
                            this._clearReloadTimer()
                        },
                        o._clearReloadTimer=function(){
                            this.timer&&(clearTimeout(this.timer),
                            this.timer=null)
                        },
                        o._loadCurrentTrack=function(){
                            var e=this.trackId,
                            t=this.tracks,
                            i=this.hls,
                            r=t[
                                e
                            ];e<0||!r||r.details&&!r.details.live||(c.logger.log("Loading subtitle track "+e),
                            i.trigger(d.default.SUBTITLE_TRACK_LOADING,
                            {
                                url: r.url,
                                id: e
                            }))
                        },
                        o._toggleTrackModes=function(e){
                            var t=this.media,
                            i=this.subtitleDisplay,
                            r=this.trackId;if(t){
                                var n=Gt(t.textTracks);if(-1===e)[].slice.call(n).forEach((function(e){
                                    e.mode="disabled"
                                }));else{
                                    var a=n[
                                        r
                                    ];a&&(a.mode="disabled")
                                }var s=n[
                                    e
                                ];s&&(s.mode=i?"showing": "hidden")
                            }
                        },
                        o._setSubtitleTrackInternal=function(e){
                            var t=this.hls,
                            i=this.tracks;!Object(l.isFiniteNumber)(e)||e<-1||e>=i.length||(this.trackId=e,
                            c.logger.log("Switching to subtitle track "+e),
                            t.trigger(d.default.SUBTITLE_TRACK_SWITCH,
                            {
                                id: e
                            }),
                            this._loadCurrentTrack())
                        },
                        o._onTextTracksChanged=function(){
                            if(this.media&&this.hls.config.renderTextTracksNatively){
                                for(var e=-1,
                                t=Gt(this.media.textTracks),
                                i=0;i<t.length;i++)if("hidden"===t[
                                    i
                                ].mode)e=i;else if("showing"===t[
                                    i
                                ].mode){
                                    e=i;break
                                }this.subtitleTrack=e
                            }
                        },
                        n=r,
                        (a=[
                            {
                                key: "subtitleTracks",
                                get: function(){
                                    return this.tracks
                                }
                            },
                            {
                                key: "subtitleTrack",
                                get: function(){
                                    return this.trackId
                                },
                                set: function(e){
                                    this.trackId!==e&&(this._toggleTrackModes(e),
                                    this._setSubtitleTrackInternal(e))
                                }
                            }
                        ])&&Bt(n.prototype,
                        a),
                        s&&Bt(n,
                        s),
                        r
                    }(h),
                    Kt=i("./src/crypt/decrypter.js"),
                    Ht=window.performance,
                    Vt=function(e){
                        var t,
                        i;function r(t,
                        i){
                            var r;return(r=e.call(this,
                            t,
                            d.default.MEDIA_ATTACHED,
                            d.default.MEDIA_DETACHING,
                            d.default.ERROR,
                            d.default.KEY_LOADED,
                            d.default.FRAG_LOADED,
                            d.default.SUBTITLE_TRACKS_UPDATED,
                            d.default.SUBTITLE_TRACK_SWITCH,
                            d.default.SUBTITLE_TRACK_LOADED,
                            d.default.SUBTITLE_FRAG_PROCESSED,
                            d.default.LEVEL_UPDATED)||this).fragmentTracker=i,
                            r.config=t.config,
                            r.state=pe,
                            r.tracks=[],
                            r.tracksBuffered=[],
                            r.currentTrackId=-1,
                            r.decrypter=new Kt.default(t,
                            t.config),
                            r.lastAVStart=0,
                            r._onMediaSeeking=r.onMediaSeeking.bind(function(e){
                                if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e
                            }(r)),
                            r
                        }i=e,
                        (t=r).prototype=Object.create(i.prototype),
                        t.prototype.constructor=t,
                        t.__proto__=i;var n=r.prototype;return n.startLoad=function(){
                            this.stopLoad(),
                            this.state=me;var e=this.tracks[
                                this.currentTrackId
                            ];e&&e.details&&(this.setInterval(500),
                            this.tick())
                        },
                        n.onSubtitleFragProcessed=function(e){
                            var t=e.frag,
                            i=e.success;if(this.fragPrevious=t,
                            this.state=me,
                            i){
                                var r=this.tracksBuffered[
                                    this.currentTrackId
                                ];if(r){
                                    for(var n,
                                    a=t.start,
                                    s=0;s<r.length;s++)if(a>=r[
                                        s
                                    ].start&&a<=r[
                                        s
                                    ].end){
                                        n=r[
                                            s
                                        ];break
                                    }var o=t.start+t.duration;n?n.end=o: (n={
                                        start: a,
                                        end: o
                                    },
                                    r.push(n))
                                }
                            }
                        },
                        n.onMediaAttached=function(e){
                            var t=e.media;this.media=t,
                            t.addEventListener("seeking",
                            this._onMediaSeeking),
                            this.state=me
                        },
                        n.onMediaDetaching=function(){
                            var e=this;this.media&&(this.media.removeEventListener("seeking",
                            this._onMediaSeeking),
                            this.fragmentTracker.removeAllFragments(),
                            this.currentTrackId=-1,
                            this.tracks.forEach((function(t){
                                e.tracksBuffered[
                                    t.id
                                ]=[]
                            })),
                            this.media=null,
                            this.state=pe)
                        },
                        n.onError=function(e){
                            var t=e.frag;t&&"subtitle"===t.type&&(this.fragCurrent&&this.fragCurrent.loader&&this.fragCurrent.loader.abort(),
                            this.state=me)
                        },
                        n.onSubtitleTracksUpdated=function(e){
                            var t=this;c.logger.log("subtitle tracks updated"),
                            this.tracksBuffered=[],
                            this.tracks=e.subtitleTracks,
                            this.tracks.forEach((function(e){
                                t.tracksBuffered[
                                    e.id
                                ]=[]
                            }))
                        },
                        n.onSubtitleTrackSwitch=function(e){
                            if(this.currentTrackId=e.id,
                            this.tracks&&this.tracks.length&&-1!==this.currentTrackId){
                                var t=this.tracks[
                                    this.currentTrackId
                                ];t&&t.details&&this.setInterval(500)
                            }else this.clearInterval()
                        },
                        n.onSubtitleTrackLoaded=function(e){
                            var t=e.id,
                            i=e.details,
                            r=this.currentTrackId,
                            n=this.tracks,
                            a=n[
                                r
                            ];t>=n.length||t!==r||!a||(i.live&&function(e,
                            t,
                            i){
                                void 0===i&&(i=0);var r=-1;re(e,
                                t,
                                (function(e,
                                t,
                                i){
                                    t.start=e.start,
                                    r=i
                                }));var n=t.fragments;if(r<0)n.forEach((function(e){
                                    e.start+=i
                                }));else for(var a=r+1;a<n.length;a++)n[
                                    a
                                ].start=n[
                                    a-1
                                ].start+n[
                                    a-1
                                ].duration
                            }(a.details,
                            i,
                            this.lastAVStart),
                            a.details=i,
                            this.setInterval(500))
                        },
                        n.onKeyLoaded=function(){
                            this.state===be&&(this.state=me)
                        },
                        n.onFragLoaded=function(e){
                            var t=this.fragCurrent,
                            i=e.frag.decryptdata,
                            r=e.frag,
                            n=this.hls;if(this.state===_e&&t&&"subtitle"===e.frag.type&&t.sn===e.frag.sn&&e.payload.byteLength>0&&i&&i.key&&"AES-128"===i.method){
                                var a=Ht.now();this.decrypter.decrypt(e.payload,
                                i.key.buffer,
                                i.iv.buffer,
                                (function(e){
                                    var t=Ht.now();n.trigger(d.default.FRAG_DECRYPTED,
                                    {
                                        frag: r,
                                        payload: e,
                                        stats: {
                                            tstart: a,
                                            tdecrypt: t
                                        }
                                    })
                                }))
                            }
                        },
                        n.onLevelUpdated=function(e){
                            var t=e.details.fragments;this.lastAVStart=t.length?t[
                                0
                            ].start: 0
                        },
                        n.doTick=function(){
                            if(this.media)switch(this.state){
                                case me: var e=this.config,
                                t=this.currentTrackId,
                                i=this.fragmentTracker,
                                r=this.media,
                                n=this.tracks;if(!n||!n[
                                    t
                                ]||!n[
                                    t
                                ].details)break;var a,
                                s=e.maxBufferHole,
                                o=e.maxFragLookUpTolerance,
                                l=Math.min(e.maxBufferLength,
                                e.maxMaxBufferLength),
                                u=K.bufferedInfo(this._getBuffered(),
                                r.currentTime,
                                s),
                                h=u.end,
                                f=u.len,
                                g=n[
                                    t
                                ].details,
                                p=g.fragments,
                                v=p.length,
                                m=p[
                                    v-1
                                ].start+p[
                                    v-1
                                ].duration;if(f>l)return;var y=this.fragPrevious;h<m?(y&&g.hasProgramDateTime&&(a=le(p,
                                y.endProgramDateTime,
                                o)),
                                a||(a=de(y,
                                p,
                                h,
                                o))): a=p[
                                    v-1
                                ],
                                a&&a.encrypted?(c.logger.log("Loading key for "+a.sn),
                                this.state=be,
                                this.hls.trigger(d.default.KEY_LOADING,
                                {
                                    frag: a
                                })): a&&i.getState(a)===N&&(this.fragCurrent=a,
                                this.state=_e,
                                this.hls.trigger(d.default.FRAG_LOADING,
                                {
                                    frag: a
                                }))
                            }else this.state=me
                        },
                        n.stopLoad=function(){
                            this.lastAVStart=0,
                            this.fragPrevious=null,
                            e.prototype.stopLoad.call(this)
                        },
                        n._getBuffered=function(){
                            return this.tracksBuffered[
                                this.currentTrackId
                            ]||[]
                        },
                        n.onMediaSeeking=function(){
                            if(this.fragCurrent){
                                var e=this.media?this.media.currentTime: 0,
                                t=this.config.maxFragLookUpTolerance,
                                i=this.fragCurrent.start-t,
                                r=this.fragCurrent.start+this.fragCurrent.duration+t;(e<i||e>r)&&(this.fragCurrent.loader&&this.fragCurrent.loader.abort(),
                                this.fragmentTracker.removeFragment(this.fragCurrent),
                                this.fragCurrent=null,
                                this.fragPrevious=null,
                                this.state=me,
                                this.tick())
                            }
                        },
                        r
                    }(Ie);!function(e){
                        e.WIDEVINE="com.widevine.alpha",
                        e.PLAYREADY="com.microsoft.playready"
                    }(jt||(jt={}));var Wt="undefined"!=typeof window&&window.navigator&&window.navigator.requestMediaKeySystemAccess?window.navigator.requestMediaKeySystemAccess.bind(window.navigator): null;function Yt(e,
                    t){
                        for(var i=0;i<t.length;i++){
                            var r=t[
                                i
                            ];r.enumerable=r.enumerable||!1,
                            r.configurable=!0,
                            "value"in r&&(r.writable=!0),
                            Object.defineProperty(e,
                            r.key,
                            r)
                        }
                    }var zt=function(e){
                        var t,
                        i;function r(t){
                            var i;return(i=e.call(this,
                            t,
                            d.default.MEDIA_ATTACHED,
                            d.default.MEDIA_DETACHED,
                            d.default.MANIFEST_PARSED)||this)._widevineLicenseUrl=void 0,
                            i._licenseXhrSetup=void 0,
                            i._emeEnabled=void 0,
                            i._requestMediaKeySystemAccess=void 0,
                            i._drmSystemOptions=void 0,
                            i._config=void 0,
                            i._mediaKeysList=[],
                            i._media=null,
                            i._hasSetMediaKeys=!1,
                            i._requestLicenseFailureCount=0,
                            i.mediaKeysPromise=null,
                            i._onMediaEncrypted=function(e){
                                if(c.logger.log('Media is encrypted using "'+e.initDataType+'" init data type'),
                                !i.mediaKeysPromise)return c.logger.error("Fatal: Media is encrypted but no CDM access or no keys have been requested"),
                                void i.hls.trigger(d.default.ERROR,
                                {
                                    type: o.ErrorTypes.KEY_SYSTEM_ERROR,
                                    details: o.ErrorDetails.KEY_SYSTEM_NO_KEYS,
                                    fatal: !0
                                });var t=function(t){
                                    i._media&&(i._attemptSetMediaKeys(t),
                                    i._generateRequestWithPreferredKeySession(e.initDataType,
                                    e.initData))
                                };i.mediaKeysPromise.then(t).catch(t)
                            },
                            i._config=t.config,
                            i._widevineLicenseUrl=i._config.widevineLicenseUrl,
                            i._licenseXhrSetup=i._config.licenseXhrSetup,
                            i._emeEnabled=i._config.emeEnabled,
                            i._requestMediaKeySystemAccess=i._config.requestMediaKeySystemAccessFunc,
                            i._drmSystemOptions=t.config.drmSystemOptions,
                            i
                        }i=e,
                        (t=r).prototype=Object.create(i.prototype),
                        t.prototype.constructor=t,
                        t.__proto__=i;var n,
                        a,
                        s,
                        l=r.prototype;return l.getLicenseServerUrl=function(e){
                            switch(e){
                                case jt.WIDEVINE: if(!this._widevineLicenseUrl)break;return this._widevineLicenseUrl
                            }throw new Error('no license server URL configured for key-system "'+e+'"')
                        },
                        l._attemptKeySystemAccess=function(e,
                        t,
                        i){
                            var r=this,
                            n=function(e,
                            t,
                            i,
                            r){
                                switch(e){
                                    case jt.WIDEVINE: return function(e,
                                    t,
                                    i){
                                        var r={
                                            audioCapabilities: [],
                                            videoCapabilities: []
                                        };return e.forEach((function(e){
                                            r.audioCapabilities.push({
                                                contentType: 'audio/mp4; codecs="'+e+'"',
                                                robustness: i.audioRobustness||""
                                            })
                                        })),
                                        t.forEach((function(e){
                                            r.videoCapabilities.push({
                                                contentType: 'video/mp4; codecs="'+e+'"',
                                                robustness: i.videoRobustness||""
                                            })
                                        })),
                                        [
                                            r
                                        ]
                                    }(t,
                                    i,
                                    r);default: throw new Error("Unknown key-system: "+e)
                                }
                            }(e,
                            t,
                            i,
                            this._drmSystemOptions);c.logger.log("Requesting encrypted media key-system access");var a=this.requestMediaKeySystemAccess(e,
                            n);this.mediaKeysPromise=a.then((function(t){
                                return r._onMediaKeySystemAccessObtained(e,
                                t)
                            })),
                            a.catch((function(t){
                                c.logger.error('Failed to obtain key-system "'+e+'" access:',
                                t)
                            }))
                        },
                        l._onMediaKeySystemAccessObtained=function(e,
                        t){
                            var i=this;c.logger.log('Access for key-system "'+e+'" obtained');var r={
                                mediaKeysSessionInitialized: !1,
                                mediaKeySystemAccess: t,
                                mediaKeySystemDomain: e
                            };this._mediaKeysList.push(r);var n=Promise.resolve().then((function(){
                                return t.createMediaKeys()
                            })).then((function(t){
                                return r.mediaKeys=t,
                                c.logger.log('Media-keys created for key-system "'+e+'"'),
                                i._onMediaKeysCreated(),
                                t
                            }));return n.catch((function(e){
                                c.logger.error("Failed to create media-keys:",
                                e)
                            })),
                            n
                        },
                        l._onMediaKeysCreated=function(){
                            var e=this;this._mediaKeysList.forEach((function(t){
                                t.mediaKeysSession||(t.mediaKeysSession=t.mediaKeys.createSession(),
                                e._onNewMediaKeySession(t.mediaKeysSession))
                            }))
                        },
                        l._onNewMediaKeySession=function(e){
                            var t=this;c.logger.log("New key-system session "+e.sessionId),
                            e.addEventListener("message",
                            (function(i){
                                t._onKeySessionMessage(e,
                                i.message)
                            }),
                            !1)
                        },
                        l._onKeySessionMessage=function(e,
                        t){
                            c.logger.log("Got EME message event, creating license request"),
                            this._requestLicense(t,
                            (function(t){
                                c.logger.log("Received license data (length: "+(t?t.byteLength: t)+"), updating key-session"),
                                e.update(t)
                            }))
                        },
                        l._attemptSetMediaKeys=function(e){
                            if(!this._media)throw new Error("Attempted to set mediaKeys without first attaching a media element");if(!this._hasSetMediaKeys){
                                var t=this._mediaKeysList[
                                    0
                                ];if(!t||!t.mediaKeys)return c.logger.error("Fatal: Media is encrypted but no CDM access or no keys have been obtained yet"),
                                void this.hls.trigger(d.default.ERROR,
                                {
                                    type: o.ErrorTypes.KEY_SYSTEM_ERROR,
                                    details: o.ErrorDetails.KEY_SYSTEM_NO_KEYS,
                                    fatal: !0
                                });c.logger.log("Setting keys for encrypted media"),
                                this._media.setMediaKeys(t.mediaKeys),
                                this._hasSetMediaKeys=!0
                            }
                        },
                        l._generateRequestWithPreferredKeySession=function(e,
                        t){
                            var i=this,
                            r=this._mediaKeysList[
                                0
                            ];if(!r)return c.logger.error("Fatal: Media is encrypted but not any key-system access has been obtained yet"),
                            void this.hls.trigger(d.default.ERROR,
                            {
                                type: o.ErrorTypes.KEY_SYSTEM_ERROR,
                                details: o.ErrorDetails.KEY_SYSTEM_NO_ACCESS,
                                fatal: !0
                            });if(r.mediaKeysSessionInitialized)c.logger.warn("Key-Session already initialized but requested again");else{
                                var n=r.mediaKeysSession;if(!n)return c.logger.error("Fatal: Media is encrypted but no key-session existing"),
                                void this.hls.trigger(d.default.ERROR,
                                {
                                    type: o.ErrorTypes.KEY_SYSTEM_ERROR,
                                    details: o.ErrorDetails.KEY_SYSTEM_NO_SESSION,
                                    fatal: !0
                                });if(!t)return c.logger.warn("Fatal: initData required for generating a key session is null"),
                                void this.hls.trigger(d.default.ERROR,
                                {
                                    type: o.ErrorTypes.KEY_SYSTEM_ERROR,
                                    details: o.ErrorDetails.KEY_SYSTEM_NO_INIT_DATA,
                                    fatal: !0
                                });c.logger.log('Generating key-session request for "'+e+'" init data type'),
                                r.mediaKeysSessionInitialized=!0,
                                n.generateRequest(e,
                                t).then((function(){
                                    c.logger.debug("Key-session generation succeeded")
                                })).catch((function(e){
                                    c.logger.error("Error generating key-session request:",
                                    e),
                                    i.hls.trigger(d.default.ERROR,
                                    {
                                        type: o.ErrorTypes.KEY_SYSTEM_ERROR,
                                        details: o.ErrorDetails.KEY_SYSTEM_NO_SESSION,
                                        fatal: !1
                                    })
                                }))
                            }
                        },
                        l._createLicenseXhr=function(e,
                        t,
                        i){
                            var r=new XMLHttpRequest,
                            n=this._licenseXhrSetup;try{
                                if(n)try{
                                    n(r,
                                    e)
                                }catch(t){
                                    r.open("POST",
                                    e,
                                    !0),
                                    n(r,
                                    e)
                                }r.readyState||r.open("POST",
                                e,
                                !0)
                            }catch(e){
                                throw new Error("issue setting up KeySystem license XHR "+e)
                            }return r.responseType="arraybuffer",
                            r.onreadystatechange=this._onLicenseRequestReadyStageChange.bind(this,
                            r,
                            e,
                            t,
                            i),
                            r
                        },
                        l._onLicenseRequestReadyStageChange=function(e,
                        t,
                        i,
                        r){
                            switch(e.readyState){
                                case 4: if(200===e.status)this._requestLicenseFailureCount=0,
                                c.logger.log("License request succeeded"),
                                "arraybuffer"!==e.responseType&&c.logger.warn("xhr response type was not set to the expected arraybuffer for license request"),
                                r(e.response);else{
                                    if(c.logger.error("License Request XHR failed ("+t+"). Status: "+e.status+" ("+e.statusText+")"),
                                    this._requestLicenseFailureCount++,
                                    this._requestLicenseFailureCount>3)return void this.hls.trigger(d.default.ERROR,
                                    {
                                        type: o.ErrorTypes.KEY_SYSTEM_ERROR,
                                        details: o.ErrorDetails.KEY_SYSTEM_LICENSE_REQUEST_FAILED,
                                        fatal: !0
                                    });var n=3-this._requestLicenseFailureCount+1;c.logger.warn("Retrying license request, "+n+" attempts left"),
                                    this._requestLicense(i,
                                    r)
                                }
                            }
                        },
                        l._generateLicenseRequestChallenge=function(e,
                        t){
                            switch(e.mediaKeySystemDomain){
                                case jt.WIDEVINE: return t
                            }throw new Error("unsupported key-system: "+e.mediaKeySystemDomain)
                        },
                        l._requestLicense=function(e,
                        t){
                            c.logger.log("Requesting content license for key-system");var i=this._mediaKeysList[
                                0
                            ];if(!i)return c.logger.error("Fatal error: Media is encrypted but no key-system access has been obtained yet"),
                            void this.hls.trigger(d.default.ERROR,
                            {
                                type: o.ErrorTypes.KEY_SYSTEM_ERROR,
                                details: o.ErrorDetails.KEY_SYSTEM_NO_ACCESS,
                                fatal: !0
                            });try{
                                var r=this.getLicenseServerUrl(i.mediaKeySystemDomain),
                                n=this._createLicenseXhr(r,
                                e,
                                t);c.logger.log("Sending license request to URL: "+r);var a=this._generateLicenseRequestChallenge(i,
                                e);n.send(a)
                            }catch(e){
                                c.logger.error("Failure requesting DRM license: "+e),
                                this.hls.trigger(d.default.ERROR,
                                {
                                    type: o.ErrorTypes.KEY_SYSTEM_ERROR,
                                    details: o.ErrorDetails.KEY_SYSTEM_LICENSE_REQUEST_FAILED,
                                    fatal: !0
                                })
                            }
                        },
                        l.onMediaAttached=function(e){
                            if(this._emeEnabled){
                                var t=e.media;this._media=t,
                                t.addEventListener("encrypted",
                                this._onMediaEncrypted)
                            }
                        },
                        l.onMediaDetached=function(){
                            var e=this._media,
                            t=this._mediaKeysList;e&&(e.removeEventListener("encrypted",
                            this._onMediaEncrypted),
                            this._media=null,
                            this._mediaKeysList=[],
                            Promise.all(t.map((function(e){
                                if(e.mediaKeysSession)return e.mediaKeysSession.close().catch((function(){}))
                            }))).then((function(){
                                return e.setMediaKeys(null)
                            })).catch((function(){})))
                        },
                        l.onManifestParsed=function(e){
                            if(this._emeEnabled){
                                var t=e.levels.map((function(e){
                                    return e.audioCodec
                                })),
                                i=e.levels.map((function(e){
                                    return e.videoCodec
                                }));this._attemptKeySystemAccess(jt.WIDEVINE,
                                t,
                                i)
                            }
                        },
                        n=r,
                        (a=[
                            {
                                key: "requestMediaKeySystemAccess",
                                get: function(){
                                    if(!this._requestMediaKeySystemAccess)throw new Error("No requestMediaKeySystemAccess function configured");return this._requestMediaKeySystemAccess
                                }
                            }
                        ])&&Yt(n.prototype,
                        a),
                        s&&Yt(n,
                        s),
                        r
                    }(h);function qt(e,
                    t){
                        var i=Object.keys(e);if(Object.getOwnPropertySymbols){
                            var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){
                                return Object.getOwnPropertyDescriptor(e,
                                t).enumerable
                            }))),
                            i.push.apply(i,
                            r)
                        }return i
                    }function Xt(e){
                        for(var t=1;t<arguments.length;t++){
                            var i=null!=arguments[
                                t
                            ]?arguments[
                                t
                            ]: {};t%2?qt(Object(i),
                            !0).forEach((function(t){
                                Qt(e,
                                t,
                                i[
                                    t
                                ])
                            })): Object.getOwnPropertyDescriptors?Object.defineProperties(e,
                            Object.getOwnPropertyDescriptors(i)): qt(Object(i)).forEach((function(t){
                                Object.defineProperty(e,
                                t,
                                Object.getOwnPropertyDescriptor(i,
                                t))
                            }))
                        }return e
                    }function Qt(e,
                    t,
                    i){
                        return t in e?Object.defineProperty(e,
                        t,
                        {
                            value: i,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }): e[
                            t
                        ]=i,
                        e
                    }var Jt=Xt(Xt({
                        autoStartLoad: !0,
                        startPosition: -1,
                        defaultAudioCodec: void 0,
                        debug: !1,
                        capLevelOnFPSDrop: !1,
                        capLevelToPlayerSize: !1,
                        initialLiveManifestSize: 1,
                        maxBufferLength: 30,
                        maxBufferSize: 6e7,
                        maxBufferHole: .5,
                        lowBufferWatchdogPeriod: .5,
                        highBufferWatchdogPeriod: 3,
                        nudgeOffset: .1,
                        nudgeMaxRetry: 3,
                        maxFragLookUpTolerance: .25,
                        liveSyncDurationCount: 3,
                        liveMaxLatencyDurationCount: 1/0,
                        liveSyncDuration: void 0,
                        liveMaxLatencyDuration: void 0,
                        liveDurationInfinity: !1,
                        liveBackBufferLength: 1/0,
                        maxMaxBufferLength: 600,
                        enableWorker: !0,
                        enableSoftwareAES: !0,
                        manifestLoadingTimeOut: 1e4,
                        manifestLoadingMaxRetry: 1,
                        manifestLoadingRetryDelay: 1e3,
                        manifestLoadingMaxRetryTimeout: 64e3,
                        startLevel: void 0,
                        levelLoadingTimeOut: 1e4,
                        levelLoadingMaxRetry: 4,
                        levelLoadingRetryDelay: 1e3,
                        levelLoadingMaxRetryTimeout: 64e3,
                        fragLoadingTimeOut: 2e4,
                        fragLoadingMaxRetry: 6,
                        fragLoadingRetryDelay: 1e3,
                        fragLoadingMaxRetryTimeout: 64e3,
                        startFragPrefetch: !1,
                        fpsDroppedMonitoringPeriod: 5e3,
                        fpsDroppedMonitoringThreshold: .2,
                        appendErrorMaxRetry: 3,
                        loader: Qe,
                        fLoader: void 0,
                        pLoader: void 0,
                        xhrSetup: void 0,
                        licenseXhrSetup: void 0,
                        abrController: He,
                        bufferController: We,
                        capLevelController: ze,
                        fpsController: Xe,
                        stretchShortVideoTrack: !1,
                        maxAudioFramesDrift: 1,
                        forceKeyFrameOnDiscontinuity: !0,
                        abrEwmaFastLive: 3,
                        abrEwmaSlowLive: 9,
                        abrEwmaFastVoD: 3,
                        abrEwmaSlowVoD: 9,
                        abrEwmaDefaultEstimate: 5e5,
                        abrBandWidthFactor: .95,
                        abrBandWidthUpFactor: .7,
                        abrMaxWithRealBitrate: !1,
                        maxStarvationDelay: 4,
                        maxLoadingDelay: 4,
                        minAutoBitrate: 0,
                        emeEnabled: !1,
                        widevineLicenseUrl: void 0,
                        drmSystemOptions: {},
                        requestMediaKeySystemAccessFunc: Wt,
                        testBandwidth: !0
                    },
                    {
                        cueHandler: r,
                        enableCEA708Captions: !0,
                        enableWebVTT: !0,
                        captionsTextTrack1Label: "English",
                        captionsTextTrack1LanguageCode: "en",
                        captionsTextTrack2Label: "Spanish",
                        captionsTextTrack2LanguageCode: "es",
                        captionsTextTrack3Label: "Unknown CC",
                        captionsTextTrack3LanguageCode: "",
                        captionsTextTrack4Label: "Unknown CC",
                        captionsTextTrack4LanguageCode: "",
                        renderTextTracksNatively: !0
                    }),
                    {},
                    {
                        subtitleStreamController: Vt,
                        subtitleTrackController: $t,
                        timelineController: Ut,
                        audioStreamController: it,
                        audioTrackController: Ze,
                        emeController: zt
                    });function Zt(e,
                    t){
                        var i=Object.keys(e);if(Object.getOwnPropertySymbols){
                            var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){
                                return Object.getOwnPropertyDescriptor(e,
                                t).enumerable
                            }))),
                            i.push.apply(i,
                            r)
                        }return i
                    }function ei(e){
                        for(var t=1;t<arguments.length;t++){
                            var i=null!=arguments[
                                t
                            ]?arguments[
                                t
                            ]: {};t%2?Zt(Object(i),
                            !0).forEach((function(t){
                                ti(e,
                                t,
                                i[
                                    t
                                ])
                            })): Object.getOwnPropertyDescriptors?Object.defineProperties(e,
                            Object.getOwnPropertyDescriptors(i)): Zt(Object(i)).forEach((function(t){
                                Object.defineProperty(e,
                                t,
                                Object.getOwnPropertyDescriptor(i,
                                t))
                            }))
                        }return e
                    }function ti(e,
                    t,
                    i){
                        return t in e?Object.defineProperty(e,
                        t,
                        {
                            value: i,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }): e[
                            t
                        ]=i,
                        e
                    }function ii(e){
                        if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e
                    }function ri(e,
                    t){
                        for(var i=0;i<t.length;i++){
                            var r=t[
                                i
                            ];r.enumerable=r.enumerable||!1,
                            r.configurable=!0,
                            "value"in r&&(r.writable=!0),
                            Object.defineProperty(e,
                            r.key,
                            r)
                        }
                    }function ni(e,
                    t,
                    i){
                        return t&&ri(e.prototype,
                        t),
                        i&&ri(e,
                        i),
                        e
                    }var ai=function(e){
                        var t,
                        i;function r(t){
                            var i;void 0===t&&(t={}),
                            (i=e.call(this)||this).config=void 0,
                            i._autoLevelCapping=void 0,
                            i.abrController=void 0,
                            i.capLevelController=void 0,
                            i.levelController=void 0,
                            i.streamController=void 0,
                            i.networkControllers=void 0,
                            i.audioTrackController=void 0,
                            i.subtitleTrackController=void 0,
                            i.emeController=void 0,
                            i.coreComponents=void 0,
                            i.media=null,
                            i.url=null;var n=r.DefaultConfig;if((t.liveSyncDurationCount||t.liveMaxLatencyDurationCount)&&(t.liveSyncDuration||t.liveMaxLatencyDuration))throw new Error("Illegal hls.js config: don't mix up liveSyncDurationCount/liveMaxLatencyDurationCount and liveSyncDuration/liveMaxLatencyDuration");i.config=ei(ei({},
                            n),
                            t);var a=ii(i).config;if(void 0!==a.liveMaxLatencyDurationCount&&a.liveMaxLatencyDurationCount<=a.liveSyncDurationCount)throw new Error('Illegal hls.js config: "liveMaxLatencyDurationCount" must be gt "liveSyncDurationCount"');if(void 0!==a.liveMaxLatencyDuration&&(void 0===a.liveSyncDuration||a.liveMaxLatencyDuration<=a.liveSyncDuration))throw new Error('Illegal hls.js config: "liveMaxLatencyDuration" must be gt "liveSyncDuration"');Object(c.enableLogs)(a.debug),
                            i._autoLevelCapping=-1;var s=i.abrController=new a.abrController(ii(i)),
                            o=new a.bufferController(ii(i)),
                            l=i.capLevelController=new a.capLevelController(ii(i)),
                            d=new a.fpsController(ii(i)),
                            u=new P(ii(i)),
                            h=new M(ii(i)),
                            f=new F(ii(i)),
                            g=new Be(ii(i)),
                            p=i.levelController=new Me(ii(i)),
                            v=new j(ii(i)),
                            m=[
                                p,
                                i.streamController=new Ce(ii(i),
                                v)
                            ],
                            y=a.audioStreamController;y&&m.push(new y(ii(i),
                            v)),
                            i.networkControllers=m;var b=[
                                u,
                                h,
                                f,
                                s,
                                o,
                                l,
                                d,
                                g,
                                v
                            ];if(y=a.audioTrackController){
                                var _=new y(ii(i));i.audioTrackController=_,
                                b.push(_)
                            }if(y=a.subtitleTrackController){
                                var T=new y(ii(i));i.subtitleTrackController=T,
                                m.push(T)
                            }if(y=a.emeController){
                                var E=new y(ii(i));i.emeController=E,
                                b.push(E)
                            }return(y=a.subtitleStreamController)&&m.push(new y(ii(i),
                            v)),
                            (y=a.timelineController)&&b.push(new y(ii(i))),
                            i.coreComponents=b,
                            i
                        }i=e,
                        (t=r).prototype=Object.create(i.prototype),
                        t.prototype.constructor=t,
                        t.__proto__=i,
                        r.isSupported=function(){
                            return function(){
                                var e=Y();if(!e)return!1;var t=self.SourceBuffer||self.WebKitSourceBuffer,
                                i=e&&"function"==typeof e.isTypeSupported&&e.isTypeSupported('video/mp4; codecs="avc1.42E01E,mp4a.40.2"'),
                                r=!t||t.prototype&&"function"==typeof t.prototype.appendBuffer&&"function"==typeof t.prototype.remove;return!!i&&!!r
                            }()
                        },
                        ni(r,
                        null,
                        [
                            {
                                key: "version",
                                get: function(){
                                    return "0.14.16"
                                }
                            },
                            {
                                key: "Events",
                                get: function(){
                                    return d.default
                                }
                            },
                            {
                                key: "ErrorTypes",
                                get: function(){
                                    return o.ErrorTypes
                                }
                            },
                            {
                                key: "ErrorDetails",
                                get: function(){
                                    return o.ErrorDetails
                                }
                            },
                            {
                                key: "DefaultConfig",
                                get: function(){
                                    return r.defaultConfig?r.defaultConfig: Jt
                                },
                                set: function(e){
                                    r.defaultConfig=e
                                }
                            }
                        ]);var n=r.prototype;return n.destroy=function(){
                            c.logger.log("destroy"),
                            this.trigger(d.default.DESTROYING),
                            this.detachMedia(),
                            this.coreComponents.concat(this.networkControllers).forEach((function(e){
                                e.destroy()
                            })),
                            this.url=null,
                            this.removeAllListeners(),
                            this._autoLevelCapping=-1
                        },
                        n.attachMedia=function(e){
                            c.logger.log("attachMedia"),
                            this.media=e,
                            this.trigger(d.default.MEDIA_ATTACHING,
                            {
                                media: e
                            })
                        },
                        n.detachMedia=function(){
                            c.logger.log("detachMedia"),
                            this.trigger(d.default.MEDIA_DETACHING),
                            this.media=null
                        },
                        n.loadSource=function(e){
                            e=s.buildAbsoluteURL(window.location.href,
                            e,
                            {
                                alwaysNormalize: !0
                            }),
                            c.logger.log("loadSource:"+e),
                            this.url=e,
                            this.trigger(d.default.MANIFEST_LOADING,
                            {
                                url: e
                            })
                        },
                        n.startLoad=function(e){
                            void 0===e&&(e=-1),
                            c.logger.log("startLoad("+e+")"),
                            this.networkControllers.forEach((function(t){
                                t.startLoad(e)
                            }))
                        },
                        n.stopLoad=function(){
                            c.logger.log("stopLoad"),
                            this.networkControllers.forEach((function(e){
                                e.stopLoad()
                            }))
                        },
                        n.swapAudioCodec=function(){
                            c.logger.log("swapAudioCodec"),
                            this.streamController.swapAudioCodec()
                        },
                        n.recoverMediaError=function(){
                            c.logger.log("recoverMediaError");var e=this.media;this.detachMedia(),
                            e&&this.attachMedia(e)
                        },
                        n.removeLevel=function(e,
                        t){
                            void 0===t&&(t=0),
                            this.levelController.removeLevel(e,
                            t)
                        },
                        ni(r,
                        [
                            {
                                key: "levels",
                                get: function(){
                                    return this.levelController.levels
                                }
                            },
                            {
                                key: "currentLevel",
                                get: function(){
                                    return this.streamController.currentLevel
                                },
                                set: function(e){
                                    c.logger.log("set currentLevel:"+e),
                                    this.loadLevel=e,
                                    this.streamController.immediateLevelSwitch()
                                }
                            },
                            {
                                key: "nextLevel",
                                get: function(){
                                    return this.streamController.nextLevel
                                },
                                set: function(e){
                                    c.logger.log("set nextLevel:"+e),
                                    this.levelController.manualLevel=e,
                                    this.streamController.nextLevelSwitch()
                                }
                            },
                            {
                                key: "loadLevel",
                                get: function(){
                                    return this.levelController.level
                                },
                                set: function(e){
                                    c.logger.log("set loadLevel:"+e),
                                    this.levelController.manualLevel=e
                                }
                            },
                            {
                                key: "nextLoadLevel",
                                get: function(){
                                    return this.levelController.nextLoadLevel
                                },
                                set: function(e){
                                    this.levelController.nextLoadLevel=e
                                }
                            },
                            {
                                key: "firstLevel",
                                get: function(){
                                    return Math.max(this.levelController.firstLevel,
                                    this.minAutoLevel)
                                },
                                set: function(e){
                                    c.logger.log("set firstLevel:"+e),
                                    this.levelController.firstLevel=e
                                }
                            },
                            {
                                key: "startLevel",
                                get: function(){
                                    return this.levelController.startLevel
                                },
                                set: function(e){
                                    c.logger.log("set startLevel:"+e),
                                    -1!==e&&(e=Math.max(e,
                                    this.minAutoLevel)),
                                    this.levelController.startLevel=e
                                }
                            },
                            {
                                key: "capLevelToPlayerSize",
                                set: function(e){
                                    var t=!!e;t!==this.config.capLevelToPlayerSize&&(t?this.capLevelController.startCapping(): (this.capLevelController.stopCapping(),
                                    this.autoLevelCapping=-1,
                                    this.streamController.nextLevelSwitch()),
                                    this.config.capLevelToPlayerSize=t)
                                }
                            },
                            {
                                key: "autoLevelCapping",
                                get: function(){
                                    return this._autoLevelCapping
                                },
                                set: function(e){
                                    c.logger.log("set autoLevelCapping:"+e),
                                    this._autoLevelCapping=e
                                }
                            },
                            {
                                key: "bandwidthEstimate",
                                get: function(){
                                    var e=this.abrController._bwEstimator;return e?e.getEstimate(): NaN
                                }
                            },
                            {
                                key: "autoLevelEnabled",
                                get: function(){
                                    return-1===this.levelController.manualLevel
                                }
                            },
                            {
                                key: "manualLevel",
                                get: function(){
                                    return this.levelController.manualLevel
                                }
                            },
                            {
                                key: "minAutoLevel",
                                get: function(){
                                    for(var e=this.levels,
                                    t=this.config.minAutoBitrate,
                                    i=e?e.length: 0,
                                    r=0;r<i;r++)if((e[
                                        r
                                    ].realBitrate?Math.max(e[
                                        r
                                    ].realBitrate,
                                    e[
                                        r
                                    ].bitrate): e[
                                        r
                                    ].bitrate)>t)return r;return 0
                                }
                            },
                            {
                                key: "maxAutoLevel",
                                get: function(){
                                    var e=this.levels,
                                    t=this.autoLevelCapping;return-1===t&&e&&e.length?e.length-1: t
                                }
                            },
                            {
                                key: "nextAutoLevel",
                                get: function(){
                                    return Math.min(Math.max(this.abrController.nextAutoLevel,
                                    this.minAutoLevel),
                                    this.maxAutoLevel)
                                },
                                set: function(e){
                                    this.abrController.nextAutoLevel=Math.max(this.minAutoLevel,
                                    e)
                                }
                            },
                            {
                                key: "audioTracks",
                                get: function(){
                                    var e=this.audioTrackController;return e?e.audioTracks: []
                                }
                            },
                            {
                                key: "audioTrack",
                                get: function(){
                                    var e=this.audioTrackController;return e?e.audioTrack: -1
                                },
                                set: function(e){
                                    var t=this.audioTrackController;t&&(t.audioTrack=e)
                                }
                            },
                            {
                                key: "liveSyncPosition",
                                get: function(){
                                    return this.streamController.liveSyncPosition
                                }
                            },
                            {
                                key: "subtitleTracks",
                                get: function(){
                                    var e=this.subtitleTrackController;return e?e.subtitleTracks: []
                                }
                            },
                            {
                                key: "subtitleTrack",
                                get: function(){
                                    var e=this.subtitleTrackController;return e?e.subtitleTrack: -1
                                },
                                set: function(e){
                                    var t=this.subtitleTrackController;t&&(t.subtitleTrack=e)
                                }
                            },
                            {
                                key: "subtitleDisplay",
                                get: function(){
                                    var e=this.subtitleTrackController;return!!e&&e.subtitleDisplay
                                },
                                set: function(e){
                                    var t=this.subtitleTrackController;t&&(t.subtitleDisplay=e)
                                }
                            }
                        ]),
                        r
                    }(q);ai.defaultConfig=void 0
                },
                "./src/polyfills/number.js": /*!*********************************!*\
  !*** ./src/polyfills/number.js ***!
  \*********************************//*! exports provided: isFiniteNumber, MAX_SAFE_INTEGER */function(e,
                t,
                i){
                    "use strict";i.r(t),
                    i.d(t,
                    "isFiniteNumber",
                    (function(){
                        return r
                    })),
                    i.d(t,
                    "MAX_SAFE_INTEGER",
                    (function(){
                        return n
                    }));var r=Number.isFinite||function(e){
                        return "number"==typeof e&&isFinite(e)
                    },
                    n=Number.MAX_SAFE_INTEGER||9007199254740991
                },
                "./src/utils/get-self-scope.js": /*!*************************************!*\
  !*** ./src/utils/get-self-scope.js ***!
  \*************************************//*! exports provided: getSelfScope */function(e,
                t,
                i){
                    "use strict";function r(){
                        return "undefined"==typeof window?self: window
                    }i.r(t),
                    i.d(t,
                    "getSelfScope",
                    (function(){
                        return r
                    }))
                },
                "./src/utils/logger.js": /*!*****************************!*\
  !*** ./src/utils/logger.js ***!
  \*****************************//*! exports provided: enableLogs, logger */function(e,
                t,
                i){
                    "use strict";i.r(t),
                    i.d(t,
                    "enableLogs",
                    (function(){
                        return c
                    })),
                    i.d(t,
                    "logger",
                    (function(){
                        return u
                    }));var r=i(/*! ./get-self-scope */"./src/utils/get-self-scope.js");function n(){}var a={
                        trace: n,
                        debug: n,
                        log: n,
                        warn: n,
                        info: n,
                        error: n
                    },
                    s=a;function o(e,
                    t){
                        return t="["+e+"] > "+t
                    }var l=Object(r.getSelfScope)();function d(e){
                        var t=l.console[
                            e
                        ];return t?function(){
                            for(var i=arguments.length,
                            r=new Array(i),
                            n=0;n<i;n++)r[
                                n
                            ]=arguments[
                                n
                            ];r[
                                0
                            ]&&(r[
                                0
                            ]=o(e,
                            r[
                                0
                            ])),
                            t.apply(l.console,
                            r)
                        }: n
                    }var c=function(e){
                        if(l.console&&!0===e||"object"==typeof e){
                            !function(e){
                                for(var t=arguments.length,
                                i=new Array(t>1?t-1: 0),
                                r=1;r<t;r++)i[
                                    r-1
                                ]=arguments[
                                    r
                                ];i.forEach((function(t){
                                    s[
                                        t
                                    ]=e[
                                        t
                                    ]?e[
                                        t
                                    ].bind(e): d(t)
                                }))
                            }(e,
                            "debug",
                            "log",
                            "info",
                            "warn",
                            "error");try{
                                s.log()
                            }catch(e){
                                s=a
                            }
                        }else s=a
                    },
                    u=s
                }
            }).default
        },
        e.exports=r())
    }
]);