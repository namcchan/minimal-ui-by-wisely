import React from "react";

import { Button, Img, Input, Text } from "components";

type MailNewFullScreenMailcomposeProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  | "messagetext"
  | "totext"
  | "cctext"
  | "bcctext"
  | "fonttext"
  | "writesomethingtext"
  | "sendbutton"
> &
  Partial<{
    messagetext: string;
    totext: string;
    cctext: string;
    bcctext: string;
    fonttext: string;
    writesomethingtext: string;
    sendbutton: string;
  }>;

const MailNewFullScreenMailcompose: React.FC<
  MailNewFullScreenMailcomposeProps
> = (props) => {
  return (
    <>
      <div
        className={props.className}
        style={{ backgroundImage: "url('images/img_dialognewcreditcard.svg')" }}
      >
        <div className="bg-white-A700 flex flex-col h-[992px] md:h-auto items-start justify-start max-w-[1408px] rounded-[16px] shadow-bs12 w-full">
          <div className="bg-gray-100 flex flex-row md:gap-10 items-center justify-between pl-4 pr-2 py-3 w-full">
            <Text
              className="text-blue_gray-900 text-lg w-auto"
              size="txtPublicSansBold18Bluegray900"
            >
              {props?.messagetext}
            </Text>
            <div className="flex flex-row items-start justify-start w-auto">
              <Button
                className="flex h-9 items-center justify-center w-9"
                shape="circle"
                size="md"
              >
                <Img
                  className="h-5"
                  src="images/img_minimize_blue_gray_500.svg"
                  alt="minimize"
                />
              </Button>
              <Button
                className="flex h-9 items-center justify-center w-9"
                shape="circle"
                size="md"
              >
                <Img
                  className="h-5"
                  src="images/img_close_blue_gray_500.svg"
                  alt="close"
                />
              </Button>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start w-full">
            <div className="border-b border-blue_gray-300_14 border-solid flex flex-row md:gap-10 items-start justify-between px-4 py-3 w-full">
              <Text
                className="flex-1 text-blue_gray-300 text-sm w-auto"
                size="txtPublicSansRegular14Bluegray300"
              >
                {props?.totext}
              </Text>
              <div className="flex flex-row gap-1 items-start justify-start w-auto">
                <Text
                  className="text-blue_gray-900 text-sm"
                  size="txtPublicSansSemiBold14"
                >
                  {props?.cctext}
                </Text>
                <Text
                  className="text-blue_gray-900 text-sm w-auto"
                  size="txtPublicSansSemiBold14"
                >
                  {props?.bcctext}
                </Text>
              </div>
            </div>
            <Input
              name="subject"
              placeholder="Subject"
              className="!placeholder:text-blue_gray-300 !text-blue_gray-300 font-publicsans p-0 text-left text-sm w-full"
              wrapClassName="w-full"
              shape="square"
              color="blue_gray_300_14"
              size="xs"
              variant="outline"
            ></Input>
          </div>
          <div className="flex flex-col gap-4 h-full items-end justify-start p-4 w-full">
            <div className="bg-blue_gray-300_14 flex flex-col h-full items-start justify-start outline outline-[0.5px] outline-blue_gray-300_33 rounded-lg w-full">
              <div className="bg-white-A700 border-b border-blue_gray-300_33 border-solid flex flex-row items-center justify-start px-4 py-2.5 w-full">
                <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start w-[31%]">
                  <div className="flex flex-row gap-10 items-center justify-start w-auto">
                    <Text
                      className="text-blue_gray-900 text-sm w-auto"
                      size="txtPublicSansSemiBold14"
                    >
                      {props?.fonttext}
                    </Text>
                    <Img
                      className="h-2 w-[5px]"
                      src="images/img_combinedshape.svg"
                      alt="combinedshape"
                    />
                  </div>
                  <Img
                    className="h-2.5 ml-4 sm:ml-[0] w-2"
                    src="images/img_location_blue_gray_900_10x8.svg"
                    alt="location"
                  />
                  <Img
                    className="h-2.5 ml-4 sm:ml-[0] w-[9px]"
                    src="images/img_path.svg"
                    alt="path"
                  />
                  <Img
                    className="h-3.5 ml-4 sm:ml-[0] w-2.5"
                    src="images/img_microphone_blue_gray_900.svg"
                    alt="microphone"
                  />
                  <Img
                    className="h-[11px] ml-4 sm:ml-[0] w-3.5"
                    src="images/img_car_blue_gray_900.svg"
                    alt="car"
                  />
                  <Img
                    className="h-3 ml-4 sm:ml-[0] w-3.5"
                    src="images/img_menu_blue_gray_900_12x14.svg"
                    alt="menu"
                  />
                  <Img
                    className="h-[11px] ml-4 sm:ml-[0] w-3.5"
                    src="images/img_menu_blue_gray_900_11x14.svg"
                    alt="menu_One"
                  />
                  <Img
                    className="h-3.5 ml-4 sm:ml-[0] w-3"
                    src="images/img_trash_blue_gray_900.svg"
                    alt="trash"
                  />
                  <Img
                    className="h-3.5 ml-4 sm:ml-[0] w-3.5"
                    src="images/img_menu_blue_gray_900_14x14.svg"
                    alt="menu_Two"
                  />
                  <Img
                    className="h-[15px] ml-4 sm:ml-[0] w-[15px]"
                    src="images/img_link.svg"
                    alt="link"
                  />
                  <Img
                    className="h-3.5 ml-4 sm:ml-[0] w-3.5"
                    src="images/img_user_blue_gray_900.svg"
                    alt="user"
                  />
                  <Img
                    className="h-3.5 ml-4 sm:ml-[0] w-3"
                    src="images/img_grid_blue_gray_900.svg"
                    alt="grid"
                  />
                  <Img
                    className="h-3 ml-4 sm:ml-[0] w-[13px]"
                    src="images/img_airplane_blue_gray_900.svg"
                    alt="airplane"
                  />
                </div>
              </div>
              <div className="flex flex-col h-full items-start justify-start px-4 py-3 w-full">
                <Text
                  className="text-blue_gray-300 text-sm"
                  size="txtPublicSansRegular14Bluegray300"
                >
                  {props?.writesomethingtext}
                </Text>
              </div>
            </div>
            <div className="flex md:flex-col flex-row gap-4 items-start justify-start w-full">
              <div className="flex flex-1 flex-row items-start justify-start w-full">
                <Button
                  className="flex flex-1 h-9 items-center justify-center w-9"
                  shape="circle"
                  size="md"
                >
                  <Img
                    className="h-5"
                    src="images/img_call_blue_gray_500_28x28.svg"
                    alt="call"
                  />
                </Button>
                <Button
                  className="flex flex-1 h-9 items-center justify-center w-9"
                  shape="circle"
                  size="md"
                >
                  <Img
                    className="h-5"
                    src="images/img_trash_blue_gray_500_36x36.svg"
                    alt="trash_One"
                  />
                </Button>
              </div>
              <Button
                className="cursor-pointer flex h-9 items-center justify-center min-w-[87px]"
                rightIcon={
                  <Img
                    className="h-5 ml-2"
                    src="images/img_volume_white_a700_20x20.svg"
                    alt="volume"
                  />
                }
                shape="round"
                color="teal_500"
                size="md"
                variant="fill"
              >
                <div className="!text-white-A700 font-bold font-publicsans text-center text-sm">
                  {props?.sendbutton}
                </div>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

MailNewFullScreenMailcompose.defaultProps = {
  messagetext: "New Message",
  totext: "To",
  cctext: "Cc",
  bcctext: "Bcc",
  fonttext: "Font",
  writesomethingtext: "Write something awesome...",
  sendbutton: "Send",
};

export default MailNewFullScreenMailcompose;
