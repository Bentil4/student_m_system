import React from 'react';

function Mytable({
  studentid,
  studentfirstname,
  studentemail,
  studentphone,
  studentdob,
}) {
  return (
    <table border>
      <thead>
        <tr key={studentid}>
          <td>{studentid}</td>
          <td>{studentfirstname}</td>
          <td>{studentemail}</td>
          <td>{studentphone}</td>
          <td>{studentdob}</td>
        </tr>
      </thead>
    </table>
  );
}

export default Mytable;
