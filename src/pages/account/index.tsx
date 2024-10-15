import {Flex} from "@mistek/freedom-ui";
import {AccountVerticalMenu} from "../../widgets/account-vertical-menu";
import * as styles from "./styles.module.scss"
import {ProfileCard} from "../../widgets/profile-card";

const Index = () => {
    return <Flex className={styles.accountPageContainer}>
        <AccountVerticalMenu/>
        <ProfileCard/>
    </Flex>
}

export default Index