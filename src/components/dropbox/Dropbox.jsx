import './dropbox.scss';
import { useState } from 'react';

const Dropbox = (props) => {
  const children = props.children;
  const title = props.title.charAt(0).toUpperCase() + props.title.slice(1);

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="dropbox">
      <div className="dropbox-head" onClick={() => setIsOpen(!isOpen)}>
        <span className="dropbox-head__title">{title}</span>
      </div>
      {isOpen && (
        <div className={isOpen ? 'dropbox-content open' : 'dropbox-content'}>
          {children}
        </div>
      )}
    </div>
  );
};

export default Dropbox;
