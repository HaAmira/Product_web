import React from 'react'
import { userRows } from '../../Datatablesource';
import { useNavigate } from 'react-router-dom';
import './datatable.css'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';


const Datatable = () => {
    const navigate = useNavigate();
    const handleButtonClick = (datato,image,mail) => {
        const dataToSend = { name: datato, images: image, email: mail};
        const searchParams = new URLSearchParams(dataToSend);
        const url='/user/test?' + searchParams.toString()
        navigate(url);
        console.log(url)
    };

    return (
        <div className='datatable'>
            <div className='table'>
                <div className='addHead'>
                    Add New User
                    <Link to="/user/new" className='link'>
                        Add New
                    </Link>
                </div>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell className='tablecell'>ID</TableCell>
                                <TableCell className='tablecell'>User</TableCell>
                                <TableCell className='tablecell'>Email</TableCell>
                                <TableCell className='tablecell'>Age</TableCell>
                                <TableCell className='tablecell'>Status</TableCell>
                                <TableCell className='tablecell'>Action</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {userRows.map((row) => (
                                <TableRow key={row.id}>
                                    <TableCell className='tablecell'>{row.id}</TableCell>
                                    <TableCell className='tablecell1'>
                                        <div className='cellWrapper'>{row.img==="" ? <AccountCircleIcon/> : <img src={row.img} alt="" className='image'></img>}
                                            {row.username}
                                        </div>
                                    </TableCell>
                                    <TableCell className='tablecell'>{row.email}</TableCell>
                                    <TableCell className='tablecell'>{row.age}</TableCell>
                                    <TableCell className='tablecell'>
                                        <span className={`${row.status}`}>{row.status}</span>
                                    </TableCell>
                                    <TableCell className='cellaction'>
                                        <div className='viewButton'  onClick={()=>handleButtonClick(row.username,row.img,row.email)} >
                                            View
                                        </div>
                                        <div className='deleteButton'>Delete</div>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </div>

    )
}

export default Datatable;