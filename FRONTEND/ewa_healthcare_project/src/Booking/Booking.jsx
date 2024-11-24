import React, { useState } from "react";
import "./Booking.css";

export default function Booking() {
  const [role, setRole] = useState("Customer"); // Dynamically toggled role

  // Hardcoded bookings data
  const sampleBookings = [
    {
      id: 1,
      title: "Doctor's Appointment",
      date: "2024-11-28",
      time: "10:00 AM",
      location: "Healthcare Center A",
      status: "Scheduled",
    },
    {
      id: 2,
      title: "Yoga Session",
      date: "2024-12-01",
      time: "8:00 AM",
      location: "Fitness Club B",
      status: "Completed",
    },
    {
      id: 3,
      title: "Business Meeting",
      date: "2024-11-30",
      time: "1:00 PM",
      location: "Office Park C",
      status: "In Progress",
    },
  ];

  // For testing API later
  /*
  useEffect(() => {
    const fetchBookings = async () => {
      const response = await fetch(`/api/bookings?role=${role}`);
      const data = await response.json();
      setBookings(data);
    };
    fetchBookings();
  }, [role]);
  */

  const handleCancel = (id) => {
    alert(`Booking ID ${id} cancelled.`);
  };

  const handleComplete = (id) => {
    alert(`Booking ID ${id} marked as completed.`);
  };

  return (
    <div className="booking-page">
      <header>
        <h1>{role === "Customer" ? "Your Bookings" : "Assigned Bookings"}</h1>
        <div className="role-toggle">
          <label>View as:</label>
          <select value={role} onChange={(e) => setRole(e.target.value)}>
            <option value="Customer">Customer</option>
            <option value="Specialist">Specialist</option>
          </select>
        </div>
      </header>
      <main>
        {sampleBookings.length > 0 ? (
          sampleBookings.map((booking) => (
            <div className="booking-card" key={booking.id}>
              <h3>{booking.title}</h3>
              <p>
                <strong>Date:</strong> {booking.date}
              </p>
              <p>
                <strong>Time:</strong> {booking.time}
              </p>
              <p>
                <strong>Location:</strong> {booking.location}
              </p>
              <p>
                <strong>Status:</strong> {booking.status}
              </p>
              {role === "Customer" && (
                <button className="btn cancel-btn" onClick={() => handleCancel(booking.id)}>
                  Cancel Booking
                </button>
              )}
              {role === "Specialist" && booking.status !== "Completed" && (
                <button className="btn complete-btn" onClick={() => handleComplete(booking.id)}>
                  Mark as Completed
                </button>
              )}
            </div>
          ))
        ) : (
          <p>No bookings found.</p>
        )}
      </main>
    </div>
  );
}
