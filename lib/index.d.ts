interface CamDigiKeyClientBase {
    validateJwt(jwt: string): Promise<Object>;
    getOrganizationAccessToken(): Promise<Object>;
    getLoginToken(callbackVars?: Record<string, string>): Promise<Object>;
    getUserAccessToken(authCode: string): Promise<Object>;
    refreshUserAccessToken(accessToken: string): Promise<Object>;
    logoutAccessToken(accessToken: string): Promise<Object>;
    lookupUserProfile(accessToken: string, personalCode: string): Promise<Object>;
    verifyAccountToken(accountToken: string): Promise<Object>;
    getUserFace(accessToken: string): Promise<Object>;
}
export declare const CamDigiKeyClient: CamDigiKeyClientBase;
export {};
