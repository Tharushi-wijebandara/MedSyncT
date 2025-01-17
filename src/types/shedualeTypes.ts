export interface Sheduale{
    ID: string;
      doctorID?: string;
      day: string; // LocalDate can be represented as a string in ISO format
      time: string;
      count: number;
  }