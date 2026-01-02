/**
 * @public
 * @enum
 */
export declare const AcceleratorManufacturer: {
    readonly AMAZON_WEB_SERVICES: "amazon-web-services";
    readonly AMD: "amd";
    readonly HABANA: "habana";
    readonly NVIDIA: "nvidia";
    readonly XILINX: "xilinx";
};
/**
 * @public
 */
export type AcceleratorManufacturer = (typeof AcceleratorManufacturer)[keyof typeof AcceleratorManufacturer];
/**
 * @public
 * @enum
 */
export declare const AcceleratorName: {
    readonly A100: "a100";
    readonly A10G: "a10g";
    readonly H100: "h100";
    readonly INFERENTIA: "inferentia";
    readonly K520: "k520";
    readonly K80: "k80";
    readonly M60: "m60";
    readonly RADEON_PRO_V520: "radeon-pro-v520";
    readonly T4: "t4";
    readonly T4G: "t4g";
    readonly V100: "v100";
    readonly VU9P: "vu9p";
};
/**
 * @public
 */
export type AcceleratorName = (typeof AcceleratorName)[keyof typeof AcceleratorName];
/**
 * @public
 * @enum
 */
export declare const AcceleratorType: {
    readonly FPGA: "fpga";
    readonly GPU: "gpu";
    readonly INFERENCE: "inference";
};
/**
 * @public
 */
export type AcceleratorType = (typeof AcceleratorType)[keyof typeof AcceleratorType];
/**
 * @public
 * @enum
 */
export declare const AccessType: {
    readonly PRIVATE: "PRIVATE";
    readonly PUBLIC: "PUBLIC";
};
/**
 * @public
 */
export type AccessType = (typeof AccessType)[keyof typeof AccessType];
/**
 * @public
 * @enum
 */
export declare const AgentUpdateStatus: {
    readonly FAILED: "FAILED";
    readonly PENDING: "PENDING";
    readonly STAGED: "STAGED";
    readonly STAGING: "STAGING";
    readonly UPDATED: "UPDATED";
    readonly UPDATING: "UPDATING";
};
/**
 * @public
 */
export type AgentUpdateStatus = (typeof AgentUpdateStatus)[keyof typeof AgentUpdateStatus];
/**
 * @public
 * @enum
 */
export declare const ManagedDraining: {
    readonly DISABLED: "DISABLED";
    readonly ENABLED: "ENABLED";
};
/**
 * @public
 */
export type ManagedDraining = (typeof ManagedDraining)[keyof typeof ManagedDraining];
/**
 * @public
 * @enum
 */
export declare const ManagedScalingStatus: {
    readonly DISABLED: "DISABLED";
    readonly ENABLED: "ENABLED";
};
/**
 * @public
 */
export type ManagedScalingStatus = (typeof ManagedScalingStatus)[keyof typeof ManagedScalingStatus];
/**
 * @public
 * @enum
 */
export declare const ManagedTerminationProtection: {
    readonly DISABLED: "DISABLED";
    readonly ENABLED: "ENABLED";
};
/**
 * @public
 */
export type ManagedTerminationProtection = (typeof ManagedTerminationProtection)[keyof typeof ManagedTerminationProtection];
/**
 * @public
 * @enum
 */
export declare const CapacityOptionType: {
    readonly ON_DEMAND: "ON_DEMAND";
    readonly SPOT: "SPOT";
};
/**
 * @public
 */
export type CapacityOptionType = (typeof CapacityOptionType)[keyof typeof CapacityOptionType];
/**
 * @public
 * @enum
 */
export declare const BareMetal: {
    readonly EXCLUDED: "excluded";
    readonly INCLUDED: "included";
    readonly REQUIRED: "required";
};
/**
 * @public
 */
export type BareMetal = (typeof BareMetal)[keyof typeof BareMetal];
/**
 * @public
 * @enum
 */
export declare const BurstablePerformance: {
    readonly EXCLUDED: "excluded";
    readonly INCLUDED: "included";
    readonly REQUIRED: "required";
};
/**
 * @public
 */
export type BurstablePerformance = (typeof BurstablePerformance)[keyof typeof BurstablePerformance];
/**
 * @public
 * @enum
 */
export declare const CpuManufacturer: {
    readonly AMAZON_WEB_SERVICES: "amazon-web-services";
    readonly AMD: "amd";
    readonly INTEL: "intel";
};
/**
 * @public
 */
export type CpuManufacturer = (typeof CpuManufacturer)[keyof typeof CpuManufacturer];
/**
 * @public
 * @enum
 */
