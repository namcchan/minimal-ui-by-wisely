import React from "react";

import { Button, Text } from "components";

type HORIZONTALEcommerceColumnyourcurrentbalaOneProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  | "yourcurrentbalaOne"
  | "userbalance"
  | "yourcurrentbalaTwo"
  | "ordertotal"
  | "sentamount"
  | "earning"
  | "sentamountOne"
  | "refunded"
  | "requestlabel"
  | "transferlabel"
> &
  Partial<{
    yourcurrentbalaOne: string;
    userbalance: string;
    yourcurrentbalaTwo: string;
    ordertotal: string;
    sentamount: string;
    earning: string;
    sentamountOne: string;
    refunded: string;
    requestlabel: string;
    transferlabel: string;
  }>;

const HORIZONTALEcommerceColumnyourcurrentbalaOne: React.FC<
  HORIZONTALEcommerceColumnyourcurrentbalaOneProps
> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-2 items-start justify-start w-full">
          <Text
            className="text-blue_gray-900 text-sm w-auto"
            size="txtPublicSansSemiBold14"
          >
            {props?.yourcurrentbalaOne}
          </Text>
          <Text
            className="md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-900 w-auto"
            size="txtPublicSansBold32"
          >
            {props?.userbalance}
          </Text>
        </div>
        <div className="flex flex-row items-center justify-between w-full">
          <Text
            className="text-blue_gray-500 text-sm w-auto"
            size="txtPublicSansRegular14Bluegray500"
          >
            {props?.yourcurrentbalaTwo}
          </Text>
          <Text
            className="text-blue_gray-900 text-right text-sm w-auto"
            size="txtPublicSansRegular14"
          >
            {props?.ordertotal}
          </Text>
        </div>
        <div className="flex flex-row items-center justify-between w-full">
          <Text
            className="text-blue_gray-500 text-sm w-auto"
            size="txtPublicSansRegular14Bluegray500"
          >
            {props?.sentamount}
          </Text>
          <Text
            className="text-blue_gray-900 text-right text-sm w-auto"
            size="txtPublicSansRegular14"
          >
            {props?.earning}
          </Text>
        </div>
        <div className="flex flex-row items-center justify-between w-full">
          <Text
            className="text-blue_gray-500 text-sm w-auto"
            size="txtPublicSansRegular14Bluegray500"
          >
            {props?.sentamountOne}
          </Text>
          <Text
            className="text-blue_gray-900 text-right text-sm w-auto"
            size="txtPublicSansRegular14"
          >
            {props?.refunded}
          </Text>
        </div>
        <div className="flex flex-row gap-3 items-center justify-center w-full">
          <Button
            className="!text-blue_gray-900 cursor-pointer flex-1 font-bold font-publicsans h-9 text-center text-sm w-full"
            shape="round"
            color="amber_A700"
            size="md"
            variant="fill"
          >
            {props?.requestlabel}
          </Button>
          <Button
            className="!text-white-A700 cursor-pointer flex-1 font-bold font-publicsans h-9 text-center text-sm w-full"
            shape="round"
            color="teal_500"
            size="md"
            variant="fill"
          >
            {props?.transferlabel}
          </Button>
        </div>
      </div>
    </>
  );
};

HORIZONTALEcommerceColumnyourcurrentbalaOne.defaultProps = {
  yourcurrentbalaOne: "Your Current Balance",
  userbalance: "$18,765",
  yourcurrentbalaTwo: "Order Total",
  ordertotal: "$28,765",
  sentamount: "Earning",
  earning: "$2,765",
  sentamountOne: "Refunded",
  refunded: "-$2,765",
  requestlabel: "Request",
  transferlabel: "Transfer",
};

export default HORIZONTALEcommerceColumnyourcurrentbalaOne;
