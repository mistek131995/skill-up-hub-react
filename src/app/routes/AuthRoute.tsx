import {Route, Routes} from "react-router-dom";
import React, {Suspense} from "react";

export const AuthRoute = () => {
    const RegistrationPage = React.lazy(() => import("../../pages/registration/index"));
    const LoginPage = React.lazy(() => import("../../pages/login/index"));

    return <Suspense fallback={<div>Loading...</div>}>
        <Routes>
            <Route path="/" element={<RegistrationPage/>}/>
            <Route path="/login" element={<LoginPage/>}/>
        </Routes>
    </Suspense>

}