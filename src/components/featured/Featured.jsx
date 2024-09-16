import React from 'react'
import './featured.css'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const Featured = () => {
    return (
        <div className='featured'>
            <div className='top'>
                <h1 className='title'>Total Revenue</h1>
                <MoreVertOutlinedIcon fontSize='small' />
            </div>
            <div className='bottom'>
                <div className='featuredChart'>
                    <CircularProgressbar value={60} text={'60%'} strokeWidth={3} className='circularbar' />
                </div>
                <p className='title'>Total sales made today</p>
                <p className='amount'>$420</p>
                <p className='desc'>Previous transactions processing. Last payment may not be included</p>
                <div className='summary'>
                    <div className='item'>
                        <div className='itemTitle'>Target</div>
                        <div className='itemResult positive'>
                            <KeyboardArrowDownOutlinedIcon fontSize='small'/>
                            <div className='resultAmount'>$12.4k</div>
                        </div>
                    </div>
                    <div className='item'>
                        <div className='itemTitle'>Last week</div>
                        <div className='itemResult negative'>
                            <KeyboardArrowUpIcon fontSize='small'/>
                            <div className='resultAmount'>$12.4k</div>
                        </div>
                    </div>
                    <div className='item'>
                        <div className='itemTitle'>Last Month</div>
                        <div className='itemResult positive'>
                            <KeyboardArrowDownOutlinedIcon fontSize='small'/>
                            <div className='resultAmount'>$12.4k</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Featured