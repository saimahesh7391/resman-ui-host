// resman-ui-host/src/app/layout/MainLayout.tsx
import { Outlet } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import type { ReactNode } from "react";

interface MainLayoutProps {
  children?: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-4 overflow-auto bg-gray-100">
          {children || <Outlet />}
        </main>
      </div>
    </div>
  );
};

export default MainLayout;