
export type TUser = {
    id: string,
    email: string,
}

export type AuthResponse = {
    accessToken: string;
    refreshToken: string;
    user: TUser
}

