import { createContext } from "react";

const defaultContextData = {
	jwt: ""
}

// Need to export so that our useContext hooks
// can use this to identify which data to search for
export const UserAuthContext = createContext(defaultContextData);

export default function UserContextComponent (props) {

	
	return (
		<UserAuthContext.Provider value={defaultContextData}>
			{props.children}
		</UserAuthContext.Provider>
	)

}