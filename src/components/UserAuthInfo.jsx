import { useContext } from "react";
import UserAuthContext from "../contexts/UserAuthContext";
import { UserAuthContext   as NewAuthContext } from "./UserContextComponent";

export default function UserAuthInfo(){

	let userContextData = useContext(NewAuthContext);
	let {jwt} = useContext(NewAuthContext);

	return(
		<div>
			<h1>User JWT: {userContextData.jwt}</h1>
			<h1>User JWT destructured: {jwt}</h1>
		</div>
	)
}