import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  ECSClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ECSClient";
import {
  DeleteExpressGatewayServiceRequest,
  DeleteExpressGatewayServiceResponse,
} from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface DeleteExpressGatewayServiceCommandInput
  extends DeleteExpressGatewayServiceRequest {}
export interface DeleteExpressGatewayServiceCommandOutput
  extends DeleteExpressGatewayServiceResponse,
    __MetadataBearer {}
declare const DeleteExpressGatewayServiceCommand_base: {
  new (
    input: DeleteExpressGatewayServiceCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    DeleteExpressGatewayServiceCommandInput,
    DeleteExpressGatewayServiceCommandOutput,
    ECSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    input: DeleteExpressGatewayServiceCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    DeleteExpressGatewayServiceCommandInput,
    DeleteExpressGatewayServiceCommandOutput,
    ECSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class DeleteExpressGatewayServiceCommand extends DeleteExpressGatewayServiceCommand_base {
  protected static __types: {
    api: {
      input: DeleteExpressGatewayServiceRequest;
      output: DeleteExpressGatewayServiceResponse;
    };
    sdk: {
      input: DeleteExpressGatewayServiceCommandInput;
      output: DeleteExpressGatewayServiceCommandOutput;
    };
  };
}
