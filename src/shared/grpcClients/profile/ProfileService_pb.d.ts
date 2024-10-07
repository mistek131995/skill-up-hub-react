import * as jspb from 'google-protobuf'



export class GetProfileRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetProfileRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetProfileRequest): GetProfileRequest.AsObject;
  static serializeBinaryToWriter(message: GetProfileRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetProfileRequest;
  static deserializeBinaryFromReader(message: GetProfileRequest, reader: jspb.BinaryReader): GetProfileRequest;
}

export namespace GetProfileRequest {
  export type AsObject = {
  }
}

export class GetProfileResponse extends jspb.Message {
  getFirstname(): string;
  setFirstname(value: string): GetProfileResponse;

  getLastname(): string;
  setLastname(value: string): GetProfileResponse;

  getDescription(): string;
  setDescription(value: string): GetProfileResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetProfileResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetProfileResponse): GetProfileResponse.AsObject;
  static serializeBinaryToWriter(message: GetProfileResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetProfileResponse;
  static deserializeBinaryFromReader(message: GetProfileResponse, reader: jspb.BinaryReader): GetProfileResponse;
}

export namespace GetProfileResponse {
  export type AsObject = {
    firstname: string,
    lastname: string,
    description: string,
  }
}

export class SaveProfileRequest extends jspb.Message {
  getFirstname(): string;
  setFirstname(value: string): SaveProfileRequest;

  getLastname(): string;
  setLastname(value: string): SaveProfileRequest;

  getDescription(): string;
  setDescription(value: string): SaveProfileRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SaveProfileRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SaveProfileRequest): SaveProfileRequest.AsObject;
  static serializeBinaryToWriter(message: SaveProfileRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SaveProfileRequest;
  static deserializeBinaryFromReader(message: SaveProfileRequest, reader: jspb.BinaryReader): SaveProfileRequest;
}

export namespace SaveProfileRequest {
  export type AsObject = {
    firstname: string,
    lastname: string,
    description: string,
  }
}

export class SaveProfileResponse extends jspb.Message {
  getIssuccess(): boolean;
  setIssuccess(value: boolean): SaveProfileResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SaveProfileResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SaveProfileResponse): SaveProfileResponse.AsObject;
  static serializeBinaryToWriter(message: SaveProfileResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SaveProfileResponse;
  static deserializeBinaryFromReader(message: SaveProfileResponse, reader: jspb.BinaryReader): SaveProfileResponse;
}

export namespace SaveProfileResponse {
  export type AsObject = {
    issuccess: boolean,
  }
}

