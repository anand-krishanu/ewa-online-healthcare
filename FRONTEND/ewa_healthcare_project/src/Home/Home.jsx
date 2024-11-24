import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Home.css";

export default function Home() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>Welcome, User!</h1>
        <button className="btn btn-logout" onClick={handleLogout}>
          Logout
        </button>
      </header>
      <main className="dashboard-main">
        <section className="card-container">
          <Link to="/bookings" className="card">
            <h3>View Bookings</h3>
            <p>Check and manage your current bookings.</p>
          </Link>
          <Link to="/logistics" className="card">
            <h3>Manage Logistics</h3>
            <p>View and edit logistics for your schedule.</p>
          </Link>
          <Link to="/profile" className="card">
            <h3>Profile</h3>
            <p>Update your personal details and settings.</p>
          </Link>
        </section>
      </main>
    </div>
  );
}
