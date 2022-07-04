import { fireEvent, render } from '@testing-library/react';
import { Provider } from 'react-redux';
// import { store } from '../../../app/store';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import App from '../../../App';
import Headerview from '../Headerview';

it("render CreateEmployee element", ()=>{
    
    const {container} = render(
        // <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route path="*" element= {<Headerview />}/>
                </Routes>
            </BrowserRouter>
    // </Provider>
    );
    fireEvent.click(container.querySelector("#header-link"));
});