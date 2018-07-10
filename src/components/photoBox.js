import React from 'react';
import Img from './img';

const PhotoBox = props =>{
  const results = props;
  let pics;
  if (props){
      pics = results.data.map(pic =>
        <Img data={pic} key={pic.id}/>
   );
  }
  return (
      <div className="photo-container">
      <ul>
        {pics}
      </ul>
    </div>
  )
}
export default PhotoBox;
