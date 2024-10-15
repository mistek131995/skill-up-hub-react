import {observable} from "mobx";

const authState = observable<IAuthStore>({
    token: ""
})

export {authState}

interface IAuthStore {
    token: string
}