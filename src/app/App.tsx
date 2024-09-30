import React, {Suspense} from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";


const App = () => {
    const RegistrationPage = React.lazy(() => import("../pages/registration/index"));

    return <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                <Route path="/" element={<RegistrationPage/>}/>
            </Routes>
        </Suspense>
    </BrowserRouter>
};

export default App;