import {action, observable, runInAction} from "mobx";
import {profileClientAsync} from "../../../shared/grpcClients/grpcRepository";
import {GetProfileRequest} from "../../../shared/grpcClients/profile/ProfileService_pb";

const profile = observable({
    firstName: "",
    lastName: "",
    description: "",
});

const getProfileAsync = action(async () => {
    await profileClientAsync<GetProfileRequest>(GetProfileRequest).then(client => {
        client.client.getProfile(client.request, client.metadata, (err, response) => {
            if(err){
                console.log(err);
                console.log(err.message)
                //Тут вызывается обработчик исключений
            } else
            {

                runInAction(() => {
                    profile.firstName = response.getFirstname();
                    profile.lastName = response.getLastname();
                    profile.description = response.getDescription();
                })
            }
        })
    })
})

export {profile, getProfileAsync}