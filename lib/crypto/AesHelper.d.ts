import type { CamDigiKeyClientConfig } from '../types';
export default class AesHelper {
    private static readonly AES_ALGORITHM;
    private readonly config;
    constructor(config: CamDigiKeyClientConfig);
    encrypt(data: Buffer): Buffer;
    decrypt(data: Buffer): Buffer;
}
