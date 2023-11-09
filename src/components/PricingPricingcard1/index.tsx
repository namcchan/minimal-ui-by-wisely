import React from "react";

import { Button, CheckBox, Img, Text } from "components";

type PricingPricingcard1Props = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  | "popularlabel"
  | "starterlabel"
  | "savinglabel"
  | "dollarsign"
  | "priceamount"
  | "monthlylabel"
  | "featureslabel"
  | "alllabel"
  | "choosestarterlabel"
> &
  Partial<{
    popularlabel: string;
    starterlabel: string;
    savinglabel: string;
    dollarsign: string;
    priceamount: string;
    monthlylabel: string;
    featureslabel: string;
    alllabel: string;
    choosestarterlabel: string;
  }>;

const PricingPricingcard1: React.FC<PricingPricingcard1Props> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-row items-center justify-between w-full">
          <div className="flex flex-col items-center justify-start">
            <div className="md:h-12 h-[54px] relative w-full">
              <Img
                className="absolute bottom-[0] h-12 inset-x-[0] mx-auto w-12"
                src="images/img_arrowdown_teal_500.svg"
                alt="arrowdown"
              />
              <Img
                className="absolute h-12 inset-x-[0] mx-auto top-[0] w-12"
                src="images/img_arrowdown_teal_500.svg"
                alt="arrowdown_One"
              />
            </div>
          </div>
          <Button
            className="!text-light_blue-900 cursor-pointer font-bold font-publicsans h-6 min-w-[70px] rounded-md text-center text-xs"
            shape="round"
            color="cyan_A700_28"
            size="xs"
            variant="fill"
          >
            {props?.popularlabel}
          </Button>
        </div>
        <div className="flex flex-col gap-2 items-start justify-start w-auto">
          <Text
            className="text-2xl md:text-[22px] text-blue_gray-900 text-center sm:text-xl w-auto"
            size="txtPublicSansBold24"
          >
            {props?.starterlabel}
          </Text>
          <Text
            className="text-blue_gray-900 text-center text-sm w-auto"
            size="txtPublicSansSemiBold14"
          >
            {props?.savinglabel}
          </Text>
        </div>
        <div className="flex flex-row items-center justify-start w-auto">
          <Text
            className="text-2xl md:text-[22px] text-blue_gray-900 text-center sm:text-xl w-full"
            size="txtPublicSansBold24"
          >
            {props?.dollarsign}
          </Text>
          <Text
            className="text-5xl sm:text-[38px] md:text-[44px] text-blue_gray-900 text-center w-auto"
            size="txtPublicSansExtraBold48"
          >
            {props?.priceamount}
          </Text>
          <div className="flex flex-col items-center justify-start pl-2 w-auto">
            <Text
              className="text-blue_gray-300 text-sm w-auto"
              size="txtPublicSansRegular14Bluegray300"
            >
              {props?.monthlylabel}
            </Text>
          </div>
        </div>
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
              {props?.featureslabel}
            </Text>
            <Text
              className="text-blue_gray-900 text-sm underline w-auto"
              size="txtPublicSansRegular14"
            >
              {props?.alllabel}
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
          <CheckBox
            className="font-publicsans sm:pr-5 text-blue_gray-900 text-left text-sm"
            inputClassName="mr-[5px]"
            name="advancedsecurit_One"
            id="advancedsecurit_One"
            label="Advanced security"
            shape="square"
            size="xs"
          ></CheckBox>
          <CheckBox
            className="font-publicsans sm:pr-5 text-blue_gray-900 text-left text-sm"
            inputClassName="mr-[5px]"
            name="issueescalation_One"
            id="issueescalation_One"
            label="Issue escalation"
            shape="square"
            size="xs"
          ></CheckBox>
        </div>
        <Button
          className="!text-white-A700 cursor-pointer font-bold font-publicsans h-12 text-[15px] text-center w-full"
          shape="round"
          color="teal_500"
          size="xl"
          variant="fill"
        >
          {props?.choosestarterlabel}
        </Button>
      </div>
    </>
  );
};

PricingPricingcard1.defaultProps = {
  popularlabel: "POPULAR",
  starterlabel: "Starter",
  savinglabel: "Saving $24 a year",
  dollarsign: "$",
  priceamount: "4.99",
  monthlylabel: "/ mo",
  featureslabel: "Features",
  alllabel: "All",
  choosestarterlabel: "Choose Starter",
};

export default PricingPricingcard1;
