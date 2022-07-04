import { fireEvent, render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../../app/store';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import EmployeeList from '../EmployeeList';

describe("Employee List", ()=>{
    it("render Employee list element with click on update", ()=>{
        const {container} = render(
            <Provider store={store}>
                <BrowserRouter>
                    <Routes>
                        <Route path="*" element= {<EmployeeList />}/>
                    </Routes>
                </BrowserRouter>
        </Provider>);
        fireEvent.click(container.querySelector("#update1"));
    });

    it("render Employee list element with click on delete", ()=>{
        const {container} = render(
            <Provider store={store}>
                <BrowserRouter>
                    <Routes>
                        <Route path="*" element= {<EmployeeList />}/>
                    </Routes>
                </BrowserRouter>
        </Provider>);
        fireEvent.click(container.querySelector("#delete1"));
    });

});