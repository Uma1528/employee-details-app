import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = [
                        {firstName: "Prem", lastName: "Kumar", username: "premkumar", password: "", emailId: "prem.kumar@gmail.com", role: "Technical Lead", location: "Chennai", isActive: true},
                        {firstName: "Ravi", lastName: "Kumar", username: "ravikumar", password: "", emailId: "ravi.kumar@gmail.com", role: "CEO", location: "Chennai", isActive: true},
                        {firstName: "Selva", lastName: "Kumar", username: "selvakumar", password: "", emailId: "selva.kumar@gmail.com", role: "Associate", location: "Bangalore", isActive: true},
                        {firstName: "Prakash", lastName: "Raj", username: "prakashraj", password: "", emailId: "prakash.raj@gmail.com", role: "Software Engineer", location: "Hyderabad", isActive: true},
                     ];

const employeeReducer = createSlice({
    name: 'employee',
    initialState,
    reducers: {
        updateEmployee: (state, action) => {
            const {index, data} = action.payload;
            if(index !== undefined) state.splice(index, 1, data);
            else state.push(data);
        },
        deleteEmployee: (state, action) => {
            state.splice(action.payload,1);
        }
    },
});

export const {updateEmployee, deleteEmployee} = employeeReducer.actions;

export const selectEmployee = (state) => {
    return state.employee;
}

export default employeeReducer.reducer;