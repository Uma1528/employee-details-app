import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import { store } from './app/store';

test("render App element", ()=>{
    const elem = render(
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route path="*" element= {<App />}/>
                </Routes>
            </BrowserRouter>
    </Provider>);
});