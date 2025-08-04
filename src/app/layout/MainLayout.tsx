// // src/app/layout/MainLayout.tsx
// import type { ReactNode } from 'react';
// import Navbar from '@/components/Navbar';
// import Sidebar from '@/components/Sidebar';
// import { Outlet } from 'react-router-dom';

// type SidebarSection = {
//   section: string;
//   items: {
//     label: string;
//     path: string;
//   }[];
// };

// type MainLayoutProps = {
//   sidebarItems: SidebarSection[];
//   children?: ReactNode;
// };

// export default function MainLayout({
//   sidebarItems,
//   children,
// }: MainLayoutProps) {
//   return (
//     <div className="flex flex-col h-screen">
//       <Navbar />
//       <div className="flex flex-1">
//         <Sidebar items={sidebarItems} />
//         <main className="flex-1 p-4 overflow-auto bg-gray-50">
//           {children ?? <Outlet />}
//         </main>
//       </div>
//     </div>
//   );
// }
// resmanui-host/src/app/layout/MainLayout.tsx
import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";

const MainLayout = () => {
  return (
    <div className='tw-flex tw-flex-col tw-min-h-screen'>
      <Navbar />
      <div className='tw-flex tw-flex-1'>
        <Sidebar />
        <div className='tw-flex-1 tw-p-4'>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
