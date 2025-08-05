// resmanui-host/src/app/routes/AppRoutes.tsx
import   { lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
// import { useAuth } from '../../auth/AuthContext';
import MainLayout from "../layout/MainLayout";
import AuthRoutes from "../../auth/AuthRoutes";
import ErrorBoundary from "../../components/common/ErrorBoundary";

const AdminRoutes = lazy(() => import("admin_app/AdminRoutes"));
// const RecruitRoutes = lazy(() => import("recruit_app/RecruitRoutes"));

const AppRoutes = () => {
  // const { user } = useAuth();

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route element={<MainLayout />}>
          <Route
            path='/admin/*'
            element={
                <ErrorBoundary>
                  <AdminRoutes />
                </ErrorBoundary>
              // user?.role === "admin" ? (
              // ) : (
              //   <Navigate to='/auth/login' />
              // )
            }
          />
          {/* <Route
            path='/recruit/*'
            element={
                <ErrorBoundary>
                  <RecruitRoutes />
                </ErrorBoundary>
              // user?.role === "recruiter" ? (
              // ) : (
              //   <Navigate to='/auth/login' />
              // )
            }
          /> */}
          <Route path='/*' element={<Navigate to='/auth/login' />} />
        </Route>
        <Route path='/auth/*' element={<AuthRoutes />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
