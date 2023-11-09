import React from "react";

import { Button, FloatingInput, Img, Input, Text } from "components";
import LoginClassicAuthbanner from "components/LoginClassicAuthbanner";
import LoginClassicAuthformlogin from "components/LoginClassicAuthformlogin";

const LoginClassicPage: React.FC = () => {
  return (
    <>
      <div className="bg-white-A700 flex sm:flex-col md:flex-col flex-row font-publicsans sm:gap-5 md:gap-5 items-center justify-start mx-auto w-auto sm:w-full md:w-full">
        <LoginClassicAuthbanner className="bg-blue_gray-900 flex flex-col items-center justify-start md:px-5 w-[67%] md:w-full" />
        <div className="flex flex-col h-[1024px] md:h-auto items-start justify-center pt-60 px-16 md:px-5 w-[480px] sm:w-full">
          <LoginClassicAuthformlogin className="bg-white-A700 flex flex-col gap-10 items-center justify-start rounded-[16px] w-full" />
        </div>
      </div>
    </>
  );
};

export default LoginClassicPage;
