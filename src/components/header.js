import React from 'react';
import Form from './form';
import Nav from './nav';

const Header = props =>{
  return (
    <header>
      <h1>React Image Gallery</h1>
      <Form onSearch={this.Search}/>
      <Nav/>
    </header>
  );
}
export default Header;
