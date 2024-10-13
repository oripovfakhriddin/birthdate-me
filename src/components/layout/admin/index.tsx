import { Fragment } from "react";
import { Outlet } from "react-router-dom";

const AdminLayoutPage = () => {
  return (
    <Fragment>
      <h1 className='text-center text-6xl'>AdminLayoutPage</h1>
      <Outlet />
    </Fragment>
  );
};

export default AdminLayoutPage;
