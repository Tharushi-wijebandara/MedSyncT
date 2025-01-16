import React from 'react' 
import { useState } from "react";
import Footer from '../../components/Footer';
import Header from '../../components/Header';

interface GetInfo {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
 
}

const GetInfo: React.FC = () => {
  const [GetInfo, setGetInfo] = useState<GetInfo>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validate = () => {
    const newErrors: { [key: string]: string } = {};

    // First Name Validation
    if (!GetInfo.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }

    // Phone Number Validation (10 digits)
    if (!/^\d{10}$/.test(GetInfo.phone)) {
      newErrors.phone = "Phone number must be 10 digits";
    }

    // Email Validation
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(GetInfo.email)) {
      newErrors.email = "Please enter a valid email address";
    }


    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target as HTMLInputElement;
    setGetInfo({
      ...GetInfo,
      [name]: type === "checkbox" ? ( e.target as HTMLInputElement).checked : value,
    });

    // Clear errors on change
    setErrors({ ...errors, [name]: "" });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {

      //api
      const data = {
        firstName: GetInfo.firstName,
        lastName: GetInfo.lastName,
        email: GetInfo.email,
        phone: GetInfo.phone,
      };
      //api

      console.log("Form submitted successfully: ", GetInfo);
      alert("Form submitted successfully!");
    } else {
      console.log("Validation errors: ", errors);
    }
  };

  return (

    <>
    <Header/>
    <div className="max-w-2xl mx-auto mt-10 px-6 py-8 bg-white shadow-md rounded-md h-96">
      <h2 className="text-3xl font-bold text-center mb-4">Registation</h2>


      <form onSubmit={handleSubmit} className="space-y-6">
        {/* First Name & Last Name */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              name="firstName"
              placeholder="Enter your first name"
              value={GetInfo.firstName}
              onChange={handleChange}
              className={`w-full border rounded px-3 py-2 focus:outline-none ${
                errors.firstName ? "border-primary-color" : "focus:ring focus:ring-blue-300"
              }`}
              required
            />
            {errors.firstName && <p className="text-primary-color text-sm">{errors.firstName}</p>}
          </div>
          <div>
            <label className="block text-gray-700">Phone number</label>
            <input
              type="tel"
              name="phone"
              placeholder="Enter your phone number"
              value={GetInfo.phone}
              onChange={handleChange}
              maxLength={10}
              className={`w-full border rounded px-3 py-2 focus:outline-none ${
                errors.phone ? "border-primary-color" : "focus:ring focus:ring-blue-300"
              }`}
            />
            {errors.phone && <p className="text-primary-color text-sm">{errors.phone}</p>}
          </div>
          <div>
            <label className="block text-gray-700">NIC</label>
            <input
              type="text"
              name="lastName"
              placeholder="Enter your last name"
              value={GetInfo.lastName}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>
        

        {/* Email & Phone */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={GetInfo.email}
              onChange={handleChange}
              className={`w-full border rounded px-3 py-2 focus:outline-none ${
                errors.email ? "border-primary-color" : "focus:ring focus:ring-blue-300"
              }`}
            />
            {errors.email && <p className="text-primary-color text-sm">{errors.email}</p>}
          </div>
          </div>
          <div>
            <label className="block text-gray-700">Password</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={GetInfo.email}
              onChange={handleChange}
              className={`w-full border rounded px-3 py-2 focus:outline-none ${
                errors.email ? "border-primary-color" : "focus:ring focus:ring-blue-300"
              }`}
            />
            {errors.email && <p className="text-primary-color text-sm">{errors.email}</p>}
          </div>
          
        </div>


        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full bg-teal-600 text-white font-semibold py-2 rounded hover:bg-teal-700 transition duration-300"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
    <Footer/>
    </>
    
  );
};

export default GetInfo;
