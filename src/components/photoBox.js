import React from 'react';
import Img from './img';

const PhotoBox = props =>{
  const results = props;
  let pics;
  if (props){
      //load indivudual imgs
      pics = results.data.map(pic =>
        <Img data={pic} key={pic.id}/>
   );
  }
  return (
    //display for the collection of imgs
    <div className="photo-container">
      <ul>
        {pics}
      </ul>
    </div>
  )
}
export default PhotoBox;
