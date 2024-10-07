import {action, observable} from "mobx";
import {Profile} from "../../entities/Profile";
import {grpcClient} from "../../shared/grpcClients/grpcClient";
import {ProfileServiceClient} from "../../shared/grpcClients/profile/ProfileServiceServiceClientPb";
import {GetProfileRequest} from "../../shared/grpcClients/profile/ProfileService_pb";
import {Metadata} from "grpc-web";

const profile: Profile = observable(null as unknown as Profile);

const getProfileAsync = action(async () => {
    const metadata: Metadata = {
        "Authorization": `Bearer ${localStorage.getItem("token")}`
    };

    await grpcClient<ProfileServiceClient, GetProfileRequest>().then(client => {
        client.rpcClient.getProfile(client.request, metadata, (err, response) => {
            console.log(response);
            console.log(err);
        })
    })
})

export {profile}