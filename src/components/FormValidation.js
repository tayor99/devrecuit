import React, { useState } from "react";

export const FormValidation = ({ onNext }) => {
  const [userDetails, setUserDetails] = useState({
    userName: "",
    email: "",
    phone: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  // Email validation function
  const validateEmail = (email) => {
    const regex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    return regex.test(email);
  };

  //  phone validation function
  const validatePhone = (phone) => {
    const regex = /^(?:\+234|0)\d{10}$/;
    return regex.test(phone);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate email and phone fields
    const emailError = validateEmail(userDetails.email)
      ? ""
      : "Invalid email address";
    const phoneError = validatePhone(userDetails.phone)
      ? ""
      : "Invalid  phone number (must be +234 or 0 followed by 10 digits)";

    setErrors({ email: emailError, phone: phoneError });

    // Only proceed if there are no validation errors
    if (!emailError && !phoneError) {
      // Submit form logic here
      console.log("Form submitted successfully", userDetails);
      onNext();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="input--group">
        <input
          type="text"
          name="userName"
          value={userDetails.userName}
          onChange={handleChange}
          placeholder="Enter your name"
        />
        <input
          type="tel"
          name="phone"
          value={userDetails.phone}
          onChange={handleChange}
          placeholder="Enter your phone number"
        />
        {errors.phone && <p style={{ color: "red" }}>{errors.phone}</p>}
      </div>

      <input
        type="email"
        name="email"
        value={userDetails.email}
        onChange={handleChange}
        placeholder="Enter your email"
      />
      {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}

      <button type="submit">Submit</button>
    </form>
  );
};
