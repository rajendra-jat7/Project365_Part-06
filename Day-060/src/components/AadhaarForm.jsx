import { useState } from 'react';
import PropTypes from 'prop-types';
import '../App.css';

const AadhaarForm = ({ setAadhaarData }) => {
  const [formData, setFormData] = useState({
    name: '',
    dob: '',
    gender: 'Male',
    aadhaarNumber: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const isValidAadhaar = (aadhaar) => /^\d{12}$/.test(aadhaar);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isValidAadhaar(formData.aadhaarNumber)) {
      alert('Aadhaar number must be 12 digits!');
      return;
    }

    setAadhaarData(formData);
  };

  return (
    <form onSubmit={handleSubmit} className='form'>
      <h2>📝 Enter Aadhaar Details</h2>

      <label>
        Full Name:
        <input
          type='text'
          name='name'
          placeholder='Enter Name'
          value={formData.name}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Date of Birth:
        <input
          type='date'
          name='dob'
          value={formData.dob}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Gender:
        <select name='gender' value={formData.gender} onChange={handleChange}>
          <option value='Male'>Male</option>
          <option value='Female'>Female</option>
          <option value='Other'>Other</option>
        </select>
      </label>

      <label>
        Aadhaar Number:
        <input
          type='text'
          name='aadhaarNumber'
          placeholder='Enter 12-digit Aadhaar'
          value={formData.aadhaarNumber}
          onChange={handleChange}
          required
        />
      </label>

      <button type='submit' className='btn'>
        Generate QR Code
      </button>
    </form>
  );
};

AadhaarForm.propTypes = {
  setAadhaarData: PropTypes.func.isRequired,
};

export default AadhaarForm;
