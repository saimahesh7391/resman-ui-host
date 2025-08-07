// resman-ui-host/src/components/Sidebar.tsx
import type { SidebarConfig, SidebarSection } from '@/types/sidebar';
import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const [sidebarItems, setSidebarItems] = useState<SidebarConfig>([]);
  const location = useLocation();

  useEffect(() => {
    const loadSidebarConfig = async () => {
      let items: SidebarConfig = [
        {
          section: 'Public',
          items: [
            { label: 'Home', path: '/' },
            { label: 'About', path: '/about' },
            { label: 'Contact', path: '/contact' },
            { label: 'Signup', path: '/signup' },
          ],
        },
      ];

      if (location.pathname.startsWith('/admin')) {
        const { default: adminSidebarConfig } = await import(
          'admin_app/AdminSidebarConfig'
        );
        items = adminSidebarConfig.map((section: SidebarSection) => ({
          ...section,
          items: section.items.map((item) => ({
            ...item,
            path: `/admin/${item.path}`, // Prefix with /admin/
          })),
        }));
      } else if (location.pathname.startsWith('/recruit')) {
        const { default: recruitSidebarConfig } = await import(
          'recruit_app/RecruitSidebarConfig'
        );
        items = recruitSidebarConfig.map((section: SidebarSection) => ({
          ...section,
          items: section.items.map((item) => ({
            ...item,
            path: `/recruit/${item.path}`, // Prefix with /recruit/
          })),
        }));
      }

      setSidebarItems(items);
    };

    loadSidebarConfig();
  }, [location.pathname]);

  return (
    <aside className="w-64 bg-white p-4 h-full overflow-y-auto">
      <div className="space-y-4">
        {sidebarItems.map((section) => (
          <div key={section.section} className="mb-4">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              {section.section}
            </h3>
            <div className="space-y-1">
              {section.items.map(({ label, path }) => (
                <NavLink
                  key={path}
                  to={path}
                  className={({ isActive }) =>
                    isActive
                      ? 'block px-2 py-1 bg-blue-100 text-blue-800 rounded font-medium'
                      : 'block px-2 py-1 text-gray-800 hover:bg-gray-100 rounded'
                  }
                >
                  {label}
                </NavLink>
              ))}
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
