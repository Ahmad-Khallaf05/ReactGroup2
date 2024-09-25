import React from 'react';
import { FaUserGraduate, FaChalkboardTeacher, FaUserShield } from 'react-icons/fa';

export default function Category() {
    return (
        <div className="category-container">
            
            <div className="category-item">
                
                <FaUserGraduate size={50} />
                <h3>Student</h3>
                <p>Log in as a student to access study materials.</p>
            </div>
            <div className="category-item">
                <FaChalkboardTeacher size={50} />
                <h3>Teacher</h3>
                <p>Log in as a teacher to manage classes and content.</p>
            </div>
            <div className="category-item">
                <FaUserShield size={50} />
                <h3>Admin</h3>
                <p>Log in as an admin to manage the system and users.</p>
            </div>
        </div>
    );
}
