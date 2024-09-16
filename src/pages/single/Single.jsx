import React from 'react'
import './single.css'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import Chart from '../../components/chart/Chart'
import Table from '../../components/table/Table'
import { useLocation } from 'react-router-dom';

const useSearchParams = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  return searchParams;

};

const Single = () => {

  const searchParams = useSearchParams();
  const name = searchParams.get('name');
  const images = searchParams.get('images');
  const email = searchParams.get('email');
  console.log("Name:- "+ name)
  console.log("image:- "+ images)
  console.log("email:- "+ email)

  return (
    <div className='single'>
      <Sidebar/>
      <div className='singleContainer'>
        <Navbar/>
        <div className='top'>
          <div className='left'>
            <div className='topLeft'>
              <p className='information'>Information</p>
              <p className='edit'>Edit</p>
            </div>
            <div className='bottomLeft'>
              <img className='profileImg' src={`${images===""?"https://www.pngkey.com/png/full/52-523516_empty-profile-picture-circle.png" : images}`} alt=''></img>
              <div className='profileDetail'>
                <h3 className='profileName'>{name}</h3>
                <div className='profileData'>
                  <p className='email Data'>Email: {email}</p>
                  <p className='phone Data'>Phone: +91 954222844</p>
                  <p className='address Data'>Address: H-30 Nihal Vihar Noida, New Delhi</p>
                  <p className='country Data'>Country: India</p>
                </div>
              </div>
            </div>
          </div>
          <div className='right'>
            <Chart aspect={3/1} title="User Spending (Last 6 Month)"/>
          </div>
        </div>
        <div className='bottom'>
        <p className='information'>Last Transaction</p>
          <Table/>
        </div>
      </div>
    </div>
  )
}

export default Single