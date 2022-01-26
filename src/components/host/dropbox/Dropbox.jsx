import React from 'react';
import Equipments from './Equipments';

export default function Dropbox() {
  return (
    <div className="dropbox">
      <div className="dropbox-head">
        <span className="dropbox-title" />
        <div className="arrow">
          <img src="" alt="" />
        </div>
      </div>
      <div className="dropbox-content">
        <p className="text-content" />
        {/* or */}
        <Equipments />
      </div>
    </div>
  );
}