export declare const InstanceGeneration: {
    readonly CURRENT: "current";
    readonly PREVIOUS: "previous";
};
/**
 * @public
 */
export type InstanceGeneration = (typeof InstanceGeneration)[keyof typeof InstanceGeneration];
/**
 * @public
 * @enum
 */
export declare const LocalStorage: {
    readonly EXCLUDED: "excluded";
    readonly INCLUDED: "included";
    readonly REQUIRED: "required";
};
/**
 * @public
 */
export type LocalStorage = (typeof LocalStorage)[keyof typeof LocalStorage];
/**
 * @public
 * @enum
 */
export declare const LocalStorageType: {
    readonly HDD: "hdd";
    readonly SSD: "ssd";
};
/**
 * @public
 */
export type LocalStorageType = (typeof LocalStorageType)[keyof typeof LocalStorageType];
/**
 * @public
 * @enum
 */
export declare const ManagedInstancesMonitoringOptions: {
    readonly BASIC: "BASIC";
    readonly DETAILED: "DETAILED";
};
/**
 * @public
 */
export type ManagedInstancesMonitoringOptions = (typeof ManagedInstancesMonitoringOptions)[keyof typeof ManagedInstancesMonitoringOptions];
/**
 * @public
 * @enum
 */
export declare const PropagateMITags: {
    readonly CAPACITY_PROVIDER: "CAPACITY_PROVIDER";
    readonly NONE: "NONE";
};
/**
 * @public
 */
export type PropagateMITags = (typeof PropagateMITags)[keyof typeof PropagateMITags];
/**
 * @public
 * @enum
 */
export declare const CapacityProviderStatus: {
    readonly ACTIVE: "ACTIVE";
    readonly DEPROVISIONING: "DEPROVISIONING";
    readonly INACTIVE: "INACTIVE";
    readonly PROVISIONING: "PROVISIONING";
};
/**
 * @public
 */
export type CapacityProviderStatus = (typeof CapacityProviderStatus)[keyof typeof CapacityProviderStatus];
/**
 * @public
 * @enum
 */
export declare const CapacityProviderType: {
    readonly EC2_AUTOSCALING: "EC2_AUTOSCALING";
    readonly FARGATE: "FARGATE";
    readonly FARGATE_SPOT: "FARGATE_SPOT";
    readonly MANAGED_INSTANCES: "MANAGED_INSTANCES";
};
/**
 * @public
 */
export type CapacityProviderType = (typeof CapacityProviderType)[keyof typeof CapacityProviderType];
/**
 * @public
 * @enum
 */
export declare const CapacityProviderUpdateStatus: {
    readonly CREATE_COMPLETE: "CREATE_COMPLETE";
    readonly CREATE_FAILED: "CREATE_FAILED";
    readonly CREATE_IN_PROGRESS: "CREATE_IN_PROGRESS";
    readonly DELETE_COMPLETE: "DELETE_COMPLETE";
    readonly DELETE_FAILED: "DELETE_FAILED";
    readonly DELETE_IN_PROGRESS: "DELETE_IN_PROGRESS";
    readonly UPDATE_COMPLETE: "UPDATE_COMPLETE";
    readonly UPDATE_FAILED: "UPDATE_FAILED";
    readonly UPDATE_IN_PROGRESS: "UPDATE_IN_PROGRESS";
};
/**
 * @public
 */
export type CapacityProviderUpdateStatus = (typeof CapacityProviderUpdateStatus)[keyof typeof CapacityProviderUpdateStatus];
/**
 * @public
 * @enum
 */
export declare const ExecuteCommandLogging: {
    readonly DEFAULT: "DEFAULT";
    readonly NONE: "NONE";
    readonly OVERRIDE: "OVERRIDE";
};
/**
 * @public
 */
export type ExecuteCommandLogging = (typeof ExecuteCommandLogging)[keyof typeof ExecuteCommandLogging];
/**
 * @public
 * @enum
 */
export declare const ClusterSettingName: {
    readonly CONTAINER_INSIGHTS: "containerInsights";
};
/**
 * @public
 */
export type ClusterSettingName = (typeof ClusterSettingName)[keyof typeof ClusterSettingName];
/**
 * @public
 * @enum
 */
export declare const ExpressGatewayServiceScalingMetric: {
    readonly AverageCPUUtilization: "AVERAGE_CPU";
    readonly AverageMemoryUtilization: "AVERAGE_MEMORY";
    readonly RequestCountPerTarget: "REQUEST_COUNT_PER_TARGET";
};
/**
 * @public
 */
export type ExpressGatewayServiceScalingMetric = (typeof ExpressGatewayServiceScalingMetric)[keyof typeof ExpressGatewayServiceScalingMetric];
/**
 * @public
 * @enum
 */
