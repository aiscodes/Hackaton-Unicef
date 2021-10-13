import './App.css';
import React from 'react';
import MainPage from './pages/MainPage';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AboutVaccinePage from './pages/AboutVaccinePage';
import CalendarPage from './pages/CalendarPage';
import MythsPage from './pages/MythsPage';
import StatisticsPage from './pages/ StatisticsPage';
import TestingPage from './pages/TestingPage';
import MyCardPage from './pages/MyCardPage';
import Feedback from './pages/Feedback';
import Modal from './components/Modal';
import Modal2 from './components/commonComponents/Modal2';
import Modal3 from './components/commonComponents/Modal3';

export default function App() {
  return (
    <div className="appContainer">
      <BrowserRouter>
        <Switch>
          <Route exact path={'/main'} component={MainPage} />
          <Route exact path={'/about'} component={AboutVaccinePage} />
          <Route exact path={'/myths'} component={MythsPage} />
          <Route exact path={'/statistics'} component={StatisticsPage} />
          <Route exact path={'/testing'} component={TestingPage} />
          <Route exact path={'/calendar'} component={CalendarPage} />
          <Route exact path={'/my-card'} component={MyCardPage} />
          <Route exact path={'/feedback'} component={Feedback}/>
          <Route exact path={'/'} component={Modal}/>
          <Route exact path={'/modal2'} component={Modal2}/>
        <Route exact path={'/modal3'} component={Modal3}/>
          
        </Switch>
      </BrowserRouter>
    </div>
  );
}
