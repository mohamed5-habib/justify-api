export declare const AcceleratorManufacturer: {
  readonly AMAZON_WEB_SERVICES: "amazon-web-services";
  readonly AMD: "amd";
  readonly HABANA: "habana";
  readonly NVIDIA: "nvidia";
  readonly XILINX: "xilinx";
};
export type AcceleratorManufacturer =
  (typeof AcceleratorManufacturer)[keyof typeof AcceleratorManufacturer];
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
export type AcceleratorName =
  (typeof AcceleratorName)[keyof typeof AcceleratorName];
export declare const AcceleratorType: {
  readonly FPGA: "fpga";
  readonly GPU: "gpu";
  readonly INFERENCE: "inference";
};
export type AcceleratorType =
  (typeof AcceleratorType)[keyof typeof AcceleratorType];
export declare const AccessType: {
  readonly PRIVATE: "PRIVATE";
  readonly PUBLIC: "PUBLIC";
};
export type AccessType = (typeof AccessType)[keyof typeof AccessType];
export declare const AgentUpdateStatus: {
  readonly FAILED: "FAILED";
  readonly PENDING: "PENDING";
  readonly STAGED: "STAGED";
  readonly STAGING: "STAGING";
  readonly UPDATED: "UPDATED";
  readonly UPDATING: "UPDATING";
};
export type AgentUpdateStatus =
  (typeof AgentUpdateStatus)[keyof typeof AgentUpdateStatus];
export declare const ManagedDraining: {
  readonly DISABLED: "DISABLED";
  readonly ENABLED: "ENABLED";
};
export type ManagedDraining =
  (typeof ManagedDraining)[keyof typeof ManagedDraining];
export declare const ManagedScalingStatus: {
  readonly DISABLED: "DISABLED";
  readonly ENABLED: "ENABLED";
};
export type ManagedScalingStatus =
  (typeof ManagedScalingStatus)[keyof typeof ManagedScalingStatus];
export declare const ManagedTerminationProtection: {
  readonly DISABLED: "DISABLED";
  readonly ENABLED: "ENABLED";
};
export type ManagedTerminationProtection =
  (typeof ManagedTerminationProtection)[keyof typeof ManagedTerminationProtection];
export declare const CapacityOptionType: {
  readonly ON_DEMAND: "ON_DEMAND";
  readonly SPOT: "SPOT";
};
export type CapacityOptionType =
  (typeof CapacityOptionType)[keyof typeof CapacityOptionType];
export declare const BareMetal: {
  readonly EXCLUDED: "excluded";
  readonly INCLUDED: "included";
  readonly REQUIRED: "required";
};
export type BareMetal = (typeof BareMetal)[keyof typeof BareMetal];
export declare const BurstablePerformance: {
  readonly EXCLUDED: "excluded";
  readonly INCLUDED: "included";
  readonly REQUIRED: "required";
};
export type BurstablePerformance =
  (typeof BurstablePerformance)[keyof typeof BurstablePerformance];
export declare const CpuManufacturer: {
  readonly AMAZON_WEB_SERVICES: "amazon-web-services";
  readonly AMD: "amd";
  readonly INTEL: "intel";
};
export type CpuManufacturer =
  (typeof CpuManufacturer)[keyof typeof CpuManufacturer];
export declare const InstanceGeneration: {
  readonly CURRENT: "current";
  readonly PREVIOUS: "previous";
};
export type InstanceGeneration =
  (typeof InstanceGeneration)[keyof typeof InstanceGeneration];
export declare const LocalStorage: {
  readonly EXCLUDED: "excluded";
  readonly INCLUDED: "included";
  readonly REQUIRED: "required";
};
export type LocalStorage = (typeof LocalStorage)[keyof typeof LocalStorage];
export declare const LocalStorageType: {
  readonly HDD: "hdd";
  readonly SSD: "ssd";
};
export type LocalStorageType =
  (typeof LocalStorageType)[keyof typeof LocalStorageType];
export declare const ManagedInstancesMonitoringOptions: {
  readonly BASIC: "BASIC";
  readonly DETAILED: "DETAILED";
};
export type ManagedInstancesMonitoringOptions =
  (typeof ManagedInstancesMonitoringOptions)[keyof typeof ManagedInstancesMonitoringOptions];
