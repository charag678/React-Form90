import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Form = () => {
  const history = useHistory();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    phoneCode: '',
    phoneNumber: '',
    country: '',
    city: '',
    pan: '',
    aadhar: ''
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length === 0) {
      history.push('/submission', { formData });
    } else {
      setErrors(validationErrors);
    }
  };

  const validateForm = (data) => {
    const errors = {};
    for (let key in data) {
      if (!data[key]) {
        errors[key] = `${key} is required`;
      }
    }
    return errors;
  };
  return (
    <div className="inputField">
      <h2>Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>First Name:</label>
          <input
            type="text"
            name="firstName"
            autoComplete="off"
            value={formData.firstName}
            onChange={handleChange}
          />
          {errors.firstName && <span>{errors.firstName}</span>}
        </div>
        <div>
          <label>Last Name:</label>
          <input
            type="text"
            name="lastName"
            autoComplete="off"
            value={formData.lastName}
            onChange={handleChange}
          />
          {errors.lastName && <span>{errors.lastName}</span>}
        </div>
        <div>
          <label>Username:</label>
          <input
            type="text"
            name="username"
            autoComplete="off"
            value={formData.username}
            onChange={handleChange}
          />
          {errors.username && <span>{errors.username}</span>}
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            autoComplete="off"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <span>{errors.email}</span>}
        </div>
        <div>
          <label>Password:</label>
          <input
            type={showPassword ? 'text' : 'password'}
            name="password"
            autoComplete="off"
            value={formData.password}
            onChange={handleChange}
          />
          <button type="button" autoComplete="off" onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? 'Hide' : 'Show'}
          </button>
          {errors.password && <span>{errors.password}</span>}
        </div>
        <div>
          <label>Phone Number:</label>
          <input
            type="tel"
            name="phoneNumber"
            autoComplete="off"
            value={formData.phoneNumber}
            onChange={handleChange}
          />
          {errors.phoneNumber && <span>{errors.phoneNumber}</span>}
        </div>
        <div>
          <label>Country:</label>
          <select
            name="country"
            autoComplete="off"
            value={formData.country}
            onChange={handleChange}
          >
            <option value="">Select Country</option>
            <option value="USA">INDIA</option>
            <option value="UK">UK</option>
            <option value="Canada">Canada</option>
          </select>
          {errors.country && <span>{errors.country}</span>}
        </div>
        <div>
          <label>City:</label>
          <select name="city" autoComplete="off" value={formData.city} onChange={handleChange}>
            <option value="">Select City</option>
            <option value="New York">Delhi</option>
            <option value="London">London</option>
            <option value="Toronto">Toronto</option>
          </select>
          {errors.city && <span>{errors.city}</span>}
        </div>
        <div>
          <label>PAN Number:</label>
          <input
            type="text"
            name="pan"
            autoComplete="off"
            value={formData.pan}
            onChange={handleChange}
          />
          {errors.pan && <span>{errors.pan}</span>}
        </div>
        <div>
          <label>Aadhar Number:</label>
          <input
            type="text"
            name="aadhar"
            autoComplete="off"
            value={formData.aadhar}
            onChange={handleChange}
          />
          {errors.aadhar && <span>{errors.aadhar}</span>}
        </div>
        <button type="submit" >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;