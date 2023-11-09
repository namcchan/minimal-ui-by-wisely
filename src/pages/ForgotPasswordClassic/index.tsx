import React from "react";

import { Button, Img, Input, Text } from "components";
import ForgotPasswordClassicColumniconsothericpas from "components/ForgotPasswordClassicColumniconsothericpas";
import Header from "components/Header";

const ForgotPasswordClassicPage: React.FC = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-publicsans sm:gap-10 md:gap-10 gap-52 items-center justify-center mx-auto w-auto sm:w-full md:w-full">
        <Header
          className="bg-cover bg-no-repeat flex h-20 md:h-auto items-center justify-between md:px-5 px-6 w-full"
          style={{ backgroundImage: "url('images/img_mainheader.svg')" }}
        />
        <ForgotPasswordClassicColumniconsothericpas className="bg-white-A700 flex flex-col gap-10 items-center justify-end md:px-5 rounded-[16px] w-[400px] sm:w-full" />
      </div>
    </>
  );
};

export default ForgotPasswordClassicPage;
