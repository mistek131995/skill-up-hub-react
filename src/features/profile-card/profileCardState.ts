import {action, observable} from "mobx";
import {Profile} from "../../entities/Profile";
import {grpcClient} from "../../shared/grpcClients/auth/grpcClient";
import {ProfileServiceClient} from "../../shared/grpcClients/profile/ProfileServiceServiceClientPb";
import {GetProfileRequest} from "../../shared/grpcClients/profile/ProfileService_pb";

const profile: Profile = observable(null as unknown as Profile);

const getProfile = action(async () => {
    await grpcClient<ProfileServiceClient, unknown>().then(client => {
        client.rpcClient.getProfile(new GetProfileRequest(), {}, (err, response) => {

        })
    })
})

export {profile}