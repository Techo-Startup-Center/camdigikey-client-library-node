require('dotenv').config({
  path: `.env`,
});
const { CamDigiKeyClient } = require('../lib');

var accessToken;
var personalCode = 'TDD000000888';
var orgAccessToken;
var accountToken;

/* --- 1 --- */
test('Get Login Token Test', async () => {
  const res = await CamDigiKeyClient.default.getLoginToken(); //{"key1": "value1", "key2": "value2"}
  expect(res.error).toEqual(0);
  expect(res.data.loginUrl).toContain('login?loginToken=');
  expect(res.data.loginToken).not.toBeNull();
  expect(res.data.loginToken.split('.').length).toEqual(3);
  console.log("Login URL =>", res.data.loginUrl);
});

/* --- 2 --- */
test('Get User Access Token Test', async () => {
  // Open login URL in web browser and scan QR code with CamDigiKey, then copy `authToken` to here
  const authToken = 'eyJhbGciOiJTSEE1MTJ3aXRoRUNEU0EiLCJ0eXAiOiJKV1QiLCJqd3RJZCI6IjU5NmY5NGIyLTliNmUtNDc5Ny1hYTBiLTNiZjNmNjFkN2MwMyJ9._1AdsePZMztSulG6LWnRKxNht7iZX2mrX5-_vCfwxYf9esqNmLgw2va2xT6oq_IOjdo0o_Qs9DZFTO9VTkiNjA==.MIGGAkEKKa45H-k8AI3QiFFXBPUR6sbVG4iIiNBA9igxn58YeAyimI80XSSRNPUaB1QnnX2-aPwE8R9XqTQ_oUmtOSQNxgJBX5G-TZiU5C8ZAf7u7bnP_lOykqaz827pb8turkxdCRPUHI0cFbkmVuuzD5us9VcSXMS3zxVw7fq7QgRK06G9rco=';
  const res = await CamDigiKeyClient.default.getUserAccessToken(authToken)
  expect(res.error).toEqual(0);
  expect(res.data.accessToken).not.toBeNull();
  expect(res.data.accessToken.split('.').length).toEqual(3);
  accessToken = res.data.accessToken;
  // console.log(accessToken);
});

/* --- 3 --- */
test('Verify Access Token Test', async () => {
  await validUserTokenVerify(accessToken);
});

/* --- 4 --- */
test('Refresh Access Token Test', async () => {
  const newTokenRes = await CamDigiKeyClient.default.refreshUserAccessToken(accessToken);
  expect(newTokenRes.error).toEqual(0);
  expect(newTokenRes.data.accessToken).not.toBeNull();
  expect(newTokenRes.data.accessToken.split('.').length).toEqual(3);

  await invalidUserTokenVerify(accessToken);
  accessToken = newTokenRes.data.accessToken;
  await validUserTokenVerify(accessToken);
});

/* --- 5 --- */
test('Get Organization Token Test', async () => {
  const res = await CamDigiKeyClient.default.getOrganizationAccessToken();
  expect(res.error).toEqual(0);
  expect(res.data.accessToken).not.toBeNull();
  expect(res.data.accessToken.split('.').length).toEqual(3);
  expect(res.data.created_date).not.toBeNull();
  orgAccessToken = res.data.accessToken;
});

/* --- 6 --- */
test('Lookup User Profile Test', async () => {
  accessToken = "eyJhbGciOiJTSEE1MTJ3aXRoRUNEU0EiLCJ0eXAiOiJKV1QiLCJqd3RJZCI6Ijk1MWQ2ZWEyLTFkYzQtNDk0YS1iMGQ4LTMwZWJhZGI5MGE0MCJ9.W3yYDxK3kRAEqEAovVFQKo+T9HusEeAQu0GtTmLaaqwC1pHOIUJSBSjfe5mfw5rqVC5Zf3Vv9meMcPe7XLsC7YU2pRGWYnxp5SFgxJDVauZTFWiwVS0nK4GtIRpA5GimV/VQw/vx1O8/5tZy3lWDi+9IsB10f3GH1mSjOe2/5uzIzqwg686MjmhFrV036TbVW9foNrLlpVY3NyIFD8yy4Eg6x2lHW84FDuCFQIBfkKYHh6hQ6Ni5Iu0H3q0EVrRr+MxPNGL/uz2lUaSpw6Un6K3PeJLsRYL/vXiDsFG+Qiz/sQ8gKkCNW7HNuUx9jnbRcd1c9JC4Vkyor55NZ2GSTrM7uv0yrA==.MIGHAkIAtm1jveWmbDd81rFPYJuwq2b2zbcRwPZYqRRmUWtozGSRWmDgwiqwYaxig1f96s6Lc2OhjdKCkzqFU0qBNYvbq0wCQS/4j1X/yUenYMkPMjIdk3E/fRdKPpZpZoMrRKoHbYnyP81z/bZei0a/99ICmjvTYa063HVIiTidrqSPcuezhrGa"
  const res = await CamDigiKeyClient.default.lookupUserProfile(accessToken, personalCode);
  expect(res.error).toEqual(0);
  expect(res.data.personal_code).not.toBeNull();
  expect(res.data.camdigikey_id).not.toBeNull();
  expect(res.data.surname_en).not.toBeNull();
  expect(res.data.given_name_en).not.toBeNull();
  expect(res.data.mobile_phone_number).not.toBeNull();
  expect(res.data.email_address).not.toBeNull();
  expect(res.data.expired_date).not.toBeNull();
  expect(res.data.account_token).not.toBeNull();

  accountToken = res.data.account_token;
});

/* --- 7 --- */
test('Verify Account Token Test', async () => {
  const res = await CamDigiKeyClient.default.verifyAccountToken(accountToken);
  expect(res.error).toEqual(0);
  expect(res.data.personal_code).not.toBeNull();
  expect(res.data.camdigikey_id).not.toBeNull();
  expect(res.data.surname_en).not.toBeNull();
  expect(res.data.given_name_en).not.toBeNull();
  expect(res.data.mobile_phone_number).not.toBeNull();
  expect(res.data.email_address).not.toBeNull();
});

/* --- 8 --- */
test('Logout User AccessToken Test', async () => {
  const res = await CamDigiKeyClient.default.logoutAccessToken(accessToken);
  expect(res.error).toEqual(0);
  await invalidUserTokenVerify(accessToken);
});

async function invalidUserTokenVerify(token) {
  const res = await CamDigiKeyClient.default.validateJwt(token);
  expect(res.is_valid).toBeFalsy();
  expect(res.payload).toBeNull();
}

async function validUserTokenVerify(token) {
  const res = await CamDigiKeyClient.default.validateJwt(token);
  expect(res.is_valid).toBeTruthy()
  expect(res.payload).not.toBeNull();
  const { payload } = res;
  expect(payload.camdigikey_id).not.toBeNull();
  expect(payload.first_name_en).not.toBeNull();
  expect(payload.last_name_en).not.toBeNull();
  expect(payload.gender).not.toBeNull();
  expect(payload.dob).not.toBeNull();
  expect(payload.iss).not.toBeNull();
  expect(payload.type).not.toBeNull();
  expect(payload.personal_code).not.toBeNull();
  expect(payload.mobile_phone).not.toBeNull();
  expect(payload.email).not.toBeNull();
  expect(payload.nationality).not.toBeNull();
  expect(payload.exp).not.toBeNull();
  expect(payload.nbf).not.toBeNull();
  expect(payload.iat).not.toBeNull();
  expect(payload.jti).not.toBeNull();
}