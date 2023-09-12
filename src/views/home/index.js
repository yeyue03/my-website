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
                  {/* <img className="img" src="http://img.netbian.com/file/2023/0815/002805YxY24.jpg" alt="" /> */}
                </div>

                <div className="section">
                  <div className="content-box">

                  </div>
                  {/* <img className="img" src="http://img.netbian.com/file/2023/0428/001406UwUZU.jpg" alt="" /> */}
                </div>
                <div className="section">
                  <div className="content-box"></div>
                  {/* <img className="img" src="http://img.netbian.com/file/2023/0819/115237KxFBw.jpg" alt="" /> */}
                </div>
                <div className="section">
                  <div className="content-box"></div>
                  {/* <img className="img" src="http://img.netbian.com/file/2023/0809/122616M46GH.jpg" alt="" /> */}
                </div>
                <div className="section">
                  <div className="content-box"></div>
                  {/* <img className="img" src="http://img.netbian.com/file/2023/0823/1045364lGTg.jpg" alt="" /> */}
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