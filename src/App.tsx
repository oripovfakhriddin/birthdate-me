import { Fragment, useContext } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/auth/login";
import RegisterPage from "./pages/auth/register";
import HomePage from "./pages/user/home";
import UserLayout from "./components/layout/user";
import AccountPage from "./pages/user/account";
import AdminLayoutPage from "./components/layout/admin";
import AdminDashboardPage from "./pages/admin/dashboard";
import AdminAccountPage from "./pages/admin/account";
import AdminUsersPage from "./pages/admin/users";
import AboutPage from "./pages/user/about";
import ContactPage from "./pages/user/contact";
import { AuthContext } from "./context/auth";
import PageNotFound from "./pages/page-not-found";

function App() {
  const { isAuthenticated, user } = useContext(AuthContext);

  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
          </Route>

          <Route
            path="/"
            element={
              isAuthenticated ? <UserLayout /> : <Navigate to={"/login"} />
            }
          >
            <Route index element={<HomePage />} />
            <Route path="contact-us" element={<ContactPage />} />
            <Route path="about-me" element={<AboutPage />} />
            <Route path="/account" element={<AccountPage />} />
          </Route>

          <Route
            path="/admin"
            element={
              isAuthenticated && user?.role === "ADMIN" ? (
                <AdminLayoutPage />
              ) : (
                <Navigate to="/login" />
              )
            }
          >
            <Route index element={<AdminDashboardPage />} />
            <Route path="accounts" element={<AdminAccountPage />} />
            <Route path="users" element={<AdminUsersPage />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
