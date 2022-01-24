import { Link } from 'react-router-dom';
const data = require('../../data/data.json');

const Card = () => {
  return (
    <ul className="home-main-ul">
      {data.map((DATA) => (
        <li className="card" key={DATA.id}>
          <Link to={'logement/' + DATA.id}>
            <img src={DATA.cover} alt={'logement ' + DATA.title} />
            <span>{DATA.title}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Card;
