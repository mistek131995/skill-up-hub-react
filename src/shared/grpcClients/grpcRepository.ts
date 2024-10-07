import {ProfileServiceClient} from "./profile/ProfileServiceServiceClientPb";
import {AuthServiceClient} from "./auth/AuthServiceServiceClientPb";

const authClientAsync = async <Request>(RequestConstructor: new () => Request): Promise<GrpcClient<AuthServiceClient, Request>> => {
    const client = new AuthServiceClient("http://localhost:8080/");

    return {
        rpcClient: client,
        request: new RequestConstructor()
    };
}

const profileClientAsync = async <Request> (RequestConstructor: new () => Request) : Promise<GrpcClient<ProfileServiceClient, Request>>  => {
    const client = new ProfileServiceClient("http://localhost:8081/");
    return {
        rpcClient: client,
        request: new RequestConstructor()
    }
}

export {profileClientAsync, authClientAsync}

interface GrpcClient<Client, Request>{
    rpcClient: Client,
    request: Request;
}