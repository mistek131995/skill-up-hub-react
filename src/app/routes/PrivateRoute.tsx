import React, {ReactNode, Suspense} from "react";
import {Navigate, Route, Routes} from "react-router-dom";
import {observer} from "mobx-react-lite";
import {authState} from "../../features/auth-store/authStore";

export const PrivateRoute = () => {
    const AccountPage = React.lazy(() => import("../../pages/account/index"));

    return <Suspense fallback={<div>Loading...</div>}>
        <Routes>
            <Route path="/account" element={<UserRoute>
                <AccountPage/>
            </UserRoute>}/>
        </Routes>
    </Suspense>
}

const UserRoute = observer((props: {children: ReactNode}) => {

    if(authState.token === "")
        return <Navigate to="/login"/>

    return props.children;
})