import React, { useState } from 'react';
import './Profile.css';

const ProfilePage = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState('Samantha Jones');
  const [specialty, setSpecialty] = useState('Web Producer');
  const [timings, setTimings] = useState('9:00 AM - 5:00 PM');
  const [location, setLocation] = useState('New York, United States');
  const [profileImage, setProfileImage] = useState('https://via.placeholder.com/150'); // Placeholder image

  const handleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleDelete = () => {
    alert('Profile deleted');
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="profile-page">
      <div className="content">
        <div className="content__cover">
          <div className="content__avatar">
            <img src={profileImage} alt="Profile" />
          </div>
          <div className="content__bull">
            <span></span><span></span><span></span><span></span><span></span>
          </div>
        </div>

        {/* <div className="content__actions">
          <a href="#">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
              <path fill="currentColor" d="M192 256A112 112 0 1 0 80 144a111.94 111.94 0 0 0 112 112zm76.8 32h-8.3a157.53 157.53 0 0 1-68.5 16c-24.6 0-47.6-6-68.5-16h-8.3A115.23 115.23 0 0 0 0 403.2V432a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48v-28.8A115.23 115.23 0 0 0 268.8 288z"></path>
            </svg>
            <span>Connect</span>
          </a>
          <a href="#">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
              <path fill="currentColor" d="M208 352c-41 0-79.1-9.3-111.3-25-21.8 12.7-52.1 25-88.7 25a7.83 7.83 0 0 1-7.3-4.8 8 8 0 0 1 1.5-8.7c.3-.3 22.4-24.3 35.8-54.5-23.9-26.1-38-57.7-38-92C0 103.6 93.1 32 208 32s208 71.6 208 160-93.1 160-208 160z"></path>
            </svg>
            <span>Message</span>
          </a>
        </div> */}

        <div className="content__title">
          <h1>{name}</h1>
          <span>{location}</span>
        </div>

        <div className="content__description">
          <p><strong>Specialty:</strong> {specialty}</p>
          <p><strong>Available Timings:</strong> {timings}</p>
        </div>

        <div className="content__buttons">
          {isEditing ? (
            <>
              <button onClick={handleEdit}>Save</button>
              <button onClick={handleDelete}>Delete</button>
            </>
          ) : (
            <button onClick={handleEdit}>Edit</button>
          )}
        </div>

        <ul className="content__list">
            <li></li>
        </ul>

        {/* Image upload section */}
        {isEditing && (
          <div className="content__upload">
            <input type="file" accept="image/*" onChange={handleImageChange} />
          </div>
        )}
      </div>

      <div className="bg">
        <div><span></span><span></span><span></span><span></span><span></span></div>
      </div>
    </div>
  );
};

export default ProfilePage;
