import { Fragment } from "react/jsx-runtime";
import UsersTableForAdmin from "../../../components/tables/user";

const AdminUsersPage = () => {
  return (
    <Fragment>
      <h1 className='text-center text-6xl'>AdminUsersPage</h1>
      <UsersTableForAdmin />
    </Fragment>
  );
};

export default AdminUsersPage;
