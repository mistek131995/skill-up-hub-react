import { GrpcWebClientBase, Metadata, RpcError } from 'grpc-web';
import {generateFingerprint} from "../utlis/generateFingerprint";
import {AuthServiceClient} from "./auth/AuthServiceServiceClientPb";
import {RefreshTokenRequest} from "./auth/AuthService_pb";

// Универсальный gRPC клиент
export class UniversalGrpcClient extends GrpcWebClientBase {
    private readonly baseUrl: string;
    private readonly metadata: Metadata;

    constructor(baseUrl: string, token?: string) {
        super({format: 'text'});
        this.baseUrl = baseUrl;
        this.metadata = {};

        if (token) {
            this.metadata['Authorization'] = `Bearer ${token}`;
        }
    }

    // Метод для выполнения gRPC-запроса
    public async callService<RequestType, ResponseType, ClientType>(
        serviceClient: { new (url: string, credentials?: null, options?: any): any },
        rpcMethod: (client: ClientType, request: RequestType, metadata: Metadata, callback: (err: RpcError | null, response: ResponseType | null) => void) => void,
        request: RequestType,
        customMetadata?: Metadata
    ): Promise<ResponseType> {
        const fingerprint = await generateFingerprint();

        return new Promise((resolve, reject) => {
            // Создаем экземпляр клиента для конкретного сервиса
            const client = new serviceClient(this.baseUrl);

            this.metadata['Fingerprint'] = fingerprint;

            const combinedMetadata = { ...this.metadata, ...customMetadata };

            // Вызов RPC метода, который передается как функция
            rpcMethod(client, request, combinedMetadata, (error: RpcError | null, response: ResponseType | null) => {
                if (error) {
                    if(error.code === 16){
                        const authClient = new AuthServiceClient("http://localhost:5180/");
                        const refreshTokenRequest = new RefreshTokenRequest();
                        refreshTokenRequest.setRefreshtoken(localStorage.getItem("refresh") || "");

                        authClient.refreshToken(refreshTokenRequest, {
                            Fingerprint: fingerprint,
                        }).then(response => {
                            console.log(response);
                        }).catch(error => {
                            console.log(error);
                        });

                        console.log("No auth")
                    }else{
                        console.log(error);
                        reject(error);
                    }
                } else {
                    resolve(response as ResponseType);
                }
            });
        });
    }
}
