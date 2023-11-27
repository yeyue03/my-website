import React from "react";
import {
  CaretUpOutlined,
  CaretDownOutlined,
  MessageFilled,
  NotificationFilled,
  StarFilled,
  HeartFilled,
} from "@ant-design/icons";

const StoryCard = (props) => {
  return (
    <div className="story-card">
      <h2 className="card-title">{ props.title }</h2>

      <div className="rich-content">
        { props.img && (
          <div className="img-cover">
            <img src={props.img} alt="图片" />
          </div>
        ) }

        <div className="rich-content-inner">
          <div className="rich-text">
            <span dangerouslySetInnerHTML={{ __html: props.shortContent }}></span>
          </div>
          <button className="read-more">阅读全文</button>
        </div>
      </div>

      <div className="card-actions">
        <div>
          <button className="vote-btn">
            <CaretUpOutlined />
            <span>赞同 { props.voteNum }</span>
          </button>

          <button className="vote-btn vote-btn-down">
            <CaretDownOutlined />
          </button>
        </div>

        <button className="actions-btn">
          <MessageFilled />
          <span>{ props.commentNum } 条评论</span>
        </button>

        <button className="actions-btn">
          <NotificationFilled />
          <span>分享</span>
        </button>

        <button className="actions-btn">
          <StarFilled />
          <span>收藏</span>
        </button>

        <button className="actions-btn">
          <HeartFilled />
          <span>喜欢</span>
        </button>
      </div>
    </div>
  )
}

export default StoryCard;