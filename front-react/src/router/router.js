import React from 'react'
import { AuthProvider } from '../components/landing/components/context/AuthContext';
import ProtectedRoute from '../components/landing/components/utils/ProtectedRoute'; // Create this component for regular users.

import Landing from "../components/pages/land";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import User from '../components/admin/pages/user/users';
import Tasks from '../components/admin/pages/task/tasks.js';
import Classes from '../components/admin/pages/classroom/classrooms.jsx';
import Subjects from '../components/admin/pages/subject/subjects.js';
import Contacts from '../components/admin/contact';
import Home from "../components/pages/admin";   
import CreateUser from '../components/admin/pages/user/createUser';
import EditUser from '../components/admin/pages/user/editUser';
import ShowUser from '../components/admin/pages/user/showUser';
// ----------------------------------------------------------------------------
import CreateTask from '../components/admin/pages/task/CreateTask';
import EditTask from '../components/admin/pages/task/EditTask';

import EditClassroom from '../components/admin/pages/classroom/EditClassroom';
import CreateClassroom from '../components/admin/pages/classroom/CreateClassroom';
// ---------------------------------------------------------------------------
import Event from '../components/admin/pages/event/event';
import AddEvent from '../components/admin/pages/event/addEvent.jsx';
import EditEvent from '../components/admin/pages/event/EditEvent';
import EventView from '../components/admin/pages/event/EventView';
// ---------------------------------------------------------------------------
import Admins from '../components/admin/pages/admins/Admins';
import CreateAdmin from '../components/admin/pages/admins/CreateAdmin';
import UpdateAdmin from '../components/admin/pages/admins/UpdateAdmin';
import ViewAdmin from '../components/admin/pages/admins/ViewAdmin';
// ---------------------------------------------------------------------------
import CreateSubject from '../components/admin/pages/subject/CreateSubject.jsx';
import EditSubject from '../components/admin/pages/subject/EditSubject';
// ------------------------------------------------------------------------
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
            <AuthProvider>
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

                    <Route path="/classrooms" element={<Classes />} />
                    
                    <Route path="/create-classroom" element={<CreateClassroom />} />
                    <Route path="/edit-classroom/:id" element={<EditClassroom />} />
                    
                    <Route path="/Subjects" element={<Subjects />} />

                    <Route path="/create-subject" element={<CreateSubject />} />
                    <Route path="/Subject-edit/:id" element={<EditSubject />} />

                    <Route path="/create-task" element={<CreateTask />} />
                    <Route path="/task-edit/:id" element={<EditTask />} />
                    
                    <Route path="/create-user" element={<CreateUser />} />
                    <Route path={`/user-edit/:id`} element={<EditUser/>}/>
                    <Route path={`/user-show/:id`} element={<ShowUser/>}/>
                    <Route path="/Contacts" element={<Contacts />} />
                    <Route path="/Admins" element={<Admins />} />
                    <Route path="/add_admin" element={<CreateAdmin />} />
                    <Route path="/view_admin/:id" element={<ViewAdmin />} />
                    <Route path="/edit_admin/:id" element={<UpdateAdmin />} />
                    <Route path="/event" element={<Event />} />
                    <Route path="/addEvent" element={<AddEvent />} />
                    <Route path="/edit-event/:id" element={<EditEvent />} />
                    <Route path="/view-event/:id" element={<EventView />} />
                </Routes>
            </Router>
            </AuthProvider>


        </div>
    )
}
