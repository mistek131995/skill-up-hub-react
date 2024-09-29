import {RegistrationForm} from "../../widgets/registration-form";
import {AlignmentItems, Flex, JustifyContent} from "@mistek/freedom-ui";
import * as styles from "./styles.module.scss";

export const Registration = () => {
    return <Flex className={styles.container} justifyContent={JustifyContent.center} alignItems={AlignmentItems.center}>
        <RegistrationForm/>
    </Flex>
}