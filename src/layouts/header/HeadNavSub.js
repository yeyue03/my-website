import React from 'react';
import cn from 'classnames';

const HeadNavSub = (props) => {
  const [isOverNav, setIsOverNav] = React.useState(false);

  return (
    <div className={cn(['head-nav-sub', {'head-nav-show': props.isShowSubNav || isOverNav}])} onMouseOver={() => setIsOverNav(true)} onMouseLeave={() => setIsOverNav(false)}>
      <div className="head-nav-sub-inner">
        <ul className="head-ul">
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