export declare const ExpressGatewayServiceStatusCode: {
    readonly ACTIVE: "ACTIVE";
    readonly DRAINING: "DRAINING";
    readonly INACTIVE: "INACTIVE";
};
/**
 * @public
 */
export type ExpressGatewayServiceStatusCode = (typeof ExpressGatewayServiceStatusCode)[keyof typeof ExpressGatewayServiceStatusCode];
/**
 * @public
 * @enum
 */
export declare const AvailabilityZoneRebalancing: {
    readonly DISABLED: "DISABLED";
    readonly ENABLED: "ENABLED";
};
/**
 * @public
 */
export type AvailabilityZoneRebalancing = (typeof AvailabilityZoneRebalancing)[keyof typeof AvailabilityZoneRebalancing];
/**
 * @public
 * @enum
 */
export declare const DeploymentLifecycleHookStage: {
    readonly POST_PRODUCTION_TRAFFIC_SHIFT: "POST_PRODUCTION_TRAFFIC_SHIFT";
    readonly POST_SCALE_UP: "POST_SCALE_UP";
    readonly POST_TEST_TRAFFIC_SHIFT: "POST_TEST_TRAFFIC_SHIFT";
    readonly PRE_SCALE_UP: "PRE_SCALE_UP";
    readonly PRODUCTION_TRAFFIC_SHIFT: "PRODUCTION_TRAFFIC_SHIFT";
    readonly RECONCILE_SERVICE: "RECONCILE_SERVICE";
    readonly TEST_TRAFFIC_SHIFT: "TEST_TRAFFIC_SHIFT";
};
/**
 * @public
 */
export type DeploymentLifecycleHookStage = (typeof DeploymentLifecycleHookStage)[keyof typeof DeploymentLifecycleHookStage];
/**
 * @public
 * @enum
 */
export declare const DeploymentStrategy: {
    readonly BLUE_GREEN: "BLUE_GREEN";
    readonly CANARY: "CANARY";
    readonly LINEAR: "LINEAR";
    readonly ROLLING: "ROLLING";
};
/**
 * @public
 */
export type DeploymentStrategy = (typeof DeploymentStrategy)[keyof typeof DeploymentStrategy];
/**
 * @public
 * @enum
 */
export declare const DeploymentControllerType: {
    readonly CODE_DEPLOY: "CODE_DEPLOY";
    readonly ECS: "ECS";
    readonly EXTERNAL: "EXTERNAL";
};
/**
 * @public
 */
export type DeploymentControllerType = (typeof DeploymentControllerType)[keyof typeof DeploymentControllerType];
/**
 * @public
 * @enum
 */
export declare const LaunchType: {
    readonly EC2: "EC2";
    readonly EXTERNAL: "EXTERNAL";
    readonly FARGATE: "FARGATE";
    readonly MANAGED_INSTANCES: "MANAGED_INSTANCES";
};
/**
 * @public
 */
export type LaunchType = (typeof LaunchType)[keyof typeof LaunchType];
/**
 * @public
 * @enum
 */
export declare const AssignPublicIp: {
    readonly DISABLED: "DISABLED";
    readonly ENABLED: "ENABLED";
};
/**
 * @public
 */
export type AssignPublicIp = (typeof AssignPublicIp)[keyof typeof AssignPublicIp];
/**
 * @public
 * @enum
 */
export declare const PlacementConstraintType: {
    readonly DISTINCT_INSTANCE: "distinctInstance";
    readonly MEMBER_OF: "memberOf";
};
/**
 * @public
 */
export type PlacementConstraintType = (typeof PlacementConstraintType)[keyof typeof PlacementConstraintType];
/**
 * @public
 * @enum
 */
export declare const PlacementStrategyType: {
    readonly BINPACK: "binpack";
    readonly RANDOM: "random";
    readonly SPREAD: "spread";
};
/**
 * @public
 */
export type PlacementStrategyType = (typeof PlacementStrategyType)[keyof typeof PlacementStrategyType];
/**
 * @public
 * @enum
 */
export declare const PropagateTags: {
    readonly NONE: "NONE";
    readonly SERVICE: "SERVICE";
    readonly TASK_DEFINITION: "TASK_DEFINITION";
};
/**
 * @public
 */
export type PropagateTags = (typeof PropagateTags)[keyof typeof PropagateTags];
/**
 * @public
 * @enum
 */
export declare const SchedulingStrategy: {
    readonly DAEMON: "DAEMON";
    readonly REPLICA: "REPLICA";
};
/**
 * @public
 */
