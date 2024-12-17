import React from 'react'
import Dheader from '../../components/Dheader'
import Footer from '../../components/Footer'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Register:React.FC = () => {
   const navigate= useNavigate();
    const [isOpen, setIsOpen] = useState(false);

  const [selectedId, setSelectedId] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleLogin = () => {
    if (!selectedId || !password) {
      setErrorMessage("Please select an ID and enter the password.");
    } else {
      setErrorMessage("");
      console.log("Logged in with ID:", selectedId);
      console.log("Password:", password);
      // Proceed with login logic
    }
  };

  return (
    <div>
      <Dheader/>
        <div>
        <div className="bg-white/65 shadow-lg rounded-lg p-8 max-w-sm w-full">
        <h2 className="text-2xl font-bold text-center text-black mb-6">
          Login Page
        </h2>
        <div className="mb-4">
          <label
            htmlFor="userId"
            className="block text-gray-600 font-medium mb-2"
          >
            Select ID:
          </label>
          <select
            id="userId"
            value={selectedId}
            onChange={(e) => setSelectedId(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">-- Select ID --</option>
            <option value="1">12345</option>
            <option value="2">56789</option>
            <option value="3">45678</option>
          </select>
        </div>
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-gray-600 font-medium mb-2"
          >
            Password:
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your password"
          />
        </div>
        {errorMessage && (
          <div className="text-red-500 text-sm mb-4">{errorMessage}</div>
        )}
        <button
          onClick={() => navigate("/Form")}
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
        >
          Login
        </button>
      </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Register
