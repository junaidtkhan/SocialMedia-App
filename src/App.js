import { Home } from "./components/Main/Home";
import { AuthPage } from "./components/Login-SignUp_Page/AuthPage";
import { useappStore } from "./components/Store/Store";
import { auth } from "./FirebaseConfig";


import { createTheme, ThemeProvider } from "@mui/material";
import { useEffect, useState } from "react";


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
      
      {!loggedIn && <AuthPage />}
      {loggedIn && <Home Mode={mode} SetMode={setMode} />}
    </ThemeProvider>
  );
}

export default App;
