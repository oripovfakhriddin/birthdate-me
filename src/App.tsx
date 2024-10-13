import { Fragment } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/user/login";
import RegisterPage from "./pages/user/register";
import HomePage from "./pages/user/home";
import UserLayout from "./components/layout/user";
import AccountPage from "./pages/user/account";
import AdminLayoutPage from "./components/layout/admin";
import AdminDashboardPage from "./pages/admin/dashboard";
import AdminAccountPage from "./pages/admin/account";
import AdminUsersPage from "./pages/admin/users";
import AboutPage from "./pages/user/about";
import ContactPage from "./pages/user/contact";

function App() {
  const isAuthenticated = true;
  const user = {
    role: "ADMIN",
  };
  // const { isAuthenticated, user } = useContext(AuthContext);
  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route>
            <Route path='/login' element={<LoginPage />} />
            <Route path='/register' element={<RegisterPage />} />
          </Route>

          <Route path='/' element={<UserLayout />}>
            <Route index element={<HomePage />} />
            <Route path='contact-us' element={<ContactPage />} />
            <Route path='about-me' element={<AboutPage />} />
            <Route
              path='/order'
              element={
                isAuthenticated ? <AccountPage /> : <Navigate to={"/login"} />
              }
            />

            <Route
              path='/account'
              element={
                isAuthenticated ? <AccountPage /> : <Navigate to={"/login"} />
              }
            />
          </Route>

          <Route
            path='/admin'
            element={
              isAuthenticated && user?.role === "ADMIN" ? (
                <AdminLayoutPage />
              ) : (
                <Navigate to='/login' />
              )
            }>
            <Route index element={<AdminDashboardPage />} />
            <Route path='accounts' element={<AdminAccountPage />} />
            <Route path='users' element={<AdminUsersPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
