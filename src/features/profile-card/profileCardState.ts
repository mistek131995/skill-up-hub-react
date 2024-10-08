import {action, observable} from "mobx";
import {Profile} from "../../entities/Profile";
import {profileClientAsync} from "../../shared/grpcClients/grpcRepository";
import {GetProfileRequest} from "../../shared/grpcClients/profile/ProfileService_pb";

const profile: Profile = observable(null as unknown as Profile);

const getProfileAsync = action(async () => {
    await profileClientAsync<GetProfileRequest>(GetProfileRequest).then(client => {
        client.client.getProfile(client.request, client.metadata, (err, response) => {
            if(err){
                console.log(err);
                alert(err.message)
                //Тут вызывается обработчик исключений
            } else
            {
                profile.firstName = response.getFirstname();
                profile.lastName = response.getLastname();
                profile.description = response.getDescription();
            }
        })
    })
})

export {profile}