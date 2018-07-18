import React, { Component } from 'react';
import './news.css';
import $ from 'jquery';
import Footer from '../../components/footer/footer.jsx';
import Header from '../../components/header/header.jsx';
import txlogo from './image/touxianglogo.jpg';

class News extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      status: '/news'
    }
  }
  componentDidMount() {
    $("body").css({
      height: document.documentElement.clientHeight
    })
  }
  handleEmail(event) {
    event.target.name?this.props.router.push(event.target.name) :''
  }
  render() {
    return (
      <div className="" style={{ height: document.documentElement.clientHeight }}>
        <Header name="消息"/>
        <div className="header_holder"></div>
        <div className="news">
          <div className="news_box">
            <ul className="news_cont">
              <li className="news_list dis_flex news_btn pos_r">
                  <div className="new_logo">
                    <img src={txlogo} alt=""/>
                  </div>
                  <div className="new_text ">
                      <div className="new_text_title">智慧树小秘书</div>
                      <div className="new_text_cont">颠覆想象的数据，明晚十点直播...</div>
                  </div>
                  <div className="nre_text_time pos_a">2018年10月11日</div>
              </li>
            </ul>
          </div>
        </div>
        <Footer name={this.state.status} handleEmail={this.handleEmail.bind(this)}/>
      </div>
    );
  }
}
export default News;
