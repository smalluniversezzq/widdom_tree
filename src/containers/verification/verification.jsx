import React, { Component } from 'react';
import './verification.css';
// import Head from '../../components/head/header.jsx';
import $ from 'jquery';
import Alert from '../../components/alert/alert.jsx';

class Verification extends Component {
    constructor(props, context) {
        super(props, context)
        this.state = {
            txt: ''
        }
    }
    componentDidMount() {
        $("body").css({
            height: document.documentElement.clientHeight
        })
    }
    submits() {
        var usernum = $("#identity").val();
        let tel = $('#tel').val();
        var reg = /^((13[0-9])|(14[5,7])|(15[0-3,5-9])|(17[0,3,5-8])|(18[0-9])|166|198|199|(147))\d{8}$/;
        if (usernum.length == 0) {
            this.setState({
                txt: '讯前表单不能为空'
            });
            $(".alert").fadeIn();
        }else if (tel.length == 0) {
            this.setState({
                txt: '手机号不能为空'
            });
            $(".alert").fadeIn();
        } else if (!reg.test(tel)) {
            this.setState({
                txt: '手机格式不正确'
            });
            $('.alert').fadeIn();
        }else{
            this.props.router.push('/home')
        }
    }
    render() {
        return (
            <div className="verification bg_body" style={{ height: document.documentElement.clientHeight }}>
                <div className="container dis_flex">
                    <i className="retreat"></i>
                    <span className="">
                        返回
                    </span>
                    <span className="">
                        关闭
                    </span>
                    <span className="title_three">
                        在线咨询-智慧树幼教云平台
                    </span>
                </div>
                <div className="vertitle">
                    <span>
                        讯前表单
                   </span>
                </div>
                <div className="vericonteiner" >
                    <div className="verxqbd">
                        <p>讯前表单</p>
                        <p>身份(请问您是院长、教师或家长)</p>
                    </div>
                    <div className="ver_input">
                        <input id="identity" type="text" placeholder="请输入" />
                    </div>
                    <div className="verxqbd_number">
                        <p>请问您登录账号(手机号)是多少</p>
                    </div>
                    <div className="ver_input">
                        <input id="tel" type="text" placeholder="请输入" />
                    </div>
                    <div className="ver_btn" onClick={this.submits.bind(this)}>
                        提交
                    </div>
                </div>
                <Alert name={this.state.txt}> </Alert>
            </div>
        );
    }
}

export default Verification;
