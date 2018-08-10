import React, { Component } from 'react';
import './register.css';
import $ from 'jquery';
import Head from '../../components/head/header.jsx';
import Alert from '../../components/alert/alert.jsx';

class Register extends Component {
    constructor(props, context) {
        super(props, context)
        this.state = {
            txt: ""
        }
    }
    componentDidMount() {
    }
    handle() {
        this.props.router.push('/verification');
    }
    bulr(e) {
        var reg = /^((13[0-9])|(14[5,7])|(15[0-3,5-9])|(17[0,3,5-8])|(18[0-9])|166|198|199|(147))\d{8}$/;
        var apptel = $(".reg_int").val();
        if (apptel.length < 1) {
            this.setState({
                txt: "手机号不能为空",
            });
            $(".alert").show()
        }
        else if (!reg.test(apptel)) {
            this.setState({
                txt: "手机号格式不正确",
            });
            $(".alert").show()
        }
    }
    historie(){
      
    }
    render() {
        return (
            <div className="Register">
                <Head  onClick={this.historie.bind(this)}/>
                <div className="register_cantainer">

                    <div className="reg_up">
                        <p className="reg_tit">请输入手机号码</p>
                        <div className="dis_flex reg_dis position_re">
                            <i className="reg_app_log position_ab"></i>
                            <input className="reg_int" type="text" placeholder="手机号" onBlur={this.bulr.bind(this)} />
                        </div>
                        <p className="reg_careful">注册代表您同意 <a href="#">智慧树用户服务条款</a></p>
                    </div>
                    <div className="middle">
                        <div onClick={this.handle.bind(this)} className="reg_btn">立即验证</div>
                    </div>
                </div>
                <Alert name={this.state.txt}> </Alert>
            </div>
        );
    }
}

export default Register;