import React from 'react';
import Header from './components/header';
import Form from './components/form';
import Nav from './components/nav';
import Photos from './components/photos';
import './App.css';

const App = props =>
  <div className="container">
  <Header/>
  <Form/>
  <Nav/>
  <Photos/>
  </div>;


export default App;
