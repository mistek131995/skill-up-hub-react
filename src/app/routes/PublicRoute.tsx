import {Route, Routes} from "react-router-dom";
import React, {Suspense} from "react";
import {Layout} from "../layout";
import {observer} from "mobx-react-lite";

export const PublicRoute = () => {
    const IndexPage = React.lazy(() => import("../../pages/index/index"));
    const RegistrationPage = React.lazy(() => import("../../pages/registration/index"));
    const LoginPage = React.lazy(() => import("../../pages/login/index"));

    return <Suspense fallback={<div>Loading...</div>}>
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route path="/" element={<IndexPage/>}/>
                <Route path="/registration" element={<GuestRoute>
                    <RegistrationPage/>
                </GuestRoute>}/>
                <Route path="/login" element={<GuestRoute>
                    <LoginPage/>
                </GuestRoute>}/>
            </Route>
        </Routes>
    </Suspense>
}

const GuestRoute = observer((props: {children: React.ReactNode}) => {
    return props.children;
})