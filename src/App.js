import { Sidebar } from "./components/Main/Sidebar";
import { Feed } from "./components/Main/Feed";
import { Rightbar } from "./components/Main/Rightbar";
import { Button } from "@mui/material";
import Login from "./components/Login-SignUp_Page/login";
import { Box, Stack } from "@mui/system";
import { Navbar } from "./components/Main/Navbar";
function App() {
  return (
    <Box>
    <Navbar/>
      <Stack direction="row" spacing={2} justifyContent="space-between" >
        <Sidebar />
        <Feed />
        <Rightbar />
      </Stack>
    </Box>
  );
}

export default App;
