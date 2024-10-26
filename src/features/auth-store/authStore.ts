import {action, observable} from "mobx";

const authState = observable<IAuthStore>({
    token: localStorage.getItem("token") || "",
})

const loginOut = action(() => {
    localStorage.removeItem("token");
    authState.token = "";
})

export {authState, loginOut}

interface IAuthStore {
    token: string
}