import React from 'react';
import {BrowserRouter} from "react-router-dom";
import {ToastProvider} from "@mistek/freedom-ui";
import {PublicRoute} from "./routes/PublicRoute";


const App = () => {
    return <>
        <ToastProvider>
            <BrowserRouter>
                <PublicRoute/>
            </BrowserRouter>
        </ToastProvider>
    </>
};

export default App;