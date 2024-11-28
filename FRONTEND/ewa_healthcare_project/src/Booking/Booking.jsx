import React, { useState, useEffect } from "react";
import "./Booking.css";

export default function Booking() {
  const [role, setRole] = useState("Customer"); // Default role
  const [bookings, setBookings] = useState([]); // To hold booking data
  const [userId, setUserId] = useState(1); // Example user ID
  const [loading, setLoading] = useState(false); // To manage loading state
  const [error, setError] = useState(""); // To manage error state

  // Fetch bookings when the role or userId changes
  useEffect(() => {
    fetchBookings();
  }, [role, userId]);

  // Fetch bookings from the backend based on role and userId
  const fetchBookings = async () => {
    setLoading(true);
    setError(""); // Reset the error state
    try {
      const response = await fetch(`/api/bookings?role=${role}&userId=${userId}`);
      const data = await response.json();
      setBookings(data); // Update state with booking data
    } catch (err) {
      setError("Failed to fetch bookings. Please try again.");
      console.error(err);
    } finally {
      setLoading(false); // Stop loading indicator
    }
  };

  // Handle cancel booking action
  const handleCancel = async (id) => {
    try {
      const response = await fetch(`/api/bookings/${id}/cancel`, { method: "PUT" });
      if (response.ok) {
        alert(`Booking ID ${id} cancelled.`);
        fetchBookings(); // Refresh bookings list
      } else {
        alert("Failed to cancel booking.");
      }
    } catch (err) {
      console.error(err);
    }
  };

  // Handle mark as complete action
  const handleComplete = async (id) => {
    try {
      const response = await fetch(`/api/bookings/${id}/complete`, { method: "PUT" });
      if (response.ok) {
        alert(`Booking ID ${id} marked as completed.`);
        fetchBookings(); // Refresh bookings list
      } else {
        alert("Failed to complete booking.");
      }
    } catch (err) {
      console.error(err);
    }
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
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p className="error">{error}</p>
        ) : bookings.length > 0 ? (
          bookings.map((booking) => (
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
