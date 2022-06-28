import { createContext, useContext } from "react";
import { User } from "../types";

export interface UserContextType {
    user: User;
}

export const UserContext = createContext<UserContextType | undefined>(undefined);

export function useUserContext(): UserContextType {
    const userContext = useContext(UserContext);

    if (!userContext) {
        throw new Error(
            'No UserContext.Provider found when calling useUserContext.'
        );
    }

    return userContext;
}