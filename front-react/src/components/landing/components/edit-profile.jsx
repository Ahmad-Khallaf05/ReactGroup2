import React, { useState } from 'react';
import Sidebar from './sidebar';
import { FaTasks, FaEnvelope, FaMapMarkerAlt, FaEdit } from 'react-icons/fa';

function EditProfile() {
    const [userName, setUserName] = useState("John Doe");
    const [userAge, setUserAge] = useState(30);
    const [userEmail, setUserEmail] = useState("johndoe@example.com");
    const [userLocation, setUserLocation] = useState("New York, USA");
    const taskCount = 5;

    const handleSave = () => {
        console.log("Saved", { userName, userAge, userEmail, userLocation });
    };

    const handleCancel = () => {
        setUserName("John Doe");
        setUserAge(30);
        setUserEmail("johndoe@example.com");
        setUserLocation("New York, USA");
    };

    return (
        <div className="profile-page">
            <Sidebar />
            <div className="profile-content" style={{ padding: '20px', flex: 1 }}>
            <div style={{ padding: '10px' }}>
    <h1>Edit Profile</h1>
    <p>you can edit your info in this page </p>
</div>

                <div style={{ 
                    display: 'flex', 
                    alignItems: 'flex-start', 
                    margin: '20px 0', 
                    padding: '15px', 
                    border: '1px solid #ccc', 
                    borderRadius: '8px', 
                    backgroundColor: '#fafafa', 
                    boxShadow: '0 2px 5px rgba(0,0,0,0.1)', 
                    width: '100%' 
                }}>
                    <img 
                        src="https://afn.ca/wp-content/uploads/2022/12/unknown_staff-500x500.webp" 
                        alt="User" 
                        style={{ borderRadius: '10%', width: '300px', height: '300px', marginRight: '20px' }} 
                    />
                    <div style={{ flex: 1, padding: '20px' }}>
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: '1fr 1fr',
                            gap: '15px',
                            backgroundColor: '#f9f9f9',
                            borderRadius: '8px',
                            padding: '20px',
                        }}>
                            <div>
                                <h2 style={{ margin: '0', fontSize: '18px', color: '#555' }}>User Name:</h2>
                                <input 
                                    type="text" 
                                    value={userName} 
                                    onChange={(e) => setUserName(e.target.value)} 
                                    style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }} 
                                />
                            </div>
                            <div>
                                <h2 style={{ margin: '0', fontSize: '18px', color: '#555' }}>Age:</h2>
                                <input 
                                    type="number" 
                                    value={userAge} 
                                    onChange={(e) => setUserAge(e.target.value)} 
                                    style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }} 
                                />
                            </div>
                            <div>
                                <h2 style={{ margin: '0', fontSize: '18px', color: '#555' }}><FaEnvelope style={{ marginRight: '5px', color: '#007bff' }} /> Email:</h2>
                                <input 
                                    type="email" 
                                    value={userEmail} 
                                    onChange={(e) => setUserEmail(e.target.value)} 
                                    style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }} 
                                />
                            </div>
                            <div>
                                <h2 style={{ margin: '0', fontSize: '18px', color: '#555' }}><FaMapMarkerAlt style={{ marginRight: '5px', color: '#007bff' }} /> Location:</h2>
                                <input 
                                    type="text" 
                                    value={userLocation} 
                                    onChange={(e) => setUserLocation(e.target.value)} 
                                    style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }} 
                                />
                            </div>
                        </div>

                        <div style={{ marginTop: '20px' }}>
                            <button 
                                onClick={handleSave} 
                                style={{ marginRight: '10px', padding: '10px 15px', borderRadius: '5px', border: 'black solid 1px', backgroundColor: '#28a745', color: '#fff' }}
                            >
                                Save
                            </button>
                            <button 
                                onClick={handleCancel} 
                                style={{ padding: '10px 15px', borderRadius: '5px', border: 'black solid 1px', color: '#000' }}
                            >
                                Cancel
                            </button>
                        </div>
                    </div>

              
                </div>
            </div>
        </div>
    );
}

export default EditProfile;
