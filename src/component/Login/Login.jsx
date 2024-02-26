import React, { useState } from "react";
// import FloatingLabel from "react-bootstrap/FloatingLabel";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
// import bcrypt from 'bcryptjs';

const Login = () => {
  // const navigateTo = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
      errors: { ...formData.errors, [event.target.name]: "" }, // Clear any previous errors on change
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission

    await validateForm.validate(formData, { abortEarly: false });
    const userData = JSON.parse(localStorage.getItem('userData')) || [];
      const user = userData.find(user => user.email === formData.email);

      if (user) {
        const passwordMatch = bcrypt.compareSync(formData.password, user.password);
        if (passwordMatch) {
      
          localStorage.setItem('loggedInUser', JSON.stringify(user));
          
          localStorage.removeItem('signedUpUsers');
          setShowModal(true);
        } else {
          setErrors({ password: 'Invalid email or password' });
        }
      } else {
        setErrors({ email: 'User not found' });
      }

  }

  const [errors, setError] = useState();

  return (
    <>
      <div className="container form-container">
        <h1 className=" form-title"> LOGIN </h1>
        <Form className="form-body my-4" onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter email"
            />
            {/* {errors.email && (
              <Form.Text className="text-danger">{errors.email}</Form.Text>
            )} */}
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
            />
            {/* {errors.password && (
              <Form.Text className="text-danger">{errors.password}</Form.Text>
            )} */}

          </Form.Group>

          <Button variant="dark mx-2 form-btn" type="submit">
            Login
          </Button>
        </Form>
      </div>
    </>
  );
};

export default Login;
