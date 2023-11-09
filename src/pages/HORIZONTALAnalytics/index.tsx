import React from "react";

import { Button, Img, List, Text } from "components";
import HORIZONTALAnalyticsAnalyticsnews from "components/HORIZONTALAnalyticsAnalyticsnews";
import HORIZONTALAnalyticsAnalyticstask from "components/HORIZONTALAnalyticsAnalyticstask";
import HORIZONTALAnalyticsColumncheckmark from "components/HORIZONTALAnalyticsColumncheckmark";
import HORIZONTALAnalyticsColumncolor from "components/HORIZONTALAnalyticsColumncolor";
import HORIZONTALAnalyticsColumncountry from "components/HORIZONTALAnalyticsColumncountry";
import HORIZONTALAnalyticsColumnfacebook from "components/HORIZONTALAnalyticsColumnfacebook";
import HORIZONTALAnalyticsColumnshape from "components/HORIZONTALAnalyticsColumnshape";
import HORIZONTALAnalyticsColumnstack from "components/HORIZONTALAnalyticsColumnstack";
import HORIZONTALAnalyticsStackbg from "components/HORIZONTALAnalyticsStackbg";
import HORIZONTALAppStacklogo from "components/HORIZONTALAppStacklogo";

const HORIZONTALAnalyticsPage: React.FC = () => {
  const horizontalAnalyticsStackbgPropList = [
    {},
    {
      numbershortrand: "89.2k",
      iconsglassicgla: "images/img_iconsglassicglassusers.png",
      label: "New Users",
    },
    {
      numbershortrand: "47.9k",
      iconsglassicgla: "images/img_iconsglassicglassbuy.png",
      label: "Item Orders",
    },
    {
      numbershortrand: "86.6k",
      iconsglassicgla: "images/img_iconsglassicglassmessage.png",
      label: "Messages",
    },
  ];

  return (
    <>
      <div className="bg-white-A700 font-publicsans h-[2400px] mx-auto relative w-full">
        <HORIZONTALAppStacklogo
          className="bg-white-A700 flex flex-col h-full items-center justify-start m-auto pb-[2271px] w-full"
          dashboard="images/img_dashboard_blue_gray_500.svg"
          title="App"
          cart="images/img_cart_blue_gray_500.svg"
          title1="E-Commerce"
          icon1="images/img_icon_blue_gray_500_24x24.svg"
          title3="Banking"
          icon2="images/img_icon_1.svg"
          title4="File"
        />
        <div className="absolute flex flex-col gap-6 h-max inset-[0] items-center justify-end m-auto max-w-[1440px] pb-20 pt-[168px] md:px-10 px-36 sm:px-5 w-full">
          <div className="flex flex-col items-start justify-start max-w-6xl pb-4 w-full">
            <Text
              className="text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl w-auto"
              size="txtPublicSansBold24"
            >
              Hi, Welcome back 👋
            </Text>
          </div>
          <List
            className="sm:flex-col flex-row gap-6 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-start max-w-6xl w-full"
            orientation="horizontal"
          >
            {horizontalAnalyticsStackbgPropList.map((props, index) => (
              <React.Fragment key={`HORIZONTALAnalyticsStackbg${index}`}>
                <HORIZONTALAnalyticsStackbg
                  className="bg-white-A700 py-10 relative rounded-[16px] w-full"
                  {...props}
                />
              </React.Fragment>
            ))}
          </List>
          <div className="flex md:flex-col flex-row gap-6 items-start justify-start max-w-6xl w-full">
            <HORIZONTALAnalyticsColumncolor
              className="bg-white-A700 flex flex-1 flex-col items-start justify-start rounded-[16px] shadow-bs4 w-full"
              chartarea="images/img_chartarea_amber_a700_150x728.png"
              divider="images/img_divider_blue_gray_300_18x668.svg"
              dividerOne="images/img_divider_blue_gray_300_18x668.svg"
              dividerTwo="images/img_divider_blue_gray_300_18x668.svg"
              dividerThree="images/img_divider_blue_gray_300_18x668.svg"
              dividerFour="images/img_divider_blue_gray_300_18x668.svg"
            />
            <HORIZONTALAnalyticsColumnshape className="bg-white-A700 flex flex-col gap-10 items-center justify-start rounded-[16px] shadow-bs4 w-[368px]" />
          </div>
          <div className="flex md:flex-col flex-row gap-6 items-start justify-start max-w-6xl w-full">
            <HORIZONTALAnalyticsColumncountry
              className="bg-white-A700 flex flex-1 flex-col items-center justify-start rounded-[16px] shadow-bs4 w-full"
              dividerFive="images/img_divider_blue_gray_300_18x615.svg"
              dividerSix="images/img_divider_blue_gray_300_18x615.svg"
              dividerSeven="images/img_divider_blue_gray_300_18x615.svg"
              dividerEight="images/img_divider_blue_gray_300_18x615.svg"
              dividerNine="images/img_divider_blue_gray_300_18x615.svg"
            />
            <HORIZONTALAnalyticsColumnstack className="bg-white-A700 flex flex-col gap-10 items-center justify-start rounded-[16px] shadow-bs4 w-[368px]" />
          </div>
          <div className="flex md:flex-col flex-row gap-6 items-start justify-start max-w-6xl w-full">
            <HORIZONTALAnalyticsAnalyticsnews className="bg-white-A700 flex flex-1 flex-col items-start justify-start rounded-[16px] shadow-bs4 w-full" />
            <HORIZONTALAnalyticsColumncheckmark className="bg-white-A700 flex flex-col items-center justify-start rounded-[16px] shadow-bs4 w-[368px]" />
          </div>
          <div className="flex md:flex-col flex-row gap-6 items-start justify-start max-w-6xl w-full">
            <HORIZONTALAnalyticsColumnfacebook className="bg-white-A700 flex flex-col items-center justify-start rounded-[16px] shadow-bs4 w-[368px]" />
            <HORIZONTALAnalyticsAnalyticstask className="bg-white-A700 flex flex-1 flex-col items-start justify-start rounded-[16px] shadow-bs4 w-full" />
          </div>
        </div>
      </div>
    </>
  );
};

export default HORIZONTALAnalyticsPage;
