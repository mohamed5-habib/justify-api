import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  ECSClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ECSClient";
import {
  UpdateExpressGatewayServiceRequest,
  UpdateExpressGatewayServiceResponse,
} from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface UpdateExpressGatewayServiceCommandInput
  extends UpdateExpressGatewayServiceRequest {}
export interface UpdateExpressGatewayServiceCommandOutput
  extends UpdateExpressGatewayServiceResponse,
    __MetadataBearer {}
declare const UpdateExpressGatewayServiceCommand_base: {
  new (
    input: UpdateExpressGatewayServiceCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    UpdateExpressGatewayServiceCommandInput,
    UpdateExpressGatewayServiceCommandOutput,
    ECSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    input: UpdateExpressGatewayServiceCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    UpdateExpressGatewayServiceCommandInput,
    UpdateExpressGatewayServiceCommandOutput,
    ECSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class UpdateExpressGatewayServiceCommand extends UpdateExpressGatewayServiceCommand_base {
  protected static __types: {
    api: {
      input: UpdateExpressGatewayServiceRequest;
      output: UpdateExpressGatewayServiceResponse;
    };
    sdk: {
      input: UpdateExpressGatewayServiceCommandInput;
      output: UpdateExpressGatewayServiceCommandOutput;
    };
  };
}
