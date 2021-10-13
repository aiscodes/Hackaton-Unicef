import React from 'react';
import BackgroundAnimation from '../../components/commonComponents/BackgroundAnimation';
import GlobusStat from './GlobusStat';
import './Statistics.css';

export default function StatisticsPage() {
  return (
    <BackgroundAnimation>
      <div style={{ backgroundColor: 'transparent' }}>
        <h1 className="mainPageTxt">Статистика</h1>
      </div>

      <div className="mainContent">
        <GlobusStat />
      </div>
    </BackgroundAnimation>
  );
}
