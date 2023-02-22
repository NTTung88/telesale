//! modules
import { createBrowserRouter, Outlet, Navigate, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import { Toaster } from "react-hot-toast";
//Components
import LoginPage from "./pages/Auth/LoginPage";
import SignupPage from "./pages/Auth/SignupPage";
const Home = lazy(() => import("./pages/Staff"));
const SupperAdmin = lazy(() => import("./pages/SupperAdmin"));
const Admin = lazy(() => import("./pages/Admin"));
const Brand = lazy(() => import("./pages/Brand"));
const DetailsUser = lazy(() => import("./pages/DetailsUser"));

//Layouts
import { RootLayout } from "./layouts/RootLayout";
import { AuthLayout } from "./layouts/AuthLayout";
import { AuthProvider } from "./context/AuthContext";
import AxiosProvider from "./context/AxiosContex";
import LoadingLazy from "./components/LoadingLazy";

export const router = createBrowserRouter([
  {
    element: <ContextWrapper />,
    children: [
      {
        element: <RootLayout />,
        children: [
          { path: "*", element: <Navigate to="/login" replace /> },
          {
            path: "/staff",
            element: (
              <Suspense fallback={<LoadingLazy />}>
                <Home />
              </Suspense>
            ),
          },
          {
            path: "/admin",
            element: (
              <Suspense fallback={<LoadingLazy />}>
                <Admin />
              </Suspense>
            ),
          },
          {
            path: "/manager",
            element: (
              <Suspense fallback={<LoadingLazy />}>
                <SupperAdmin />
              </Suspense>
            ),
          },
          {
            path: "/brand",
            element: (
              <Suspense fallback={<LoadingLazy />}>
                <Brand />
              </Suspense>
            ),
          },
          {
            path: "/khach-hang/:id",
            element: (
              <Suspense fallback={<LoadingLazy />}>
                <DetailsUser />
              </Suspense>
            ),
          },
        ],
      },
      {
        element: <AuthLayout />,
        children: [
          { path: "login", element: <LoginPage /> },
          { path: "signup", element: <SignupPage /> },
        ],
      },
    ],
  },
]);

// bao quát
function ContextWrapper() {
  return (
    <AxiosProvider>
      <AuthProvider>
        <Toaster position="top-right" reverseOrder={false} />
        <Outlet />
      </AuthProvider>
    </AxiosProvider>
  );
}
