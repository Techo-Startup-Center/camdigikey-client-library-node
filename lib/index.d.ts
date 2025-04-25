import type { AccessTokenResponse, AccountTokenResponse, AccountTokenVerificationResponse, ApiResponse, CamDigiKeyClientConfig, CamDigiKeyTlsConfig, LoginTokenResponse, LogoutAccessTokenResponse, OrganizationAccessTokenResponse, RefreshAccessTokenResponse, UserFaceResponse, ValidateJwtResponse } from './types';
interface CamDigiKeyClientBase {
    validateJwt(jwt: string): Promise<ValidateJwtResponse>;
    getOrganizationAccessToken(): Promise<ApiResponse<OrganizationAccessTokenResponse>>;
    getLoginToken(callbackVars?: Record<string, string>): Promise<ApiResponse<LoginTokenResponse>>;
    getUserAccessToken(authCode: string): Promise<ApiResponse<AccessTokenResponse>>;
    refreshUserAccessToken(accessToken: string): Promise<ApiResponse<RefreshAccessTokenResponse>>;
    logoutAccessToken(accessToken: string): Promise<ApiResponse<LogoutAccessTokenResponse>>;
    lookupUserProfile(accessToken: string, personalCode: string): Promise<ApiResponse<AccountTokenResponse>>;
    verifyAccountToken(accountToken: string): Promise<ApiResponse<AccountTokenVerificationResponse>>;
    getUserFace(accessToken: string): Promise<ApiResponse<UserFaceResponse>>;
}
export declare class CamDigiKeyClient implements CamDigiKeyClientBase {
    private readonly client;
    private readonly camdigikeyApi;
    private readonly trustedRootCert;
    private readonly cacheService;
    static readonly default: CamDigiKeyClient;
    constructor(config: {
        client: CamDigiKeyClientConfig;
        tls: CamDigiKeyTlsConfig;
    });
    private getCleanedJwt;
    private validateTokenSignature;
    validateJwt(jwt: string): Promise<ValidateJwtResponse>;
    getOrganizationAccessToken(): Promise<ApiResponse<OrganizationAccessTokenResponse>>;
    getLoginToken(callbackVars?: Record<string, string>): Promise<ApiResponse<LoginTokenResponse>>;
    getUserAccessToken(authCode: string): Promise<ApiResponse<AccessTokenResponse>>;
    refreshUserAccessToken(accessToken: string): Promise<ApiResponse<RefreshAccessTokenResponse>>;
    logoutAccessToken(accessToken: string): Promise<ApiResponse<LogoutAccessTokenResponse>>;
    lookupUserProfile(accessToken: string, personalCode: string): Promise<ApiResponse<AccountTokenResponse>>;
    verifyAccountToken(accountToken: string): Promise<ApiResponse<AccountTokenVerificationResponse>>;
    getUserFace(accessToken: string): Promise<ApiResponse<UserFaceResponse>>;
}
export {};
