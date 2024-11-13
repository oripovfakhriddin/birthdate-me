import UsersTableForAdmin from "../../../components/tables/user";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { useEffect, useState, Fragment } from "react";
import { getUsers } from "../../../redux/slices/user";
import Loading from "../../../components/loading";
import SearchIcon from "../../../assets/icons/search-icon";

const AdminUsersPage = () => {
  const { loading, total, users } = useAppSelector((state) => state.user);
  const [callback, setCallback] = useState(false);
  const [size, setSize] = useState("10");
  const [currentPage, setCurrentPage] = useState("1");
  const [search, setSearch] = useState("");
  const dispatch = useAppDispatch();

  const refetch = () => {
    setCallback(!callback);
  };

  useEffect(() => {
    dispatch(getUsers({ size, currentPage, search }));
  }, [callback, dispatch]);

  const changePage = (currentPage: string) => {
    setCurrentPage(currentPage);
    refetch();
  };

  const changeSize = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSize(e.target.value);
    refetch();
  };

  const changeSearch = (str: string) => {
    setSearch(str);
    refetch();
  };

  const pages = [];
  for (let i = 1; i <= Math.ceil(total / +size); i++) {
    pages.push(i);
  }

  return (
    <Fragment>
      {loading ? (
        <Loading />
      ) : (
        <Fragment>
          <div className="flex items-center justify-between">
            <h1 className="text-center text-xl">AdminUsersPage: {total}</h1>
            <form className="flex gap-2">
              <div>
                <label
                  htmlFor="default-search"
                  className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                >
                  Search
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <SearchIcon />
                  </div>
                  <input
                    value={search}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      changeSearch(e.target.value)
                    }
                    type="search"
                    id="default-search"
                    className="block w-full outline-none p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "
                    placeholder="Firstname..."
                    required
                  />
                </div>
              </div>
              <select
                name="page"
                id="page"
                value={size}
                onChange={changeSize}
                className="border cursor-pointer border-gray-400 outline-none bg-gray-200 text-gray-900 text-sm rounded-lg  focus:ring-blue-500  block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 "
              >
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="15">15</option>
                <option value="20">20</option>
                <option value="25">25</option>
              </select>
            </form>
          </div>
          <UsersTableForAdmin users={users} />
          <nav
            className="flex items-center flex-column flex-wrap md:flex-row justify-between pt-4"
            aria-label="Table navigation"
          >
            <span className="text-sm font-normal text-gray-500 dark:text-gray-400 mb-4 md:mb-0 block w-full md:inline md:w-auto">
              Showing{" "}
              <span className="font-semibold text-gray-900 dark:text-white">
                {+size * (+currentPage - 1) + 1}-
                {+size * +currentPage >= total ? total : +size * +currentPage}
              </span>{" "}
              of{" "}
              <span className="font-semibold text-gray-900 dark:text-white">
                {total}
              </span>
            </span>
            <ul className="inline-flex -space-x-px gap-2 text-sm h-8">
              {pages.map((value, index) => (
                <li key={index}>
                  <button
                    onClick={() => changePage(value.toString())}
                    aria-current="page"
                    className={`${
                      +currentPage === value
                        ? "text-blue-600 bg-blue-100"
                        : null
                    }flex items-center rounded justify-center px-3 h-8  border border-gray-300  hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white`}
                  >
                    {value}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </Fragment>
      )}
    </Fragment>
  );
};

export default AdminUsersPage;
