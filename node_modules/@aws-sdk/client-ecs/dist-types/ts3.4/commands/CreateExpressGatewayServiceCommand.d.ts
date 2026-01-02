import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  ECSClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ECSClient";
import {
  CreateExpressGatewayServiceRequest,
  CreateExpressGatewayServiceResponse,
} from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface CreateExpressGatewayServiceCommandInput
  extends CreateExpressGatewayServiceRequest {}
export interface CreateExpressGatewayServiceCommandOutput
  extends CreateExpressGatewayServiceResponse,
    __MetadataBearer {}
declare const CreateExpressGatewayServiceCommand_base: {
  new (
    input: CreateExpressGatewayServiceCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    CreateExpressGatewayServiceCommandInput,
    CreateExpressGatewayServiceCommandOutput,
    ECSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    input: CreateExpressGatewayServiceCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    CreateExpressGatewayServiceCommandInput,
    CreateExpressGatewayServiceCommandOutput,
    ECSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class CreateExpressGatewayServiceCommand extends CreateExpressGatewayServiceCommand_base {
  protected static __types: {
    api: {
      input: CreateExpressGatewayServiceRequest;
      output: CreateExpressGatewayServiceResponse;
    };
    sdk: {
      input: CreateExpressGatewayServiceCommandInput;
      output: CreateExpressGatewayServiceCommandOutput;
    };
  };
}
