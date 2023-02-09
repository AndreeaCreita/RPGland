import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

//styles
import "./App.css";

//pages
import Dashboard from "./pages/dashboard/Dashboard"
import Create from "./pages/create/Create"
import Login from "./pages/login/Login"
import Signup from "./pages/signup/Signup"
import Project from "./pages/project/Project"
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Sidebar />
        <div className="container">
          <Navbar />
          <Routes>

            <Route exact path="/" element={<Dashboard />} />

            <Route path="/create" element={<Create />} />

            <Route path="/projects/:id" element={<Project />} />

            <Route path="/login" element={<Login />} />

            <Route path="/signup" element={<Signup />} />

            {/* <Route path = "/create">
              <Create />
            </Route>

            <Route path = "/projects/:id">
              <Project />
            </Route>

            <Route path = "/login">
              <Login />
            </Route>

            <Route path = "/signup">
              <Signup />
            </Route> */}

          </Routes> 
        </div>
      </BrowserRouter>
    </div>

  );
  
}

export default App;

/*
dashboard -> homepage
login page
sign up page
create projects page
project page  with details
*/