import React from 'react';
import { Route, Switch } from 'react-router';
import './App.scss';
import Header from './components/header/header';
import Navbar from './components/navbar/Navbar';
import Player from './components/player/player';
import homePage from './pages/homepage/homePage';
import LikedPage from './pages/Liked/liked';
import Search from './pages/search/Search';

const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <Header />
      <Switch>
        <Route exact path='/liked' component={LikedPage} />
        <Route exact path='/search' component={Search} />
        <Route path='/' component={homePage} />
      </Switch>
      <Player />
    </div>
  );
};

export default App;
