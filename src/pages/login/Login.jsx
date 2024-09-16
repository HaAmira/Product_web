import React , { useState }from 'react'
import './login.css'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';

const Login = ({ inputs, title }) => {
  const [file, setFile] = useState("");
  console.log(file)
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
            <img alt='' src={file ? URL.createObjectURL(file) : 'https://tse2.mm.bing.net/th?id=OIP.Fkb2hghQdTwQQ0s63p-ONgAAAA&pid=Api&P=0&h=220'}></img>
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

export default Login