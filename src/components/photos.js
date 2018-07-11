import React, { Component } from 'react';
import PhotoBox from './photoBox';
import NoImgs from './noImgs';
import Loading from './loading';
import apiKey from './config';
import axios from 'axios';

class Photos extends Component {
  constructor(){
    super();
    //set empty state
    this.state ={
      imgsArr : [],
      loading: true
    };
  }
  //mount and initialize component
  componentDidMount(){
    this.Search(this.props.term);
  }
  //update component with props for new search results
  componentWillReceiveProps = (nextProps) => {
    const searchStr = this.props.term;
    const newSearchStr = nextProps.term;
    if(searchStr !== newSearchStr) {
       this.Search(newSearchStr);
     }
  }
  //run search query and api request
  Search = (query) => {
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&safe_search=1&tags=${query}&per_page=28&format=json&nojsoncallback=1`)
    .then (response => { this.setState({imgsArr: response.data.photos.photo, loading: false}); console.log(this.state); })
    .catch (error => {alert(error);})
  }

  render() {
    //check loading state
    if (this.state.loading){
      return( <Loading/> );
    //check for no results
    }else if(this.state.imgsArr.length ===0){
      return( <NoImgs/> );
    }
    return (
      //display component for results
      <div className="container">
       <h2>{this.props.term} </h2>
       <PhotoBox data={this.state.imgsArr} />
      </div>
    );
  }//end render

}//end class
export default Photos;
