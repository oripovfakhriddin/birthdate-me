import { useContext } from "react";
import { LanguageContext } from "../../../context/language";

const AboutPage = () => {
  const { lang } = useContext(LanguageContext);
  return <div className='bg-red-400'>{lang.lorem}</div>;
};

export default AboutPage;
