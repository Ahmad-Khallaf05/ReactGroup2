import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Sidebar from './sidebar';
import Nav from "./nav";
import Footer from "./category"
import { AuthContext } from './context/AuthContext';
import { useContext } from 'react';
function TaskSt() {
    const [tasks, setTasks] = useState([]);
    const { auth } = useContext(AuthContext);
    useEffect(() => {
        const userId = auth.user.id;
        const fetchTasks = async () => {
            try {
                const response = await axios.get(`http://127.0.0.1:8000/api/user-tasks/${userId}`);
                setTasks(response.data);
            } catch (error) {
                console.error("Error fetching tasks:", error);
            }
        };

        fetchTasks();
    }, []);

    return (
        <div>
            <Nav />
       
        <div className="tasks-page" style={{ display: 'flex', backgroundColor: '#fff', minHeight: '100vh' }}>
            <Sidebar />
            <div className="tasks-content" style={{ padding: '20px', flex: 1 }}>
                <div style={{ padding: '10px' }}>
                    <h1>Tasks</h1>
                    <p>This is your tasks</p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '20px', backgroundColor: '#fff', padding: '20px' }}>
                    {tasks.map(task => (
                        <div key={task.id} style={{
                            padding: '15px',
                            border: '1px solid #ccc',
                            borderRadius: '8px',
                            backgroundColor: '#fff',
                            boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
                            textAlign: 'left',
                            transition: 'transform 0.2s',
                        }}>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpjlJl8zzeFzK7ahwaKQ0YmIkURjAPuIhaow&s" alt={task.title} style={{ width: '100%', borderRadius: '5px', marginBottom: '10px' }} />
                            <h2 style={{ margin: '0', fontSize: '20px', color: '#333', padding: '5px' }}>{task.title}</h2>
                            <p style={{ margin: '5px 0', color: '#555', padding: '5px' }}>{task.description}</p>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <button style={{
                                    width: '100px',
                                    height: '40px',
                                    borderRadius: '5px',
                                    border: 'none',
                                    backgroundColor: '#007bff',
                                    color: '#fff',
                                    cursor: 'pointer',
                                    transition: 'background-color 0.3s, transform 0.2s',
                                    fontWeight: 'bold'
                                }}
                                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#0056b3'}
                                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#007bff'}
                                    onClick={() => alert(`Showing details for ${task.title}`)}>
                                    See More
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        <Footer />
        </div>
    );
}

export default TaskSt;
