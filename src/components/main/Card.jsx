import { Link } from 'react-router-dom';
const data = require('../../data/data.json');

const Card = () => {
  return (
    <ul className="home-main-ul">
      {data.map((DATA) => (
        <Link to={'logement/' + DATA.id}>
          <li className="card" key={DATA.id}>
            <img src={DATA.cover} alt={'logement ' + DATA.title} />
            <span>{DATA.title}</span>
          </li>
        </Link>
      ))}
    </ul>
  );
};

export default Card;
