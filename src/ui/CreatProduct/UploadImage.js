import React, { useRef } from "react";
import S3 from "react-aws-s3";

function Upload() {
  const fileInput = useRef();
  const handleClick = (event) => {
    event.preventDefault();
    let file = fileInput.current.files[0];
    let newFileName = fileInput.current.files[0].name.replace(/\..+$/, "");
    const config = {
        bucketName: 'chiytest',
        region: 'us-east-2',
        accessKeyId: 'AKIAU7CGEG4CQ755C3C2',
        secretAccessKey: '+aKpjCQTZ3SlY+sSTOWSSnZ+yq9XsNe4rtNC8a1F',
    };
    const ReactS3Client = new S3(config);
    ReactS3Client.uploadFile(file, newFileName).then((data) => {
      console.log(data.location);
      if (data.status === 204) {
        console.log("success");
      } else {
        console.log("fail");
      }
    });
  };
  return (
    <>
      <form className='upload-steps' onSubmit={handleClick}>
        <label>
          Upload file:
          <input type='file' ref={fileInput} />
        </label>
        <br />
        <button type='submit'>Upload</button>
      </form>
    </>
  );
}

export default Upload;