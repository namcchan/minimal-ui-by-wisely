import React from "react";

import {
  Button,
  CheckBox,
  FloatingInput,
  Img,
  Line,
  List,
  RatingBar,
  Text,
} from "components";
import HomeColumn from "components/HomeColumn";
import HomeColumnimgTwo from "components/HomeColumnimgTwo";
import HomeHomedarkmode from "components/HomeHomedarkmode";
import HomeHomeelements from "components/HomeHomeelements";
import HomeHomehero from "components/HomeHomehero";
import HomeHomeminimal from "components/HomeHomeminimal";
import HomeHomepricing from "components/HomeHomepricing";
import HomeHomethemecolor from "components/HomeHomethemecolor";
import HomeRowinterfacestarteThree from "components/HomeRowinterfacestarteThree";
import HomeStackimgFour from "components/HomeStackimgFour";

const Home1Page: React.FC = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-publicsans items-center justify-start mx-auto w-auto sm:w-full md:w-full">
        <HomeHomehero className="bg-white-A700 flex flex-col h-[1024px] md:h-auto items-center justify-start max-w-[1440px] md:px-10 px-36 sm:px-5 w-full" />
        <HomeHomeminimal className="bg-white-A700 flex flex-col md:gap-10 gap-20 items-center justify-start max-w-[1440px] md:px-10 px-36 sm:px-5 py-[120px] w-full" />
        <HomeHomeelements className="bg-white-A700 flex md:flex-col flex-row gap-10 items-start justify-end max-w-[1440px] md:px-10 px-36 sm:px-5 py-[120px] w-full" />
        <HomeColumnimgTwo className="bg-white-A700 flex flex-col h-[560px] md:h-auto items-center justify-start max-w-[1440px] w-full" />
        <HomeHomedarkmode className="bg-gray-900 flex flex-col md:gap-10 gap-20 items-start justify-start max-w-[1440px] pb-40 pt-[120px] md:px-10 px-36 sm:px-5 w-full" />
        <HomeHomethemecolor className="bg-white-A700 flex flex-col gap-10 items-center justify-start md:px-10 px-36 sm:px-5 py-[120px] w-auto md:w-full" />
        <HomeStackimgFour className="bg-white-A700 md:px-5 py-[120px] relative w-[1440px] md:w-full" />
        <HomeHomepricing className="bg-blue_gray-300_5e flex flex-col md:gap-10 gap-20 items-center justify-center md:px-10 px-36 sm:px-5 py-[120px] w-[1440px] md:w-full" />
        <HomeRowinterfacestarteThree className="bg-white-A700 flex md:flex-col flex-row md:gap-10 items-center justify-between max-w-[1440px] md:px-10 px-36 sm:px-5 py-[120px] w-full" />
        <HomeColumn className="bg-white-A700 flex flex-col items-center justify-center max-w-[1440px] md:px-10 px-36 sm:px-5 rounded-[16px] w-full" />
        <div className="bg-white-A700 flex flex-col gap-2 items-center justify-start max-w-[1440px] py-10 w-full">
          <Img
            className="h-10 md:h-auto object-cover w-10"
            src="images/img_logo.png"
            alt="logo_One"
          />
          <Text
            className="leading-[18.00px] text-blue_gray-900 text-center text-xs"
            size="txtPublicSansRegular12Bluegray900"
          >
            <span className="text-blue_gray-900 font-publicsans font-normal">
              <>
                © All rights reserved
                <br />
                made by{" "}
              </>
            </span>
            <span className="text-teal-500 font-publicsans font-normal">
              minimals.cc
            </span>
          </Text>
        </div>
      </div>
    </>
  );
};

export default Home1Page;
