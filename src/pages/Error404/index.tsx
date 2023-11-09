import React from "react";

import { Button, Img, Text } from "components";
import Error404Illustrationsi from "components/Error404Illustrationsi";
import Header from "components/Header";

const Error404Page: React.FC = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-publicsans sm:gap-10 md:gap-10 gap-[130px] items-center justify-center mx-auto w-auto sm:w-full md:w-full">
        <Header
          className="bg-cover bg-no-repeat flex h-20 md:h-auto items-center justify-between md:px-5 px-6 w-full"
          style={{ backgroundImage: "url('images/img_mainheader.svg')" }}
        />
        <div className="flex flex-col md:gap-10 gap-20 items-center justify-center md:px-5 w-[400px] sm:w-full">
          <div className="flex flex-col gap-4 items-center justify-start w-full">
            <Text
              className="md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-900 text-center w-full"
              size="txtPublicSansBold32"
            >
              Sorry, page not found!
            </Text>
            <Text
              className="leading-[24.00px] max-w-[400px] md:max-w-full text-base text-blue_gray-500 text-center"
              size="txtPublicSansRegular16"
            >
              Sorry, we couldn’t find the page you’re looking for. Perhaps
              you’ve mistyped the URL? Be sure to check your spelling.
            </Text>
          </div>
          <Error404Illustrationsi
            className="bg-cover bg-no-repeat md:h-[216px] h-[260px] p-[21px] sm:px-5 relative w-[89%]"
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

export default Error404Page;
