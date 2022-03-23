import React, { createContext, useState, FC } from "react";
import { UserContextState, User } from "./Initial";

const contextDefaultValues: UserContextState = {
  user: { name: "", email: "", password: "" },
  changeUser: () => {}
};

export const UserContext = createContext<UserContextState>(
  contextDefaultValues
);

const UserProvider: FC = ({ children }) => {
  const [user, setUser] = useState<User>(contextDefaultValues.user);

  const changeUser = (newUser: User) => setUser((user) => newUser);

  return (
    <UserContext.Provider value={{ user, changeUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
