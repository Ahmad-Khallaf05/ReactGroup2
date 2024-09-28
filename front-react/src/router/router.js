import React from 'react'

import Landing from "../components/pages/land";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import User from '../components/admin/pages/user/users';
import Tasks from '../components/admin/pages/task/tasks';
import Contacts from '../components/admin/contact';
import Home from "../components/pages/admin";   
import CreateUser from '../components/admin/pages/user/createUser';
import EditUser from '../components/admin/pages/user/editUser';
import CreateTask from '../components/admin/pages/task/CreateTask';
import EditTask from '../components/admin/pages/task/EditTask';
import Admins from '../components/admin/pages/admins/Admins';
import CreateAdmin from '../components/admin/pages/admins/CreateAdmin';
import UpdateAdmin from '../components/admin/pages/admins/UpdateAdmin';
import ViewAdmin from '../components/admin/pages/admins/ViewAdmin';
//  import "../../public/assets/css/style.css"; 

export default function Myrouter() {
    return (
        <div>

            <Router>
                <Routes>
                    <Route path="/" element={<Landing />} />
                    <Route path="/dashboard" element={<Home />} />
                    <Route path="/users" element={<User />} />
                    <Route path="/Tasks" element={<Tasks />} />
                    <Route path="/create-task" element={<CreateTask />} />
                    <Route path="/task-edit/:id" element={<EditTask />} />
                    <Route path="/create-user" element={<CreateUser />} />
                    <Route path={`/user-edit/:id`} element={<EditUser/>}/>
                    <Route path="/Contacts" element={<Contacts />} />
                    <Route path="/Admins" element={<Admins />} />
                    <Route path="/add_admin" element={<CreateAdmin />} />
                    <Route path="/view_admin/:id" element={<ViewAdmin />} />
                    <Route path="/edit_admin/:id" element={<UpdateAdmin />} />
                </Routes>
            </Router>



        </div>
    )
}
