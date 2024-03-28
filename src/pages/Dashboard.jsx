import React, { useEffect, useState } from 'react';

function Dashboard() {
  const [studentData, SetStudentData] = useState('');

  const fetchdata = async () => {
    const res = await fetch('http://localhost:8080/api/v1/student/allStudent');
    const data = await res.json();
    SetStudentData(data);
  };

  console.log(studentData.length);

  useEffect(() => {
    fetchdata();
  }, []);

  return (
    <div className="dashboard">
      <div className="dash-total">
        <div className="dash-right"></div>
        <div className="dash-left">{studentData.length}</div>
      </div>
      <div className="dash-total">
        <div className="dash-right"></div>
        <div className="dash-left"></div>
      </div>
      <div className="dash-total">
        <div className="dash-right"></div>
        <div className="dash-left"></div>
      </div>
    </div>
  );
}

export default Dashboard;