export type SchedulingStrategy = (typeof SchedulingStrategy)[keyof typeof SchedulingStrategy];
/**
 * @public
 * @enum
 */
export declare const ServiceConnectAccessLoggingFormat: {
    readonly JSON: "JSON";
    readonly TEXT: "TEXT";
};
/**
 * @public
 */
export type ServiceConnectAccessLoggingFormat = (typeof ServiceConnectAccessLoggingFormat)[keyof typeof ServiceConnectAccessLoggingFormat];
/**
 * @public
 * @enum
 */
export declare const ServiceConnectIncludeQueryParameters: {
    readonly DISABLED: "DISABLED";
    readonly ENABLED: "ENABLED";
};
/**
 * @public
 */
export type ServiceConnectIncludeQueryParameters = (typeof ServiceConnectIncludeQueryParameters)[keyof typeof ServiceConnectIncludeQueryParameters];
/**
 * @public
 * @enum
 */
export declare const LogDriver: {
    readonly AWSFIRELENS: "awsfirelens";
    readonly AWSLOGS: "awslogs";
    readonly FLUENTD: "fluentd";
    readonly GELF: "gelf";
    readonly JOURNALD: "journald";
    readonly JSON_FILE: "json-file";
    readonly SPLUNK: "splunk";
    readonly SYSLOG: "syslog";
};
/**
 * @public
 */
export type LogDriver = (typeof LogDriver)[keyof typeof LogDriver];
/**
 * @public
 * @enum
 */
export declare const TaskFilesystemType: {
    readonly EXT3: "ext3";
    readonly EXT4: "ext4";
    readonly NTFS: "ntfs";
    readonly XFS: "xfs";
};
/**
 * @public
 */
export type TaskFilesystemType = (typeof TaskFilesystemType)[keyof typeof TaskFilesystemType];
/**
 * @public
 * @enum
 */
export declare const EBSResourceType: {
    readonly VOLUME: "volume";
};
/**
 * @public
 */
export type EBSResourceType = (typeof EBSResourceType)[keyof typeof EBSResourceType];
/**
 * @public
 * @enum
 */
export declare const DeploymentRolloutState: {
    readonly COMPLETED: "COMPLETED";
    readonly FAILED: "FAILED";
    readonly IN_PROGRESS: "IN_PROGRESS";
};
/**
 * @public
 */
export type DeploymentRolloutState = (typeof DeploymentRolloutState)[keyof typeof DeploymentRolloutState];
/**
 * @public
 * @enum
 */
export declare const ResourceManagementType: {
    readonly CUSTOMER: "CUSTOMER";
    readonly ECS: "ECS";
};
/**
 * @public
 */
export type ResourceManagementType = (typeof ResourceManagementType)[keyof typeof ResourceManagementType];
/**
 * @public
 * @enum
 */
export declare const ScaleUnit: {
    readonly PERCENT: "PERCENT";
};
/**
 * @public
 */
export type ScaleUnit = (typeof ScaleUnit)[keyof typeof ScaleUnit];
/**
 * @public
 * @enum
 */
export declare const StabilityStatus: {
    readonly STABILIZING: "STABILIZING";
    readonly STEADY_STATE: "STEADY_STATE";
};
/**
 * @public
 */
export type StabilityStatus = (typeof StabilityStatus)[keyof typeof StabilityStatus];
/**
 * @public
 * @enum
 */
export declare const SettingName: {
    readonly AWSVPC_TRUNKING: "awsvpcTrunking";
    readonly CONTAINER_INSIGHTS: "containerInsights";
    readonly CONTAINER_INSTANCE_LONG_ARN_FORMAT: "containerInstanceLongArnFormat";
    readonly DEFAULT_LOG_DRIVER_MODE: "defaultLogDriverMode";
    readonly FARGATE_EVENT_WINDOWS: "fargateEventWindows";
    readonly FARGATE_FIPS_MODE: "fargateFIPSMode";
    readonly FARGATE_TASK_RETIREMENT_WAIT_PERIOD: "fargateTaskRetirementWaitPeriod";
    readonly GUARD_DUTY_ACTIVATE: "guardDutyActivate";
    readonly SERVICE_LONG_ARN_FORMAT: "serviceLongArnFormat";
    readonly TAG_RESOURCE_AUTHORIZATION: "tagResourceAuthorization";
    readonly TASK_LONG_ARN_FORMAT: "taskLongArnFormat";
};
/**
 * @public
 */
export type SettingName = (typeof SettingName)[keyof typeof SettingName];
/**
 * @public
 * @enum
 */
export declare const SettingType: {
    readonly AWS_MANAGED: "aws_managed";
    readonly USER: "user";
};
/**
 * @public
 */
