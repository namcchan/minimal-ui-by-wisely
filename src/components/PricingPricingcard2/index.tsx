import React from "react";

import { Button, CheckBox, Img, Text } from "components";

type PricingPricingcard2Props = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  | "premium"
  | "price"
  | "fourhundredninetynine"
  | "fourhundredninetynineOne"
  | "mo"
  | "features"
  | "all"
  | "contactSale"
> &
  Partial<{
    premium: string;
    price: string;
    fourhundredninetynine: string;
    fourhundredninetynineOne: string;
    mo: string;
    features: string;
    all: string;
    contactSale: string;
  }>;

const PricingPricingcard2: React.FC<PricingPricingcard2Props> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col items-center justify-start w-[16%] md:w-full">
          <div className="md:h-12 h-[61px] relative w-full">
            <div className="absolute bottom-[0] md:h-12 h-[54px] inset-x-[0] mx-auto w-full">
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
            <Img
              className="absolute h-12 inset-x-[0] mx-auto top-[0] w-12"
              src="images/img_arrowdown_teal_500.svg"
              alt="arrowdown_Two"
            />
          </div>
        </div>
        <div className="flex flex-col gap-2 items-start justify-start w-auto">
          <Text
            className="text-2xl md:text-[22px] text-blue_gray-900 text-center sm:text-xl w-auto"
            size="txtPublicSansBold24"
          >
            {props?.premium}
          </Text>
          <Text
            className="text-blue_gray-900 text-center text-sm w-auto"
            size="txtPublicSansSemiBold14"
          >
            {props?.price}
          </Text>
        </div>
        <div className="flex flex-row items-center justify-start w-auto">
          <Text
            className="text-2xl md:text-[22px] text-blue_gray-900 text-center sm:text-xl w-full"
            size="txtPublicSansBold24"
          >
            {props?.fourhundredninetynine}
          </Text>
          <Text
            className="text-5xl sm:text-[38px] md:text-[44px] text-blue_gray-900 text-center w-auto"
            size="txtPublicSansExtraBold48"
          >
            {props?.fourhundredninetynineOne}
          </Text>
          <div className="flex flex-col items-center justify-start pl-2 w-auto">
            <Text
              className="text-blue_gray-300 text-sm w-auto"
              size="txtPublicSansRegular14Bluegray300"
            >
              {props?.mo}
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
              {props?.features}
            </Text>
            <Text
              className="text-blue_gray-900 text-sm underline w-auto"
              size="txtPublicSansRegular14"
            >
              {props?.all}
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
          <CheckBox
            className="font-publicsans sm:pr-5 text-blue_gray-900 text-left text-sm"
            inputClassName="mr-[5px]"
            name="issuedevelopmen_One"
            id="issuedevelopmen_One"
            label="Issue Development license"
            shape="square"
            size="xs"
          ></CheckBox>
          <CheckBox
            className="font-publicsans sm:pr-5 text-blue_gray-900 text-left text-sm"
            inputClassName="mr-[5px]"
            name="permissionswork_One"
            id="permissionswork_One"
            label="Permissions & workflows"
            shape="square"
            size="xs"
          ></CheckBox>
        </div>
        <Button
          className="cursor-pointer font-bold font-publicsans h-12 text-[15px] text-center w-full"
          shape="round"
          color="blue_gray_900"
          size="xl"
          variant="fill"
        >
          {props?.contactSale}
        </Button>
      </div>
    </>
  );
};

PricingPricingcard2.defaultProps = {
  premium: "Premium",
  price: "Saving $124 a year",
  fourhundredninetynine: "$",
  fourhundredninetynineOne: "9.99",
  mo: "/ mo",
  features: "Features",
  all: "All",
  contactSale: "Contact Sale",
};

export default PricingPricingcard2;
