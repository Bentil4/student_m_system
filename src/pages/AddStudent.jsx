import React, { useState } from 'react';

function AddStudent() {
  const [formData, setformData] = useState({
    studentId: '',
    firstName: '',
    middleName: '',
    lastName: '',
    dob: '',
    email: '',
    phone: '',
    residence: '',
    location: '',
    name: '',
    relationship: '',
    contact: '',
  });

  const handleInput = (e) => {
    setformData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('localhost:8080/api/v1/student', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        console.log('Form submitted Successfully');
      } else {
        console.error('Failed to submit');
      }
    } catch (error) {
      console.error('form not sent', error);
    }
  };
  return (
    <div className="add-student">
      <div className="student-save">
        <h1>Add new student</h1>
      </div>
      <div className="student-inputs">
        <div className="student-column">
          <input type="file" capture="user" />
          <input type="text" name="studentId" />
          <input type="text" name="firstName" />
          <input type="text" name="middleName" />
          <input type="text" name="lastName" />
        </div>
        <div className="student-column">
          <input type="text" name="phone" />
          <input type="text" name="email" />
          <input type="text" name="dob" />
          <input type="text" name="residence" />
        </div>
        <div className="student-column">
          <input type="text" name="location" />
          <input type="text" name="name" />
          <input type="text" name="relationship" />
          <input type="text" name="contact" />
          <button>Save </button>
        </div>
      </div>
    </div>
  );
}

export default AddStudent;
