import {action, runInAction} from "mobx";
import {Background, IToast} from "@mistek/freedom-ui";
import {UniversalGrpcClient} from "../../shared/grpcClients/UniversalGrpcClient";
import {LoginRequest, LoginResponse} from "../../shared/grpcClients/auth/AuthService_pb";
import {AuthServiceClient} from "../../shared/grpcClients/auth/AuthServiceServiceClientPb";
import {authState} from "../../features/auth-store/authStore";

const sendLoginForm = action(async (form: any, addToast: (toast: IToast) => void) => {
    const client = new UniversalGrpcClient("http://localhost:8080/", "")
    const request = new LoginRequest();
    request.setLogin(form.login);
    request.setPassword(form.password);
    request.setToken(form.token);

    await client.callService<LoginRequest, LoginResponse, AuthServiceClient>(
        AuthServiceClient,
        (client, req, metadata, callback) => client.login(req, metadata, callback),
        request
    ).then(response => {

        runInAction(() => {
            authState.token = response.getAccesstoken();
            localStorage.setItem("token", response.getAccesstoken())
            localStorage.setItem("refresh", response.getRefreshtoken())
        })

    }).catch(error => {
        addToast({
            label: "Ошибка",
            description: error.message,
            bg: Background.danger
        })
    });
})

export {sendLoginForm}