export type SettingType = (typeof SettingType)[keyof typeof SettingType];
/**
 * @public
 * @enum
 */
export declare const TargetType: {
    readonly CONTAINER_INSTANCE: "container-instance";
};
/**
 * @public
 */
export type TargetType = (typeof TargetType)[keyof typeof TargetType];
/**
 * @public
 * @enum
 */
export declare const Compatibility: {
    readonly EC2: "EC2";
    readonly EXTERNAL: "EXTERNAL";
    readonly FARGATE: "FARGATE";
    readonly MANAGED_INSTANCES: "MANAGED_INSTANCES";
};
/**
 * @public
 */
export type Compatibility = (typeof Compatibility)[keyof typeof Compatibility];
/**
 * @public
 * @enum
 */
export declare const ContainerCondition: {
    readonly COMPLETE: "COMPLETE";
    readonly HEALTHY: "HEALTHY";
    readonly START: "START";
    readonly SUCCESS: "SUCCESS";
};
/**
 * @public
 */
export type ContainerCondition = (typeof ContainerCondition)[keyof typeof ContainerCondition];
/**
 * @public
 * @enum
 */
export declare const EnvironmentFileType: {
    readonly S3: "s3";
};
/**
 * @public
 */
export type EnvironmentFileType = (typeof EnvironmentFileType)[keyof typeof EnvironmentFileType];
/**
 * @public
 * @enum
 */
export declare const FirelensConfigurationType: {
    readonly FLUENTBIT: "fluentbit";
    readonly FLUENTD: "fluentd";
};
/**
 * @public
 */
export type FirelensConfigurationType = (typeof FirelensConfigurationType)[keyof typeof FirelensConfigurationType];
/**
 * @public
 * @enum
 */
export declare const DeviceCgroupPermission: {
    readonly MKNOD: "mknod";
    readonly READ: "read";
    readonly WRITE: "write";
};
/**
 * @public
 */
export type DeviceCgroupPermission = (typeof DeviceCgroupPermission)[keyof typeof DeviceCgroupPermission];
/**
 * @public
 * @enum
 */
export declare const ApplicationProtocol: {
    readonly GRPC: "grpc";
    readonly HTTP: "http";
    readonly HTTP2: "http2";
};
/**
 * @public
 */
export type ApplicationProtocol = (typeof ApplicationProtocol)[keyof typeof ApplicationProtocol];
/**
 * @public
 * @enum
 */
export declare const TransportProtocol: {
    readonly TCP: "tcp";
    readonly UDP: "udp";
};
/**
 * @public
 */
export type TransportProtocol = (typeof TransportProtocol)[keyof typeof TransportProtocol];
/**
 * @public
 * @enum
 */
export declare const ResourceType: {
    readonly GPU: "GPU";
    readonly INFERENCE_ACCELERATOR: "InferenceAccelerator";
};
/**
 * @public
 */
export type ResourceType = (typeof ResourceType)[keyof typeof ResourceType];
/**
 * @public
 * @enum
 */
export declare const UlimitName: {
    readonly CORE: "core";
    readonly CPU: "cpu";
    readonly DATA: "data";
    readonly FSIZE: "fsize";
    readonly LOCKS: "locks";
    readonly MEMLOCK: "memlock";
    readonly MSGQUEUE: "msgqueue";
    readonly NICE: "nice";
    readonly NOFILE: "nofile";
    readonly NPROC: "nproc";
    readonly RSS: "rss";
    readonly RTPRIO: "rtprio";
    readonly RTTIME: "rttime";
    readonly SIGPENDING: "sigpending";
    readonly STACK: "stack";
};
/**
 * @public
 */
export type UlimitName = (typeof UlimitName)[keyof typeof UlimitName];
/**
 * @public
 * @enum
 */
export declare const VersionConsistency: {
    readonly DISABLED: "disabled";
    readonly ENABLED: "enabled";
};
/**
 * @public
 */
export type VersionConsistency = (typeof VersionConsistency)[keyof typeof VersionConsistency];
/**
 * @public
 * @enum
 */
export declare const IpcMode: {
    readonly HOST: "host";
    readonly NONE: "none";
    readonly TASK: "task";
};
/**
 * @public
 */
export type IpcMode = (typeof IpcMode)[keyof typeof IpcMode];
/**
 * @public
 * @enum
 */
export declare const NetworkMode: {
    readonly AWSVPC: "awsvpc";
    readonly BRIDGE: "bridge";
    readonly HOST: "host";
    readonly NONE: "none";
};
/**
 * @public
 */
