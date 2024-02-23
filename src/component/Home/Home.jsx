import React from "react";
import Button from "react-bootstrap/Button";
// import { Link } from "react-router-dom";
import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="px-4 py-5 my-5 text-center">
        <img
          className="d-block mx-auto mb-4"
          style={{ height: "200px", width: "200px" }}
          src="logo.jpeg"
          alt="logo"
        />
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4">
            This website holds various type of e-commerce products tap on the
            products button to see the products.
          </p>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <Button variant="success" as={Link} to='/product'>Products</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;


// import React, { useState } from 'react';

// const EditProfile = () => {
//   // State to manage form data
//   const [formData, setFormData] = useState({
//     firstName: 'John',
//     lastName: 'Doe',
//     email: 'john.doe@example.com',
//     mobileNumber: '123-456-7890',
//   });

//   // State for error message
//   const [error, setError] = useState('');

//   // Function to handle form input changes
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({ ...prevData, [name]: value }));
//   };

//   // Function to handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Check if the new email already exists (simplified check)
//     // In a real-world scenario, you would validate against your data source (backend)
//     const emailExists = checkIfEmailExists(formData.email);

//     if (emailExists) {
//       setError('Email already exists. Please choose a different one.');
//     } else {
//       // Perform the profile update logic (you may connect to the backend here)
//       // For now, let's log the updated data
//       console.log('Updated Profile:', formData);

//       // Clear the error message
//       setError('');
//     }
//   };

//   // Function to check if the email already exists (simplified check)
//   const checkIfEmailExists = (newEmail) => {
//     // In a real-world scenario, you would check against your data source (backend)
//     const existingEmail = 'john.doe@example.com';
//     return newEmail === existingEmail;
//   };

//   return (
//     <div>
//       <h2>Edit Profile</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>First Name:</label>
//           <input
//             type="text"
//             name="firstName"
//             value={formData.firstName}
//             onChange={handleInputChange}
//           />
//         </div>
//         <div>
//           <label>Last Name:</label>
//           <input
//             type="text"
//             name="lastName"
//             value={formData.lastName}
//             onChange={handleInputChange}
//           />
//         </div>
//         <div>
//           <label>Email:</label>
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleInputChange}
//           />
//         </div>
//         <div>
//           <label>Mobile Number:</label>
//           <input
//             type="text"
//             name="mobileNumber"
//             value={formData.mobileNumber}
//             onChange={handleInputChange}
//           />
//         </div>
//         {error && <div style={{ color: 'red' }}>{error}</div>}
//         <button type="submit">Save Changes</button>
//       </form>
//     </div>
//   );
// };

// export default Home;