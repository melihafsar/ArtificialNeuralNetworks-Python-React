import React, {useState} from 'react'
import axios from "axios";
import { getAuth } from 'firebase/auth';

function Uploder() {
    const [file, setFile] = useState(null);
    const [imageSource, setImageSource] = useState(null)

    const toBase64 = file => new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
  
    const onInputChange = (e) => {
      setFile(e.target.files[0]);
    }
  
    const onFormSubmit = async (e) => {
      e.preventDefault();
      
      const base64 = await toBase64(file);

      const token = await getAuth().currentUser.getIdToken()

      var result = await axios.post("http://localhost:8000/detect", {
        image: base64,
      }, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      setImageSource(`data:image/jpeg;base64, ${result.data.image}`)
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

export default Uploder
