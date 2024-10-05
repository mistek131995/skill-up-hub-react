import {action} from "mobx";
import {AuthServiceClient} from "../../../shared/grpcClients/auth/AuthServiceServiceClientPb";
import {RegisterRequest} from "../../../shared/grpcClients/auth/AuthService_pb";
import {ServerResponse} from "../../../entities/ServerResponse";

const sendRegistrationForm = action(async (form:any) : Promise<ServerResponse> => {
    const client = new AuthServiceClient("http://localhost:8080/")
    const request = new RegisterRequest();
    request.setLogin(form.login);
    request.setEmail(form.email);
    request.setPassword(form.password);
    request.setToken("Token");

    try{
        const response = await new Promise<ServerResponse>((resolve, reject) => {
            client.register(request, {}, (err, response) => {

                if(err){
                    reject({isSuccess: false, errorMessage: err.message} as ServerResponse);
                } else {
                    resolve({isSuccess: true, errorMessage: ""} as ServerResponse);
                }
            })
        })

        return response;
    }catch (error){
        return error as ServerResponse;
    }
})

export {sendRegistrationForm}