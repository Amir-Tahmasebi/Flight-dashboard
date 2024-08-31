export type InitialState = {
    isUserLoggedIn: boolean;
    showModal: boolean
    isLoading:boolean
    errorMessage?: string
}

export type UserData = {
    password: string;
    username: string
}

export type FetchUserLoginPayload = {
    result: string;
    token: string
}