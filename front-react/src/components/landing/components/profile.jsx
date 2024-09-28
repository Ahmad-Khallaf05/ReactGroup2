import React from 'react';
import Sidebar from './sidebar';
import { FaTasks } from 'react-icons/fa';

function Profile() {
    const taskCount = 5; 
    const userName = "John Doe";
    const userAge = 30;
    const userEmail = "johndoe@example.com";
    const userLocation = "New York, USA";
    const dateOfBirth = "January 1, 1993"; 
    const userHobbies = "Reading, Traveling, Cooking"; 

    return (
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
        // marginLeft: '20px',
        marginRight: '50px'
    }}>
        <FaTasks style={{ marginRight: '10px', fontSize: '24px' }} />
        <span style={{ fontSize: '20px' }}>you have new 5 Tasks</span>
    </div>
</div>


                <div style={{ display: 'flex', alignItems: 'flex-start', padding: '15px', width: '100%' }}>
                    <img 
                        src="https://afn.ca/wp-content/uploads/2022/12/unknown_staff-500x500.webp" 
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
                                { label: "Location", value: userLocation },
                                { label: "Email", value: userEmail },
                                { label: "Hobbies", value: userHobbies },
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
    );
}

export default Profile;
