import UserAuthInfo from "./components/UserAuthInfo";
import UserContextComponent from "./components/UserContextComponent";
import UserAuthContext, {defaultUserAuthInfo} from "./contexts/UserAuthContext";

function App() {
  return (
    <div className="App">

		{/* <UserAuthContext.Provider value={defaultUserAuthInfo} >

			<UserAuthInfo />

		</UserAuthContext.Provider> */}

		<UserContextComponent>
			<UserAuthInfo />
		</UserContextComponent>
		


    </div>
  );
}

export default App;
