import React from "react";

import { Img, Text } from "components";

type HORIZONTALAnalyticsColumnshapeProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  | "titleNineteen"
  | "shape"
  | "shapeOne"
  | "shapeTwo"
  | "shapeThree"
  | "twohundredfortyseven"
  | "twohundredeightyfour"
  | "twohundredfortytwo"
  | "onehundredeightyfive"
  | "legend"
  | "legendOne"
  | "legendTwo"
  | "legendThree"
> &
  Partial<{
    titleNineteen: string;
    shape: string;
    shapeOne: string;
    shapeTwo: string;
    shapeThree: string;
    twohundredfortyseven: string;
    twohundredeightyfour: string;
    twohundredfortytwo: string;
    onehundredeightyfive: string;
    legend: string;
    legendOne: string;
    legendTwo: string;
    legendThree: string;
  }>;

const HORIZONTALAnalyticsColumnshape: React.FC<
  HORIZONTALAnalyticsColumnshapeProps
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
                {props?.titleNineteen}
              </Text>
            </div>
          </div>
        </div>
        <div className="flex flex-col h-60 items-center justify-start w-60">
          <div className="h-60 md:h-[234px] relative w-60">
            <div className="h-60 md:h-[234px] m-auto w-60">
              <div className="absolute flex flex-row h-max inset-[0] items-start justify-center m-auto w-full">
                {!!props?.shape ? (
                  <Img className="h-[217px]" alt="shape" src={props?.shape} />
                ) : null}
                <div className="md:h-[190px] h-[234px] relative w-1/2">
                  {!!props?.shapeOne ? (
                    <Img
                      className="absolute h-[190px] inset-x-[0] mx-auto top-[0]"
                      alt="shape_One"
                      src={props?.shapeOne}
                    />
                  ) : null}
                  {!!props?.shapeTwo ? (
                    <Img
                      className="absolute bottom-[0] h-[114px] left-[0]"
                      alt="shape_Two"
                      src={props?.shapeTwo}
                    />
                  ) : null}
                </div>
              </div>
              {!!props?.shapeThree ? (
                <Img
                  className="absolute bottom-[0] h-[120px] left-[20%]"
                  alt="shape_Three"
                  src={props?.shapeThree}
                />
              ) : null}
            </div>
            <div className="absolute bottom-[15%] flex flex-col inset-x-[0] items-center justify-start mx-auto w-[63%]">
              <div className="flex flex-col md:gap-10 gap-[73px] justify-start w-full">
                <div className="flex flex-row items-start justify-between w-full">
                  <Text
                    className="mt-[9px] text-white-A700 text-xs"
                    size="txtPublicSansRegular12WhiteA700"
                  >
                    {props?.twohundredfortyseven}
                  </Text>
                  <Text
                    className="mb-[9px] text-white-A700 text-xs"
                    size="txtPublicSansRegular12WhiteA700"
                  >
                    {props?.twohundredeightyfour}
                  </Text>
                </div>
                <div className="flex flex-row gap-[35px] items-start justify-end md:ml-[0] ml-[53px] w-[55%] md:w-full">
                  <Text
                    className="mt-[15px] text-white-A700 text-xs"
                    size="txtPublicSansRegular12WhiteA700"
                  >
                    {props?.twohundredfortytwo}
                  </Text>
                  <Text
                    className="mb-[15px] text-white-A700 text-xs"
                    size="txtPublicSansRegular12WhiteA700"
                  >
                    {props?.onehundredeightyfive}
                  </Text>
                </div>
              </div>
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
              {props?.legend}
            </Text>
          </div>
          <div className="flex flex-row gap-2 items-center justify-start w-auto">
            <div className="bg-amber-A700 h-3 rounded-[50%] w-3"></div>
            <Text
              className="text-[13px] text-blue_gray-900 w-auto"
              size="txtPublicSansMedium13Bluegray900"
            >
              {props?.legendOne}
            </Text>
          </div>
          <div className="flex flex-row gap-2 items-center justify-start w-auto">
            <div className="bg-cyan-A700 h-3 rounded-[50%] w-3"></div>
            <Text
              className="text-[13px] text-blue_gray-900 w-auto"
              size="txtPublicSansMedium13Bluegray900"
            >
              {props?.legendTwo}
            </Text>
          </div>
          <div className="flex flex-row gap-2 items-center justify-start w-auto">
            <div className="bg-deep_orange-500 h-3 rounded-[50%] w-3"></div>
            <Text
              className="text-[13px] text-blue_gray-900 w-auto"
              size="txtPublicSansMedium13Bluegray900"
            >
              {props?.legendThree}
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

HORIZONTALAnalyticsColumnshape.defaultProps = {
  titleNineteen: "Current Visits",
  twohundredfortyseven: "40%",
  twohundredeightyfour: "35%",
  twohundredfortytwo: "15%",
  onehundredeightyfive: "10%",
  legend: "America",
  legendOne: "Africa",
  legendTwo: "Asia",
  legendThree: "Europe",
};

export default HORIZONTALAnalyticsColumnshape;
