import { useState } from "react";
import UserAuthInfo from "./components/UserAuthInfo";
import UserContextComponent from "./components/UserContextComponent";
import UserAuthContext, {defaultUserAuthInfo} from "./contexts/UserAuthContext";
import BlogsList from "./components/BlogsList";

function App() {

//	const [someState, setSomeState] = useState("")

  return (
    <div className="App">

		{/* <UserAuthContext.Provider value={{someStateRead: someState, someStateUpdate: setSomeState}} >

			<UserAuthInfo />

		</UserAuthContext.Provider> */}

		<UserContextComponent>
			<UserAuthInfo />
			<BlogsList />
		</UserContextComponent>
		


    </div>
  );
}

export default App;
