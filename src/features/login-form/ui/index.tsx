import {Button, ButtonBackground, Flex, Form, Input, Orientation, useToast} from "@mistek/freedom-ui";
import {sendLoginForm} from "../store/loginFormState";
import * as styles from "../../login-form/style/styles.module.scss";
import {Key, Person} from "react-bootstrap-icons";

export const LoginForm = () => {
    const {addToast} = useToast();
    const iconSize = 25;

    return <Flex orientation={Orientation.vertical} className={styles.container}>
        <Form handleSubmit={(form) => sendLoginForm(form, addToast)}>
            <Input name="login" placeholder="Введите логин" iconLeft={<Person width={iconSize} height={iconSize}/>}/>
            <Input name="password" placeholder="Введите пароль" iconLeft={<Key width={iconSize} height={iconSize}/>}/>
            <Button bg={ButtonBackground.success}>Войти в аккаунт</Button>
        </Form>
    </Flex>
}