// resman-ui-host/src/app/routes/AppRoutes.tsx
import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import PublicRoutes from "@/pages/public/PublicRoutes";
import MainLayout from "@/app/layout/MainLayout";
import LoadingScreen from "@/components/common/LoadingScreen";
import NotFoundPage from "@/components/common/NotFoundPage";

const AdminRoutes = lazy(() => import("admin_app/AdminRoutes"));
const RecruitRoutes = lazy(() => import("recruit_app/RecruitRoutes"));

const AppRoutes = () => {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <Routes>
        <Route element={<MainLayout />}>
          {/* Public Routes */}
          <Route path="/*" element={<PublicRoutes />} />

          {/* Admin Microfrontend */}
          <Route path="/admin/*" element={<AdminRoutes />} />

          {/* Recruit Microfrontend */}
          <Route path="/recruit/*" element={<RecruitRoutes />} />

          {/* Placeholder for Future Microfrontends */}
          <Route path="/employee/*" element={<NotFoundPage />} />
          <Route path="/sales/*" element={<NotFoundPage />} />
          <Route path="/finance/*" element={<NotFoundPage />} />
          <Route path="/hr/*" element={<NotFoundPage />} />
          <Route path="/reports/*" element={<NotFoundPage />} />

          {/* Catch-all for 404 */}
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;