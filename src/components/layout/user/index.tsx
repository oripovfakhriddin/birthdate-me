import { Fragment } from "react";
import UserHeader from "./header";
import UserFooter from "./footer";
import { Outlet } from "react-router-dom";

const UserLayout = () => {
  return (
    <Fragment>
      <UserHeader />
      <main className="mt-[55.8px] mb-8 md:mt-[79.8px] max-w-screen-xl mx-auto md:p-4 p-1">
        <Outlet />
      </main>
      <UserFooter />
    </Fragment>
  );
};

export default UserLayout;
