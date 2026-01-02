import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  ECSClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ECSClient";
import {
  DescribeExpressGatewayServiceRequest,
  DescribeExpressGatewayServiceResponse,
} from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface DescribeExpressGatewayServiceCommandInput
  extends DescribeExpressGatewayServiceRequest {}
export interface DescribeExpressGatewayServiceCommandOutput
  extends DescribeExpressGatewayServiceResponse,
    __MetadataBearer {}
declare const DescribeExpressGatewayServiceCommand_base: {
  new (
    input: DescribeExpressGatewayServiceCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    DescribeExpressGatewayServiceCommandInput,
    DescribeExpressGatewayServiceCommandOutput,
    ECSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    input: DescribeExpressGatewayServiceCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    DescribeExpressGatewayServiceCommandInput,
    DescribeExpressGatewayServiceCommandOutput,
    ECSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class DescribeExpressGatewayServiceCommand extends DescribeExpressGatewayServiceCommand_base {
  protected static __types: {
    api: {
      input: DescribeExpressGatewayServiceRequest;
      output: DescribeExpressGatewayServiceResponse;
    };
    sdk: {
      input: DescribeExpressGatewayServiceCommandInput;
      output: DescribeExpressGatewayServiceCommandOutput;
    };
  };
}
