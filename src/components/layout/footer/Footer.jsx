import './footer.scss';
import FootLogo from './../../../assets/images/logo_kasa_foot.png';

const Footer = () => {
  return (
    <footer className="footer">
      <h2>
        <img className="kasa-logo-foot" src={FootLogo} alt="kasa" />
      </h2>
      <span className="copyright"> &#xA9; 2020 Kasa.All right reserved</span>
    </footer>
  );
};

export default Footer;
