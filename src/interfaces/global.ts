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
  role?: string;
  fistName?: string;
  lastName?: string;
  contactNo?: string;
  page?: number;
  limit?: number;
  sortBy?: string;
  sortOrder?: string;
}

export interface IDeleteInfo {
  api: string;
  id: string;
}
export interface IUpdateInfo {
  api: string;
  id: string;
  data?: any;
}

export interface ICategory {
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  events: any;
}
export interface IEvents {
  id: string;
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  location: string;
  price: number;
  image: string;
  userId: string;
  categoryId: string;
  createdAt: string;
  updatedAt: string;
  bookings: any;
  categories: ICategory[];
  reviews: any;
}

export interface IUserInfo {
  id: string;
  role: string;
  iat: number;
  exp: number;
}
