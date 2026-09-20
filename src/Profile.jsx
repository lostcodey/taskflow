import React from 'react'
import { useState } from 'react';


const Profile = ({ state_change }) => {
  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const [organisation, setOrganisation] = useState("");
  const [image, setImage] = useState(null);
  const token = localStorage.getItem('token');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append('name', name);
    data.append('dob', dob);
    data.append('organisation', organisation);
    data.append('image', image);
    const response = await fetch('http://localhost:5000/api/profile', {
      method: "POST",
      headers: { "Authorization": `Bearer ${token}` },
      body: data
    })

  };

  return (
    <div className="add-task-expanded">

      <div className="profile-card card">

        <h1 className="profile-title">Add Profile</h1>

        <p className="profile-subtitle">
          Add your personal details to your TaskFlow profile.
        </p>

        <form onSubmit={handleSubmit}>

          {/* Profile Image */}
          <div className="todo-form-field">
            <label>Profile Picture</label>

            <div className="profile-image-upload">
              <input
                type="file"
                accept="image/*"
                onChange={(e) => setImage(e.target.files[0])}
              />

              <span>
                {image ? image.name : "Choose an image"}
              </span>
            </div>
          </div>


          {/* Name */}
          <div className="todo-form-field">
            <label htmlFor="name">Name</label>

            <input
              id="name"
              type="text"
              className="input"
              placeholder="Enter your full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>


          {/* Date of Birth */}
          <div className="todo-form-field">
            <label htmlFor="dob">Date of Birth</label>

            <input
              id="dob"
              type="date"
              className="input"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
            />
          </div>


          {/* Organisation */}
          <div className="todo-form-field">
            <label htmlFor="organisation">Organisation</label>

            <input
              id="organisation"
              type="text"
              className="input"
              placeholder="Enter your organisation"
              value={organisation}
              onChange={(e) => setOrganisation(e.target.value)}
            />
          </div>


          {/* Buttons */}
          <div className="todo-form-actions">

            <button
              type="submit"
              className="btn btn-primary"
              onClick={()=>{state_change('todo')}}
            >
              Add Profile
            </button>

            <button
              type="button"
              className="btn btn-secondary"
              onClick={()=>{state_change('todo')}}
            >
              Cancel
            </button>

          </div>

        </form>

      </div>

    </div>
  )
}
export default Profile