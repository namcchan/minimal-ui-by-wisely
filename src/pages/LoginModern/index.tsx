import React from "react";

import { Sidebar } from "react-pro-sidebar";

import { Button, FloatingInput, Img, Text } from "components";
import LoginClassicAuthformlogin from "components/LoginClassicAuthformlogin";

const LoginModernPage: React.FC = () => {
  return (
    <>
      <div className="bg-white-A700 flex sm:flex-col md:flex-col flex-row font-publicsans sm:gap-5 md:gap-5 items-start justify-start mx-auto w-auto sm:w-full md:w-full">
        <Sidebar className="!sticky !w-[480px] flex h-screen md:hidden justify-start overflow-auto md:px-5 rounded-[16px] top-[0]">
          <Img
            className="h-10 md:h-auto ml-16 md:ml-[0] mr-[376px] mt-16 object-cover rounded-[16px] w-10"
            src="images/img_logo.png"
            alt="logo"
          />
          <LoginClassicAuthformlogin
            className="flex flex-col gap-10 items-center justify-start mb-[406px] mt-16 mx-auto w-[352px]"
            userpassword="Password"
            eye="images/img_eye.svg"
            label="Login"
            arrowright="images/img_arrowright_white_a700_24x24.svg"
          />
        </Sidebar>
        <div className="flex flex-1 flex-col h-full items-center justify-center p-4 md:px-5 w-full">
          <div className="flex flex-col items-center justify-start w-full">
            <Img
              className="h-[992px] md:h-auto object-cover w-full"
              src="images/img_img_992x928.png"
              alt="img"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginModernPage;
