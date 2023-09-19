import React from 'react';
import './heder.less';
import HeadNav from './HeadNav';
import HeadUser from './HeadUser';
import HeadNavSub from './HeadNavSub';

const Header = () => {
  const [isShowSubNav, setIsShowSubNav] = React.useState(false);
  
  return (
    <>
      <div className="head">
        <HeadNav setIsShowSubNav={setIsShowSubNav} />

        <HeadUser />
      </div>
      
      <HeadNavSub isShowSubNav={isShowSubNav} />
    </>
  )
}

export default Header;