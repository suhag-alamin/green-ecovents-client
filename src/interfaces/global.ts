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
