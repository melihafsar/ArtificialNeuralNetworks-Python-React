import React,{useState} from 'react'
import axios from "axios";

function HomePage() {
  const [file, setFile] = useState(null);
  const [imageSource, setImageSource] = useState(null)

  const onInputChange = (e) => {
    setFile(e.target.files[0]);
  }

  const onFormSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('photo', file);
    // const config = {
    //   headers: {
    //     'content-type': 'multipart/form-data'
    //   }
    // };
    var result = await axios.post("http://localhost:8000/detect", {
      image: "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"
    })
    setImageSource(`data:image/jpeg;base64, ${result.data.image}`)
    console.log(result.data.image)
    //  formData, config)
    //   .then((response) => {
    //     alert("The file is successfully uploaded");
    //     console.log(response);
    //   }).catch((error) => {
    //     console.log(error);
    //   });
  }

  return (
    <div className="App">
      <form onSubmit={onFormSubmit}>
        <h1>Simple File Upload</h1>
        <input type="file" name='photo' onChange={onInputChange} />
        <button type="submit">Upload</button>
      </form>
      <img src={imageSource} alt="noenoen"></img>
    </div>
  );
}

export default HomePage