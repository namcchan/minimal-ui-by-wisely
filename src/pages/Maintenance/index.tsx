import React from "react";

import { Button, Img, Text } from "components";
import Header from "components/Header";

const MaintenancePage: React.FC = () => {
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
              className="leading-[48.00px] md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-900 text-center"
              size="txtPublicSansBold32"
            >
              <>
                Website currently <br />
                under maintenance
              </>
            </Text>
            <Text
              className="text-base text-blue_gray-500 text-center w-full"
              size="txtPublicSansRegular16"
            >
              We are currently working hard on this page!
            </Text>
          </div>
          <div
            className="bg-cover bg-no-repeat flex flex-col h-[260px] items-end justify-end p-[21px] sm:px-5 w-[89%] md:w-full"
            style={{
              backgroundImage: "url('images/img_illustrationsi_teal_500.svg')",
            }}
          >
            <div className="flex flex-col items-center justify-start mr-[15px] w-[44%] md:w-full">
              <Img
                className="h-[216px] md:h-auto object-cover w-full"
                src="images/img_img_216x137.png"
                alt="img"
              />
            </div>
          </div>
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

export default MaintenancePage;
