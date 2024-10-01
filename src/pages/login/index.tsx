import {LoginForm} from "../../features/login-form/ui";
import * as styles from "./styles.module.scss"
import {AlignmentItems, Flex, JustifyContent} from "@mistek/freedom-ui";


const Login = () => {
    return <Flex justifyContent={JustifyContent.center} alignItems={AlignmentItems.center} className={styles.container}>
        <LoginForm/>
    </Flex>
}

export default Login