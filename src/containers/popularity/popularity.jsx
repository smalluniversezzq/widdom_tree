import React, { Component } from 'react';
import './popularity.css';
import $ from 'jquery';
import Footer from '../../components/footer/footer.jsx';
import Header from '../../components/header/header.jsx';
import headlineimg from './image/headline_img.jpg';
import header_pic1 from './image/header_pic1.jpg';
import tab1 from './image/tab1.jpg';
import tab2 from './image/tab2.jpg';
import tab3 from './image/tab3.jpg';
import tab4 from './image/tab4.jpg';
import tab5 from './image/tab5.jpg';
import swith1 from './image/swith1.jpg';
import swith2 from './image/swith2.jpg';
import swith3 from './image/swith3.jpg';
import swith4 from './image/swith4.jpg';
import swith5 from './image/swith5.jpg';
import swith6 from './image/swith6.jpg';
import swith7 from './image/swith7.jpg';
import swith8 from './image/swith8.jpg';
import swith9 from './image/swith9.jpg';
import swith10 from './image/swith10.jpg';
import swithl from './image/swith+.jpg';
import tu1 from './image/tu1.jpg';
import tu2 from './image/tu2.jpg';
import tu3 from './image/tu3.jpg';
import tu4 from './image/tu4.jpg';
import tu5 from './image/tu5.jpg';
import tu6 from './image/tu6.jpg';
import tu7 from './image/tu7.jpg';
import tu8 from './image/tu8.jpg';
import tu9 from './image/tu9.jpg';
import fenxiang from './image/fenxiang.jpg';
import weixin from './image/weixin.jpg';
import zan from './image/zan.jpg';
import txlogo from './image/touxianglogo.jpg';

