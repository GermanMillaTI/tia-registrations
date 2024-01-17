import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Registration from "./components/Registration";
import Icf from "./components/Icf";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Registration />} />
                <Route path="/icf/:participantId" element={<Icf />} />
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        </Router>
    );
};

export default App;