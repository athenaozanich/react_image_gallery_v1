import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/header';
import Photos from './components/photos';
import NoPics from './components/noPics';
import './App.css';

class App extends Component{
  render() {
    return (
      <BrowserRouter forceRefresh={true}>
        <div className="container">
        <Route path ="/" component={Header} />
        <Switch>
          <Route path ="/search/:searchterm" render={ props => <Photos term={ props.match.params.searchterm }/> } />
          <Route exact path ="/" render={ props => <Photos term='Space'/> } />
          <Route component={NoPics}/>
        </Switch>
        </div>
      </BrowserRouter>
    );
  }

}


export default App;
