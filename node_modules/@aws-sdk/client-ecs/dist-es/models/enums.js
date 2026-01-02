export const AcceleratorManufacturer = {
    AMAZON_WEB_SERVICES: "amazon-web-services",
    AMD: "amd",
    HABANA: "habana",
    NVIDIA: "nvidia",
    XILINX: "xilinx",
};
export const AcceleratorName = {
    A100: "a100",
    A10G: "a10g",
    H100: "h100",
    INFERENTIA: "inferentia",
    K520: "k520",
    K80: "k80",
    M60: "m60",
    RADEON_PRO_V520: "radeon-pro-v520",
    T4: "t4",
    T4G: "t4g",
    V100: "v100",
    VU9P: "vu9p",
};
export const AcceleratorType = {
    FPGA: "fpga",
    GPU: "gpu",
    INFERENCE: "inference",
};
export const AccessType = {
    PRIVATE: "PRIVATE",
    PUBLIC: "PUBLIC",
};
export const AgentUpdateStatus = {
    FAILED: "FAILED",
    PENDING: "PENDING",
    STAGED: "STAGED",
    STAGING: "STAGING",
    UPDATED: "UPDATED",
    UPDATING: "UPDATING",
};
export const ManagedDraining = {
    DISABLED: "DISABLED",
    ENABLED: "ENABLED",
};
export const ManagedScalingStatus = {
    DISABLED: "DISABLED",
    ENABLED: "ENABLED",
};
export const ManagedTerminationProtection = {
    DISABLED: "DISABLED",
    ENABLED: "ENABLED",
};
export const CapacityOptionType = {
    ON_DEMAND: "ON_DEMAND",
    SPOT: "SPOT",
};
export const BareMetal = {
    EXCLUDED: "excluded",
    INCLUDED: "included",
    REQUIRED: "required",
};
export const BurstablePerformance = {
    EXCLUDED: "excluded",
    INCLUDED: "included",
    REQUIRED: "required",
};
export const CpuManufacturer = {
    AMAZON_WEB_SERVICES: "amazon-web-services",
    AMD: "amd",
    INTEL: "intel",
};
export const InstanceGeneration = {
    CURRENT: "current",
    PREVIOUS: "previous",
};
export const LocalStorage = {
    EXCLUDED: "excluded",
    INCLUDED: "included",
    REQUIRED: "required",
};
export const LocalStorageType = {
    HDD: "hdd",
    SSD: "ssd",
};
export const ManagedInstancesMonitoringOptions = {
    BASIC: "BASIC",
    DETAILED: "DETAILED",
};
export const PropagateMITags = {
    CAPACITY_PROVIDER: "CAPACITY_PROVIDER",
    NONE: "NONE",
};
export const CapacityProviderStatus = {
    ACTIVE: "ACTIVE",
    DEPROVISIONING: "DEPROVISIONING",
    INACTIVE: "INACTIVE",
    PROVISIONING: "PROVISIONING",
};
export const CapacityProviderType = {
    EC2_AUTOSCALING: "EC2_AUTOSCALING",
    FARGATE: "FARGATE",
    FARGATE_SPOT: "FARGATE_SPOT",
    MANAGED_INSTANCES: "MANAGED_INSTANCES",
};
export const CapacityProviderUpdateStatus = {
    CREATE_COMPLETE: "CREATE_COMPLETE",
    CREATE_FAILED: "CREATE_FAILED",
    CREATE_IN_PROGRESS: "CREATE_IN_PROGRESS",
    DELETE_COMPLETE: "DELETE_COMPLETE",
    DELETE_FAILED: "DELETE_FAILED",
    DELETE_IN_PROGRESS: "DELETE_IN_PROGRESS",
    UPDATE_COMPLETE: "UPDATE_COMPLETE",
    UPDATE_FAILED: "UPDATE_FAILED",
    UPDATE_IN_PROGRESS: "UPDATE_IN_PROGRESS",
};
export const ExecuteCommandLogging = {
    DEFAULT: "DEFAULT",
    NONE: "NONE",
    OVERRIDE: "OVERRIDE",
};
export const ClusterSettingName = {
    CONTAINER_INSIGHTS: "containerInsights",
};
export const ExpressGatewayServiceScalingMetric = {
    AverageCPUUtilization: "AVERAGE_CPU",
    AverageMemoryUtilization: "AVERAGE_MEMORY",
    RequestCountPerTarget: "REQUEST_COUNT_PER_TARGET",
};
export const ExpressGatewayServiceStatusCode = {
    ACTIVE: "ACTIVE",
    DRAINING: "DRAINING",
    INACTIVE: "INACTIVE",
};
export const AvailabilityZoneRebalancing = {
    DISABLED: "DISABLED",
    ENABLED: "ENABLED",
};
export const DeploymentLifecycleHookStage = {
    POST_PRODUCTION_TRAFFIC_SHIFT: "POST_PRODUCTION_TRAFFIC_SHIFT",
    POST_SCALE_UP: "POST_SCALE_UP",
    POST_TEST_TRAFFIC_SHIFT: "POST_TEST_TRAFFIC_SHIFT",
    PRE_SCALE_UP: "PRE_SCALE_UP",
    PRODUCTION_TRAFFIC_SHIFT: "PRODUCTION_TRAFFIC_SHIFT",
    RECONCILE_SERVICE: "RECONCILE_SERVICE",
    TEST_TRAFFIC_SHIFT: "TEST_TRAFFIC_SHIFT",
};
export const DeploymentStrategy = {
    BLUE_GREEN: "BLUE_GREEN",
    CANARY: "CANARY",
    LINEAR: "LINEAR",
    ROLLING: "ROLLING",
};
export const DeploymentControllerType = {
    CODE_DEPLOY: "CODE_DEPLOY",
    ECS: "ECS",
    EXTERNAL: "EXTERNAL",
};
export const LaunchType = {
    EC2: "EC2",
    EXTERNAL: "EXTERNAL",
    FARGATE: "FARGATE",
    MANAGED_INSTANCES: "MANAGED_INSTANCES",
};
export const AssignPublicIp = {
    DISABLED: "DISABLED",
    ENABLED: "ENABLED",
};
export const PlacementConstraintType = {
    DISTINCT_INSTANCE: "distinctInstance",
    MEMBER_OF: "memberOf",
};
export const PlacementStrategyType = {
    BINPACK: "binpack",
    RANDOM: "random",
    SPREAD: "spread",
};
export const PropagateTags = {
    NONE: "NONE",
    SERVICE: "SERVICE",
    TASK_DEFINITION: "TASK_DEFINITION",
};
export const SchedulingStrategy = {
    DAEMON: "DAEMON",
    REPLICA: "REPLICA",
};
export const ServiceConnectAccessLoggingFormat = {
    JSON: "JSON",
    TEXT: "TEXT",
};
export const ServiceConnectIncludeQueryParameters = {
    DISABLED: "DISABLED",
    ENABLED: "ENABLED",
};
export const LogDriver = {
    AWSFIRELENS: "awsfirelens",
    AWSLOGS: "awslogs",
    FLUENTD: "fluentd",
    GELF: "gelf",
    JOURNALD: "journald",
    JSON_FILE: "json-file",
    SPLUNK: "splunk",
    SYSLOG: "syslog",
};
export const TaskFilesystemType = {
    EXT3: "ext3",
    EXT4: "ext4",
    NTFS: "ntfs",
    XFS: "xfs",
};
export const EBSResourceType = {
    VOLUME: "volume",
};
export const DeploymentRolloutState = {
    COMPLETED: "COMPLETED",
    FAILED: "FAILED",
    IN_PROGRESS: "IN_PROGRESS",
};
export const ResourceManagementType = {
    CUSTOMER: "CUSTOMER",
    ECS: "ECS",
};
export const ScaleUnit = {
    PERCENT: "PERCENT",
};
export const StabilityStatus = {
    STABILIZING: "STABILIZING",
    STEADY_STATE: "STEADY_STATE",
};
export const SettingName = {
    AWSVPC_TRUNKING: "awsvpcTrunking",
    CONTAINER_INSIGHTS: "containerInsights",
    CONTAINER_INSTANCE_LONG_ARN_FORMAT: "containerInstanceLongArnFormat",
    DEFAULT_LOG_DRIVER_MODE: "defaultLogDriverMode",
    FARGATE_EVENT_WINDOWS: "fargateEventWindows",
    FARGATE_FIPS_MODE: "fargateFIPSMode",
    FARGATE_TASK_RETIREMENT_WAIT_PERIOD: "fargateTaskRetirementWaitPeriod",
    GUARD_DUTY_ACTIVATE: "guardDutyActivate",
    SERVICE_LONG_ARN_FORMAT: "serviceLongArnFormat",
    TAG_RESOURCE_AUTHORIZATION: "tagResourceAuthorization",
    TASK_LONG_ARN_FORMAT: "taskLongArnFormat",
};
export const SettingType = {
    AWS_MANAGED: "aws_managed",
    USER: "user",
};
export const TargetType = {
    CONTAINER_INSTANCE: "container-instance",
};
export const Compatibility = {
    EC2: "EC2",
    EXTERNAL: "EXTERNAL",
    FARGATE: "FARGATE",
    MANAGED_INSTANCES: "MANAGED_INSTANCES",
};
export const ContainerCondition = {
    COMPLETE: "COMPLETE",
    HEALTHY: "HEALTHY",
    START: "START",
    SUCCESS: "SUCCESS",
};
export const EnvironmentFileType = {
    S3: "s3",
};
export const FirelensConfigurationType = {
    FLUENTBIT: "fluentbit",
    FLUENTD: "fluentd",
};
export const DeviceCgroupPermission = {
    MKNOD: "mknod",
    READ: "read",
    WRITE: "write",
};
export const ApplicationProtocol = {
    GRPC: "grpc",
    HTTP: "http",
    HTTP2: "http2",
};
export const TransportProtocol = {
    TCP: "tcp",
    UDP: "udp",
};
export const ResourceType = {
    GPU: "GPU",
    INFERENCE_ACCELERATOR: "InferenceAccelerator",
};
export const UlimitName = {
    CORE: "core",
    CPU: "cpu",
    DATA: "data",
    FSIZE: "fsize",
    LOCKS: "locks",
    MEMLOCK: "memlock",
    MSGQUEUE: "msgqueue",
    NICE: "nice",
    NOFILE: "nofile",
    NPROC: "nproc",
    RSS: "rss",
    RTPRIO: "rtprio",
    RTTIME: "rttime",
    SIGPENDING: "sigpending",
    STACK: "stack",
};
export const VersionConsistency = {
    DISABLED: "disabled",
    ENABLED: "enabled",
};
export const IpcMode = {
    HOST: "host",
    NONE: "none",
    TASK: "task",
};
export const NetworkMode = {
    AWSVPC: "awsvpc",
    BRIDGE: "bridge",
    HOST: "host",
    NONE: "none",
};
export const PidMode = {
    HOST: "host",
    TASK: "task",
};
export const TaskDefinitionPlacementConstraintType = {
    MEMBER_OF: "memberOf",
};
export const ProxyConfigurationType = {
    APPMESH: "APPMESH",
};
export const CPUArchitecture = {
    ARM64: "ARM64",
    X86_64: "X86_64",
};
export const OSFamily = {
    LINUX: "LINUX",
    WINDOWS_SERVER_2004_CORE: "WINDOWS_SERVER_2004_CORE",
    WINDOWS_SERVER_2016_FULL: "WINDOWS_SERVER_2016_FULL",
    WINDOWS_SERVER_2019_CORE: "WINDOWS_SERVER_2019_CORE",
    WINDOWS_SERVER_2019_FULL: "WINDOWS_SERVER_2019_FULL",
    WINDOWS_SERVER_2022_CORE: "WINDOWS_SERVER_2022_CORE",
    WINDOWS_SERVER_2022_FULL: "WINDOWS_SERVER_2022_FULL",
    WINDOWS_SERVER_2025_CORE: "WINDOWS_SERVER_2025_CORE",
    WINDOWS_SERVER_2025_FULL: "WINDOWS_SERVER_2025_FULL",
    WINDOWS_SERVER_20H2_CORE: "WINDOWS_SERVER_20H2_CORE",
};
export const TaskDefinitionStatus = {
    ACTIVE: "ACTIVE",
    DELETE_IN_PROGRESS: "DELETE_IN_PROGRESS",
    INACTIVE: "INACTIVE",
};
export const Scope = {
    SHARED: "shared",
    TASK: "task",
};
export const EFSAuthorizationConfigIAM = {
    DISABLED: "DISABLED",
    ENABLED: "ENABLED",
};
export const EFSTransitEncryption = {
    DISABLED: "DISABLED",
    ENABLED: "ENABLED",
};
export const InstanceHealthCheckState = {
    IMPAIRED: "IMPAIRED",
    INITIALIZING: "INITIALIZING",
    INSUFFICIENT_DATA: "INSUFFICIENT_DATA",
    OK: "OK",
};
export const InstanceHealthCheckType = {
    CONTAINER_RUNTIME: "CONTAINER_RUNTIME",
};
export const CapacityProviderField = {
    TAGS: "TAGS",
};
export const ClusterField = {
    ATTACHMENTS: "ATTACHMENTS",
    CONFIGURATIONS: "CONFIGURATIONS",
    SETTINGS: "SETTINGS",
    STATISTICS: "STATISTICS",
    TAGS: "TAGS",
};
export const ContainerInstanceField = {
    CONTAINER_INSTANCE_HEALTH: "CONTAINER_INSTANCE_HEALTH",
    TAGS: "TAGS",
};
export const ExpressGatewayServiceInclude = {
    TAGS: "TAGS",
};
export const ServiceDeploymentRollbackMonitorsStatus = {
    DISABLED: "DISABLED",
    MONITORING: "MONITORING",
    MONITORING_COMPLETE: "MONITORING_COMPLETE",
    TRIGGERED: "TRIGGERED",
};
export const ServiceDeploymentLifecycleStage = {
    BAKE_TIME: "BAKE_TIME",
    CLEAN_UP: "CLEAN_UP",
    POST_PRODUCTION_TRAFFIC_SHIFT: "POST_PRODUCTION_TRAFFIC_SHIFT",
    POST_SCALE_UP: "POST_SCALE_UP",
    POST_TEST_TRAFFIC_SHIFT: "POST_TEST_TRAFFIC_SHIFT",
    PRE_SCALE_UP: "PRE_SCALE_UP",
    PRODUCTION_TRAFFIC_SHIFT: "PRODUCTION_TRAFFIC_SHIFT",
    RECONCILE_SERVICE: "RECONCILE_SERVICE",
    SCALE_UP: "SCALE_UP",
    TEST_TRAFFIC_SHIFT: "TEST_TRAFFIC_SHIFT",
};
export const ServiceDeploymentStatus = {
    IN_PROGRESS: "IN_PROGRESS",
    PENDING: "PENDING",
    ROLLBACK_FAILED: "ROLLBACK_FAILED",
    ROLLBACK_IN_PROGRESS: "ROLLBACK_IN_PROGRESS",
    ROLLBACK_REQUESTED: "ROLLBACK_REQUESTED",
    ROLLBACK_SUCCESSFUL: "ROLLBACK_SUCCESSFUL",
    STOPPED: "STOPPED",
    STOP_REQUESTED: "STOP_REQUESTED",
    SUCCESSFUL: "SUCCESSFUL",
};
export const ManagedResourceStatus = {
    ACTIVE: "ACTIVE",
    DELETED: "DELETED",
    DEPROVISIONING: "DEPROVISIONING",
    FAILED: "FAILED",
    PROVISIONING: "PROVISIONING",
};
export const ServiceField = {
    TAGS: "TAGS",
};
export const TaskDefinitionField = {
    TAGS: "TAGS",
};
export const TaskField = {
    TAGS: "TAGS",
};
export const Connectivity = {
    CONNECTED: "CONNECTED",
    DISCONNECTED: "DISCONNECTED",
};
export const HealthStatus = {
    HEALTHY: "HEALTHY",
    UNHEALTHY: "UNHEALTHY",
    UNKNOWN: "UNKNOWN",
};
export const ManagedAgentName = {
    ExecuteCommandAgent: "ExecuteCommandAgent",
};
export const TaskStopCode = {
    ESSENTIAL_CONTAINER_EXITED: "EssentialContainerExited",
    SERVICE_SCHEDULER_INITIATED: "ServiceSchedulerInitiated",
    SPOT_INTERRUPTION: "SpotInterruption",
    TASK_FAILED_TO_START: "TaskFailedToStart",
    TERMINATION_NOTICE: "TerminationNotice",
    USER_INITIATED: "UserInitiated",
};
export const TaskSetField = {
    TAGS: "TAGS",
};
export const ContainerInstanceStatus = {
    ACTIVE: "ACTIVE",
    DEREGISTERING: "DEREGISTERING",
    DRAINING: "DRAINING",
    REGISTERING: "REGISTERING",
    REGISTRATION_FAILED: "REGISTRATION_FAILED",
};
export const TaskDefinitionFamilyStatus = {
    ACTIVE: "ACTIVE",
    ALL: "ALL",
    INACTIVE: "INACTIVE",
};
export const SortOrder = {
    ASC: "ASC",
    DESC: "DESC",
};
export const DesiredStatus = {
    PENDING: "PENDING",
    RUNNING: "RUNNING",
    STOPPED: "STOPPED",
};
export const PlatformDeviceType = {
    GPU: "GPU",
};
export const StopServiceDeploymentStopType = {
    ABORT: "ABORT",
    ROLLBACK: "ROLLBACK",
};