export declare const PropagateMITags: {
  readonly CAPACITY_PROVIDER: "CAPACITY_PROVIDER";
  readonly NONE: "NONE";
};
export type PropagateMITags =
  (typeof PropagateMITags)[keyof typeof PropagateMITags];
export declare const CapacityProviderStatus: {
  readonly ACTIVE: "ACTIVE";
  readonly DEPROVISIONING: "DEPROVISIONING";
  readonly INACTIVE: "INACTIVE";
  readonly PROVISIONING: "PROVISIONING";
};
export type CapacityProviderStatus =
  (typeof CapacityProviderStatus)[keyof typeof CapacityProviderStatus];
export declare const CapacityProviderType: {
  readonly EC2_AUTOSCALING: "EC2_AUTOSCALING";
  readonly FARGATE: "FARGATE";
  readonly FARGATE_SPOT: "FARGATE_SPOT";
  readonly MANAGED_INSTANCES: "MANAGED_INSTANCES";
};
export type CapacityProviderType =
  (typeof CapacityProviderType)[keyof typeof CapacityProviderType];
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
export type CapacityProviderUpdateStatus =
  (typeof CapacityProviderUpdateStatus)[keyof typeof CapacityProviderUpdateStatus];
export declare const ExecuteCommandLogging: {
  readonly DEFAULT: "DEFAULT";
  readonly NONE: "NONE";
  readonly OVERRIDE: "OVERRIDE";
};
export type ExecuteCommandLogging =
  (typeof ExecuteCommandLogging)[keyof typeof ExecuteCommandLogging];
export declare const ClusterSettingName: {
  readonly CONTAINER_INSIGHTS: "containerInsights";
};
export type ClusterSettingName =
  (typeof ClusterSettingName)[keyof typeof ClusterSettingName];
export declare const ExpressGatewayServiceScalingMetric: {
  readonly AverageCPUUtilization: "AVERAGE_CPU";
  readonly AverageMemoryUtilization: "AVERAGE_MEMORY";
  readonly RequestCountPerTarget: "REQUEST_COUNT_PER_TARGET";
};
export type ExpressGatewayServiceScalingMetric =
  (typeof ExpressGatewayServiceScalingMetric)[keyof typeof ExpressGatewayServiceScalingMetric];
export declare const ExpressGatewayServiceStatusCode: {
  readonly ACTIVE: "ACTIVE";
  readonly DRAINING: "DRAINING";
  readonly INACTIVE: "INACTIVE";
};
export type ExpressGatewayServiceStatusCode =
  (typeof ExpressGatewayServiceStatusCode)[keyof typeof ExpressGatewayServiceStatusCode];
export declare const AvailabilityZoneRebalancing: {
  readonly DISABLED: "DISABLED";
  readonly ENABLED: "ENABLED";
};
export type AvailabilityZoneRebalancing =
  (typeof AvailabilityZoneRebalancing)[keyof typeof AvailabilityZoneRebalancing];
export declare const DeploymentLifecycleHookStage: {
  readonly POST_PRODUCTION_TRAFFIC_SHIFT: "POST_PRODUCTION_TRAFFIC_SHIFT";
  readonly POST_SCALE_UP: "POST_SCALE_UP";
  readonly POST_TEST_TRAFFIC_SHIFT: "POST_TEST_TRAFFIC_SHIFT";
  readonly PRE_SCALE_UP: "PRE_SCALE_UP";
  readonly PRODUCTION_TRAFFIC_SHIFT: "PRODUCTION_TRAFFIC_SHIFT";
  readonly RECONCILE_SERVICE: "RECONCILE_SERVICE";
  readonly TEST_TRAFFIC_SHIFT: "TEST_TRAFFIC_SHIFT";
};
export type DeploymentLifecycleHookStage =
  (typeof DeploymentLifecycleHookStage)[keyof typeof DeploymentLifecycleHookStage];
