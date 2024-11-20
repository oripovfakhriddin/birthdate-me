import { Fragment, useContext, useState } from "react";
import DeleteIcon from "../../../assets/icons/delete-icon";
import EditIcon from "../../../assets/icons/edit-icon";
import User from "../../../types/user";
import { LanguageContext } from "../../../context/language";
import NoData from "../../no-data";
import DeleteModal from "../../modals/delete-user";
import EditUserModal from "../../modals/edit-user";

const UsersTableForAdmin = ({
  users,
  refetch,
}: {
  users: User[];
  refetch: () => void;
}) => {
  const { lang } = useContext(LanguageContext);
  const [selected, setSelected] = useState<number | null>(null);
  const [selectedForEdit, setSelectedForEdit] = useState<string | null>(null);
  const [isDeleteModal, setIsDeleteModal] = useState(false);
  const [isEditModal, setIsEditModal] = useState(false);
  const [userForEdit, setUserForEdit] = useState<User | null>(null);

  const closeDeleteModal = () => {
    setIsDeleteModal(false);
  };

  const closeEditModal = () => {
    setIsEditModal(false);
  };

  return (
    <Fragment>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        {users.length > 0 ? (
          <table className="w-full text-sm text-left  text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-3 py-3">
                  №
                </th>
                <th scope="col" className="px-4 py-3">
                  {lang.firstName}
                </th>
                <th scope="col" className="px-4 py-3">
                  {lang.lastName}
                </th>
                <th scope="col" className="px-4 py-3 text-center">
                  {lang.birthdate}
                </th>
                <th scope="col" className="px-4 py-3 text-center">
                  {lang.untilBirthdate}
                </th>
                <th scope="col" className="px-4 py-3 text-end">
                  {lang.action}
                </th>
              </tr>
            </thead>

            <tbody>
              {users.map((user, index) => {
                return (
                  <tr
                    key={index}
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600"
                  >
                    <td className="px-3 py-4  dark:text-white ">{index + 1}</td>
                    <td className="px-4 py-4  dark:text-white ">
                      {user.firstName}
                    </td>
                    <td className="px-4 py-4 dark:text-white">
                      {user.lastName}
                    </td>
                    <td className="px-4 py-4 !min-w-[120px] text-center dark:text-white">
                      {user.birthDate}
                    </td>
                    <td className="px-4 py-4 text-center font-medium text-gray-900 dark:text-white">
                      {user.untilBirthDate}
                    </td>
                    <td className="py-4 pr-6 flex gap-2 justify-end items-center text-end">
                      <button
                        onClick={() => {
                          setSelectedForEdit(user.email);
                          setUserForEdit(user);
                          setIsEditModal(true);
                        }}
                        type="button"
                        className="flex items-center gap-2 text-white bg-yellow-400 hover:bg-yellow-500 font-medium rounded-lg text-sm px-4 py-2"
                      >
                        <EditIcon />
                        <span>{lang.edit}</span>
                      </button>
                      <button
                        onClick={() => {
                          setSelected(user?.id);
                          setIsDeleteModal(true);
                        }}
                        type="button"
                        className="flex items-center gap-2 text-white bg-red-700 hover:bg-red-800 font-medium rounded-lg text-sm px-4 py-2 dark:bg-red-600 dark:hover:bg-red-700"
                      >
                        <DeleteIcon />
                        <span>{lang.delete}</span>
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        ) : (
          <div className="relative h-96">
            <NoData />
          </div>
        )}
      </div>
      {isDeleteModal ? (
        <DeleteModal
          isDeleteModalOpen={isDeleteModal}
          selected={selected}
          closeDeleteModal={closeDeleteModal}
          refetch={refetch}
        />
      ) : null}
      {isEditModal ? (
        <EditUserModal
          isEditModal={isEditModal}
          selected={selectedForEdit}
          user={userForEdit}
          closeEditModal={closeEditModal}
        />
      ) : null}
    </Fragment>
  );
};

export default UsersTableForAdmin;
