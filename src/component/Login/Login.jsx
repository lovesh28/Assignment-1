import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { useNavigate } from "react-router-dom";
import bcrypt from "bcryptjs";
import * as Yup from "yup"; 

const Login = () => {
  const navigateTo = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [showModal, setShowModal] = useState(false);

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .required("Email is required")
      .email("Invalid email address"),
    password: Yup.string().required("Password is required"),
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await validationSchema.validate(formData, { abortEarly: false });

      const userData = JSON.parse(localStorage.getItem("userData")) || [];
      const user = userData.find((user) => user.email === formData.email);

      if (user) {
        const passwordMatch = bcrypt.compareSync(
          formData.password,
          user.password
        );
        if (passwordMatch) {
          localStorage.setItem("loggedInUser", JSON.stringify(user));

          // localStorage.removeItem("userData");
          setShowModal(true);
        } else {
          setErrors({ password: "Invalid email or password" });
        }
      } else {
        setErrors({ email: "User not found" });
      }
    } catch (error) {
      const newErrors = {};
      error.inner.forEach((err) => {
        newErrors[err.path] = err.message;
      });
      setErrors(newErrors);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    
    setErrors({
      ...errors,
      [e.target.name]: "",
    });
  };

  const handleCloseModal = () => {
    setShowModal(false);
    console.log("Redirecting to Profile");
    navigateTo("/profile");
  };

  return (
    <>
      <div className="container form-container">
        <h1 className="form-title mx-3 my-4">Login</h1>

        <div className="container form-container">
          <Form className="form-body" onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter email"
              />
              {errors.email && (
                <Form.Text className="text-danger">{errors.email}</Form.Text>
              )}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter Password"
              />
              {errors.password && (
                <Form.Text className="text-danger">{errors.password}</Form.Text>
              )}
            </Form.Group>

            <Button className="mx-1 form-btn" type="submit">
              Login
            </Button>
          </Form>
        </div>
      </div>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Login Successful</Modal.Title>
        </Modal.Header>
        <Modal.Body>You are successfully logged in!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Login;
