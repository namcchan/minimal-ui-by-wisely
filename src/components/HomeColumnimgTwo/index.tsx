import React from "react";

import { Button, Img, Text } from "components";

type HomeColumnimgTwoProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "username" | "userprofession" | "figmaWorkspace"
> &
  Partial<{ username: string; userprofession: string; figmaWorkspace: string }>;

const HomeColumnimgTwo: React.FC<HomeColumnimgTwoProps> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col items-center justify-start w-full">
          <div className="h-[1080px] relative w-full">
            <Img
              className="absolute h-[1080px] inset-[0] justify-center m-auto object-cover w-full"
              src="images/img_img_1080x1440.png"
              alt="img_Two"
            />
            <div className="absolute bg-white-A700_a2 inset-[0] justify-center m-auto py-[260px] w-full">
              <div className="flex flex-col items-center justify-start m-auto w-full">
                <div className="flex md:flex-col flex-row md:gap-5 items-center justify-evenly w-full">
                  <div className="flex flex-1 flex-col gap-10 h-[560px] md:h-auto items-start justify-center max-w-[720px] md:pl-10 pl-36 sm:pl-5 w-full">
                    <div className="flex flex-col gap-6 items-start justify-start w-auto">
                      <Text
                        className="text-blue_gray-300 text-right text-xs uppercase w-auto"
                        size="txtPublicSansBold12"
                      >
                        {props?.username}
                      </Text>
                      <Text
                        className="bg-clip-text bg-gradient  text-5xl sm:text-[38px] md:text-[44px] text-transparent w-auto"
                        size="txtPublicSansExtraBold48AmberA700"
                      >
                        {props?.userprofession}
                      </Text>
                    </div>
                    <Button
                      className="cursor-pointer flex h-12 items-center justify-center min-w-[191px]"
                      rightIcon={
                        <Img
                          className="h-6 ml-2"
                          src="images/img_arrowright_white_a700_24x24.svg"
                          alt="arrow_right"
                        />
                      }
                      shape="round"
                      color="blue_gray_900"
                      size="lg"
                      variant="fill"
                    >
                      <div className="font-bold font-publicsans text-[15px] text-left">
                        {props?.figmaWorkspace}
                      </div>
                    </Button>
                  </div>
                  <div className="flex md:flex-1 flex-col items-center justify-start shadow-bs5 w-1/2 md:w-full">
                    <Img
                      className="h-[560px] md:h-auto object-cover w-full"
                      src="images/img_screenshot20230508.png"
                      alt="screenshot20230"
                    />
                  </div>
                </div>
              </div>
              <Img
                className="absolute h-20 inset-x-[0] mx-auto top-[24%] w-[1440px]"
                src="images/img_shapetop.svg"
                alt="shapetop"
              />
              <Img
                className="absolute bottom-[24%] h-20 inset-x-[0] mx-auto w-[1440px]"
                src="images/img_shapebottom.svg"
                alt="shapebottom"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

HomeColumnimgTwo.defaultProps = {
  username: "PROFESSIONAL KIT",
  userprofession: "For Designer",
  figmaWorkspace: "Figma Workspace",
};

export default HomeColumnimgTwo;
