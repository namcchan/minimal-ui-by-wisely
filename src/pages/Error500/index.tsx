import React from "react";

import { Button, Img, Text } from "components";
import Error500Illustrationsi from "components/Error500Illustrationsi";
import Header from "components/Header";

const Error500Page: React.FC = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-publicsans sm:gap-10 md:gap-10 gap-[154px] items-center justify-center mx-auto w-auto sm:w-full md:w-full">
        <Header
          className="bg-cover bg-no-repeat flex h-20 md:h-auto items-center justify-between md:px-5 px-6 w-full"
          style={{ backgroundImage: "url('images/img_mainheader.svg')" }}
        />
        <div className="flex flex-col md:gap-10 gap-20 items-center justify-start md:px-5 w-[400px] sm:w-full">
          <div className="flex flex-col gap-4 items-center justify-start w-full">
            <Text
              className="md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-900 text-center w-full"
              size="txtPublicSansBold32"
            >
              500 Internal Server Error
            </Text>
            <Text
              className="text-base text-blue_gray-500 text-center w-full"
              size="txtPublicSansRegular16"
            >
              There was an error, please try again later.
            </Text>
          </div>
          <Error500Illustrationsi
            className="bg-cover bg-no-repeat flex flex-col h-[260px] items-end justify-end p-[21px] sm:px-5 w-[87%] md:w-full"
            style={{ backgroundImage: "url('images/img_illustrationsi.png')" }}
          />
          <Button
            className="cursor-pointer font-bold h-12 min-w-[115px] text-[15px] text-center"
            shape="round"
            color="blue_gray_900"
            size="xl"
            variant="fill"
          >
            Go to Home
          </Button>
        </div>
      </div>
    </>
  );
};

export default Error500Page;
