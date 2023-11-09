import React from "react";

import { Img, Text } from "components";

type HORIZONTALAnalyticsColumnfacebookProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  | "title"
  | "facebooknumber"
  | "facebooktext"
  | "googlenumber"
  | "googletext"
  | "linkedinnumber"
  | "linkedintext"
  | "twitternumber"
  | "twittertext"
> &
  Partial<{
    title: string;
    facebooknumber: string;
    facebooktext: string;
    googlenumber: string;
    googletext: string;
    linkedinnumber: string;
    linkedintext: string;
    twitternumber: string;
    twittertext: string;
  }>;

const HORIZONTALAnalyticsColumnfacebook: React.FC<
  HORIZONTALAnalyticsColumnfacebookProps
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
                {props?.title}
              </Text>
            </div>
          </div>
        </div>
        <div className="gap-4 grid grid-cols-2 items-center min-h-[auto] pb-6 sm:px-5 px-6 w-full">
          <div className="border border-blue_gray-300_28 border-solid flex flex-1 flex-col gap-1 items-center justify-start py-4 rounded-lg w-full">
            <Img
              className="h-8 w-8"
              src="images/img_facebook.svg"
              alt="facebook"
            />
            <div className="flex flex-col items-center justify-start w-auto">
              <Text
                className="text-blue_gray-900 text-center text-lg w-auto"
                size="txtPublicSansBold18Bluegray900"
              >
                {props?.facebooknumber}
              </Text>
              <Text
                className="text-blue_gray-500 text-center text-sm w-auto"
                size="txtPublicSansRegular14Bluegray500"
              >
                {props?.facebooktext}
              </Text>
            </div>
          </div>
          <div className="border border-blue_gray-300_28 border-solid flex flex-1 flex-col gap-1 items-center justify-start py-4 rounded-lg w-full">
            <div className="flex flex-col h-8 items-center justify-start w-8">
              <Img
                className="h-[29px] md:h-auto object-cover w-[29px]"
                src="images/img_icgoogle1.png"
                alt="icgoogleOne"
              />
            </div>
            <div className="flex flex-col gap-1.5 items-center justify-start w-auto">
              <Text
                className="text-blue_gray-900 text-center text-lg w-auto"
                size="txtPublicSansBold18Bluegray900"
              >
                {props?.googlenumber}
              </Text>
              <Text
                className="text-blue_gray-500 text-center text-sm w-auto"
                size="txtPublicSansRegular14Bluegray500"
              >
                {props?.googletext}
              </Text>
            </div>
          </div>
          <div className="border border-blue_gray-300_28 border-solid flex flex-1 flex-col gap-1 items-center justify-start py-4 rounded-lg w-full">
            <Img
              className="h-8 w-8"
              src="images/img_iconssocialiclinkedin_light_blue_500.svg"
              alt="iconssocialicli"
            />
            <div className="flex flex-col items-center justify-start w-auto">
              <Text
                className="text-blue_gray-900 text-center text-lg w-auto"
                size="txtPublicSansBold18Bluegray900"
              >
                {props?.linkedinnumber}
              </Text>
              <Text
                className="text-blue_gray-500 text-center text-sm w-auto"
                size="txtPublicSansRegular14Bluegray500"
              >
                {props?.linkedintext}
              </Text>
            </div>
          </div>
          <div className="border border-blue_gray-300_28 border-solid flex flex-1 flex-col gap-1 items-center justify-start py-4 rounded-lg w-full">
            <Img
              className="h-8 w-8"
              src="images/img_twitter.svg"
              alt="twitter"
            />
            <div className="flex flex-col gap-[5px] items-center justify-start w-[51px]">
              <Text
                className="text-blue_gray-900 text-center text-lg w-auto"
                size="txtPublicSansBold18Bluegray900"
              >
                {props?.twitternumber}
              </Text>
              <Text
                className="text-blue_gray-500 text-center text-sm w-auto"
                size="txtPublicSansRegular14Bluegray500"
              >
                {props?.twittertext}
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

HORIZONTALAnalyticsColumnfacebook.defaultProps = {
  title: "Traffic by Site",
  facebooknumber: "34.9k",
  facebooktext: "FaceBook",
  googlenumber: "91.4k",
  googletext: "Google",
  linkedinnumber: "50.1k",
  linkedintext: "Linkedin",
  twitternumber: "90.5k",
  twittertext: "Twitter",
};

export default HORIZONTALAnalyticsColumnfacebook;
