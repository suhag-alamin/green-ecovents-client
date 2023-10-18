import {
  HomeOutlined,
  ProfileOutlined,
  ScheduleOutlined,
  TableOutlined,
  UserSwitchOutlined,
  FileTextOutlined,
  TeamOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import Link from "next/link";
import { userRole } from "./role";

export const SidebarItems = (role: string) => {
  const defaultSidebarItems: MenuProps["items"] = [
    {
      label: <Link href="/">Home</Link>,
      key: "home",
      icon: <HomeOutlined />,
    },
    {
      label: "Profile",
      key: "profile",
      icon: <ProfileOutlined />,
      children: [
        {
          label: <Link href={`/dashboard/profile`}>Account Profile</Link>,
          key: `/dashboard/profile`,
        },
        {
          label: (
            <Link href={`/dashboard/profile/change-password`}>
              Change password
            </Link>
          ),
          key: `/dashboard/profile/change-password`,
        },
      ],
    },
  ];

  const userSidebarItems: MenuProps["items"] = [
    ...defaultSidebarItems,

    {
      label: <Link href={`/dashboard/user/bookings`}>View Bookings</Link>,
      key: "/dashboard/user/bookings",
      icon: <ScheduleOutlined />,
    },
    {
      label: <Link href={`/dashboard/user/feedback`}>Feedback</Link>,
      key: "/dashboard/user/feedback",
      icon: <ProfileOutlined />,
    },
  ];
  const commonAdminSidebarItems: MenuProps["items"] = [
    {
      label: "Manage Users",
      key: `/dashboard/admin/users`,
      icon: <TeamOutlined />,
      children: [
        {
          label: <Link href={`/dashboard/admin/users`}>Users</Link>,
          key: "/dashboard/admin/users",
        },
        {
          label: <Link href={`/dashboard/admin/users/add-user`}>Add User</Link>,
          key: "/dashboard/admin/users/add-user",
        },
      ],
    },
    {
      label: "Manage Events",
      key: `/dashboard/admin/events`,
      icon: <TableOutlined />,
      children: [
        {
          label: (
            <Link href={`/dashboard/admin/events/categories`}>Categories</Link>
          ),
          key: "/dashboard/admin/events/categories",
        },
        {
          label: (
            <Link href={`/dashboard/admin/events/categories/add`}>
              Add Category
            </Link>
          ),
          key: "/dashboard/admin/events/categories/add",
        },
        {
          label: <Link href={`/dashboard/admin/events`}>Events</Link>,
          key: "/dashboard/admin/events",
        },
        {
          label: <Link href={`/dashboard/admin/events/add`}>Add Event</Link>,
          key: "/dashboard/admin/events/add",
        },
      ],
    },
    {
      label: <Link href={`/dashboard/admin/bookings`}>Manage Bookings</Link>,
      key: `/dashboard/admin/bookings`,
      icon: <ScheduleOutlined />,
    },
    {
      label: "Contents",
      key: "contents",
      icon: <FileTextOutlined />,
      children: [
        {
          label: <Link href={`/dashboard/admin/blog`}>Blog Post</Link>,
          key: `/dashboard/admin/blog`,
        },
        {
          label: <Link href={`/dashboard/admin/faq`}>FAQs</Link>,
          key: `/dashboard/admin/faq`,
        },
      ],
    },
  ];
  const adminSidebarItems: MenuProps["items"] = [
    ...defaultSidebarItems,
    {
      label: "Manage Users",
      key: `/dashboard/admin/users`,
      icon: <TeamOutlined />,
      children: [
        {
          label: <Link href={`/dashboard/admin/users`}>Users</Link>,
          key: "/dashboard/admin/users",
        },
        {
          label: <Link href={`/dashboard/admin/users/add-user`}>Add User</Link>,
          key: "/dashboard/admin/users/add-user",
        },
      ],
    },
    {
      label: "Manage Events",
      key: `/dashboard/admin/events`,
      icon: <TableOutlined />,
      children: [
        {
          label: (
            <Link href={`/dashboard/admin/events/categories`}>Categories</Link>
          ),
          key: "/dashboard/admin/events/categories",
        },
        {
          label: (
            <Link href={`/dashboard/admin/events/categories/add`}>
              Add Category
            </Link>
          ),
          key: "/dashboard/admin/events/categories/add",
        },
        {
          label: <Link href={`/dashboard/admin/events`}>Events</Link>,
          key: "/dashboard/admin/events",
        },
        {
          label: <Link href={`/dashboard/admin/events/add`}>Add Event</Link>,
          key: "/dashboard/admin/events/add",
        },
      ],
    },
    {
      label: <Link href={`/dashboard/admin/bookings`}>Manage Bookings</Link>,
      key: `/dashboard/admin/bookings`,
      icon: <ScheduleOutlined />,
    },
    {
      label: "Contents",
      key: "contents",
      icon: <FileTextOutlined />,
      children: [
        {
          label: <Link href={`/dashboard/admin/blog`}>Blog Post</Link>,
          key: `/dashboard/admin/blog`,
        },
        {
          label: <Link href={`/dashboard/admin/faq`}>FAQs</Link>,
          key: `/dashboard/admin/faq`,
        },
      ],
    },
  ];

  const superAdminSidebarItems: MenuProps["items"] = [
    ...defaultSidebarItems,
    ...commonAdminSidebarItems,
    {
      label: "Manage Admin",
      icon: <UserSwitchOutlined />,
      key: `/super-admin/manage-admin`,
      children: [
        {
          label: <Link href={`/dashboard/super-admin/admins`}>Admins</Link>,
          key: `/dashboard/super-admin/manage-admin`,
        },
        {
          label: (
            <Link href={`/dashboard/super-admin/add-admin`}>Add Admin</Link>
          ),
          key: `/dashboard/super-admin/add-admin`,
        },
      ],
    },
  ];

  if (role === userRole.SUPER_ADMIN) {
    return superAdminSidebarItems;
  } else if (role === userRole.ADMIN) {
    return adminSidebarItems;
  } else {
    return userSidebarItems;
  }
};
