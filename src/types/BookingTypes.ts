export interface Booking {
    id?: string;
    patientID: string;
    doctorID: string;
    paymentMethod: string;
    day: string; // Use string for LocalDate, or consider using a date type
    time: string;   
}
