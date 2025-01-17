import axios from "axios";
import { DoctorAdmin } from "../types/doctorAdminTypes";

const BASE_URL = "http://localhost:8080/DoctorAdmins";


export const createDoctorAdmin = async (doctorAdmin: DoctorAdmin) => {
    const response = await axios.post(`${BASE_URL}/create`, doctorAdmin);
    return response.data;
}

export const getDoctorAdminById = async (id: string) => {
    const response = await axios.get<DoctorAdmin>(`${BASE_URL}/getById/${id}`);
    return response.data;
}

export const getAllDoctorAdmins = async () => {
    const response = await axios.get<DoctorAdmin[]>(`${BASE_URL}/getAll`);
    return response.data;
}

export const updateDoctorAdmin = async (id: string, doctorAdmin: DoctorAdmin) => {
    const response = await axios.put<DoctorAdmin>(`${BASE_URL}/update/${id}`, doctorAdmin);
    return response.data;
}

export const deleteDoctorAdmin = async (id: string) => {
    const response = await axios.delete<string>(`${BASE_URL}/delete/${id}`);
    return response.data;
}