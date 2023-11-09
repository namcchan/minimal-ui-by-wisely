import React from "react";

import { CheckBox, FloatingInput, Img, Radio, Text } from "components";

type PaymentsPricingpayment1Props = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "paymentmethodtext" | "addnewcardtext"
> &
  Partial<{ paymentmethodtext: string; addnewcardtext: string }>;

const PaymentsPricingpayment1: React.FC<PaymentsPricingpayment1Props> = (
  props,
) => {
  return (
    <>
      <div className={props.className}>
        <Text
          className="text-blue_gray-900 text-lg w-auto"
          size="txtPublicSansBold18Bluegray900"
        >
          {props?.paymentmethodtext}
        </Text>
        <div className="flex flex-col gap-6 items-start justify-start w-full">
          <div className="bg-white-A700 border border-blue_gray-300_28 border-solid flex flex-row items-center justify-between p-5 rounded-lg w-full">
            <Radio
              value="Paypal"
              className="font-publicsans font-semibold text-blue_gray-900 text-left text-sm"
              inputClassName="mr-[5px]"
              checked={false}
              name="label"
              label="Paypal"
              id="Paypal"
            ></Radio>
            <div className="flex flex-col items-center justify-start">
              <Img
                className="h-6 md:h-auto object-cover w-full"
                src="images/img_img_24x35.png"
                alt="img"
              />
            </div>
          </div>
          <div className="bg-white-A700 border-2 border-blue_gray-900 border-solid flex flex-col relative rounded-lg w-full">
            <div className="flex flex-1 flex-row items-center justify-between mt-[-NaNpx] mx-auto p-5 w-full z-[1]">
              <CheckBox
                className="font-publicsans font-semibold text-blue_gray-900 text-left text-sm"
                inputClassName="mr-[5px]"
                name="label_One"
                id="label_One"
                label="Creadit Card"
                shape="square"
                size="xs"
              ></CheckBox>
              <div className="flex flex-row gap-2 items-start justify-start w-auto">
                <div className="flex flex-col items-center justify-start w-[45%]">
                  <Img
                    className="h-6 md:h-auto object-cover w-full"
                    src="images/img_img_4.png"
                    alt="img_One"
                  />
                </div>
                <div className="flex flex-col items-center justify-start w-[45%]">
                  <Img
                    className="h-6 md:h-auto object-cover w-full"
                    src="images/img_img_5.png"
                    alt="img_Two"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-6 items-end justify-start mt-[-7.9px] mx-auto pb-5 px-5 w-full z-[1]">
              <div className="flex flex-col items-start justify-start w-full">
                <FloatingInput
                  wrapClassName="bg-transparent border border-blue_gray-300_33 border-solid flex pl-3.5 pr-[35px] py-[18px] rounded-lg top-[0] w-full"
                  className="font-publicsans p-0 placeholder:bg-white-A700 placeholder:left-3.5 placeholder:text-blue_gray-500 placeholder:top-[0] sm:pr-5 text-blue_gray-900 text-left text-sm w-full"
                  name="value"
                  labelClasses="bg-white-A700 left-3.5 top-[0] text-blue_gray-500"
                  focusedClasses="translate-y-[19px] scale-[1]"
                  wrapperClasses="w-full top-[0]"
                  labelText="Cards"
                  defaultText="**** **** **** 5678 - Opi…"
                  suffix={
                    <Img
                      className="top-[0] my-auto"
                      src="images/img_arrowdown_blue_gray_500.svg"
                      alt="arrow_down"
                    />
                  }
                ></FloatingInput>
              </div>
              <div className="flex flex-row gap-2 h-[30px] md:h-auto items-center justify-center px-1 rounded-lg w-auto">
                <Img
                  className="h-[18px] w-[18px]"
                  src="images/img_plus.svg"
                  alt="plus"
                />
                <Text
                  className="text-[13px] text-teal-500 w-auto"
                  size="txtPublicSansBold13Teal500"
                >
                  {props?.addnewcardtext}
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

PaymentsPricingpayment1.defaultProps = {
  paymentmethodtext: "Payment Method",
  addnewcardtext: "Add New Card",
};

export default PaymentsPricingpayment1;
