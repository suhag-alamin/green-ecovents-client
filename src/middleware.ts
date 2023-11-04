import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { userRole } from "./constants/role";
import { IUserInfo } from "./interfaces/global";
import { decodedToken } from "./utils/jwt";

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const url = request.nextUrl.clone();

  const cookie = request.cookies.get(process.env.TOKEN as string);
  const token = cookie?.value;

  const userRoutes = [
    "/dashboard/user/bookings",
    "/dashboard/user/review/*",
    "/dashboard/user/feedback",
  ];

  const adminRoutes = [
    "/dashboard/admin/users",
    "/dashboard/admin/users/add-user",
    "/dashboard/admin/events",
    "/dashboard/admin/events/add",
    "/dashboard/admin/events/categories",
    "/dashboard/admin/events/categories/add",
    "/dashboard/admin/bookings",
    "/dashboard/admin/bookings",
    "/dashboard/admin/blogs",
    "/dashboard/admin/blogs/add",
    "/dashboard/admin/faq",
    "/dashboard/admin/faq/add",
    "/dashboard/admin/feedbacks",
    "/dashboard/admin/pages",
    "/dashboard/admin/pages/add",
  ];

  const superAdminRoutes = [
    ...adminRoutes,
    "/dashboard/super-admin/admins",
    "/dashboard/super-admin/add-admin",
  ];

  if (token) {
    url.pathname = "/not-found";

    const user = decodedToken(token as string) as IUserInfo;

    // if token is expired then redirect to login page
    if (user.exp < Date.now() / 1000) {
      url.pathname = "/signin";
      return NextResponse.redirect(url);
    }
    // if user role is not admin and user is trying to access admin routes then redirect to login page
    if (
      (user.role !== userRole.ADMIN || user.role !== userRole.SUPER_ADMIN) &&
      (adminRoutes.includes(pathname) || superAdminRoutes.includes(pathname))
    ) {
      return NextResponse.redirect(url);
    }

    // if admin is trying to access user routes then redirect to login page
    if (user.role === userRole.ADMIN && userRoutes.includes(pathname)) {
      return NextResponse.redirect(url);
    }
    // if admin is trying to access super-admin routes then redirect to login page
    if (user.role === userRole.ADMIN && superAdminRoutes.includes(pathname)) {
      return NextResponse.redirect(url);
    }
    // if super-admin is trying to access user routes then redirect to login page
    if (user.role === userRole.SUPER_ADMIN && userRoutes.includes(pathname)) {
      return NextResponse.redirect(url);
    }
  }
}
