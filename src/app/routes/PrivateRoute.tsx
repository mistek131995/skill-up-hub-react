import React, {ReactNode, Suspense, useEffect} from "react";
import {Navigate, Route, Routes} from "react-router-dom";
import {observer} from "mobx-react-lite";
import {authState} from "../../features/auth-store/authStore";
import {Layout} from "../layout";

export const PrivateRoute = () => {
    const AccountPage = React.lazy(() => import("../../pages/account/index"));

    return <Suspense fallback={<div>Loading...</div>}>
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route path="/account" element={<UserRoute>
                    <AccountPage/>
                </UserRoute>}/>
            </Route>
        </Routes>
    </Suspense>
}

const UserRoute = observer((props: {children: ReactNode}) => {
    if(authState.token === "")
        return <Navigate to="/login"/>

    return props.children;
})