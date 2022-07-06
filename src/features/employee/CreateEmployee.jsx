import { Add, Update } from '@mui/icons-material';
import { Checkbox } from '@mui/material';
import Button from '@mui/material/Button';
import { makeStyles } from "@mui/styles";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { EmployeeSaveMapper, EmployeeUpdateMapper } from '../../mapper/Employee';
import { updateEmployee, selectEmployee } from './EmployeeReducer';


const CreateEmployee = (props) => {
    const employeeList = useSelector(selectEmployee);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const classes = makeStyles({
        
    });
    const [updateIndex, setUpdateIndex] = useState();
    const [currentEmployee, setEmployee] = useState({
        name: {value: "", isRequired: true, isError: false, includeForSave: true},
        username: {value: "", isRequired: true, isError: false, includeForSave: true},
        password: {value: "", isRequired: true, isError: false, includeForSave: true},
        confirmPassword: {value: "", isRequired: true, isError: false},
        email: {value: "", isRequired: true, isError: false, includeForSave: true},
        phone: {value: "", isRequired: true, isError: false, includeForSave: true},
        isActive: {value: true, isRequired: false, isError: false, includeForSave: true}
    });

    useEffect(()=>{
        const parseQuery = window.location.pathname.split("/");
        if(parseQuery[2] !== undefined){
            for(let i=0; i<employeeList.length; i++){
                if(i == parseQuery[2]){
                    setUpdateIndex(i);
                    setEmployee(EmployeeUpdateMapper({...currentEmployee}, employeeList[i]));
                    break;
                }
            }
        }
    }, []);

    const onResetEmployee = () => {
        setEmployee(EmployeeUpdateMapper({...currentEmployee}, {named: "", username: "", password: "", emailId: "", role: "", location: "", isActive: true}));
    }

    const onEmployeeAdd = () => {
        let employeeSave = EmployeeSaveMapper(currentEmployee);
        let isPasswordField = false;
        let isValid = true;
        let currentEmpData = {...currentEmployee};
        const empObjKeys = Object.keys(currentEmpData);
        for(let empField in empObjKeys){
            isPasswordField = (empObjKeys[empField] === "password" || empObjKeys[empField] === "confirmPassword");
            if(currentEmpData[empObjKeys[empField]].isRequired && currentEmpData[empObjKeys[empField]].value){
                if(isPasswordField && currentEmpData["password"].value !== currentEmpData["confirmPassword"].value){
                    currentEmpData[empObjKeys[empField]].isError = true;
                    isValid = false;
                }else{
                    if(currentEmpData[empObjKeys[empField]].includeForSave) employeeSave[empObjKeys[empField]] = currentEmpData[empObjKeys[empField]].value;
                    currentEmpData[empObjKeys[empField]].isError = false;
                }
            }else{
                currentEmpData[empObjKeys[empField]].isError = true;
            }
        }
        setEmployee(currentEmpData);
        if(isValid) {
            dispatch(updateEmployee({data:employeeSave, index: updateIndex}));
            navigate("/", { replace: true });
        }
    }
    
    const onInputChange = (event, fieldName) => {
        let currentEmpData = {...currentEmployee};
        let currentFieldValue = "";
        if(event?.target && event.target.type === "checkbox"){
            currentFieldValue = event.target.checked;
        }
        else if(event?.target) currentFieldValue = event.target.value;

        if(currentEmpData[fieldName] ){
            currentEmpData[fieldName].value = currentFieldValue;
            currentEmpData[fieldName].isError = false;
        }
        setEmployee(currentEmpData);
    }
    return <div className="form-container">
        <div className="field-block">
            <lable className="field-label"> First Name</lable>
            <input id="name" type={"text"} value={currentEmployee.name.value} onChange={e=>onInputChange(e, "name")}/>
        </div>
        <div className="field-block">
            <lable className="field-label"> Username</lable>
            <input className={`field-option ${currentEmployee.username.isError?"field-error":""}`} id="username" type={"text"} value={currentEmployee.username.value} onChange={e=>onInputChange(e, "username")}/>
        </div>
        <div className="field-block">
            <lable className="field-label"> Create password</lable>
            <input className={`field-option ${currentEmployee.password.isError?"field-error":""}`} id="password" type={"password"} value={currentEmployee.password.value} onChange={e=>onInputChange(e, "password")}/>
        </div>
        <div className="field-block">
            <lable className="field-label"> Confirm password </lable>
            <input className={`field-option ${currentEmployee.confirmPassword.isError?"field-error":""}`} id="confirmpassword" type={"password"} value={currentEmployee.confirmPassword.value} onChange={e=>onInputChange(e, "confirmPassword")}/>
        </div>
        <div className="field-block">
            <lable className="field-label"> Email Address</lable>
            <input className={`field-option ${currentEmployee.email.isError?"field-error":""}`} id="emailid" type={"text"} value={currentEmployee.email.value} onChange={e=>onInputChange(e, "email")}/>
        </div>
        
        <div className="field-block">
            <lable className="field-label"> Active</lable>
            <Checkbox checked={currentEmployee.isActive.value} id="isactive" onChange={e=>onInputChange(e, "isActive")}/>
        </div>

        <div className="field-block inline-flex">
            {
                updateIndex !== undefined? <Button startIcon={<Update/>} sx={{marginRight: "5px"}} variant="contained" onClick={onEmployeeAdd}>Update</Button>: 
                        <Button variant="contained" color="success" id="add-employee" startIcon={<Add />} onClick={onEmployeeAdd}>Add Employee</Button>
            }
            
            <Button id="reset-employee" onClick={onResetEmployee}>Reset</Button>
        </div>
    </div>
}

export default CreateEmployee;