import './accordion.scss';
import { useState } from 'react';

const Accordion = (props) => {
  const children = props.children;
  const title = props.title.charAt(0).toUpperCase() + props.title.slice(1);

  // handle accordion
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="accordion">
      <div
        className={isOpen ? 'accordion-head open' : 'accordion-head'}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="accordion-head__title">{title}</span>
      </div>
      {isOpen && (
        <div
          className={isOpen ? 'accordion-content open' : 'accordion-content'}
        >
          {children}
        </div>
      )}
    </div>
  );
};

export default Accordion;
