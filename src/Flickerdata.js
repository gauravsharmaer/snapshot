import React ,{ useEffect,useState}from 'react'
import axios from "axios"
const Flickerdata = ({tag}) => {
  const[image,setImage]=useState([])


 
  useEffect(()=>{
   const fetchImages = async () => {
     const response = await axios.get(
       'https://api.flickr.com/services/rest/',
       {
         params: {
           method: 'flickr.photos.search',
           api_key: '3256eea912dfa8d372df61db910af57a',
           text: tag,
           format: 'json',
           nojsoncallback: 1,
         },
       }
     );
     setImage(response.data.photos.photo);
   };
   fetchImages()
   
  },[tag])
  return (<>
    <h4>{tag} pictures</h4>
          <div className='gallery' >
      {image.map((image) => (
      

     
        <img
         
          key={image.id}
          src={`https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}.jpg`}
          alt={image.title}
        />
      ),console.log(image))}
    </div>

    
    </> )
}

export default Flickerdata