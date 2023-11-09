import React from "react";

import { Button, Img, List, Text } from "components";

type HORIZONTALBankingColumnthtextProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  | "titleTwenty"
  | "thtext"
  | "thtextOne"
  | "thtextTwo"
  | "thtextThree"
  | "primarytext"
  | "namerand"
  | "date"
  | "time"
  | "price"
  | "completed"
  | "primarytext1"
  | "namerand1"
  | "date1"
  | "time1"
  | "price1"
  | "progress"
  | "primarytext2"
  | "namerand2"
  | "date2"
  | "time2"
  | "price2"
  | "failed"
  | "primarytext3"
  | "namerand3"
  | "date3"
  | "time3"
  | "price3"
  | "completed1"
  | "primarytext4"
  | "namerand4"
  | "date4"
  | "time4"
  | "price4"
  | "completed2"
  | "labelTwelve"
> &
  Partial<{
    titleTwenty: string;
    thtext: string;
    thtextOne: string;
    thtextTwo: string;
    thtextThree: string;
    primarytext: string;
    namerand: string;
    date: string;
    time: string;
    price: string;
    completed: string;
    primarytext1: string;
    namerand1: string;
    date1: string;
    time1: string;
    price1: string;
    progress: string;
    primarytext2: string;
    namerand2: string;
    date2: string;
    time2: string;
    price2: string;
    failed: string;
    primarytext3: string;
    namerand3: string;
    date3: string;
    time3: string;
    price3: string;
    completed1: string;
    primarytext4: string;
    namerand4: string;
    date4: string;
    time4: string;
    price4: string;
    completed2: string;
    labelTwelve: string;
  }>;

