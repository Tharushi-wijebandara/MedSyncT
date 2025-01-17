import axios from "axios";
import { Sheduale } from "../types/shedualeTypes";

const BASE_URL = "http://localhost:8080/Sheduales";


export const createSheduale = async (sheduale: Sheduale) => {
    const response = await axios.post(`${BASE_URL}/create`, sheduale);
    return response.data;
}

export const getShedualeById = async (id: string) => {
    const response = await axios.get<Sheduale>(`${BASE_URL}/getByID/${id}`);
    return response.data;
}

export const getAllSheduales = async () => {
    const response = await axios.get<Sheduale[]>(`${BASE_URL}/getAll`);
    return response.data;
}

export const updateSheduale = async (id: string, sheduale: Sheduale) => {
    const response = await axios.put<Sheduale>(`${BASE_URL}/update/${id}`, sheduale);
    return response.data;
}

export const deleteSheduale = async (id: string) => {
    const response = await axios.delete<string>(`${BASE_URL}/delete/${id}`);
    return response.data;
}