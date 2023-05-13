import { useContext } from "react";
import UserAuthContext from "../contexts/UserAuthContext";
import { UserAuthContext   as NewAuthContext } from "./UserContextComponent";
import UserAuthForm from "./UserAuthForm";

export default function UserAuthInfo(){

	let userContextData = useContext(NewAuthContext);
	let {readJwt} = useContext(NewAuthContext);

	return(
		<div>
			<h1>User JWT: {userContextData.readJwt}</h1>
			<h1>User JWT destructured: {readJwt}</h1>

			<UserAuthForm />

		</div>
	)
}