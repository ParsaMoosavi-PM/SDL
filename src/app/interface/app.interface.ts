export interface User {
    id: number;
    userName: string;
    password: string;
    email?: string;
    phoneNumber: string;
    codeMeli?: string;
}
export interface UserLogin{

    codeMeli: string;
    password: string;
}
