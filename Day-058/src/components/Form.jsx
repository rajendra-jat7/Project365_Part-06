import { useState } from "react";
import PropTypes from "prop-types";
import "../App.css"

const Form = ({ setFormData }) => {
  const [formValues, setFormValues] = useState({
    name: "",
    dob: "",
    gender: "Male",
    image: null,
    issueDate: new Date().toISOString().split("T")[0],
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormValues({ ...formValues, [name]: URL.createObjectURL(files[0]) });
    } else {
      setFormValues({ ...formValues, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData(formValues);
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <label>
        Profile Image:
        <input type="file" name="image" accept="image/*" onChange={handleChange} required />
      </label>

      <label>
        Full Name:
        <input type="text" name="name" placeholder="Enter Name" value={formValues.name} onChange={handleChange} required />
      </label>

      <label>
        Date of Birth:
        <input type="date" name="dob" value={formValues.dob} onChange={handleChange} required />
      </label>

      <label>
        Gender:
        <select name="gender" value={formValues.gender} onChange={handleChange}>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
      </label>

      <label>
        Issue Date:
        <input type="date" name="issueDate" value={formValues.issueDate} onChange={handleChange} required />
      </label>

      <button type="submit" className="btn">Generate Aadhaar Card</button>
    </form>
  );
};

Form.propTypes = {
    setFormData: PropTypes.func.isRequired,
  };

export default Form;
