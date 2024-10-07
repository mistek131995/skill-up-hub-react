import {VerticalMenu, VerticalMenuItem} from "@mistek/freedom-ui";
import * as styles from "./styles.module.scss";

export const AccountVerticalMenu = () => {
    return <VerticalMenu className={styles.accountVerticalMenuContainer}>
        <VerticalMenuItem>Профиль</VerticalMenuItem>
        <VerticalMenuItem>Баланс</VerticalMenuItem>
        <VerticalMenuItem>Безопасность</VerticalMenuItem>
        <VerticalMenuItem>Выход</VerticalMenuItem>
    </VerticalMenu>
}