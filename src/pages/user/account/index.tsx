import { Fragment, useContext } from "react";
import { LanguageContext } from "../../../context/language";

const AccountPage = () => {
  const { lang } = useContext(LanguageContext);
  return (
    <Fragment>
      <section>
        <div className=''>{lang.lorem}</div>
      </section>
    </Fragment>
  );
};

export default AccountPage;
