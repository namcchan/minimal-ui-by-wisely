import React from "react";

import { Img, Text } from "components";

type HORIZONTALAnalyticsStackbgProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "iconsglassicgla" | "numbershortrand" | "label"
> &
  Partial<{ iconsglassicgla: string; numbershortrand: string; label: string }>;

const HORIZONTALAnalyticsStackbg: React.FC<HORIZONTALAnalyticsStackbgProps> = (
  props,
) => {
  return (
    <>
      <div className={props.className}>
        <div className="absolute bg-white-A700 flex flex-col h-full inset-[0] items-center justify-center m-auto rounded-[16px] w-full">
          <div className="bg-gradient3  h-[222px] rounded-[16px] w-full"></div>
        </div>
        <div className="flex flex-col gap-2 items-center justify-start m-auto relative w-[36%] md:w-full">
          <Img
            className="h-16 md:h-auto object-cover w-16"
            alt="iconsglassicgla"
            src={props?.iconsglassicgla}
          />
          <div className="flex flex-col gap-2 items-center justify-start w-auto">
            <Text
              className="md:text-3xl sm:text-[28px] text-[32px] text-center text-teal-900 w-auto"
              size="txtPublicSansBold32Teal900"
            >
              {props?.numbershortrand}
            </Text>
            <Text
              className="text-center text-sm text-teal-900_94 w-auto"
              size="txtPublicSansSemiBold14Teal90094"
            >
              {props?.label}
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

HORIZONTALAnalyticsStackbg.defaultProps = {
  iconsglassicgla: "images/img_iconsglassicglassbag.png",
  numbershortrand: "1.1k",
  label: "Weekly Sales",
};

export default HORIZONTALAnalyticsStackbg;
