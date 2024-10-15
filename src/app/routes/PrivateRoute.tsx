import React, {ReactNode, Suspense} from "react";
import {Route, Routes} from "react-router-dom";
import {observer} from "mobx-react-lite";

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
    return props.children;
})