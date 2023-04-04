// Uploads images to S3 and post image metadata to squarepixelAPI

import React, { useEffect, useState } from 'react'
import '../Styles/dropitem.css'
import AWS from 'aws-sdk';


export default function uploader() {
  const [url, setUrl] = useState(null);

  useEffect(() => {
    const s3 = new AWS.S3();
    const params = {
      Bucket: process.env.REACT_APP_BUCKET_NAME,
      Expires: 3600 
    };

    const url = s3.getSignedUrl('getObject', params);
    setUrl(url);
  }, []);

  console.log(process.env)

return (
  <>
    <div class="parent">
      <div class="uploadContainer">
        <div class="form-group">

          <br />
          <input type="file" class="form-control-file" id="inputButton" />
          <br />

         
        </div>
      </div>
    </div>

  </>
)
}
