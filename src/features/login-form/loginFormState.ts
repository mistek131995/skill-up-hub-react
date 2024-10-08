import {action} from "mobx";
import {authClientAsync} from "../../shared/grpcClients/grpcRepository";
import {LoginRequest} from "../../shared/grpcClients/auth/AuthService_pb";
import {generateFingerprint} from "../../shared/utlis/generateFingerprint";
import {Background, IToast} from "@mistek/freedom-ui";

const sendLoginForm = action(async (form: any, addToast: (toast: IToast) => void) => {
    const fingerPrint = await generateFingerprint()

    await authClientAsync<LoginRequest>(LoginRequest).then(client => {
        client.request.setLogin(form.login);
        client.request.setPassword(form.password);
        client.request.setToken("Token");

        client.client.login(client.request, client.metadata, (err, response) => {
            if(err){
                addToast({
                    label: "Ошибка",
                    description: err.message,
                    bg: Background.danger
                })
            } else {
                localStorage.setItem("token", response.getAccesstoken())
            }
        })
    })
})

export {sendLoginForm}