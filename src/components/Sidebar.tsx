// resman-ui-host/src/components/Sidebar.tsx
import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { ExpandLess } from '@mui/icons-material';
import type { SidebarSection } from '@/types/sidebar';

export default function Sidebar() {
  const location = useLocation();
  const [sidebarItems, setSidebarItems] = useState<SidebarSection[]>([]);
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({});

  const toggleSection = (section: string) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  useEffect(() => {
    const loadSidebarConfig = async () => {
      let items: SidebarSection[] = [];

      if (location.pathname.startsWith('/admin')) {
        const { default: adminSidebarConfig } = await import(
          'admin_app/AdminSidebarConfig'
        );
        items = adminSidebarConfig;
      } else if (location.pathname.startsWith('/recruit')) {
        const { default: recruitSidebarConfig } = await import(
          'recruit_app/RecruitSidebarConfig'
        );
        items = recruitSidebarConfig;
      } else {
        items = [
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
      }

      // Optional: Auto-expand all sections by default
      // const defaultOpenSections = items.reduce(
      //   (acc, section) => {
      //     acc[section.section] = false;
      //     return acc;
      //   },
      //   {} as Record<string, boolean>,
      // );

      setSidebarItems(items);
      // setOpenSections(defaultOpenSections);
    };

    loadSidebarConfig();
  }, [location.pathname]);

  return (
    <aside className="w-64 bg-white p-4 h-full overflow-y-auto">
      {sidebarItems.map(({ section, items }) => (
        <div key={section} className="mb-2">
          <button
            onClick={() => toggleSection(section)}
            className="flex items-center justify-between w-full px-2 py-2 font-medium text-left hover:bg-gray-100 rounded"
          >
            <span>{section}</span>
            {openSections[section] ? <ExpandLess /> : <ChevronRightIcon />}
          </button>

          {openSections[section] && (
            <div className="pl-4">
              {items.map(({ label, path }) => (
                <NavLink
                  key={label}
                  to={path}
                  className={({ isActive }) =>
                    isActive ||
                    location.pathname === path ||
                    location.pathname.includes(path)
                      ? 'block py-1 px-2 bg-blue-100 text-blue-800 rounded font-medium'
                      : 'block py-1 px-2 hover:bg-gray-100 text-gray-800 rounded'
                  }
                >
                  {label}
                </NavLink>
              ))}
            </div>
          )}
        </div>
      ))}
    </aside>
  );
}
