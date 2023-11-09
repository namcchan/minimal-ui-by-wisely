import React from "react";

import { Button, Img, Input, Text } from "components";
import LoginClassicAuthbanner from "components/LoginClassicAuthbanner";
import RegisterClassicColumnsignintominimal from "components/RegisterClassicColumnsignintominimal";

const RegisterClassicPage: React.FC = () => {
  return (
    <>
      <div className="bg-white-A700 flex sm:flex-col md:flex-col flex-row font-publicsans sm:gap-5 md:gap-5 items-center justify-start mx-auto w-auto sm:w-full md:w-full">
        <LoginClassicAuthbanner
          className="bg-blue_gray-900 flex flex-col items-center justify-start md:px-5 w-[67%] md:w-full"
          welcometext={
            <>
              Manage the job <br />
              more effectively with Minimal
            </>
          }
        />
        <div className="flex flex-col h-[1024px] md:h-auto items-start justify-center pt-60 px-16 md:px-5 w-[480px] sm:w-full">
          <RegisterClassicColumnsignintominimal
            className="bg-white-A700 flex flex-col gap-10 items-start justify-start rounded-[16px] w-full"
            bysigningupi={
              <Text className="text-blue_gray-500 text-center text-xs w-full">
                <span className="text-blue_gray-500 font-publicsans font-normal">
                  By signing up, I agree to{" "}
                </span>
                <a
                  href="javascript:"
                  className="text-blue_gray-900 font-publicsans font-normal underline"
                >
                  Terms of Use
                </a>
                <span className="text-blue_gray-900 font-publicsans font-normal">
                  {" "}
                </span>
                <span className="text-blue_gray-500 font-publicsans font-normal">
                  and
                </span>
                <span className="text-blue_gray-900 font-publicsans font-normal">
                  {" "}
                </span>
                <a
                  href="javascript:"
                  className="text-blue_gray-900 font-publicsans font-normal underline"
                >
                  Privacy Policy
                </a>
                <span className="text-blue_gray-900 font-publicsans font-normal">
                  .
                </span>
              </Text>
            }
          />
        </div>
      </div>
    </>
  );
};

export default RegisterClassicPage;
