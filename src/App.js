import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { useAuthContext } from "./hooks/useAuthContext";
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
import OnlineUsers from './components/OnlineUsers'


function App() {
  const { authIsReady, user } = useAuthContext()

  return (
    <div className="App">
      {authIsReady && (
        <BrowserRouter>
          {user && <OnlineUsers />}
          
          <div className="container">
            <Navbar />
            <Routes>

              <Route exact path="/" element={ (!user && <Navigate to="/login" replace />) ||( user && <Dashboard /> ) } />
              

              <Route path="/create" element={ (!user && <Navigate to="/login" replace />) || (user && <Create />    )} />

              <Route path="/projects/:id" element={ (!user && <Navigate to="/login" replace />) || (user && <Project /> )   } />

              <Route path="/login" element={ (user && <Navigate to="/" replace />) || (!user && <Login />)} />

              <Route path="/signup" element={ ( user && <Navigate to="/" replace />) || (!user && <Signup />)} />


            </Routes> 
          </div>
          {user && <Sidebar />}
        </BrowserRouter>
      )}
    </div>

  );
  
}

export default App;
