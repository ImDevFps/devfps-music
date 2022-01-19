import React from 'react';
import { Route } from 'react-router-dom';
import Menu from './../../components/menu/menu';
import TracksPage from './../Tracks/Tracks';
import './homePage.scss';

const homePage = () => {
  return (
    <div className='homepage'>
      <Route exact path='/' component={Menu} />
      <Route path={`/:singerId`} component={TracksPage} />
    </div>
  );
};

export default homePage;
