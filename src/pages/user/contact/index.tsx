import { useContext } from "react";
import { LanguageContext } from "../../../context/language";

const ContactPage = () => {
  const { lang } = useContext(LanguageContext);
  return <div className="bg-red-400">{lang.lorem}</div>;
};

export default ContactPage;