export type NetworkMode = (typeof NetworkMode)[keyof typeof NetworkMode];
/**
 * @public
 * @enum
 */
export declare const PidMode: {
    readonly HOST: "host";
    readonly TASK: "task";
};
/**
 * @public
 */
export type PidMode = (typeof PidMode)[keyof typeof PidMode];
/**
 * @public
 * @enum
 */
export declare const TaskDefinitionPlacementConstraintType: {
    readonly MEMBER_OF: "memberOf";
};
/**
 * @public
 */
export type TaskDefinitionPlacementConstraintType = (typeof TaskDefinitionPlacementConstraintType)[keyof typeof TaskDefinitionPlacementConstraintType];
/**
 * @public
 * @enum
 */
export declare const ProxyConfigurationType: {
    readonly APPMESH: "APPMESH";
};
/**
 * @public
 */
export type ProxyConfigurationType = (typeof ProxyConfigurationType)[keyof typeof ProxyConfigurationType];
/**
 * @public
 * @enum
 */
export declare const CPUArchitecture: {
    readonly ARM64: "ARM64";
    readonly X86_64: "X86_64";
};
/**
 * @public
 */
export type CPUArchitecture = (typeof CPUArchitecture)[keyof typeof CPUArchitecture];
/**
 * @public
 * @enum
 */
export declare const OSFamily: {
    readonly LINUX: "LINUX";
    readonly WINDOWS_SERVER_2004_CORE: "WINDOWS_SERVER_2004_CORE";
    readonly WINDOWS_SERVER_2016_FULL: "WINDOWS_SERVER_2016_FULL";
    readonly WINDOWS_SERVER_2019_CORE: "WINDOWS_SERVER_2019_CORE";
    readonly WINDOWS_SERVER_2019_FULL: "WINDOWS_SERVER_2019_FULL";
    readonly WINDOWS_SERVER_2022_CORE: "WINDOWS_SERVER_2022_CORE";
    readonly WINDOWS_SERVER_2022_FULL: "WINDOWS_SERVER_2022_FULL";
    readonly WINDOWS_SERVER_2025_CORE: "WINDOWS_SERVER_2025_CORE";
    readonly WINDOWS_SERVER_2025_FULL: "WINDOWS_SERVER_2025_FULL";
    readonly WINDOWS_SERVER_20H2_CORE: "WINDOWS_SERVER_20H2_CORE";
};
/**
 * @public
 */
export type OSFamily = (typeof OSFamily)[keyof typeof OSFamily];
/**
 * @public
 * @enum
 */
export declare const TaskDefinitionStatus: {
    readonly ACTIVE: "ACTIVE";
    readonly DELETE_IN_PROGRESS: "DELETE_IN_PROGRESS";
    readonly INACTIVE: "INACTIVE";
};
/**
 * @public
 */
export type TaskDefinitionStatus = (typeof TaskDefinitionStatus)[keyof typeof TaskDefinitionStatus];
/**
 * @public
 * @enum
 */
export declare const Scope: {
    readonly SHARED: "shared";
    readonly TASK: "task";
};
/**
 * @public
 */
export type Scope = (typeof Scope)[keyof typeof Scope];
/**
 * @public
 * @enum
 */
export declare const EFSAuthorizationConfigIAM: {
    readonly DISABLED: "DISABLED";
    readonly ENABLED: "ENABLED";
};
/**
 * @public
 */
export type EFSAuthorizationConfigIAM = (typeof EFSAuthorizationConfigIAM)[keyof typeof EFSAuthorizationConfigIAM];
/**
 * @public
 * @enum
 */
export declare const EFSTransitEncryption: {
    readonly DISABLED: "DISABLED";
    readonly ENABLED: "ENABLED";
};
/**
 * @public
 */
export type EFSTransitEncryption = (typeof EFSTransitEncryption)[keyof typeof EFSTransitEncryption];
/**
 * @public
 * @enum
 */
export declare const InstanceHealthCheckState: {
    readonly IMPAIRED: "IMPAIRED";
    readonly INITIALIZING: "INITIALIZING";
    readonly INSUFFICIENT_DATA: "INSUFFICIENT_DATA";
    readonly OK: "OK";
};
/**
 * @public
 */
export type InstanceHealthCheckState = (typeof InstanceHealthCheckState)[keyof typeof InstanceHealthCheckState];
/**
 * @public
 * @enum
 */
export declare const InstanceHealthCheckType: {
    readonly CONTAINER_RUNTIME: "CONTAINER_RUNTIME";
};
/**
 * @public
 */
export type InstanceHealthCheckType = (typeof InstanceHealthCheckType)[keyof typeof InstanceHealthCheckType];
/**
 * @public
 * @enum
 */
