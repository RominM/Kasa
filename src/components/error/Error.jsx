import React from 'react';
import Header from '../header/Header';
import { Link } from 'react-router-dom';
import './error.scss';

export default function Error() {
  return (
    <div>
      <Header />
      <div className="not-found">
        <span>404</span>
        <h1>Oups! La page que vous demandez n'existe pas.</h1>
        <Link to="/" className="error-link">
          Retourner sur la page d'accueil
        </Link>
      </div>
    </div>
  );
}
