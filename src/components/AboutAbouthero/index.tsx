import React from "react";

import { Img, Text } from "components";

type AboutAboutheroProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "username" | "userdescription"
> &
  Partial<{
    username: JSX.Element | string;
    userdescription: JSX.Element | string;
  }>;

const AboutAbouthero: React.FC<AboutAboutheroProps> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col items-center justify-start w-full">
          <div className="h-[560px] relative w-full">
            <Img
              className="absolute h-[560px] inset-[0] justify-center m-auto object-cover w-full"
              src="images/img_img_560x1440.png"
              alt="img"
            />
            <div
              className="absolute bg-cover bg-no-repeat flex flex-col h-full inset-[0] items-start justify-center m-auto md:pr-10 sm:pr-5 pr-56 pt-56 w-full"
              style={{ backgroundImage: "url('images/img_group107.png')" }}
            >
              <div className="flex flex-col gap-6 items-start justify-start pb-20 md:pl-10 pl-36 sm:pl-5 w-auto sm:w-full">
                <div className="flex flex-col items-start justify-start w-auto">
                  {props?.username}
                </div>
                <Text
                  className="leading-[36.00px] md:max-w-full max-w-xs text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                  size="txtPublicSansBold24WhiteA700"
                >
                  {props?.userdescription}
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

AboutAbouthero.defaultProps = {
  username: (
    <Text
      className="leading-[80.00px] max-w-[233px] md:max-w-full md:text-5xl text-[64px] text-white-A700"
      size="txtPublicSansExtraBold64"
    >
      <span className="text-teal-500 font-publicsans text-left font-extrabold">
        Who
      </span>
      <span className="text-white-A700 font-publicsans text-left font-extrabold">
        <>
          {" "}
          <br />
          we are?
        </>
      </span>
    </Text>
  ),
  userdescription: <>Let&#39;s work together and make awesome site easily</>,
};

export default AboutAbouthero;
