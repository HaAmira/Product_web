import React from 'react'
import './home.css'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import Widgets from '../../components/widgets/Widgets'
import Featured from '../../components/featured/Featured'
import Chart from '../../components/chart/Chart'
import Table from '../../components/table/Table'

const Home = () => {
  return (
    <div className='home-app'>
        <Sidebar/>
        <div className='homecontainer'>
            <Navbar/>
            <div className='widgets'>
              <Widgets type="user"/>
              <Widgets type="order"/>
              <Widgets type="erarning"/>
              <Widgets type="balance"/>
            </div>
            <div className='charts'>
              <Featured/>
              <Chart aspect={2/1} title="User Spending (Last 6 Month)"/>
            </div>
            <div className='lsitContainer'>
              <div className='listTitle'>Latest Transaction</div>
              <Table/>
            </div>
        </div>
    </div>
  )
}

export default Home