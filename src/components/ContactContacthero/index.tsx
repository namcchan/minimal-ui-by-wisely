import React from "react";

import { Img, List, Text } from "components";

type ContactContactheroProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  | "wheretofindus"
  | "addressone"
  | "addresstwo"
  | "addressthree"
  | "addressfour"
  | "text"
  | "addressthree1"
  | "text1"
  | "addressfour1"
> &
  Partial<{
    wheretofindus: JSX.Element | string;
    addressone: string;
    addresstwo: string;
    addressthree: string;
    addressfour: string;
    text: string;
    addressthree1: string;
    text1: string;
    addressfour1: string;
  }>;

const ContactContacthero: React.FC<ContactContactheroProps> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col items-center justify-start w-full">
          <div className="h-[560px] md:h-[646px] sm:h-[874px] relative w-full">
            <Img
              className="absolute h-[560px] inset-[0] justify-center m-auto object-cover w-full"
              src="images/img_img_2.png"
              alt="img"
            />
            <div
              className="absolute bg-cover bg-no-repeat flex flex-col h-full inset-[0] items-start justify-center m-auto md:pr-10 sm:pr-5 pr-[178px] pt-[178px] w-full"
              style={{ backgroundImage: "url('images/img_group89.svg')" }}
            >
              <div className="flex flex-col gap-10 items-start justify-start pb-20 md:pl-10 pl-36 sm:pl-5 w-auto md:w-full">
                <div className="flex flex-col items-start justify-start w-auto">
                  {props?.wheretofindus}
                </div>
                <List
                  className="sm:flex-col flex-row gap-10 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-start w-auto md:w-full"
                  orientation="horizontal"
                >
                  <div className="flex flex-col gap-2 items-start justify-start w-[180px]">
                    <Text
                      className="text-lg text-white-A700 w-full"
                      size="txtPublicSansBold18WhiteA700"
                    >
                      {props?.addressone}
                    </Text>
                    <Text
                      className="leading-[22.00px] max-w-[180px] md:max-w-full text-sm text-white-A700_a2"
                      size="txtPublicSansRegular14WhiteA700a2"
                    >
                      {props?.addresstwo}
                    </Text>
                  </div>
                  <div className="flex flex-col gap-2 items-start justify-start w-[180px]">
                    <Text
                      className="text-lg text-white-A700 w-full"
                      size="txtPublicSansBold18WhiteA700"
                    >
                      {props?.addressthree}
                    </Text>
                    <Text
                      className="leading-[22.00px] max-w-[180px] md:max-w-full text-sm text-white-A700_a2"
                      size="txtPublicSansRegular14WhiteA700a2"
                    >
                      {props?.addressfour}
                    </Text>
                  </div>
                  <div className="flex flex-col gap-2 items-start justify-start w-[180px]">
                    <Text
                      className="text-lg text-white-A700 w-full"
                      size="txtPublicSansBold18WhiteA700"
                    >
                      {props?.text}
                    </Text>
                    <Text
                      className="leading-[22.00px] max-w-[180px] md:max-w-full text-sm text-white-A700_a2"
                      size="txtPublicSansRegular14WhiteA700a2"
                    >
                      {props?.addressthree1}
                    </Text>
                  </div>
                  <div className="flex flex-col gap-2 items-start justify-start w-[180px]">
                    <Text
                      className="text-lg text-white-A700 w-full"
                      size="txtPublicSansBold18WhiteA700"
                    >
                      {props?.text1}
                    </Text>
                    <Text
                      className="leading-[22.00px] max-w-[180px] md:max-w-full text-sm text-white-A700_a2"
                      size="txtPublicSansRegular14WhiteA700a2"
                    >
                      {props?.addressfour1}
                    </Text>
                  </div>
                </List>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

ContactContacthero.defaultProps = {
  wheretofindus: (
    <Text
      className="leading-[80.00px] max-w-[316px] md:max-w-full md:text-5xl text-[64px] text-white-A700"
      size="txtPublicSansExtraBold64"
    >
      <span className="text-teal-500 font-publicsans text-left font-extrabold">
        Where
      </span>
      <span className="text-white-A700 font-publicsans text-left font-extrabold">
        <>
          {" "}
          <br />
          to find us?
        </>
      </span>
    </Text>
  ),
  addressone: "Bali",
  addresstwo: "19034 Verna Unions Apt. 164 - Honolulu, RI / 87535",
  addressthree: "London",
  addressfour: "1147 Rohan Drive Suite 819 - Burlington, VT / 82021",
  text: "Prague",
  addressthree1: "18605 Thompson Circle Apt. 086 - Idaho Falls, WV / 50337",
  text1: "Moscow",
  addressfour1: "110 Lamar Station Apt. 730 - Hagerstown, OK / 49808",
};

export default ContactContacthero;
