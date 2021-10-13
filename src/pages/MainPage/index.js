import React from 'react';
import BackgroundAnimation from '../../components/commonComponents/BackgroundAnimation';
import GirlComp from '../../components/commonComponents/GirlComp';

import './Main.css';

export default function MainPage() {
  return (
    <BackgroundAnimation>
      <div className="mainPageContent">
        <GirlComp />
      </div>
    </BackgroundAnimation>
  );
}
