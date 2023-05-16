import { useEffect, useState } from 'react'
import axios from 'axios';

// Fetches API Images with src and size limit
// default is all pass limit to get n number of items
export const ApiFetch = ({src, limit}) => {
    const [image, setimageObjects] = useState([])

    if (limit != -1) src = src + `/limit?${limit}`
    
    useEffect(() =>{ 
        axios
        .get(src + "")
        .then(response =>setimageObjects(response.data))
        .catch(err=>console.log(err))
    }, [])

    const imageObj = []
    image.map(item=>{
        
    // converting objects to photoalbum specified objects
    const value = {
        src : item.imageURL, 
        width: item.width, 
        height:item.height,
        tags: item.tags
        
    }
    imageObj.push(value)
})
   return imageObj
}


