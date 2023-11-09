import React from "react";

import { Button, CheckBox, Img, List, Text } from "components";
import Header from "components/Header";
import PricingPricingcard from "components/PricingPricingcard";
import PricingPricingcard1 from "components/PricingPricingcard1";
import PricingPricingcard2 from "components/PricingPricingcard2";
import PricingSwitch from "components/PricingSwitch";

const PricingPage: React.FC = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-publicsans gap-10 items-center justify-start mx-auto pb-20 w-auto sm:w-full md:w-full">
        <Header
          className="bg-cover bg-no-repeat flex h-20 md:h-auto items-center justify-between md:px-5 px-6 w-full"
          style={{ backgroundImage: "url('images/img_mainheader.svg')" }}
        />
        <div className="flex flex-col gap-10 items-center justify-start md:px-10 px-36 sm:px-5 w-full">
          <div className="flex flex-col gap-4 items-center justify-start pb-10 w-auto sm:w-full">
            <Text
              className="leading-[48.00px] md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-900 text-center"
              size="txtPublicSansBold32"
            >
              <>
                Flexible plans for your <br />
                community&#39;s size and needs
              </>
            </Text>
            <Text
              className="text-base text-blue_gray-500 text-center w-auto"
              size="txtPublicSansRegular16"
            >
              Choose your plan and make modern online conversation magic
            </Text>
          </div>
          <div className="relative w-[228px]">
            <PricingSwitch
              className="flex flex-row gap-[9px] items-center justify-between mt-auto w-auto"
              label="MONTHLY"
            />
            <div className="absolute flex flex-row items-start justify-evenly right-[0] top-[0] w-auto">
              <Img
                className="h-12 w-12"
                src="images/img_iconsothericarrowtip.svg"
                alt="iconsothericarr"
              />
              <Text
                className="text-green-A700_01 text-xs uppercase w-auto"
                size="txtPublicSansBold12GreenA70001"
              >
                save 10%
              </Text>
            </div>
          </div>
          <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start max-w-6xl mx-auto w-full">
            <PricingPricingcard className="bg-white-A700 flex flex-1 flex-col gap-10 items-start justify-start p-10 sm:px-5 rounded-bl-[16px] rounded-tl-[16px] w-full" />
            <List
              className="md:flex-1 sm:flex-col flex-row gap-px grid md:grid-cols-1 grid-cols-2 w-[67%] md:w-full"
              orientation="horizontal"
            >
              <PricingPricingcard1 className="bg-white-A700 flex flex-col gap-10 items-start justify-start p-10 sm:px-5 rounded-[16px] shadow-bs3 w-full" />
              <PricingPricingcard2 className="bg-white-A700 flex flex-col gap-10 items-start justify-start p-10 sm:px-5 rounded-[16px] shadow-bs3 w-full" />
            </List>
          </div>
        </div>
      </div>
    </>
  );
};

export default PricingPage;
