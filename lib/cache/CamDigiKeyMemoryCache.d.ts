import CamDigiKeyCache from './CamDigiKeyCache';
import crypto from 'crypto';
import { CamDigiKeyAPI } from '../CamDigiKeyAPI';
export default class CamDigiKeyMemoryCache implements CamDigiKeyCache {
    private _trustedRootCert;
    private _db;
    private _signerCertificate;
    private _camdigikeyApi;
    constructor(trustedRootCert: crypto.X509Certificate, camdigikeyApi: CamDigiKeyAPI);
    signerCertificate(): Promise<crypto.X509Certificate>;
    private getCertificateFromCamDigiKey;
    private verifyCertificateChain;
    private compareTwoPrincipals;
}
