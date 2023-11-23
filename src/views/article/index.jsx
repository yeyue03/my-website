import React from "react";
import './article.less'

const Article = () => {
  return (
    <main className="app-main">
      <div className="story-wrap">
        <div className="story-box">
          <div className="story-card">
            <h2 className="card-title">游戏毁了这么多青少年，国家为什么不禁止未成年的青少年玩游戏呢？</h2>
            <div className="rich-content">
              <div className="img-cover">
                <img src="https://img2.baidu.com/it/u=2626707578,2110956943&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1700845200&t=ad61e4a0285983de5955fbf6d9770bfc" alt="" />
              </div>

              <div className="rich-content-inner">
                <div className="rich-text">
                  江湖潜规则： 房价毁掉了一大部分你不问，996毁掉了一小半你不问，公权私用毁掉了一部分你不问。 你问游戏，一个拯救了大部分人，使社会安定扩大就业，对社会治安做出卓越贡献，让大家有了精神寄托
                </div>
                <button className="read-more">阅读全文</button>
              </div>
            </div>
          </div>
        </div>

        <div className="right-sidebar">
          侧边栏
        </div>
      </div>
    </main>
  )
}

export default Article