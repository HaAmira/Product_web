import React from 'react'
import './sidebar.css'
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import ViewQuiltIcon from '@mui/icons-material/ViewQuilt';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined'; import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SettingsSystemDaydreamIcon from '@mui/icons-material/SettingsSystemDaydream';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';

import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { DarkModeContext } from '../../mode/darkModeContext';

const Sidebar = () => {
    const { dispatch } = useContext(DarkModeContext);
    return (
        <div className='sidebar'>
            <div className='top'>
                <Link to="/" style={{ textDecoration: "none" }}>
                    <span className='logo'>ProductWeb</span>
                </Link>
            </div>
            <hr />
            <div className='center'>
                <ul className='center_first'>
                    <p className='centertitle'>MAIN</p>
                    <li>
                        <DashboardIcon />
                        <span className="centertopic">Dashboard</span>
                    </li>
                    <p className='centertitle'>LIST</p>
                    <Link to="/user" style={{ textDecoration: "none" }}>
                        <li>
                            <PersonOutlineIcon />
                            <span className="centertopic">User</span>
                        </li>
                    </Link>
                    <Link to="/products" style={{ textDecoration: "none" }}>
                        <li>
                            <Inventory2Icon />
                            <span className="centertopic">Products</span>
                        </li>
                    </Link>
                    <li>
                        <ViewQuiltIcon />
                        <span className="centertopic">Ordes</span>
                    </li>
                    <li>
                        <LocalShippingIcon />
                        <span className="centertopic">Delivery</span>
                    </li>
                    <p className='centertitle'>USEFUL</p>
                    <li>
                        <AssessmentOutlinedIcon />
                        <span className="centertopic">Status</span>
                    </li>
                    <li>
                        <NotificationsNoneIcon />
                        <span className="centertopic">Notification</span>
                    </li>
                    <p className='centertitle'>SERVICE</p>
                    <li>
                        <SettingsSystemDaydreamIcon />
                        <span className="centertopic">System Health</span>
                    </li>
                    <li>
                        <PsychologyOutlinedIcon />
                        <span className="centertopic">Logs</span>
                    </li>
                    <li>
                        <SettingsOutlinedIcon />
                        <span className="centertopic">Settings</span>
                    </li>
                    <p className='centertitle'>USER</p>
                    <li>
                        <AccountCircleOutlinedIcon />
                        <span className="centertopic">Profile</span>
                    </li>
                    <Link to="/login" style={{ textDecoration: "none" }}>
                        <li>
                            <ExitToAppOutlinedIcon />
                            <span className="centertopic">Logout</span>
                        </li>
                    </Link>
                </ul>
            </div>
            <div className='bottom'>
                <ul>
                    <li className='color_white' onClick={() => dispatch({ type: "LIGHT" })} ></li>
                    <li className='color_black' onClick={() => dispatch({ type: "DARK" })} ></li>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar