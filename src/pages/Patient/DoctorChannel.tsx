import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

const MyBooking:React.FC = () => {
  return (

    <div>
      <Header/>
      <div className="flex justify-center items-center h-screen bg-gray-100 ">
      <div className="bg-white shadow-lg rounded-lg p-6 w-96">
        <h2 className="text-2xl font-semibold text-center text-primary-color mb-4">
          Channel Your Doctor
        </h2>
        <form className="space-y-4 focus:outline-none  focus:ring-secondary-color focus:border-secondary-color">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              <span className="flex items-center">
                <span className="material-icons text-gray-500 mr-2"></span>
                Doctor
              </span>
            </label>
            <input
              type="text"
              // maxLength="20"
              placeholder="Doctor - Max 20 Characters"
              className="w-full border border-gray-300 rounded-md py-2 px-3 "
            />
          </div>


          <div>
            <label className="block text-sm font-medium text-gray-700">
              <span className="flex items-center">
                <span className="material-icons text-gray-500 mr-2"></span>
                Specialization
              </span>
            </label>
            <select className="w-full border border-gray-300 rounded-md py-2 px-3 ">
              <option>Any Specialization</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              <span className="flex items-center">
                <span className="material-icons text-gray-500 mr-2"></span>
                Date
              </span>
            </label>
            <input
              type="date"
              className="w-full border border-gray-300 rounded-md py-2 px-3 "
            />
          </div>

          <button
            type="submit"
            className="w-full bg-primary-color text-white font-semibold py-2 px-4 rounded-md hover:bg-primary-color "
          >
            <span className="material-icons mr-2"></span> Search
          </button>
        </form>
      </div>
    </div>
    <Footer/>
    </div>
  )
}

export default MyBooking
