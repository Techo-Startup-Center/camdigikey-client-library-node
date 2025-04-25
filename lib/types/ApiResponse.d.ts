export type ApiResponse<T> = {
    error: number;
    message: string;
    data?: T;
};
