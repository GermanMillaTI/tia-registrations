import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Registration from "./components/Registration";
import Icf from "./components/Icf";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Registration />} />
                <Route path="/icf" element={<Icf />} />
            </Routes>
        </Router>
    );
};

export default App;