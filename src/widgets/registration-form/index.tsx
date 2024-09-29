import {Button, ButtonBackground, Flex, Form, Input, Orientation} from "@mistek/freedom-ui";
import * as styles from "./styles.module.css";
import {EnvelopeAt, Key, Person} from "react-bootstrap-icons";
import {observer} from "mobx-react-lite";
import {sendRegistrationForm} from "../../features/registration-form/registrationFormState";

export const RegistrationForm = observer(() => {
    const iconSize = 25;

    return <Flex orientation={Orientation.vertical} className={styles.container}>
        <Form handleSubmit={sendRegistrationForm}>
            <Input name="login" placeholder="Введите логин" iconLeft={<Person width={iconSize} height={iconSize}/>}/>
            <Input name="email" placeholder="Введите почту" iconLeft={<EnvelopeAt width={iconSize} height={iconSize}/>}/>
            <Input type="password" name="password" placeholder="Введите пароль" iconLeft={<Key width={iconSize} height={iconSize}/>}/>
            <Input type="password" name="repeat-password" placeholder="Повторите пароль" iconLeft={<Key width={iconSize} height={iconSize}/>}/>
            <Button type="submit" bg={ButtonBackground.success}>Создать аккаунт</Button>
        </Form>
    </Flex>
})