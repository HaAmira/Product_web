import React from 'react'
import './navbar.css'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import ZoomInMapOutlinedIcon from '@mui/icons-material/ZoomInMapOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='wrapper'>
                <div className='search'>
                    <input type="search" placeholder='search'></input>
                    <SearchOutlinedIcon />
                </div>
                <div className='items'>
                    <div className='item'>
                        <LanguageOutlinedIcon className='icons'/>
                        English
                    </div>
                    <div className='item'>
                        <DarkModeOutlinedIcon className='icons'/>
                    </div>
                    <div className='item'>
                        <ZoomInMapOutlinedIcon className='icons'/>
                    </div>
                    <div className='item'>
                        <NotificationsOutlinedIcon className='icons'/>
                        <div className='notification'>2</div>
                    </div>
                    <div className='item'>
                        <ChatBubbleOutlineOutlinedIcon className='icons'/>
                        <div className='notification'>3</div>
                    </div>
                    <div className='item'>
                        <ListOutlinedIcon className='icons'/>
                    </div>
                    <div className='item'>
                        <img height="30px" width="30px" src='https://images.unsplash.com/photo-1552085473-429730a886d1?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEyMDd9' alt=''></img>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar