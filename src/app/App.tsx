import React from 'react';
import {LoginRequest} from "./grpc/AuthService_pb";
import {AuthServiceClient} from "./grpc/AuthServiceServiceClientPb";

const App = () => {
    const client = new AuthServiceClient("http://localhost:5180/")
    const request = new LoginRequest();
    request.setPassword("123456");
    request.setLogin("aaa");

    client.login(request, {}, (err, response) => {
        console.log(err, response);
    })

    return <h1>Hello, React with TypeScript and Webpack!</h1>;
};

export default App;