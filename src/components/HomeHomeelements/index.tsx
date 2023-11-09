import React from "react";

import {
  Button,
  FloatingInput,
  Img,
  Line,
  List,
  RatingBar,
  Text,
} from "components";

type HomeHomeelementsProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  | "addToCart"
  | "upload"
  | "labelOne"
  | "labelTwo"
  | "labelThree"
  | "labelFour"
  | "labelFive"
  | "labelSix"
  | "more"
  | "labelSeven"
  | "textThree"
  | "descriptionOne"
  | "labelEight"
  | "label"
  | "label1"
  | "label2"
  | "titleSix"
  | "subtitle"
  | "subtitleOne"
  | "valueThree"
  | "interfacestarteOne"
  | "hugepackofelemeOne"
  | "descriptionTwo"
  | "viewAllComponents"
> &
  Partial<{
    addToCart: string;
    upload: string;
    labelOne: string;
    labelTwo: string;
    labelThree: string;
    labelFour: string;
    labelFive: string;
    labelSix: string;
    more: string;
    labelSeven: string;
    textThree: string;
    descriptionOne: string;
    labelEight: string;
    label: string;
    label1: string;
    label2: string;
    titleSix: string;
    subtitle: string;
    subtitleOne: string;
    valueThree: string;
    interfacestarteOne: string;
    hugepackofelemeOne: string;
    descriptionTwo: JSX.Element | string;
    viewAllComponents: string;
  }>;

