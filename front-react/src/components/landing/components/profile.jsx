import React, { useEffect, useState, useContext } from 'react';
import Sidebar from './sidebar';
import Nav from "./nav";
import Footer from "./category";
import { FaTasks } from 'react-icons/fa';
import { AuthContext } from './context/AuthContext';
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Profile() {
    const navigate = useNavigate();
    const [taskCount, setTaskCount] = useState(0); 
    const [error, setError] = useState({});
    const { auth } = useContext(AuthContext);

    useEffect(() => {
        if(auth.user.role !== "0") {
            navigate("/dashboard");
        }
    }, [auth.user.role, navigate]);

    useEffect(() => {
        const fetchStudentTaskCount = async () => {
            try {
                const response = await axios.get(`http://127.0.0.1:8000/api/user-tasks/${auth.user.id}`);
                const tasks = response.data;
                setTaskCount(tasks.length); 
            } catch (err) {
                setError(err.message);
                console.error("Error fetching task count:", err.message);
            }
        };

        fetchStudentTaskCount();
    }, [auth.user.id]); 




    const userName = auth.user.name;
    const userAge = new Date().getFullYear() - new Date(auth.user.dob).getFullYear(); 
    const userEmail = auth.user.email;
    const dateOfBirth = auth.user.dob; 
    const userGender = auth.user.gender;
    const parentName = auth.user.parentName;
    const parentPhone = auth.user.parentPhone;
    const userImage = `http://127.0.0.1:8000/${auth.user.san7a}`; 

  
    
    return (
        <div>
            <Nav />
            <div className="profile-page">
                <Sidebar />
                <div className="profile-content" style={{ flex: 1 }}>
                    <div style={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'space-between', 
                    }}>
                        <div style={{ 
                            flex: 1, 
                            fontSize: '18px', 
                            color: '#555' 
                        }}>
                            <div style={{ padding: '10px' }}>
                                <h1>User Profile</h1>
                                <p>Welcome to your profile page!</p>
                            </div>
                        </div>
                        <div style={{ 
                            padding: '10px', 
                            border: '1px solid #fd7e14', 
                            borderRadius: '8px', 
                            backgroundColor: '#ffe5b4', 
                            color: '#856404', 
                            fontWeight: 'bold', 
                            display: 'flex', 
                            alignItems: 'center', 
                            boxShadow: '0 4px 8px rgba(0,0,0,0.2)', 
                            height: '50px', 
                            transition: 'transform 0.3s',
                            cursor: 'pointer',
                            marginRight: '50px'
                        }}>
                            <FaTasks style={{ marginRight: '10px', fontSize: '24px' }} />
                            <span style={{ fontSize: '20px' }}>You have {taskCount} new Tasks</span>
                        </div>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'flex-start', padding: '15px', width: '100%' }}>
                        <img 
                            src={userImage}
                            alt="User" 
                            style={{ borderRadius: '10%', width: '300px', height: '300px', marginRight: '20px', border: '2px solid black'}} 
                        />
                        <div style={{ flex: 1, padding: '20px' }}>
                            <div style={{
                                display: 'grid',
                                gridTemplateColumns: 'repeat(2, 1fr)',
                                gap: '15px',
                            }}>
                                {[
                                    { label: "User Name", value: userName },
                                    { label: "Age", value: userAge },
                                    { label: "Date of Birth", value: dateOfBirth },
                                    { label: "Email", value: userEmail },
                                    { label: "Gender", value: userGender },
                                    { label: "Parent Name", value: parentName },
                                    { label: "Parent Phone", value: parentPhone },
                                ].map((item, index) => (
                                    <div key={index} style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '8px', backgroundColor: '#f9f9f9' }}>
                                        <strong>{item.label}:</strong> {item.value}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Profile;
