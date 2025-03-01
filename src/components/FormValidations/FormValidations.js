import React, { useState } from "react";

// Regular expressions for validation
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{6,}$/; // At least 6 characters, 1 uppercase, 1 number

const FormComponent = () => {
  // State to manage form fields
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  // State to manage validation errors
  const [errors, setErrors] = useState({});

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;

    // Update form data
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Validate field on change
    validateField(name, value);
  };

  // Validate a single field
  const validateField = (name, value) => {
    let error = "";
    if (name === "name" && value.trim().length < 3) {
      error = "Name must be at least 3 characters.";
    } else if (name === "email" && !emailRegex.test(value)) {
      error = "Invalid email format.";
    } else if (name === "password" && !passwordRegex.test(value)) {
      error = "Password must be at least 6 characters, include 1 uppercase letter and 1 number.";
    }

    // Update errors state
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission

    Object.keys(formData).forEach((field) => validateField(field, formData[field]));

    // If any errors exist, do not submit
    if (Object.values(errors).some((err) => err)) {
      alert("Form has errors. Please fix them before submitting.");
      return;
    }

    // Form submission logic (send to API, console.log, etc.)
    console.log("Form Submitted Successfully:", formData);
    alert("Form submitted successfully!");

    // Reset form after submission
    setFormData({ name: "", email: "", password: "" });
    setErrors({});
  };

  return (
    <div className="container">
      <h2>React Form with Validation</h2>
      <form onSubmit={handleSubmit} noValidate>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            onBlur={() => validateField("name", formData.name)}
            className="border border-blue-200 rounded-md"
          />
          {errors.name && <span className="error">{errors.name}</span>}
        </div>

        {/* Email Field */}
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            onBlur={() => validateField("email", formData.email)}
            className="border border-blue-200 rounded-md"
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>

        {/* Password Field */}
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            onBlur={() => validateField("password", formData.password)}
            className="border border-blue-200 rounded-md"
          />
          {errors.password && <span className="error">{errors.password}</span>}
        </div>

        {/* Submit Button */}
        <button type="submit" className="bg-blue-400 px-3 border border-blue-200 rounded-md">Submit</button>
      </form>
    </div>
  );
};

export default FormComponent;
