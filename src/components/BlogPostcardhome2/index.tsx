import React from "react";

import { Img, Text } from "components";

type BlogPostcardhome2Props = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "imgcovermfour" | "date" | "titlerand" | "text" | "textOne" | "textTwo"
> &
  Partial<{
    imgcovermfour: string;
    date: string;
    titlerand: string;
    text: string;
    textOne: string;
    textTwo: string;
  }>;

const BlogPostcardhome2: React.FC<BlogPostcardhome2Props> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col relative w-full">
          <div className="bg-orange-50 flex flex-1 flex-col items-center justify-start mt-[-NaNpx] mx-auto w-full z-[1]">
            <Img
              className="h-[202px] sm:h-auto object-cover w-[270px] md:w-full"
              alt="imgcovermFour"
              src={props?.imgcovermfour}
            />
          </div>
          <div className="h-11 md:h-5 mt-[-20px] w-[91px] z-[1]">
            <Img
              className="absolute h-[34px] inset-x-[0] mx-auto top-[0] w-[91px]"
              src="images/img_alarm_white_a700.svg"
              alt="alarm"
            />
            <div className="absolute bg-white-A700 bottom-[-1%] flex flex-col inset-x-[0] items-center justify-center mx-auto rounded-[50%] w-10">
              <div className="flex flex-col h-10 md:h-auto items-center justify-center rounded-[50%] w-10">
                <Img
                  className="h-10 md:h-auto rounded-[50%] w-10"
                  src="images/img_imgavatar4_40x40.png"
                  alt="imgavatarFour"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-6 items-end justify-start p-6 sm:px-5 w-full">
          <div className="flex flex-col gap-2 items-start justify-start w-full">
            <Text
              className="text-blue_gray-300 text-xs w-auto"
              size="txtPublicSansRegular12Bluegray300"
            >
              {props?.date}
            </Text>
            <Text
              className="leading-[22.00px] max-w-[222px] md:max-w-full text-blue_gray-900 text-sm"
              size="txtPublicSansSemiBold14"
            >
              {props?.titlerand}
            </Text>
          </div>
          <div className="flex flex-row gap-3 items-center justify-end w-full">
            <div className="flex flex-row gap-1 items-center justify-start w-auto">
              <Img
                className="h-4 w-4"
                src="images/img_user_blue_gray_300.svg"
                alt="user"
              />
              <Text
                className="text-blue_gray-300 text-xs w-auto"
                size="txtPublicSansRegular12Bluegray300"
              >
                {props?.text}
              </Text>
            </div>
            <div className="flex flex-row gap-1 items-center justify-start w-auto">
              <Img
                className="h-4 w-4"
                src="images/img_eye_blue_gray_300.svg"
                alt="eye"
              />
              <Text
                className="text-blue_gray-300 text-xs w-auto"
                size="txtPublicSansRegular12Bluegray300"
              >
                {props?.textOne}
              </Text>
            </div>
            <div className="flex flex-row gap-1 items-center justify-start w-auto">
              <Img
                className="h-4 w-4"
                src="images/img_search_blue_gray_300_16x16.svg"
                alt="search"
              />
              <Text
                className="text-blue_gray-300 text-xs w-auto"
                size="txtPublicSansRegular12Bluegray300"
              >
                {props?.textTwo}
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

BlogPostcardhome2.defaultProps = {
  imgcovermfour: "images/img_imgcoverm4_202x270.png",
  date: "31 Nov 2022",
  titlerand: "The Power of Positive Thinking: Transform Your Mindset",
  text: "5",
  textOne: "12",
  textTwo: "4",
};

export default BlogPostcardhome2;
