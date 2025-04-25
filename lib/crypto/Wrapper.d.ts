import { CamDigiKeyClientConfig } from "../types";
type WrappedRequest = {
    clientId: string;
    params: string;
    signature: string;
};
type WrappedResponse = {
    data: string;
    signature: string;
};
export default class Wrapper {
    private readonly config;
    private readonly aesHelper;
    private readonly hmacHelper;
    constructor(config: CamDigiKeyClientConfig);
    wrapRequest(request: Object): WrappedRequest;
    unwrapResponse(response: WrappedResponse): Object;
}
export {};
