import React,{useState} from 'react'
import axios from "axios";

function HomePage() {
  const [file, setFile] = useState(null);

  const onInputChange = (e) => {
    setFile(e.target.files[0]);
  }

  const onFormSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('photo', file);
    const config = {
      headers: {
        'content-type': 'multipart/form-data'
      }
    };
    axios.post("http://localhost:5000/upload", formData, config)
      .then((response) => {
        alert("The file is successfully uploaded");
        console.log(response);
      }).catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className="App">
      <form onSubmit={onFormSubmit}>
        <h1>Simple File Upload</h1>
        <input type="file" name='photo' onChange={onInputChange} />
        <button type="submit">Upload</button>
      </form>
    </div>
  );
}

export default HomePage
