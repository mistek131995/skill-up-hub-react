import {action} from "mobx";
import {IToast} from "@mistek/freedom-ui";
import {UniversalGrpcClient} from "../../shared/grpcClients/UniversalGrpcClient";
import {RegisterRequest, RegisterResponse} from "../../shared/grpcClients/auth/AuthService_pb";
import {AuthServiceClient} from "../../shared/grpcClients/auth/AuthServiceServiceClientPb";

const sendRegistrationForm = action(async (
    form:any,
    addToast: (toast: IToast) => void,
    setIsSuccess: (isSuccess: boolean) => void,
) => {
    const client = new UniversalGrpcClient("http://localhost:8080/", "");
    const request = new RegisterRequest();
    request.setLogin(form.login);
    request.setEmail(form.email);
    request.setPassword(form.password);
    request.setToken("Token");

    await client.callService<RegisterRequest, RegisterResponse, AuthServiceClient>(
        AuthServiceClient,
        (client, req, metadata, callback) =>
            client.register(req, metadata, callback),
        request
    ).then(response => {
        setIsSuccess(response.getIssuccess())
    }).catch(error => {
        addToast(error.message);
    })

    // await authClientAsync<RegisterRequest>(RegisterRequest).then(client => {
    //     client.request.setLogin(form.login);
    //     client.request.setEmail(form.email);
    //     client.request.setPassword(form.password);
    //     client.request.setToken("Token");
    //
    //     client.client.register(client.request, {}, (err, response) => {
    //         if(err){
    //             grpcErrorHandler(err)
    //         }
    //         else{
    //             setIsSuccess(response.getIssuccess());
    //         }
    //     })
    // })
})

export {sendRegistrationForm}