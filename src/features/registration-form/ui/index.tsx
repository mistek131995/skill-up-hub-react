import {
    Alert, Background,
    Button,
    ButtonBackground,
    Flex,
    Form,
    Input,
    Orientation,
    useToast
} from "@mistek/freedom-ui";
import * as styles from "../style/styles.module.scss";
import {EnvelopeAt, Key, Person} from "react-bootstrap-icons";
import {observer} from "mobx-react-lite";
import {sendRegistrationForm} from "../store/registrationFormState";
import {useState} from "react";

export const RegistrationForm = observer(() => {
    const [isSuccess, setIsSuccess] = useState<boolean>(false);
    const {addToast} = useToast();
    const iconSize = 25;

    const sendForm = async (form: any) => {
        await sendRegistrationForm(form).then(response => {
            if(!response.isSuccess){
                addToast({label: "Ошибка", description: response.errorMessage, bg: Background.danger})
            }

            setIsSuccess(response.isSuccess)
        })
    }

    return <Flex orientation={Orientation.vertical} className={styles.container}>
        {isSuccess &&
            <Alert background={Background.success}>Аккаунт успешно создан</Alert>
        }

        {!isSuccess &&
            <Form handleSubmit={sendForm}>
                <Input name="login" placeholder="Введите логин" iconLeft={<Person width={iconSize} height={iconSize}/>}/>
                <Input name="email" placeholder="Введите почту" iconLeft={<EnvelopeAt width={iconSize} height={iconSize}/>}/>
                <Input type="password" name="password" placeholder="Введите пароль" iconLeft={<Key width={iconSize} height={iconSize}/>}/>
                <Input type="password" name="repeat-password" placeholder="Повторите пароль" iconLeft={<Key width={iconSize} height={iconSize}/>}/>
                <Button type="submit" bg={ButtonBackground.success}>Создать аккаунт</Button>
            </Form>
        }
    </Flex>
})