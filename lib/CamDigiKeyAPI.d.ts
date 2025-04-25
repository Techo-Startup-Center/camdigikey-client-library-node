import type { ApiResponse, CamDigiKeyClientConfig, CamDigiKeyTlsConfig } from "./types";
export declare class CamDigiKeyAPI {
    private readonly httpClient;
    private readonly wrapper;
    static readonly ACCESS_TOKEN_CERT_URL = "/api/v3.0/authentication/certificates/access-token";
    static readonly LOGIN_TOKEN_REQUEST_URL = "/api/v3.0/authentication/service-account/login-token";
    static readonly ACCESS_TOKEN_REQUEST_URL = "/api/v3.0/authentication/service-account/access-token";
    static readonly ACCESS_TOKEN_REFRESH_URL = "/api/v3.0/authentication/service-account/refresh-access-token";
    static readonly ACCESS_TOKEN_STATUS_URL = "/api/v3.0/authentication/service-account/access-token/status";
    static readonly ORG_ACCESS_TOKEN_URL = "/api/v3.0/authentication/service-account/organization-access-token";
    static readonly LOGOUT_USER_ACCESS_TOKEN_URL = "/api/v3.0/authentication/service-account/access-token/logout";
    static readonly LOOK_UP_USER_PROFILE = "/api/v3.0/authentication/service-account/lookup";
    static readonly VERIFY_USER_PROFILE = "/api/v3.0/authentication/service-account/lookup/user-profile";
    static readonly RETRIEVE_FACE_URL = "/api/v3.0/authentication/service-account/user-face";
    constructor(config: CamDigiKeyClientConfig, tlsConfig: CamDigiKeyTlsConfig);
    get<T>(url: string): Promise<ApiResponse<T>>;
    wrapAndPost<T>(url: string, requestBody: Record<string, any>): Promise<ApiResponse<T>>;
}
