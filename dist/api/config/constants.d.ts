export declare const CONFIG: {
    readonly PORT: number;
    readonly NODE_ENV: string;
    readonly IS_PRODUCTION: boolean;
    readonly REDIS: {
        readonly HOST: string;
        readonly PORT: number;
        readonly PASSWORD: string | undefined;
        readonly TTL: number;
    };
    readonly RATE_LIMIT: {
        readonly DAILY_WORD_LIMIT: number;
        readonly RESET_TIME: "00:00";
    };
    readonly JUSTIFICATION: {
        readonly MAX_LINE_LENGTH: number;
        readonly MAX_INPUT_LENGTH: 100000;
    };
    readonly TOKEN: {
        readonly EXPIRY_DAYS: number;
        readonly EXPIRY_SECONDS: number;
    };
    readonly SECURITY: {
        readonly CORS_ORIGIN: string;
        readonly HELMET_ENABLED: boolean;
    };
    readonly LOGGING: {
        readonly LEVEL: string;
        readonly DIR: string;
    };
};
//# sourceMappingURL=constants.d.ts.map