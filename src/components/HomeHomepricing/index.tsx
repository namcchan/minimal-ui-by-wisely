import React from "react";

import { Button, CheckBox, Img, List, Text } from "components";

type HomeHomepricingProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  | "interfacestarteTwo"
  | "flexibleplansfo"
  | "chooseyourplan"
  | "basic"
  | "free"
  | "upto5teammember"
  | "upto5teammemberone"
  | "permissionswork"
  | "label"
  | "basic1"
  | "free1"
  | "permissionswork1"
  | "label1"
  | "basic2"
  | "free2"
  | "label2"
  | "flexibleplansfoOne"
  | "flexibleplansfoTwo"
  | "contactUs"
> &
  Partial<{
    interfacestarteTwo: string;
    flexibleplansfo: JSX.Element | string;
    chooseyourplan: string;
    basic: string;
    free: string;
    upto5teammember: string;
    upto5teammemberone: string;
    permissionswork: string;
    label: string;
    basic1: string;
    free1: string;
    permissionswork1: string;
    label1: string;
    basic2: string;
    free2: string;
    label2: string;
    flexibleplansfoOne: string;
    flexibleplansfoTwo: string;
    contactUs: string;
  }>;

const HomeHomepricing: React.FC<HomeHomepricingProps> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-6 items-center justify-start w-auto sm:w-full">
          <Text
            className="text-blue_gray-300 text-center text-xs uppercase w-auto"
            size="txtPublicSansBold12"
          >
            {props?.interfacestarteTwo}
          </Text>
          <Text
            className="leading-[64.00px] max-w-[392px] md:max-w-full text-5xl sm:text-[38px] md:text-[44px] text-blue_gray-900 text-center"
            size="txtPublicSansExtraBold48"
          >
            {props?.flexibleplansfo}
          </Text>
          <Text
            className="text-base text-blue_gray-500 text-center w-auto"
            size="txtPublicSansRegular16"
          >
            {props?.chooseyourplan}
          </Text>
        </div>
        <div className="flex flex-col md:gap-10 gap-20 items-center justify-start w-full">
          <List
            className="border border-blue_gray-300_28 border-dashed sm:flex-col flex-row md:gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-start max-w-6xl rounded-[16px] w-full"
            orientation="horizontal"
          >
            <div className="flex flex-1 flex-col gap-10 h-[659px] md:h-auto items-end justify-start sm:ml-[0] pb-10 pt-20 px-10 sm:px-5 w-full">
              <div className="flex flex-col gap-4 items-start justify-start w-full">
                <Text
                  className="text-blue_gray-300 text-right text-xs uppercase w-auto"
                  size="txtPublicSansBold12"
                >
                  {props?.basic}
                </Text>
                <div className="relative w-[36%]">
                  <Text
                    className="m-auto text-2xl md:text-[22px] text-blue_gray-900 text-right sm:text-xl w-auto"
                    size="txtPublicSansBold24"
                  >
                    {props?.free}
                  </Text>
                  <div className="absolute bg-teal-500_85 bottom-[0] h-2 left-[0] w-[38%]"></div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start w-full">
                <Img
                  className="h-5 w-5"
                  src="images/img_trash.svg"
                  alt="trash"
                />
              </div>
              <div className="flex flex-col gap-5 items-start justify-start w-full">
                <CheckBox
                  className="font-publicsans text-blue_gray-900 text-left text-sm"
                  inputClassName="mr-[5px]"
                  name="3prototypes"
                  id="3prototypes"
                  label="One end products"
                  shape="square"
                  size="xs"
                ></CheckBox>
                <CheckBox
                  className="font-publicsans text-blue_gray-900 text-left text-sm"
                  inputClassName="mr-[5px]"
                  name="3boards"
                  id="3boards"
                  label="12 months updates"
                  shape="square"
                  size="xs"
                ></CheckBox>
                <CheckBox
                  className="font-publicsans text-blue_gray-900 text-left text-sm"
                  inputClassName="mr-[5px]"
                  name="3boards_One"
                  id="3boards_One"
                  label="6 months of support"
                  shape="square"
                  size="xs"
                ></CheckBox>
                <Img
                  className="h-px w-full"
                  src="images/img_divider_blue_gray_300.svg"
                  alt="divider"
                />
                <CheckBox
                  className="font-publicsans text-blue_gray-900 text-left text-sm"
                  inputClassName="mr-[5px]"
                  name="3boards_Two"
                  id="3boards_Two"
                  label="JavaScript version"
                  shape="square"
                  size="xs"
                ></CheckBox>
                <div className="flex flex-row gap-2 items-center justify-start w-auto">
                  <Img
                    className="h-4 w-4"
                    src="images/img_close_blue_gray_300.svg"
                    alt="close"
                  />
                  <Text
                    className="line-through text-blue_gray-300 text-sm w-auto"
                    size="txtPublicSansRegular14Bluegray300"
                  >
                    {props?.upto5teammember}
                  </Text>
                </div>
                <div className="flex flex-row gap-2 items-center justify-start w-auto">
                  <Img
                    className="h-4 w-4"
                    src="images/img_close_blue_gray_300.svg"
                    alt="close_One"
                  />
                  <Text
                    className="line-through text-blue_gray-300 text-sm w-auto"
                    size="txtPublicSansRegular14Bluegray300"
                  >
                    {props?.upto5teammemberone}
                  </Text>
                </div>
                <div className="flex flex-row gap-2 items-center justify-start w-auto">
                  <Img
                    className="h-4 w-4"
                    src="images/img_close_blue_gray_300.svg"
                    alt="close_Two"
                  />
                  <Text
                    className="line-through text-blue_gray-300 text-sm w-auto"
                    size="txtPublicSansRegular14Bluegray300"
                  >
                    {props?.permissionswork}
                  </Text>
                </div>
              </div>
              <div className="flex flex-row gap-2 h-[30px] md:h-auto items-center justify-center px-1 rounded-lg w-auto">
                <Text
                  className="text-[13px] text-blue_gray-900 w-auto"
                  size="txtPublicSansBold13"
                >
                  {props?.label}
                </Text>
                <Img
                  className="h-[18px] w-[18px]"
                  src="images/img_arrowright.svg"
                  alt="arrowright"
                />
              </div>
            </div>
            <div className="border-blue_gray-300_28 border-dashed border-x flex flex-1 flex-col gap-10 items-end justify-start sm:ml-[0] pb-10 pt-20 px-10 sm:px-5 w-full">
              <div className="flex flex-col gap-4 items-start justify-start w-full">
                <Text
                  className="text-blue_gray-300 text-right text-xs uppercase w-auto"
                  size="txtPublicSansBold12"
                >
                  {props?.basic1}
                </Text>
                <div className="relative w-[54%]">
                  <Text
                    className="m-auto text-2xl md:text-[22px] text-blue_gray-900 text-right sm:text-xl w-auto"
                    size="txtPublicSansBold24"
                  >
                    {props?.free1}
                  </Text>
                  <div className="absolute bg-amber-A700_85 bottom-[0] h-2 left-[0] w-1/4"></div>
                </div>
              </div>
              <div className="flex flex-row gap-4 items-center justify-start w-full">
                <Img
                  className="h-5 w-5"
                  src="images/img_computer.svg"
                  alt="computer"
                />
                <Img
                  className="h-5 w-5"
                  src="images/img_trash.svg"
                  alt="trash"
                />
                <Img className="h-5 w-5" src="images/img_sort.svg" alt="sort" />
              </div>
              <div className="flex flex-col gap-5 items-start justify-start w-full">
                <CheckBox
                  className="font-publicsans text-blue_gray-900 text-left text-sm"
                  inputClassName="mr-[5px]"
                  name="3prototypes"
                  id="3prototypes2"
                  label="One end products"
                  shape="square"
                  size="xs"
                ></CheckBox>
                <CheckBox
                  className="font-publicsans text-blue_gray-900 text-left text-sm"
                  inputClassName="mr-[5px]"
                  name="3prototypes_One"
                  id="3prototypes_One"
                  label="12 months updates"
                  shape="square"
                  size="xs"
                ></CheckBox>
                <CheckBox
                  className="font-publicsans text-blue_gray-900 text-left text-sm"
                  inputClassName="mr-[5px]"
                  name="3prototypes_Two"
                  id="3prototypes_Two"
                  label="6 months of support"
                  shape="square"
                  size="xs"
                ></CheckBox>
                <Img
                  className="h-px w-full"
                  src="images/img_divider_blue_gray_300.svg"
                  alt="divider"
                />
                <CheckBox
                  className="font-publicsans text-blue_gray-900 text-left text-sm"
                  inputClassName="mr-[5px]"
                  name="3boards"
                  id="3boards4"
                  label="JavaScript version"
                  shape="square"
                  size="xs"
                ></CheckBox>
                <CheckBox
                  className="font-publicsans text-blue_gray-900 text-left text-sm"
                  inputClassName="mr-[5px]"
                  name="3boards_One"
                  id="3boards_One2"
                  label="TypeScript version"
                  shape="square"
                  size="xs"
                ></CheckBox>
                <CheckBox
                  className="font-publicsans text-blue_gray-900 text-left text-sm"
                  inputClassName="mr-[5px]"
                  name="upto5teammember"
                  id="upto5teammember"
                  label="Design Resources"
                  shape="square"
                  size="xs"
                ></CheckBox>
                <div className="flex flex-row gap-2 items-center justify-start w-auto">
                  <Img
                    className="h-4 w-4"
                    src="images/img_close_blue_gray_300.svg"
                    alt="close"
                  />
                  <Text
                    className="line-through text-blue_gray-300 text-sm w-auto"
                    size="txtPublicSansRegular14Bluegray300"
                  >
                    {props?.permissionswork1}
                  </Text>
                </div>
              </div>
              <div className="flex flex-row gap-2 h-[30px] md:h-auto items-center justify-center px-1 rounded-lg w-auto">
                <Text
                  className="text-[13px] text-blue_gray-900 w-auto"
                  size="txtPublicSansBold13"
                >
                  {props?.label1}
                </Text>
                <Img
                  className="h-[18px] w-[18px]"
                  src="images/img_arrowright.svg"
                  alt="arrowright"
                />
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-10 h-[659px] md:h-auto items-end justify-start sm:ml-[0] pb-10 pt-20 px-10 sm:px-5 w-full">
              <div className="flex flex-col gap-4 items-start justify-start w-full">
                <Text
                  className="text-blue_gray-300 text-right text-xs uppercase w-auto"
                  size="txtPublicSansBold12"
                >
                  {props?.basic2}
                </Text>
                <div className="relative w-[37%]">
                  <Text
                    className="m-auto text-2xl md:text-[22px] text-blue_gray-900 text-right sm:text-xl w-auto"
                    size="txtPublicSansBold24"
                  >
                    {props?.free2}
                  </Text>
                  <div className="absolute bg-deep_orange-500_85 bottom-[0] h-2 left-[0] w-[37%]"></div>
                </div>
              </div>
              <div className="flex flex-row gap-4 items-center justify-start w-full">
                <Img
                  className="h-5 w-5"
                  src="images/img_computer.svg"
                  alt="computer"
                />
                <Img
                  className="h-5 w-5"
                  src="images/img_trash.svg"
                  alt="trash"
                />
                <Img className="h-5 w-5" src="images/img_sort.svg" alt="sort" />
              </div>
              <div className="flex flex-col gap-5 items-start justify-start w-full">
                <CheckBox
                  className="font-publicsans text-blue_gray-900 text-left text-sm"
                  inputClassName="mr-[5px]"
                  name="3prototypes"
                  id="3prototypes5"
                  label="One end products"
                  shape="square"
                  size="xs"
                ></CheckBox>
                <CheckBox
                  className="font-publicsans text-blue_gray-900 text-left text-sm"
                  inputClassName="mr-[5px]"
                  name="3prototypes_One"
                  id="3prototypes_One2"
                  label="12 months updates"
                  shape="square"
                  size="xs"
                ></CheckBox>
                <CheckBox
                  className="font-publicsans text-blue_gray-900 text-left text-sm"
                  inputClassName="mr-[5px]"
                  name="3prototypes_Two"
                  id="3prototypes_Two2"
                  label="6 months of support"
                  shape="square"
                  size="xs"
                ></CheckBox>
                <Img
                  className="h-px w-full"
                  src="images/img_divider_blue_gray_300.svg"
                  alt="divider"
                />
                <CheckBox
                  className="font-publicsans text-blue_gray-900 text-left text-sm"
                  inputClassName="mr-[5px]"
                  name="3boards"
                  id="3boards6"
                  label="JavaScript version"
                  shape="square"
                  size="xs"
                ></CheckBox>
                <CheckBox
                  className="font-publicsans text-blue_gray-900 text-left text-sm"
                  inputClassName="mr-[5px]"
                  name="3boards_One"
                  id="3boards_One3"
                  label="TypeScript version"
                  shape="square"
                  size="xs"
                ></CheckBox>
                <CheckBox
                  className="font-publicsans text-blue_gray-900 text-left text-sm"
                  inputClassName="mr-[5px]"
                  name="upto5teammember"
                  id="upto5teammember2"
                  label="Design Resources"
                  shape="square"
                  size="xs"
                ></CheckBox>
                <CheckBox
                  className="font-publicsans text-blue_gray-900 text-left text-sm"
                  inputClassName="mr-[5px]"
                  name="permissionswork"
                  id="permissionswork"
                  label="Commercial applications"
                  shape="square"
                  size="xs"
                ></CheckBox>
              </div>
              <div className="flex flex-row gap-2 h-[30px] md:h-auto items-center justify-center px-1 rounded-lg w-auto">
                <Text
                  className="text-[13px] text-blue_gray-900 w-auto"
                  size="txtPublicSansBold13"
                >
                  {props?.label2}
                </Text>
                <Img
                  className="h-[18px] w-[18px]"
                  src="images/img_arrowright.svg"
                  alt="arrowright"
                />
              </div>
            </div>
          </List>
          <div className="flex flex-col gap-10 items-center justify-start w-full">
            <div className="flex flex-col gap-4 items-center justify-start w-full">
              <Text
                className="text-2xl md:text-[22px] text-blue_gray-900 text-center sm:text-xl w-auto"
                size="txtPublicSansBold24"
              >
                {props?.flexibleplansfoOne}
              </Text>
              <Text
                className="text-base text-blue_gray-500 text-center w-full"
                size="txtPublicSansRegular16"
              >
                {props?.flexibleplansfoTwo}
              </Text>
            </div>
            <Button
              className="cursor-pointer font-bold font-publicsans h-12 min-w-[109px] text-[15px] text-center"
              shape="round"
              color="blue_gray_900"
              size="xl"
              variant="fill"
            >
              {props?.contactUs}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

HomeHomepricing.defaultProps = {
  interfacestarteTwo: "pricing plans",
  flexibleplansfo: (
    <>
      The right plan <br />
      for your business
    </>
  ),
  chooseyourplan:
    "Choose the perfect plan for your needs. Always flexible to grow",
  basic: "LICENSE",
  free: "Standard",
  upto5teammember: "TypeScript version",
  upto5teammemberone: "Design Resources",
  permissionswork: "Commercial applications",
  label: "Learn more",
  basic1: "LICENSE",
  free1: "Standard Plus",
  permissionswork1: "Commercial applications",
  label1: "Learn more",
  basic2: "LICENSE",
  free2: "Extended",
  label2: "Learn more",
  flexibleplansfoOne: "Still have questions?",
  flexibleplansfoTwo:
    "Please describe your case to receive the most accurate advice",
  contactUs: "Contact us",
};

export default HomeHomepricing;
