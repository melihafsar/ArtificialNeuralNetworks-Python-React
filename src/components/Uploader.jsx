import React, { useState } from 'react'
import axios from "axios";
import { getAuth } from 'firebase/auth';
import { toast } from 'react-toastify';
import { errorAlert, infoAlert } from '../helpers/AlertHelper';

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
    if (e.target.files[0]===undefined || e.target.files[0]===null) {
      setImageSource(null);
    }
  }

  const onDownload = () => {
    if (imageSource) {
      const link = document.createElement('a');
      link
        .setAttribute('download', 'picture.jpeg');
      link
        .setAttribute('href', imageSource);
      link
        .click();
    }
  }

  const onFormSubmit = async (e) => {
    e.preventDefault();
    if (file === null || file === undefined) {
      errorAlert("Lütfen bir resim seçiniz.");
    }
    else{
          const id = toast.loading("Lütfen bekleyiniz...");

          var start = new Date().getTime();
          
          const base64 = await toBase64(file);
          const token = await getAuth().currentUser.getIdToken()
          var result = await axios.post("https://api.marun.tk/detect", {
            image: base64,
          }, {
            headers: {
              'Authorization': `Bearer ${token}`
            }
          })
          setImageSource(`data:image/jpeg;base64, ${result.data.image}`);
      
          if (result.data.error) {
            toast.update(id, { render: "Başarılı.", type: "error", isLoading: false, closeOnClick: true, autoClose: 4000 });
          }
          else {
            toast.update(id, { render: "Başarılı.", type: "success", isLoading: false, closeOnClick: true, autoClose: 4000 });
          }

          var end = new Date().getTime();
          var time = end - start;
          //ms to s
          time = time / 1000;
          infoAlert("İşlem süresi: " + time + " s");
          
    }
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
            <h3 style={{ color: "white" }}>Yüklemek İstediğiniz Dosyayı Seçiniz</h3>
            <br />
            <label className = "custom-file-upload">
              <input type="file" name='photo' onChange={onInputChange}/>
              Resim Seçin
            </label>
            <button type="submit" className='button-upload'>Sisteme Yükleyiniz</button>
            {imageSource &&
              <button onClick={onDownload} className='button-download'>
                <a href={imageSource} style={{ textDecoration: "none" }} download="picture.jpeg">İndir</a>
              </button>
            }
          </form>
        </div>
      </div>
    </>
  );
}

export default Uploder
