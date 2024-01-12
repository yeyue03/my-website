import React from 'react';
// import UserApi from '@/api/user/index';
// import { useAppDispatch } from '@/store';
// import { setMenu } from '@/store/user';
// import store from '@/store';

interface NavProps {
  setIsShowSubNav: (bool: boolean) => void
}

const HeadNav = (props: NavProps) => {
  // const [menuList, setMenuList] = useState<any>([]);
  // const dispatch = useAppDispatch();

  // const getMenu = () => {
  //   UserApi.MenuList().then((data: any) => {
  //     dispatch(setMenu(data));
  //   })
  // }
  // getMenu();

  // setTimeout(() => {
  //   console.log("=== store: ", store.getState().user.menu);
  // }, 1000);

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