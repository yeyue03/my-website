const HeadNav = (props) => {
  return (
    <div className='head-nav' onMouseOver={() => props.setIsShowSubNav(true)} onMouseLeave={() => props.setIsShowSubNav(false)}>
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

export default HeadNav;