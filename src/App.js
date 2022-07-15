import React from 'react';

import { Routes, Route, useLocation } from 'react-router-dom';

import BeforeLogin from './components/BeforeLogin';
import Login from './components/Login';

import { AnimatePresence } from 'framer-motion';

const App = () => {

    const location = useLocation();

    return (
        <>
            <AnimatePresence exitBeforeEnter>

                <Routes location={location} key={location.key}>
                    <Route path="/" element={<BeforeLogin />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
                
            </AnimatePresence>
        </>
    );
};

export default App;