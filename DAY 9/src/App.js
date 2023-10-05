import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import './assets/css/Login.css';
import Dashboard from "./components/Dashboard";
import './assets/css/Dashboard.css';
import './assets/css/Signup.css';
import Shakes from "./components/Shakes";
import Menu from "./components/Menu";
import { UserProvider } from "./components/Context/UserContext";
import Terms from "./components/Terms";


function App() {
  return (
    <div className="App">
      <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/sign" element={<Signup />} />
          <Route path="/dash" element={<Dashboard />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/shake" element={<Shakes />} />
          <Route path="/Terms" element={<Terms />} />
        </Routes>
      </BrowserRouter>
      </UserProvider>
    </div>
  );
}

export default App;