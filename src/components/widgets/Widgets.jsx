import React from 'react'
import './widgets.css'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import LocalGroceryStoreOutlinedIcon from '@mui/icons-material/LocalGroceryStoreOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';

const Widgets = ({type}) => {
    let data;
    const diff=20;

    switch (type){
        case "user":
            data = {
                title: "USERS",
                isMoney: false,
                link: "see all users",
                icon: <PersonOutlineIcon className='icon' style={{color: "crimson", backgroundColor: "rgba(255, 0, 0, 0.2)"}}/>
            }
            break;
        case "order":
            data = {
                title: "ORDER",
                isMoney: false,
                link: "view all orders",
                icon: <LocalGroceryStoreOutlinedIcon className='icon' style={{color: "goldenrod", backgroundColor: "rgba(218, 165, 32, 0.2)"}}/>
            }
            break;
        case "erarning":
            data = {
                title: "ERARNING",
                isMoney: true,
                link: "view all erarning",
                icon: <MonetizationOnOutlinedIcon className='icon' style={{color: "green", backgroundColor: "rgba(0, 128, 0, 0.2)"}}/>
            }
            break;
        case "balance":
            data = {
                title: "BALANCE",
                isMoney: true,
                link: "see details",
                icon: <AccountBalanceWalletOutlinedIcon className='icon' style={{color: "purple", backgroundColor: "rgba(128, 0, 128, 0.2)"}}/>
            }
            break;
    }
  return (
    <div className='widget'>
        <div className='left'>
              <span className='title'>{data.title}</span>
              <span className='counter'>{data.isMoney && "$"} 100</span>
              <span className='link'>{data.link}</span>
        </div>
        <div className='right'>
            <div className='percentage positive'>
            <KeyboardArrowUpIcon/>
                {diff} %
            </div>
            {data.icon}
        </div>
    </div>
  )
}

export default Widgets