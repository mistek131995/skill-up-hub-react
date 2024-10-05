import {RpcError, StatusCode} from "grpc-web";
import {IToast, ToastBackground} from "@mistek/freedom-ui";

export const grpcErrorHandler = (err: RpcError, addToast: (toast: IToast) => void) => {
    if(err.code == StatusCode.UNAUTHENTICATED){
        alert("Ошибка аутентификации")
    }
    else
    {
        addToast({
            label: "Ошибка",
            description: err.message,
            bg: ToastBackground.danger
        })
    }
}

