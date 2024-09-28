import React from 'react'

import Landing from "../components/pages/land";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import User from '../components/admin//pages/user/users';
import Tasks from '../components/admin/pages/task/tasks';
import Contacts from '../components/admin/contact';
import Home from "../components/pages/admin";   
import CreateUser from '../components/admin/pages/user/createUser';
import EditUser from '../components/admin/pages/user/editUser';
import ShowUser from '../components/admin/pages/user/showUser';
import CreateTask from '../components/admin/pages/task/CreateTask';
import EditTask from '../components/admin/pages/task/EditTask';

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
                    <Route path={`/user-show/:id`} element={<ShowUser/>}/>
                    <Route path="/Contacts" element={<Contacts />} />
                </Routes>
            </Router>



        </div>
    )
}
