import * as styles from "./styles.module.scss"
import {Label} from "@mistek/freedom-ui";
import {Profile} from "../../entities/Profile";
import {observer} from "mobx-react-lite";

export const ProfileView = (props: Profile) => {
    return <div className={styles.profileViewContainer}>
            <div>
                <div>
                    <Label>Имя:</Label>
                    {props.firstName}
                </div>
                <div>
                    <Label>Фамилия:</Label>
                    {props.lastName}
                </div>
                <div>
                    <Label>Возраст:</Label>
                </div>
            </div>

            <div>
                <Label>Биография:</Label>
                {props.description}
            </div>
        </div>
}