import React from 'react';
import {BrowserRouter} from "react-router-dom";
import {ToastProvider} from "@mistek/freedom-ui";
import {PublicRoute} from "./routes/PublicRoute";
import {PrivateRoute} from "./routes/PrivateRoute";


const App = () => {
    return <>
        <ToastProvider>
            <BrowserRouter>
                <PublicRoute/>
                <PrivateRoute/>
            </BrowserRouter>
        </ToastProvider>
    </>
};

export default App;