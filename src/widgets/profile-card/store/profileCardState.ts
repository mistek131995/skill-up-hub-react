import {action, observable} from "mobx";
import {UniversalGrpcClient} from "../../../shared/grpcClients/UniversalGrpcClient";
import {authState} from "../../../features/auth-store/authStore";
import {GetProfileRequest, GetProfileResponse} from "../../../shared/grpcClients/profile/ProfileService_pb";
import {ProfileServiceClient} from "../../../shared/grpcClients/profile/ProfileServiceServiceClientPb";

const profile = observable({
    firstName: "",
    lastName: "",
    description: "",
});

const getProfileAsync = action(async () => {
    const client = new UniversalGrpcClient("http://localhost:8081/", authState.token);
    const request = new GetProfileRequest();

    await client.callService<GetProfileRequest, GetProfileResponse, ProfileServiceClient>(
        ProfileServiceClient,
        (client, req, metadata, callback) => client.getProfile(req, metadata, callback),
        request
    ).then(response => {
        console.log(response);
    }).catch(error => {
        //console.log(error);
    })
})

export {profile, getProfileAsync}