const HORIZONTALBankingColumnthtext: React.FC<
  HORIZONTALBankingColumnthtextProps
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
                {props?.titleTwenty}
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
          <div className="bg-gray-100 flex flex-col items-center justify-start w-[120px]">
            <div className="flex flex-col items-center justify-start p-4 w-auto">
              <Text
                className="text-blue_gray-500 text-sm w-auto"
                size="txtPublicSansSemiBold14Bluegray500"
              >
                {props?.thtextTwo}
              </Text>
            </div>
          </div>
          <div className="bg-gray-100 flex flex-col items-center justify-start w-[100px]">
            <div className="flex flex-col items-center justify-start p-4 w-auto">
              <Text
                className="text-blue_gray-500 text-sm w-auto"
                size="txtPublicSansSemiBold14Bluegray500"
              >
                {props?.thtextThree}
              </Text>
            </div>
          </div>
          <div className="bg-gray-100 h-14 w-[10%]"></div>
        </div>
        <List
          className="flex flex-col gap-px items-center w-full"
          orientation="vertical"
        >
          <div className="bg-white-A700 border-b border-blue_gray-300_33 border-dashed flex flex-1 md:flex-col flex-row md:gap-5 items-center justify-start pl-4 w-full">
            <div className="flex flex-col items-center justify-center py-4 w-auto">
              <div className="flex flex-col items-center justify-center rounded-[50%] w-12">
                <div className="h-12 md:h-auto relative rounded-[50%] w-12">
                  <Img
                    className="h-12 m-auto rounded-[50%] w-12"
                    src="images/img_imgavatar2_48x48.png"
                    alt="imgavatarTwo"
                  />
                  <div className="absolute bg-green-A700_01 bottom-[0] flex flex-col items-center justify-start right-[0] rounded-[50%] w-[18px]">
                    <Img
                      className="h-4 w-4"
                      src="images/img_iconssolidic_white_a700_16x16.svg"
                      alt="iconssolidic"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-1 flex-col items-center justify-start w-full">
              <div className="flex flex-col items-center justify-start py-4 w-auto">
                <div className="flex flex-col items-start justify-center px-4 w-auto">
                  <Text
                    className="text-blue_gray-900 text-sm w-auto"
                    size="txtPublicSansSemiBold14"
                  >
                    {props?.primarytext}
                  </Text>
                  <Text
                    className="text-blue_gray-500 text-sm w-auto"
                    size="txtPublicSansRegular14Bluegray500"
                  >
                    {props?.namerand}
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start w-[140px]">
              <div className="flex flex-col items-center justify-start py-4 w-auto">
                <div className="flex flex-col gap-1 items-start justify-center px-4 w-auto">
                  <Text
                    className="text-blue_gray-900 text-sm w-auto"
                    size="txtPublicSansRegular14"
                  >
                    {props?.date}
                  </Text>
                  <Text
                    className="text-blue_gray-500 text-xs w-auto"
                    size="txtPublicSansRegular12"
                  >
                    {props?.time}
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start w-[120px]">
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
            <div className="flex flex-col items-center justify-start p-4 w-[100px]">
              <Button
                className="!text-teal-700_01 cursor-pointer font-bold font-publicsans h-6 min-w-[75px] rounded-md text-center text-xs"
                shape="round"
                color="green_A700_28"
                size="xs"
                variant="fill"
              >
                {props?.completed}
              </Button>
            </div>
            <div className="flex flex-col items-center justify-end p-4 w-[68px]">
              <Button
                className="flex h-9 items-center justify-center w-9"
                shape="circle"
                size="md"
              >
                <Img
                  className="h-5"
                  src="images/img_iconssolidic_blue_gray_500_36x36.svg"
                  alt="iconssolidic_One"
                />
              </Button>
            </div>
          </div>
          <div className="bg-white-A700 border-b border-blue_gray-300_33 border-dashed flex flex-1 md:flex-col flex-row md:gap-5 items-center justify-start pl-4 w-full">
            <div className="flex flex-col items-center justify-center py-4 w-auto">
              <div className="flex flex-col items-center justify-center rounded-[50%] w-12">
                <div className="h-12 md:h-auto relative rounded-[50%] w-12">
                  <Img
                    className="h-12 m-auto rounded-[50%] w-12"
                    src="images/img_imgavatar3_48x48.png"
                    alt="imgavatarThree"
                  />
                  <div className="absolute bg-green-A700_01 bottom-[0] flex flex-col items-center justify-start right-[0] rounded-[50%] w-[18px]">
                    <Img
                      className="h-4 w-4"
                      src="images/img_iconssolidic_white_a700_16x16.svg"
                      alt="iconssolidic"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-1 flex-col items-center justify-start w-full">
              <div className="flex flex-col items-center justify-start py-4 w-auto">
                <div className="flex flex-col items-start justify-center px-4 w-auto">
                  <Text
                    className="text-blue_gray-900 text-sm w-auto"
                    size="txtPublicSansSemiBold14"
                  >
                    {props?.primarytext1}
                  </Text>
                  <Text
                    className="text-blue_gray-500 text-sm w-auto"
                    size="txtPublicSansRegular14Bluegray500"
                  >
                    {props?.namerand1}
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start w-[140px]">
              <div className="flex flex-col items-center justify-start py-4 w-auto">
                <div className="flex flex-col gap-1 items-start justify-center px-4 w-auto">
                  <Text
                    className="text-blue_gray-900 text-sm w-auto"
                    size="txtPublicSansRegular14"
                  >
                    {props?.date1}
                  </Text>
                  <Text
                    className="text-blue_gray-500 text-xs w-auto"
                    size="txtPublicSansRegular12"
                  >
                    {props?.time1}
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start w-[120px]">
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
            <div className="flex flex-col items-center justify-start p-4 w-[100px]">
              <Button
                className="!text-orange-900 cursor-pointer font-bold font-publicsans h-6 min-w-[64px] rounded-md text-center text-xs"
                shape="round"
                color="amber_A700_28"
                size="xs"
                variant="fill"
              >
                {props?.progress}
              </Button>
            </div>
            <div className="flex flex-col items-center justify-end p-4 w-[68px]">
              <Button
                className="flex h-9 items-center justify-center w-9"
                shape="circle"
                size="md"
              >
                <Img
                  className="h-5"
                  src="images/img_iconssolidic_blue_gray_500_36x36.svg"
                  alt="iconssolidic_One"
                />
              </Button>
            </div>
          </div>
          <div className="bg-white-A700 border-b border-blue_gray-300_33 border-dashed flex flex-1 md:flex-col flex-row md:gap-5 items-center justify-start pl-4 w-full">
            <div className="flex flex-col items-center justify-center py-4 w-auto">
              <div className="flex flex-col items-center justify-center rounded-[50%] w-12">
                <div className="h-12 md:h-auto relative rounded-[50%] w-12">
                  <Img
                    className="h-12 m-auto rounded-[50%] w-12"
                    src="images/img_imgavatar4_48x48.png"
                    alt="imgavatarFour"
                  />
                  <div className="absolute bg-deep_orange-500 bottom-[0] flex flex-col items-center justify-start right-[0] rounded-[50%] w-[18px]">
                    <Img
                      className="h-4 w-4"
                      src="images/img_iconssolidic_16x16.svg"
                      alt="iconssolidic"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-1 flex-col items-center justify-start w-full">
              <div className="flex flex-col items-center justify-start py-4 w-auto">
                <div className="flex flex-col items-start justify-center px-4 w-auto">
                  <Text
                    className="text-blue_gray-900 text-sm w-auto"
                    size="txtPublicSansSemiBold14"
                  >
                    {props?.primarytext2}
                  </Text>
                  <Text
                    className="text-blue_gray-500 text-sm w-auto"
                    size="txtPublicSansRegular14Bluegray500"
                  >
                    {props?.namerand2}
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start w-[140px]">
              <div className="flex flex-col items-center justify-start py-4 w-auto">
                <div className="flex flex-col gap-1 items-start justify-center px-4 w-auto">
                  <Text
                    className="text-blue_gray-900 text-sm w-auto"
                    size="txtPublicSansRegular14"
                  >
                    {props?.date2}
                  </Text>
                  <Text
                    className="text-blue_gray-500 text-xs w-auto"
                    size="txtPublicSansRegular12"
                  >
                    {props?.time2}
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start w-[120px]">
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
            <div className="flex flex-col items-center justify-start p-4 w-[100px]">
              <Button
                className="!text-red-900 cursor-pointer font-bold font-publicsans h-6 min-w-[48px] rounded-md text-center text-xs"
                shape="round"
                color="deep_orange_500_28"
                size="xs"
                variant="fill"
              >
                {props?.failed}
              </Button>
            </div>
            <div className="flex flex-col items-center justify-end p-4 w-[68px]">
              <Button
                className="flex h-9 items-center justify-center w-9"
                shape="circle"
                size="md"
              >
                <Img
                  className="h-5"
                  src="images/img_iconssolidic_blue_gray_500_36x36.svg"
                  alt="iconssolidic_One"
                />
              </Button>
            </div>
          </div>
          <div className="bg-white-A700 border-b border-blue_gray-300_33 border-dashed flex flex-1 md:flex-col flex-row md:gap-5 items-center justify-start pl-4 w-full">
            <div className="flex flex-col items-center justify-center py-4 w-auto">
              <div className="bg-gray-300 relative rounded-[50%] w-12">
                <Img
                  className="absolute h-6 inset-[0] justify-center m-auto w-6"
                  src="images/img_star_blue_gray_500.svg"
                  alt="star"
                />
                <div className="absolute bg-deep_orange-500 bottom-[0] flex flex-col items-center justify-start right-[0] rounded-[50%] w-[18px]">
                  <Img
                    className="h-4 w-4"
                    src="images/img_iconssolidic_16x16.svg"
                    alt="iconssolidic"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-1 flex-col items-center justify-start w-full">
              <div className="flex flex-col items-center justify-start py-4 w-auto">
                <div className="flex flex-col items-start justify-center px-4 w-auto">
                  <Text
                    className="text-blue_gray-900 text-sm w-auto"
                    size="txtPublicSansSemiBold14"
                  >
                    {props?.primarytext3}
                  </Text>
                  <Text
                    className="text-blue_gray-500 text-sm w-auto"
                    size="txtPublicSansRegular14Bluegray500"
                  >
                    {props?.namerand3}
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start w-[140px]">
              <div className="flex flex-col items-center justify-start py-4 w-auto">
                <div className="flex flex-col gap-1 items-start justify-center px-4 w-auto">
                  <Text
                    className="text-blue_gray-900 text-sm w-auto"
                    size="txtPublicSansRegular14"
                  >
                    {props?.date3}
                  </Text>
                  <Text
                    className="text-blue_gray-500 text-xs w-auto"
                    size="txtPublicSansRegular12"
                  >
                    {props?.time3}
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start w-[120px]">
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
            <div className="flex flex-col items-center justify-start p-4 w-[100px]">
              <Button
                className="!text-teal-700_01 cursor-pointer font-bold font-publicsans h-6 min-w-[75px] rounded-md text-center text-xs"
                shape="round"
                color="green_A700_28"
                size="xs"
                variant="fill"
              >
                {props?.completed1}
              </Button>
            </div>
            <div className="flex flex-col items-center justify-end p-4 w-[68px]">
              <Button
                className="flex h-9 items-center justify-center w-9"
                shape="circle"
                size="md"
              >
                <Img
                  className="h-5"
                  src="images/img_iconssolidic_blue_gray_500_36x36.svg"
                  alt="iconssolidic_One"
                />
              </Button>
            </div>
          </div>
          <div className="bg-white-A700 border-b border-blue_gray-300_33 border-dashed flex flex-1 md:flex-col flex-row md:gap-5 items-center justify-start pl-4 w-full">
            <div className="flex flex-col items-center justify-center py-4 w-auto">
              <div className="bg-gray-300 relative rounded-[50%] w-12">
                <Img
                  className="absolute h-6 inset-[0] justify-center m-auto w-6"
                  src="images/img_star_blue_gray_500.svg"
                  alt="star"
                />
                <div className="absolute bg-deep_orange-500 bottom-[0] flex flex-col items-center justify-start right-[0] rounded-[50%] w-[18px]">
                  <Img
                    className="h-4 w-4"
                    src="images/img_iconssolidic_16x16.svg"
                    alt="iconssolidic"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-1 flex-col items-center justify-start w-full">
              <div className="flex flex-col items-center justify-start py-4 w-auto">
                <div className="flex flex-col items-start justify-center px-4 w-auto">
                  <Text
                    className="text-blue_gray-900 text-sm w-auto"
                    size="txtPublicSansSemiBold14"
                  >
                    {props?.primarytext4}
                  </Text>
                  <Text
                    className="text-blue_gray-500 text-sm w-auto"
                    size="txtPublicSansRegular14Bluegray500"
                  >
                    {props?.namerand4}
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start w-[140px]">
              <div className="flex flex-col items-center justify-start py-4 w-auto">
                <div className="flex flex-col gap-1 items-start justify-center px-4 w-auto">
                  <Text
                    className="text-blue_gray-900 text-sm w-auto"
                    size="txtPublicSansRegular14"
                  >
                    {props?.date4}
                  </Text>
                  <Text
                    className="text-blue_gray-500 text-xs w-auto"
                    size="txtPublicSansRegular12"
                  >
                    {props?.time4}
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start w-[120px]">
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
            <div className="flex flex-col items-center justify-start p-4 w-[100px]">
              <Button
                className="!text-teal-700_01 cursor-pointer font-bold font-publicsans h-6 min-w-[75px] rounded-md text-center text-xs"
                shape="round"
                color="green_A700_28"
                size="xs"
                variant="fill"
              >
                {props?.completed2}
              </Button>
            </div>
            <div className="flex flex-col items-center justify-end p-4 w-[68px]">
              <Button
                className="flex h-9 items-center justify-center w-9"
                shape="circle"
                size="md"
              >
                <Img
                  className="h-5"
                  src="images/img_iconssolidic_blue_gray_500_36x36.svg"
                  alt="iconssolidic_One"
                />
              </Button>
            </div>
          </div>
        </List>
        <div className="flex flex-col items-end justify-start p-4 w-full">
          <div className="flex flex-row gap-2 h-[30px] md:h-auto items-center justify-center px-1 rounded-lg w-auto">
            <Text
              className="text-[13px] text-blue_gray-900 w-auto"
              size="txtPublicSansBold13"
            >
              {props?.labelTwelve}
            </Text>
            <Img
              className="h-[18px] w-[18px]"
              src="images/img_arrowright.svg"
              alt="arrowright_Seven"
            />
          </div>
        </div>
      </div>
    </>
  );
};

HORIZONTALBankingColumnthtext.defaultProps = {
  titleTwenty: "Recent Transitions",
  thtext: "Description",
  thtextOne: "Date",
  thtextTwo: "Amount",
  thtextThree: "Status",
  primarytext: "Received",
  namerand: "Melanie Noble",
  date: "07 Aug 2022",
  time: "4:00 PM",
  price: "$87.55",
  completed: "Completed",
  primarytext1: "Received",
  namerand1: "Giana Brandt",
  date1: "22 Oct 2022",
  time1: "4:00 PM",
  price1: "$55.69",
  progress: "Progress",
  primarytext2: "Payment",
  namerand2: "Jace Bush",
  date2: "04 Jan 2022",
  time2: "4:00 PM",
  price2: "$55.47",
  failed: "Failed",
  primarytext3: "Payment",
  namerand3: "Reece Chung",
  date3: "10 Sep 2022",
  time3: "4:00 PM",
  price3: "$94.75",
  completed1: "Completed",
  primarytext4: "Payment",
  namerand4: "Jace Bush",
  date4: "07 Aug 2022",
  time4: "4:00 PM",
  price4: "$12.45",
  completed2: "Completed",
  labelTwelve: "View All",
};

export default HORIZONTALBankingColumnthtext;
