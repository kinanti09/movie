import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './header/header';
import Main from './main/main';
import './App.css';
import NotFound from './notFound';
import Movie from './movie/movie';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div>
        <Header />
        <Switch>
        <Route exacte path='/' component={Main} />
        <Route path='/movies/:movieId' component={Movie} />
        <Route component={NotFound} />
        </Switch>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
