import UsersTableForAdmin from "../../../components/tables/user";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { useEffect, useState, Fragment, useContext } from "react";
import { getUsers } from "../../../redux/slices/user";
import Loading from "../../../components/loading";
import SearchIcon from "../../../assets/icons/search-icon";
import CloseIcon from "../../../assets/icons/close-icon";
import { LanguageContext } from "../../../context/language";

const AdminUsersPage = () => {
  const { lang } = useContext(LanguageContext);
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
  }, [callback, dispatch, size, currentPage]);

  const changePage = (currentPage: string) => {
    setCurrentPage(currentPage);
  };

  const changeSize = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSize(e.target.value);
  };

  const changeSearch = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
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
          <div className="flex gap-3 flex-col justify-center items-center sm:flex sm:flex-row sm:items-center sm:justify-between">
            <h1 className="text-center text-xl">
              {lang.totalUsers}: {total}
            </h1>
            <form className="flex gap-2 mb-3">
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
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                      setSearch(e.target.value);
                    }}
                    type="search"
                    id="default-search"
                    className="block w-full p-4 ps-10 text-sm outline-none text-gray-900 border border-gray-300 rounded-lg bg-gray-200 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Search..."
                  />
                  <div className="flex justify-between items-center">
                    <button
                      type="submit"
                      onClick={(e: React.FormEvent<HTMLButtonElement>) => {
                        changeSearch(e);
                      }}
                      className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Search
                    </button>
                    {search ? (
                      <button
                        onClick={() => {
                          setSearch("");
                          refetch();
                        }}
                        type="button"
                        className="absolute transition duration-300 p-1 end-[88px] bottom-2.5 text-red-500 rounded-lg  bg-blue-700 hover:bg-blue-800 dark:text-gray-400 dark:hover:bg-gray-700 focus:outline-none"
                        aria-expanded="false"
                      >
                        <CloseIcon height="28px" width="28px" />
                      </button>
                    ) : null}
                  </div>
                </div>
              </div>
              <select
                name="page"
                id="page"
                value={size}
                onChange={changeSize}
                className="border cursor-pointer border-gray-400 outline-none bg-gray-200 text-gray-900 text-sm rounded-lg  focus:ring-blue-500 focus:border-blue-500  block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
                    className={`flex items-center rounded justify-center px-3 h-8 transition-all duration-300 border border-gray-300  hover:bg-blue-100 hover:text-blue-700 dark:hover:bg-blue-400 dark:border-gray-700 dark:bg-gray-700 dark:text-white ${
                      +currentPage === value
                        ? "text-blue-600 bg-blue-100 dark:bg-blue-600"
                        : null
                    }`}
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
