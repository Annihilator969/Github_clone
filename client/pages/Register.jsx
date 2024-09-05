import { useState } from "react";
import axios from "axios"; // Import axios
import { useNavigate } from "react-router-dom";
import './Register.css';  

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    course: '',
    phone: ''
  });

  const navigate = useNavigate(); // To navigate to another page on successful registration

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:4008/api/auth/register', formData);
      console.log(response.data);
      if (response.data.userId) {
        // Registration successful, redirect to login or home page
        navigate('/login');
      }
    } catch (error) {
      console.error("Registration failed:", error);
      alert(`Registration failed: ${error.message}`);
    }
  };

  return (
    <div className="register-container">
      <div className="registration-image">
        <img src="/images/register.png" alt="Registration" />
      </div>
      <div className="registration-form-container">
        <form className="register-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input 
              type="text" 
              name="username" 
              value={formData.username} 
              onChange={handleChange} 
              placeholder="Username" 
              required 
            />
          </div>
          <div className="form-group">
            <input 
              type="email" 
              name="email" 
              value={formData.email} 
              onChange={handleChange} 
              placeholder="Email" 
              required 
            />
          </div>
          <div className="form-group">
            <input 
              type="password" 
              name="password" 
              value={formData.password} 
              onChange={handleChange} 
              placeholder="Password" 
              required 
            />
          </div>
          <div className="form-group">
            <input 
              type="text" 
              name="phone" 
              value={formData.phone} 
              onChange={handleChange} 
              placeholder="Phone" 
              required 
              maxLength={20}
            />
          </div>
          <div className="form-group">
            <select 
              name="course" 
              value={formData.course} 
              onChange={handleChange}
              required
            >
              <option value="">Select Course</option>
              <option value="CSE">Computer Science & Engineering (CSE)</option>
              <option value="ECE">Electronics & Communication Engineering (ECE)</option>
              <option value="EEE">Electrical & Electronics Engineering (EEE)</option>
              <option value="Mech">Mechanical Engineering (Mech)</option>
              <option value="Civil">Civil Engineering (Civil)</option>
              {/* Add more options as needed */}
            </select>
          </div>
          <div className="form-group">
            <button type="submit">Register</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
