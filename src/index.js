import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import SignIn from './components/Signin';
import Home from './components/Home';
import Profils from './components/Profils';
import User from './components/Profils/User';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <BrowserRouter>
    <main>
    <Routes>
    <Route path="/" element={<Home />}></Route>
    <Route path="/login" element={<Login />}></Route>
    <Route path="/signin" element={<SignIn />}></Route>
    <Route path="/profils" element={<Profils />}></Route>
    <Route path="Profils/user/" element={<User />}></Route>
    </Routes>
    </main>
    
    <App />
    </BrowserRouter>
  
);


