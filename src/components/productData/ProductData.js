import React from 'react'
import { userRows } from '../../ProductsDatasource';
import './productData.css'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';


const Datatable = () => {

    return (
        <div className='datatable'>
            <div className='table'>
                <div className='addHead'>
                    Add New Product
                    <Link to="/products/new" className='link'>
                        Add New
                    </Link>
                </div>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell className='tablecell'>ID</TableCell>
                                <TableCell className='tablecell'>User</TableCell>
                                <TableCell className='tablecell'>Amount</TableCell>
                                <TableCell className='tablecell'>Quantity</TableCell>
                                <TableCell className='tablecell'>Status</TableCell>
                                <TableCell className='tablecell'>Action</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {userRows.map((row) => (
                                <TableRow key={row.id}>
                                    <TableCell className='tablecell'>{row.id}</TableCell>
                                    <TableCell className='tablecell1'>
                                        <div className='cellWrapper'><img src={row.img} alt="" className='image'></img>
                                            {row.username}
                                        </div>
                                    </TableCell>
                                    <TableCell className='tablecell'>{row.amount}</TableCell>
                                    <TableCell className='tablecell'>{row.quantity}</TableCell>
                                    <TableCell className='tablecell'>
                                        <span className={`${row.status}`}>{row.status}</span>
                                    </TableCell>
                                    <TableCell className='cellaction'>
                                        <div className={`${row.status}`=== "Outstock" ? 'outclass' : 'viewButton'}>Status</div>
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