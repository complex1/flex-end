export interface IUser {
    id: number;
    name: string;
    email: string;
    password: string;
    avatar: string;
    isVarified: boolean;
    createdAt: Date;
    updatedAt: Date;
}
