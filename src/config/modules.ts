// resman-ui-host/src/config/modules.ts
export interface ModuleConfig {
  name: string;
  path: string;
  remoteName: string;
  remoteUrl: string;
  prodUrl: string; // Add production URL
  routesModule: string;
  sidebarConfigModule: string;
}

export const modules: ModuleConfig[] = [
  {
    name: "Admin",
    path: "/admin",
    remoteName: "admin_app",
    remoteUrl: "http://localhost:3001/assets/remoteEntry.js",
    prodUrl: "https://admin.example.com/assets/remoteEntry.js",
    routesModule: "admin_app/AdminRoutes",
    sidebarConfigModule: "admin_app/AdminSidebarConfig",
  },
  {
    name: "Recruit",
    path: "/recruit",
    remoteName: "recruit_app",
    remoteUrl: "http://localhost:3002/assets/remoteEntry.js",
    prodUrl: "https://recruit.example.com/assets/remoteEntry.js",
    routesModule: "recruit_app/RecruitRoutes",
    sidebarConfigModule: "recruit_app/RecruitSidebarConfig",
  },
];