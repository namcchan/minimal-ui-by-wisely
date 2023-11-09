import React from "react";

import { Button, Img, List, Text } from "components";

type HORIZONTALAnalyticsAnalyticstaskProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  | "tasktitle"
  | "taskdescription1"
  | "taskdescription2"
  | "taskdescription3"
  | "taskdescription4"
  | "taskdescription5"
> &
  Partial<{
    tasktitle: string;
    taskdescription1: string;
    taskdescription2: string;
    taskdescription3: string;
    taskdescription4: string;
    taskdescription5: string;
  }>;

const HORIZONTALAnalyticsAnalyticstask: React.FC<
  HORIZONTALAnalyticsAnalyticstaskProps
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
                {props?.tasktitle}
              </Text>
            </div>
          </div>
        </div>
        <List
          className="flex flex-col gap-px items-center w-full"
          orientation="vertical"
        >
          <div className="border-b border-blue_gray-300_33 border-dashed flex flex-1 md:flex-col flex-row md:gap-5 items-center justify-start max-w-[712px] pl-4 pr-2 py-2 w-full">
            <div className="flex flex-1 flex-row h-9 md:h-auto items-center justify-start w-full">
              <div className="flex flex-col items-center justify-center p-2 w-9">
                <Img
                  className="h-5 w-5"
                  src="images/img_clock_blue_gray_500.svg"
                  alt="clock"
                />
              </div>
              <Text
                className="text-blue_gray-900 text-sm w-auto"
                size="txtPublicSansRegular14"
              >
                {props?.taskdescription1}
              </Text>
            </div>
            <Button
              className="flex h-9 items-center justify-center w-9"
              shape="circle"
              size="md"
            >
              <Img
                className="h-5"
                src="images/img_iconssolidic_blue_gray_500_36x36.svg"
                alt="iconssolidic"
              />
            </Button>
          </div>
          <div className="border-b border-blue_gray-300_33 border-dashed flex flex-1 md:flex-col flex-row md:gap-5 items-center justify-start max-w-[712px] pl-4 pr-2 py-2 w-full">
            <div className="flex flex-1 flex-row h-9 md:h-auto items-center justify-start w-full">
              <div className="flex flex-col items-center justify-center p-2 w-9">
                <Img
                  className="h-5 w-5"
                  src="images/img_checkmark_teal_500_20x20.svg"
                  alt="checkmark"
                />
              </div>
              <Text
                className="line-through text-blue_gray-300 text-sm w-auto"
                size="txtPublicSansRegular14Bluegray300"
              >
                {props?.taskdescription2}
              </Text>
            </div>
            <Button
              className="flex h-9 items-center justify-center w-9"
              shape="circle"
              size="md"
            >
              <Img
                className="h-5"
                src="images/img_iconssolidic_blue_gray_500_36x36.svg"
                alt="iconssolidic"
              />
            </Button>
          </div>
          <div className="border-b border-blue_gray-300_33 border-dashed flex flex-1 md:flex-col flex-row md:gap-5 items-center justify-start max-w-[712px] pl-4 pr-2 py-2 w-full">
            <div className="flex flex-1 flex-row h-9 md:h-auto items-center justify-start w-full">
              <div className="flex flex-col items-center justify-center p-2 w-9">
                <Img
                  className="h-5 w-5"
                  src="images/img_checkmark_teal_500_20x20.svg"
                  alt="checkmark"
                />
              </div>
              <Text
                className="line-through text-blue_gray-300 text-sm w-auto"
                size="txtPublicSansRegular14Bluegray300"
              >
                {props?.taskdescription3}
              </Text>
            </div>
            <Button
              className="flex h-9 items-center justify-center w-9"
              shape="circle"
              size="md"
            >
              <Img
                className="h-5"
                src="images/img_iconssolidic_blue_gray_500_36x36.svg"
                alt="iconssolidic"
              />
            </Button>
          </div>
          <div className="border-b border-blue_gray-300_33 border-dashed flex flex-1 md:flex-col flex-row md:gap-5 items-center justify-start max-w-[712px] pl-4 pr-2 py-2 w-full">
            <div className="flex flex-1 flex-row h-9 md:h-auto items-center justify-start w-full">
              <div className="flex flex-col items-center justify-center p-2 w-9">
                <Img
                  className="h-5 w-5"
                  src="images/img_clock_blue_gray_500.svg"
                  alt="clock"
                />
              </div>
              <Text
                className="text-blue_gray-900 text-sm w-auto"
                size="txtPublicSansRegular14"
              >
                {props?.taskdescription4}
              </Text>
            </div>
            <Button
              className="flex h-9 items-center justify-center w-9"
              shape="circle"
              size="md"
            >
              <Img
                className="h-5"
                src="images/img_iconssolidic_blue_gray_500_36x36.svg"
                alt="iconssolidic"
              />
            </Button>
          </div>
          <div className="flex flex-1 md:flex-col flex-row md:gap-5 items-center justify-start max-w-[712px] pl-4 pr-2 py-2 w-full">
            <div className="flex flex-1 flex-row h-9 md:h-auto items-center justify-start w-full">
              <div className="flex flex-col items-center justify-center p-2 w-9">
                <Img
                  className="h-5 w-5"
                  src="images/img_clock_blue_gray_500.svg"
                  alt="clock"
                />
              </div>
              <Text
                className="text-blue_gray-900 text-sm w-auto"
                size="txtPublicSansRegular14"
              >
                {props?.taskdescription5}
              </Text>
            </div>
            <Button
              className="flex h-9 items-center justify-center w-9"
              shape="circle"
              size="md"
            >
              <Img
                className="h-5"
                src="images/img_iconssolidic_blue_gray_500_36x36.svg"
                alt="iconssolidic"
              />
            </Button>
          </div>
        </List>
      </div>
    </>
  );
};

HORIZONTALAnalyticsAnalyticstask.defaultProps = {
  tasktitle: "Task",
  taskdescription1: "Create FireStone Logo",
  taskdescription2: "Add SCSS and JS files if required",
  taskdescription3: "Stakeholder Meeting",
  taskdescription4: "Scoping & Estimations",
  taskdescription5: "Sprint Showcase",
};

export default HORIZONTALAnalyticsAnalyticstask;
