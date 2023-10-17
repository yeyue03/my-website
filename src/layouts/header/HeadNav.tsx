import React, { Component } from 'react';
import UserApi from '@/api/user/index';

interface NavProps {
  setIsShowSubNav: (bool: boolean) => void
}

class HeadNav extends Component<NavProps> {
  constructor(props: NavProps) {
    super(props);
  }

  componentDidMount(): void {
    UserApi.MenuList().then(res => {
      console.log("=== 菜单: ", res);
    })
  }

  render() {
    return (
      <div className='head-nav' onMouseOver={() => this.props.setIsShowSubNav(true)} onMouseLeave={() => this.props.setIsShowSubNav(false)}>
        <ul className="head-ul">
          <li className="li-active">首页</li>
          <li>常用功能</li>
          <li>图标</li>
          <li>游戏</li>
          <li>关于我们</li>
        </ul>
      </div>
    )
  }
}

export default HeadNav;