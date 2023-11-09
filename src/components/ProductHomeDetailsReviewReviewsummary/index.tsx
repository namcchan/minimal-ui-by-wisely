import React from "react";

import { Button, Img, List, RatingBar, Text } from "components";

type ProductHomeDetailsReviewReviewsummaryProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  | "averagerating"
  | "fortyfive"
  | "p824kreviews"
  | "starcounter"
  | "label"
  | "weburl"
  | "starcounter1"
  | "label1"
  | "numbershortrand"
  | "starcounter2"
  | "label2"
  | "numbershortrand1"
  | "starcounter3"
  | "label3"
  | "numbershortrand2"
  | "starcounter4"
  | "label4"
  | "numbershortrand3"
  | "writeYourReview"
> &
  Partial<{
    averagerating: string;
    fortyfive: string;
    p824kreviews: string;
    starcounter: string;
    label: string;
    weburl: string;
    starcounter1: string;
    label1: string;
    numbershortrand: string;
    starcounter2: string;
    label2: string;
    numbershortrand1: string;
    starcounter3: string;
    label3: string;
    numbershortrand2: string;
    starcounter4: string;
    label4: string;
    numbershortrand3: string;
    writeYourReview: string;
  }>;

const ProductHomeDetailsReviewReviewsummary: React.FC<
  ProductHomeDetailsReviewReviewsummaryProps
> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-1 flex-col gap-2 items-center justify-start w-full">
          <Text
            className="text-blue_gray-900 text-center text-sm w-auto"
            size="txtPublicSansSemiBold14"
          >
            {props?.averagerating}
          </Text>
          <Text
            className="text-5xl sm:text-[38px] md:text-[44px] text-blue_gray-900 text-center w-auto"
            size="txtPublicSansExtraBold48"
          >
            {props?.fortyfive}
          </Text>
          <div className="flex flex-col items-center justify-start w-auto">
            <RatingBar
              className="flex justify-between w-[120px]"
              value={1}
              starCount={5}
              size={24}
            ></RatingBar>
          </div>
          <Text
            className="text-blue_gray-500 text-center text-xs w-auto"
            size="txtPublicSansRegular12"
          >
            {props?.p824kreviews}
          </Text>
        </div>
        <Img
          className="h-full w-px"
          src="images/img_divider_blue_gray_300_238x1.svg"
          alt="divider_Three"
        />
        <List
          className="flex flex-1 flex-col gap-3 items-start p-10 sm:px-5 w-full"
          orientation="vertical"
        >
          <div className="flex flex-1 flex-row gap-4 items-center justify-start my-0 w-full">
            <Text
              className="text-blue_gray-900 text-sm w-auto"
              size="txtPublicSansSemiBold14"
            >
              {props?.starcounter}
            </Text>
            <div className="flex flex-1 flex-row gap-2 h-[15px] md:h-auto items-center justify-start w-full">
              <div className="h-1 overflow-hidden relative w-full">
                <div className="w-full h-full absolute bg-undefined rounded-[2px]"></div>
                <div
                  className="h-full absolute bg-blue_gray_900  rounded-[2px]"
                  style={{ width: "44%" }}
                ></div>
              </div>
              <Text
                className="text-blue_gray-500 text-xs w-auto"
                size="txtPublicSansRegular12"
              >
                {props?.label}
              </Text>
            </div>
            <Text
              className="text-blue_gray-500 text-sm w-auto"
              size="txtPublicSansRegular14Bluegray500"
            >
              {props?.weburl}
            </Text>
          </div>
          <div className="flex flex-1 flex-row gap-4 items-center justify-start my-0 w-full">
            <Text
              className="text-blue_gray-900 text-sm w-auto"
              size="txtPublicSansSemiBold14"
            >
              {props?.starcounter1}
            </Text>
            <div className="flex flex-1 flex-row gap-2 h-[15px] md:h-auto items-center justify-start w-full">
              <div className="h-1 overflow-hidden relative w-full">
                <div className="w-full h-full absolute bg-undefined rounded-[2px]"></div>
                <div
                  className="h-full absolute bg-blue_gray_900  rounded-[2px]"
                  style={{ width: "44%" }}
                ></div>
              </div>
              <Text
                className="text-blue_gray-500 text-xs w-auto"
                size="txtPublicSansRegular12"
              >
                {props?.label1}
              </Text>
            </div>
            <Text
              className="text-blue_gray-500 text-sm w-auto"
              size="txtPublicSansRegular14Bluegray500"
            >
              {props?.numbershortrand}
            </Text>
          </div>
          <div className="flex flex-1 flex-row gap-4 items-center justify-start my-0 w-full">
            <Text
              className="text-blue_gray-900 text-sm w-auto"
              size="txtPublicSansSemiBold14"
            >
              {props?.starcounter2}
            </Text>
            <div className="flex flex-1 flex-row gap-2 h-[15px] md:h-auto items-center justify-start w-full">
              <div className="h-1 overflow-hidden relative w-full">
                <div className="w-full h-full absolute bg-undefined rounded-[2px]"></div>
                <div
                  className="h-full absolute bg-blue_gray_900  rounded-[2px]"
                  style={{ width: "44%" }}
                ></div>
              </div>
              <Text
                className="text-blue_gray-500 text-xs w-auto"
                size="txtPublicSansRegular12"
              >
                {props?.label2}
              </Text>
            </div>
            <Text
              className="text-blue_gray-500 text-sm w-auto"
              size="txtPublicSansRegular14Bluegray500"
            >
              {props?.numbershortrand1}
            </Text>
          </div>
          <div className="flex flex-1 flex-row gap-4 items-center justify-start my-0 w-full">
            <Text
              className="text-blue_gray-900 text-sm w-auto"
              size="txtPublicSansSemiBold14"
            >
              {props?.starcounter3}
            </Text>
            <div className="flex flex-1 flex-row gap-2 h-[15px] md:h-auto items-center justify-start w-full">
              <div className="h-1 overflow-hidden relative w-full">
                <div className="w-full h-full absolute bg-undefined rounded-[2px]"></div>
                <div
                  className="h-full absolute bg-blue_gray_900  rounded-[2px]"
                  style={{ width: "44%" }}
                ></div>
              </div>
              <Text
                className="text-blue_gray-500 text-xs w-auto"
                size="txtPublicSansRegular12"
              >
                {props?.label3}
              </Text>
            </div>
            <Text
              className="text-blue_gray-500 text-sm w-auto"
              size="txtPublicSansRegular14Bluegray500"
            >
              {props?.numbershortrand2}
            </Text>
          </div>
          <div className="flex flex-1 flex-row gap-4 items-center justify-start my-0 w-full">
            <Text
              className="text-blue_gray-900 text-sm w-auto"
              size="txtPublicSansSemiBold14"
            >
              {props?.starcounter4}
            </Text>
            <div className="flex flex-1 flex-row gap-2 h-[15px] md:h-auto items-center justify-start w-full">
              <div className="h-1 overflow-hidden relative w-full">
                <div className="w-full h-full absolute bg-undefined rounded-[2px]"></div>
                <div
                  className="h-full absolute bg-blue_gray_900  rounded-[2px]"
                  style={{ width: "44%" }}
                ></div>
              </div>
              <Text
                className="text-blue_gray-500 text-xs w-auto"
                size="txtPublicSansRegular12"
              >
                {props?.label4}
              </Text>
            </div>
            <Text
              className="text-blue_gray-500 text-sm w-auto"
              size="txtPublicSansRegular14Bluegray500"
            >
              {props?.numbershortrand3}
            </Text>
          </div>
        </List>
        <Img
          className="h-full w-px"
          src="images/img_divider_blue_gray_300_238x1.svg"
          alt="divider_Four"
        />
        <div className="flex flex-1 flex-col h-full items-center justify-center w-full">
          <Button
            className="cursor-pointer flex items-center justify-center min-w-[188px]"
            leftIcon={
              <Img
                className="h-6 mr-2"
                src="images/img_edit_blue_gray_900.svg"
                alt="edit"
              />
            }
            shape="round"
            color="blue_gray_300_14"
            size="lg"
            variant="fill"
          >
            <div className="!text-blue_gray-900 font-bold font-publicsans text-[15px] text-left">
              {props?.writeYourReview}
            </div>
          </Button>
        </div>
      </div>
    </>
  );
};

ProductHomeDetailsReviewReviewsummary.defaultProps = {
  averagerating: "Average rating",
  fortyfive: "4/5",
  p824kreviews: "(8.24k reviews)",
  starcounter: "5 Star",
  label: "100%",
  weburl: "25.k",
  starcounter1: "4 Star",
  label1: "100%",
  numbershortrand: "1.1k",
  starcounter2: "3 Star",
  label2: "100%",
  numbershortrand1: "8.2k",
  starcounter3: "2 Star",
  label3: "100%",
  numbershortrand2: "73.9k",
  starcounter4: "1 Star",
  label4: "100%",
  numbershortrand3: "2.6k",
  writeYourReview: "Write your review",
};

export default ProductHomeDetailsReviewReviewsummary;
