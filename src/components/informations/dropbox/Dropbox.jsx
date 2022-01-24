import React from 'react';
import Description from './Description';
import Facilities from './Facilities';

export default function Dropbox() {
  return (
    <div className="dropbox">
      <div className="dropbox-head">
        <span className="dropbox-title"></span>
        <div className="arrow">
          <img src="" alt="" />
        </div>
      </div>
      <div className="dropbox-content">
        <Description />
        {/* or */}
        <Facilities />
      </div>
    </div>
  );
}
