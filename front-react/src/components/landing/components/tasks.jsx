import React, { useState } from 'react';
import Sidebar from './sidebar'; 
import { FaTasks } from 'react-icons/fa';

function TaskSt() {
    const [tasks] = useState([
        { id: 1, title: "Design Homepage", description: "Create a visually appealing homepage layout.", status: "Pending", img: "path/to/image1.jpg" },
        { id: 2, title: "Develop API", description: "Implement the backend API for data handling.", status: "Completed", img: "path/to/image2.jpg" },
        { id: 3, title: "User Testing", description: "Conduct user testing sessions and gather feedback.", status: "In Progress", img: "path/to/image3.jpg" },
        { id: 4, title: "Fix Bugs", description: "Resolve identified bugs from the last testing phase.", status: "Pending", img: "path/to/image4.jpg" },
        { id: 5, title: "Deploy Application", description: "Deploy the application to the production environment.", status: "Completed", img: "path/to/image5.jpg" },
    ]);

    return (
        <div className="tasks-page" style={{ display: 'flex', backgroundColor: '#fff', minHeight: '100vh' }}>
            <Sidebar />
            <div className="tasks-content" style={{ padding: '20px', flex: 1 }}>
            <div style={{ padding: '10px' }}>
    <h1>tasks</h1>
    <p>this is your tasks</p>
</div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '20px',  backgroundColor: '#fff', padding: '20px' }}>
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
    );
}

export default TaskSt;
