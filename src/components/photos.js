import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Photos extends Component {
  state = {
    imgs:[
      {
        imageUrl: "https://farm5.staticflickr.com/4334/37032996241_4c16a9b530.jpg",
        altText: "Kitten"
      },
      {
        imageUrl: "https://farm5.staticflickr.com/4342/36338751244_316b6ee54b.jpg",
        altText: "Puppy"
      },
      {
        imageUrl: "https://farm5.staticflickr.com/4343/37175099045_0d3a249629.jpg",
        altText: "Laptop"
      },
      {
        imageUrl: "https://farm5.staticflickr.com/4425/36337012384_ba3365621e.jpg",
        altText: "Doggo"
      }
    ]
  };
  getLinksLength = () => this.state.imgs.length;
  render() {
    return (
      <div className="photo-container">
        <h2>Results</h2>
        <ul>
          {props.imgs.map((imgs, idx)=>
            <li key={idx}>
            <img src={imgs.imageUrl} alt={imgs.altText}/>
          </li>
          )}
        </ul>
      </div>
    );
  }
}

Photos.propTypes = {
  imgs: PropTypes.array.isRequired
}

export default Photos;
