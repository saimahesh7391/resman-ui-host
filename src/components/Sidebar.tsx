// resman-ui-host/src/components/Sidebar.tsx
import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

interface SidebarItem {
  label: string;
  path: string;
}

const Sidebar = () => {
  const [sidebarItems, setSidebarItems] = useState<SidebarItem[]>([]);
  const location = useLocation();

  useEffect(() => {
    const loadSidebarConfig = async () => {
      let items: SidebarItem[] = [
        { label: "Home", path: "/" },
        { label: "About", path: "/about" },
        { label: "Contact", path: "/contact" },
      ];

      if (location.pathname.startsWith("/admin")) {
        const { default: adminSidebarConfig } = await import("admin_app/AdminSidebarConfig");
        items = adminSidebarConfig;
      } else if (location.pathname.startsWith("/recruit")) {
        const { default: recruitSidebarConfig } = await import("recruit_app/RecruitSidebarConfig");
        items = recruitSidebarConfig;
      }

      setSidebarItems(items);
    };

    loadSidebarConfig();
  }, [location.pathname]);

  return (
    <div className="w-64 bg-gray-800 text-white h-full p-4">
      <ul>
        {sidebarItems.map((item) => (
          <li key={item.path} className="mb-2">
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                isActive ? "text-blue-400 font-bold" : "text-white"
              }
            >
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;