import { useContext } from "react";
import { Fragment } from "react/jsx-runtime";
import { LanguageContext } from "../../../context/language";

const AdminDashboardPage = () => {
  const { lang } = useContext(LanguageContext);
  return (
    <Fragment>
      <h1 className="text-center text-3xl">AdminDashboardPage</h1>
      <p>{lang.lorem}</p>
    </Fragment>
  );
};

export default AdminDashboardPage;
