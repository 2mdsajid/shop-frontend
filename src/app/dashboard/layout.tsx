import DashboardSidebar from "@/components/dashboard/sidebar/DashboardSidebar";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Dashboard",
    description: "Dashboard",
};

export default function RootDashboardLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="flex w-screen">
            <DashboardSidebar />
            <div className="absolute right-0 w-screen md:w-[70vw] lg:w-[75vw] xl:w-[80vw]">{children}</div>
        </div>
    );
}