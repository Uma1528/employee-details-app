import React from 'react';
import './App.css';
import EmployeeList from './features/employee/EmployeeList';
import CreateEmployee from './features/employee/CreateEmployee';
import { useRoutes } from "react-router-dom";
import Headerview from './features/Headerview';

function App() {
  return (
    <div className="App">
        <Headerview/>
        {useRoutes([
            { path: "/", element: <EmployeeList /> },
            { path: "/add", element: <CreateEmployee /> },
            { path: "/add/:id", element: <CreateEmployee /> },
        ])}
    </div>
  );
}

export default App;
