import React from 'react';
//import PropTypes from 'prop-types';
let url='';
let title='';

const Img = props => {

  if(props){
      const photo = props.data;
      //set url and alt for imgs
      url=`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`;
      title=photo.title;
  }
   return(
    //inject url and alt
    <li>
      <img src={url} alt={title} />
    </li>
   )

}

export default Img;