class Popular extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      status: '/popularity',
      isHeadlineTab: true,
      isCircleTab: false
    }
  }
  //Grow up
  componentDidMount() {
    $("body").css({
      height: document.documentElement.clientHeight
    })
  }
  handleEmail(event) {
    event.target.name ? this.props.router.push(event.target.name) : ''
  }
  headline_tab() {
    this.setState({ isHeadlineTab: true, isCircleTab: false });
  }
  circle_tab() {
    this.setState({ isCircleTab: true, isHeadlineTab: false });
  }
  render() {
    return (
      <div className="popularity" style={{ minHeight: document.documentElement.clientHeight }}>
        <Header name="发现"/>
        <div className="header_holder"></div>
        <div className="popu">
          <ul className="popu_title_top dis_flex">
            <li >
              <img src={tab1} alt="" />
              <p>儿童专区</p>
            </li>
            <li >
              <img src={tab2} alt="" />
              <p>天天抽奖</p>
            </li>
            <li >
              <img src={tab3} alt="" />
              <p>智慧购</p>
            </li>
            <li >
              <img src={tab4} alt="" />
              <p>智慧讲堂</p>
            </li>
            <li >
              <img src={tab5} alt="" />
              <p>更多</p>
            </li>
          </ul>
        </div>
        {/* tab切花 */}
        <div className="tab_box  " id="anchors">
          <div className="tab_title ">
            <ul className="tab_em dis_flex">
              <li id="headline"  className={this.state.isHeadlineTab === true ? 'tab_bottom' : 'tab_bottom_no'}
                onClick={this.headline_tab.bind(this)}>头条</li>
              <li id="circle" className={this.state.isCircleTab === true ? 'tab_bottom' : 'tab_bottom_no'}
                onClick={this.circle_tab.bind(this)}>圈子</li>
            </ul>
          </div>
          <div className="tab_cont " >
            {/* tab切换 */}
          
            <div className={this.state.isHeadlineTab === true ? 'tab_headline dis_block' : 'tab_headline dis_none' }>
              <div className="headline_tit">
                <span className="headline_txt">历史竟能这么有趣！98个问题讲孩子听得懂的故宫故事</span>
                <img src={headlineimg} alt="" />
                <p className="headline_logo">学习</p>
              </div>
              {/* list */}
              <div className="headline_list dis_flex">
                <div className="header_list_left">
                  <p className="headline_list_title">【团购】磨蹭、叛逆、腻歪怎么办？专家教你这么做！</p>
                  <div className="header_list_container">
                    <span>小柔妈</span>&nbsp;<span> 3万+浏览</span> &nbsp; <span>521赞</span>
                  </div>
                </div>
                <div className="headline_pic">
                  <img src={header_pic1} alt="" />
                </div>
              </div>
              <div className="headline_list dis_flex">
                <div className="header_list_left">
                  <p className="headline_list_title">【团购】磨蹭、叛逆、腻歪怎么办？专家教你这么做！</p>
                  <div className="header_list_container">
                    <span>小柔妈</span>&nbsp;<span> 3万+浏览</span> &nbsp; <span>521赞</span>
                  </div>
                </div>
                <div className="headline_pic">
                  <img src={header_pic1} alt="" />
                </div>
              </div>
              <div className="headline_list dis_flex">
                <div className="header_list_left">
                  <p className="headline_list_title">【团购】磨蹭、叛逆、腻歪怎么办？专家教你这么做！</p>
                  <div className="header_list_container">
                    <span>小柔妈</span>&nbsp;<span> 3万+浏览</span> &nbsp; <span>521赞</span>
                  </div>
                </div>
                <div className="headline_pic">
                  <img src={header_pic1} alt="" />
                </div>
              </div>
            </div>
            <div className={this.state.isCircleTab === true ? 'tab_circle dis_block' : 'tab_circle dis_none' }>
              <div className="tab_circle_box">
                <div>
                  <div className="circle_swith_box ov_hid ">
                    <ul className="dis_flex circle_swith_w over_scr">
                      <li className="circle_swith">
                        <img src={swith1} alt="" />
                        <p>每天一个成语</p>
                      </li>
                      <li className="circle_swith">
                        <img src={swith2} alt="" />
                        <p>每天一张笑脸</p>
                      </li>
                      <li className="circle_swith">
                        <img src={swith3} alt="" />
                        <p>今日最萌宝</p>
                      </li>
                      <li className="circle_swith">
                        <img src={swith4} alt="" />
                        <p>早睡打卡</p>
                      </li>
                      <li className="circle_swith">
                        <img src={swith5} alt="" />
                        <p>刷牙打卡</p>
                      </li>
                      <li className="circle_swith">
                        <img src={swith6} alt="" />
                        <p>亲子阅读打卡圈</p>
                      </li>
                      <li className="circle_swith">
                        <img src={swith7} alt="" />
                        <p>亲子阅读打卡圈</p>
                      </li>
                      <li className="circle_swith">
                        <img src={swith8} alt="" />
                        <p>亲子阅读打卡圈</p>
                      </li>
                      <li className="circle_swith">
                        <img src={swith9} alt="" />
                        <p>亲子阅读打卡圈</p>
                      </li>
                      <li className="circle_swith">
                        <img src={swith10} alt="" />
                        <p>亲子阅读打卡圈</p>
                      </li>
                      <li className="circle_swith">
                        <img src={swithl} alt="" />
                        <p>亲子阅读打卡圈</p>
                      </li>
                    </ul>
                  </div>
                </div>

              </div>
              {/* 朋友圈 */}
              <div className="circle_quan">
                <div className="circle_list">
                  <div className="circle_title dis_flex pos_r">
                    <div className="header_pro">
                      <img src={txlogo} alt="" />
                    </div>
                    <div className="circle_info ">
                      <p className="circle_info_name">只若初见</p>
                      <p className="circle_info_time">昨天</p>
                    </div>
                    <i className="pos_a  circle_info_rt"></i>
                  </div>
                  <div className="circle_cont">
                    <div className="circle_cont_text">
                      开心宝贝~
                    </div>
                    <div className="circle_cont_album dis_flex ">
                      <img src={tu1} alt="" />
                      <img src={tu1} alt="" />
                      <img src={tu1} alt="" />
                      <img src={tu1} alt="" />
                      <img src={tu1} alt="" />
                      <img src={tu1} alt="" />
                      <img src={tu1} alt="" />
                      <img src={tu1} alt="" />
                      <img src={tu1} alt="" />
                    </div>
                    <div>
                      <span className="circle_type">每天一张笑脸照</span>
                    </div>
                  </div>
                  <div className="circle_footer">
                      <div className="dis_flex">
                         <div className="fenxiang">
                            <img src={zan} alt=""/>
                            <img src={weixin} alt=""/>
                            <img src={fenxiang} alt=""/>
                         </div>
                          <div className="pinglun pos_r">
                            <div className="pos_a pinglun_text">
                                <span>57赞&nbsp; 1评论</span>
                            </div>
                          </div>
                      </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*占位*/}
        <div className="zhuaiwei"></div>
        <Footer name={this.state.status} handleEmail={this.handleEmail.bind(this)} />
      </div>
    );
  }
}
export default Popular;
