import React from "react";

import { Button, CheckBox, Img, Text } from "components";

type PaymentsPricingpayment2Props = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  | "summary"
  | "subscriptiontype"
  | "premiumtype"
  | "billedmonthly"
  | "fourhundredninetynine"
  | "price"
  | "mo"
  | "totalbilled"
  | "totalprice"
  | "plusapplicable"
  | "labelFour"
  | "secureencryptedpayment"
> &
  Partial<{
    summary: string;
    subscriptiontype: string;
    premiumtype: string;
    billedmonthly: string;
    fourhundredninetynine: string;
    price: string;
    mo: string;
    totalbilled: string;
    totalprice: string;
    plusapplicable: string;
    labelFour: string;
    secureencryptedpayment: string;
  }>;

const PaymentsPricingpayment2: React.FC<PaymentsPricingpayment2Props> = (
  props,
) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col items-center justify-start">
          <Text
            className="text-blue_gray-900 text-lg w-full"
            size="txtPublicSansBold18Bluegray900"
          >
            {props?.summary}
          </Text>
        </div>
        <div className="flex flex-col gap-2 items-start justify-start py-10 w-full">
          <div className="flex flex-col gap-5 items-end justify-start w-full">
            <div className="flex flex-row items-center justify-between w-full">
              <Text
                className="flex-1 text-blue_gray-500 text-sm w-auto"
                size="txtPublicSansRegular14Bluegray500"
              >
                {props?.subscriptiontype}
              </Text>
              <Button
                className="!text-red-900 cursor-pointer font-bold font-publicsans h-6 min-w-[71px] rounded-md text-center text-xs"
                shape="round"
                color="deep_orange_500_28"
                size="xs"
                variant="fill"
              >
                {props?.premiumtype}
              </Button>
            </div>
            <div className="flex flex-row gap-[9px] items-center justify-start w-full">
              <Text
                className="flex-1 text-blue_gray-500 text-sm w-auto"
                size="txtPublicSansRegular14Bluegray500"
              >
                {props?.billedmonthly}
              </Text>
              <Img
                className="h-[38px] w-[33px]"
                src="images/img_switchcontainer.svg"
                alt="switchcontainer"
              />
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
                {props?.price}
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
              src="images/img_divider_blue_gray_300_1x288.svg"
              alt="divider"
            />
            <div className="flex flex-row items-center justify-between w-full">
              <Text
                className="flex-1 text-base text-blue_gray-900 w-auto"
                size="txtPublicSansSemiBold16"
              >
                {props?.totalbilled}
              </Text>
              <Text
                className="text-base text-blue_gray-900 w-auto"
                size="txtPublicSansSemiBold16"
              >
                {props?.totalprice}
              </Text>
            </div>
            <Img
              className="h-px w-full"
              src="images/img_divider_blue_gray_300_1x288.svg"
              alt="divider_One"
            />
          </div>
          <Text
            className="text-blue_gray-500 text-xs w-full"
            size="txtPublicSansRegular12"
          >
            {props?.plusapplicable}
          </Text>
        </div>
        <div className="bg-blue_gray-900 flex flex-col h-12 md:h-auto items-center justify-center px-4 rounded-lg w-full">
          {!!props?.labelFour ? (
            <Text
              className="text-[15px] text-white-A700 w-auto"
              size="txtPublicSansBold15"
            >
              {props?.labelFour}
            </Text>
          ) : null}
        </div>
        <div className="flex flex-col gap-2 items-center justify-start pt-6 w-full">
          <CheckBox
            className="font-publicsans font-semibold text-blue_gray-900 text-left text-sm"
            inputClassName="mr-[5px]"
            name="securecreditcar_One"
            id="securecreditcar_One"
            label="Secure credit card payment"
            shape="square"
            size="xs"
          ></CheckBox>
          <Text
            className="text-blue_gray-500 text-center text-xs w-auto"
            size="txtPublicSansRegular12"
          >
            {props?.secureencryptedpayment}
          </Text>
        </div>
      </div>
    </>
  );
};

PaymentsPricingpayment2.defaultProps = {
  summary: "Summary",
  subscriptiontype: "Subscription",
  premiumtype: "PREMIUM",
  billedmonthly: "Billed Monthly",
  fourhundredninetynine: "$",
  price: "9.99",
  mo: "/ mo",
  totalbilled: "Total Billed",
  totalprice: "$9.99*",
  plusapplicable: "* Plus applicable taxes",
  secureencryptedpayment: "This is a secure 128-bit SSL encrypted payment",
};

export default PaymentsPricingpayment2;
