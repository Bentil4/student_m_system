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
            <Mytable
              studentid={student.studentId}
              studentfirstname={
                student.firstName +
                ' ' +
                student.middleName +
                ' ' +
                student.lastName
              }
              studentemail={student.email}
              studentphone={student.phone}
              studentdob={student.dob}
            />

            // <tr key={student.studentId}>
            //   <td>{`${student.firstName} ${student.middleName} ${student.lastName}`}</td>
            //   <td>{student.email}</td>
            //   <td>{student.phone}</td>
            //   <td>{student.dob}</td>

            //   {/* Include other student details as needed */}
            // </tr>
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