export declare const CapacityProviderField: {
    readonly TAGS: "TAGS";
};
/**
 * @public
 */
export type CapacityProviderField = (typeof CapacityProviderField)[keyof typeof CapacityProviderField];
/**
 * @public
 * @enum
 */
export declare const ClusterField: {
    readonly ATTACHMENTS: "ATTACHMENTS";
    readonly CONFIGURATIONS: "CONFIGURATIONS";
    readonly SETTINGS: "SETTINGS";
    readonly STATISTICS: "STATISTICS";
    readonly TAGS: "TAGS";
};
/**
 * @public
 */
export type ClusterField = (typeof ClusterField)[keyof typeof ClusterField];
/**
 * @public
 * @enum
 */
export declare const ContainerInstanceField: {
    readonly CONTAINER_INSTANCE_HEALTH: "CONTAINER_INSTANCE_HEALTH";
    readonly TAGS: "TAGS";
};
/**
 * @public
 */
export type ContainerInstanceField = (typeof ContainerInstanceField)[keyof typeof ContainerInstanceField];
/**
 * @public
 * @enum
 */
export declare const ExpressGatewayServiceInclude: {
    readonly TAGS: "TAGS";
};
/**
 * @public
 */
export type ExpressGatewayServiceInclude = (typeof ExpressGatewayServiceInclude)[keyof typeof ExpressGatewayServiceInclude];
/**
 * @public
 * @enum
 */
export declare const ServiceDeploymentRollbackMonitorsStatus: {
    readonly DISABLED: "DISABLED";
    readonly MONITORING: "MONITORING";
    readonly MONITORING_COMPLETE: "MONITORING_COMPLETE";
    readonly TRIGGERED: "TRIGGERED";
};
/**
 * @public
 */
export type ServiceDeploymentRollbackMonitorsStatus = (typeof ServiceDeploymentRollbackMonitorsStatus)[keyof typeof ServiceDeploymentRollbackMonitorsStatus];
/**
 * @public
 * @enum
 */
export declare const ServiceDeploymentLifecycleStage: {
    readonly BAKE_TIME: "BAKE_TIME";
    readonly CLEAN_UP: "CLEAN_UP";
    readonly POST_PRODUCTION_TRAFFIC_SHIFT: "POST_PRODUCTION_TRAFFIC_SHIFT";
    readonly POST_SCALE_UP: "POST_SCALE_UP";
    readonly POST_TEST_TRAFFIC_SHIFT: "POST_TEST_TRAFFIC_SHIFT";
    readonly PRE_SCALE_UP: "PRE_SCALE_UP";
    readonly PRODUCTION_TRAFFIC_SHIFT: "PRODUCTION_TRAFFIC_SHIFT";
    readonly RECONCILE_SERVICE: "RECONCILE_SERVICE";
    readonly SCALE_UP: "SCALE_UP";
    readonly TEST_TRAFFIC_SHIFT: "TEST_TRAFFIC_SHIFT";
};
/**
 * @public
 */
export type ServiceDeploymentLifecycleStage = (typeof ServiceDeploymentLifecycleStage)[keyof typeof ServiceDeploymentLifecycleStage];
/**
 * @public
 * @enum
 */
export declare const ServiceDeploymentStatus: {
    readonly IN_PROGRESS: "IN_PROGRESS";
    readonly PENDING: "PENDING";
    readonly ROLLBACK_FAILED: "ROLLBACK_FAILED";
    readonly ROLLBACK_IN_PROGRESS: "ROLLBACK_IN_PROGRESS";
    readonly ROLLBACK_REQUESTED: "ROLLBACK_REQUESTED";
    readonly ROLLBACK_SUCCESSFUL: "ROLLBACK_SUCCESSFUL";
    readonly STOPPED: "STOPPED";
    readonly STOP_REQUESTED: "STOP_REQUESTED";
    readonly SUCCESSFUL: "SUCCESSFUL";
};
/**
 * @public
 */
export type ServiceDeploymentStatus = (typeof ServiceDeploymentStatus)[keyof typeof ServiceDeploymentStatus];
/**
 * @public
 * @enum
 */
export declare const ManagedResourceStatus: {
    readonly ACTIVE: "ACTIVE";
    readonly DELETED: "DELETED";
    readonly DEPROVISIONING: "DEPROVISIONING";
    readonly FAILED: "FAILED";
    readonly PROVISIONING: "PROVISIONING";
};
/**
 * @public
 */
export type ManagedResourceStatus = (typeof ManagedResourceStatus)[keyof typeof ManagedResourceStatus];
/**
 * @public
 * @enum
 */
