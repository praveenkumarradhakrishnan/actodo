import Login from "./pages/Login";
import Landing from "./pages/Landing";
import Signup from "./pages/Signup";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [edata, setedata] = useState(
    [
      {
        uname: "praveen",
        upass: "123"

      }
    ]
  )
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login edata={edata} setedata={setedata} />}>Login</Route>
        <Route path="/Signup" element={<Signup edata={edata} setedata={setedata} />}>Signup</Route>
        <Route path="/landing" element={<Landing />}></Route>
      </Routes>

    </BrowserRouter>);

} export default App;