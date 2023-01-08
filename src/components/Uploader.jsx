import React, { useState } from 'react'
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
    <>

      <div className='uploader-container'>
        <div className='picture-container'>
          <div className="picture-box">
            {
              file ?
                <img className='picture' src={URL.createObjectURL(file)} alt="requestPicture" />
                :
                <div className='unknown-picture' ></div>

            }
          </div>
          <div className="picture-box">
            {
              imageSource ?
                <img className='picture' src={imageSource} alt="responsePicture" />
                :
                <div className='unknown-picture'>
                </div>
            }

          </div>


        </div>
        <br />
        <div className="picture-container">
          
          <form onSubmit={onFormSubmit}>
            
            <h3 style={{color : "white"}}>Yüklemek İstediğiniz Dosyayı Seçiniz</h3>
            <br />
            <input style={{color: "white", fontSize: "1em"}}type="file" name='photo' onChange={onInputChange} />
            <button type="submit" className='button-upload'>Yükle</button>
          </form>
        </div>
      </div>

    </>
  );
}

export default Uploder

//<img className='picture' src={AfsarPhoto} alt="requestPicture" />

//  <img className='picture' src={AfsarPhoto} alt="responsePicture" />