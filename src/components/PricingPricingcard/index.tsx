import React from "react";

import { Button, CheckBox, Img, Text } from "components";

type PricingPricingcardProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  | "plantype"
  | "planduration"
  | "planprice"
  | "planfeatures"
  | "planall"
  | "plancurrent"
> &
  Partial<{
    plantype: string;
    planduration: string;
    planprice: string;
    planfeatures: string;
    planall: string;
    plancurrent: string;
  }>;

const PricingPricingcard: React.FC<PricingPricingcardProps> = (props) => {
  return (
    <>
      <div className={props.className}>
        <Img
          className="h-12 w-12"
          src="images/img_arrowdown_teal_500.svg"
          alt="arrowdown"
        />
        <div className="flex flex-col gap-2 items-start justify-start w-auto">
          <Text
            className="text-2xl md:text-[22px] text-blue_gray-900 text-center sm:text-xl w-auto"
            size="txtPublicSansBold24"
          >
            {props?.plantype}
          </Text>
          <Text
            className="text-blue_gray-900 text-center text-sm w-auto"
            size="txtPublicSansSemiBold14"
          >
            {props?.planduration}
          </Text>
        </div>
        <Text
          className="text-5xl sm:text-[38px] md:text-[44px] text-blue_gray-900 text-center w-auto"
          size="txtPublicSansExtraBold48"
        >
          {props?.planprice}
        </Text>
        <Img
          className="h-px w-full"
          src="images/img_divider_blue_gray_300.svg"
          alt="divider"
        />
        <div className="flex flex-col gap-4 items-start justify-start w-full">
          <div className="flex flex-row items-center justify-between w-full">
            <Text
              className="flex-1 text-blue_gray-900 text-xs uppercase w-auto"
              size="txtPublicSansBold12Bluegray900"
            >
              {props?.planfeatures}
            </Text>
            <Text
              className="text-blue_gray-900 text-sm underline w-auto"
              size="txtPublicSansRegular14"
            >
              {props?.planall}
            </Text>
          </div>
          <CheckBox
            className="font-publicsans sm:pr-5 text-blue_gray-900 text-left text-sm"
            inputClassName="mr-[5px]"
            name="3prototypes"
            id="3prototypes"
            label="3 prototypes"
            shape="square"
            size="xs"
          ></CheckBox>
          <CheckBox
            className="font-publicsans sm:pr-5 text-blue_gray-900 text-left text-sm"
            inputClassName="mr-[5px]"
            name="3boards"
            id="3boards"
            label="3 boards"
            shape="square"
            size="xs"
          ></CheckBox>
          <CheckBox
            className="font-publicsans sm:pr-5 text-blue_gray-900 text-left text-sm"
            inputClassName="mr-[5px]"
            name="upto5teammember_One"
            id="upto5teammember_One"
            label="Up to 5 team members"
            shape="square"
            size="xs"
          ></CheckBox>
        </div>
        <Button
          className="!text-blue_gray-300_cc cursor-pointer font-bold font-publicsans h-12 text-[15px] text-center w-full"
          shape="round"
          color="blue_gray_300_33"
          size="xl"
          variant="fill"
        >
          {props?.plancurrent}
        </Button>
      </div>
    </>
  );
};

PricingPricingcard.defaultProps = {
  plantype: "Basic",
  planduration: "Forever",
  planprice: "Free",
  planfeatures: "Features",
  planall: "All",
  plancurrent: "Current Plan",
};

export default PricingPricingcard;
