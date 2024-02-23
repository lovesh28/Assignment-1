import React from "react";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Login = () => {
  return (
    <>
      <div className="container form-container">
        <h1 className=" form-title"> LOGIN </h1>
        <Form className="form-body my-4">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              // value={formData.email}
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
              // value={formData.password}
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
