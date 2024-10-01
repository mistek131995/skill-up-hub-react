import {Button, ButtonBackground, Flex, Form, Input, JustifyContent, useToast} from "@mistek/freedom-ui";
import {sendLoginForm} from "../store/loginFormState";
import * as styles from "../../login-form/style/styles.module.scss";

export const LoginForm = () => {
    const {addToast} = useToast();

    return <Flex className={styles.container} justifyContent={JustifyContent.center}>
        <Form handleSubmit={(form) => sendLoginForm(form, addToast)}>
            <Input name="login" placeholder="Введите логин"/>
            <Input name="password" placeholder="Введите пароль"/>
            <Button bg={ButtonBackground.success}>Войти в аккаунт</Button>
        </Form>
    </Flex>
}