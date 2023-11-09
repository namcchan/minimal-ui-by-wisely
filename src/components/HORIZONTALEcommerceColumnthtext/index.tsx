import React from "react";

import { Button, Img, List, Text } from "components";

type HORIZONTALEcommerceColumnthtextProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  | "titleTwentyOne"
  | "thtext"
  | "thtextOne"
  | "country"
  | "thtextTwo"
  | "thtextThree"
  | "namerand"
  | "primarytext"
  | "price"
  | "topOne"
  | "namerand1"
  | "primarytext1"
  | "price1"
  | "topTwo"
  | "namerand2"
  | "primarytext2"
  | "price2"
  | "topThree"
  | "namerand3"
  | "primarytext3"
  | "price3"
  | "topFour"
  | "namerand4"
  | "primarytext4"
  | "price4"
  | "topFive"
> &
  Partial<{
    titleTwentyOne: string;
    thtext: string;
    thtextOne: string;
    country: string;
    thtextTwo: string;
    thtextThree: string;
    namerand: string;
    primarytext: string;
    price: string;
    topOne: string;
    namerand1: string;
    primarytext1: string;
    price1: string;
    topTwo: string;
    namerand2: string;
    primarytext2: string;
    price2: string;
    topThree: string;
    namerand3: string;
    primarytext3: string;
    price3: string;
    topFour: string;
    namerand4: string;
    primarytext4: string;
    price4: string;
    topFive: string;
  }>;

