import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { Link, useNavigate } from "react-router-dom";
import bcrypt from "bcryptjs";
import { number } from "yup";

const SignUp = () => {
  const navigateTo = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    cpassword: "",
    errors: {},
  });

  const [errors, setErrors] = useState({});

  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => setShowModal(false);

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
      errors: { ...formData.errors, [event.target.name]: "" },
    });
  };
  const validateForm = () => {
    const errors = {};

    if (!formData.fullName.trim()) {
      errors.fullName = "Full name is required";
    } else if (/\d/.test(formData.fullName)) {
      errors.fullName = "Full name should not contain numbers";
    }

    const allowedDomains = ["gmail.com", "yahoo.com", "zignuts.com"];
    const emailRegex = new RegExp(
      `^[a-zA-Z0-9._%+-]+@(${allowedDomains.join("|")})$`
    );

    if (!formData.email.trim() || !emailRegex.test(formData.email)) {
      errors.email = "Invalid email address";
    }

    if (!formData.password || formData.password.length < 6) {
      errors.password = "Password must be at least 6 characters long";
    }

    if (formData.password !== formData.cpassword) {
      errors.cpassword = "Passwords do not match";
    }

    setFormData({ ...formData, errors });

    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const isValid = validateForm();
    if (isValid) {
      try {
        const userData = JSON.parse(localStorage.getItem("userData")) || [];
        const hashedPassword = bcrypt.hashSync(formData.password, 10);
        userData.push({
          fullName: formData.fullName,
          email: formData.email,
          password: hashedPassword,
        });
        localStorage.setItem("userData", JSON.stringify(userData));
        setFormData({ fullName: "", email: "", password: "", cpassword: "" });
        navigateTo("/");
      } catch (error) {
        console.error("Error storing data:", error);
      }
    }
  };

  return (
    <>
      <div>
        <div className="container form-container">
          <h1 className="form-title my-4">Sign Up</h1>

          <Form className="form-body" onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicFullName">
              <Form.Label>Full Name</Form.Label>

              <Form.Control
                type="text"
                name="fullName"
                placeholder="Enter Full Name"
                onChange={handleChange}
                value={formData.fullName}
              />
              {formData.errors.fullName && (
                <span className="text-danger">{formData.errors.fullName}</span>
              )}
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Enter email"
                value={formData.email}
                onChange={handleChange}
              />
              {formData.errors.email && (
                <span className="text-danger">{formData.errors.email}</span>
              )}
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                placeholder="Enter Password"
                value={formData.password}
                onChange={handleChange}
              />
              {formData.errors.password && (
                <span className="text-danger">{formData.errors.password}</span>
              )}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                name="cpassword"
                placeholder="EnterConfirm Password"
                value={formData.cpassword}
                onChange={handleChange}
              />
              {formData.errors.cpassword && (
                <span className="text-danger">{formData.errors.cpassword}</span>
              )}
            </Form.Group>
            <Button className="mx-1 form-btn" type="submit">
              Sign Up
            </Button>
          </Form>
        </div>
      </div>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>User Created</Modal.Title>
        </Modal.Header>
        <Modal.Body>Your account has been successfully created!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
          <Button
            className="form-btn"
            onClick={() => {
              navigateTo("/");
              handleCloseModal();
            }}
          >
            Go to Profile
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default SignUp;

// import React from "react";
// import { useForm } from "react-hook-form";
// import Button from "react-bootstrap/Button";
// import Form from "react-bootstrap/Form";
// import Modal from "react-bootstrap/Modal";
// import { useNavigate } from "react-router-dom";
// import bcrypt from "bcryptjs";

// const SignUp = () => {
//   const navigateTo = useNavigate();
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//     getValues,
//     setValue,
//   } = useForm();

//   const allowedDomains = ["gmail.com", "yahoo.com", "zignuts.com"];

//   const onSubmit = (data) => {
//     try {
//       const userData = JSON.parse(localStorage.getItem("userData")) || [];
//       const hashedPassword = bcrypt.hashSync(data.password, 10);
//       userData.push({
//         fullName: data.fullName,
//         email: data.email,
//         password: hashedPassword,
//       });
//       localStorage.setItem("userData", JSON.stringify(userData));
//       setValue("fullName", "");
//       setValue("email", "");
//       setValue("password", "");
//       setValue("cpassword", "");
//       navigateTo("/");
//     } catch (error) {
//       console.error("Error storing data:", error);
//     }
//   };

//   return (
//     <>
//       <div>
//         <div className="container form-container">
//           <h1 className="form-title my-4">Sign Up</h1>

//           <Form className="form-body" onSubmit={handleSubmit(onSubmit)}>
//             <Form.Group className="mb-3" controlId="formBasicFullName">
//               <Form.Label>Full Name</Form.Label>

//               <Form.Control
//                 type="text"
//                 {...register("fullName", {
//                   required: "Full name is required",
//                   pattern: {
//                     value: /^[A-Za-z ]+$/,
//                     message: "Full name should not contain numbers",
//                   },
//                 })}
//               />
//               {errors.fullName && (
//                 <span className="text-danger">{errors.fullName.message}</span>
//               )}
//             </Form.Group>

//             <Form.Group className="mb-3" controlId="formBasicEmail">
//               <Form.Label>Email address</Form.Label>
//               <Form.Control
//                 type="email"
//                 {...register("email", {
//                   required: "Email is required",
//                   pattern: {
//                     value: /^[A-Za-z0-9._%+-]+@(${allowedDomains.join("|")})\.[A-Za-z]{2,}$/,
//                     message: "Invalid email address",
//                   },
//                 })}
//               />
//               {errors.email && (
//                 <span className="text-danger">{errors.email.message}</span>
//               )}
//             </Form.Group>

//             <Form.Group className="mb-3" controlId="formBasicPassword">
//               <Form.Label>Password</Form.Label>
//               <Form.Control
//                 type="password"
//                 {...register("password", {
//                   required: "Password is required",
//                   minLength: {
//                     value: 6,
//                     message: "Password must be at least 6 characters long",
//                   },
//                 })}
//               />
//               {errors.password && (
//                 <span className="text-danger">{errors.password.message}</span>
//               )}
//             </Form.Group>

//             <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
//               <Form.Label>Confirm Password</Form.Label>
//               <Form.Control
//                 type="password"
//                 {...register("cpassword", {
//                   required: "Confirm Password is required",
//                   validate: (value) =>
//                     value === getValues("password") ||
//                     "Passwords do not match",
//                 })}
//               />
//               {errors.cpassword && (
//                 <span className="text-danger">{errors.cpassword.message}</span>
//               )}
//             </Form.Group>

//             <Button className="mx-1 form-btn" type="submit">
//               Sign Up
//             </Button>
//           </Form>
//         </div>
//       </div>

//       {/* Rest of the code remains unchanged */}
//     </>
//   );
// };

// export default SignUp;
