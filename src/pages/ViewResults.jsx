import React, { useState, useEffect } from 'react';

function ViewResults() {
  const [studentData, setStudentData] = useState([]);

  useEffect(() => {
    const fetchStudentData = async () => {
      try {
        const res = await fetch(
          'http://localhost:8080/api/v1/student/allStudent'
        );
        if (res.ok) {
          const data = await res.json();
          setStudentData(data);
        } else {
          console.error('Failed to fetch student data');
        }
      } catch (error) {
        console.error('Error fetching student data:', error);
      }
    };

    fetchStudentData();
  }, []);

  return (
    <div className="vRe">
      <h1>Student Data</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Subjects</th>
            <th>Total Score</th>
          </tr>
        </thead>
        <tbody>
          {studentData.map((student) => (
            <tr className="one" key={student.studentId}>
              <td>{`${student.firstName} ${student.lastName}`}</td>
              <td>
                <ul className="opo">
                  {student.subjects.map((subject, index) => (
                    <li key={index}>
                      <p>{subject.subjectName}</p>
                      <p className="part">{subject.totalScore}</p>
                    </li>
                  ))}
                </ul>
              </td>
              <td>{student.totalScore}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ViewResults;
