import React from 'react'

import Landing from "../components/pages/land";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import User from '../components/admin//pages/user/users';
import Tasks from '../components/admin/pages/task/tasks.js';
import Subjects from '../components/admin/pages/subject/subjects.js';
import Home from "../components/pages/admin";   
import CreateUser from '../components/admin/pages/user/createUser';
import EditUser from '../components/admin/pages/user/editUser';
import CreateTask from '../components/admin/pages/task/CreateTask';
import EditTask from '../components/admin/pages/task/EditTask';
import CreateSubject from '../components/admin/pages/subject/CreateSubject.jsx';
import EditSubject from '../components/admin/pages/subject/EditSubject';
import Profile from '../components/landing/components/profile';
import TaskSt from '../components/landing/components/tasks';
import EditProfile from '../components/landing/components/edit-profile';
import DeleteProfile from '../components/landing/components/delete-profile';
import Login from '../components/landing/components/login';
import Register from '../components/landing/components/register';


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
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/TaskSt" element={<TaskSt />} />
                    <Route path="/edit-profile" element={<EditProfile />} />
                    <Route path="/delete-profile" element={<DeleteProfile />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    
                    <Route path="/Subjects" element={<Subjects />} />

                    <Route path="/create-subject" element={<CreateSubject />} />
                    <Route path="/Subject-edit/:id" element={<EditSubject />} />

                    <Route path="/create-task" element={<CreateTask />} />
                    <Route path="/task-edit/:id" element={<EditTask />} />
                    
                    <Route path="/create-user" element={<CreateUser />} />
                    <Route path={`/user-edit/:id`} element={<EditUser/>}/>
                </Routes>
            </Router>



        </div>
    )
}
