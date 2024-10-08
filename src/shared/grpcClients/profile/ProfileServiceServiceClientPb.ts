/**
 * @fileoverview gRPC-Web generated client stub for ProfileService
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.5.0
// 	protoc              v5.28.2
// source: ProfileService.proto


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as ProfileService_pb from './ProfileService_pb'; // proto import: "ProfileService.proto"


export class ProfileServiceClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: any; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'text';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname.replace(/\/+$/, '');
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodDescriptorGetProfile = new grpcWeb.MethodDescriptor(
    '/ProfileService.ProfileService/GetProfile',
    grpcWeb.MethodType.UNARY,
    ProfileService_pb.GetProfileRequest,
    ProfileService_pb.GetProfileResponse,
    (request: ProfileService_pb.GetProfileRequest) => {
      return request.serializeBinary();
    },
    ProfileService_pb.GetProfileResponse.deserializeBinary
  );

  getProfile(
    request: ProfileService_pb.GetProfileRequest,
    metadata?: grpcWeb.Metadata | null): Promise<ProfileService_pb.GetProfileResponse>;

  getProfile(
    request: ProfileService_pb.GetProfileRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: ProfileService_pb.GetProfileResponse) => void): grpcWeb.ClientReadableStream<ProfileService_pb.GetProfileResponse>;

  getProfile(
    request: ProfileService_pb.GetProfileRequest,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: ProfileService_pb.GetProfileResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ProfileService.ProfileService/GetProfile',
        request,
        metadata || {},
        this.methodDescriptorGetProfile,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ProfileService.ProfileService/GetProfile',
    request,
    metadata || {},
    this.methodDescriptorGetProfile);
  }

  methodDescriptorSaveProfile = new grpcWeb.MethodDescriptor(
    '/ProfileService.ProfileService/SaveProfile',
    grpcWeb.MethodType.UNARY,
    ProfileService_pb.SaveProfileRequest,
    ProfileService_pb.SaveProfileResponse,
    (request: ProfileService_pb.SaveProfileRequest) => {
      return request.serializeBinary();
    },
    ProfileService_pb.SaveProfileResponse.deserializeBinary
  );

  saveProfile(
    request: ProfileService_pb.SaveProfileRequest,
    metadata?: grpcWeb.Metadata | null): Promise<ProfileService_pb.SaveProfileResponse>;

  saveProfile(
    request: ProfileService_pb.SaveProfileRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: ProfileService_pb.SaveProfileResponse) => void): grpcWeb.ClientReadableStream<ProfileService_pb.SaveProfileResponse>;

  saveProfile(
    request: ProfileService_pb.SaveProfileRequest,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: ProfileService_pb.SaveProfileResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ProfileService.ProfileService/SaveProfile',
        request,
        metadata || {},
        this.methodDescriptorSaveProfile,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ProfileService.ProfileService/SaveProfile',
    request,
    metadata || {},
    this.methodDescriptorSaveProfile);
  }

}

