import { useContext } from "react";
import { LanguageContext } from "../context/language";

const NoData = () => {
  const { lang } = useContext(LanguageContext);
  return (
    <div className="text-center absolute inset-0 flex justify-center flex-col">
      <h1 className="mb-4 text-3xl md:text-6xl font-semibold text-red-500">
        {lang.noData}
      </h1>
      <p className="mb-4 text-lg text-gray-600">{lang.noUsers}</p>
      <div className="animate-bounce">
        <svg
          className="mx-auto h-16 w-16 text-red-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default NoData;
