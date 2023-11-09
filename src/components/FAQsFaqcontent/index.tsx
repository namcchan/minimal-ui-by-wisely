import React from "react";

import { Button, Img, Input, SelectBox, Text } from "components";

type FAQsFaqcontentProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  | "frequentlyaskedOne"
  | "questionscounter"
  | "description"
  | "haventfoundthe"
  | "value"
  | "submitNow"
> &
  Partial<{
    frequentlyaskedOne: string;
    questionscounter: string;
    description: string;
    haventfoundthe: JSX.Element | string;
    value: string;
    submitNow: string;
  }>;

const questionsCounterOneOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const questionsCounterTwoOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const questionsCounterThreeOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const questionsCounterFourOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const questionsCounterFiveOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const questionsCounterSixOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const questionsCounterSevenOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const FAQsFaqcontent: React.FC<FAQsFaqcontentProps> = (props) => {
  return (
    <>
      <div className={props.className}>
        <Text
          className="md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-900 w-auto"
          size="txtPublicSansBold32"
        >
          {props?.frequentlyaskedOne}
        </Text>
        <div className="flex md:flex-col flex-row md:gap-10 gap-20 items-start justify-start max-w-6xl w-full">
          <div className="flex flex-1 flex-col gap-4 items-start justify-start w-full">
            <div className="flex flex-col items-center justify-center rounded-lg w-full">
              <div className="bg-white-A700 flex flex-col items-center justify-center rounded-lg shadow-bs10 w-full">
                <div className="flex flex-row sm:gap-10 items-start justify-between pl-4 pr-2 py-5 w-full">
                  <Text
                    className="text-base text-blue_gray-900 w-auto"
                    size="txtPublicSansSemiBold16"
                  >
                    {props?.questionscounter}
                  </Text>
                  <Img
                    className="h-5 w-5"
                    src="images/img_arrowup_blue_gray_900.svg"
                    alt="arrowup"
                  />
                </div>
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="flex flex-col items-start justify-start pb-4 pt-2 px-4 w-full">
                      <Text
                        className="leading-[24.00px] max-w-[504px] md:max-w-full text-base text-blue_gray-900"
                        size="txtPublicSansRegular16Bluegray900"
                      >
                        {props?.description}
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start w-full">
              <SelectBox
                className="!text-blue_gray-900 font-publicsans font-semibold text-base text-left w-full"
                placeholderClassName="!text-blue_gray-900"
                indicator={
                  <Img
                    className="h-5 w-5"
                    src="images/img_arrowdown_blue_gray_900.svg"
                    alt="arrow_down"
                  />
                }
                isMulti={false}
                name="questionsCounter_One"
                options={questionsCounterOneOptionsList}
                isSearchable={false}
                placeholder="Questions 2"
                shape="square"
                color="blue_gray_300_33"
                size="sm"
                variant="outline"
              />
              <div className="flex flex-col items-center justify-start w-full">
                <SelectBox
                  className="!text-blue_gray-900 font-publicsans font-semibold text-base text-left w-full"
                  placeholderClassName="!text-blue_gray-900"
                  indicator={
                    <Img
                      className="h-5 w-5"
                      src="images/img_arrowdown_blue_gray_900.svg"
                      alt="arrow_down"
                    />
                  }
                  isMulti={false}
                  name="questionsCounter_Two"
                  options={questionsCounterTwoOptionsList}
                  isSearchable={false}
                  placeholder="Questions 3"
                  shape="square"
                  color="blue_gray_300_33"
                  size="sm"
                  variant="outline"
                />
              </div>
              <SelectBox
                className="!text-blue_gray-900 font-publicsans font-semibold text-base text-left w-full"
                placeholderClassName="!text-blue_gray-900"
                indicator={
                  <Img
                    className="h-5 w-5"
                    src="images/img_arrowdown_blue_gray_900.svg"
                    alt="arrow_down"
                  />
                }
                isMulti={false}
                name="questionsCounter_Three"
                options={questionsCounterThreeOptionsList}
                isSearchable={false}
                placeholder="Questions 4"
                shape="square"
                color="blue_gray_300_33"
                size="sm"
                variant="outline"
              />
              <SelectBox
                className="!text-blue_gray-900 font-publicsans font-semibold text-base text-left w-full"
                placeholderClassName="!text-blue_gray-900"
                indicator={
                  <Img
                    className="h-5 w-5"
                    src="images/img_arrowdown_blue_gray_900.svg"
                    alt="arrow_down"
                  />
                }
                isMulti={false}
                name="questionsCounter_Four"
                options={questionsCounterFourOptionsList}
                isSearchable={false}
                placeholder="Questions 5"
                shape="square"
                color="blue_gray_300_33"
                size="sm"
                variant="outline"
              />
              <SelectBox
                className="!text-blue_gray-900 font-publicsans font-semibold text-base text-left w-full"
                placeholderClassName="!text-blue_gray-900"
                indicator={
                  <Img
                    className="h-5 w-5"
                    src="images/img_arrowdown_blue_gray_900.svg"
                    alt="arrow_down"
                  />
                }
                isMulti={false}
                name="questionsCounter_Five"
                options={questionsCounterFiveOptionsList}
                isSearchable={false}
                placeholder="Questions 6"
                shape="square"
                color="blue_gray_300_33"
                size="sm"
                variant="outline"
              />
              <SelectBox
                className="!text-blue_gray-900 font-publicsans font-semibold text-base text-left w-full"
                placeholderClassName="!text-blue_gray-900"
                indicator={
                  <Img
                    className="h-5 w-5"
                    src="images/img_arrowdown_blue_gray_900.svg"
                    alt="arrow_down"
                  />
                }
                isMulti={false}
                name="questionsCounter_Six"
                options={questionsCounterSixOptionsList}
                isSearchable={false}
                placeholder="Questions 7"
                shape="square"
                color="blue_gray_300_33"
                size="sm"
                variant="outline"
              />
              <SelectBox
                className="!text-blue_gray-900 font-publicsans font-semibold text-base text-left w-full"
                placeholderClassName="!text-blue_gray-900"
                indicator={
                  <Img
                    className="h-5 w-5"
                    src="images/img_arrowdown_blue_gray_900.svg"
                    alt="arrow_down"
                  />
                }
                isMulti={false}
                name="questionsCounter_Seven"
                options={questionsCounterSevenOptionsList}
                isSearchable={false}
                placeholder="Questions 8"
                shape="square"
                color="blue_gray_300_33"
                size="sm"
                variant="outline"
              />
            </div>
          </div>
          <div className="flex flex-1 flex-col gap-6 items-start justify-start w-full">
            <Text
              className="text-blue_gray-900 text-xl w-auto"
              size="txtPublicSansBold20"
            >
              {props?.haventfoundthe}
            </Text>
            <div className="flex flex-col items-start justify-start w-full">
              <Input
                name="wrap_One"
                placeholder="Name"
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
                placeholder="Email"
                className="!placeholder:text-blue_gray-300 !text-blue_gray-300 font-publicsans md:h-auto p-0 sm:h-auto text-left text-sm w-full"
                wrapClassName="w-full"
                shape="round"
                color="blue_gray_300_33"
                size="sm"
                variant="outline"
              ></Input>
            </div>
            <div className="flex flex-col items-center justify-start w-full">
              <div className="flex flex-col items-start justify-start w-full">
                <Input
                  name="wrap_Three"
                  placeholder="Subject"
                  className="!placeholder:text-blue_gray-300 !text-blue_gray-300 font-publicsans md:h-auto p-0 sm:h-auto text-left text-sm w-full"
                  wrapClassName="w-full"
                  shape="round"
                  color="blue_gray_300_33"
                  size="sm"
                  variant="outline"
                ></Input>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start rounded-lg w-full">
              <div className="border border-blue_gray-300_33 border-solid flex flex-col items-start justify-start px-3.5 py-4 rounded-lg w-full">
                <Text
                  className="text-blue_gray-300 text-sm w-auto"
                  size="txtPublicSansRegular14Bluegray300"
                >
                  {props?.value}
                </Text>
              </div>
            </div>
            <Button
              className="cursor-pointer font-bold font-publicsans h-12 min-w-[120px] text-[15px] text-center"
              shape="round"
              color="blue_gray_900"
              size="xl"
              variant="fill"
            >
              {props?.submitNow}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

FAQsFaqcontent.defaultProps = {
  frequentlyaskedOne: "Frequently asked questions",
  questionscounter: "Questions 1",
  description:
    "Curabitur nisi. Phasellus blandit leo ut odio. Donec posuere vulputate arcu. Donec mi odio, faucibus at, scelerisque quis, convallis in,",
  haventfoundthe: <>Haven&#39;t found the right help?</>,
  value: "Enter your message here",
  submitNow: "Submit Now",
};

export default FAQsFaqcontent;
