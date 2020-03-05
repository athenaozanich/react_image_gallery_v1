import React from 'react'
import Form from './form'
import Nav from './nav'

const Header = props => {
  return (
    // display component for header
    <header>
      <h1>React Image Gallery</h1>
      <Form />
      <Nav />
    </header>
  )
}
export default Header
