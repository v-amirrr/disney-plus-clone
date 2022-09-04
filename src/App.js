import React from 'react';

import { Routes, Route, useLocation, Navigate } from 'react-router-dom';

import HomePage from './components/HomePage';
import Login from './components/Login';
import SignUp from "./components/SignUp";
import Error from './components/Error';
import Loading from './components/Loading';
import LogOutConfirmation from './components/LogOutConfirmation';
import Detail from './components/Detail';

import { AnimatePresence } from 'framer-motion';

const App = () => {

    const location = useLocation();

    return (
        <>
            <AnimatePresence exitBeforeEnter>
                <Error />
                <Loading />
                <Routes location={location} key={location.key}>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/logout" element={<LogOutConfirmation />} />
                    <Route path="/detail/:id" element={<Detail />} />
                    <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
                
            </AnimatePresence>
        </>
    );
};

export default App;