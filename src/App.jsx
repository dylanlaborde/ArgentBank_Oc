import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signin from "./Pages/Signin/Signin";
import Home from "./Pages/Home/Home";
import Profile from "./Pages/Profile/Profile";
import ProtectedRoute from "./Utils/ProtectedRoute";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/sign-in" element={<Signin />}></Route>
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          ></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
