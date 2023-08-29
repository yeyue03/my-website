import './heder.less';
import HeadNav from './HeadNav';
import HeadUser from './HeadUser';

const Header = () => {
  return (
    <div className="head">
      <HeadNav />

      <HeadUser />
    </div>
  )
}

export default Header;