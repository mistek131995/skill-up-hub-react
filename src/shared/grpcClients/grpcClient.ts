//export const metadata = new Metadata();

export const grpcClient = async <Client, Request>() : Promise<GrpcClient<Client, Request>> => {
    return new Promise((resolve, reject) => {
        resolve({
            rpcClient: {} as Client,  // Создаём объект типа Client
            request: {} as Request    // Создаём объект типа Request
        });
    });
}

interface GrpcClient<Client, Request>{
    rpcClient: Client,
    request: Request;
}