$(function() {
    var InputJudge = function() {
        this.ErrorRecord = {};
        this.ErrorText = {
            'empty'  :  '繧貞�蜉帙＠縺ｦ縺上□縺輔＞縲�',
            'select'  :  '繧帝∈謚槭＠縺ｦ縺上□縺輔＞縲�',
            'kana'   :  '繧偵き繧ｿ繧ｫ繝翫〒蜈･蜉帙＠縺ｦ縺上□縺輔＞縲�',
            'number' :  '縺ｯ$$##謨ｰ蟄励〒蜈･蜉帙＠縺ｦ縺上□縺輔＞縲�',
            'email' :  '繧呈ｭ｣縺励＞蠖｢縺ｧ蜈･蜉帙＠縺ｦ縺上□縺輔＞縲�',
            'radio' :  '繧帝∈謚槭＠縺ｦ縺上□縺輔＞縲�',
            'checkbox' :  '繧帝∈謚槭＠縺ｦ縺上□縺輔＞縲�'
            };
        this.ApptyDenySet = {
            '2' : ['companyName', 'companyNameKana', 'ownerLastName', 'ownerLastNameKana', 'ownerFirstName', 'ownerFirstNameKana'],
            '1' : ['lastName', 'lastNameKana', 'firstName', 'firstNameKana']
        }
    };
        InputJudge.prototype = {
            _judg_emptry : function( _name, _text, _type ) {
                var _input_type, _radio_ck;
                if (_type == undefined) _type = 'input';
                if (_type == 'input') _input_type = $( _type + '[name="' + _name + '"]').attr('type');
                if ( _input_type == 'radio' && $(_type + '[name="' + _name + '"]:checked').val() == undefined ) _radio_ck =1;
                if( $( _type + '[name="' + _name + '"]').val() == '' || _radio_ck == 1) {
                    if ( _radio_ck == 1 ) this.ErrorRecord[_name] = _text + this.ErrorText.radio;
                    else if ( _type == 'input') this.ErrorRecord[_name] = _text + this.ErrorText.empty;
                    else if ( _type == 'select') this.ErrorRecord[_name] = _text + this.ErrorText.select;
                    return 1;
                }
                else delete this.ErrorRecord[_name];
            },
            _judg_kana : function( _name, _text ) {
                if( !this._judg_emptry( _name, _text ) ) {
                    if( !$('input[name="' + _name + '"]').val().match(/^[繧｡-繝ｾ�ｧ-�晢ｾ橸ｾ歃s縲繝ｼ繝ｼ]+$/) ) this.ErrorRecord[_name] = _text + this.ErrorText.kana;
                }
            },
            _judg_email : function( _name, _text ) {
                if( !this._judg_emptry( _name, _text ) ) {
                    if( $('input[name="' + _name + '"]').val().match(/^[\-]/) ) this.ErrorRecord[_name] = '繝上う繝輔Φ(-)蟋九∪繧翫�繝｡繝ｼ繝ｫ繧｢繝峨Ξ繧ｹ縺ｯ縺泌茜逕ｨ縺ｧ縺阪∪縺帙ｓ縲�';
                    else if( !$('input[name="' + _name + '"]').val().match(/^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]{1,}\.[A-Za-z0-9]{1,}$/) ) this.ErrorRecord[_name] = _text + this.ErrorText.email;
                }
            },
            _judg_number : function( _name, _text, _minnum, _maxnum ) {
                if( !this._judg_emptry( _name, _text ) ) {
                  var _reg, _num_text, _num_error_text;
                    var  _num_error_text2 = '';
                    if (_minnum == 0 && _maxnum == 0) {
                        _num_text = '1,9999';
                        _num_error_text = '';
                    } else if (_minnum == _maxnum && _maxnum > 0) {
                        _num_text = _maxnum;
                        _num_error_text = _maxnum + '譯�';
                    } else if (_minnum > 0 && _maxnum > 0) {
                        _num_text = _minnum + ',' + _maxnum;
                        _num_error_text = _minnum + '譯∽ｻ･荳�' + _maxnum + '譯∽ｻ･荳�';
                    }
                    if( $('input[name="' + _name + '"]').val().match(/[\-]+/) ) _num_error_text2 = '縺ｮ繝上う繝輔Φ(-)辟｡縺�';
                    _reg = new RegExp('^[0-9]{' + _num_text + '}$');
                    if( !$('input[name="' + _name + '"]').val().match(_reg) ) this.ErrorRecord[_name] = _text + this.ErrorText.number.replace('$$', _num_error_text).replace('##', _num_error_text2);
                }
            },
            _judg_checkbox1 : function( _name, _text ) {
                if($('input[name="' + _name + '"]:checked').val() == undefined) {
                    this.ErrorRecord[_name] = _text + this.ErrorText.checkbox;
                    return 1;
                }
                else delete this.ErrorRecord[_name];
            },
            input_auxiliary : function( _element , _processing ) {
              var _number = _element.val();
                if ( _processing == 'anumber' ) {
                    var _number2 = _number.replace(/[�｡-�ｺ��-�夲ｼ�-�兢]/g, function(s) {
                      return String.fromCharCode(s.charCodeAt(0)-0xFEE0);
                    });
                }
                if ( _processing == 'number' ) {
                    var _number2 = _number.replace(/[��-�兢]/g, function(s) {
                        return String.fromCharCode(s.charCodeAt(0)-0xFEE0);
                    });
                }
                if ( _processing == 'email' ) {
                    var _number2 = _number.replace(/[�｡-�ｺ��-�夲ｼ�-�呻ｼ搾ｼ趣ｼｿ��]/g, function(s) {
                        return String.fromCharCode(s.charCodeAt(0)-0xFEE0);
                    });
                }
                if ( _processing == 'trim' ) {
                    var _number2 = $.trim(_number);
                    _number2 = _number2.replace(' ', '');
                }
                _element.val(_number2);
            },
            judgment : function( _element ) {
                if (_element == undefined) _element = 'all';
                //蜷榊燕
                if( _element == 'all' || _element.attr('name') == 'lastName') this._judg_emptry( 'lastName', '縺雁錐蜑搾ｼ亥ｧ難ｼ�');
                if( _element == 'all' || _element.attr('name') == 'firstName') this._judg_emptry( 'firstName', '縺雁錐蜑搾ｼ亥錐��');
                if( _element == 'all' || _element.attr('name') == 'ownerLastName') this._judg_emptry( 'ownerLastName', '縺疲球蠖楢�錐�亥ｧ難ｼ�');
                if( _element == 'all' || _element.attr('name') == 'ownerFirstName') this._judg_emptry( 'ownerFirstName', '縺疲球蠖楢�錐�亥錐��');
                if( _element == 'all' || _element.attr('name') == 'companyName') this._judg_emptry( 'companyName', '豕穂ｺｺ蜷�');
                //蜷榊燕繧ｫ繝�
                if( _element == 'all' || _element.attr('name') == 'lastNameKana') this._judg_kana( 'lastNameKana', '繝輔Μ繧ｬ繝奇ｼ医そ繧､��');
                if( _element == 'all' || _element.attr('name') == 'firstNameKana') this._judg_kana( 'firstNameKana', '繝輔Μ繧ｬ繝奇ｼ医Γ繧､��');
                if( _element == 'all' || _element.attr('name') == 'ownerLastNameKana') this._judg_kana( 'ownerLastNameKana', '繝輔Μ繧ｬ繝奇ｼ医そ繧､��');
                if( _element == 'all' || _element.attr('name') == 'ownerFirstNameKana') this._judg_kana( 'ownerFirstNameKana', '繝輔Μ繧ｬ繝奇ｼ医Γ繧､��');
                if( _element == 'all' || _element.attr('name') == 'companyNameKana') this._judg_kana( 'companyNameKana', '豕穂ｺｺ蜷搾ｼ医ヵ繝ｪ繧ｬ繝奇ｼ�');
                //驛ｵ萓ｿ逡ｪ蜿ｷ
                if( _element == 'all' || _element.attr('name') == 'zipCode') this._judg_number( 'zipCode', '驛ｵ萓ｿ逡ｪ蜿ｷ', 7, 7);
                //菴乗園
                if( _element == 'all' || _element.attr('name') == 'address1') this._judg_emptry( 'address1', '菴乗園�育伴蜷阪∪縺ｧ��');
                if( _element == 'all' || _element.attr('name') == 'address1_2') this._judg_emptry( 'address1_2', '菴乗園�井ｸ∫岼繝ｻ逡ｪ蝨ｰ��');
                //繝｡繝ｼ繝ｫ繧｢繝峨Ξ繧ｹ
                if( _element == 'all' || _element.attr('name') == 'email') this._judg_email( 'email', '繝｡繝ｼ繝ｫ繧｢繝峨Ξ繧ｹ');
                //髮ｻ隧ｱ逡ｪ蜿ｷ
                if( _element == 'all' || _element.attr('name') == 'phone') this._judg_number( 'phone', '騾｣邨｡縺ｮ縺､縺城崕隧ｱ逡ｪ蜿ｷ', 10, 11);
                if( _element == 'all' || _element.attr('name') == 'phoneCheck') this._judg_number( 'phoneCheck', '髮ｻ隧ｱ逡ｪ蜿ｷ�育｢ｺ隱咲畑��', 10, 11);
                if( _element == 'all' || _element.attr('name') == 'phone' || 'phoneCheck') {
                    if (this.ErrorRecord['phone'] == undefined && this.ErrorRecord['phoneCheck'] == undefined && $('input[name="phone"]').val() != $('input[name="phoneCheck"]').val()) this.ErrorRecord['phoneCheck'] = '蜷後§髮ｻ隧ｱ逡ｪ蜿ｷ繧貞�蜉帙＠縺ｦ縺上□縺輔＞縲�';
                    else if (this.ErrorRecord['phone'] == undefined && $('input[name="phone"]').val() == $('input[name="phoneCheck"]').val()) delete this.ErrorRecord['phoneCheck'];
                }
                //騾｣邨｡譁ｹ豕�
                if( _element == 'all' || _element.attr('name') == 'contactType') if( _element == 'all' || _element.attr('name') == 'contactType') this._judg_emptry( 'contactType', '縺泌ｸ梧悍縺ｮ騾｣邨｡譁ｹ豕�');
                if( _element == 'all' || _element.attr('name') == 'contactType' || _element.attr('name') == 'contactTime') this._judg_emptry( 'contactTime', '縺泌ｸ梧悍縺ｮ騾｣邨｡譎る俣蟶ｯ', 'select');
                //縺ｩ縺薙〒遏･繧翫∪縺励◆縺�
                if( _element == 'all' || _element.attr('name') == 'listen' ) this._judg_emptry( 'listen', '縺ｩ縺薙〒繧｢繧ｯ繧｢繧ｯ繝ｩ繝ｩ繧偵♀遏･繧翫↓縺ｪ繧翫∪縺励◆縺具ｼ�', 'select');
    var _agent = $('#input input[name="agent"]').val(); //繧､繝ｬ繧ｮ繝･繝ｩ繝ｼ蜃ｦ逅� 
    if ( !(_agent == 'aid001596' ||  _agent == 'aid001378' || _agent == 'aid002497' || _agent == 'aid002413' || _agent == 'aid002551') ) { //繧､繝ｬ繧ｮ繝･繝ｩ繝ｼ蜃ｦ逅� 
                //逕溷ｹｴ譛域律
                if( _element == 'all' || _element.attr('name') == 'birthdayYear' || _element.attr('name') == 'birthdayMonth' || _element.attr('name') == 'birthdayDay') {
                    if ($('select[name="birthdayYear"]').val() == '' && $('select[name="birthdayMonth"]').val() == '' && $('select[name="birthdayDay"]').val() == '') {
                        delete this.ErrorRecord['birthdayYear'];
                        delete this.ErrorRecord['birthdayMonth'];
                        delete this.ErrorRecord['birthdayDay'];
                    } else {
                        this._judg_emptry( 'birthdayYear', '蟷ｴ', 'select');
                        this._judg_emptry( 'birthdayMonth', '譛�', 'select');
                        this._judg_emptry( 'birthdayDay', '譌･', 'select');
                    }
                }
                //縺泌茜逕ｨ莠ｺ謨ｰ
                if( _element == 'all' || _element.attr('name') == 'userNumber' || _element.attr('name') == 'childrenNumber') {
                    if( _element == 'all' || _element.attr('name') == 'userNumber') {
                        if( $('input[name="userNumber"]').val() != '' ) this._judg_number( 'userNumber', '縺泌茜逕ｨ莠ｺ謨ｰ', 0, 0);
                        else  delete this.ErrorRecord['userNumber'];
                    }
                    if( _element == 'all' || _element.attr('name') == 'childrenNumber') {
                        if( $('input[name="childrenNumber"]').val() != '' ) this._judg_number( 'childrenNumber', '縺雁ｭ先ｧ倥�莠ｺ謨ｰ', 0, 0);
                        else delete this.ErrorRecord['childrenNumber'];
                    }
                    if ( $('input[name="userNumber"]').val() == '' && $('input[name="childrenNumber"]').val() != '') this.ErrorRecord['userNumber'] = '縺泌茜逕ｨ莠ｺ謨ｰ繧ょ�蜉帙＠縺ｦ縺上□縺輔＞縲�';
                    else if ( $('input[name="userNumber"]').val() != '' && $('input[name="childrenNumber"]').val() != '') delete this.ErrorRecord['userNumber'];
                    else if ( $('input[name="userNumber"]').val() == '' && $('input[name="childrenNumber"]').val() == '') delete this.ErrorRecord['userNumber'];
                }
    }
                //蜷梧э
                if( _element == 'all' || _element.attr('name') == 'agreement') this._judg_checkbox1( 'agreement', '逕ｳ霎ｼ隕冗ｴ�↓蜷梧э縺吶ｋ');
                //console.log( this.ErrorRecord ) ;
                //console.log( Object.keys(this.ErrorRecord).length ) ;
            },
            get_error_num : function() {
                var _count =0;
                var _type = $('input[name="userType"]:checked').val();
                for (var key in this.ErrorRecord) {
                    if ( $.inArray(key, this.ApptyDenySet[_type]) == -1 ) _count++
                }
                return _count;
            }
        };
    
    var DisplayControl = function() {
        this.FormSpeed = 300;
        this.WidthSp = 768;
        this.ErrorSpeed = 150;
        this.InputTmpRecode = {
          contact: ''
        };
    };
        DisplayControl.prototype = {
            load : function() {
                if ( $('#contactTime').find('select').val() != '') this.InputTmpRecode.contact =  $('#contactTime').find('select').val();
            },
            _error_deco : function( _e_form, _text, _e_text_form ) {
                if ( _e_text_form == undefined ){
                    if ( _e_form.siblings('.form_title').size() > 0 ) _e_text_form = _e_form.siblings('.form_title');
                    else if ( _e_form.parent().siblings('.form_title').size() > 0 ) _e_text_form = _e_form.parent().siblings('.form_title');
                }
                var _error_name = _e_form.attr('name') + '_error';
                if ( _text != undefined ) {
                    _e_form.addClass('error_f');
                    if( _e_text_form.siblings('.error').size() > 0 ) {
                        if ( _e_text_form.siblings('.error').find('span.' + _error_name).size() > 0 ) _e_text_form.siblings('.error').find('span.' + _error_name).text( _text );
                        else {
                            _e_text_form.siblings('.error').append('<span class="' + _error_name + '" style="display:none">' + _text + '</span>');
                            _e_text_form.siblings('.error').find('span.' + _error_name).fadeIn( this.ErrorSpeed );
                        }
                    } else {
                        _e_text_form.after('<p class="error" style="display:none"><span class="' + _error_name + '">' + _text + '</span></p>');
                        _e_text_form.siblings('p.error').show( this.ErrorSpeed );
                    }
                } else {
                    _e_form.removeClass('error_f');
                    if( _e_text_form.siblings('.error').size() > 0 ) {
                        _e_text_form.siblings('.error').find('span.' + _error_name).hide( this.ErrorSpeed , function() {
                            $(this).remove();
                            if ( _e_text_form.siblings('.error').text() == '' && _e_text_form.siblings('.error').size() > 0 ) _e_text_form.siblings('.error').remove();
                        });
                    }
                }
            },
            error_set : function( _name ) {
                
                if (_name == undefined) _name = 'all';
                //蜷榊燕
                if( _name == 'all' || _name == 'lastName') this._error_deco( $('input[name="lastName"]'), input_judge.ErrorRecord['lastName']);
                if( _name == 'all' || _name == 'firstName') this._error_deco( $('input[name="firstName"]'), input_judge.ErrorRecord['firstName']);
                if( _name == 'all' || _name == 'companyName') this._error_deco( $('input[name="companyName"]'), input_judge.ErrorRecord['companyName']);
                if( _name == 'all' || _name == 'ownerLastName') this._error_deco( $('input[name="ownerLastName"]'), input_judge.ErrorRecord['ownerLastName']);
                if( _name == 'all' || _name == 'ownerFirstName') this._error_deco( $('input[name="ownerFirstName"]'), input_judge.ErrorRecord['ownerFirstName']);
                ////蜷榊燕繧ｫ繝�
                if( _name == 'all' || _name == 'lastNameKana') this._error_deco( $('input[name="lastNameKana"]'), input_judge.ErrorRecord['lastNameKana']);
                if( _name == 'all' || _name == 'firstNameKana') this._error_deco( $('input[name="firstNameKana"]'), input_judge.ErrorRecord['firstNameKana']);
                if( _name == 'all' || _name == 'companyNameKana') this._error_deco( $('input[name="companyNameKana"]'), input_judge.ErrorRecord['companyNameKana']);
                if( _name == 'all' || _name == 'ownerLastNameKana') this._error_deco( $('input[name="ownerLastNameKana"]'), input_judge.ErrorRecord['ownerLastNameKana']);
                if( _name == 'all' || _name == 'ownerFirstNameKana') this._error_deco( $('input[name="ownerFirstNameKana"]'), input_judge.ErrorRecord['ownerFirstNameKana']);
                ////驛ｵ萓ｿ逡ｪ蜿ｷ
                if( _name == 'all' || _name == 'zipCode') this._error_deco( $('input[name="zipCode"]'), input_judge.ErrorRecord['zipCode']);
                //菴乗園
                if( _name == 'all' || _name == 'address1') this._error_deco( $('input[name="address1"]'), input_judge.ErrorRecord['address1']);
                if( _name == 'all' || _name == 'address1_2') this._error_deco( $('input[name="address1_2"]'), input_judge.ErrorRecord['address1_2']);
                ////繝｡繝ｼ繝ｫ繧｢繝峨Ξ繧ｹ
                if( _name == 'all' || _name == 'email') this._error_deco( $('input[name="email"]'), input_judge.ErrorRecord['email']);
                ////髮ｻ隧ｱ逡ｪ蜿ｷ
                if( _name == 'all' || _name == 'phone') this._error_deco( $('input[name="phone"]'), input_judge.ErrorRecord['phone']);
                if( _name == 'all' || _name == 'phoneCheck') this._error_deco( $('input[name="phoneCheck"]'), input_judge.ErrorRecord['phoneCheck']);
                ////騾｣邨｡譁ｹ豕�
                if( _name == 'all' || _name == 'contactType') this._error_deco( $('input[name="contactType"]').parents('.form_radio'), input_judge.ErrorRecord['contactType'] );
                if( _name == 'all' || _name == 'contactTime') this._error_deco( $('select[name="contactTime"]'), input_judge.ErrorRecord['contactTime'], $('#contactType') );
                ////縺ｩ縺薙〒遏･繧翫∪縺励◆縺�
                if( _name == 'all' || _name == 'listen') this._error_deco( $('select[name="listen"]'), input_judge.ErrorRecord['listen']);
                ////逕溷ｹｴ譛域律
                if( _name == 'all' || _name == 'birthdayYear') this._error_deco( $('select[name="birthdayYear"]'), input_judge.ErrorRecord['birthdayYear'], $('#birthday_year').siblings('.form_title'));
                if( _name == 'all' || _name == 'birthdayMonth') this._error_deco( $('select[name="birthdayMonth"]'), input_judge.ErrorRecord['birthdayMonth'],  $('#birthday_year').siblings('.form_title'));
                if( _name == 'all' || _name == 'birthdayDay') this._error_deco( $('select[name="birthdayDay"]'), input_judge.ErrorRecord['birthdayDay'],  $('#birthday_year').siblings('.form_title'));
                ////縺泌茜逕ｨ莠ｺ謨ｰ
                if( _name == 'all' || _name == 'userNumber') this._error_deco( $('input[name="userNumber"]'), input_judge.ErrorRecord['userNumber']);
                if( _name == 'all' || _name == 'childrenNumber') this._error_deco( $('input[name="childrenNumber"]'), input_judge.ErrorRecord['childrenNumber']);
                //蜷梧э
                if( _name == 'all' || _name == 'agreement') this._error_deco( $('#agreement_check'), input_judge.ErrorRecord['agreement'], $('#application_terms_area'));
            },
            user_set : function() {
                var _user_ck = $('#user_select input[name="userType"]:checked').val();
                $('#personal').hide();
                $('#corporation').hide();
                if ( _user_ck == 2 ) $('#personal').fadeIn(this.FormSpeed );
                else if ( _user_ck == 1 ) $('#corporation').fadeIn(this.FormSpeed );
            },
            zip_set : function( callback ) {
                var _zip_num = $('#zipCode').val().trim();
                var _error_text = '';
                if(_zip_num === '') _error_text = '驛ｵ萓ｿ逡ｪ蜿ｷ繧貞�蜉帙＠縺ｦ縺上□縺輔＞縲�';
                else if (_zip_num.length != 7)  _error_text = '蜊願ｧ呈焚蟄�7譯√〒蜈･蜉帙＠縺ｦ縺上□縺輔＞縲�';
                else if (!_zip_num.match(/^[0-9]+$/ ))  _error_text = '蜊願ｧ呈焚蟄励〒蜈･蜉帙＠縺ｦ縺上□縺輔＞縲�';
                else {
                    $.get('/zipcode/addr.php', {
                          pcode: $('#zipCode').val(),
                          prefecture: ''
                    }, function(rs){
                        var _addr = rs.split(',');
                        if ( _addr.length == 3 ) {
                            $('#zip_no_error').hide();
                            $('#address1').val(_addr[1] + _addr[2]).focus();
                            callback();
                        }
                        else {
                            input_judge.ErrorRecord['zipCode'] = '隧ｲ蠖薙☆繧倶ｽ乗園縺瑚ｦ九▽縺九ｊ縺ｾ縺帙ｓ縺ｧ縺励◆縲�';
                            callback();
                        }
                    });
                }
            },
            contact_set : function() {
                var _contact_ck = $('#contactType input[name="contactType"]:checked').val();
                if ( _contact_ck == 0 ) {
                    $('#contactTime').show();
                    $('#contactTime').find('select').val(this.InputTmpRecode.contact).change();
                } else if ( _contact_ck == 1 ) {
                    $('#contactTime').hide();
                    this.InputTmpRecode.contact = $('#contactTime').find('select').val();
                    $('#contactTime').find('select').val('0').change();
                }
            },
            listen_set : function() {
                $('#listenMagazine, #listen_other, #magazineCaution').hide();
                        $('#listen_other').removeClass('listen_other_tmp')
                if ( $('#listen').find('select').val() == 3 ) {
                    $('#listenMagazine').show();
                    if ($('#listenMagazine').find('select').val() == 99) {
                        $('#listen_other, #magazineCaution').show();
                        $('#listen_other').addClass('listen_other_tmp')
                    }
                }
                else $('#listen_other').show();
            },
            next_control : function( _count ) {
                $('#error_counter').html( '蠢��磯��岼<br>谿九ｊ<span>' + _count + '</span>莉ｶ');
                if ( _count > 0 ) {
                    $('.btn_area .next_bn').hide();
                    $('#error_assist').show();
                    $('.btn_area .error_bn').show();
                    if(_count == 1) $('#error_counter').fadeIn(200);
                } else {
                    $('.btn_area .next_bn').show();
                    $('#error_assist').hide();
                    $('.btn_area .error_bn').hide();
                    $('#error_counter').fadeOut(200);
                }
            }
        };
    
    var DayControl = function() {
        this.DayMaster = {
            limitday: 30,
            today: '',
            maxday: ''
        };
        this.SelectDay = ['', ''];
    };
        DayControl.prototype = {
            spday_set : function( _name, _day ) {
                var _elements_select = $('#' + _name + ' select[name="' + _name + '"]');
                var _other_select;
                if( _name  == 'contactDay1') _other_select = $('#contactDay2 select[name="contactDay2"]');
                else if( _name  == 'contactDay2') _other_select = $('#contactDay1 select[name="contactDay1"]');
                if(_day != '') _elements_select.find('option[value="' + _day +'"]' ).attr('selected', 'selected');
                else _elements_select.prop('selectedIndex', 0);
                _other_select.find('option').attr('disabled', false);
                if(_day != '') _other_select.find('option[value="' + _day +'"]' ).attr('disabled', true);
            },
            load_day : function() {
                //蟶梧悍譌･繧ｻ繝�ヨ
                var _tmpday = $('#today').val().split('/');
                this.DayMaster.today = new Date(Number(_tmpday[0]), Number(_tmpday[1])-1, Number(_tmpday[2]) + 1 + Number($('#ampmCode').val()) );
                this.DayMaster.maxday = new Date(Number(_tmpday[0]), Number(_tmpday[1])-1, Number(_tmpday[2]) + this.DayMaster.limitday + Number($('#ampmCode').val()) );
                
                var _date_text, _option;
                var _today = new Date(this.DayMaster.today);
                var _weekchar = ['譌･', '譛�', '轣ｫ', '豌ｴ', '譛ｨ', '驥�', '蝨�'];
                _today.setDate( _today.getDate() - 1 );
                for (var i=0; i<this.DayMaster.limitday+1; i++) {
                    _today.setDate( _today.getDate() + 1 );
                
                    //譖懈律髯､螟�
                    if (_today.getDay() == 0)  continue;
                    if (_today.getDay() == 1)  continue;
                    
                    _date_text = _today.getFullYear() + '/' + (_today.getMonth() + 1) + '/' + _today.getDate();
                    
                    //莨第律髯､螟�
                    if ($('#date_list').val().split(',').indexOf(_date_text) > 0) continue;
                    
                    _date_text += '(' + _weekchar[_today.getDay()] + ')';
                    _option = '<option value="' + _date_text + '" label="' + _date_text + '">' + _date_text + '</option>';
                    $('#contactDay1 select[name="contactDay1"]').append(_option);
                    $('#contactDay2 select[name="contactDay2"]').append(_option);
                }
                
                
                $('#dayeraser1_bn, #dayeraser2_bn').addClass('none');
                //謌ｻ繧雁､繧ｻ繝�ヨ
                if ( $('#contactDay1_view').val() != '') {
                    $('#contactDay1 select[name="contactDay1"]').find('option[value="' + $('#contactDay1_view').val() +'"]' ).attr('selected', 'selected');
                    $('#contactDay2 select[name="contactDay2"]').find('option[value="' + $('#contactDay1_view').val() +'"]' ).attr('disabled', true);
                    $('#dayeraser1_bn').removeClass('none');
                }
                if ( $('#contactDay2_view').val() != '') {
                    $('#contactDay1 select[name="contactDay1"').find('option[value="' + $('#contactDay2_view').val() +'"]' ).attr('disabled', true);
                    $('#contactDay2 select[name="contactDay2"]').find('option[value="' + $('#contactDay2_view').val() +'"]' ).attr('selected', 'selected');
                    $('#dayeraser2_bn').removeClass('none');
                }
                
            },
            day_set : function( _element ) {
                this.spday_set( _element.attr('name'), _element.val() );
                //PC蛛ｴ
                var _pc_elem = $('#' + _element.attr('name') + ' input[name="' + _element.attr('name') + '"]');
                _pc_elem.val( $('#' + _element.attr('name') + ' select[name="' + _element.attr('name') + '"]').val() );
                
                var _name = '';
                if( _element.attr('name') == 'contactDay1') _name = '#dayeraser1_bn';
                if( _element.attr('name') == 'contactDay2') _name = '#dayeraser2_bn';
                if ( _element.val() == '' ) _pc_elem.siblings( _name ).addClass('none');
                else _pc_elem.siblings( _name ).removeClass('none');
            },
            day_pcset : function( _element, _text ) {
                if( _element.attr('name') == 'contactDay1') $('#dayeraser1_bn').removeClass('none');
                if( _element.attr('name') == 'contactDay2') $('#dayeraser2_bn').removeClass('none');
                
                //SP蛛ｴ
                this.spday_set( _element.attr('name'), _text );
            },
            erase : function( _element ) {
                var _name = '';
                
                if ( _element.attr('id') == 'dayeraser1_bn' ) _name = 'contactDay1';
                else if ( _element.attr('id') == 'dayeraser2_bn' ) _name = 'contactDay2';
                _element.addClass('none');
                $('#' + _name + ' input[name="' + _name + '"]').val('');
                
                //SP蛛ｴ
                this.spday_set( _name, '');
            }
        }
    
    
    //蛻晄悄險ｭ螳�
    var input_judge = new InputJudge();
    var display_control = new DisplayControl();
    var day_control = new DayControl();
    display_control.load();
    day_control.load_day();
    
    display_control.user_set();
    display_control.contact_set();
    display_control.listen_set();
    
    input_judge.judgment();
    display_control.next_control( input_judge.get_error_num() );
    
    //閾ｪ蜍輔き繝雁�蜉�
    $.fn.autoKana('input[name="lastName"]', 'input[name="lastNameKana"]', { katakana : true });
    $.fn.autoKana('input[name="firstName"]', 'input[name="firstNameKana"]', { katakana : true });
    $.fn.autoKana('input[name="companyName"]', 'input[name="companyNameKana"]', { katakana : true });
    $.fn.autoKana('input[name="ownerLastName"]', 'input[name="ownerLastNameKana"]', { katakana : true });
    $.fn.autoKana('input[name="ownerFirstName"]', 'input[name="ownerFirstNameKana"]', { katakana : true });
    
    //datepicker
    $.datepicker.setDefaults({
        dateFormat:         'yy/m/d(DD)',
        monthNames:         ['1譛�','2譛�','3譛�','4譛�','5譛�','6譛�','7譛�','8譛�','9譛�','10譛�','11譛�','12譛�'],
        dayNames:           ['譌･','譛�','轣ｫ','豌ｴ','譛ｨ','驥�','蝨�'],
        dayNamesMin:        ['譌･','譛�','轣ｫ','豌ｴ','譛ｨ','驥�','蝨�'],
        showMonthAfterYear: true,
        yearSuffix:         '蟷ｴ',
        //showOtherMonths:    true,
        //selectOtherMonths:  true,
        minDate:            day_control.DayMaster.today,
        maxDate:            day_control.DayMaster.maxday,
        beforeShow : function(_date) {
        }
    });
    
    //繧､繝吶Φ繝亥�逅�
    //逕ｳ霎ｼ蛹ｺ蛻�
    $('#user_select li input').on('change', function() { 
        display_control.user_set();
        input_judge.judgment();
        display_control.next_control( input_judge.get_error_num() );
    });
    //蜷榊燕
    $('input[name="lastName"], input[name="firstName"], input[name="companyName"], input[name="ownerLastName"], input[name="ownerFirstName"]').on('change blur', function() {
        var _kana_name = 'input[name="' + $(this).attr('name') + 'Kana' + '"]';
        input_judge.judgment( $(this) );
        display_control.error_set( $(this).attr('name') );
        input_judge.judgment( $(_kana_name) );
        display_control.error_set( $(this).attr('name') + 'Kana' );
        display_control.next_control( input_judge.get_error_num() );
    });
    //繧ｫ繝翫�菴乗園
    $('input[name="lastNameKana"], input[name="firstNameKana"], input[name="companyNameKana"], input[name="ownerLastNameKana"], input[name="ownerFirstNameKana"], input[name="address1"], input[name="address1_2"]').on('change', function() {
        input_judge.judgment( $(this) );
        display_control.error_set( $(this).attr('name') );
        display_control.next_control( input_judge.get_error_num() );
    });
    //繝｡繝ｼ繝ｫ繧｢繝峨Ξ繧ｹ
    $('input[name="email"]').on('change', function() {
        input_judge.input_auxiliary( $(this) , 'email' );
        input_judge.input_auxiliary( $(this) , 'trim' );
        input_judge.judgment( $(this) );
        display_control.error_set( $(this).attr('name') );
        display_control.next_control( input_judge.get_error_num() );
    });
    //驛ｵ萓ｿ逡ｪ蜿ｷ
    $('#zip_bn').on('click', function() { 
        display_control.zip_set( function() {
            if (input_judge.ErrorRecord['zipCode'] == undefined) input_judge.judgment( $('input[name="zipCode"]') );
            display_control.error_set( 'zipCode' );
            input_judge.judgment( $('input[name="address1"]') );
            display_control.error_set( 'address1' );
            display_control.next_control( input_judge.get_error_num() );
        });
    });
    $('input[name="zipCode"]').on('change blur', function() {
        input_judge.input_auxiliary( $(this) , 'number' );
        input_judge.judgment( $(this) );
        display_control.error_set( $(this).attr('name') );
        display_control.next_control( input_judge.get_error_num() );
    });
    //髮ｻ隧ｱ逡ｪ蜿ｷ
    $('input[name="phone"], input[name="phoneCheck"]').on('change', function() {
        input_judge.input_auxiliary( $(this) , 'number' );
        input_judge.judgment( $(this) );
        display_control.error_set( $(this).attr('name') );
        if ( $(this).attr('name') == 'phone' ) display_control.error_set( 'phoneCheck' );
        display_control.next_control( input_judge.get_error_num() );
    });
    //騾｣邨｡譁ｹ豕�
    $('input[name="contactType"]').on('click', function() {
        display_control.contact_set();
        input_judge.judgment( $(this) );
        display_control.error_set( $(this).attr('name') );
        display_control.error_set( 'contactTime' );
        input_judge.judgment( $('select[name="contactTime"') );
        display_control.next_control( input_judge.get_error_num() );
    });
    $(' select[name="contactTime"]').on('change', function() {
        input_judge.judgment( $(this) );
        display_control.error_set( $(this).attr('name') );
        display_control.next_control( input_judge.get_error_num() );
    });
    ////繧ｵ繝ｼ繝舌�險ｭ鄂ｮ譌･
    $('#contactDay1 select[name="contactDay1"], #contactDay2 select[name="contactDay2"]').on('change', function() {
        day_control.day_set( $(this) );
        display_control.next_control( input_judge.get_error_num() );
    });
    $('#contactDay1 input[name="contactDay1"], #contactDay2 input[name="contactDay2"]').datepicker({
        beforeShowDay : function(_date) {
            //逾晄律險ｭ螳�
            var _holiday = new Date();
            var _holiday_list = $('#date_list').val().split(',');
            for (var i = 0; i < _holiday_list.length; i++) {
                _holiday.setTime(Date.parse(_holiday_list[i]));
                if (_holiday.getFullYear() == _date.getFullYear() && _holiday.getMonth() == _date.getMonth() && _holiday.getDate() == _date.getDate()) return [false, "holiday"];
            }
            //驕ｸ謚樔ｸ榊庄繧偵そ繝�ヨ
            var _exlusion_day = [];
            var _select_elem;
            
            if ( $(this).attr('name') == 'contactDay1') _select_elem = $('#contactDay2 input[name="contactDay2"');
            else if ( $(this).attr('name') == 'contactDay2') _select_elem = $('#contactDay1 input[name="contactDay1"');
            
            if( _select_elem.val() != '') {
                _exlusion_day = _select_elem.val().substring(0, _select_elem.val().indexOf("(")).split('/');
                _exlusion_day[1] = _exlusion_day[1] - 1;
                if (_exlusion_day[0] == String(_date.getFullYear()) && _exlusion_day[1] == String(_date.getMonth()) && _exlusion_day[2] == String(_date.getDate()))  return [false, ""];
            }
            
            if (_date.getDay() == 0)      return [false, "holiday"];
            return [true, ""];
        },
        onSelect: function(_dateText) {
            day_control.day_pcset( $(this), _dateText );
        }
    });
    $('#dayeraser1_bn, #dayeraser2_bn').on('click', function() {
        day_control.erase( $(this) );
    });    
    //縺ｩ縺薙〒遏･縺｣縺溘°
    $('#listen select, #listenMagazine select').on('change', function() {
        display_control.listen_set();
    });
    $('select[name="listen"]').on('blur change', function() {
        input_judge.judgment( $(this) );
        display_control.error_set( $(this).attr('name') );
        display_control.next_control( input_judge.get_error_num() );
    });
    //隱慕函譌･
    $('select[name="birthdayYear"], select[name="birthdayMonth"], select[name="birthdayDay"]').on('change blur', function() {
        input_judge.judgment( $('select[name="birthdayYear"]') );
        input_judge.judgment( $('select[name="birthdayMonth"]') );
        input_judge.judgment( $('select[name="birthdayDay"]') );
        display_control.error_set( 'birthdayYear' );
        display_control.error_set( 'birthdayMonth' );
        display_control.error_set( 'birthdayDay' );
        display_control.next_control( input_judge.get_error_num() );
    });
    //縺泌茜逕ｨ莠ｺ謨ｰ
    $('input[name="userNumber"], input[name="childrenNumber"]').on('blur', function() {
        input_judge.input_auxiliary( $(this) , 'number' );
        input_judge.judgment( $(this) );
        display_control.error_set( 'userNumber' );
        display_control.error_set( 'childrenNumber' );
        display_control.next_control( input_judge.get_error_num() );
    });
    //蜷梧э
    $('input[name="agreement"]').on('click', function() {
        input_judge.judgment( $(this) );
        display_control.error_set( $(this).attr('name') );
        display_control.next_control( input_judge.get_error_num() );
    });
    
    $('#error_assist').on('click', function() {
        display_control.error_set();
        var _top_list = [];
        for (var i = 0; $('p.error').length > i ; i++) {
            _top_list.push( $('p.error').eq(i).offset().top );
        }
        $('html, body').animate({scrollTop: Math.min.apply(null, _top_list) - 40 }, 600, "swing");
    });
    
    $(window).scroll(function () {
        if( input_judge.get_error_num() > 0 ) {
            if ( $(window).scrollTop()  > 150) $('#error_counter').fadeIn(200);
            else $('#error_counter').fadeOut(200);
        }
    });
});
