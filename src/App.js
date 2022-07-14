import React from 'react';

import { Routes, Route } from 'react-router-dom';

import HomePage from './components/HomePage';
import Header from './components/Header';

const App = () => {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />} />
            </Routes>
        </>
    );
};

export default App;