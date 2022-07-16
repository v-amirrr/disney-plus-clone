import React from 'react';

import { Routes, Route, useLocation } from 'react-router-dom';

import BeforeLogin from './components/BeforeLogin';
import Login from './components/Login';
import SignUp from "./components/SignUp";

import { AnimatePresence } from 'framer-motion';

const App = () => {

    const location = useLocation();

    return (
        <>
            <AnimatePresence exitBeforeEnter>

                <Routes location={location} key={location.key}>
                    <Route path="/" element={<BeforeLogin />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<SignUp />} />
                </Routes>
                
            </AnimatePresence>
        </>
    );
};

export default App;