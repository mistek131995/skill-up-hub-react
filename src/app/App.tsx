import React from 'react';
import {LoginRequest} from "./grpc/AuthService_pb";
import {AuthServiceClient} from "./grpc/AuthServiceServiceClientPb";
import {Registration} from "../pages/registration";

const App = () => {
    // const client = new AuthServiceClient("http://localhost:5180/")
    // const request = new LoginRequest();
    // request.setPassword("123456");
    // request.setLogin("aaa");
    //
    // client.login(request, {}, (err, response) => {
    //     console.log(err, response);
    // })

    return <Registration/>
};

export default App;