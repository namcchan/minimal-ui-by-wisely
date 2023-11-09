import React from "react";

import { Button, Img, List, SelectBox, Text } from "components";
import HORIZONTALAppStacklogo from "components/HORIZONTALAppStacklogo";
import HORIZONTALEcommerceAppwelcome from "components/HORIZONTALEcommerceAppwelcome";
import HORIZONTALEcommerceColumn from "components/HORIZONTALEcommerceColumn";
import HORIZONTALEcommerceColumnimgproductsthree from "components/HORIZONTALEcommerceColumnimgproductsthree";
import HORIZONTALEcommerceColumnstroke from "components/HORIZONTALEcommerceColumnstroke";
import HORIZONTALEcommerceColumnthtext from "components/HORIZONTALEcommerceColumnthtext";
import HORIZONTALEcommerceColumntotalprofit from "components/HORIZONTALEcommerceColumntotalprofit";
import HORIZONTALEcommerceColumnyourcurrentbalaOne from "components/HORIZONTALEcommerceColumnyourcurrentbalaOne";
import HORIZONTALEcommerceColumnzipcode from "components/HORIZONTALEcommerceColumnzipcode";
import HORIZONTALEcommerceEcommercecarou from "components/HORIZONTALEcommerceEcommercecarou";

const zipcodeOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const HORIZONTALEcommercePage: React.FC = () => {
  const horizontalEcommerceColumnPropList = [
    {},
    {
      numberlongrand: "48,951",
      productsold: "Total Balance",
      numberpercentra: "-2.4%",
    },
    {
      numberlongrand: "28,971",
      productsold: "Sales Profit",
      numberpercentra: "+9.4%",
    },
  ];

  return (
    <>
      <div className="bg-white-A700 font-publicsans h-[2000px] mx-auto relative w-full">
        <HORIZONTALAppStacklogo
          className="bg-white-A700 flex flex-col h-full items-center justify-start m-auto pb-[1871px] w-full"
          dashboard="images/img_dashboard_blue_gray_500.svg"
          title="App"
          icon="images/img_iconsduotoneicanalytics.svg"
          title2="Analytics"
          icon1="images/img_icon_blue_gray_500_24x24.svg"
          title3="Banking"
          icon2="images/img_icon_1.svg"
          title4="File"
        />
        <div className="absolute flex flex-col gap-6 h-max inset-[0] items-center justify-end m-auto max-w-[1440px] pb-20 pt-[168px] md:px-10 px-36 sm:px-5 w-full">
          <div className="flex md:flex-col flex-row gap-6 items-start justify-start max-w-6xl w-full">
            <HORIZONTALEcommerceAppwelcome
              className="sm:pr-5 pr-6 relative rounded-[16px] w-full"
              welcomebackfabiOne={
                <>
                  Congratulations
                  <br />
                  Fabiana Capmany !
                </>
              }
              ifyouaregoingtoOne={
                <>
                  Best seller of the month
                  <br />
                  You have done 57.6% more sales today.
                </>
              }
            />
            <HORIZONTALEcommerceEcommercecarou className="flex md:flex-1 flex-col items-center justify-start rounded-[16px] w-[32%] md:w-full" />
          </div>
          <List
            className="sm:flex-col flex-row gap-6 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-start max-w-6xl w-full"
            orientation="horizontal"
          >
            {horizontalEcommerceColumnPropList.map((props, index) => (
              <React.Fragment key={`HORIZONTALEcommerceColumn${index}`}>
                <HORIZONTALEcommerceColumn
                  className="bg-white-A700 flex flex-1 flex-col items-start justify-start p-6 sm:px-5 rounded-[16px] shadow-bs4 w-full"
                  {...props}
                />
              </React.Fragment>
            ))}
          </List>
          <div className="flex md:flex-col flex-row gap-6 items-start justify-start max-w-6xl w-full">
            <HORIZONTALEcommerceColumnstroke className="bg-white-A700 flex flex-col gap-10 items-center justify-start rounded-[16px] shadow-bs4 w-[368px]" />
            <HORIZONTALEcommerceColumnzipcode
              className="bg-white-A700 flex flex-1 flex-col items-start justify-start rounded-[16px] shadow-bs4 w-full"
              divider="images/img_divider_blue_gray_300_18x668.svg"
              dividerOne="images/img_divider_blue_gray_300_18x668.svg"
              dividerTwo="images/img_divider_blue_gray_300_18x668.svg"
              dividerThree="images/img_divider_blue_gray_300_18x668.svg"
              dividerFour="images/img_divider_blue_gray_300_18x668.svg"
              chartarea="images/img_chartarea_amber_a700_160x648.png"
            />
          </div>
          <div className="flex md:flex-col flex-row gap-6 items-start justify-start max-w-6xl w-full">
            <HORIZONTALEcommerceColumntotalprofit className="bg-white-A700 flex flex-1 flex-col items-start justify-start rounded-[16px] shadow-bs4 w-full" />
            <HORIZONTALEcommerceColumnyourcurrentbalaOne className="bg-white-A700 flex flex-col gap-4 items-start justify-start p-6 sm:px-5 rounded-[16px] shadow-bs4 w-[368px]" />
          </div>
          <div className="flex md:flex-col flex-row gap-6 items-start justify-start max-w-6xl w-full">
            <HORIZONTALEcommerceColumnthtext className="bg-white-A700 flex flex-1 flex-col items-start justify-start rounded-[16px] shadow-bs4 w-full" />
            <HORIZONTALEcommerceColumnimgproductsthree className="bg-white-A700 flex flex-col items-center justify-start rounded-[16px] shadow-bs4 w-[368px]" />
          </div>
        </div>
      </div>
    </>
  );
};

export default HORIZONTALEcommercePage;
