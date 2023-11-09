import React from "react";

import { Img, List, Text } from "components";

type ProductCheckoutPaymentColumncutProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  | "deliverytitle"
  | "standarddelivery"
  | "standardprice"
  | "standardduration"
  | "fastdelivery"
  | "fastprice"
  | "fastduration"
  | "expressdelivery"
  | "expressprice"
  | "expressduration"
> &
  Partial<{
    deliverytitle: string;
    standarddelivery: string;
    standardprice: string;
    standardduration: string;
    fastdelivery: string;
    fastprice: string;
    fastduration: string;
    expressdelivery: string;
    expressprice: string;
    expressduration: string;
  }>;

const ProductCheckoutPaymentColumncut: React.FC<
  ProductCheckoutPaymentColumncutProps
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
                {props?.deliverytitle}
              </Text>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-5 items-center justify-start pb-6 sm:px-5 px-6 w-full">
          <List
            className="sm:flex-col flex-row gap-4 grid md:grid-cols-1 grid-cols-2 justify-center w-full"
            orientation="horizontal"
          >
            <div className="bg-white-A700 border border-blue_gray-300_28 border-solid flex flex-1 flex-row gap-4 items-start justify-start p-5 rounded-lg w-full">
              <Img
                className="h-8 w-8"
                src="images/img_cut_blue_gray_900.svg"
                alt="cut"
              />
              <div className="flex flex-1 flex-col gap-1 items-start justify-start w-full">
                <div className="flex flex-row items-center justify-between w-full">
                  <Text
                    className="flex-1 text-base text-blue_gray-900 w-auto"
                    size="txtPublicSansSemiBold16"
                  >
                    {props?.standarddelivery}
                  </Text>
                  <Text
                    className="flex-1 text-blue_gray-900 text-lg text-right w-auto"
                    size="txtPublicSansBold18Bluegray900"
                  >
                    {props?.standardprice}
                  </Text>
                </div>
                <Text
                  className="text-blue_gray-500 text-sm w-full"
                  size="txtPublicSansRegular14Bluegray500"
                >
                  {props?.standardduration}
                </Text>
              </div>
            </div>
            <div className="bg-white-A700 border-2 border-blue_gray-900 border-solid flex flex-1 flex-row gap-4 items-start justify-start p-5 rounded-lg w-full">
              <Img
                className="h-8 w-8"
                src="images/img_iconssolidic_blue_gray_900_32x32.svg"
                alt="iconssolidic"
              />
              <div className="flex flex-1 flex-col gap-1 items-start justify-start w-full">
                <div className="flex flex-row items-center justify-between w-full">
                  <Text
                    className="flex-1 text-base text-blue_gray-900 w-auto"
                    size="txtPublicSansSemiBold16"
                  >
                    {props?.fastdelivery}
                  </Text>
                  <Text
                    className="flex-1 text-blue_gray-900 text-lg text-right w-auto"
                    size="txtPublicSansBold18Bluegray900"
                  >
                    {props?.fastprice}
                  </Text>
                </div>
                <Text
                  className="text-blue_gray-500 text-sm w-full"
                  size="txtPublicSansRegular14Bluegray500"
                >
                  {props?.fastduration}
                </Text>
              </div>
            </div>
          </List>
          <div className="flex flex-col items-start justify-center w-full">
            <div className="bg-white-A700 border border-blue_gray-300_28 border-solid flex flex-row gap-4 items-start justify-start p-5 rounded-lg w-full">
              <Img
                className="h-8 w-8"
                src="images/img_volume_blue_gray_900_32x32.svg"
                alt="volume"
              />
              <div className="flex flex-1 flex-col gap-1 items-start justify-start w-full">
                <div className="flex flex-row items-center justify-between w-full">
                  <Text
                    className="flex-1 text-base text-blue_gray-900 w-auto"
                    size="txtPublicSansSemiBold16"
                  >
                    {props?.expressdelivery}
                  </Text>
                  <Text
                    className="flex-1 text-blue_gray-900 text-lg text-right w-auto"
                    size="txtPublicSansBold18Bluegray900"
                  >
                    {props?.expressprice}
                  </Text>
                </div>
                <Text
                  className="text-blue_gray-500 text-sm w-full"
                  size="txtPublicSansRegular14Bluegray500"
                >
                  {props?.expressduration}
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

ProductCheckoutPaymentColumncut.defaultProps = {
  deliverytitle: "Delivery",
  standarddelivery: "Free",
  standardprice: "$0",
  standardduration: "5-7 Days delivery",
  fastdelivery: "Standard",
  fastprice: "$10",
  fastduration: "3-5 Days delivery",
  expressdelivery: "Express",
  expressprice: "$20",
  expressduration: "2-3 Days delivery",
};

export default ProductCheckoutPaymentColumncut;
