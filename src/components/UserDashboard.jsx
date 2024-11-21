// components/UserDashboard.jsx
import React, { useState, useEffect } from 'react';

const UserDashboard = ({ userRole }) => {
  const [submissions, setSubmissions] = useState([]);

  useEffect(() => {
    const fetchSubmissions = async () => {
      const response = await fetch(userRole === 'admin' ? '/admin/all-submissions' : '/my-submissions');
      const data = await response.json();
      setSubmissions(data);
    };

    fetchSubmissions();
  }, [userRole]);

  return (
    <div>
      <h2>{userRole === 'admin' ? 'Admin Dashboard' : 'Your Submissions'}</h2>
      <ul>
        {submissions.map((submission, index) => (
          <li key={index}>{submission.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserDashboard;
