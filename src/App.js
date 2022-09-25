import { Home } from "./components/Main/Home";
import { AuthPage } from "./components/Login-SignUp_Page/AuthPage";
import { useappStore } from "./components/Store/Store";
import { auth } from "./FirebaseConfig";

import { createTheme, ThemeProvider } from "@mui/material";
import { useEffect, useState } from "react";
import { v4 } from "uuid";


function App() {

  const loggedIn = useappStore((state) => (state.loggedIn))




  const [mode, setMode] = useState("light")
  const darkTheme = createTheme({
    palette: {
      mode: mode
    }
  })




  return (
    <ThemeProvider theme={darkTheme}>

      {!loggedIn && <AuthPage key={v4()} />}
      {loggedIn && <Home Mode={mode} SetMode={setMode} key={v4()} />}
    </ThemeProvider>
  );
}

export default App;
