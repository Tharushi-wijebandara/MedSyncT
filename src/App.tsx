import "./App.css";
import Home from "./pages/patient/Home";
import About from "./pages/patient/About";
import DoctorChannel from "./pages/patient/DoctorChannel";
import Channel from "./pages/patient/Channel";
import Book from "./pages/patient/Book";
import Contact from "./pages/patient/Contact";
import GetInfo from "./pages/patient/GetInfo";
import Payment from "./pages/patient/Payment";
import DHome from "./pages/doctor/DHome";
import Form from "./pages/doctor/Form";
import Loging from "./pages/doctor/Loging";
import Register from "./pages/doctor/Register";
import Schedule from "./pages/doctor/Schedule";
import AHome from "./pages/Admin/AHome";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/DoctorChannel" >
        <Route index element={<DoctorChannel />}/>
          <Route path="Channel" element={<Channel />} />
        </Route>
        <Route path="/Book" element={<Book />} />
        <Route path="/ContactUs" element={<Contact />} />
        <Route path="/GetInfo" element={<GetInfo />} />
        <Route path="/Payment" element={<Payment />} />

        <Route path="/DHome" element={<DHome />} />
        <Route path="/Form" element={<Form />} />
        <Route path="/Loging" element={<Loging />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Shedule" element={<Schedule />} />
        <Route path="/AHome" element={<AHome />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
