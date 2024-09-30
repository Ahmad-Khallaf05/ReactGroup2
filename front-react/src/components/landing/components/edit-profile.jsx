import React, { useState, useContext } from 'react';
import Sidebar from './sidebar';
import Nav from "./nav";
import Footer from "./category"
import { FaEnvelope } from 'react-icons/fa';
import { AuthContext } from './context/AuthContext';
import axios from 'axios'; 
import { useNavigate } from 'react-router-dom';

function EditProfile() {
    const { auth } = useContext(AuthContext);
    const [userName, setUserName] = useState(auth.user.name);
    const [userAge, setUserAge] = useState(auth.user.dob);
    const [userEmail, setUserEmail] = useState(auth.user.email);
    const [userGender, setUserGender] = useState(auth.user.gender); 
    const [parentName, setParentName] = useState(auth.user.parentName);
    const [parentPhone, setParentPhone] = useState(auth.user.parentPhone); 
    const userImage = `http://127.0.0.1:8000/${auth.user.san7a}`; 
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const { setAuth } = useContext(AuthContext);
    const navigate = useNavigate(); 

    const handleSave = async () => {
        if (!userName || !userEmail || !userGender || !parentName || !parentPhone) {
            alert("Please fill all fields!");
            return;
        }

        const updatedData = { 
            name: userName, 
            dob: userAge, 
            email: userEmail,
            gender: userGender, 
            parentName: parentName, 
            parentPhone: parentPhone ,
        };

        try {
            setLoading(true);
            setError(null); 

            const response = await axios.put(`http://127.0.0.1:8000/api/user/${auth.user.id}/edit`, updatedData, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            // setAuth({
            //     user: response.data.user,
            //     token: response.data.token,
            //   })
            console.log(response);
            
            if (response.status !== 200) {
                throw new Error('Failed to update profile');
            }

            console.log("Profile updated successfully", response.data);
            navigate('/profile');
        } catch (err) {
            setError(err.message);
            console.error("Error updating profile:", err);
        } finally {
            setLoading(false);
        }
    };
    const handleCancel = () => {
        navigate('/profile'); 
    };

    return (
        <div>
            <Nav />
        <div className="profile-page">
            <Sidebar />
            <div className="profile-content" style={{ padding: '20px', flex: 1 }}>
                <div style={{ padding: '10px' }}>
                    <h1>Edit Profile</h1>
                    <p>You can edit your info on this page.</p>
                </div>
                
                {error && <p style={{ color: 'red' }}>{error}</p>}

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
                        src={userImage}
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
                                <h2 style={{ margin: '0', fontSize: '18px', color: '#555' }}>Date of Birth:</h2>
                                <input
                                    type="date" 
                                    value={userAge}
                                    onChange={(e) => setUserAge(e.target.value)}
                                    style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
                                />
                            </div>
                            <div>
                                <h2 style={{ margin: '0', fontSize: '18px', color: '#555' }}>Gender:</h2>
                                <select
                                    value={userGender}
                                    onChange={(e) => setUserGender(e.target.value)}
                                    style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
                                >
                                    <option value="">Select Gender</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                </select>
                            </div>
                            <div>
                                <h2 style={{ margin: '0', fontSize: '18px', color: '#555' }}> Email:</h2>
                                <input
                                    type="email"
                                    value={userEmail}
                                    onChange={(e) => setUserEmail(e.target.value)}
                                    style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
                                />
                            </div>
                            <div>
                                <h2 style={{ margin: '0', fontSize: '18px', color: '#555' }}>Parent Name:</h2>
                                <input
                                    type="text"
                                    value={parentName}
                                    onChange={(e) => setParentName(e.target.value)}
                                    style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
                                />
                            </div>
                            <div>
                                <h2 style={{ margin: '0', fontSize: '18px', color: '#555' }}>Parent Phone:</h2>
                                <input
                                    type="text"
                                    value={parentPhone}
                                    onChange={(e) => setParentPhone(e.target.value)}
                                    style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
                                />
                            </div>
                        </div>

                        <div style={{ marginTop: '20px' }}>
                            <button
                                onClick={handleSave}
                                disabled={loading}
                                style={{ marginRight: '10px', padding: '10px 15px', borderRadius: '5px', border: 'black solid 1px', backgroundColor: '#28a745', color: '#fff' }}
                            >
                                {loading ? 'Saving...' : 'Save'}
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
        <Footer />
        </div>
    );
}

export default EditProfile;
