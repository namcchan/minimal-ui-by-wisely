import React from "react";

import { Input, Text } from "components";

type PaymentsPricingpaymentProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "billingaddress" | "value" | "valueOne"
> &
  Partial<{ billingaddress: string; value: string; valueOne: string }>;

const PaymentsPricingpayment: React.FC<PaymentsPricingpaymentProps> = (
  props,
) => {
  return (
    <>
      <div className={props.className}>
        <Text
          className="text-blue_gray-900 text-lg w-auto"
          size="txtPublicSansBold18Bluegray900"
        >
          {props?.billingaddress}
        </Text>
        <div className="flex flex-col gap-6 items-start justify-start w-full">
          <div className="flex flex-col items-start justify-start w-full">
            <Input
              name="wrap"
              placeholder="Person name"
              className="!placeholder:text-blue_gray-300 !text-blue_gray-300 font-publicsans md:h-auto p-0 sm:h-auto text-left text-sm w-full"
              wrapClassName="w-full"
              shape="round"
              color="blue_gray_300_33"
              size="sm"
              variant="outline"
            ></Input>
          </div>
          <div className="flex flex-col items-start justify-start w-full">
            <div className="border border-blue_gray-300_33 border-solid flex flex-col h-[54px] md:h-auto items-center justify-start px-3.5 rounded-lg w-full">
              {!!props?.value ? (
                <Text
                  className="text-blue_gray-300 text-sm w-auto"
                  size="txtPublicSansRegular14Bluegray300"
                >
                  {props?.value}
                </Text>
              ) : null}
            </div>
          </div>
          <div className="flex flex-col items-start justify-start w-full">
            <Input
              name="wrap_One"
              placeholder="Email"
              className="!placeholder:text-blue_gray-300 !text-blue_gray-300 font-publicsans md:h-auto p-0 sm:h-auto text-left text-sm w-full"
              wrapClassName="w-full"
              shape="round"
              color="blue_gray_300_33"
              size="sm"
              variant="outline"
            ></Input>
          </div>
          <div className="flex flex-col items-start justify-start w-full">
            <div className="border border-blue_gray-300_33 border-solid flex flex-col h-[54px] md:h-auto items-center justify-start px-3.5 rounded-lg w-full">
              {!!props?.valueOne ? (
                <Text
                  className="text-blue_gray-300 text-sm w-auto"
                  size="txtPublicSansRegular14Bluegray300"
                >
                  {props?.valueOne}
                </Text>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

PaymentsPricingpayment.defaultProps = { billingaddress: "Billing Address" };

export default PaymentsPricingpayment;
