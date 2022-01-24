import React from 'react';
import Hosting from './Hosting';
import Dropbox from './dropbox/Dropbox';
import './info.scss';

export default function Infos() {
  return (
    <div>
      <Hosting />
      <Dropbox />
    </div>
  );
}
