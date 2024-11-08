import DeleteIcon from "../../../assets/icons/delete-icon";
import EditIcon from "../../../assets/icons/edit-icon";
import User from "../../../types/user";

const UsersTableForAdmin = ({
  users,
  total,
}: {
  users: User[];
  total: number;
}) => {
  return (
    <div className='relative overflow-x-auto shadow-md sm:rounded-lg'>
      <table className='w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400'>
        <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
          <tr>
            <th scope='col' className='px-6 py-3'>
              Firstname
            </th>
            <th scope='col' className='px-6 py-3'>
              Lastname
            </th>
            <th scope='col' className='px-6 py-3 text-center'>
              Birthdate
            </th>
            <th scope='col' className='px-6 py-3 text-center'>
              Until birthdate
            </th>
            <th scope='col' className='px-6 py-3 text-end'>
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => {
            return (
              <tr
                key={index}
                className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600'>
                <td className='px-5 py-4  dark:text-white '>
                  {user.firstName}
                </td>
                <td className='px-5 py-4 dark:text-white'>{user.lastName}</td>
                <td className='px-5 py-4 !min-w-[120px] text-center dark:text-white'>
                  {user.birthDate}
                </td>
                <td className='px-5 py-4 text-center font-medium text-gray-900 dark:text-white'>
                  {user.untilBirthDate}
                </td>
                <td className='py-4 pr-6 flex gap-2 justify-end items-center text-end'>
                  <button
                    type='button'
                    className='flex items-center gap-2 text-white bg-yellow-400 hover:bg-yellow-500 font-medium rounded-lg text-sm px-4 py-2'>
                    <EditIcon />
                    <span>Edit</span>
                  </button>
                  <button
                    type='button'
                    className='flex items-center gap-2 text-white bg-red-700 hover:bg-red-800 font-medium rounded-lg text-sm px-4 py-2 dark:bg-red-600 dark:hover:bg-red-700'>
                    <DeleteIcon />
                    <span>Delete</span>
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <nav
        className='flex items-center flex-column flex-wrap md:flex-row justify-between pt-4'
        aria-label='Table navigation'>
        <span className='text-sm font-normal text-gray-500 dark:text-gray-400 mb-4 md:mb-0 block w-full md:inline md:w-auto'>
          Showing{" "}
          <span className='font-semibold text-gray-900 dark:text-white'>
            1-10
          </span>{" "}
          of{" "}
          <span className='font-semibold text-gray-900 dark:text-white'>
            {total}
          </span>
        </span>
        <ul className='inline-flex -space-x-px  text-sm h-8'>
          <li>
            <a
              href='#'
              className='flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'>
              Previous
            </a>
          </li>
          <li>
            <a
              href='#'
              className='flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'>
              1
            </a>
          </li>
          <li>
            <a
              href='#'
              className='flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'>
              2
            </a>
          </li>
          <li>
            <a
              href='#'
              aria-current='page'
              className='flex items-center justify-center px-3 h-8 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white'>
              3
            </a>
          </li>
          <li>
            <a
              href='#'
              className='flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'>
              4
            </a>
          </li>
          <li>
            <a
              href='#'
              className='flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'>
              5
            </a>
          </li>
          <li>
            <a
              href='#'
              className='flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'>
              Next
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default UsersTableForAdmin;
