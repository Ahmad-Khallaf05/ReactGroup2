import React, { useContext } from 'react';
import axios from 'axios';
import { AuthContext } from './context/AuthContext.jsx';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
    const { auth, setAuth } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await axios.post('http://127.0.0.1:8000/api/logout', {}, {
                headers: {
                    'Authorization': `Bearer ${auth.token}`
                }
            });
            setAuth({ token: null });
            navigate('/login');
        } catch (error) {
            console.error("Logout failed:", error);
        }
    };

    return (
        <button onClick={handleLogout}  className='btn btn-danger'>Logout</button>
    );
};

export default Logout;