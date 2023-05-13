import { useState } from "react";
import UserAuthInfo from "./components/UserAuthInfo";
import UserContextComponent from "./components/UserContextComponent";
import UserAuthContext, {defaultUserAuthInfo} from "./contexts/UserAuthContext";
import BlogsList from "./components/BlogsList";
import BlogsProvider from "./components/BlogsContextComponent";

function App() {

//	const [someState, setSomeState] = useState("")

  return (
    <div className="App">

		{/* <UserAuthContext.Provider value={{someStateRead: someState, someStateUpdate: setSomeState}} >

			<UserAuthInfo />

		</UserAuthContext.Provider> */}

		<UserContextComponent>
			<BlogsProvider>
				<UserAuthInfo />
				<BlogsList />
			</BlogsProvider>
		</UserContextComponent>
		


    </div>
  );
}

export default App;
