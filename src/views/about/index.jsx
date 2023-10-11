import React, { Component } from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import './about.less';
import aboutStyle from './about.module.less';

class About extends Component {
  render() {
    return (
      <div className="about-wrap">
        <ReactFullpage
          //上面的参数设置都写在这里，不用再写在构造函数里面
          render={() => {
            return (
              <ReactFullpage.Wrapper>
                <div className="section">
                  <div className="content-box">
                    <div className={aboutStyle['head-box']}>
                      <div className={aboutStyle['head-logo']}>
                        <img className={aboutStyle['logo-img']} src="http://demo.sucaihuo.com/modals/18/1823/demo/images/upload/head.jpg" alt="" />
                      </div>

                      <h2 className={aboutStyle.h2}>ZZ</h2>
                      <h3 className={aboutStyle.h3}>千里之行，始于足下</h3>
                    </div>
                  </div>
                </div>

                <div className="section">
                  <div className="content-box">
                    <div className={aboutStyle['bar-wrap']}>
                      <div className={`${aboutStyle.bar} ${aboutStyle.mint} ${aboutStyle.active}`} data-percent="70" data-skill="HTML5+CSS3"></div>
                      <div className={`${aboutStyle.bar} ${aboutStyle.red} ${aboutStyle.active}`} data-percent="50" data-skill="JavaScript"></div>
                      <div className={`${aboutStyle.bar} ${aboutStyle.lila} ${aboutStyle.active}`} data-percent="50" data-skill="前端工程化"></div>
                      <div className={`${aboutStyle.bar} ${aboutStyle.orange} ${aboutStyle.active}`} data-percent="50" data-skill="Nodejs"></div>
                      <div className={`${aboutStyle.bar} ${aboutStyle.gray} ${aboutStyle.active}`} data-percent="50" data-skill="Java || C++"></div>
                      <div className={`${aboutStyle.bar} ${aboutStyle.blue} ${aboutStyle.active}`} data-percent="50" data-skill="PS&AE&PR&AI"></div>
                      <div className={`${aboutStyle.bar} ${aboutStyle.green} ${aboutStyle.active}`} data-percent="50" data-skill="绘画"></div>
                    </div>
                  </div>
                </div>
                
                <div className="section">
                  <div className="content-box">

                  </div>
                </div>

                <div className="section">
                  <div className="content-box">

                  </div>
                </div>

                <div className="section">
                  <div className="content-box">

                  </div>
                </div>
              </ReactFullpage.Wrapper>
            );
          }}
        />
      </div>
    );
  }
}

export default About;