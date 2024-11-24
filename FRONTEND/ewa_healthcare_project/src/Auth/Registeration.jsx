import React, { useState } from "react";
import "./Registration.css";

export default function RegistrationPage() {
  const [role, setRole] = useState("Customer"); // State for role

  return (
    <div className="gradient">
      <div className="service-heading">
        <h6>LET'S GET TO WORK</h6>
        <h2>Register as {role}</h2>
        <div id="MsgResult" style={{ display: "none", padding: "20px", margin: "20px" }}></div>
      </div>

      <div className="contact-container">
        <div className="contact">
          {/* Left Section: Information */}
          <div className="contact-info">
            <h3>Welcome to Our Platform!</h3>
            <p>
              Register as a Specialist or Customer to access our platform's features. If you have
              any questions, feel free to contact us anytime!
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

          {/* Right Section: Form */}
          <div className="form-container">
            <form className="form" method="post" id="FrmData" name="FrmData" autoComplete="off">
              {/* Role Selector */}
              <div className="form-group">
                <label htmlFor="role">Register as:</label>
                <select
                  id="role"
                  name="user_role"
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
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="user_name"
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="user_email"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  name="user_phone"
                  placeholder="Enter your phone number"
                  required
                />
              </div>

              {/* Specialist-Specific Fields */}
              {role === "Specialist" && (
                <>
                  <div className="form-group">
                    <label htmlFor="specialization">Specialization</label>
                    <input
                      type="text"
                      id="specialization"
                      name="specialization"
                      placeholder="Enter your specialization"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="experience">Years of Experience</label>
                    <input
                      type="number"
                      id="experience"
                      name="experience"
                      placeholder="Enter your experience"
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
