import { Home } from "./components/Main/Home";
import { AuthPage } from "./components/Login-SignUp_Page/AuthPage";
import { useappStore } from "./components/Store/Store";
import { auth } from "./FirebaseConfig";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { createTheme, ThemeProvider } from "@mui/material";
import { useEffect, useState } from "react";
import { v4 } from "uuid";
import { FetchingFeed } from "./components/Store/FetchingFeed";
import SignIn from "./components/Login-SignUp_Page/Signup2";


function App() {


  const [loggedIn,setLoggedIn]=useState(null)
  //const loggedIn = useappStore((state) => (state.loggedIn))
  //const setLoggedIn = useappStore((state) => (state.setLoggedIn))

  const [mode, setMode] = useState("light")
  const darkTheme = createTheme({
    palette: {
      mode: mode
    }
  })
  useEffect(() => {

    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setLoggedIn(true)
        console.log('logged-IN')
      } else {
        setLoggedIn(false)
        console.log('logged-OUT')
        
      }
    });
  }, [])

  // const user = localStorage.getItem('user')
  // if (user) {
  //   setLoggedIn(true)
  // }
  return (
    <ThemeProvider theme={darkTheme}>


      {!loggedIn && <AuthPage key={v4()} />}
      {loggedIn && <Home Mode={mode} SetMode={setMode} key={v4()} />}
    </ThemeProvider>
  );
}

export default App;
