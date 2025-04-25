export type CamDigiKeyClientConfig = {
    clientId: string;
    hmacKey: string;
    aesSecretKey: string;
    aesIvParams: string;
    clientDomain: string;
    serverBaseUrl?: string;
};
