import * as jspb from 'google-protobuf'



export class LoginRequest extends jspb.Message {
  getLogin(): string;
  setLogin(value: string): LoginRequest;

  getPassword(): string;
  setPassword(value: string): LoginRequest;

  getToken(): string;
  setToken(value: string): LoginRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LoginRequest.AsObject;
  static toObject(includeInstance: boolean, msg: LoginRequest): LoginRequest.AsObject;
  static serializeBinaryToWriter(message: LoginRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LoginRequest;
  static deserializeBinaryFromReader(message: LoginRequest, reader: jspb.BinaryReader): LoginRequest;
}

export namespace LoginRequest {
  export type AsObject = {
    login: string,
    password: string,
    token: string,
  }
}

export class LoginResponse extends jspb.Message {
  getAccesstoken(): string;
  setAccesstoken(value: string): LoginResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LoginResponse.AsObject;
  static toObject(includeInstance: boolean, msg: LoginResponse): LoginResponse.AsObject;
  static serializeBinaryToWriter(message: LoginResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LoginResponse;
  static deserializeBinaryFromReader(message: LoginResponse, reader: jspb.BinaryReader): LoginResponse;
}

export namespace LoginResponse {
  export type AsObject = {
    accesstoken: string,
  }
}

export class RegisterRequest extends jspb.Message {
  getLogin(): string;
  setLogin(value: string): RegisterRequest;

  getPassword(): string;
  setPassword(value: string): RegisterRequest;

  getEmail(): string;
  setEmail(value: string): RegisterRequest;

  getToken(): string;
  setToken(value: string): RegisterRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RegisterRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RegisterRequest): RegisterRequest.AsObject;
  static serializeBinaryToWriter(message: RegisterRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RegisterRequest;
  static deserializeBinaryFromReader(message: RegisterRequest, reader: jspb.BinaryReader): RegisterRequest;
}

export namespace RegisterRequest {
  export type AsObject = {
    login: string,
    password: string,
    email: string,
    token: string,
  }
}

export class RegisterResponse extends jspb.Message {
  getIssuccess(): boolean;
  setIssuccess(value: boolean): RegisterResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RegisterResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RegisterResponse): RegisterResponse.AsObject;
  static serializeBinaryToWriter(message: RegisterResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RegisterResponse;
  static deserializeBinaryFromReader(message: RegisterResponse, reader: jspb.BinaryReader): RegisterResponse;
}

export namespace RegisterResponse {
  export type AsObject = {
    issuccess: boolean,
  }
}

export class RestorePasswordRequest extends jspb.Message {
  getEmail(): string;
  setEmail(value: string): RestorePasswordRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RestorePasswordRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RestorePasswordRequest): RestorePasswordRequest.AsObject;
  static serializeBinaryToWriter(message: RestorePasswordRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RestorePasswordRequest;
  static deserializeBinaryFromReader(message: RestorePasswordRequest, reader: jspb.BinaryReader): RestorePasswordRequest;
}

export namespace RestorePasswordRequest {
  export type AsObject = {
    email: string,
  }
}

export class RestorePasswordResponse extends jspb.Message {
  getIssuccess(): boolean;
  setIssuccess(value: boolean): RestorePasswordResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RestorePasswordResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RestorePasswordResponse): RestorePasswordResponse.AsObject;
  static serializeBinaryToWriter(message: RestorePasswordResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RestorePasswordResponse;
  static deserializeBinaryFromReader(message: RestorePasswordResponse, reader: jspb.BinaryReader): RestorePasswordResponse;
}

export namespace RestorePasswordResponse {
  export type AsObject = {
    issuccess: boolean,
  }
}

export class RefreshTokenRequest extends jspb.Message {
  getRefreshtoken(): string;
  setRefreshtoken(value: string): RefreshTokenRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RefreshTokenRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RefreshTokenRequest): RefreshTokenRequest.AsObject;
  static serializeBinaryToWriter(message: RefreshTokenRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RefreshTokenRequest;
  static deserializeBinaryFromReader(message: RefreshTokenRequest, reader: jspb.BinaryReader): RefreshTokenRequest;
}

export namespace RefreshTokenRequest {
  export type AsObject = {
    refreshtoken: string,
  }
}

export class RefreshTokenResponse extends jspb.Message {
  getAccesstoken(): string;
  setAccesstoken(value: string): RefreshTokenResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RefreshTokenResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RefreshTokenResponse): RefreshTokenResponse.AsObject;
  static serializeBinaryToWriter(message: RefreshTokenResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RefreshTokenResponse;
  static deserializeBinaryFromReader(message: RefreshTokenResponse, reader: jspb.BinaryReader): RefreshTokenResponse;
}

export namespace RefreshTokenResponse {
  export type AsObject = {
    accesstoken: string,
  }
}

