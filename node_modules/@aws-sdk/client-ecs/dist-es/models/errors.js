import { ECSServiceException as __BaseException } from "./ECSServiceException";
export class AccessDeniedException extends __BaseException {
    name = "AccessDeniedException";
    $fault = "client";
    constructor(opts) {
        super({
            name: "AccessDeniedException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, AccessDeniedException.prototype);
    }
}
export class ClientException extends __BaseException {
    name = "ClientException";
    $fault = "client";
    constructor(opts) {
        super({
            name: "ClientException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, ClientException.prototype);
    }
}
export class ClusterNotFoundException extends __BaseException {
    name = "ClusterNotFoundException";
    $fault = "client";
    constructor(opts) {
        super({
            name: "ClusterNotFoundException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, ClusterNotFoundException.prototype);
    }
}
export class InvalidParameterException extends __BaseException {
    name = "InvalidParameterException";
    $fault = "client";
    constructor(opts) {
        super({
            name: "InvalidParameterException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, InvalidParameterException.prototype);
    }
}
export class LimitExceededException extends __BaseException {
    name = "LimitExceededException";
    $fault = "client";
    constructor(opts) {
        super({
            name: "LimitExceededException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, LimitExceededException.prototype);
    }
}
export class ServerException extends __BaseException {
    name = "ServerException";
    $fault = "server";
    constructor(opts) {
        super({
            name: "ServerException",
            $fault: "server",
            ...opts,
        });
        Object.setPrototypeOf(this, ServerException.prototype);
    }
}
export class UnsupportedFeatureException extends __BaseException {
    name = "UnsupportedFeatureException";
    $fault = "client";
    constructor(opts) {
        super({
            name: "UnsupportedFeatureException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, UnsupportedFeatureException.prototype);
    }
}
export class UpdateInProgressException extends __BaseException {
    name = "UpdateInProgressException";
    $fault = "client";
    constructor(opts) {
        super({
            name: "UpdateInProgressException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, UpdateInProgressException.prototype);
    }
}
export class NamespaceNotFoundException extends __BaseException {
    name = "NamespaceNotFoundException";
    $fault = "client";
    constructor(opts) {
        super({
            name: "NamespaceNotFoundException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, NamespaceNotFoundException.prototype);
    }
}
export class PlatformTaskDefinitionIncompatibilityException extends __BaseException {
    name = "PlatformTaskDefinitionIncompatibilityException";
    $fault = "client";
    constructor(opts) {
        super({
            name: "PlatformTaskDefinitionIncompatibilityException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, PlatformTaskDefinitionIncompatibilityException.prototype);
    }
}
export class PlatformUnknownException extends __BaseException {
    name = "PlatformUnknownException";
    $fault = "client";
    constructor(opts) {
        super({
            name: "PlatformUnknownException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, PlatformUnknownException.prototype);
    }
}
export class ServiceNotActiveException extends __BaseException {
    name = "ServiceNotActiveException";
    $fault = "client";
    constructor(opts) {
        super({
            name: "ServiceNotActiveException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, ServiceNotActiveException.prototype);
    }
}
export class ServiceNotFoundException extends __BaseException {
    name = "ServiceNotFoundException";
    $fault = "client";
    constructor(opts) {
        super({
            name: "ServiceNotFoundException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, ServiceNotFoundException.prototype);
    }
}
export class TargetNotFoundException extends __BaseException {
    name = "TargetNotFoundException";
    $fault = "client";
    constructor(opts) {
        super({
            name: "TargetNotFoundException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, TargetNotFoundException.prototype);
    }
}
export class ClusterContainsCapacityProviderException extends __BaseException {
    name = "ClusterContainsCapacityProviderException";
    $fault = "client";
    constructor(opts) {
        super({
            name: "ClusterContainsCapacityProviderException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, ClusterContainsCapacityProviderException.prototype);
    }
}
export class ClusterContainsContainerInstancesException extends __BaseException {
    name = "ClusterContainsContainerInstancesException";
    $fault = "client";
    constructor(opts) {
        super({
            name: "ClusterContainsContainerInstancesException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, ClusterContainsContainerInstancesException.prototype);
    }
}
export class ClusterContainsServicesException extends __BaseException {
    name = "ClusterContainsServicesException";
    $fault = "client";
    constructor(opts) {
        super({
            name: "ClusterContainsServicesException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, ClusterContainsServicesException.prototype);
    }
}
export class ClusterContainsTasksException extends __BaseException {
    name = "ClusterContainsTasksException";
    $fault = "client";
    constructor(opts) {
        super({
            name: "ClusterContainsTasksException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, ClusterContainsTasksException.prototype);
    }
}
export class TaskSetNotFoundException extends __BaseException {
    name = "TaskSetNotFoundException";
    $fault = "client";
    constructor(opts) {
        super({
            name: "TaskSetNotFoundException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, TaskSetNotFoundException.prototype);
    }
}
export class ResourceNotFoundException extends __BaseException {
    name = "ResourceNotFoundException";
    $fault = "client";
    constructor(opts) {
        super({
            name: "ResourceNotFoundException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, ResourceNotFoundException.prototype);
    }
}
export class TargetNotConnectedException extends __BaseException {
    name = "TargetNotConnectedException";
    $fault = "client";
    constructor(opts) {
        super({
            name: "TargetNotConnectedException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, TargetNotConnectedException.prototype);
    }
}
export class AttributeLimitExceededException extends __BaseException {
    name = "AttributeLimitExceededException";
    $fault = "client";
    constructor(opts) {
        super({
            name: "AttributeLimitExceededException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, AttributeLimitExceededException.prototype);
    }
}
export class ResourceInUseException extends __BaseException {
    name = "ResourceInUseException";
    $fault = "client";
    constructor(opts) {
        super({
            name: "ResourceInUseException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, ResourceInUseException.prototype);
    }
}
export class BlockedException extends __BaseException {
    name = "BlockedException";
    $fault = "client";
    constructor(opts) {
        super({
            name: "BlockedException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, BlockedException.prototype);
    }
}
export class ConflictException extends __BaseException {
    name = "ConflictException";
    $fault = "client";
    resourceIds;
    constructor(opts) {
        super({
            name: "ConflictException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, ConflictException.prototype);
        this.resourceIds = opts.resourceIds;
    }
}
export class ServiceDeploymentNotFoundException extends __BaseException {
    name = "ServiceDeploymentNotFoundException";
    $fault = "client";
    constructor(opts) {
        super({
            name: "ServiceDeploymentNotFoundException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, ServiceDeploymentNotFoundException.prototype);
    }
}
export class MissingVersionException extends __BaseException {
    name = "MissingVersionException";
    $fault = "client";
    constructor(opts) {
        super({
            name: "MissingVersionException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, MissingVersionException.prototype);
    }
}
export class NoUpdateAvailableException extends __BaseException {
    name = "NoUpdateAvailableException";
    $fault = "client";
    constructor(opts) {
        super({
            name: "NoUpdateAvailableException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, NoUpdateAvailableException.prototype);
    }
}
