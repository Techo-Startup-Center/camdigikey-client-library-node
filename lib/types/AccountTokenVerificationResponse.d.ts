import type { UserProfileStatus } from "./UserProfileStatus";
export type AccountTokenVerificationResponse = {
    camdigikey_id: string;
    user_status: UserProfileStatus;
    surname_en: string;
    given_name_en: string;
    surname_kh: string;
    given_name_kh: string;
    gender: string;
    mobile_phone_number: string;
    email_address: string;
    nationality: string;
    personal_code: string;
};
