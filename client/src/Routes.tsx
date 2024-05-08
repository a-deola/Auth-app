import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Signup from "./pages/Signup";

function MyRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/Login" Component={Login} />
        <Route path="/Signup" Component={Signup} />
      </Routes>
    </Router>
  );
}

export default MyRoutes;
