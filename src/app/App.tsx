import React from 'react';
import {BrowserRouter} from "react-router-dom";
import {ToastProvider} from "@mistek/freedom-ui";
import {AuthRoute} from "./routes/AuthRoute";


const App = () => {
    return <>
        <ToastProvider>
            <BrowserRouter>
                <AuthRoute/>
            </BrowserRouter>
        </ToastProvider>
    </>
};

export default App;