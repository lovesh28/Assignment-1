import React from "react";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const SignUp = () => {
  return (
    <>
    
   <div>
   
      <div className='container form-container'>
        <h1 className="form-title">Sign Up</h1>
        <Form className='form-body' > 
        {/* onSubmit={handleSubmit} */}
          <Form.Group className="mb-3" controlId="formBasicFullName">
            <Form.Label>Full Name</Form.Label>
            <Form.Control type="text" name="fullName"  placeholder="Enter Full Name" />
            {/* value={formData.fullName} onChange={handleChange} */}
            {/* {errors.fullName && <span className="text-danger">{errors.fullName}</span>} */}
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" name="email"  placeholder="Enter email" />
            {/* value={formData.email} onChange={handleChange} */}
            {/* {errors.email && <span className="text-danger">{errors.email}</span>} */}
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" name="password"  placeholder="Password" />
            {/* value={formData.password} onChange={handleChange} */}
            {/* {errors.password && <span className="text-danger">{errors.password}</span>} */}
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control type="password" name="cpassword"  placeholder="Confirm Password" />
            {/* value={formData.cpassword} onChange={handleChange} */}
            {/* {errors.cpassword && <span className="text-danger">{errors.cpassword}</span>} */}
          </Form.Group>

          <Button className="mx-1 form-btn" type="submit">
            Sign Up
          </Button>
        </Form>
        </div>
        </div>
   </>
  )
}

export default SignUp;
