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
  location?: string;
  status?: string;
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
export interface IEvent {
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
  bookings: IBooking[];
  categories: ICategory;
  reviews: IRating[];
  status: EventStatus;
}
export interface IRating {
  id: string;
  review: string;
  rating: number;
  userId: string;
  user: IUser;
  eventId: string;
  event: IEvent;
  createdAt: string;
  updatedAt: string;
}
export interface IBooking {
  id: string;
  status: BookingStatus;
  startDate: string;
  endDate: string;
  userId: string;
  user: IUser;
  eventId: string;
  event: IEvent;
  adults: number;
  children?: number;
  email: string;
  contactNo: string;
  totalAmount: number;
  daysBooked: number;
  createdAt: string;
  updatedAt: string;
}
export interface IFaq {
  id: string;
  question: string;
  answer: string;
  userId: string;
  user?: IUser;
  createdAt: string;
  updatedAt: string;
}
export interface IFeedback {
  id: string;
  feedback: string;
  userId: string;
  user?: IUser;
  createdAt: string;
  updatedAt: string;
}
export interface IBlog {
  id: string;
  title: string;
  content: any;
  image: string;
  userId: string;
  user?: IUser;
  createdAt: string;
  updatedAt: string;
}
export interface IPage {
  id: string;
  title: string;
  content: any;
  userId: string;
  user?: IUser;
  createdAt: string;
  updatedAt: string;
}
export interface IReview {
  id: string;
  review: string;
  rating: number;
  userId: string;
  user?: IUser;
  eventId?: string;
  event?: IEvent;
  createdAt: string;
  updatedAt: string;
}

export interface ISubscriber {
  id: string;
  email: string;
  createdAt: string;
  updatedAt: string;
}

export interface IUserInfo {
  id: string;
  role: string;
  iat: number;
  exp: number;
}
export enum EventStatus {
  upcoming = "upcoming",
  ongoing = "ongoing",
  ended = "ended",
}
export enum BookingStatus {
  pending = "pending",
  confirmed = "confirmed",
  canceled = "canceled",
}
