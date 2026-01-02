import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";
import { ECSServiceException as __BaseException } from "./ECSServiceException";
export declare class AccessDeniedException extends __BaseException {
  readonly name: "AccessDeniedException";
  readonly $fault: "client";
  constructor(
    opts: __ExceptionOptionType<AccessDeniedException, __BaseException>
  );
}
export declare class ClientException extends __BaseException {
  readonly name: "ClientException";
  readonly $fault: "client";
  constructor(opts: __ExceptionOptionType<ClientException, __BaseException>);
}
export declare class ClusterNotFoundException extends __BaseException {
  readonly name: "ClusterNotFoundException";
  readonly $fault: "client";
  constructor(
    opts: __ExceptionOptionType<ClusterNotFoundException, __BaseException>
  );
}
export declare class InvalidParameterException extends __BaseException {
  readonly name: "InvalidParameterException";
  readonly $fault: "client";
  constructor(
    opts: __ExceptionOptionType<InvalidParameterException, __BaseException>
  );
}
export declare class LimitExceededException extends __BaseException {
  readonly name: "LimitExceededException";
  readonly $fault: "client";
  constructor(
    opts: __ExceptionOptionType<LimitExceededException, __BaseException>
  );
}
export declare class ServerException extends __BaseException {
  readonly name: "ServerException";
  readonly $fault: "server";
  constructor(opts: __ExceptionOptionType<ServerException, __BaseException>);
}
export declare class UnsupportedFeatureException extends __BaseException {
  readonly name: "UnsupportedFeatureException";
  readonly $fault: "client";
  constructor(
    opts: __ExceptionOptionType<UnsupportedFeatureException, __BaseException>
  );
}
export declare class UpdateInProgressException extends __BaseException {
  readonly name: "UpdateInProgressException";
  readonly $fault: "client";
  constructor(
    opts: __ExceptionOptionType<UpdateInProgressException, __BaseException>
  );
}
export declare class NamespaceNotFoundException extends __BaseException {
  readonly name: "NamespaceNotFoundException";
  readonly $fault: "client";
  constructor(
    opts: __ExceptionOptionType<NamespaceNotFoundException, __BaseException>
  );
}
export declare class PlatformTaskDefinitionIncompatibilityException extends __BaseException {
  readonly name: "PlatformTaskDefinitionIncompatibilityException";
  readonly $fault: "client";
  constructor(
    opts: __ExceptionOptionType<
      PlatformTaskDefinitionIncompatibilityException,
      __BaseException
    >
  );
}
export declare class PlatformUnknownException extends __BaseException {
  readonly name: "PlatformUnknownException";
  readonly $fault: "client";
  constructor(
    opts: __ExceptionOptionType<PlatformUnknownException, __BaseException>
  );
}
export declare class ServiceNotActiveException extends __BaseException {
  readonly name: "ServiceNotActiveException";
  readonly $fault: "client";
  constructor(
    opts: __ExceptionOptionType<ServiceNotActiveException, __BaseException>
  );
}
export declare class ServiceNotFoundException extends __BaseException {
  readonly name: "ServiceNotFoundException";
  readonly $fault: "client";
  constructor(
    opts: __ExceptionOptionType<ServiceNotFoundException, __BaseException>
  );
}
export declare class TargetNotFoundException extends __BaseException {
  readonly name: "TargetNotFoundException";
  readonly $fault: "client";
  constructor(
    opts: __ExceptionOptionType<TargetNotFoundException, __BaseException>
  );
}
export declare class ClusterContainsCapacityProviderException extends __BaseException {
  readonly name: "ClusterContainsCapacityProviderException";
  readonly $fault: "client";
  constructor(
    opts: __ExceptionOptionType<
      ClusterContainsCapacityProviderException,
      __BaseException
    >
  );
}
export declare class ClusterContainsContainerInstancesException extends __BaseException {
  readonly name: "ClusterContainsContainerInstancesException";
  readonly $fault: "client";
  constructor(
    opts: __ExceptionOptionType<
      ClusterContainsContainerInstancesException,
      __BaseException
    >
  );
}
export declare class ClusterContainsServicesException extends __BaseException {
  readonly name: "ClusterContainsServicesException";
  readonly $fault: "client";
  constructor(
    opts: __ExceptionOptionType<
      ClusterContainsServicesException,
      __BaseException
    >
  );
}
export declare class ClusterContainsTasksException extends __BaseException {
  readonly name: "ClusterContainsTasksException";
  readonly $fault: "client";
  constructor(
    opts: __ExceptionOptionType<ClusterContainsTasksException, __BaseException>
  );
}
export declare class TaskSetNotFoundException extends __BaseException {
  readonly name: "TaskSetNotFoundException";
  readonly $fault: "client";
  constructor(
    opts: __ExceptionOptionType<TaskSetNotFoundException, __BaseException>
  );
}
export declare class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException";
  readonly $fault: "client";
  constructor(
    opts: __ExceptionOptionType<ResourceNotFoundException, __BaseException>
  );
}
export declare class TargetNotConnectedException extends __BaseException {
  readonly name: "TargetNotConnectedException";
  readonly $fault: "client";
  constructor(
    opts: __ExceptionOptionType<TargetNotConnectedException, __BaseException>
  );
}
export declare class AttributeLimitExceededException extends __BaseException {
  readonly name: "AttributeLimitExceededException";
  readonly $fault: "client";
  constructor(
    opts: __ExceptionOptionType<
      AttributeLimitExceededException,
      __BaseException
    >
  );
}
export declare class ResourceInUseException extends __BaseException {
  readonly name: "ResourceInUseException";
  readonly $fault: "client";
  constructor(
    opts: __ExceptionOptionType<ResourceInUseException, __BaseException>
  );
}
export declare class BlockedException extends __BaseException {
  readonly name: "BlockedException";
  readonly $fault: "client";
  constructor(opts: __ExceptionOptionType<BlockedException, __BaseException>);
}
export declare class ConflictException extends __BaseException {
  readonly name: "ConflictException";
  readonly $fault: "client";
  resourceIds?: string[] | undefined;
  constructor(opts: __ExceptionOptionType<ConflictException, __BaseException>);
}
export declare class ServiceDeploymentNotFoundException extends __BaseException {
  readonly name: "ServiceDeploymentNotFoundException";
  readonly $fault: "client";
  constructor(
    opts: __ExceptionOptionType<
      ServiceDeploymentNotFoundException,
      __BaseException
    >
  );
}
export declare class MissingVersionException extends __BaseException {
  readonly name: "MissingVersionException";
  readonly $fault: "client";
  constructor(
    opts: __ExceptionOptionType<MissingVersionException, __BaseException>
  );
}
export declare class NoUpdateAvailableException extends __BaseException {
  readonly name: "NoUpdateAvailableException";
  readonly $fault: "client";
  constructor(
    opts: __ExceptionOptionType<NoUpdateAvailableException, __BaseException>
  );
}
