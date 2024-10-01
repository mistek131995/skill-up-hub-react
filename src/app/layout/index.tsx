import {Outlet} from "react-router-dom";
import {TopMenu} from "../../widgets/top-menu";

export const Layout = () => {
    return <>
        <TopMenu/>
        <Outlet/>
    </>
}