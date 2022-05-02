import React from "react";
import { Routes, Route, Link } from "react-router-dom";

function Navbar() {
    return(
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="about" element={<About />} />
            </Routes>
        </div>
    )
}

export default Navbar;