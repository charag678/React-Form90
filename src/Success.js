import React from 'react';
import { useLocation } from 'react-router-dom';

const Success = () => {
  const location = useLocation();
  const { formData } = location.state || {};

  return (
    <div>
      <h1>Form Submitted Successfully!</h1>
      {formData && (
        <div>
          <p><strong>First Name:</strong> {formData.firstName}</p>
          <p><strong>Last Name:</strong> {formData.lastName}</p>
          <p><strong>Username:</strong> {formData.username}</p>
          <p><strong>Email:</strong> {formData.email}</p>
          <p><strong>Phone:</strong> {formData.phone}</p>
          <p><strong>Country:</strong> {formData.country}</p>
          <p><strong>City:</strong> {formData.city}</p>
          <p><strong>Pan No:</strong> {formData.pan}</p>
          <p><strong>Aadhar No:</strong> {formData.aadhar}</p>
        </div>
      )}
    </div>
  );
};

export default Success;