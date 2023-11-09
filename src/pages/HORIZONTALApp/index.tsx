import React from "react";

import {
  Button,
  Img,
  Input,
  List,
  RatingBar,
  SelectBox,
  Text,
} from "components";
import HORIZONTALAppStacklogo from "components/HORIZONTALAppStacklogo";

const zipcodeOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const HORIZONTALAppPage: React.FC = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-publicsans items-center justify-start mx-auto w-full">
        <HORIZONTALAppStacklogo
          className="bg-white-A700 h-[2080px] sm:h-[2460px] md:h-[6089px] md:px-5 relative w-full"
          cart="images/img_cart_blue_gray_500.svg"
          title1="E-Commerce"
          icon="images/img_iconsduotoneicanalytics.svg"
          title2="Analytics"
          icon1="images/img_icon_blue_gray_500_24x24.svg"
          title3="Banking"
          icon2="images/img_icon_1.svg"
          title4="File"
        />
      </div>
    </>
  );
};

export default HORIZONTALAppPage;
