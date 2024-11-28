import React, { useState, useEffect } from 'react';
import './BookingForm.css'

function BookingUpdate() {
    const [bookingId, setBookingId] = useState('');
    const [customerId, setCustomerId] = useState('');
    const [specialistName, setSpecialistName] = useState('');
    const [appointmentDate, setAppointmentDate] = useState('');
    const [description, setDescription] = useState('');
    const [message, setMessage] = useState('');

    // Update booking handler
    const handleSubmit = async (e) => {
        e.preventDefault();

        const updatedBooking = {
            customerId,
            specialistName,
            appointmentDate,
            description
        };

        try {
            const response = await fetch(`/bookings/update/${bookingId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(updatedBooking)
            });

            const data = await response.json();
            setMessage(data.message); // Handle success or failure message
        } catch (error) {
            setMessage('Error updating booking!');
            console.error(error);
        }
    };

    return (
        <div>
            <h2>Update Booking</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Booking ID:</label>
                    <input
                        type="number"
                        value={bookingId}
                        onChange={(e) => setBookingId(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Customer ID:</label>
                    <input
                        type="number"
                        value={customerId}
                        onChange={(e) => setCustomerId(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Specialist Name:</label>
                    <input
                        type="text"
                        value={specialistName}
                        onChange={(e) => setSpecialistName(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Appointment Date:</label>
                    <input
                        type="datetime-local"
                        value={appointmentDate}
                        onChange={(e) => setAppointmentDate(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Description:</label>
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>
                <button type="submit">Update Booking</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
}

export default BookingUpdate;
