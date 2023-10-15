export interface IApiResponse {
  statusCode: number;
  success: boolean;
  message: string;
  meta?: any;
  data: any;
}

export interface IEvent {
  id: string;
  title: string;
  description: string;
  date: string;
  location: string;
  price: number;
  image: string;
  categoryId: string;
  createdAt: string;
  updatedAt: string;
  bookings: any;
  categories: any;
  reviews: any;
}
