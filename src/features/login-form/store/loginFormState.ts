import {action} from "mobx";
import {IToast} from "@mistek/freedom-ui";

const sendLoginForm = action((form: any, addToast: (toast: IToast) => void) => {
    console.log(form);
})

export {sendLoginForm}