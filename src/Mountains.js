// import React ,{ useEffect,useState}from 'react'
// import axios from "axios"
import Flickerdata from "./Flickerdata"
const Mountains = () => {
  // const[image,setImage]=useState([])


 
  // useEffect(()=>{
  //  const fetchImages = async () => {
  //    const response = await axios.get(
  //      'https://api.flickr.com/services/rest/',
  //      {
  //        params: {
  //          method: 'flickr.photos.search',
  //          api_key: '3256eea912dfa8d372df61db910af57a',
  //          tags: 'Mountains',
  //          format: 'json',
  //          nojsoncallback: 1,
  //        },
  //      }
  //    );
  //    setImage(response.data.photos.photo);
  //  };
  //  fetchImages()
  //  console.log(image)
  // },[])
  return (
    <Flickerdata tag="mountain"/>
    //       <div className='gallery' >
    //   {image.map((image) => (
    //     <img
    //       key={image.id}
    //       src={`https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}.jpg`}
    //       alt={image.title}
    //     />
    //   ))}
    // </div>


    
  )
}

export default Mountains