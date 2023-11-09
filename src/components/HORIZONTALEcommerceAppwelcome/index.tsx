import React from "react";

import { Button, Img, Text } from "components";

type HORIZONTALEcommerceAppwelcomeProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  | "welcomebackfabiOne"
  | "ifyouaregoingtoOne"
  | "goNow"
  | "container"
  | "userimage"
> &
  Partial<{
    welcomebackfabiOne: JSX.Element | string;
    ifyouaregoingtoOne: JSX.Element | string;
    goNow: string;
    container: string;
    userimage: string;
  }>;

const HORIZONTALEcommerceAppwelcome: React.FC<
  HORIZONTALEcommerceAppwelcomeProps
> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="absolute bg-white-A700 flex flex-col h-full inset-[0] items-center justify-center m-auto rounded-[16px] w-full">
          <div className="bg-gradient2  h-[264px] rounded-[16px] w-full"></div>
        </div>
        <div className="flex flex-1 flex-col gap-6 items-start justify-start my-auto p-10 sm:px-5 relative w-full">
          <div className="flex flex-col gap-2 items-start justify-start w-full">
            <Text
              className="leading-[36.00px] max-w-[317px] md:max-w-full text-2xl md:text-[22px] text-teal-900 sm:text-xl"
              size="txtPublicSansBold24Teal900"
            >
              {props?.welcomebackfabiOne}
            </Text>
            <Text
              className="leading-[22.00px] max-w-[317px] md:max-w-full text-sm text-teal-900_a2"
              size="txtPublicSansRegular14Teal900a2"
            >
              {props?.ifyouaregoingtoOne}
            </Text>
          </div>
          <Button
            className="!text-white-A700 cursor-pointer font-bold font-publicsans h-9 min-w-[76px] text-center text-sm"
            shape="round"
            color="teal_500"
            size="md"
            variant="fill"
          >
            {props?.goNow}
          </Button>
        </div>
        <div
          className="bg-cover bg-no-repeat md:h-44 h-[212px] ml-auto my-auto p-3.5 relative w-[41%]"
          style={{ backgroundImage: "url('images/img_illustrationsi.png')" }}
        >
          {!!props?.container ? (
            <Img
              className="absolute h-[122px] inset-y-[0] left-[7%] my-auto"
              alt="container"
              src={props?.container}
            />
          ) : null}
          <div className="absolute flex flex-col h-max inset-y-[0] items-center justify-start my-auto right-[8%] w-[27%]">
            {!!props?.userimage ? (
              <Img
                className="h-44 md:h-auto object-cover w-full"
                alt="img_One"
                src={props?.userimage}
              />
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
};

HORIZONTALEcommerceAppwelcome.defaultProps = {
  welcomebackfabiOne: (
    <>
      Welcome back 👋 <br />
      Fabiana Capmany
    </>
  ),
  ifyouaregoingtoOne: (
    <>
      If you are going to use a passage of Lorem Ipsum, you need to be sure
      there isn&#39;t anything
    </>
  ),
  goNow: "Go Now",
};

export default HORIZONTALEcommerceAppwelcome;
