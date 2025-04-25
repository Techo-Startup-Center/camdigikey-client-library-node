import type { AccessTokenStatus } from "./AccessTokenStatus";
export type LogoutAccessTokenResponse = {
    accessToken: string;
    status: AccessTokenStatus;
    jwtId: string;
};
