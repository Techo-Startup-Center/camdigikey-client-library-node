# CamDigiKey Client Library Node

## Usage

Add `camdigikey-client` to `package.json`

```json
"dependencies": {
  "camdigikey-client": "https://github.com/Techo-Startup-Center/camdigikey-client-library-node#v3.0.0"
}
```

Import library

```js
const { CamDigiKeyClient } = require('camdigikey-client');

or 

import { CamDigiKeyClient } from 'camdigikey-client'
```

## Using default object

You have to setup Environment Variables (Required)

```bash
# CamDigiKey Client Credential Configuration
CAMDIGIKEY_CLIENT_ID="<client_id>"              # provided by us
CAMDIGIKEY_HMAC_KEY="<hmac_key>"                # provided by us
CAMDIGIKEY_AES_SECRET_KEY="<secret_key>"        # provided by us
CAMDIGIKEY_AES_IV_PARAMS="<iv_param>"           # provided by us
CAMDIGIKEY_CLIENT_DOMAIN="<application_domain>"
CAMDIGIKEY_SERVER_BASED_URL=https://service-account.camdigikey.gov.kh:8446 # default value

# CamDigiKey Client Connection KeyStore File Configuration
CAMDIGIKEY_CLIENT_KEYSTORE_FILE="./path_to_keystore.p12"
CAMDIGIKEY_CLIENT_KEYSTORE_FILE_PASSWORD="keystore_password"

CAMDIGIKEY_CLIENT_TRUST_STORE_FILE="./path_to_trusted_keystore.p12"
CAMDIGIKEY_CLIENT_TRUST_STORE_FILE_PASSWORD="keystore_password"
```

Then you can access to default object

```ts
const client = CamDigiKeyClient.default;
```

## Or creating CamDigiKey Client object

```ts
const client = new CamDigiKeyClient({
  client: {
    clientId: '...',
    hmacKey: '...',
    aesSecretKey: '...',
    aesIvParams: '...',
    clientDomain: '...',
    serverBaseUrl: '...', // default is https://service-account.camdigikey.gov.kh:8446
  } as CamDigiKeyClientConfig,
  tls: {
    keystoreFile: './path_to_keystore_file.p12',
    keystoreFilePassword: '...',
    trustStoreFile: './path_to_trust_store_file.p12',
    trustStoreFilePassword: '...',
  } as CamDigiKeyTlsConfig
});
```

## Calling the functions

Get login token

```js
const res1 = await client.getLoginToken();
console.log(res1);
```

Get access token

```js
const res2 = await client.getUserAccessToken('<authToken>');
console.log(res2);
```

Validate JWT token & get user info

```js
const res3 = await client.validateJwt('<accessToken>');
console.log(res3);
```

## Available functions

```ts
validateJwt(jwt: string): Promise<ValidateJwtResponse>;

getOrganizationAccessToken(): Promise<ApiResponse<OrganizationAccessTokenResponse>>;

getLoginToken(callbackVars?: Record<string, string>): Promise<ApiResponse<LoginTokenResponse>>;

getUserAccessToken(authCode: string): Promise<ApiResponse<AccessTokenResponse>>;

refreshUserAccessToken(accessToken: string): Promise<ApiResponse<RefreshAccessTokenResponse>>;

logoutAccessToken(accessToken: string): Promise<ApiResponse<LogoutAccessTokenResponse>>;

lookupUserProfile(accessToken: string, personalCode: string): Promise<ApiResponse<AccountTokenResponse>>;

verifyAccountToken(accountToken: string): Promise<ApiResponse<AccountTokenVerificationResponse>>;

getUserFace(accessToken: string): Promise<ApiResponse<UserFaceResponse>>;
```