import React, { useState } from 'react'
import './new.css'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';

const New = ({ inputs, title }) => {
  const [file, setFile] = useState("");
  return (
    <div className='new'>
      <Sidebar />
      <div className='newContainer'>
        <Navbar />
        <div className='top'>
          <h1>{title}</h1>
        </div>
        <div className='bottom'>
          <div className='left'>
            <img src={file ? URL.createObjectURL(file) : 'https://tse2.mm.bing.net/th?id=OIP.Fkb2hghQdTwQQ0s63p-ONgAAAA&pid=Api&P=0&h=220'} alt=''></img>
          </div>
          <div className='right'>
            <form>
              <div className='formInput'>
                <label htmlFor='file'>Image: <DriveFolderUploadIcon className='Icon' /></label>
                <input type='file' id='file' onChange={e=>setFile(e.target.files[0])} style={{ display: 'none' }}></input>
              </div>
              {inputs.map((input) => {
                return (
                  <div className='formInput' key={input.id}>
                    <label>{input.label}</label>
                    <input type={input.type} className='Name' placeholder={input.placeholder}></input>
                  </div>
                )
              })}
              <button>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default New