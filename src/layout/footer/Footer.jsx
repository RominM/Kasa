import FootLogo from './FootLogo';
import './footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <FootLogo />
      <span className="copyright"> &#xA9; 2020 Kasa.All right reserved</span>
    </footer>
  );
};

export default Footer;
