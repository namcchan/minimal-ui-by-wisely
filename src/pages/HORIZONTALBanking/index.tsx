import React from "react";

import { Button, Img, Line, List, SelectBox, Text } from "components";
import HORIZONTALAppStacklogo from "components/HORIZONTALAppStacklogo";
import HORIZONTALBankingBankingincome from "components/HORIZONTALBankingBankingincome";
import HORIZONTALBankingColumnaction from "components/HORIZONTALBankingColumnaction";
import HORIZONTALBankingColumnlabelFourteen from "components/HORIZONTALBankingColumnlabelFourteen";
import HORIZONTALBankingColumnrecent from "components/HORIZONTALBankingColumnrecent";
import HORIZONTALBankingColumnthtext from "components/HORIZONTALBankingColumnthtext";
import HORIZONTALBankingColumnunion from "components/HORIZONTALBankingColumnunion";
import HORIZONTALBankingStackOne from "components/HORIZONTALBankingStackOne";
import HORIZONTALBankingStackbgTwo from "components/HORIZONTALBankingStackbgTwo";

const actionOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const HORIZONTALBankingPage: React.FC = () => {
  return (
    <>
      <div className="bg-white-A700 font-publicsans h-[2100px] mx-auto relative w-full">
        <HORIZONTALAppStacklogo
          className="bg-white-A700 flex flex-col h-full items-center justify-start m-auto pb-[1971px] w-full"
          dashboard="images/img_dashboard_blue_gray_500.svg"
          title="App"
          cart="images/img_cart_blue_gray_500.svg"
          title1="E-Commerce"
          icon="images/img_iconsduotoneicanalytics.svg"
          title2="Analytics"
          icon2="images/img_icon_1.svg"
          title4="File"
        />
        <div className="absolute flex flex-col gap-6 h-max inset-[0] items-center justify-end m-auto max-w-[1440px] pb-20 pt-[168px] md:px-10 px-36 sm:px-5 w-full">
          <div className="flex md:flex-col flex-row gap-6 items-start justify-start max-w-6xl w-full">
            <List
              className="md:flex-1 sm:flex-col flex-row gap-6 grid md:grid-cols-1 grid-cols-2 w-[58%] md:w-full"
              orientation="horizontal"
            >
              <HORIZONTALBankingBankingincome className="bg-white-A700 relative rounded-[16px] w-[319px]" />
              <HORIZONTALBankingBankingincome
                className="bg-white-A700 relative rounded-[16px] w-[319px]"
                totalactiveuser="Expenses"
                numberlongone="1,989"
                cursor="images/img_airplane.svg"
                numberpercentone="-6.6%"
                chartarea="images/img_chartarea_orange_900_120x354.png"
              />
            </List>
            <HORIZONTALBankingStackOne
              className="md:h-[260px] h-[276px] relative w-[41%] md:w-full"
              userimage="images/img_img_260x466.png"
            />
          </div>
          <div className="flex md:flex-col flex-row gap-6 items-start justify-start max-w-6xl w-full">
            <div className="flex flex-1 flex-col gap-6 items-start justify-start w-full">
              <HORIZONTALBankingColumnaction
                className="bg-white-A700 flex flex-col items-center justify-start rounded-[16px] shadow-bs4 w-full"
                divider="images/img_divider_blue_gray_300_18x668.svg"
                dividerOne="images/img_divider_blue_gray_300_18x668.svg"
                dividerTwo="images/img_divider_blue_gray_300_18x668.svg"
                dividerThree="images/img_divider_blue_gray_300_18x668.svg"
                dividerFour="images/img_divider_blue_gray_300_18x668.svg"
              />
              <HORIZONTALBankingColumnunion className="bg-white-A700 flex flex-col items-start justify-start rounded-[16px] shadow-bs4 w-full" />
              <HORIZONTALBankingColumnthtext className="bg-white-A700 flex flex-col items-start justify-start rounded-[16px] shadow-bs4 w-full" />
            </div>
            <div className="flex flex-col gap-6 items-start justify-start w-[368px]">
              <HORIZONTALBankingColumnrecent className="bg-gray-100 flex flex-col items-center justify-start pb-6 rounded-[16px] w-full" />
              <HORIZONTALBankingColumnlabelFourteen className="bg-white-A700 flex flex-col items-start justify-start rounded-[16px] shadow-bs4 w-full" />
              <HORIZONTALBankingStackbgTwo className="md:h-[420px] h-[462px] relative rounded-[16px] w-full" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HORIZONTALBankingPage;
