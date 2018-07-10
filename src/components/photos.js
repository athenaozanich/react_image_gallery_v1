import React, { Component } from 'react';
import PhotoBox from './photoBox';
import NoPics from './noPics';
import Loading from './loading';
import apiKey from './config';
import axios from 'axios';

class Photos extends Component {
  constructor(){
    super();
    this.state ={
      pics : [],
      loading: true
    };
  }
  componentDidMount(){
    this.Search();
  }
  Search = (query = `${this.props.term}`) => {
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&safe_search=1&tags=${query}&per_page=28&format=json&nojsoncallback=1`)
    .then (response => { this.setState({pics: response.data.photos.photo, loading: false}); console.log(this.state); })
    .catch (error => {console.log(error);})
    }

  render() {

    if (this.state.loading){
      return( <Loading/> )
    }

    if(this.state.pics.length ===0){
      return( <NoPics/> )
    }

    return (
      <div className="container">
       <h2>{this.props.term} </h2>
       <PhotoBox data={this.state.pics} />
      </div>
    );
  }
}



export default Photos;
