import {RegistrationForm} from "../../widgets/registration-form";
import {Flex, JustifyContent} from "@mistek/freedom-ui";

export const Registration = () => {
    return <Flex justifyContent={JustifyContent.center}>
        <RegistrationForm/>
    </Flex>
}