export declare const DeploymentStrategy: {
  readonly BLUE_GREEN: "BLUE_GREEN";
  readonly CANARY: "CANARY";
  readonly LINEAR: "LINEAR";
  readonly ROLLING: "ROLLING";
};
export type DeploymentStrategy =
  (typeof DeploymentStrategy)[keyof typeof DeploymentStrategy];
export declare const DeploymentControllerType: {
  readonly CODE_DEPLOY: "CODE_DEPLOY";
  readonly ECS: "ECS";
  readonly EXTERNAL: "EXTERNAL";
};
export type DeploymentControllerType =
  (typeof DeploymentControllerType)[keyof typeof DeploymentControllerType];
export declare const LaunchType: {
  readonly EC2: "EC2";
  readonly EXTERNAL: "EXTERNAL";
  readonly FARGATE: "FARGATE";
  readonly MANAGED_INSTANCES: "MANAGED_INSTANCES";
};
export type LaunchType = (typeof LaunchType)[keyof typeof LaunchType];
export declare const AssignPublicIp: {
  readonly DISABLED: "DISABLED";
  readonly ENABLED: "ENABLED";
};
export type AssignPublicIp =
  (typeof AssignPublicIp)[keyof typeof AssignPublicIp];
export declare const PlacementConstraintType: {
  readonly DISTINCT_INSTANCE: "distinctInstance";
  readonly MEMBER_OF: "memberOf";
};
export type PlacementConstraintType =
  (typeof PlacementConstraintType)[keyof typeof PlacementConstraintType];
export declare const PlacementStrategyType: {
  readonly BINPACK: "binpack";
  readonly RANDOM: "random";
  readonly SPREAD: "spread";
};
export type PlacementStrategyType =
  (typeof PlacementStrategyType)[keyof typeof PlacementStrategyType];
export declare const PropagateTags: {
  readonly NONE: "NONE";
  readonly SERVICE: "SERVICE";
  readonly TASK_DEFINITION: "TASK_DEFINITION";
};
export type PropagateTags = (typeof PropagateTags)[keyof typeof PropagateTags];
export declare const SchedulingStrategy: {
  readonly DAEMON: "DAEMON";
  readonly REPLICA: "REPLICA";
};
export type SchedulingStrategy =
  (typeof SchedulingStrategy)[keyof typeof SchedulingStrategy];
export declare const ServiceConnectAccessLoggingFormat: {
  readonly JSON: "JSON";
  readonly TEXT: "TEXT";
};
export type ServiceConnectAccessLoggingFormat =
  (typeof ServiceConnectAccessLoggingFormat)[keyof typeof ServiceConnectAccessLoggingFormat];
export declare const ServiceConnectIncludeQueryParameters: {
  readonly DISABLED: "DISABLED";
  readonly ENABLED: "ENABLED";
};
export type ServiceConnectIncludeQueryParameters =
  (typeof ServiceConnectIncludeQueryParameters)[keyof typeof ServiceConnectIncludeQueryParameters];
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
export type LogDriver = (typeof LogDriver)[keyof typeof LogDriver];
export declare const TaskFilesystemType: {
  readonly EXT3: "ext3";
  readonly EXT4: "ext4";
  readonly NTFS: "ntfs";
  readonly XFS: "xfs";
};
export type TaskFilesystemType =
  (typeof TaskFilesystemType)[keyof typeof TaskFilesystemType];
export declare const EBSResourceType: {
  readonly VOLUME: "volume";
};
export type EBSResourceType =
  (typeof EBSResourceType)[keyof typeof EBSResourceType];
export declare const DeploymentRolloutState: {
  readonly COMPLETED: "COMPLETED";
  readonly FAILED: "FAILED";
  readonly IN_PROGRESS: "IN_PROGRESS";
};
export type DeploymentRolloutState =
  (typeof DeploymentRolloutState)[keyof typeof DeploymentRolloutState];
export declare const ResourceManagementType: {
  readonly CUSTOMER: "CUSTOMER";
  readonly ECS: "ECS";
};
export type ResourceManagementType =
  (typeof ResourceManagementType)[keyof typeof ResourceManagementType];
