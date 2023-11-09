import React from "react";

import { Button, Input, RatingBar, Text, TextArea } from "components";

type ProductHomeDetailsNewReviewColumntitleProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "title" | "yourreviewaboutOne" | "post" | "cancel"
> &
  Partial<{
    title: string;
    yourreviewaboutOne: string;
    post: string;
    cancel: string;
  }>;

const ProductHomeDetailsNewReviewColumntitle: React.FC<
  ProductHomeDetailsNewReviewColumntitleProps
> = (props) => {
  return (
    <>
      <div
        className={props.className}
        style={{ backgroundImage: "url('images/img_dialognewcreditcard.svg')" }}
      >
        <div className="bg-white-A700 flex flex-col items-center justify-start rounded-[16px] shadow-bs6 w-[600px] md:w-full">
          <div className="bg-white-A700 flex flex-col items-center justify-start sm:pl-5 pl-6 pr-3 py-6 w-full">
            <Text
              className="text-blue_gray-900 text-lg w-auto"
              size="txtPublicSansBold18Bluegray900"
            >
              {props?.title}
            </Text>
          </div>
          <div className="flex flex-col gap-6 items-end justify-start sm:px-5 px-6 w-full">
            <div className="flex flex-row gap-3 items-center justify-start w-full">
              <Text
                className="text-base text-blue_gray-900 w-auto"
                size="txtPublicSansRegular16Bluegray900"
              >
                {props?.yourreviewaboutOne}
              </Text>
              <div className="flex flex-col items-center justify-start w-auto">
                <RatingBar
                  className="flex justify-between w-[100px]"
                  value={1}
                  starCount={5}
                  size={20}
                ></RatingBar>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start rounded-lg w-full">
              <TextArea
                className="bg-transparent border border-blue_gray-300_33 border-solid font-publicsans px-3.5 py-4 rounded-lg placeholder:text-blue_gray-300 text-blue_gray-300 text-left text-sm w-full"
                name="wrap"
                placeholder="Review*"
              ></TextArea>
            </div>
            <div className="flex flex-col items-start justify-start w-full">
              <Input
                name="wrap_One"
                placeholder="Name*"
                className="!placeholder:text-blue_gray-300 !text-blue_gray-300 font-publicsans md:h-auto p-0 sm:h-auto text-left text-sm w-full"
                wrapClassName="w-full"
                shape="round"
                color="blue_gray_300_33"
                size="sm"
                variant="outline"
              ></Input>
            </div>
            <div className="flex flex-col items-start justify-start w-full">
              <Input
                name="wrap_Two"
                placeholder="Email*"
                className="!placeholder:text-blue_gray-300 !text-blue_gray-300 font-publicsans md:h-auto p-0 sm:h-auto text-left text-sm w-full"
                wrapClassName="w-full"
                shape="round"
                color="blue_gray_300_33"
                size="sm"
                variant="outline"
              ></Input>
            </div>
          </div>
          <div className="bg-white-A700 flex flex-row gap-3 items-center justify-end p-6 sm:px-5 w-full">
            <Button
              className="cursor-pointer font-bold font-publicsans h-9 min-w-[64px] text-center text-sm"
              shape="round"
              color="blue_gray_900"
              size="md"
              variant="fill"
            >
              {props?.post}
            </Button>
            <Button
              className="cursor-pointer font-bold font-publicsans h-9 min-w-[71px] text-center text-sm"
              shape="round"
              color="blue_gray_300_51"
              size="md"
              variant="outline"
            >
              {props?.cancel}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

ProductHomeDetailsNewReviewColumntitle.defaultProps = {
  title: "Add Review",
  yourreviewaboutOne: "Your review about this product:",
  post: "Post",
  cancel: "Cancel",
};

export default ProductHomeDetailsNewReviewColumntitle;
