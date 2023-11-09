import React from "react";

import { Img, SelectBox, Text } from "components";

type ProductCheckoutPaymentColumnstandarddeliverOneProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  | "paymenttitle"
  | "standarddeliverOne"
  | "deliveredonmond"
  | "standarddeliverTwo"
  | "deliveredonmondOne"
  | "label"
  | "standarddeliverThree"
  | "deliveredonmondTwo"
> &
  Partial<{
    paymenttitle: string;
    standarddeliverOne: string;
    deliveredonmond: string;
    standarddeliverTwo: string;
    deliveredonmondOne: string;
    label: string;
    standarddeliverThree: string;
    deliveredonmondTwo: string;
  }>;

const wrapOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const ProductCheckoutPaymentColumnstandarddeliverOne: React.FC<
  ProductCheckoutPaymentColumnstandarddeliverOneProps
> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col items-start justify-start sm:pl-5 pl-6 pr-4 py-6 w-full">
          <div className="flex flex-col items-center justify-start w-full">
            <div className="flex flex-col items-start justify-start w-full">
              <Text
                className="text-blue_gray-900 text-lg w-full"
                size="txtPublicSansBold18Bluegray900"
              >
                {props?.paymenttitle}
              </Text>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-5 items-start justify-start pb-6 sm:px-5 px-6 w-full">
          <div className="border border-blue_gray-300_28 border-solid flex md:flex-col flex-row md:gap-5 items-start justify-start p-5 rounded-lg w-full">
            <div className="flex flex-1 flex-col gap-1 items-start justify-start w-full">
              <Text
                className="text-base text-blue_gray-900 w-full"
                size="txtPublicSansSemiBold16"
              >
                {props?.standarddeliverOne}
              </Text>
              <Text
                className="text-blue_gray-500 text-sm w-full"
                size="txtPublicSansRegular14Bluegray500"
              >
                {props?.deliveredonmond}
              </Text>
            </div>
            <div className="flex md:flex-1 flex-col items-center justify-start w-[6%] md:w-full">
              <Img
                className="h-6 md:h-auto object-cover w-full"
                src="images/img_img_24x35.png"
                alt="img"
              />
            </div>
          </div>
          <div className="border-2 border-blue_gray-900 border-solid flex flex-col items-end justify-start rounded-lg w-full">
            <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start p-5 w-full">
              <div className="flex flex-1 flex-col gap-1 items-start justify-start w-full">
                <Text
                  className="text-base text-blue_gray-900 w-full"
                  size="txtPublicSansSemiBold16"
                >
                  {props?.standarddeliverTwo}
                </Text>
                <Text
                  className="text-blue_gray-500 text-sm w-full"
                  size="txtPublicSansRegular14Bluegray500"
                >
                  {props?.deliveredonmondOne}
                </Text>
              </div>
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
            <div className="flex flex-col gap-5 items-end justify-start pb-5 px-5 w-full">
              <div className="flex flex-col items-start justify-start w-full">
                <SelectBox
                  className="!text-blue_gray-900 font-publicsans h-[54px] rounded-lg text-left text-sm w-full"
                  placeholderClassName="!text-blue_gray-900"
                  indicator={
                    <Img
                      className="h-5 w-5"
                      src="images/img_arrowdown_blue_gray_500.svg"
                      alt="arrow_down"
                    />
                  }
                  isMulti={false}
                  name="wrap"
                  options={wrapOptionsList}
                  isSearchable={false}
                  placeholder="**** **** **** 6789"
                  shape="round"
                  color="blue_gray_300_33"
                  size="md"
                  variant="outline"
                />
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
                  {props?.label}
                </Text>
              </div>
            </div>
          </div>
          <div className="border border-blue_gray-300_28 border-solid flex md:flex-col flex-row md:gap-5 items-start justify-start p-5 rounded-lg w-full">
            <div className="flex flex-1 flex-col gap-1 items-start justify-start w-full">
              <Text
                className="text-base text-blue_gray-900 w-full"
                size="txtPublicSansSemiBold16"
              >
                {props?.standarddeliverThree}
              </Text>
              <Text
                className="text-blue_gray-500 text-sm w-full"
                size="txtPublicSansRegular14Bluegray500"
              >
                {props?.deliveredonmondTwo}
              </Text>
            </div>
            <Img
              className="h-8 w-8"
              src="images/img_iconssolidic_8.svg"
              alt="iconssolidic"
            />
          </div>
        </div>
      </div>
    </>
  );
};

ProductCheckoutPaymentColumnstandarddeliverOne.defaultProps = {
  paymenttitle: "Payment",
  standarddeliverOne: "Pay with Paypal",
  deliveredonmond:
    "You will be redirected to PayPal website to complete your purchase securely.",
  standarddeliverTwo: "Credit / Debit Card",
  deliveredonmondOne: "We support Mastercard, Visa, Discover and Stripe.",
  label: "Add New Card",
  standarddeliverThree: "Cash on Delivery",
  deliveredonmondTwo: "Pay with cash when your order is delivered.",
};

export default ProductCheckoutPaymentColumnstandarddeliverOne;
