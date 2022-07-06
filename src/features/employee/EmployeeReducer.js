import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = [];

const employeeReducer = createSlice({
    name: 'employee',
    initialState,
    reducers: {
        fetchEmployee: (state, action) => {
            //state.concat([...action.payload]);
            if(state.length === 0) state.push(...action.payload)
            console.log('trrrr', state);
        },
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

export const {updateEmployee, deleteEmployee, fetchEmployee} = employeeReducer.actions;

export const selectEmployee = (state) => {
    console.log('rediii', state);
    return state.employee;
}

export default employeeReducer.reducer;