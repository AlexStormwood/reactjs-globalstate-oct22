import { createContext, useState } from "react";

const defaultContextData = {
	jwt: ""
}

// Need to export so that our useContext hooks
// can use this to identify which data to search for
export const UserAuthContext = createContext(defaultContextData);

export default function UserContextComponent (props) {

	const [jwt, setJwt] = useState("");
	
	return (
		<UserAuthContext.Provider value={{readJwt: jwt, updateJwt: setJwt}}>
			{props.children}
		</UserAuthContext.Provider>
	)

}