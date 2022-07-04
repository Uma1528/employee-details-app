import { fireEvent, render } from '@testing-library/react';
import CreateEmployee from '../CreateEmployee';
import { Provider } from 'react-redux';
import { store } from '../../../app/store';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from '../../../App';

describe("Create Employee", ()=>{
    beforeEach(() => {
        window.location = {
            pathname: "/add/0"
        }
    });
    it("render CreateEmployee element", ()=>{
        const elem = render(
            <Provider store={store}>
                <BrowserRouter>
                    <Routes>
                        <Route path="*" element= {<CreateEmployee />}/>
                    </Routes>
                </BrowserRouter>
        </Provider>);
    });

    it("Add employee click event", ()=>{
        const {container} = render(
            <Provider store={store}>
                <BrowserRouter>
                    <Routes>
                        <Route path="*" element= {<CreateEmployee />}/>
                    </Routes>
                </BrowserRouter>
        </Provider>);

        fireEvent.click(container.querySelector("#add-employee"));
    });

    it("Reset employee click event", ()=>{
        const {container} = render(
            <Provider store={store}>
                <BrowserRouter>
                    <Routes>
                        <Route path="*" element= {<CreateEmployee />}/>
                    </Routes>
                </BrowserRouter>
        </Provider>);

        fireEvent.click(container.querySelector("#reset-employee"), {target: {value: "test"}});
    });
    it("Input change value", ()=>{
        const {container} = render(
            <Provider store={store}>
                <BrowserRouter>
                    <Routes>
                        <Route path="*" element= {<CreateEmployee />}/>
                    </Routes>
                </BrowserRouter>
        </Provider>);

        fireEvent.change(container.querySelector("#firstname"), {target: {value: "test"}});
        
        
    });

    it("is Active change value", ()=>{
        const {container} = render(
            <Provider store={store}>
                <BrowserRouter>
                    <Routes>
                        <Route path="*" element= {<CreateEmployee />}/>
                    </Routes>
                </BrowserRouter>
        </Provider>);

        fireEvent.change(container.querySelector("#firstname"), {target: {checked: true, type: "checkbox"}});
    });
})
