import {TopMenu as FTopMenu, TopMenuDropdownItem, TopMenuItem} from "@mistek/freedom-ui"
import {Link} from "react-router-dom";
import * as styles from "./styles.module.scss";

export const TopMenu = () => {
    return <FTopMenu className={styles.test}>
        <div>
            <Link to="/">
                <TopMenuItem title="Главная"/>
            </Link>
            <TopMenuItem title="Link 1"/>
            <TopMenuItem title="Link 2"/>
            <TopMenuItem title="Link 3"/>
            <TopMenuDropdownItem title="Dropdown 1">
                <TopMenuItem title="Link 1"/>
                <TopMenuItem title="Link 2"/>
                <TopMenuItem title="Link 3"/>
            </TopMenuDropdownItem>
        </div>
        <div>
            <TopMenuDropdownItem title="Аккаунт">
                <Link to="/login">
                    <TopMenuItem title="Вход"/>
                </Link>
                <Link to="/registration">
                    <TopMenuItem title="Регистрация"/>
                </Link>
            </TopMenuDropdownItem>
        </div>
    </FTopMenu>
}