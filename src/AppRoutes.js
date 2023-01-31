import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Home from './Home';
import Output from './Output';

const AppRoutes = () => {
    return (
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/react-router-calculator" element={<Home />} />
            <Route exact path="/:operation/:num1/:num2" element={<Output />}/>
        </Routes>
    )
}

export default AppRoutes;
