import React from "react";

import { Img, List, Text } from "components";

type HORIZONTALEcommerceColumnimgproductsthreeProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  | "listtitle"
  | "producttitlethree"
  | "price"
  | "priceOne"
  | "producttitlefour"
  | "price1"
  | "producttitlefive"
  | "price2"
  | "priceone1"
  | "producttitletwo"
  | "price3"
  | "producttitleone"
  | "price4"
> &
  Partial<{
    listtitle: string;
    producttitlethree: string;
    price: string;
    priceOne: string;
    producttitlefour: string;
    price1: string;
    producttitlefive: string;
    price2: string;
    priceone1: string;
    producttitletwo: string;
    price3: string;
    producttitleone: string;
    price4: string;
  }>;

const HORIZONTALEcommerceColumnimgproductsthree: React.FC<
  HORIZONTALEcommerceColumnimgproductsthreeProps
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
                {props?.listtitle}
              </Text>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-start pb-6 sm:px-5 px-6 w-full">
          <List
            className="flex flex-col gap-6 items-center pt-36 w-full"
            orientation="vertical"
          >
            <div className="flex flex-1 flex-row gap-4 items-center justify-start w-full">
              <Img
                className="h-12 md:h-auto object-cover rounded-[12px] w-12"
                src="images/img_imgproducts3.png"
                alt="imgproductsThree"
              />
              <div className="flex flex-1 flex-col items-start justify-start w-full">
                <Text
                  className="text-blue_gray-900 text-sm w-full"
                  size="txtPublicSansSemiBold14"
                >
                  {props?.producttitlethree}
                </Text>
                <div className="flex flex-row gap-0.5 items-center justify-start w-auto">
                  <Text
                    className="text-blue_gray-500 text-sm w-auto"
                    size="txtPublicSansRegular14Bluegray500"
                  >
                    {props?.price}
                  </Text>
                  <Text
                    className="text-deep_orange-500 text-sm w-auto"
                    size="txtPublicSansRegular14Deeporange500"
                  >
                    {props?.priceOne}
                  </Text>
                </div>
              </div>
              <Img
                className="h-[18px] max-h-[18px]"
                src="images/img_signal_white_a700.svg"
                alt="signal"
              />
            </div>
            <div className="flex flex-1 flex-row gap-4 items-center justify-start w-full">
              <Img
                className="h-12 md:h-auto object-cover rounded-[12px] w-12"
                src="images/img_imgproducts2.png"
                alt="imgproductsTwo"
              />
              <div className="flex flex-1 flex-col gap-[5px] items-start justify-start w-full">
                <Text
                  className="text-blue_gray-900 text-sm w-full"
                  size="txtPublicSansSemiBold14"
                >
                  {props?.producttitlefour}
                </Text>
                <Text
                  className="text-blue_gray-500 text-sm w-auto"
                  size="txtPublicSansRegular14Bluegray500"
                >
                  {props?.price1}
                </Text>
              </div>
              <Img
                className="h-[18px] w-[18px]"
                src="images/img_settings_white_a700.svg"
                alt="settings"
              />
            </div>
            <div className="flex flex-1 flex-row gap-4 items-center justify-start w-full">
              <Img
                className="h-12 md:h-auto object-cover rounded-[12px] w-12"
                src="images/img_imgproducts1.png"
                alt="imgproductsOne"
              />
              <div className="flex flex-1 flex-col items-start justify-start w-full">
                <Text
                  className="text-blue_gray-900 text-sm w-full"
                  size="txtPublicSansSemiBold14"
                >
                  {props?.producttitlefive}
                </Text>
                <div className="flex flex-row gap-0.5 items-center justify-start w-auto">
                  <Text
                    className="text-blue_gray-500 text-sm w-auto"
                    size="txtPublicSansRegular14Bluegray500"
                  >
                    {props?.price2}
                  </Text>
                  <Text
                    className="text-deep_orange-500 text-sm w-auto"
                    size="txtPublicSansRegular14Deeporange500"
                  >
                    {props?.priceone1}
                  </Text>
                </div>
              </div>
              <Img
                className="h-[18px] max-h-[18px]"
                src="images/img_signal_white_a700_18x42.svg"
                alt="signal"
              />
            </div>
            <div className="flex flex-1 flex-row gap-4 items-center justify-start w-full">
              <Img
                className="h-12 md:h-auto object-cover rounded-[12px] w-12"
                src="images/img_imgproducts4_48x48.png"
                alt="imgproductsFour"
              />
              <div className="flex flex-1 flex-col items-start justify-start w-full">
                <Text
                  className="text-blue_gray-900 text-sm w-full"
                  size="txtPublicSansSemiBold14"
                >
                  {props?.producttitletwo}
                </Text>
                <Text
                  className="text-blue_gray-500 text-sm w-auto"
                  size="txtPublicSansRegular14Bluegray500"
                >
                  {props?.price3}
                </Text>
              </div>
              <Img
                className="h-[18px] max-h-[18px]"
                src="images/img_stack_white_a700.svg"
                alt="stack"
              />
            </div>
            <div className="flex flex-1 flex-row gap-4 items-center justify-start w-full">
              <Img
                className="h-12 md:h-auto object-cover rounded-[12px] w-12"
                src="images/img_imgproducts5_48x48.png"
                alt="imgproductsFive"
              />
              <div className="flex flex-1 flex-col gap-[5px] items-start justify-start w-full">
                <Text
                  className="text-blue_gray-900 text-sm w-full"
                  size="txtPublicSansSemiBold14"
                >
                  {props?.producttitleone}
                </Text>
                <Text
                  className="text-blue_gray-500 text-sm w-auto"
                  size="txtPublicSansRegular14Bluegray500"
                >
                  {props?.price4}
                </Text>
              </div>
              <Img
                className="h-[18px] max-h-[18px]"
                src="images/img_stack_white_a700_18x30.svg"
                alt="stack"
              />
            </div>
          </List>
        </div>
      </div>
    </>
  );
};

HORIZONTALEcommerceColumnimgproductsthree.defaultProps = {
  listtitle: "Latest Products",
  producttitlethree: "Nike Air Zoom Pegasus 37 A.I.R. Chaz Bear",
  price: "$44.39",
  priceOne: "$78.83",
  producttitlefour: "Arizona Soft Footbed Sandal",
  price1: "$12.45",
  producttitlefive: "Boston Soft Footbed Sandal",
  price2: "$45.35",
  priceone1: "$55.47",
  producttitletwo: "Foundations Matte Flip Flop",
  price3: "$75.78",
  producttitleone: "Nike Air Force 1 NDESTRUKT",
  price4: "$72.80",
};

export default HORIZONTALEcommerceColumnimgproductsthree;
