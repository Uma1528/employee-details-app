import { combineReducers, configureStore } from '@reduxjs/toolkit';
import employeeReducer from '../features/employee/EmployeeReducer';

const reducer = combineReducers({
  employee: employeeReducer
});

export const store = configureStore({
  reducer
});