export declare const ScaleUnit: {
  readonly PERCENT: "PERCENT";
};
export type ScaleUnit = (typeof ScaleUnit)[keyof typeof ScaleUnit];
export declare const StabilityStatus: {
  readonly STABILIZING: "STABILIZING";
  readonly STEADY_STATE: "STEADY_STATE";
};
export type StabilityStatus =
  (typeof StabilityStatus)[keyof typeof StabilityStatus];
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
export type SettingName = (typeof SettingName)[keyof typeof SettingName];
export declare const SettingType: {
  readonly AWS_MANAGED: "aws_managed";
  readonly USER: "user";
};
export type SettingType = (typeof SettingType)[keyof typeof SettingType];
export declare const TargetType: {
  readonly CONTAINER_INSTANCE: "container-instance";
};
export type TargetType = (typeof TargetType)[keyof typeof TargetType];
export declare const Compatibility: {
  readonly EC2: "EC2";
  readonly EXTERNAL: "EXTERNAL";
  readonly FARGATE: "FARGATE";
  readonly MANAGED_INSTANCES: "MANAGED_INSTANCES";
};
export type Compatibility = (typeof Compatibility)[keyof typeof Compatibility];
export declare const ContainerCondition: {
  readonly COMPLETE: "COMPLETE";
  readonly HEALTHY: "HEALTHY";
  readonly START: "START";
  readonly SUCCESS: "SUCCESS";
};
export type ContainerCondition =
  (typeof ContainerCondition)[keyof typeof ContainerCondition];
export declare const EnvironmentFileType: {
  readonly S3: "s3";
};
export type EnvironmentFileType =
  (typeof EnvironmentFileType)[keyof typeof EnvironmentFileType];
export declare const FirelensConfigurationType: {
  readonly FLUENTBIT: "fluentbit";
  readonly FLUENTD: "fluentd";
};
export type FirelensConfigurationType =
  (typeof FirelensConfigurationType)[keyof typeof FirelensConfigurationType];
export declare const DeviceCgroupPermission: {
  readonly MKNOD: "mknod";
  readonly READ: "read";
  readonly WRITE: "write";
};
export type DeviceCgroupPermission =
  (typeof DeviceCgroupPermission)[keyof typeof DeviceCgroupPermission];
export declare const ApplicationProtocol: {
  readonly GRPC: "grpc";
  readonly HTTP: "http";
  readonly HTTP2: "http2";
};
export type ApplicationProtocol =
  (typeof ApplicationProtocol)[keyof typeof ApplicationProtocol];
export declare const TransportProtocol: {
  readonly TCP: "tcp";
  readonly UDP: "udp";
};
export type TransportProtocol =
  (typeof TransportProtocol)[keyof typeof TransportProtocol];
export declare const ResourceType: {
  readonly GPU: "GPU";
  readonly INFERENCE_ACCELERATOR: "InferenceAccelerator";
};
export type ResourceType = (typeof ResourceType)[keyof typeof ResourceType];
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
export type UlimitName = (typeof UlimitName)[keyof typeof UlimitName];
export declare const VersionConsistency: {
  readonly DISABLED: "disabled";
  readonly ENABLED: "enabled";
};
export type VersionConsistency =
  (typeof VersionConsistency)[keyof typeof VersionConsistency];
export declare const IpcMode: {
  readonly HOST: "host";
  readonly NONE: "none";
  readonly TASK: "task";
};
export type IpcMode = (typeof IpcMode)[keyof typeof IpcMode];
export declare const NetworkMode: {
  readonly AWSVPC: "awsvpc";
  readonly BRIDGE: "bridge";
  readonly HOST: "host";
  readonly NONE: "none";
};
export type NetworkMode = (typeof NetworkMode)[keyof typeof NetworkMode];
export declare const PidMode: {
  readonly HOST: "host";
  readonly TASK: "task";
};
export type PidMode = (typeof PidMode)[keyof typeof PidMode];
export declare const TaskDefinitionPlacementConstraintType: {
  readonly MEMBER_OF: "memberOf";
};
export type TaskDefinitionPlacementConstraintType =
  (typeof TaskDefinitionPlacementConstraintType)[keyof typeof TaskDefinitionPlacementConstraintType];
export declare const ProxyConfigurationType: {
  readonly APPMESH: "APPMESH";
};
export type ProxyConfigurationType =
  (typeof ProxyConfigurationType)[keyof typeof ProxyConfigurationType];
