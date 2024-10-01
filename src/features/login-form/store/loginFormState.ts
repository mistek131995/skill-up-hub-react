import {action} from "mobx";
import {IToast, ToastBackground} from "@mistek/freedom-ui";
import {AuthServiceClient} from "../../../app/grpc/AuthServiceServiceClientPb";
import {LoginRequest} from "../../../app/grpc/AuthService_pb";

const sendLoginForm = action((form: any, addToast: (toast: IToast) => void) => {
    const client = new AuthServiceClient("http://localhost:5180/");
    const request = new LoginRequest();
    request.setLogin(form.login);
    request.setPassword(form.password);
    request.setToken("Token");

    client.login(request, {}, (err, response) => {
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