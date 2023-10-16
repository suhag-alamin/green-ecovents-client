export interface IUser {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  contactNo: string;
  profileImg?: string | null;
  role?: string;
  createdAt?: string;
  updatedAt?: string;
}
