// import { useState } from 'react';
// import { NavLink, useLocation } from 'react-router-dom';
// import ChevronRightIcon from '@mui/icons-material/ChevronRight';
// import { ExpandLess } from '@mui/icons-material';

// type SidebarItem = {
//   label: string;
//   path: string;
// };

// type SidebarSection = {
//   section: string;
//   items: SidebarItem[];
// };

// export default function Sidebar({ items }: { items: SidebarSection[] }) {
//   const location = useLocation();
//   const [openSections, setOpenSections] = useState<{
//     [key: string]: boolean;
//   }>({});

//   const toggleSection = (section: string) => {
//     setOpenSections((prev) => ({
//       ...prev,
//       [section]: !prev[section],
//     }));
//   };

//   return (
//     <aside className="w-64 bg-white border-r p-4 h-full overflow-y-auto">
//       {items.map(({ section, items }) => (
//         <div key={section} className="mb-2">
//           <button
//             onClick={() => toggleSection(section)}
//             className="flex items-center justify-between w-full px-2 py-2 font-medium text-left hover:bg-gray-100 rounded"
//           >
//             <span>{section}</span>
//             {openSections[section] ? <ExpandLess /> : <ChevronRightIcon />}
//           </button>

//           {openSections[section] && (
//             <div className="pl-4">
//               {items.map(({ label, path }) => (
//                 <NavLink
//                   key={label}
//                   to={path}
//                   className={({ isActive }) =>
//                     isActive || location.pathname.includes(path)
//                       ? 'block py-1 px-2 bg-blue-100 text-blue-800 rounded'
//                       : 'block py-1 px-2 hover:bg-gray-100 rounded'
//                   }
//                 >
//                   {label}
//                 </NavLink>
//               ))}
//             </div>
//           )}
//         </div>
//       ))}
//     </aside>
//   );
// }
// resmanui-host/src/components/Sidebar.tsx
import  {  useState } from "react";
import { Link } from "react-router-dom";
// import { useAuth } from "../auth/AuthContext";

const Sidebar = () => {
  // const { user } = useAuth();
  // const location = useLocation();
  const [sidebarItems] = useState<
    { label: string; path: string }[]
  >([]);

  // useEffect(() => {
  //   if (!user) return;

  //   const loadSidebarConfig = async () => {
  //     try {
  //       if (location.pathname.startsWith("/admin") && user.role === "admin") {
  //         const { sidebarConfig } = await import(
  //           "admin_app/AdminSidebarConfig"
  //         );
  //         setSidebarItems(sidebarConfig);
  //       } else if (
  //         location.pathname.startsWith("/recruit") &&
  //         user.role === "recruiter"
  //       ) {
  //         const { sidebarConfig } = await import(
  //           "recruit_app/RecruitSidebarConfig"
  //         );
  //         setSidebarItems(sidebarConfig);
  //       } else {
  //         setSidebarItems([]);
  //       }
  //     } catch (error) {
  //       console.error("Failed to load sidebar config:", error);
  //       setSidebarItems([]);
  //     }
  //   };

  //   loadSidebarConfig();
  // }, [location.pathname, user]);

  // if (!user || !sidebarItems.length) return null;

  return (
    <div className='tw-w-64 tw-bg-gray-100 tw-h-full tw-p-4'>
      {sidebarItems.map((item) => (
        <Link
          key={item.label}
          to={item.path}
          className='tw-block tw-py-2 tw-px-4 tw-hover:bg-gray-200'
        >
          {item.label}
        </Link>
      ))}
    </div>
  );
};

export default Sidebar;
