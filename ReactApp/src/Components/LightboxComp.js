import React, { useState } from 'react'
import Lightbox from "yet-another-react-lightbox";
import {PhotoAlbum, RenderPhoto} from "react-photo-album";
import Captions from "yet-another-react-lightbox/plugins/captions";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import "yet-another-react-lightbox/styles.css";

export const LightboxComp = (props) => {
    
    const [index, setIndex] = useState(-1);
    const imageData = props.imageObj
    const displayInfo = []

    imageData.map((data)=>{
        const val = {
            src: `${data.src}`,
            title: '',
            description: `${data.tags}`
        }
        displayInfo.push(val)

    })

    console.log(displayInfo)
    return ( 
        <>
            <PhotoAlbum photos={props.imageObj} layout={props.layout} columns={props.columns} 
                        targetRowHeight={200} onClick={({ index }) => setIndex(index)} />
            <Lightbox
                slides={displayInfo}
                open={index >= 0}
                index={index}
                close={() => setIndex(-1)}
                // enable optional lightbox plugins
                plugins={[Captions, Fullscreen, Slideshow, Thumbnails, Zoom]}
            />
        </>
    )
}
