import React from 'react';

//initialize url and title with empty string
let url='';
let title='';

const Img = props => {

  if(props){
    let img = props.data;
    //set url and alt for imgs
    url=`https://farm${img.farm}.staticflickr.com/${img.server}/${img.id}_${img.secret}.jpg`;
    title=img.title;
  }
  //inject url and alt
  return(<li> <img src={url} alt={title} /> </li>);
}

export default Img;
