export class CustomApiError extends Error {
    message: string;
    statusCode: number;
    constructor(statusCode:number, message: string) {
        super(message)
        this.statusCode = statusCode;
    }
};

export const createCustomError = (statusCode, message) => {
    return new CustomApiError(statusCode, message)
}