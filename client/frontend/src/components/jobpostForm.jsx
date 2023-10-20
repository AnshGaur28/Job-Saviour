import React, { useState, useEffect } from 'react';
import axios from 'axios';

function JobPostingForm() {
  const [jobData, setJobData] = useState({
    title: '',
    description: '',
    location: '',
    skillsRequired: '',
  });
  const [jwtToken, setJwtToken] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    // Retrieve JWT token from localStorage
    const token = localStorage.getItem('jwtToken');
    if (token) {
      setJwtToken(token);
    }
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setJobData({
      ...jobData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccessMessage(''); // Clear previous success message
    setErrorMessage(''); // Clear previous error message

    try {
      const response = await axios.post('http://localhost:8080/job', jobData, {
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
      });

      // Handle successful response
      setSuccessMessage('Job posted successfully');
      
      // Clear the form after successful submission
      setJobData({
        title: '',
        description: '',
        location: '',
        skillsRequired: '',
      });
    } catch (error) {
      // Handle errors from the backend
      setErrorMessage('Error posting job: ' + error.message);
    }
  };

  return (
    <div>
      <h2  className="text-2xl font-semibold mb-4">Job Posting Form</h2>
      {successMessage && <div className="text-green-700 mb-2">{successMessage}</div>}
      {errorMessage && <div className="text-red-700 mb-2">{errorMessage}</div>}
      <form onSubmit={handleSubmit}>
        <div  className="mb-4">
          <label className="block text-gray-700 text-sm font-bold">Title:</label>
          <input
           className="w-full border border-gray-300 rounded p-2"
            type="text"
            name="title"
            value={jobData.title}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-4">
          <label  className="block text-gray-700 text-sm font-bold">Description:</label>
          <textarea
            className="w-full border border-gray-300 rounded p-2"
            name="description"
            value={jobData.description}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-4">
          <label  className="block text-gray-700 text-sm font-bold">Location:</label>
          <input
          className="w-full border border-gray-300 rounded p-2"
            type="text"
            name="location"
            value={jobData.location}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold" >Skills Required:</label>
          <input
          className="w-full border border-gray-300 rounded p-2"
            type="text"
            name="skillsRequired"
            value={jobData.skillsRequired}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">Post Job</button>
      </form>
    </div>
  );
}

export default JobPostingForm;