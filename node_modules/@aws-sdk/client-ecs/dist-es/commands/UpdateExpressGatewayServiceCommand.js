import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateExpressGatewayService$ } from "../schemas/schemas_0";
export { $Command };
export class UpdateExpressGatewayServiceCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2ContainerServiceV20141113", "UpdateExpressGatewayService", {})
    .n("ECSClient", "UpdateExpressGatewayServiceCommand")
    .sc(UpdateExpressGatewayService$)
    .build() {
}
