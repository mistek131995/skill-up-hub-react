import {ProfileServiceClient} from "./profile/ProfileServiceServiceClientPb";
import {AuthServiceClient} from "./auth/AuthServiceServiceClientPb";
import {Metadata} from "grpc-web";
import {generateFingerprint} from "../utlis/generateFingerprint";

const authClientAsync = async <Request>(RequestConstructor: new () => Request): Promise<GrpcClient<AuthServiceClient, Request>> => {
    const client = new AuthServiceClient("http://localhost:8080/");
    const metadata = {
        "Fingerprint": await generateFingerprint()
    }

    return {
        client: client,
        request: new RequestConstructor(),
        metadata: metadata
    };
}

const profileClientAsync = async <Request> (RequestConstructor: new () => Request) : Promise<GrpcClient<ProfileServiceClient, Request>>  => {
    const client = new ProfileServiceClient("http://localhost:8081/");
    const metadata: Metadata = {
        "Authorization": `Bearer ${localStorage.getItem("token")}`
    };

    return {
        client: client,
        request: new RequestConstructor(),
        metadata: metadata
    }
}

export {profileClientAsync, authClientAsync}

interface GrpcClient<Client, Request>{
    client: Client,
    request: Request,
    metadata: Metadata
}