const HomeHomeelements: React.FC<HomeHomeelementsProps> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="border border-blue_gray-300_28 border-dashed flex flex-col gap-10 items-center justify-center max-w-[656px] p-10 sm:px-5 rounded-[16px] w-full">
          <div className="flex sm:flex-col flex-row gap-10 items-center justify-center w-full">
            <Button
              className="cursor-pointer flex items-center justify-center min-w-[130px]"
              leftIcon={
                <Img
                  className="h-5 mr-2"
                  src="images/img_cart.svg"
                  alt="cart"
                />
              }
              shape="round"
              color="teal_500"
              size="md"
              variant="fill"
            >
              <div className="!text-white-A700 font-bold font-publicsans text-center text-sm">
                {props?.addToCart}
              </div>
            </Button>
            <Button
              className="cursor-pointer flex items-center justify-center min-w-[100px]"
              leftIcon={
                <Img
                  className="h-5 mr-2"
                  src="images/img_start_icon_teal_700.svg"
                  alt="start icon"
                />
              }
              shape="round"
              color="teal_500_14"
              size="md"
              variant="fill"
            >
              <div className="!text-teal-700 font-bold font-publicsans text-center text-sm">
                {props?.upload}
              </div>
            </Button>
            <Button
              className="flex h-12 items-center justify-center rounded-[50%] w-12"
              shape="circle"
              color="cyan_A700"
              size="lg"
              variant="fill"
            >
              <Img
                className="h-6"
                src="images/img_search_white_a700_48x48.svg"
                alt="search"
              />
            </Button>
            <div
              className="bg-cover bg-no-repeat flex flex-col h-11 md:h-auto items-center justify-center w-11"
              style={{
                backgroundImage: "url('images/img_circularprogress.svg')",
              }}
            >
              <Text
                className="text-blue_gray-900 text-center text-xs w-[26px]"
                size="txtPublicSansRegular12Bluegray900"
              >
                {props?.labelOne}
              </Text>
            </div>
          </div>
          <div className="flex sm:flex-col flex-row gap-10 items-center justify-center w-full">
            <div className="relative w-[229px]">
              <div className="flex flex-col items-center justify-start m-auto w-full">
                <div className="flex flex-row items-center justify-between w-full">
                  <div className="border-b-2 border-blue_gray-900 border-solid flex flex-col h-12 md:h-auto items-center justify-center w-auto">
                    <Text
                      className="text-blue_gray-900 text-sm w-auto"
                      size="txtPublicSansSemiBold14"
                    >
                      {props?.labelTwo}
                    </Text>
                  </div>
                  <div className="flex flex-col h-12 md:h-auto items-center justify-center w-12">
                    <Text
                      className="text-blue_gray-500 text-sm w-auto"
                      size="txtPublicSansSemiBold14Bluegray500"
                    >
                      {props?.labelThree}
                    </Text>
                  </div>
                  <div className="flex flex-col h-12 md:h-auto items-center justify-center w-12">
                    <Text
                      className="text-blue_gray-500 text-sm w-auto"
                      size="txtPublicSansSemiBold14Bluegray500"
                    >
                      {props?.labelFour}
                    </Text>
                  </div>
                </div>
              </div>
              <Line className="absolute bg-blue_gray-300_14 bottom-[0] h-0.5 inset-x-[0] mx-auto w-full" />
            </div>
            <div className="bg-white-A700 border border-blue_gray-300_14 border-solid flex flex-row gap-1 items-start justify-start p-1 rounded-lg w-auto">
              <Button
                className="flex h-9 items-center justify-center w-9"
                shape="round"
                size="md"
              >
                <Img
                  className="h-5"
                  src="images/img_dashboard.svg"
                  alt="dashboard_One"
                />
              </Button>
              <div className="bg-deep_purple-A200_14 flex flex-row gap-2 h-9 md:h-auto items-center justify-center px-2 rounded-lg w-auto">
                <Img
                  className="h-5 w-5"
                  src="images/img_iconssolidic_deep_purple_700.svg"
                  alt="iconssolidic_Four"
                />
                <Text
                  className="text-deep_purple-A200_01 text-sm w-auto"
                  size="txtPublicSansSemiBold14DeeppurpleA20001"
                >
                  {props?.labelFive}
                </Text>
              </div>
              <Button
                className="flex h-9 items-center justify-center w-9"
                shape="round"
                size="md"
              >
                <Img
                  className="h-5"
                  src="images/img_notification.svg"
                  alt="notification"
                />
              </Button>
            </div>
            <div className="bg-deep_orange-500_28 flex flex-row gap-[-2px] h-8 md:h-auto items-center justify-start px-1 rounded-lg w-auto">
              <div className="bg-gray-300 flex flex-col items-center justify-center rounded-[50%] w-6">
                <div className="flex flex-col h-6 md:h-auto items-center justify-center rounded-[50%] w-6">
                  <Img
                    className="h-6 md:h-auto rounded-[50%] w-6"
                    src="images/img_imgavatar1.png"
                    alt="imgavatarOne"
                  />
                </div>
              </div>
              <div className="flex flex-col items-center justify-start px-2 w-auto">
                <Text
                  className="text-[13px] text-center text-red-900 w-auto"
                  size="txtPublicSansMedium13"
                >
                  {props?.labelSix}
                </Text>
              </div>
              <Img
                className="h-5 w-5"
                src="images/img_close_red_900.svg"
                alt="close_One"
              />
            </div>
          </div>
          <div className="flex sm:flex-col flex-row gap-10 items-center justify-center w-full">
            <div className="bg-gray-300 flex flex-col items-center justify-center rounded-[50%] w-10">
              <div className="flex flex-col h-10 md:h-auto items-center justify-center rounded-[50%] w-10">
                <Img
                  className="h-10 md:h-auto rounded-[50%] w-10"
                  src="images/img_imgavatar20.png"
                  alt="imgavatarTwenty"
                />
              </div>
            </div>
            <div className="flex relative w-[130px]">
              <div className="flex my-auto w-[77%]">
                <div className="flex my-auto w-[70%]">
                  <div className="flex flex-col items-center justify-center ml-[undefinedpx] my-auto outline outline-[2px] outline-white-A700 rounded-[50%] w-10 z-[1]">
                    <div className="flex flex-col h-10 md:h-auto items-center justify-center rounded-[50%] w-10">
                      <Img
                        className="h-10 md:h-auto rounded-[50%] w-10"
                        src="images/img_imgavatar1_40x40.png"
                        alt="imgavatarOne_One"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-center ml-[-10px] my-auto outline outline-[2px] outline-white-A700 rounded-[50%] w-10 z-[1]">
                    <div className="flex flex-col h-10 md:h-auto items-center justify-center rounded-[50%] w-10">
                      <Img
                        className="h-10 md:h-auto rounded-[50%] w-10"
                        src="images/img_imgavatar2.png"
                        alt="imgavatarTwo"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center ml-[-10px] my-auto outline outline-[2px] outline-white-A700 rounded-[50%] w-10 z-[1]">
                  <div className="flex flex-col h-10 md:h-auto items-center justify-center rounded-[50%] w-10">
                    <Img
                      className="h-10 md:h-auto rounded-[50%] w-10"
                      src="images/img_imgavatar4.png"
                      alt="imgavatarFour"
                    />
                  </div>
                </div>
              </div>
              <Text
                className="bg-green-A100 flex h-10 items-center justify-center ml-[-10px] my-auto outline outline-[2px] outline-white-A700 rounded-[50%] text-center text-teal-700 text-xs w-10 z-[1]"
                size="txtPublicSansMedium12"
              >
                {props?.more}
              </Text>
            </div>
            <div className="flex flex-col items-center justify-start w-auto">
              <RatingBar
                className="flex justify-between w-[120px]"
                value={1}
                starCount={5}
                size={24}
              ></RatingBar>
            </div>
            <div className="bg-blue_gray-900 flex flex-row gap-1.5 h-6 md:h-auto items-center justify-start px-1.5 rounded-md w-auto">
              <Img
                className="h-4 w-4"
                src="images/img_starticon_white_a700.svg"
                alt="starticon"
              />
              <Text
                className="text-center text-white-A700 text-xs w-auto"
                size="txtPublicSansBold12WhiteA700"
              >
                {props?.labelSeven}
              </Text>
            </div>
          </div>
          <div className="flex sm:flex-col flex-row gap-10 items-center justify-center w-full">
            <div className="h-11 relative w-[47%] sm:w-full">
              <div className="flex flex-col gap-[-2px] items-center justify-center mb-[-12px] mt-auto w-auto z-[1]">
                <div className="flex flex-col items-center justify-start w-[27px]">
                  <div className="bg-blue_gray-900 flex flex-col items-start justify-start px-1.5 py-[3px] rounded w-auto">
                    <Text
                      className="text-center text-white-A700 text-xs"
                      size="txtPublicSansRegular12WhiteA700"
                    >
                      {props?.textThree}
                    </Text>
                  </div>
                  <Img
                    className="h-1 w-2"
                    src="images/img_arrow.svg"
                    alt="arrow"
                  />
                </div>
                <div className="h-3 relative w-[91%]">
                  <Line className="absolute bg-teal-500 h-0.5 inset-y-[0] left-[0] my-auto rounded-[1px] w-[86%]" />
                  <div className="absolute bg-teal-500 h-3 inset-y-[0] my-auto right-[0] rounded-[50%] w-3"></div>
                </div>
              </div>
              <div
                className="bg-cover bg-no-repeat flex flex-col h-3 items-center justify-start mt-auto mx-auto py-[5px] w-full"
                style={{ backgroundImage: "url('images/img_group102.svg')" }}
              >
                <Line className="bg-teal-500_77 h-0.5 rounded-[1px] w-full" />
              </div>
            </div>
            <div className="bg-light_green-100 flex flex-1 flex-row items-center justify-start pr-2 py-1.5 rounded-lg w-full">
              <div className="flex flex-col h-[60px] md:h-auto items-start justify-start pl-4 pr-3 pt-2">
                <Img
                  className="h-6 w-6"
                  src="images/img_checkmark_green_a700_01.svg"
                  alt="checkmark_Two"
                />
              </div>
              <div className="flex flex-1 flex-col items-start justify-center pr-2 py-2 w-full">
                <Text
                  className="leading-[22.00px] max-w-[172px] md:max-w-full text-sm text-teal-900_01"
                  size="txtPublicSansRegular14Teal90001"
                >
                  {props?.descriptionOne}
                </Text>
              </div>
              <div className="flex flex-col h-[60px] md:h-auto items-start justify-start pt-1">
                <Button
                  className="flex h-7 items-center justify-center rounded-[50%] w-7"
                  shape="circle"
                  size="sm"
                >
                  <Img
                    className="h-[18px]"
                    src="images/img_iconssolidic_teal_900_01.svg"
                    alt="iconssolidic_Five"
                  />
                </Button>
              </div>
            </div>
          </div>
          <div className="flex sm:flex-col flex-row gap-10 items-center justify-center w-full">
            <div className="flex flex-row gap-[9px] items-center justify-start w-auto">
              <Img
                className="h-[38px] w-[33px]"
                src="images/img_switchcontainer.svg"
                alt="switchcontainer"
              />
              <Text
                className="text-blue_gray-900 text-sm w-auto"
                size="txtPublicSansRegular14"
              >
                {props?.labelEight}
              </Text>
            </div>
            <List
              className="sm:flex-1 sm:flex-col flex-row gap-10 grid sm:grid-cols-1 grid-cols-3 w-[76%] sm:w-full"
              orientation="horizontal"
            >
              <div className="flex flex-row items-center justify-start w-auto">
                <div className="flex flex-col items-start justify-start p-2 w-10">
                  <Img
                    className="h-6 w-6"
                    src="images/img_iconssolidicradioon.svg"
                    alt="iconssolidicrad"
                  />
                </div>
                <Text
                  className="text-blue_gray-900 text-sm w-auto"
                  size="txtPublicSansRegular14"
                >
                  {props?.label}
                </Text>
              </div>
              <div className="flex flex-row items-center justify-start w-auto">
                <div className="flex flex-col items-center justify-center p-2 w-10">
                  <Img
                    className="h-6 w-6"
                    src="images/img_checkmark_cyan_a700.svg"
                    alt="checkmark"
                  />
                </div>
                <Text
                  className="text-blue_gray-900 text-sm w-auto"
                  size="txtPublicSansRegular14"
                >
                  {props?.label1}
                </Text>
              </div>
              <div className="flex flex-row items-center justify-start w-auto">
                <div className="flex flex-col items-center justify-center p-2 w-10">
                  <Img
                    className="h-6 w-6"
                    src="images/img_menu.svg"
                    alt="menu"
                  />
                </div>
                <Text
                  className="text-blue_gray-900 text-sm w-auto"
                  size="txtPublicSansRegular14"
                >
                  {props?.label2}
                </Text>
              </div>
            </List>
          </div>
          <div className="flex sm:flex-col flex-row gap-10 items-start justify-center w-full">
            <div className="bg-white-A700 flex flex-col items-center justify-start rounded-[16px] shadow-bs4 w-auto">
              <div className="flex flex-col items-start justify-start sm:pl-5 pl-6 pr-4 py-6 w-80">
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="flex flex-col gap-0.5 items-start justify-start w-full">
                    <Text
                      className="text-base text-blue_gray-900 w-full"
                      size="txtPublicSansSemiBold16"
                    >
                      {props?.titleSix}
                    </Text>
                    <Text
                      className="text-blue_gray-500 text-xs w-full"
                      size="txtPublicSansRegular12"
                    >
                      {props?.subtitle}
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start px-2 w-full">
                <Img
                  className="h-[180px] md:h-auto object-cover rounded-[12px] w-full"
                  src="images/img_img_180x304.png"
                  alt="img_One"
                />
              </div>
              <div className="flex flex-col items-start justify-start pt-4 px-5 w-full">
                <Text
                  className="leading-[22.00px] max-w-[280px] md:max-w-full text-blue_gray-500 text-sm"
                  size="txtPublicSansRegular14Bluegray500"
                >
                  {props?.subtitleOne}
                </Text>
              </div>
              <div className="flex flex-row items-center justify-between px-4 py-2 w-full">
                <Button
                  className="flex h-9 items-center justify-center w-9"
                  shape="circle"
                  size="md"
                >
                  <Img
                    className="h-5"
                    src="images/img_favorite.svg"
                    alt="favorite_One"
                  />
                </Button>
                <div className="flex flex-row items-center justify-start w-auto">
                  <Button
                    className="flex h-9 items-center justify-center w-9"
                    shape="circle"
                    size="md"
                  >
                    <Img
                      className="h-5"
                      src="images/img_share_blue_gray_500.svg"
                      alt="share_Two"
                    />
                  </Button>
                  <Button
                    className="flex h-9 items-center justify-center w-9"
                    shape="circle"
                    size="md"
                  >
                    <Img
                      className="h-5"
                      src="images/img_dashboard.svg"
                      alt="dashboard_Two"
                    />
                  </Button>
                </div>
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-6 items-start justify-start w-full">
              <div className="flex flex-col items-start justify-start w-full">
                <FloatingInput
                  wrapClassName="placeholder:bg-white-A700 font-publicsans placeholder:left-3.5 p-0 sm:pr-5 placeholder:text-blue_gray-500 text-blue_gray-900 text-left text-sm placeholder:top-[0] w-full"
                  className="font-publicsans p-0 sm:pr-5 text-blue_gray-900 text-left text-sm w-full"
                  name="value_One"
                  labelClasses="bg-white-A700 left-3.5 top-[0] text-blue_gray-500"
                  focusedClasses="translate-y-[18px] scale-[1]"
                  wrapperClasses="w-full top-[0]"
                  labelText="Text Field"
                  defaultText="Value"
                ></FloatingInput>
              </div>
              <div className="flex flex-col items-start justify-start w-full">
                <FloatingInput
                  wrapClassName="bg-transparent border border-blue_gray-300_33 border-solid flex pl-3.5 pr-[35px] py-[18px] rounded-lg top-[0] w-full"
                  className="font-publicsans p-0 placeholder:bg-white-A700 placeholder:left-3.5 placeholder:text-blue_gray-500 placeholder:top-[0] sm:pr-5 text-blue_gray-900 text-left text-sm w-full"
                  name="value_Two"
                  labelClasses="bg-white-A700 left-3.5 top-[0] text-blue_gray-500"
                  focusedClasses="translate-y-[19px] scale-[1]"
                  wrapperClasses="w-full top-[0]"
                  labelText="Select"
                  defaultText="Option"
                  suffix={
                    <Img
                      className="top-[0] my-auto"
                      src="images/img_arrowdown_blue_gray_500.svg"
                      alt="arrow_down"
                    />
                  }
                ></FloatingInput>
              </div>
              <div className="flex flex-col items-start justify-start rounded-lg w-full">
                <div className="border border-blue_gray-300_33 border-solid flex flex-col items-start justify-start px-3.5 py-4 rounded-lg w-full">
                  <Text
                    className="text-blue_gray-300 text-sm w-auto"
                    size="txtPublicSansRegular14Bluegray300"
                  >
                    {props?.valueThree}
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-10 items-start justify-start pl-10 sm:pl-5 pt-[120px] w-full">
          <div className="flex flex-col gap-6 items-start justify-start w-full">
            <Text
              className="text-blue_gray-300 text-xs uppercase w-full"
              size="txtPublicSansBold12"
            >
              {props?.interfacestarteOne}
            </Text>
            <Text
              className="leading-[64.00px] max-w-[272px] md:max-w-full text-5xl sm:text-[38px] md:text-[44px] text-blue_gray-900"
              size="txtPublicSansExtraBold48"
            >
              {props?.hugepackofelemeOne}
            </Text>
            <Text
              className="leading-[24.00px] max-w-[416px] md:max-w-full text-base text-blue_gray-500"
              size="txtPublicSansRegular16"
            >
              {props?.descriptionTwo}
            </Text>
          </div>
          <Button
            className="cursor-pointer flex h-12 items-center justify-center min-w-[216px]"
            rightIcon={
              <Img
                className="h-6 ml-2"
                src="images/img_arrowright_blue_gray_900.svg"
                alt="arrow_right"
              />
            }
            shape="round"
            color="blue_gray_300_51"
            size="lg"
            variant="outline"
          >
            <div className="font-bold font-publicsans text-[15px] text-left">
              {props?.viewAllComponents}
            </div>
          </Button>
        </div>
      </div>
    </>
  );
};

HomeHomeelements.defaultProps = {
  addToCart: "Add To Cart",
  upload: "Upload",
  labelOne: "80%",
  labelTwo: "Angular",
  labelThree: "React",
  labelFour: "Vue",
  labelFive: "Label",
  labelSix: "Chip",
  more: "+8",
  labelSeven: "Label",
  textThree: "20",
  descriptionOne: "This is an Success alert — check it out!",
  labelEight: "Switch",
  label: "Radio Button",
  label1: "Checked",
  label2: "Indeterminate",
  titleSix: "Jayvion Simon",
  subtitle: "California, United States",
  subtitleOne:
    "Phasellus dolor. Fusce egestas elit eget lorem. Quisque id odio.",
  valueThree: "Textarea",
  interfacestarteOne: "Interface Starter Kit",
  hugepackofelemeOne: "Huge pack of elements",
  descriptionTwo: (
    <>
      We collected most popular elements. <br />
      Menu, sliders, buttons, inputs etc. are all here. Just dive in!
    </>
  ),
  viewAllComponents: "View All Components",
};

export default HomeHomeelements;
