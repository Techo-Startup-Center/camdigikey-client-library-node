import type { CamDigiKeyClientConfig } from '../types';
export default class HmacHelper {
    private static readonly HMAC_ALGORITHM;
    private readonly config;
    constructor(config: CamDigiKeyClientConfig);
    calculateHmacSignature(data: Buffer): Buffer;
}
