import {action} from "mobx";
import {RegisterRequest} from "../../shared/grpcClients/auth/AuthService_pb";
import {authClientAsync} from "../../shared/grpcClients/grpcRepository";
import {Background, IToast} from "@mistek/freedom-ui";

const sendRegistrationForm = action(async (
    form:any,
    addToast: (toast: IToast) => void,
    setIsSuccess: (isSuccess: boolean) => void,
) => {
    await authClientAsync<RegisterRequest>(RegisterRequest).then(client => {
        client.request.setLogin(form.login);
        client.request.setEmail(form.email);
        client.request.setPassword(form.password);
        client.request.setToken("Token");

        client.client.register(client.request, {}, (err, response) => {
            if(err){
                addToast({
                    label: "Ошибка",
                    description: err.message,
                    bg: Background.danger
                })
            }
            else{
                setIsSuccess(response.getIssuccess());
            }
        })
    })
})

export {sendRegistrationForm}