const HORIZONTALEcommerceColumnthtext: React.FC<
  HORIZONTALEcommerceColumnthtextProps
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
                {props?.titleTwentyOne}
              </Text>
            </div>
          </div>
        </div>
        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
          <div className="bg-gray-100 flex flex-1 flex-col items-center justify-start w-full">
            <div className="flex flex-row gap-1 items-center justify-start p-4 w-auto">
              <Text
                className="text-blue_gray-500 text-sm w-auto"
                size="txtPublicSansSemiBold14Bluegray500"
              >
                {props?.thtext}
              </Text>
              <Img
                className="h-[18px] w-[18px]"
                src="images/img_arrowdown_blue_gray_500_18x18.svg"
                alt="arrowdown"
              />
            </div>
          </div>
          <div className="bg-gray-100 flex flex-col items-center justify-start w-[140px]">
            <div className="flex flex-col items-center justify-start p-4 w-auto">
              <Text
                className="text-blue_gray-500 text-sm w-auto"
                size="txtPublicSansSemiBold14Bluegray500"
              >
                {props?.thtextOne}
              </Text>
            </div>
          </div>
          <Button
            className="!text-blue_gray-500 cursor-pointer font-publicsans font-semibold text-center text-sm w-[120px]"
            shape="square"
            color="gray_100"
            size="2xl"
            variant="fill"
          >
            {props?.country}
          </Button>
          <div className="bg-gray-100 flex flex-col items-start justify-end w-[120px]">
            <div className="flex flex-col items-center justify-start p-4 w-auto">
              <Text
                className="text-blue_gray-500 text-sm w-auto"
                size="txtPublicSansSemiBold14Bluegray500"
              >
                {props?.thtextTwo}
              </Text>
            </div>
          </div>
          <div className="bg-gray-100 flex flex-col items-center justify-end w-20">
            <div className="flex flex-col items-center justify-start p-4 w-auto">
              <Text
                className="text-blue_gray-500 text-right text-sm w-auto"
                size="txtPublicSansSemiBold14Bluegray500"
              >
                {props?.thtextThree}
              </Text>
            </div>
          </div>
        </div>
        <List
          className="flex flex-col gap-px items-center w-full"
          orientation="vertical"
        >
          <div className="bg-white-A700 border-b border-blue_gray-300_33 border-dashed flex flex-1 md:flex-col flex-row md:gap-5 items-center justify-start w-full">
            <div className="flex flex-1 flex-col items-center justify-start w-full">
              <div className="flex flex-row items-center justify-start py-4 w-auto">
                <div className="flex flex-col items-start justify-start pl-4 w-auto">
                  <div className="bg-gray-300 flex flex-col h-10 md:h-auto items-center justify-center rounded-[50%] w-10">
                    <div className="flex flex-col h-10 md:h-auto items-center justify-center rounded-[50%] w-10">
                      <Img
                        className="h-10 md:h-auto rounded-[50%] w-10"
                        src="images/img_imgavatar1_1.png"
                        alt="imgavatarOne"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-center px-4 w-auto">
                  <Text
                    className="text-blue_gray-900 text-sm w-auto"
                    size="txtPublicSansRegular14"
                  >
                    {props?.namerand}
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start w-[140px]">
              <div className="flex flex-col items-center justify-start py-4 w-auto">
                <div className="flex flex-col items-start justify-center px-4 w-auto">
                  <Text
                    className="text-blue_gray-900 text-sm w-auto"
                    size="txtPublicSansRegular14"
                  >
                    {props?.primarytext}
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center p-4 w-[120px]">
              <div className="flex flex-col items-start justify-start rounded-[5px] w-auto">
                <Img
                  className="h-5 md:h-auto object-cover rounded-[5px] w-[27px] sm:w-full"
                  src="images/img_img_20x27.png"
                  alt="img"
                />
              </div>
            </div>
            <div className="flex flex-col items-center justify-end w-[120px]">
              <div className="flex flex-col items-center justify-start py-4 w-auto">
                <div className="flex flex-col items-start justify-center px-4 w-auto">
                  <Text
                    className="text-blue_gray-900 text-sm w-auto"
                    size="txtPublicSansRegular14"
                  >
                    {props?.price}
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-end p-4 w-20">
              <Button
                className="!text-teal-700 cursor-pointer font-bold font-publicsans h-6 min-w-[41px] rounded-md text-center text-xs"
                shape="round"
                color="teal_500_28"
                size="xs"
                variant="fill"
              >
                {props?.topOne}
              </Button>
            </div>
          </div>
          <div className="bg-white-A700 border-b border-blue_gray-300_33 border-dashed flex flex-1 md:flex-col flex-row md:gap-5 items-center justify-start w-full">
            <div className="flex flex-1 flex-col items-center justify-start w-full">
              <div className="flex flex-row items-center justify-start py-4 w-auto">
                <div className="flex flex-col items-start justify-start pl-4 w-auto">
                  <div className="bg-gray-300 flex flex-col items-center justify-center rounded-[50%] w-10">
                    <div className="flex flex-col h-10 md:h-auto items-center justify-center rounded-[50%] w-10">
                      <Img
                        className="h-10 md:h-auto rounded-[50%] w-10"
                        src="images/img_imgavatar2_40x40.png"
                        alt="imgavatarTwo"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-center px-4 w-auto">
                  <Text
                    className="text-blue_gray-900 text-sm w-auto"
                    size="txtPublicSansRegular14"
                  >
                    {props?.namerand1}
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start w-[140px]">
              <div className="flex flex-col items-center justify-start py-4 w-auto">
                <div className="flex flex-col items-start justify-center px-4 w-auto">
                  <Text
                    className="text-blue_gray-900 text-sm w-auto"
                    size="txtPublicSansRegular14"
                  >
                    {props?.primarytext1}
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center p-4 w-[120px]">
              <div className="flex flex-col items-start justify-start rounded-[5px] w-auto">
                <Img
                  className="h-5 md:h-auto object-cover rounded-[5px] w-[27px] sm:w-full"
                  src="images/img_img_7.png"
                  alt="img"
                />
              </div>
            </div>
            <div className="flex flex-col items-center justify-end w-[120px]">
              <div className="flex flex-col items-center justify-start py-4 w-auto">
                <div className="flex flex-col items-start justify-center px-4 w-auto">
                  <Text
                    className="text-blue_gray-900 text-sm w-auto"
                    size="txtPublicSansRegular14"
                  >
                    {props?.price1}
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-end p-4 w-20">
              <Button
                className="!text-deep_purple-700 cursor-pointer font-bold font-publicsans h-6 min-w-[43px] rounded-md text-center text-xs"
                shape="round"
                color="deep_purple_A200_28"
                size="xs"
                variant="fill"
              >
                {props?.topTwo}
              </Button>
            </div>
          </div>
          <div className="bg-white-A700 border-b border-blue_gray-300_33 border-dashed flex flex-1 md:flex-col flex-row md:gap-5 items-center justify-start w-full">
            <div className="flex flex-1 flex-col items-center justify-start w-full">
              <div className="flex flex-row items-center justify-start py-4 w-auto">
                <div className="flex flex-col items-start justify-start pl-4 w-auto">
                  <div className="bg-gray-300 flex flex-col items-center justify-center rounded-[50%] w-10">
                    <div className="flex flex-col h-10 md:h-auto items-center justify-center rounded-[50%] w-10">
                      <Img
                        className="h-10 md:h-auto rounded-[50%] w-10"
                        src="images/img_imgavatar3_40x40.png"
                        alt="imgavatarThree"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-center px-4 w-auto">
                  <Text
                    className="text-blue_gray-900 text-sm w-auto"
                    size="txtPublicSansRegular14"
                  >
                    {props?.namerand2}
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start w-[140px]">
              <div className="flex flex-col items-center justify-start py-4 w-auto">
                <div className="flex flex-col items-start justify-center px-4 w-auto">
                  <Text
                    className="text-blue_gray-900 text-sm w-auto"
                    size="txtPublicSansRegular14"
                  >
                    {props?.primarytext2}
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center p-4 w-[120px]">
              <div className="flex flex-col items-start justify-start rounded-[5px] w-auto">
                <Img
                  className="h-5 md:h-auto object-cover rounded-[5px] w-[27px] sm:w-full"
                  src="images/img_img_6.png"
                  alt="img"
                />
              </div>
            </div>
            <div className="flex flex-col items-center justify-end w-[120px]">
              <div className="flex flex-col items-center justify-start py-4 w-auto">
                <div className="flex flex-col items-start justify-center px-4 w-auto">
                  <Text
                    className="text-blue_gray-900 text-sm w-auto"
                    size="txtPublicSansRegular14"
                  >
                    {props?.price2}
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-end p-4 w-20">
              <Button
                className="!text-light_blue-900 cursor-pointer font-bold font-publicsans h-6 min-w-[44px] rounded-md text-center text-xs"
                shape="round"
                color="cyan_A700_28"
                size="xs"
                variant="fill"
              >
                {props?.topThree}
              </Button>
            </div>
          </div>
          <div className="bg-white-A700 border-b border-blue_gray-300_33 border-dashed flex flex-1 md:flex-col flex-row md:gap-5 items-center justify-start w-full">
            <div className="flex flex-1 flex-col items-center justify-start w-full">
              <div className="flex flex-row items-center justify-start py-4 w-auto">
                <div className="flex flex-col items-start justify-start pl-4 w-auto">
                  <div className="bg-gray-300 flex flex-col items-center justify-center rounded-[50%] w-10">
                    <div className="flex flex-col h-10 md:h-auto items-center justify-center rounded-[50%] w-10">
                      <Img
                        className="h-10 md:h-auto rounded-[50%] w-10"
                        src="images/img_imgavatar4_40x40.png"
                        alt="imgavatarFour"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-center px-4 w-auto">
                  <Text
                    className="text-blue_gray-900 text-sm w-auto"
                    size="txtPublicSansRegular14"
                  >
                    {props?.namerand3}
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start w-[140px]">
              <div className="flex flex-col items-center justify-start py-4 w-auto">
                <div className="flex flex-col items-start justify-center px-4 w-auto">
                  <Text
                    className="text-blue_gray-900 text-sm w-auto"
                    size="txtPublicSansRegular14"
                  >
                    {props?.primarytext3}
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center p-4 w-[120px]">
              <div className="flex flex-col items-start justify-start rounded-[5px] w-auto">
                <Img
                  className="h-5 md:h-auto object-cover rounded-[5px] w-[27px] sm:w-full"
                  src="images/img_img_9.png"
                  alt="img"
                />
              </div>
            </div>
            <div className="flex flex-col items-center justify-end w-[120px]">
              <div className="flex flex-col items-center justify-start py-4 w-auto">
                <div className="flex flex-col items-start justify-center px-4 w-auto">
                  <Text
                    className="text-blue_gray-900 text-sm w-auto"
                    size="txtPublicSansRegular14"
                  >
                    {props?.price3}
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-end p-4 w-20">
              <Button
                className="!text-orange-900 cursor-pointer font-bold font-publicsans h-6 min-w-[43px] rounded-md text-center text-xs"
                shape="round"
                color="amber_A700_28"
                size="xs"
                variant="fill"
              >
                {props?.topFour}
              </Button>
            </div>
          </div>
          <div className="bg-white-A700 flex flex-1 md:flex-col flex-row md:gap-5 items-center justify-start w-full">
            <div className="flex flex-1 flex-col items-center justify-start w-full">
              <div className="flex flex-row items-center justify-start py-4 w-auto">
                <div className="flex flex-col items-start justify-start pl-4 w-auto">
                  <div className="bg-gray-300 flex flex-col items-center justify-center rounded-[50%] w-10">
                    <div className="flex flex-col h-10 md:h-auto items-center justify-center rounded-[50%] w-10">
                      <Img
                        className="h-10 md:h-auto rounded-[50%] w-10"
                        src="images/img_imgavatar5_40x40.png"
                        alt="imgavatarFive"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-center px-4 w-auto">
                  <Text
                    className="text-blue_gray-900 text-sm w-auto"
                    size="txtPublicSansRegular14"
                  >
                    {props?.namerand4}
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start w-[140px]">
              <div className="flex flex-col items-center justify-start py-4 w-auto">
                <div className="flex flex-col items-start justify-center px-4 w-auto">
                  <Text
                    className="text-blue_gray-900 text-sm w-auto"
                    size="txtPublicSansRegular14"
                  >
                    {props?.primarytext4}
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center p-4 w-[120px]">
              <div className="flex flex-col items-start justify-start rounded-[5px] w-auto">
                <Img
                  className="h-5 md:h-auto object-cover rounded-[5px] w-[27px] sm:w-full"
                  src="images/img_img_8.png"
                  alt="img"
                />
              </div>
            </div>
            <div className="flex flex-col items-center justify-end w-[120px]">
              <div className="flex flex-col items-center justify-start py-4 w-auto">
                <div className="flex flex-col items-start justify-center px-4 w-auto">
                  <Text
                    className="text-blue_gray-900 text-sm w-auto"
                    size="txtPublicSansRegular14"
                  >
                    {props?.price4}
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-end p-4 w-20">
              <Button
                className="!text-red-900 cursor-pointer font-bold font-publicsans h-6 min-w-[44px] rounded-md text-center text-xs"
                shape="round"
                color="deep_orange_500_28"
                size="xs"
                variant="fill"
              >
                {props?.topFive}
              </Button>
            </div>
          </div>
        </List>
      </div>
    </>
  );
};

HORIZONTALEcommerceColumnthtext.defaultProps = {
  titleTwentyOne: "Best Salesman",
  thtext: "Seller",
  thtextOne: "Product",
  country: "Country",
  thtextTwo: "Total",
  thtextThree: "Rank",
  namerand: "Deja Brady",
  primarytext: "CAP",
  price: "$52.84",
  topOne: "Top 1",
  namerand1: "Esperanza Mcintyre",
  primarytext1: "Branded Shoes",
  price1: "$78.83",
  topTwo: "Top 2",
  namerand2: "Jayvion Simon",
  primarytext2: "Headphone",
  price2: "$60.96",
  topThree: "Top 3",
  namerand3: "Deja Brady",
  primarytext3: "Cell Phone",
  price3: "$35.54",
  topFour: "Top 4",
  namerand4: "Chase Day",
  primarytext4: "Earings",
  price4: "$76.17",
  topFive: "Top 5",
};

export default HORIZONTALEcommerceColumnthtext;
