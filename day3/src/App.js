import React from "react";
import { Routes, Route } from "react-router-dom";
import SignupPage from "./components/Signup";
import LoginPage from "./components/Login";

function App() {
  return (
    <Routes>
      <Route path="/register" element={<SignupPage/>}/>
      <Route path="/login" element={<LoginPage/>}/>
    </Routes>
  );
}

export default App;