import React, { useEffect, useRef, useState } from 'react';
import AddStudent from './AddStudent';
import Mytable from '../components/table';

function Student() {
  const targetref = useRef();
  const targetref1 = useRef();

  const handleAddButton = () => {
    targetref.current.style.display = 'none';
    targetref1.current.style.display = 'flex';
  };

  const [studentData, SetStudentData] = useState([]);

  const fetchdata = async () => {
    const res = await fetch('http://localhost:8080/api/v1/student/allStudent');
    const data = await res.json();
    SetStudentData(data);
  };

  useEffect(() => {
    fetchdata();
  }, []);

  return (
    <div className="student">
      <div className="student-first" ref={targetref}>
        <div className="student-header">
          <div className="student-search">
            <input type="text" placeholder="Search by name..." />
            <button> Search</button>
          </div>
          <div className="student-add" onClick={handleAddButton}>
            <span>+</span>
          </div>
        </div>
        <div className="student-table">
          {studentData.map((student) => (
            <div key={student.studentId}>
              <p className="name">{`${student.firstName} ${student.middleName} ${student.lastName}`}</p>
              <p className="email">{student.email}</p>
              <p className="phone">{student.phone}</p>
              <p className="dob">{student.dob}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="student-second" ref={targetref1}>
        <AddStudent />
      </div>
    </div>
  );
}

export default Student;
