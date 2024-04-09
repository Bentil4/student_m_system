import React, { useEffect, useRef, useState } from 'react';
import AddStudent from './AddStudent';
import { useUser } from '../UserContext'; // Import useUser hook

function Student() {
  const targetref = useRef();
  const targetref1 = useRef();
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredStudentData, setFilteredStudentData] = useState([]);
  const [studentData, setStudentData] = useState([]);
  const { user } = useUser(); // Access user data using useUser hook

  console.log(user);

  const handleAddButton = () => {
    targetref.current.style.display = 'none';
    targetref1.current.style.display = 'flex';
  };

  const fetchdata = async () => {
    const res = await fetch('http://localhost:8080/api/v1/student/allStudent');
    const data = await res.json();
    setStudentData(data);
    setFilteredStudentData(data);
  };

  useEffect(() => {
    fetchdata();
  }, []);

  useEffect(() => {
    const filteredData = studentData.filter((student) => {
      const fullName = `${student.firstName} ${student.middleName} ${student.lastName}`;
      return fullName.toLowerCase().includes(searchQuery.toLowerCase());
    });
    setFilteredStudentData(filteredData);
  }, [searchQuery, studentData]);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="student">
      <div className="student-first" ref={targetref}>
        <div className="student-header">
          <div className="student-search">
            <input
              type="text"
              placeholder="Search by name..."
              onChange={handleSearch}
              className="input-black"
            />
            <button> Search</button>
          </div>
          {/* {user.role !== 'teacher' && (
            <div className="student-add" onClick={handleAddButton}>
              <span>+</span>
            </div>
          )} */}
        </div>
        <div className="student-table">
          {filteredStudentData.map((student) => (
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
