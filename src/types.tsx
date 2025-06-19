export interface Experience {
  id: number;
  year: number;
  description: string;
}

export interface Personal {
  photo: string;
  name: string;
  lastName: string;
  position: string;
}

export interface Details {
  experience: Experience[];
  education: string[];
}

export interface CVData {
  personal: Personal;
  details: Details;
}
