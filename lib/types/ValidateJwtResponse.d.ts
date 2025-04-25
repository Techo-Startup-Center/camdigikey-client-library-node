import type { AccessTokenStatusResponse } from "./AccessTokenStatusResponse";
export type ValidateJwtResponse = {
    is_valid: boolean;
    payload: AccessTokenStatusResponse | null;
};
