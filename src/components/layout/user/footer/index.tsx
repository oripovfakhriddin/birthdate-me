import { Fragment } from "react";
const UserFooter = () => {
  return (
    <Fragment>
      <footer className='fixed bottom-0 z-20 w-full py-2 bg-gray-200 dark:bg-gray-900'>
        <div></div>
        <p className='text-xs text-center dark:text-white'>
          Copyright © 2024 of Juniors Team
        </p>
      </footer>
    </Fragment>
  );
};

export default UserFooter;
