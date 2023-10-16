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
          key: `/profile`,
        },
        {
          label: (
            <Link href={`/dashboard/profile/change-password`}>
              Change password
            </Link>
          ),
          key: `/user/change-password`,
        },
      ],
    },
  ];

  const userSidebarItems: MenuProps["items"] = [
    ...defaultSidebarItems,

    {
      label: <Link href={`/dashboard/user/bookings`}>View Bookings</Link>,
      key: "bookings",
      icon: <ScheduleOutlined />,
    },
    {
      label: <Link href={`/dashboard/user/feedback`}>Feedback</Link>,
      key: "feedback",
      icon: <ProfileOutlined />,
    },
  ];
  const commonAdminSidebarItems: MenuProps["items"] = [
    {
      label: <Link href={`/dashboard/admin/manage-users`}>Manage Users</Link>,
      key: `/admin/manage-student`,
      icon: <TeamOutlined />,
    },
    {
      label: (
        <Link href={`/dashboard/admin/manage-services`}>Manage Services</Link>
      ),
      key: `/admin/manage-services`,
      icon: <TableOutlined />,
    },
    {
      label: (
        <Link href={`/dashboard/admin/manage-bookings`}>Manage Bookings</Link>
      ),
      key: `/admin/manage-bookings`,
      icon: <ScheduleOutlined />,
    },
    {
      label: "Contents",
      key: "contents",
      icon: <FileTextOutlined />,
      children: [
        {
          label: <Link href={`/dashboard/admin/blog`}>Blog Post</Link>,
          key: `/admin/blog`,
        },
        {
          label: <Link href={`/dashboard/admin/faq`}>FAQs</Link>,
          key: `/admin/faq`,
        },
      ],
    },
  ];
  const adminSidebarItems: MenuProps["items"] = [
    ...defaultSidebarItems,
    {
      label: <Link href={`/dashboard/admin/manage-users`}>Manage Users</Link>,
      key: `/admin/manage-student`,
      icon: <TeamOutlined />,
    },
    {
      label: (
        <Link href={`/dashboard/admin/manage-services`}>Manage Services</Link>
      ),
      key: `/admin/manage-services`,
      icon: <TableOutlined />,
    },
    {
      label: (
        <Link href={`/dashboard/admin/manage-bookings`}>Manage Bookings</Link>
      ),
      key: `/admin/manage-bookings`,
      icon: <ScheduleOutlined />,
    },
    {
      label: "Contents",
      key: "contents",
      icon: <FileTextOutlined />,
      children: [
        {
          label: <Link href={`/dashboard/admin/blog`}>Blog Post</Link>,
          key: `/admin/blog`,
        },
        {
          label: <Link href={`/dashboard/admin/faq`}>FAQs</Link>,
          key: `/admin/faq`,
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