export declare const CPUArchitecture: {
  readonly ARM64: "ARM64";
  readonly X86_64: "X86_64";
};
export type CPUArchitecture =
  (typeof CPUArchitecture)[keyof typeof CPUArchitecture];
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
export type OSFamily = (typeof OSFamily)[keyof typeof OSFamily];
export declare const TaskDefinitionStatus: {
  readonly ACTIVE: "ACTIVE";
  readonly DELETE_IN_PROGRESS: "DELETE_IN_PROGRESS";
  readonly INACTIVE: "INACTIVE";
};
export type TaskDefinitionStatus =
  (typeof TaskDefinitionStatus)[keyof typeof TaskDefinitionStatus];
export declare const Scope: {
  readonly SHARED: "shared";
  readonly TASK: "task";
};
export type Scope = (typeof Scope)[keyof typeof Scope];
export declare const EFSAuthorizationConfigIAM: {
  readonly DISABLED: "DISABLED";
  readonly ENABLED: "ENABLED";
};
export type EFSAuthorizationConfigIAM =
  (typeof EFSAuthorizationConfigIAM)[keyof typeof EFSAuthorizationConfigIAM];
export declare const EFSTransitEncryption: {
  readonly DISABLED: "DISABLED";
  readonly ENABLED: "ENABLED";
};
export type EFSTransitEncryption =
  (typeof EFSTransitEncryption)[keyof typeof EFSTransitEncryption];
export declare const InstanceHealthCheckState: {
  readonly IMPAIRED: "IMPAIRED";
  readonly INITIALIZING: "INITIALIZING";
  readonly INSUFFICIENT_DATA: "INSUFFICIENT_DATA";
  readonly OK: "OK";
};
export type InstanceHealthCheckState =
  (typeof InstanceHealthCheckState)[keyof typeof InstanceHealthCheckState];
export declare const InstanceHealthCheckType: {
  readonly CONTAINER_RUNTIME: "CONTAINER_RUNTIME";
};
export type InstanceHealthCheckType =
  (typeof InstanceHealthCheckType)[keyof typeof InstanceHealthCheckType];
export declare const CapacityProviderField: {
  readonly TAGS: "TAGS";
};
export type CapacityProviderField =
  (typeof CapacityProviderField)[keyof typeof CapacityProviderField];
export declare const ClusterField: {
  readonly ATTACHMENTS: "ATTACHMENTS";
  readonly CONFIGURATIONS: "CONFIGURATIONS";
  readonly SETTINGS: "SETTINGS";
  readonly STATISTICS: "STATISTICS";
  readonly TAGS: "TAGS";
};
export type ClusterField = (typeof ClusterField)[keyof typeof ClusterField];
export declare const ContainerInstanceField: {
  readonly CONTAINER_INSTANCE_HEALTH: "CONTAINER_INSTANCE_HEALTH";
  readonly TAGS: "TAGS";
};
export type ContainerInstanceField =
  (typeof ContainerInstanceField)[keyof typeof ContainerInstanceField];
export declare const ExpressGatewayServiceInclude: {
  readonly TAGS: "TAGS";
};
export type ExpressGatewayServiceInclude =
  (typeof ExpressGatewayServiceInclude)[keyof typeof ExpressGatewayServiceInclude];
export declare const ServiceDeploymentRollbackMonitorsStatus: {
  readonly DISABLED: "DISABLED";
  readonly MONITORING: "MONITORING";
  readonly MONITORING_COMPLETE: "MONITORING_COMPLETE";
  readonly TRIGGERED: "TRIGGERED";
};
export type ServiceDeploymentRollbackMonitorsStatus =
  (typeof ServiceDeploymentRollbackMonitorsStatus)[keyof typeof ServiceDeploymentRollbackMonitorsStatus];
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
export type ServiceDeploymentLifecycleStage =
  (typeof ServiceDeploymentLifecycleStage)[keyof typeof ServiceDeploymentLifecycleStage];
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
export type ServiceDeploymentStatus =
  (typeof ServiceDeploymentStatus)[keyof typeof ServiceDeploymentStatus];
