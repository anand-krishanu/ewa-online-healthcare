import React from "react";
import './SpecialistList.css'


const doctors = [
    { id: 1, name: "Patey Cruiser", specialty: "Neurosurgeon", img: "https://i.imgur.com/LohyFIN.jpg", stars: 4 },
    { id: 2, name: "Mario Speedway", specialty: "Cardiologist", img: "https://i.imgur.com/o5uMfKo.jpg", stars: 5 },
    { id: 3, name: "Anna Sthesia", specialty: "Surgeon", img: "https://i.imgur.com/tmdHXOY.jpg", stars: 3 },
    { id: 4, name: "Paul Moliv", specialty: "Dentist", img: "https://i.imgur.com/C4egmYM.jpg", stars: 2 },
];

export default function SpecialistList() {
    return (
        <div className="container mt-5 mb-5">
            <div className="row g-2">
                {doctors.map((doctor) => (
                    <div className="col-md-3" key={doctor.id}>
                        <div className="card p-2 py-3 text-center">
                            <div className="img mb-2">
                                <img src={doctor.img} width="70" className="rounded-circle" alt={doctor.name} />
                            </div>
                            <h5 className="mb-0">{doctor.name}</h5>
                            <small>{doctor.specialty}</small>
                            <div className="ratings mt-2">
                                {Array.from({ length: doctor.stars }, (_, index) => (
                                    <i className="fa fa-star" key={index}></i>
                                ))}
                            </div>
                            <div className="mt-4 apointment">
                                <button className="btn btn-success text-uppercase">Book Appointment</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

