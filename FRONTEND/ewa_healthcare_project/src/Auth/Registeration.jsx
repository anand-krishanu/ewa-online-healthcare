import React, { useState } from "react";
import axios from "./axiosConfig.js";
import "./Registration.css";

export default function RegistrationPage() {
  const [role, setRole] = useState("Customer"); // Role: Customer or Specialist
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    address: "",
    password: "",
    specialty: "",
    bio: "",
    location: "",
    workingHours: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const endpoint = role === "Specialist" ? "/addAccountsSP" : "/addAccounts"; // Corrected endpoints

    try {
      const payload = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phoneNumber: formData.phoneNumber,
        ...(role === "Customer" && {
          address: formData.address,
          password: formData.password,
        }),
        ...(role === "Specialist" && {
          specialty: formData.specialty,
          bio: formData.bio,
          location: formData.location,
          workingHours: formData.workingHours,
        }),
      };

      const response = await axios.post(endpoint, payload);
      console.log("Success:", response.data);
      alert(`Successfully registered as ${role}!`);
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to register. Please try again.");
    }
  };

  return (
    <div className="gradient">
      <div className="service-heading">
        <h6>LET'S GET TO WORK</h6>
        <h2>Register as {role}</h2>
      </div>

      <div className="contact-container">
        <div className="contact">
          {/* Left Section */}
          <div className="contact-info">
            <h3>Welcome to Our Platform!</h3>
            <p>
              Register as a Specialist or Customer to access our platform's features.
            </p>
            <div className="contact-icons">
              <p>
                <i className="fas fa-envelope"></i> <strong>Email:</strong>{" "}
                <a href="mailto:info@example.com">anandkrishanu26@gmail.com</a>
              </p>
              <p>
                <i className="fas fa-phone"></i> <strong>Phone:</strong>{" "}
                <a href="tel:+123456789">79-88528052</a>
              </p>
            </div>
          </div>

          <div className="divider"></div>

          {/* Right Section */}
          <div className="form-container">
            <form className="form" onSubmit={handleSubmit}>
              {/* Role Selector */}
              <div className="form-group">
                <label htmlFor="role">Register as:</label>
                <select
                  id="role"
                  name="role"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  required
                >
                  <option value="Customer">Customer</option>
                  <option value="Specialist">Specialist</option>
                </select>
              </div>

              {/* Common Fields */}
              <div className="form-group">
                <label htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  placeholder="Enter your first name"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="lastName">Last Name</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  placeholder="Enter your last name"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="phoneNumber">Phone Number</label>
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  placeholder="Enter your phone number"
                  required
                />
              </div>

              {/* Customer-Specific Fields */}
              {role === "Customer" && (
                <>
                  <div className="form-group">
                    <label htmlFor="address">Address</label>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      placeholder="Enter your address"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      placeholder="Enter your password"
                      required
                    />
                  </div>
                </>
              )}

              {/* Specialist-Specific Fields */}
              {role === "Specialist" && (
                <>
                  <div className="form-group">
                    <label htmlFor="specialty">Specialty</label>
                    <input
                      type="text"
                      id="specialty"
                      name="specialty"
                      value={formData.specialty}
                      onChange={handleInputChange}
                      placeholder="Enter your specialty"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="bio">Bio</label>
                    <textarea
                      id="bio"
                      name="bio"
                      value={formData.bio}
                      onChange={handleInputChange}
                      placeholder="Write a short bio about yourself"
                      required
                    ></textarea>
                  </div>

                  <div className="form-group">
                    <label htmlFor="location">Location</label>
                    <input
                      type="text"
                      id="location"
                      name="location"
                      value={formData.location}
                      onChange={handleInputChange}
                      placeholder="Enter your location"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="workingHours">Working Hours</label>
                    <input
                      type="text"
                      id="workingHours"
                      name="workingHours"
                      value={formData.workingHours}
                      onChange={handleInputChange}
                      placeholder="Enter your working hours (e.g., Mon-Fri: 10 AM - 10 PM)"
                      required
                    />
                  </div>
                </>
              )}

              {/* Submit Button */}
              <button className="form-submit-btn" type="submit">
                Register as {role}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
