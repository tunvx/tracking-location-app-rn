type DataOrError = object | null;
export default class ResponseData {
    private success;
    private payload;
    private error;
    constructor(success: boolean, payload: DataOrError, error: DataOrError);
    getResponse(): {
        success: boolean;
        payload: object;
        error: object;
    };
}
export {};
