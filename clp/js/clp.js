$(function() {
    
    var ClpData = function() {
        this.UrlParms = {
            'apadcode' : ''
        };  //get螟画焚
    }
        ClpData.prototype = {
            load : function( _parms ) {
                var _tmp_url;
                
                for(var i = 0; i < _parms.length; i++ ) {
                    _tmp_url = _parms[i].split('=')
                    this.UrlParms[_tmp_url[0]] = _tmp_url[1];
                }
                //apadcode縺ｮ蛟､繝√ぉ繝�け
                if ( this.UrlParms['apadcode'] != undefined && !/^[0-9]{6}$/.test(this.UrlParms['apadcode']) ) this.UrlParms['apadcode'] = '';
            },
            set_webform : function() {
                var _a_elm = $('a');
                if ( _a_elm.length > 0 ) {
                    for (i=0; _a_elm.length > i; i++) {
                        //繧､繝ｬ繧ｮ繝･繝ｩ繝ｼ蜃ｦ逅�
                        if ( this.UrlParms['apadcode'] == '002554' || this.UrlParms['apadcode'] == '002555' ) {
                            if( _a_elm.eq(i).attr('href').indexOf('/webform/') > -1 ) {
                                if (_a_elm.eq(i).attr('href').indexOf('&route=02') > -1 || _a_elm.eq(i).attr('href').indexOf('&alytp=01') > -1) {
                                    var _get = _a_elm.eq(i).attr('href').split('&');
                                    _a_elm.eq(i).attr('href', _get[0] + "&route=31&" + _get[2] + "&alytp=01");
                                }
                            }
                        }
                        
                        //逕ｳ霎ｼ繧ｳ繝ｼ繝峨そ繝�ヨ
                        if ( this.UrlParms['lpmcode'] != undefined ) {
                            if( _a_elm.eq(i).attr('href').indexOf('/webform/') > -1 && _a_elm.eq(i).attr('href').indexOf('&mcode=') < 0) {
                                _a_elm.eq(i).attr('href', _a_elm.eq(i).attr('href') + '&mcode=' + this.UrlParms['lpmcode']);
                            }
                        }
                        //莨壼藤ID繧ｻ繝�ヨ
                        if ( this.UrlParms['memcode'] != undefined ) {
                            if( _a_elm.eq(i).attr('href').indexOf('/webform/') > -1 && _a_elm.eq(i).attr('href').indexOf('&memcode=') < 0) {
                                _a_elm.eq(i).attr('href', _a_elm.eq(i).attr('href') + '&memcode=' + this.UrlParms['memcode']);
                            }
                        }
                        if ( this.UrlParms['myacode'] != undefined ) {
                            if( _a_elm.eq(i).attr('href').indexOf('/webform/') > -1 && _a_elm.eq(i).attr('href').indexOf('&myacode=') < 0) {
                                _a_elm.eq(i).attr('href', _a_elm.eq(i).attr('href') + '&myacode=' + this.UrlParms['myacode']);
                            }
                        }
                    }
                }
            }
        }
    

    var PopupData = function() {
        this.PopSet = {
            'pt01a' : {
                url    : ['/clp/tv/?apadcode=001885', '/clp/tv/?apadcode=001884'],
                route  : '/clp/try/',
                change : {},
                copy   : '譛ｬ螂醍ｴ�燕縺ｫ隧ｦ縺励※縺ｿ縺溘＞譁ｹ縺ｫ��',
                src    : '/clp/inc/popup/try.jpg'
            },
            'pt01b' : {
                url    : ['/clp/tv/?abtst=b&apadcode=001885', '/clp/tv/?abtst=b&apadcode=001884'],
                route  : '/webform/?agent=aid000144&route=01&lp=ftryp0&alytp=02',
                change : {},
                copy   : '譛ｬ螂醍ｴ�燕縺ｫ隧ｦ縺励※縺ｿ縺溘＞譁ｹ縺ｫ��',
                src    : '/clp/inc/popup/try.jpg'
            },
            'pt01c' : {
                url    : ['/clp/tv/?abtst=c&apadcode=001885', '/clp/tv/?abtst=c&apadcode=001884'],
                route  : '/clp/change/',
                change : {'001885' : '001958',
                          '001884' : '001957'},
                copy   : '縺雁ｾ励↑諠��ｱ縺ｯ遒ｺ隱阪＆繧後∪縺励◆縺具ｼ�',
                src    : '/clp/inc/popup/change.png'
            },
            'pt03' : {
                url    : ['/clp/try/?apadcode=001885', '/clp/try/?apadcode=001884',
                          '/clp/ktry/?apadcode=001885', '/clp/ktry/?apadcode=001884'],
                route  : '/inquiry/ssk/?drtcode=SSK&drtpg=ssk',
                change : {},
                copy   : '雉�侭縺ｯ縺碑ｦｧ縺ｫ縺ｪ繧翫∪縺励◆縺具ｼ�',
                src    : '/clp/inc/popup/ssk.jpg'
            }
        };
        this.SelectPt = '';
        this.NextUrl = '';
    }
        PopupData.prototype = {
            load: function( _url ) {
                loop : for (var _key in this.PopSet) {
                    for(var i = 0 ; this.PopSet[_key].url.length > i ; i++) {
                        if (_url.indexOf(this.PopSet[_key].url[i]) > -1) {
                            this.SelectPt = _key;
                            break loop;
                        }
                    }
                }
                if(this.SelectPt != '') $('<img>').attr('src', this.PopSet[this.SelectPt].src);
            },
            url_set : function( _apadcode) {
                this.NextUrl = this.PopSet[this.SelectPt].route;
                if (this.NextUrl != '') {
                    //apadcode繧ｻ繝�ヨ
                    if(this.PopSet[this.SelectPt].change[_apadcode] != undefined) _apadcode = this.PopSet[this.SelectPt].change[_apadcode]; //螟画鋤逕ｨ
                    else if (this.PopSet[this.SelectPt].change[''] != undefined)  _apadcode = this.PopSet[this.SelectPt].change[''];//蝗ｺ螳壼喧逕ｨ
                    
                    //URL繧ｻ繝�ヨ
                    if (this.NextUrl.indexOf('inquiry/ssk') > -1) {
                        //螟画鋤辟｡縺�
                    } else if (this.NextUrl.indexOf('webform') > -1) {
                        if (_apadcode != '') this.NextUrl = this.NextUrl.replace(/agent\=aid[0-9]{6}/, 'agent=aid' + _apadcode);
                    } else if (this.NextUrl.indexOf('apadcode=') > -1) {
                        if (_apadcode != '') this.NextUrl = this.NextUrl.replace(/apadcode\=[0-9]{6}/, 'apadcode=' + _apadcode);
                    } else if (_apadcode != '') {
                        this.NextUrl += '?apadcode=' + _apadcode;
                    }
                    
                    //險域ｸｬ逕ｨ繝代Λ繝｡繝ｼ繧ｿ繧ｻ繝�ヨ
                    if( this.NextUrl.indexOf('?') > -1 ) this.NextUrl += '&';
                    else this.NextUrl += '?';
                    this.NextUrl += 'bnrpt=' + this.SelectPt;
                }
            }
        }
    
    var DisplayControl = function() {
        Agent = '';
    }
        DisplayControl.prototype = {
            load : function() {
                  if (window.innerWidth < 700) this.Agent = 1;
                  else this.Agent = 0;
            },
            change_ctr : function(_apadcode, _ui_medium, _ui_source) {
                //荵玲鋤縺医く繝｣繝ｳ繝壹�繝ｳ蛻ｶ蠕｡逕ｨ
                if ( _ui_source == 'a8n' || _ui_source == 'atr' || _ui_source == 'hpt' ) {
                    $('#change').hide();
                }
                
                //縺願ｩｦ縺玲眠隕冗筏霎ｼ縺ｿ蟆守ｷ夊｡ｨ遉ｺ
                if ( _apadcode == '001884' || _apadcode == '001885' ) {
                    if ($('#shinki-order').length > 0) {
                        $('#shinki-order').show();
                    }
                }
            },
            header_ctr : function() {
                if ($('#head_fixed_apply').length > 0) {
                    $(window).scroll(function () {
                        if ( $(this).scrollTop() > 600) {
                            $('#head_fixed_apply').fadeIn(500);
                        } else {
                            $('#head_fixed_apply').fadeOut(300);
                        }
                    });
                }
                //clp/tv/逕ｨ縲蝗ｺ螳壹Γ繝九Η繝ｼ
                if ($('#head_apply_btn').length > 0) {
                    $(window).scroll(function () {
                        if ( $(this).scrollTop() > 1400) {
                            $('#head_apply_btn').fadeIn(500);
                        } else {
                            $('#head_apply_btn').fadeOut(300);
                        }
                    });
                }
            },
            popup_ctr : function (_href, _src, _copy) {
                var _template;
                                      _template = '<div id="escape_popupimg" style="display:none;">' +
                                      //_template = '<div id="escape_popupimg">' +
                                                    '<div style="display:flex;justify-content:center;width:100%;align-items:center;height:100%;background-color:rgba(0,0,0,0.6);position:fixed;z-index:10000;">' +
                                                      '<div style="background-color:rgba(0,0,0,0.6);padding:20px;">';
                if (this.Agent == 1) _template +=       '<p style="color:white;text-align:center;font-size:18px;">�ｼ' + _copy + '��</p>';
                else                 _template +=       '<p style="color:white;text-align:center;font-size:24px;">�ｼ' + _copy + '��</p>';
                                     _template +=       '<p style="text-align: center;">';
                if ( _href != '')    _template +=         '<a href="' + _href +'">';
                                     _template +=         '<img style="width:100%;" src="' + _src + '" alt="">';
                if ( _href != '')    _template +=         '</a>';
                                     _template +=       '</p>' +
                                                        '<p style="color:white;">縺薙�繝壹�繧ｸ縺九ｉ髮｢繧後∪縺吶′繧医ｍ縺励＞縺ｧ縺吶°��</p>' +
                                                        '<div style="display:flex;justify-content:center;">' +
                                                          '<p style="background:white;padding:10px 35px;margin:10px 20px 0;border-radius:50px;cursor:pointer;" id="escape_aqua">逡吶∪繧�</p>' +
                                                          '<p style="background:white;padding:10px 35px;margin:10px 20px 0;border-radius:50px;cursor:pointer;" id="escape_outside">髮｢繧後ｋ</p>' +
                                                        '</div">' +
                                                      '</div">' +
                                                    '</div">' +
                                                  '</div">';
                $('body').prepend(_template);
            }
        }
    
    //蛻晄悄險ｭ螳�
    var clp_data = new ClpData();
    var display_control = new DisplayControl();
    var popup_data = new PopupData();
    
    display_control.load();
    clp_data.load( location.search.replace('?', '').split('&') );
    clp_data.set_webform();
    
    display_control.change_ctr(clp_data.UrlParms['apadcode'], clp_data.UrlParms['ui_medium'], clp_data.UrlParms['ui_source']);
    display_control.header_ctr();
    
    //髮｢閼ｱ謚第ｭ｢
    if (history.length > 2) {
        popup_data.load(location.pathname + location.search);
        if (popup_data.SelectPt !== '') {
            popup_data.url_set( clp_data.UrlParms['apadcode'] );
            display_control.popup_ctr(  popup_data.NextUrl, popup_data.PopSet[popup_data.SelectPt].src, popup_data.PopSet[popup_data.SelectPt].copy );
            
            //繧､繝吶Φ繝亥�逅�
            history.pushState(null, null, location.href);
            
            $(window).on('popstate', function(e) {
                $('#escape_popupimg').show();
            });
            
            $('#escape_outside').on('click', function() {
              history.go(-1);
              return false;
            });
            
            $('#escape_aqua').on('click', function() {
                $('#escape_popupimg').hide();
                history.pushState(null, null, location.href);
            });
        }
    }

});
