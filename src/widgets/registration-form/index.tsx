import {Flex, Form, Input, Orientation} from "@mistek/freedom-ui";

export const RegistrationForm = () => {
    return <Flex orientation={Orientation.vertical}>
        <Form handleSubmit={(form) => console.log(form)}>
            <Input name="login"/>
            <Input name="email"/>
            <Input name="password"/>
            <Input name="repeat-password"/>
        </Form>
    </Flex>
}