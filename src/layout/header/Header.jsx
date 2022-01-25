import './header.scss';
import HeadLogo from './HeadLogo';
import HeadNav from './HeadNav';

const Header = () => {
  return (
    <header className="header">
      <HeadLogo />
      <HeadNav />
    </header>
  );
};

export default Header;
