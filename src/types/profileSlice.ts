export type InitialState = {
    username: string
    isLoading: boolean;
}

export type fetchUsernamePayload = {
    username: string;
    result: string;
}