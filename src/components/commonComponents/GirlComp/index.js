import React from 'react';
import babyFace from '../../../assets/babyFace.gif';
import './Girl.css';

export default function GirlComp() {
  return (
    <div>
      <img src={babyFace} className="girlImg" />
    </div>
  );
}
