import React, { Component } from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import './home.less';

class Home extends Component {
  render() {
    return (
      <div className="home-wrap">
        <ReactFullpage
          //上面的参数设置都写在这里，不用再写在构造函数里面
          render={() => {
            return (
              <ReactFullpage.Wrapper>
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

export default Home;