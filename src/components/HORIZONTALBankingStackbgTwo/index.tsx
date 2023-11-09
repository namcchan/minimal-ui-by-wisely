import React from "react";

import { Button, Img, Text } from "components";

type HORIZONTALBankingStackbgTwoProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "invitetext" | "pricetext" | "languagetext" | "emailtext" | "invitebutton"
> &
  Partial<{
    invitetext: JSX.Element | string;
    pricetext: string;
    languagetext: string;
    emailtext: string;
    invitebutton: string;
  }>;

const HORIZONTALBankingStackbgTwo: React.FC<
  HORIZONTALBankingStackbgTwoProps
> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="absolute bg-gradient1  bottom-[0] h-[382px] inset-x-[0] mx-auto rounded-[16px] w-full"></div>
        <div className="absolute flex flex-col gap-6 inset-x-[0] items-start justify-start mx-auto top-[0] w-[264px]">
          <div className="flex flex-col items-center justify-start shadow-bs14 w-[53%] md:w-full">
            <Img
              className="h-[200px] md:h-auto object-cover w-full"
              src="images/img_img_200x138.png"
              alt="img_Three"
            />
          </div>
          <div className="flex flex-col gap-4 items-start justify-start w-[264px]">
            <div className="flex flex-row gap-4 items-center justify-between w-full">
              <Text
                className="leading-[36.00px] max-w-[155px] md:max-w-full text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                size="txtPublicSansBold24WhiteA700"
              >
                {props?.invitetext}
              </Text>
              <Text
                className="text-5xl sm:text-[38px] md:text-[44px] text-white-A700 w-auto"
                size="txtPublicSansExtraBold48WhiteA700"
              >
                {props?.pricetext}
              </Text>
            </div>
            <Text
              className="leading-[22.00px] max-w-[264px] md:max-w-full text-sm text-white-A700"
              size="txtPublicSansRegular14WhiteA700"
            >
              {props?.languagetext}
            </Text>
          </div>
          <div className="flex flex-col items-start justify-start w-full">
            <div className="bg-white-A700 flex flex-row h-10 md:h-auto items-center justify-between px-3.5 rounded-lg w-full">
              <Text
                className="flex-1 text-blue_gray-300 text-sm w-auto"
                size="txtPublicSansRegular14Bluegray300"
              >
                {props?.emailtext}
              </Text>
              <div className="flex flex-col h-10 md:h-auto items-center justify-center px-[5px] w-auto">
                <Button
                  className="!text-blue_gray-900 cursor-pointer font-bold font-publicsans h-[30px] min-w-[64px] text-[13px] text-center"
                  shape="round"
                  color="amber_A700"
                  size="sm"
                  variant="fill"
                >
                  {props?.invitebutton}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

HORIZONTALBankingStackbgTwo.defaultProps = {
  invitetext: (
    <>
      Invite friends <br />
      and earn
    </>
  ),
  pricetext: "$50",
  languagetext:
    "Praesent egestas tristique nibh. Duis lobortis massa imperdiet quam. ",
  emailtext: "Email",
  invitebutton: "Invite",
};

export default HORIZONTALBankingStackbgTwo;
