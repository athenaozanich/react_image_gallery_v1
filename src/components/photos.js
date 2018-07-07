import React from 'react';
import PropTypes from 'prop-types';

const Photos = props =>
  <div className="photo-container">
    <h2>Results</h2>
    <ul>
      {props.imgs.map((imgs, idx)=>
        <li key={idx}>
        <img src={imgs.imageUrl} alt={imgs.altText}/>
      </li>
      )}
    </ul>
  </div>;

  Photos.propTypes = {
    imgs: PropTypes.array.isRequired
  }
export default Photos;
