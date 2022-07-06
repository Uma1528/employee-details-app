import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useSelector, useDispatch } from 'react-redux';
import { deleteEmployee, selectEmployee, fetchEmployee } from './EmployeeReducer';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { Close, Update } from '@mui/icons-material';
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';

const EmployeeList = () =>{
    //const [empdata, setEmpdata] = useState([]);
    const employeeList = useSelector(selectEmployee);
    console.log('ggrrrr', employeeList);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        const getData = async() => {
            let response = await fetch('https://jsonplaceholder.typicode.com/users');
            let resdata = await response.json();
            //setEmpdata(resdata);
            dispatch(fetchEmployee(resdata));
        }
        getData();
        console.log("rendering....");
        
    }, []);

    return <div>
                <Link to={"/add"}><Button>Add Employee</Button></Link>
                {employeeList.length ? <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                        <TableCell>Employee Name</TableCell>
                        <TableCell>Email Address</TableCell>
                        <TableCell>Role</TableCell>
                        <TableCell>Location</TableCell>
                        <TableCell>Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {employeeList?.map((employee, index) => (
                        <TableRow
                            key={employee.name + employee.username}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                            {`${employee.name} ${employee.username}`}
                            </TableCell>
                            <TableCell>{employee.email}</TableCell>
                            <TableCell>{employee.phone}</TableCell>
                            <TableCell>
                                <Button id={`update${index}`} startIcon={<Update/>} sx={{marginRight: "5px"}} variant="contained" onClick={e=>navigate(`/add/${index}`)}>Update</Button>
                                <Button id={`delete${index}`} variant="outlined" color="error" startIcon={<Close/>} onClick={e=>dispatch(deleteEmployee(index))}>Remove</Button>
                            </TableCell>
                        </TableRow>
                        ))}
                    </TableBody>
                    </Table>
                </TableContainer> : <div className='center'>No data found</div>}
            </div>
};

export default EmployeeList;