import { Home } from "./components/Main/Home";
import { AuthPage } from "./components/Login-SignUp_Page/AuthPage";

import { createTheme, ThemeProvider } from "@mui/material";
import { useState } from "react";
// import { collection, addDoc, getDocs } from "firebase/firestore";
// import db from "./FirebaseConfig";

function App() {
  const [login, setlogin] = useState(false)

  const [mode, setMode] = useState("light")
  const darkTheme = createTheme({
    palette: {
      mode: mode
    }
  })




  return (
    <ThemeProvider theme={darkTheme}>

      {!login && <AuthPage setlogin={setlogin}/>}
      {login && <Home Mode={mode} SetMode={setMode} />}
    </ThemeProvider>
  );
}

export default App;
