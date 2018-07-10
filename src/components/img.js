import React from 'react';
//import PropTypes from 'prop-types';
let url='';
let title='';

const Img = props => {

  if(props){
      const photo = props.data;
      url=`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`;
      title=photo.title;
  }
   return(
      <li>
        <img src={url} alt={title} />
      </li>
   )

}

export default Img;
