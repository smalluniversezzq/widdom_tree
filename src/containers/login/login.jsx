import React, { Component } from 'react';
import $ from 'jquery';
import './login.css';
import held from './image/held.jpg';
import wxlogo from './image/wxlogo.jpg';
import Alert from '../../components/alert/alert.jsx'

class Login extends Component {
    constructor(props, context) {
        super(props, context)
        this.state = {
            txt: "",   //弹框文字
            switch: false   //显示隐藏密码
        }
    }
    componentDidMount() {
        console.log(this.state.txt)
    }
    exptel() {
        // var reg = /^[1-9]\d*$/;
        var reg = /^((13[0-9])|(14[5,7])|(15[0-3,5-9])|(17[0,3,5-8])|(18[0-9])|166|198|199|(147))\d{8}$/;
        var apptel = $("#phone_num").val();
        console.log(apptel)
        if (apptel.length <= 0) {
            // this.txt = "请输入手机号";
            this.setState({
                txt: "请输入手机号",
            });
            $(".alert").show();
            $("#txt_del").removeClass("dis_block").addClass("dis_none");
        } else if (apptel.length < 11 && !reg.test(apptel)) {
            this.setState({
                txt: "手机号格式不正确",
            });
            $(".alert").show();
        } else if (apptel.length < 11) {
            this.setState({
                txt: "手机号格式不正确",
            });
            $(".alert").show();
        } else if (!reg.test(apptel)) {
            this.setState({
                txt: "手机号格式不正确",
            });
            $(".alert").show();
        }
        if (apptel.length > 0) {
            $("#txt_del").removeClass("dis_none").addClass("dis_block");
        }
    }
    exppwd() {
        var apppwd = $("#login_pwd").val();
        console.log(apppwd)
        if (apppwd.length < 1) {
            this.setState({
                txt: "密码不能为空",
            });
            $("#pwd_del").removeClass("dis_block").addClass("dis_none");
            $(".alert").show();
        } else if (apppwd.length > 12) {
            this.setState({
                txt: "密码不能大于十二位",
            });
            $(".alert").show();
        }
        if (apppwd.length > 0) {
            $("#pwd_del").removeClass("dis_none").addClass("dis_block");
        }
    }
    delint() {
        $("#login_pwd").val("");
        $("#pwd_del").removeClass("dis_block").addClass("dis_none");
    }
    textdel() {
        $("#phone_num").val("");
        $("#txt_del").removeClass("dis_block").addClass("dis_none");
    }
    handle() {
        if ($("#phone_num").val() !== "15003873032") {
            this.setState({
                txt: "账号不正确,请重新输入"
            })
            $(".alert").show();
        } else if ($("#login_pwd").val() !== "aaa111") {
            this.setState({
                txt: "密码不正确,请重新输入"
            })
            $(".alert").show();
        } else {
            this.props.router.push('/register');
        }
        //是否完善入园信息

    }
    tabshow() {
        if (this.state.switch == false) {
            this.setState({
                switch: true,
            });
            $("#login_pwd").attr("type", "text")
            $("#pwd_switch").removeClass("logo_int_pwd_no").addClass("logo_int_pwd_yes")

        } else if (this.state.switch == true) {
            this.setState({
                switch: false
            })
            $("#login_pwd").attr("type", "password")
            $("#pwd_switch").removeClass("logo_int_pwd_yes").addClass("logo_int_pwd_no")
        }
        console.log(this.state.switch)
    }

    render() {
        return (
            <div className="Login">
                <div>
                    <img className="imgheld" src={held} alt="" />
                </div>
                <div className="loginconcainer">
                    <div className="login_content">
                        <div className="login_phone_number">
                            <i className="login_phone_number_logo"></i>
                            <input id="phone_num" className="login_phone_number_logo_int" type="text" onBlur={this.exptel.bind(this)} autocomplete="off" />
                            <i id="txt_del" className="logo_int_pwd_exnt position_ab dis_none" onClick={this.textdel.bind(this)}></i>
                        </div>
                        <div className="login_phone_number position_re">
                            <i className="login_phone_mima_logo"></i>
                            <input id="login_pwd" className="login_phone_number_logo_int " onBlur={this.exppwd.bind(this)} type="password" autocomplete="off" />
                            <i id="pwd_del" className="logo_int_pwd_exnt position_ab dis_none" onClick={this.delint.bind(this)}></i>
                            <i id="pwd_switch" className="logo_int_pwd_no position_ab" onClick={this.tabshow.bind(this)}></i>
                        </div>
                        <div className="login_text">
                            <p>忘记密码</p>
                        </div>
                        <div className="denglu">
                            <div onClick={this.handle.bind(this)} className="login_sign">
                                登录
                            </div>
                        </div>
                        <div className="logcontact">
                            <span>联系客服</span>
                            <span>手机注册</span>
                        </div>
                    </div>
                </div>
                <div className="login_foot">
                    <div className="wexin_container">
                        <p>微信登录 </p>
                        <img className="wenxin_logo" src={wxlogo} alt="" />
                    </div>
                </div>
                <Alert name={this.state.txt}> </Alert>
            </div>
        );
    }
}
export default Login;
