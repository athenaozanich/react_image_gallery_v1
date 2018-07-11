import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/header';
import Photos from './components/photos';
import NoRoute from './components/noRoute';
import './App.css';

class App extends Component{
  render() {
    return (
      //browser routing and switch for dynamic display of content and matching url
      <BrowserRouter>
        <div className="container">
        <Route path ="/" component={Header} />
        <Switch>
          <Route  exact path="/query/:term" render={ props => <Photos term={ props.match.params.term }/> } />
          <Route exact path="/" render={ props => <Photos term='T-rex'/> } />
          <Route component={NoRoute}/>
        </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
