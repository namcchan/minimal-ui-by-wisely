import React from "react";

import { Img, Text } from "components";

type HORIZONTALAnalyticsColumnstackProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  | "titleTwentyOne"
  | "language"
  | "math"
  | "history"
  | "languageone"
  | "physics"
  | "geography"
  | "seriescounter"
  | "seriescounterone"
> &
  Partial<{
    titleTwentyOne: string;
    language: string;
    math: string;
    history: string;
    languageone: string;
    physics: string;
    geography: string;
    seriescounter: string;
    seriescounterone: string;
  }>;

const HORIZONTALAnalyticsColumnstack: React.FC<
  HORIZONTALAnalyticsColumnstackProps
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
        <div className="md:h-[231px] h-[233px] relative w-[77%]">
          <div
            className="bg-cover bg-no-repeat md:h-[146px] h-[200px] m-auto p-3 w-[67%]"
            style={{ backgroundImage: "url('images/img_group68.svg')" }}
          >
            <Img
              className="absolute h-[140px] inset-y-[0] my-auto right-[6%]"
              src="images/img_stack_teal_500.svg"
              alt="stack"
            />
            <Img
              className="absolute h-[146px] inset-x-[0] mx-auto top-[10%]"
              src="images/img_stack_amber_a700.svg"
              alt="stack_One"
            />
          </div>
          <div className="absolute flex flex-col h-full inset-[0] items-center justify-center m-auto w-full">
            <div className="flex flex-col items-end justify-start w-full">
              <Text
                className="text-blue_gray-500 text-center text-xs"
                size="txtPublicSansRegular12"
              >
                {props?.language}
              </Text>
              <div className="flex flex-row items-start justify-between mt-8 w-[94%] md:w-full">
                <Text
                  className="text-blue_gray-500 text-center text-xs"
                  size="txtPublicSansRegular12"
                >
                  {props?.math}
                </Text>
                <Text
                  className="text-blue_gray-500 text-center text-xs"
                  size="txtPublicSansRegular12"
                >
                  {props?.history}
                </Text>
              </div>
              <div className="flex flex-row items-start justify-between mt-[99px] w-full">
                <Text
                  className="text-blue_gray-500 text-center text-xs"
                  size="txtPublicSansRegular12"
                >
                  {props?.languageone}
                </Text>
                <Text
                  className="text-blue_gray-500 text-center text-xs"
                  size="txtPublicSansRegular12"
                >
                  {props?.physics}
                </Text>
              </div>
              <Text
                className="mt-[39px] text-blue_gray-500 text-center text-xs"
                size="txtPublicSansRegular12"
              >
                {props?.geography}
              </Text>
            </div>
          </div>
        </div>
        <div className="border-blue_gray-300_33 border-dashed border-t flex flex-row gap-4 items-center justify-center py-6 w-full">
          <div className="flex flex-row gap-2 items-center justify-start w-auto">
            <div className="bg-teal-500 h-3 rounded-[50%] w-3"></div>
            <Text
              className="text-[13px] text-blue_gray-900 w-auto"
              size="txtPublicSansMedium13Bluegray900"
            >
              {props?.seriescounter}
            </Text>
          </div>
          <div className="flex flex-row gap-2 items-center justify-start w-auto">
            <div className="bg-amber-A700 h-3 rounded-[50%] w-3"></div>
            <Text
              className="text-[13px] text-blue_gray-900 w-auto"
              size="txtPublicSansMedium13Bluegray900"
            >
              {props?.seriescounterone}
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

HORIZONTALAnalyticsColumnstack.defaultProps = {
  titleTwentyOne: "Current Subject",
  language: "English",
  math: "Math",
  history: "History",
  languageone: "Chinese",
  physics: "Physics",
  geography: "Geography",
  seriescounter: "Series 1",
  seriescounterone: "Series 2",
};

export default HORIZONTALAnalyticsColumnstack;
