import React from 'react';
import cn from 'classnames';
import { Link } from 'react-router-dom';

const HeadNavSub = (props) => {
  const [isOverNav, setIsOverNav] = React.useState(false);

  return (
    <div className={cn(['head-nav-sub', {'head-nav-show': props.isShowSubNav || isOverNav}])} onMouseOver={() => setIsOverNav(true)} onMouseLeave={() => setIsOverNav(false)}>
      <div className="head-nav-sub-inner">
        <ul className="head-ul">
          <li className='sub-li'>
            <Link className="head-nav-sub-a" to="/about">关于我们</Link>
            <Link className="head-nav-sub-a" to="/tictactoe">井字棋</Link>
            <Link className="head-nav-sub-a" to="/xxx">不存在</Link>
          </li>
          <li className='sub-li'>
            <a className="head-nav-sub-a" href="https://www.baidu.com/">子菜单一</a>
            <a className="head-nav-sub-a" href="https://www.baidu.com/">子菜单二</a>
            <a className="head-nav-sub-a" href="https://www.baidu.com/">子菜单三</a>
          </li>
          <li className='sub-li'>
            <a className="head-nav-sub-a" href="https://www.baidu.com/">子菜单一</a>
            <a className="head-nav-sub-a" href="https://www.baidu.com/">子菜单二</a>
            <a className="head-nav-sub-a" href="https://www.baidu.com/">子菜单三</a>
          </li>
          <li className='sub-li'>
            <a className="head-nav-sub-a" href="https://www.baidu.com/">子菜单一</a>
            <a className="head-nav-sub-a" href="https://www.baidu.com/">子菜单二</a>
            <a className="head-nav-sub-a" href="https://www.baidu.com/">子菜单三</a>
          </li>
          <li className='sub-li'>
            <a className="head-nav-sub-a" href="https://www.baidu.com/">子菜单一</a>
            <a className="head-nav-sub-a" href="https://www.baidu.com/">子菜单二</a>
            <a className="head-nav-sub-a" href="https://www.baidu.com/">子菜单三</a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default HeadNavSub;