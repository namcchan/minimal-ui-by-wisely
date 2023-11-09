import React from "react";

import { Button, Img, Text } from "components";
import Error403Illustrationsi from "components/Error403Illustrationsi";
import Header from "components/Header";

const Error403Page: React.FC = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-publicsans sm:gap-10 md:gap-10 gap-[142px] items-center justify-center mx-auto w-auto sm:w-full md:w-full">
        <Header
          className="bg-cover bg-no-repeat flex h-20 md:h-auto items-center justify-between md:px-5 px-6 w-full"
          style={{ backgroundImage: "url('images/img_mainheader.svg')" }}
        />
        <div className="flex flex-col md:gap-10 gap-20 items-center justify-center md:px-5 w-[400px] sm:w-full">
          <div className="flex flex-col gap-4 items-center justify-start w-auto sm:w-full">
            <Text
              className="md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-900 text-center w-auto"
              size="txtPublicSansBold32"
            >
              No permission
            </Text>
            <Text
              className="leading-[24.00px] max-w-[400px] md:max-w-full text-base text-blue_gray-500 text-center"
              size="txtPublicSansRegular16"
            >
              <>
                The page you&#39;re trying access has restricted access. Please
                refer to your system administrator
              </>
            </Text>
          </div>
          <Error403Illustrationsi
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

export default Error403Page;
