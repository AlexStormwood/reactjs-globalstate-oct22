
import { createContext } from "react";

export const defaultUserAuthInfo = {
	jwt: ""
}

const UserAuthContext = createContext(defaultUserAuthInfo);

export default UserAuthContext;