export declare const ManagedResourceStatus: {
  readonly ACTIVE: "ACTIVE";
  readonly DELETED: "DELETED";
  readonly DEPROVISIONING: "DEPROVISIONING";
  readonly FAILED: "FAILED";
  readonly PROVISIONING: "PROVISIONING";
};
export type ManagedResourceStatus =
  (typeof ManagedResourceStatus)[keyof typeof ManagedResourceStatus];
export declare const ServiceField: {
  readonly TAGS: "TAGS";
};
export type ServiceField = (typeof ServiceField)[keyof typeof ServiceField];
export declare const TaskDefinitionField: {
  readonly TAGS: "TAGS";
};
export type TaskDefinitionField =
  (typeof TaskDefinitionField)[keyof typeof TaskDefinitionField];
export declare const TaskField: {
  readonly TAGS: "TAGS";
};
export type TaskField = (typeof TaskField)[keyof typeof TaskField];
export declare const Connectivity: {
  readonly CONNECTED: "CONNECTED";
  readonly DISCONNECTED: "DISCONNECTED";
};
export type Connectivity = (typeof Connectivity)[keyof typeof Connectivity];
export declare const HealthStatus: {
  readonly HEALTHY: "HEALTHY";
  readonly UNHEALTHY: "UNHEALTHY";
  readonly UNKNOWN: "UNKNOWN";
};
export type HealthStatus = (typeof HealthStatus)[keyof typeof HealthStatus];
export declare const ManagedAgentName: {
  readonly ExecuteCommandAgent: "ExecuteCommandAgent";
};
export type ManagedAgentName =
  (typeof ManagedAgentName)[keyof typeof ManagedAgentName];
export declare const TaskStopCode: {
  readonly ESSENTIAL_CONTAINER_EXITED: "EssentialContainerExited";
  readonly SERVICE_SCHEDULER_INITIATED: "ServiceSchedulerInitiated";
  readonly SPOT_INTERRUPTION: "SpotInterruption";
  readonly TASK_FAILED_TO_START: "TaskFailedToStart";
  readonly TERMINATION_NOTICE: "TerminationNotice";
  readonly USER_INITIATED: "UserInitiated";
};
export type TaskStopCode = (typeof TaskStopCode)[keyof typeof TaskStopCode];
export declare const TaskSetField: {
  readonly TAGS: "TAGS";
};
export type TaskSetField = (typeof TaskSetField)[keyof typeof TaskSetField];
export declare const ContainerInstanceStatus: {
  readonly ACTIVE: "ACTIVE";
  readonly DEREGISTERING: "DEREGISTERING";
  readonly DRAINING: "DRAINING";
  readonly REGISTERING: "REGISTERING";
  readonly REGISTRATION_FAILED: "REGISTRATION_FAILED";
};
export type ContainerInstanceStatus =
  (typeof ContainerInstanceStatus)[keyof typeof ContainerInstanceStatus];
export declare const TaskDefinitionFamilyStatus: {
  readonly ACTIVE: "ACTIVE";
  readonly ALL: "ALL";
  readonly INACTIVE: "INACTIVE";
};
export type TaskDefinitionFamilyStatus =
  (typeof TaskDefinitionFamilyStatus)[keyof typeof TaskDefinitionFamilyStatus];
export declare const SortOrder: {
  readonly ASC: "ASC";
  readonly DESC: "DESC";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const DesiredStatus: {
  readonly PENDING: "PENDING";
  readonly RUNNING: "RUNNING";
  readonly STOPPED: "STOPPED";
};
export type DesiredStatus = (typeof DesiredStatus)[keyof typeof DesiredStatus];
export declare const PlatformDeviceType: {
  readonly GPU: "GPU";
};
export type PlatformDeviceType =
  (typeof PlatformDeviceType)[keyof typeof PlatformDeviceType];
export declare const StopServiceDeploymentStopType: {
  readonly ABORT: "ABORT";
  readonly ROLLBACK: "ROLLBACK";
};
export type StopServiceDeploymentStopType =
  (typeof StopServiceDeploymentStopType)[keyof typeof StopServiceDeploymentStopType];
