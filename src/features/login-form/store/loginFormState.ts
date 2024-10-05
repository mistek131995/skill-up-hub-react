import {action} from "mobx";
import {IToast} from "@mistek/freedom-ui";
import {AuthServiceClient} from "../../../shared/grpcClients/auth/AuthServiceServiceClientPb";
import {LoginRequest} from "../../../shared/grpcClients/auth/AuthService_pb";
import {generateFingerprint} from "../../../shared/utlis/generateFingerprint";
import {grpcErrorHandler} from "../../../shared/grpcClients/grpcErrorHandler";

const sendLoginForm = action(async (form: any, addToast: (toast: IToast) => void) => {
    const client = new AuthServiceClient("http://localhost:8080/");
    const request = new LoginRequest();
    request.setLogin(form.login);
    request.setPassword(form.password);
    request.setToken("Token");

    client.login(request, {
        "Fingerprint": await generateFingerprint()
    }, (err, response) => {
        if(err){
            grpcErrorHandler(err, addToast)
        } else {
            localStorage.setItem("token", response.getAccesstoken())
        }
    })
})

export {sendLoginForm}