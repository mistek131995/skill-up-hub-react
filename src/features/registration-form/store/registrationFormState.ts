import {action} from "mobx";
import {AuthServiceClient} from "../../../app/grpc/AuthServiceServiceClientPb";
import {RegisterRequest} from "../../../app/grpc/AuthService_pb";
import {IToast, ToastBackground} from "@mistek/freedom-ui";

const sendRegistrationForm = action((form:any, addToast: (toast: IToast) => void) => {
    const client = new AuthServiceClient("http://localhost:5180/")
    const request = new RegisterRequest();
    request.setLogin(form.login);
    request.setEmail(form.email);
    request.setPassword(form.password);
    request.setToken("Token");

    client.register(request, {}, (err, response) => {

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

export {sendRegistrationForm}