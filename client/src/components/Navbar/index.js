import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function Navbar() {
    return (
        <nav>
            <ul>
                <li><a href="#">Tasks</a></li>
                <li><a href="#">Profile</a></li>
            </ul>
        </nav>
    )
}

export default Navbar;