export declare const ServiceField: {
    readonly TAGS: "TAGS";
};
/**
 * @public
 */
export type ServiceField = (typeof ServiceField)[keyof typeof ServiceField];
/**
 * @public
 * @enum
 */
export declare const TaskDefinitionField: {
    readonly TAGS: "TAGS";
};
/**
 * @public
 */
export type TaskDefinitionField = (typeof TaskDefinitionField)[keyof typeof TaskDefinitionField];
/**
 * @public
 * @enum
 */
export declare const TaskField: {
    readonly TAGS: "TAGS";
};
/**
 * @public
 */
export type TaskField = (typeof TaskField)[keyof typeof TaskField];
/**
 * @public
 * @enum
 */
export declare const Connectivity: {
    readonly CONNECTED: "CONNECTED";
    readonly DISCONNECTED: "DISCONNECTED";
};
/**
 * @public
 */
export type Connectivity = (typeof Connectivity)[keyof typeof Connectivity];
/**
 * @public
 * @enum
 */
export declare const HealthStatus: {
    readonly HEALTHY: "HEALTHY";
    readonly UNHEALTHY: "UNHEALTHY";
    readonly UNKNOWN: "UNKNOWN";
};
/**
 * @public
 */
export type HealthStatus = (typeof HealthStatus)[keyof typeof HealthStatus];
/**
 * @public
 * @enum
 */
export declare const ManagedAgentName: {
    readonly ExecuteCommandAgent: "ExecuteCommandAgent";
};
/**
 * @public
 */
export type ManagedAgentName = (typeof ManagedAgentName)[keyof typeof ManagedAgentName];
/**
 * @public
 * @enum
 */
export declare const TaskStopCode: {
    readonly ESSENTIAL_CONTAINER_EXITED: "EssentialContainerExited";
    readonly SERVICE_SCHEDULER_INITIATED: "ServiceSchedulerInitiated";
    readonly SPOT_INTERRUPTION: "SpotInterruption";
    readonly TASK_FAILED_TO_START: "TaskFailedToStart";
    readonly TERMINATION_NOTICE: "TerminationNotice";
    readonly USER_INITIATED: "UserInitiated";
};
/**
 * @public
 */
export type TaskStopCode = (typeof TaskStopCode)[keyof typeof TaskStopCode];
/**
 * @public
 * @enum
 */
export declare const TaskSetField: {
    readonly TAGS: "TAGS";
};
/**
 * @public
 */
export type TaskSetField = (typeof TaskSetField)[keyof typeof TaskSetField];
/**
 * @public
 * @enum
 */
export declare const ContainerInstanceStatus: {
    readonly ACTIVE: "ACTIVE";
    readonly DEREGISTERING: "DEREGISTERING";
    readonly DRAINING: "DRAINING";
    readonly REGISTERING: "REGISTERING";
    readonly REGISTRATION_FAILED: "REGISTRATION_FAILED";
};
/**
 * @public
 */
export type ContainerInstanceStatus = (typeof ContainerInstanceStatus)[keyof typeof ContainerInstanceStatus];
/**
 * @public
 * @enum
 */
export declare const TaskDefinitionFamilyStatus: {
    readonly ACTIVE: "ACTIVE";
    readonly ALL: "ALL";
    readonly INACTIVE: "INACTIVE";
};
/**
 * @public
 */
export type TaskDefinitionFamilyStatus = (typeof TaskDefinitionFamilyStatus)[keyof typeof TaskDefinitionFamilyStatus];
/**
 * @public
 * @enum
 */
export declare const SortOrder: {
    readonly ASC: "ASC";
    readonly DESC: "DESC";
};
/**
 * @public
 */
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
/**
 * @public
 * @enum
 */
export declare const DesiredStatus: {
    readonly PENDING: "PENDING";
    readonly RUNNING: "RUNNING";
    readonly STOPPED: "STOPPED";
};
/**
 * @public
 */
export type DesiredStatus = (typeof DesiredStatus)[keyof typeof DesiredStatus];
/**
 * @public
 * @enum
 */
export declare const PlatformDeviceType: {
    readonly GPU: "GPU";
};
/**
 * @public
 */
export type PlatformDeviceType = (typeof PlatformDeviceType)[keyof typeof PlatformDeviceType];
/**
 * @public
 * @enum
 */
export declare const StopServiceDeploymentStopType: {
    readonly ABORT: "ABORT";
    readonly ROLLBACK: "ROLLBACK";
};
/**
 * @public
 */
export type StopServiceDeploymentStopType = (typeof StopServiceDeploymentStopType)[keyof typeof StopServiceDeploymentStopType];
