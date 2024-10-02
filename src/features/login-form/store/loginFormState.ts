import {action} from "mobx";
import {IToast, ToastBackground} from "@mistek/freedom-ui";
import {AuthServiceClient} from "../../../app/grpc/AuthServiceServiceClientPb";
import {LoginRequest} from "../../../app/grpc/AuthService_pb";
import {generateFingerprint} from "../../../shared/utlis/generateFingerprint";

const sendLoginForm = action(async (form: any, addToast: (toast: IToast) => void) => {
    const client = new AuthServiceClient("http://localhost:5180/");
    const request = new LoginRequest();
    request.setLogin(form.login);
    request.setPassword(form.password);
    request.setToken("Token");

    client.login(request, {
        "User-Agent": navigator.userAgent,
        "Fingerprint": await generateFingerprint()
    }, (err, response) => {
        if(err){
            addToast({
                label: "Ошибка",
                description: err.message,
                bg: ToastBackground.danger
            })
        } else {
            console.log(response);
        }
    })
})

export {sendLoginForm}