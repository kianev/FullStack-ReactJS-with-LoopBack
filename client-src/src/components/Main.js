import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Meetups from './Meetups';
import About from './About';

class Main extends Component {
  render() {
    return (
      <main>
        <Switch>
          <Route exact path="/" component={Meetups}/>
          <Route exact path="/about" component={About}/>
        </Switch>
      </main>
    );
  }
}

export default Main;
