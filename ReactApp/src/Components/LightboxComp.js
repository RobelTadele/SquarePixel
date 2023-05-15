import React, { useState } from 'react'
import Lightbox from "yet-another-react-lightbox";
import PhotoAlbum from "react-photo-album";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import "yet-another-react-lightbox/styles.css";

export const LightboxComp = (props) => {
    
    const [index, setIndex] = useState(-1);
    return (
        <>
            <PhotoAlbum photos={props.imageSrc} layout={props.layout} columns={props.columns} 
                        targetRowHeight={150} onClick={({ index }) => setIndex(index)} />
            <Lightbox
                slides={props.imageSrc}
                open={index >= 0}
                index={index}
                close={() => setIndex(-1)}
                // enable optional lightbox plugins
                plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}

            />
        </>
    )
}
