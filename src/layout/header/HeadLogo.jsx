import { Link } from 'react-router-dom';

const HeadLogo = () => {
  return (
    <Link to="/">
      <h1>
        <img
          className="kasa-logo"
          src={require('./../../assets/logo_kasa.jpg')}
          alt="kasa"
        />
      </h1>
    </Link>
  );
};

export default HeadLogo;
