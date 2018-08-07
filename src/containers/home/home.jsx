import React, { Component } from 'react';
import './home.css';
import $ from 'jquery';
import Footer from '../../components/footer/footer.jsx';
import Header from '../../components/header/header.jsx';
import banji from './image/banji_logo.jpg';
import holder from './image/holder.png';

class Login extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      status: '/home'
    }
  }
  componentDidMount() {
    $("body").css({
      height: document.documentElement.clientHeight
    })
  }
  link(url) {
    this.props.router.push(url);
  }
  handleEmail(event) {
    event.target.name ? this.props.router.push(event.target.name) : ''
  }

  render() {
    return (
      <div className="home" style={{ height: document.documentElement.clientHeight }}>
        <Header name="班级" />
        <div className="header_holder"></div>
        <div className="home_box" >
          <div className="home_inform">
            <div className="home_inform_child">
                <div>
                  <i className="banji_logo"></i>
                </div>
                <div>
                    <p className="home_size">宝宝还未加入任何班级,班级圈不可用</p>
                    <p className="home_btn">加入幼儿园</p>
                </div>
            </div>
          </div>
          <div className="inform_content">
          <img src={holder} alt=""/>

          </div>
        </div>
        <Footer name={this.state.status} handleEmail={this.handleEmail.bind(this)} />
      </div>
    );
  }
}
export default Login;
