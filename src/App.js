import { Sidebar } from "./components/Main/Sidebar";
import { Feed } from "./components/Main/Feed";
import { Rightbar } from "./components/Main/Rightbar";
import { Button, createTheme, ThemeProvider } from "@mui/material";
import Login from "./components/Login-SignUp_Page/login";
import { Box, Stack } from "@mui/system";
import { Navbar } from "./components/Main/Navbar";
import { Add } from "./components/Main/Add";
import { useState } from "react";
import Signup from "./components/Login-SignUp_Page/Signup";

function App() {
  const [signUp, setSignUp] = useState(true)
  const [signedInEmail, setSignedInEmail] = useState()
  const [mode, setMode] = useState("light")
  const darkTheme = createTheme({
    palette: {
      mode: mode
    }
  })
  const setLoginHandler = () => {
    setSignUp(!signUp)
  }
  const sendToSignUp = email => {
    console.log('im here')
    setSignedInEmail(email)
  }
  const Display = () => {

    console.log('hello')


  }
  return (
    // <div style={{ display: 'flex', flexDirection: "column", justifyContent: 'center', alignItems: "center" }}>

    //   <div>
    //     {signUp && <Signup signup={signUp} />}
    //     {!signUp && <Login sendToSignup={sendToSignUp} />}
    //   </div>

    //   <div>
    //     <br />
    //     <span onClick={setLoginHandler}>{signUp ? 'Already have an account?  login' : "signup"}</span>
    //   </div>
    //   <br />
    //   <div>
    //     <span>{signedInEmail} </span>
    //   </div>

    // </div>

    <ThemeProvider theme={darkTheme}>

      <Box bgcolor={'background.default'} color='text.primary'>
        <Navbar setMode={setMode} mode={mode} />
        <Stack direction="row" spacing={2} justifyContent="space-between" >
          <Sidebar />
          <Feed />
          <Rightbar />
        </Stack>
        <Add />

        <Display />
      </Box>
    </ThemeProvider>
  );
}

export default App;
