import type { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";
import { ECSServiceException as __BaseException } from "./ECSServiceException";
/**
 * <p>You don't have authorization to perform the requested action.</p>
 * @public
 */
export declare class AccessDeniedException extends __BaseException {
    readonly name: "AccessDeniedException";
    readonly $fault: "client";
    /**
     * @internal
     */
    constructor(opts: __ExceptionOptionType<AccessDeniedException, __BaseException>);
}
/**
 * <p>These errors are usually caused by a client action. This client action might be using
 * 			an action or resource on behalf of a user that doesn't have permissions to use the
 * 			action or resource. Or, it might be specifying an identifier that isn't valid.</p>
 * @public
 */
export declare class ClientException extends __BaseException {
    readonly name: "ClientException";
    readonly $fault: "client";
    /**
     * @internal
     */
    constructor(opts: __ExceptionOptionType<ClientException, __BaseException>);
}
/**
 * <p>The specified cluster wasn't found. You can view your available clusters with <a href="https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_ListClusters.html">ListClusters</a>. Amazon ECS clusters are Region specific.</p>
 * @public
 */
export declare class ClusterNotFoundException extends __BaseException {
    readonly name: "ClusterNotFoundException";
    readonly $fault: "client";
    /**
     * @internal
     */
    constructor(opts: __ExceptionOptionType<ClusterNotFoundException, __BaseException>);
}
/**
 * <p>The specified parameter isn't valid. Review the available parameters for the API
 * 			request.</p>
 *          <p>For more information about service event errors, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-event-messages-list.html">Amazon ECS
 * 				service event messages</a>. </p>
 * @public
 */
export declare class InvalidParameterException extends __BaseException {
    readonly name: "InvalidParameterException";
    readonly $fault: "client";
    /**
     * @internal
     */
    constructor(opts: __ExceptionOptionType<InvalidParameterException, __BaseException>);
}
/**
 * <p>The limit for the resource was exceeded.</p>
 * @public
 */
export declare class LimitExceededException extends __BaseException {
    readonly name: "LimitExceededException";
    readonly $fault: "client";
    /**
     * @internal
     */
    constructor(opts: __ExceptionOptionType<LimitExceededException, __BaseException>);
}
/**
 * <p>These errors are usually caused by a server issue.</p>
 * @public
 */
export declare class ServerException extends __BaseException {
    readonly name: "ServerException";
    readonly $fault: "server";
    /**
     * @internal
     */
    constructor(opts: __ExceptionOptionType<ServerException, __BaseException>);
}
/**
 * <p>The specified task isn't supported in this Region.</p>
 * @public
 */
export declare class UnsupportedFeatureException extends __BaseException {
    readonly name: "UnsupportedFeatureException";
    readonly $fault: "client";
    /**
     * @internal
     */
    constructor(opts: __ExceptionOptionType<UnsupportedFeatureException, __BaseException>);
}
/**
 * <p>There's already a current Amazon ECS container agent update in progress on the
 * 			container instance that's specified. If the container agent becomes disconnected while
 * 			it's in a transitional stage, such as <code>PENDING</code> or <code>STAGING</code>, the
 * 			update process can get stuck in that state. However, when the agent reconnects, it
 * 			resumes where it stopped previously.</p>
 * @public
 */
export declare class UpdateInProgressException extends __BaseException {
    readonly name: "UpdateInProgressException";
    readonly $fault: "client";
    /**
     * @internal
     */
    constructor(opts: __ExceptionOptionType<UpdateInProgressException, __BaseException>);
}
/**
 * <p>The specified namespace wasn't found.</p>
 * @public
 */
export declare class NamespaceNotFoundException extends __BaseException {
    readonly name: "NamespaceNotFoundException";
    readonly $fault: "client";
    /**
     * @internal
     */
    constructor(opts: __ExceptionOptionType<NamespaceNotFoundException, __BaseException>);
}
/**
 * <p>The specified platform version doesn't satisfy the required capabilities of the task
 * 			definition.</p>
 * @public
 */
export declare class PlatformTaskDefinitionIncompatibilityException extends __BaseException {
    readonly name: "PlatformTaskDefinitionIncompatibilityException";
    readonly $fault: "client";
    /**
     * @internal
     */
    constructor(opts: __ExceptionOptionType<PlatformTaskDefinitionIncompatibilityException, __BaseException>);
}
/**
 * <p>The specified platform version doesn't exist.</p>
 * @public
 */
export declare class PlatformUnknownException extends __BaseException {
    readonly name: "PlatformUnknownException";
    readonly $fault: "client";
    /**
     * @internal
     */
    constructor(opts: __ExceptionOptionType<PlatformUnknownException, __BaseException>);
}
/**
 * <p>The specified service isn't active. You can't update a service that's inactive. If you
 * 			have previously deleted a service, you can re-create it with <a href="https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_CreateService.html">CreateService</a>.</p>
 * @public
 */
export declare class ServiceNotActiveException extends __BaseException {
    readonly name: "ServiceNotActiveException";
    readonly $fault: "client";
    /**
     * @internal
     */
    constructor(opts: __ExceptionOptionType<ServiceNotActiveException, __BaseException>);
}
/**
 * <p>The specified service wasn't found. You can view your available services with <a href="https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_ListServices.html">ListServices</a>. Amazon ECS services are cluster specific and Region
 * 			specific.</p>
 * @public
 */
export declare class ServiceNotFoundException extends __BaseException {
    readonly name: "ServiceNotFoundException";
    readonly $fault: "client";
    /**
     * @internal
     */
    constructor(opts: __ExceptionOptionType<ServiceNotFoundException, __BaseException>);
}
/**
 * <p>The specified target wasn't found. You can view your available container instances
 * 			with <a href="https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_ListContainerInstances.html">ListContainerInstances</a>. Amazon ECS container instances are cluster-specific
 * 			and Region-specific.</p>
 * @public
 */
export declare class TargetNotFoundException extends __BaseException {
    readonly name: "TargetNotFoundException";
    readonly $fault: "client";
    /**
     * @internal
     */
    constructor(opts: __ExceptionOptionType<TargetNotFoundException, __BaseException>);
}
/**
 * <p>The cluster contains one or more capacity providers that prevent the requested
 * 			operation. This exception occurs when you try to delete a cluster that still has active
 * 			capacity providers, including Amazon ECS Managed Instances capacity providers. You must
 * 			first delete all capacity providers from the cluster before you can delete the cluster
 * 			itself.</p>
 * @public
 */
export declare class ClusterContainsCapacityProviderException extends __BaseException {
    readonly name: "ClusterContainsCapacityProviderException";
    readonly $fault: "client";
    /**
     * @internal
     */
    constructor(opts: __ExceptionOptionType<ClusterContainsCapacityProviderException, __BaseException>);
}
/**
 * <p>You can't delete a cluster that has registered container instances. First, deregister
 * 			the container instances before you can delete the cluster. For more information, see
 * 				<a href="https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_DeregisterContainerInstance.html">DeregisterContainerInstance</a>.</p>
 * @public
 */
export declare class ClusterContainsContainerInstancesException extends __BaseException {
    readonly name: "ClusterContainsContainerInstancesException";
    readonly $fault: "client";
    /**
     * @internal
     */
    constructor(opts: __ExceptionOptionType<ClusterContainsContainerInstancesException, __BaseException>);
}
/**
 * <p>You can't delete a cluster that contains services. First, update the service to reduce
 * 			its desired task count to 0, and then delete the service. For more information, see
 * 				<a href="https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_UpdateService.html">UpdateService</a> and
 * 				<a href="https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_DeleteService.html">DeleteService</a>.</p>
 * @public
 */
export declare class ClusterContainsServicesException extends __BaseException {
    readonly name: "ClusterContainsServicesException";
    readonly $fault: "client";
    /**
     * @internal
     */
    constructor(opts: __ExceptionOptionType<ClusterContainsServicesException, __BaseException>);
}
/**
 * <p>You can't delete a cluster that has active tasks.</p>
 * @public
 */
export declare class ClusterContainsTasksException extends __BaseException {
    readonly name: "ClusterContainsTasksException";
    readonly $fault: "client";
    /**
     * @internal
     */
    constructor(opts: __ExceptionOptionType<ClusterContainsTasksException, __BaseException>);
}
/**
 * <p>The specified task set wasn't found. You can view your available task sets with <a href="https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_DescribeTaskSets.html">DescribeTaskSets</a>. Task sets are specific to each cluster, service and
 * 			Region.</p>
 * @public
 */
export declare class TaskSetNotFoundException extends __BaseException {
    readonly name: "TaskSetNotFoundException";
    readonly $fault: "client";
    /**
     * @internal
     */
    constructor(opts: __ExceptionOptionType<TaskSetNotFoundException, __BaseException>);
}
/**
 * <p>The specified resource wasn't found.</p>
 * @public
 */
export declare class ResourceNotFoundException extends __BaseException {
    readonly name: "ResourceNotFoundException";
    readonly $fault: "client";
    /**
     * @internal
     */
    constructor(opts: __ExceptionOptionType<ResourceNotFoundException, __BaseException>);
}
/**
 * <p>The execute command cannot run. This error can be caused by any of the following
 * 			configuration issues:</p>
 *          <ul>
 *             <li>
 *                <p>Incorrect IAM permissions</p>
 *             </li>
 *             <li>
 *                <p>The SSM agent is not installed or is not running</p>
 *             </li>
 *             <li>
 *                <p> There is an interface Amazon VPC endpoint for Amazon ECS, but there is not
 * 					one for Systems Manager Session Manager</p>
 *             </li>
 *          </ul>
 *          <p>For information about how to troubleshoot the issues, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-exec.html">Troubleshooting issues with ECS
 * 				Exec</a> in the <i>Amazon Elastic Container Service Developer
 * 				Guide</i>.</p>
 * @public
 */
export declare class TargetNotConnectedException extends __BaseException {
    readonly name: "TargetNotConnectedException";
    readonly $fault: "client";
    /**
     * @internal
     */
    constructor(opts: __ExceptionOptionType<TargetNotConnectedException, __BaseException>);
}
/**
 * <p>You can apply up to 10 custom attributes for each resource. You can view the
 * 			attributes of a resource with <a href="https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_ListAttributes.html">ListAttributes</a>.
 * 			You can remove existing attributes on a resource with <a href="https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_DeleteAttributes.html">DeleteAttributes</a>.</p>
 * @public
 */
export declare class AttributeLimitExceededException extends __BaseException {
    readonly name: "AttributeLimitExceededException";
    readonly $fault: "client";
    /**
     * @internal
     */
    constructor(opts: __ExceptionOptionType<AttributeLimitExceededException, __BaseException>);
}
/**
 * <p>The specified resource is in-use and can't be removed.</p>
 * @public
 */
export declare class ResourceInUseException extends __BaseException {
    readonly name: "ResourceInUseException";
    readonly $fault: "client";
    /**
     * @internal
     */
    constructor(opts: __ExceptionOptionType<ResourceInUseException, __BaseException>);
}
/**
 * <p>Your Amazon Web
 * 				Services account was blocked. For more information, contact <a href="http://aws.amazon.com/contact-us/">
 * 				Amazon Web
 * 					Services Support</a>.</p>
 * @public
 */
export declare class BlockedException extends __BaseException {
    readonly name: "BlockedException";
    readonly $fault: "client";
    /**
     * @internal
     */
    constructor(opts: __ExceptionOptionType<BlockedException, __BaseException>);
}
/**
 * <p>The request could not be processed because of conflict in the current state of the
 * 			resource. </p>
 * @public
 */
export declare class ConflictException extends __BaseException {
    readonly name: "ConflictException";
    readonly $fault: "client";
    /**
     * <p>The existing task ARNs which are already associated with the
     * 			<code>clientToken</code>.</p>
     * @public
     */
    resourceIds?: string[] | undefined;
    /**
     * @internal
     */
    constructor(opts: __ExceptionOptionType<ConflictException, __BaseException>);
}
/**
 * <p>The service deploy ARN that you specified in the <code>StopServiceDeployment</code>
 * 			doesn't exist. You can use <code>ListServiceDeployments</code> to retrieve the service
 * 			deployment ARNs.</p>
 * @public
 */
export declare class ServiceDeploymentNotFoundException extends __BaseException {
    readonly name: "ServiceDeploymentNotFoundException";
    readonly $fault: "client";
    /**
     * @internal
     */
    constructor(opts: __ExceptionOptionType<ServiceDeploymentNotFoundException, __BaseException>);
}
/**
 * <p>Amazon ECS can't determine the current version of the Amazon ECS container agent on
 * 			the container instance and doesn't have enough information to proceed with an update.
 * 			This could be because the agent running on the container instance is a previous or
 * 			custom version that doesn't use our version information.</p>
 * @public
 */
export declare class MissingVersionException extends __BaseException {
    readonly name: "MissingVersionException";
    readonly $fault: "client";
    /**
     * @internal
     */
    constructor(opts: __ExceptionOptionType<MissingVersionException, __BaseException>);
}
/**
 * <p>There's no update available for this Amazon ECS container agent. This might be because
 * 			the agent is already running the latest version or because it's so old that there's no
 * 			update path to the current version.</p>
 * @public
 */
export declare class NoUpdateAvailableException extends __BaseException {
    readonly name: "NoUpdateAvailableException";
    readonly $fault: "client";
    /**
     * @internal
     */
    constructor(opts: __ExceptionOptionType<NoUpdateAvailableException, __BaseException>);
}
