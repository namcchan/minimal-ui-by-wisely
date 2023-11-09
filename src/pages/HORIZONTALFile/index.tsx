import React from "react";

import { Button, Img, List, SelectBox, Text } from "components";
import HORIZONTALAppStacklogo from "components/HORIZONTALAppStacklogo";

const actionOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const HORIZONTALFilePage: React.FC = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-publicsans items-center justify-start mx-auto w-full">
        <HORIZONTALAppStacklogo
          className="bg-white-A700 h-[1700px] sm:h-[2205px] md:h-[4146px] md:px-5 relative w-full"
          dashboard="images/img_dashboard_blue_gray_500.svg"
          title="App"
          cart="images/img_cart_blue_gray_500.svg"
          title1="E-Commerce"
          icon="images/img_iconsduotoneicanalytics.svg"
          title2="Analytics"
          icon1="images/img_icon_blue_gray_500_24x24.svg"
          title3="Banking"
        />
      </div>
    </>
  );
};

export default HORIZONTALFilePage;
