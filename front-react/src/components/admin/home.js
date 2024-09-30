import React, { useEffect, useState } from "react";
import axios from "axios";
import { Chart, DoughnutController, ArcElement, Tooltip, Legend } from 'chart.js';

const Home = () => {
    const [data, setData] = useState({}); // Store API data
    let trafficChart = null; // Reference to the chart instance
    Chart.register(DoughnutController, ArcElement, Tooltip, Legend);
    useEffect(() => {
        fetchData(); // Fetch data on component mount
    }, []);

    useEffect(() => {
        if (data.student && data.teacher && data.supervisor) {
            renderChart(); // Render the chart when data is fetched
        }
    }, [data]); // Re-run this effect when the `data` state changes

    // Function to fetch data from the API
    const fetchData = () => {
        axios.get('http://127.0.0.1:8000/api/chart')
            .then(response => {
                console.log('API Response:', response.data);
                setData(response.data); // Update the state with API data
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    };

    // Function to render or update the chart
    const renderChart = () => {
        const ctx = document.getElementById('traffic-chart').getContext('2d');

        // If a chart instance already exists, destroy it before re-rendering
        if (trafficChart) {
            trafficChart.destroy();
        }

        trafficChart = new Chart(ctx, {
            type: 'doughnut', // Chart type
            data: {
                labels: ['Students', 'Teachers', 'Supervisors'], // Labels for the data
                datasets: [{
                    data: [data.student, data.teacher, data.supervisor], // Data from API
                    backgroundColor: [
                        'rgba(54, 215, 232, 1)',
                        'rgba(6, 185, 157, 1)',
                        'rgba(255, 191, 150, 1)'
                    ],
                    borderColor: [
                        'rgba(177, 148, 250, 1)',
                        'rgba(132, 217, 210, 1)',
                        'rgba(254, 112, 150, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                legend: {
                    display: false // Custom legend is outside
                },
                cutoutPercentage: 60 // Doughnut hole size
            }
        });
    };

    return (
        <div className="content-wrapper">
            <div className="page-header">
                <h3 className="page-title">
          <span className="page-title-icon bg-gradient-primary text-white me-2">
            <i className="mdi mdi-home"></i>
          </span>
                    Home
                </h3>
                <nav aria-label="breadcrumb">
                    <ul className="breadcrumb">
                        <li className="breadcrumb-item active" aria-current="page">
                            <span></span>Overview <i className="mdi mdi-alert-circle-outline icon-sm text-primary align-middle"></i>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="row">
                <div className="col-md-4 stretch-card grid-margin">
                    <div className="card bg-gradient-danger card-img-holder text-white">
                        <div className="card-body">
                            <img src="assets/images/dashboard/circle.svg" className="card-img-absolute" alt="circle-image" />
                            <h4 className="font-weight-normal mb-3">Student <i className="mdi mdi-chart-line mdi-24px float-right"></i></h4>
                            <h2 className="mb-5">{data.student}0</h2>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 stretch-card grid-margin">
                    <div className="card bg-gradient-info card-img-holder text-white">
                        <div className="card-body">
                            <img src="assets/images/dashboard/circle.svg" className="card-img-absolute" alt="circle-image" />
                            <h4 className="font-weight-normal mb-3">Teacher <i className="mdi mdi-bookmark-outline mdi-24px float-right"></i></h4>
                            <h2 className="mb-5">{data.teacher}0</h2>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 stretch-card grid-margin">
                    <div className="card bg-gradient-success card-img-holder text-white">
                        <div className="card-body">
                            <img src="assets/images/dashboard/circle.svg" className="card-img-absolute" alt="circle-image" />
                            <h4 className="font-weight-normal mb-3">Supervisor <i className="mdi mdi-diamond mdi-24px float-right"></i></h4>
                            <h2 className="mb-5">{data.supervisor}0</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-5 grid-margin stretch-card">
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title">Traffic Sources</h4>
                            <canvas id="traffic-chart" style={{ display: 'block', height: '195px', width: '391px' }} width="488" height="243" />
                            <div className="rounded-legend legend-vertical legend-bottom-left pt-4" id="traffic-chart-legend">
                                <ul>
                                    <li><span className="legend-dots" style={{ background: 'rgba(54, 215, 232, 1)' }} /> Students <span className="float-right">{data.student}%</span></li>
                                    <li><span className="legend-dots" style={{ background: 'rgba(6, 185, 157, 1)' }} /> Teachers <span className="float-right">{data.teacher}%</span></li>
                                    <li><span className="legend-dots" style={{ background: 'rgba(255, 191, 150, 1)' }} /> Supervisors <span className="float-right">{data.supervisor}%</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Home;
