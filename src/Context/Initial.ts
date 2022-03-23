export interface User{
    name: string,
    password: string,
    email: string
}

export type UserContextState = {
    user: User;
    changeUser: (user: User) => void;
};
  