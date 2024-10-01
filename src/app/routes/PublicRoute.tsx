import {Route, Routes} from "react-router-dom";
import React, {Suspense} from "react";
import {Layout} from "../layout";

export const PublicRoute = () => {
    const IndexPage = React.lazy(() => import("../../pages/index/index"));
    const RegistrationPage = React.lazy(() => import("../../pages/registration/index"));
    const LoginPage = React.lazy(() => import("../../pages/login/index"));

    return <Suspense fallback={<div>Loading...</div>}>
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route path="/" element={<IndexPage/>}/>
                <Route path="/registration" element={<RegistrationPage/>}/>
                <Route path="/login" element={<LoginPage/>}/>
            </Route>
        </Routes>
    </Suspense>

}