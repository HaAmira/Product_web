import React from 'react'
import './products.css'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import ProductData from '../../components/productData/ProductData'

const list = () => {
  return (
    <div className='list'>
      <Sidebar />
      <div className='listContainer'>
        <Navbar />
        <ProductData />
      </div>
    </div>
  )
}

export default list