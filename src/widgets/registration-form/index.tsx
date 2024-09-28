import {Button, ButtonBackground, Flex, Form, Input, Orientation} from "@mistek/freedom-ui";

export const RegistrationForm = () => {
    return <Flex orientation={Orientation.vertical}>
        <Form handleSubmit={(form) => console.log(form)}>
            <Input name="login" placeholder="Введите логин"/>
            <Input name="email" placeholder="Введите почту"/>
            <Input type="password" name="password" placeholder="Введите пароль"/>
            <Input type="password" name="repeat-password" placeholder="Повторите пароль"/>
            <Button type="submit" bg={ButtonBackground.success}>Создать аккаунт</Button>
        </Form>
    </Flex>
}