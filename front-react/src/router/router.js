import React from 'react'

import Landing from "../components/pages/land";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import User from '../components/admin/users';
import Tasks from '../components/admin/tasks';
import Home from "../components/pages/admin";

//  import "../../public/assets/css/style.css"; 

export default function Myrouter() {
    return (
        <div>

            <Router>
                <Routes>
                    <Route path="/" element={<Landing />} />
                    <Route path="/dashboard" element={<Home />} />
                    <Route path="/Users" element={<User />} />
                    <Route path="/Tasks" element={<Tasks />} />
                </Routes>
            </Router>



        </div>
    )
}
