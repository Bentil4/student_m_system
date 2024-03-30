import React from 'react';
import Dashboard from '../pages/Dashboard';
import Student from '../pages/Student';
import Result from '../pages/Result';
import UpdateStudent from '../pages/UpdateStudent';
import DeleteStudent from '../pages/DeleteStudent';
import Parent from '../pages/Parent';
import ViewResults from '../pages/ViewResults';

function Sidebar({ changePage }) {
  return (
    <div className="sidebar">
      <div>
        <h1>NBYC JHS</h1>
      </div>
      <ul>
        <li
          onClick={() => {
            changePage(<Dashboard />);
          }}
        >
          Dashboard
        </li>

        <li
          onClick={() => {
            changePage(<Student />);
          }}
        >
          Student
        </li>
        <li
          onClick={() => {
            changePage(<Result />);
          }}
        >
          Add Result
        </li>
        <li
          onClick={() => {
            changePage(<ViewResults />);
          }}
        >
          View Result
        </li>
        <li
          onClick={() => {
            changePage(<UpdateStudent />);
          }}
        >
          Update Student
        </li>
        <li
          onClick={() => {
            changePage(<DeleteStudent />);
          }}
        >
          Delete Student
        </li>
        <li
          onClick={() => {
            changePage(<Parent />);
          }}
        >
          Parent
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
