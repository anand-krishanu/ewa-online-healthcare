import React, { useEffect, useState } from "react";
import axios from "axios";
import './SpecialistList.css';
import { Link } from 'react-router-dom';

export default function SpecialistList() {
    const [specialists, setSpecialists] = useState([]);

    useEffect(() => {
        const fetchSpecialists = async () => {
            try {
                const response = await axios.get('http://localhost:8080/healthcare/getSpecialists');
                if (Array.isArray(response.data)) {
                    setSpecialists(response.data);
                } else {
                    console.error("Expected an array, got:", response.data);
                }
            } catch (error) {
                console.error("Error fetching specialists:", error);
            }
        };

        fetchSpecialists();
    }, []);

    return (
        <div className="container mt-5 mb-5">
            <div className="row g-2">
                {specialists.length > 0 ? (
                    specialists.map((doctor) => (
                        <div className="col-md-3" key={doctor.specialistId}>
                            <div className="card p-2 py-3 text-center">
                                <div className="img mb-2">
                                    <img
                                        src={doctor.img || "https://via.placeholder.com/70"}
                                        width="70"
                                        className="rounded-circle"
                                        alt={doctor.firstName}
                                    />
                                </div>
                                <h5 className="mb-0">{doctor.firstName} {doctor.lastName}</h5>
                                <small>{doctor.specialty}</small>
                                <div className="ratings mt-2">
                                    {Array.from({ length: 5 }, (_, index) => (
                                        <i
                                            className={`fa fa-star ${index < doctor.stars ? 'filled' : ''}`}
                                            key={index}
                                        ></i>
                                    ))}
                                </div>
                                <div className="mt-4 appointment">
                                    <Link className="btn btn-success text-uppercase" to='/bookingForm' >Book Appointment</Link>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No specialists available.</p>
                )}
            </div>
        </div>
    );
}
