import React from 'react'

import Landing from "../components/pages/land";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import User from '../components/admin//pages/user/users';
import Home from "../components/pages/admin";   
import CreateUser from '../components/admin/pages/user/createUser';
import EditUser from '../components/admin/pages/user/editUser';

//  import "../../public/assets/css/style.css"; 

export default function Myrouter() {
    return (
        <div>

            <Router>
                <Routes>
                    <Route path="/" element={<Landing />} />
                    <Route path="/dashboard" element={<Home />} />
                    <Route path="/users" element={<User />} />
                    <Route path="/create-user" element={<CreateUser />} />
                    <Route path={`/user-edit/:id`} element={<EditUser/>}/>
                </Routes>
            </Router>



        </div>
    )
}
