import axios from "axios";
import { Booking } from "../types/BookingTypes";

const BASE_URL = "http://localhost:8080/Bokings";

export const getBookings = async () =>{
    const response = await axios.get<Booking[]>(BASE_URL);
    return response.data;
}

export const createBooking = async (booking: Booking) =>{
    const response = await axios.post(BASE_URL, booking);
    return response.data;
}
export const getBookingById = async (id: string) => {
    const response = await axios.get<Booking>(`${BASE_URL}/getById/${id}`);
    return response.data;
}

export const updateBooking = async (id: string, booking: Booking) => {
    const response = await axios.put<Booking>(`${BASE_URL}/update/${id}`, booking);
    return response.data;
}

export const deleteBooking = async (id: string) => {
    const response = await axios.delete<string>(`${BASE_URL}/delete/${id}`);
    return response.data;
}