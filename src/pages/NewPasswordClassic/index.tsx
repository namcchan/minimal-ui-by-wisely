import React from "react";

import { Button, FloatingInput, Img, Input, Line, Text } from "components";
import Header from "components/Header";
import NewPasswordClassicColumniconsothericema from "components/NewPasswordClassicColumniconsothericema";

const NewPasswordClassicPage: React.FC = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-publicsans gap-11 items-center justify-center mx-auto w-auto sm:w-full md:w-full">
        <Header
          className="bg-cover bg-no-repeat flex h-20 md:h-auto items-center justify-between md:px-5 px-6 w-full"
          style={{ backgroundImage: "url('images/img_mainheader.svg')" }}
        />
        <NewPasswordClassicColumniconsothericema className="bg-white-A700 flex flex-col gap-6 items-center justify-end md:px-5 rounded-[16px] w-[400px] sm:w-full" />
      </div>
    </>
  );
};

export default NewPasswordClassicPage;
