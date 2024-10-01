import {Outlet} from "react-router-dom";
import {TopMenu} from "../../widgets/top-menu";
import "./styles.scss"

export const Layout = () => {
    return <>
        <TopMenu/>
        <Outlet/>
    </>
}