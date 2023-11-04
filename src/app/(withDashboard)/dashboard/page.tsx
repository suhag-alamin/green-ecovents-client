import { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Dashboard - GreenEcovents",
  description: "Dashboard",
};

const Dashboard = () => {
  return redirect("/dashboard/profile");
};

export default Dashboard;
