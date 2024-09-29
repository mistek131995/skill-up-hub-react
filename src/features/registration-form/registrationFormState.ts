import {action} from "mobx";
import {AuthServiceClient} from "../../app/grpc/AuthServiceServiceClientPb";
import {RegisterRequest} from "../../app/grpc/AuthService_pb";

const sendRegistrationForm = action((form:any) => {
    const client = new AuthServiceClient("http://localhost:5180/")
    const request = new RegisterRequest();
    request.setLogin(form.login);
    request.setEmail(form.email);
    request.setPassword(form.password);
    request.setToken("Token");

    client.register(request, {}, (err, response) => {
        console.log(err, response);
    })
})

export {sendRegistrationForm}