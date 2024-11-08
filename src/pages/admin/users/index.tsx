import { Fragment } from "react/jsx-runtime";
import UsersTableForAdmin from "../../../components/tables/user";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { useEffect, useState } from "react";
import { getUsers } from "../../../redux/slices/user";

const AdminUsersPage = () => {
  const { loading, total, users } = useAppSelector((state) => state.user);
  const [callback, setCallback] = useState(false);
  const dispatch = useAppDispatch();

  const refetch = () => {
    setCallback(!callback);
  };

  useEffect(() => {
    dispatch(getUsers());
  }, [callback, dispatch]);

  return (
    <Fragment>
      <h1 className='text-center text-xl'>AdminUsersPage: {total}</h1>
      <UsersTableForAdmin users={users} total={total} />
    </Fragment>
  );
};

export default AdminUsersPage;
