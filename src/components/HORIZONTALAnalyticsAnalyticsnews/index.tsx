import React from "react";

import { Img, List, Text } from "components";

type HORIZONTALAnalyticsAnalyticsnewsProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  | "titleTwentyTwo"
  | "time"
  | "sentenceone"
  | "date"
  | "titlefour"
  | "sentencefour"
  | "date1"
  | "titletwo"
  | "sentencetwo"
  | "date2"
  | "titlethree"
  | "sentencethree"
  | "date3"
  | "titlefive"
  | "sentencefive"
  | "date4"
  | "labelTwentyTwo"
> &
  Partial<{
    titleTwentyTwo: string;
    time: string;
    sentenceone: string;
    date: string;
    titlefour: string;
    sentencefour: string;
    date1: string;
    titletwo: string;
    sentencetwo: string;
    date2: string;
    titlethree: JSX.Element | string;
    sentencethree: string;
    date3: string;
    titlefive: JSX.Element | string;
    sentencefive: string;
    date4: string;
    labelTwentyTwo: string;
  }>;

const HORIZONTALAnalyticsAnalyticsnews: React.FC<
  HORIZONTALAnalyticsAnalyticsnewsProps
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
                {props?.titleTwentyTwo}
              </Text>
            </div>
          </div>
        </div>
        <List
          className="flex flex-col gap-px items-center w-full"
          orientation="vertical"
        >
          <div className="border-b border-blue_gray-300_33 border-dashed flex flex-1 md:flex-col flex-row gap-4 items-center justify-start max-w-[712px] pb-4 sm:px-5 px-6 w-full">
            <div className="bg-gray-300 flex flex-col items-center justify-center rounded-[12px] w-12">
              <div className="flex flex-col h-12 md:h-auto items-center justify-center rounded-[12px] w-12">
                <Img
                  className="md:h-auto h-full object-cover rounded-[12px] w-full"
                  src="images/img_imgcovers1.png"
                  alt="imgcoversOne"
                />
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-1 items-start justify-center w-full">
              <Text
                className="text-blue_gray-900 text-sm w-full"
                size="txtPublicSansSemiBold14"
              >
                {props?.time}
              </Text>
              <Text
                className="text-blue_gray-500 text-sm w-full"
                size="txtPublicSansRegular14Bluegray500"
              >
                {props?.sentenceone}
              </Text>
            </div>
            <Text
              className="text-blue_gray-300 text-right text-xs w-auto"
              size="txtPublicSansRegular12Bluegray300"
            >
              {props?.date}
            </Text>
          </div>
          <div className="border-b border-blue_gray-300_33 border-dashed flex flex-1 md:flex-col flex-row gap-4 items-center justify-start max-w-[712px] sm:px-5 px-6 py-4 w-full">
            <div className="bg-gray-300 flex flex-col items-center justify-center rounded-[12px] w-12">
              <div className="flex flex-col h-12 md:h-auto items-center justify-center rounded-[12px] w-12">
                <Img
                  className="md:h-auto h-full object-cover rounded-[12px] w-full"
                  src="images/img_imgcovers2.png"
                  alt="imgcoversTwo"
                />
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-1 items-start justify-center w-full">
              <Text
                className="text-blue_gray-900 text-sm w-full"
                size="txtPublicSansSemiBold14"
              >
                {props?.titlefour}
              </Text>
              <Text
                className="text-blue_gray-500 text-sm w-full"
                size="txtPublicSansRegular14Bluegray500"
              >
                {props?.sentencefour}
              </Text>
            </div>
            <Text
              className="text-blue_gray-300 text-right text-xs w-auto"
              size="txtPublicSansRegular12Bluegray300"
            >
              {props?.date1}
            </Text>
          </div>
          <div className="border-b border-blue_gray-300_33 border-dashed flex flex-1 md:flex-col flex-row gap-4 items-center justify-start max-w-[712px] sm:px-5 px-6 py-4 w-full">
            <div className="bg-gray-300 flex flex-col items-center justify-center rounded-[12px] w-12">
              <div className="flex flex-col h-12 md:h-auto items-center justify-center rounded-[12px] w-12">
                <Img
                  className="md:h-auto h-full object-cover rounded-[12px] w-full"
                  src="images/img_imgcovers3.png"
                  alt="imgcoversThree"
                />
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-1 items-start justify-center w-full">
              <Text
                className="text-blue_gray-900 text-sm w-full"
                size="txtPublicSansSemiBold14"
              >
                {props?.titletwo}
              </Text>
              <Text
                className="text-blue_gray-500 text-sm w-full"
                size="txtPublicSansRegular14Bluegray500"
              >
                {props?.sentencetwo}
              </Text>
            </div>
            <Text
              className="text-blue_gray-300 text-right text-xs w-auto"
              size="txtPublicSansRegular12Bluegray300"
            >
              {props?.date2}
            </Text>
          </div>
          <div className="border-b border-blue_gray-300_33 border-dashed flex flex-1 md:flex-col flex-row gap-4 items-center justify-start max-w-[712px] sm:px-5 px-6 py-4 w-full">
            <div className="bg-gray-300 flex flex-col items-center justify-center rounded-[12px] w-12">
              <div className="flex flex-col h-12 md:h-auto items-center justify-center rounded-[12px] w-12">
                <Img
                  className="md:h-auto h-full object-cover rounded-[12px] w-full"
                  src="images/img_imgcovers4.png"
                  alt="imgcoversFour"
                />
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-1 items-start justify-center w-full">
              <Text
                className="text-blue_gray-900 text-sm w-full"
                size="txtPublicSansSemiBold14"
              >
                {props?.titlethree}
              </Text>
              <Text
                className="text-blue_gray-500 text-sm w-full"
                size="txtPublicSansRegular14Bluegray500"
              >
                {props?.sentencethree}
              </Text>
            </div>
            <Text
              className="text-blue_gray-300 text-right text-xs w-auto"
              size="txtPublicSansRegular12Bluegray300"
            >
              {props?.date3}
            </Text>
          </div>
          <div className="border-b border-blue_gray-300_33 border-dashed flex flex-1 md:flex-col flex-row gap-4 items-center justify-start max-w-[712px] sm:px-5 px-6 py-4 w-full">
            <div className="bg-gray-300 flex flex-col items-center justify-center rounded-[12px] w-12">
              <div className="flex flex-col h-12 md:h-auto items-center justify-center rounded-[12px] w-12">
                <Img
                  className="md:h-auto h-full object-cover rounded-[12px] w-full"
                  src="images/img_imgcovers5.png"
                  alt="imgcoversFive"
                />
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-1 items-start justify-center w-full">
              <Text
                className="text-blue_gray-900 text-sm w-full"
                size="txtPublicSansSemiBold14"
              >
                {props?.titlefive}
              </Text>
              <Text
                className="text-blue_gray-500 text-sm w-full"
                size="txtPublicSansRegular14Bluegray500"
              >
                {props?.sentencefive}
              </Text>
            </div>
            <Text
              className="text-blue_gray-300 text-right text-xs w-auto"
              size="txtPublicSansRegular12Bluegray300"
            >
              {props?.date4}
            </Text>
          </div>
        </List>
        <div className="flex flex-col items-end justify-start p-4 w-full">
          <div className="flex flex-row gap-2 h-[30px] md:h-auto items-center justify-center px-1 rounded-lg w-auto">
            <Text
              className="text-[13px] text-blue_gray-900 w-auto"
              size="txtPublicSansBold13"
            >
              {props?.labelTwentyTwo}
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

HORIZONTALAnalyticsAnalyticsnews.defaultProps = {
  titleTwentyTwo: "News",
  time: "Apply These 7 Secret Techniques To Improve Event",
  sentenceone: "Assumenda nam repudiandae rerum fugiat vel maxime.",
  date: "08 Apr 2022",
  titlefour: "How 7 Things Will Change The Way You Approach Event",
  sentencefour: "Error ut sit vel molestias velit.",
  date1: "10 Sep 2022",
  titletwo: "Believing These 7 Myths About Event Keeps You From Growing",
  sentencetwo: "Quis veniam aut saepe aliquid nulla.",
  date2: "11 Feb 2022",
  titlethree: <>Don&#39;t Waste Time! 7 Facts Until You Reach Your Event</>,
  sentencethree: "Reprehenderit ut voluptas sapiente ratione nostrum est.",
  date3: "09 Aug 2022",
  titlefive: (
    <>
      Event Awards: 7 Reasons Why They Don&#39;t Work & What You Can Do About It
    </>
  ),
  sentencefive: "Quo quia sit nihil nemo doloremque et.",
  date4: "12 Jan 2022",
  labelTwentyTwo: "View all",
};

export default HORIZONTALAnalyticsAnalyticsnews;
