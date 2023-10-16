enum Gender {
  male,
  female,
  others,
}
export interface IUser {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  gender: Gender;
  contactNo: string;
  profileImg?: string | null;
  role?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface IMeta {
  total?: number;
  page?: number;
  limit?: number;
}

export interface IQuery {
  query?: string;
  email?: string;
  fistName?: string;
  lastName?: string;
  contactNo?: string;
  page?: number;
  limit?: number;
  sortBy?: string;
  sortOrder?: string;
}
