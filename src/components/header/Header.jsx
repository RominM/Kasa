import './header.scss';
import Logo from './Logo';
import HeadNav from './HeadNav';

const Header = () => {
  return (
    <header className="home-header">
      <Logo />
      <HeadNav />
    </header>
  );
};

export default Header;
