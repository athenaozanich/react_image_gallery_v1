import React from 'react';
import Img from './img';

const PhotoBox = props =>{
  const response = props;
  let imgs;
  if (props){
    imgs = response.data.map(img => <Img data={img} key={img.id}/> );
  }
  return (
    //display for the collection of imgs
    <div className="photo-container">
      <ul>
        {imgs}
      </ul>
    </div>
  );
}
export default PhotoBox;
