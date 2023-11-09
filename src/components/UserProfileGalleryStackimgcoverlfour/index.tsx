import React from "react";

import { Button, Img, Text } from "components";

type UserProfileGalleryStackimgcoverlfourProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  | "profilelabel"
  | "favoriteicon"
  | "followerslabel"
  | "starticon"
  | "friendslabel"
  | "signalicon"
  | "gallerylabel"
  | "namefortyOne"
  | "roleforty"
> &
  Partial<{
    profilelabel: string;
    favoriteicon: string;
    followerslabel: string;
    starticon: string;
    friendslabel: string;
    signalicon: string;
    gallerylabel: string;
    namefortyOne: string;
    roleforty: string;
  }>;

const UserProfileGalleryStackimgcoverlfour: React.FC<
  UserProfileGalleryStackimgcoverlfourProps
> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col items-center justify-start m-auto w-full">
          <div className="flex flex-col items-center justify-start w-full">
            <div className="bg-orange-50 h-60 md:h-auto relative w-full">
              <Img
                className="absolute h-60 inset-[0] justify-center m-auto object-cover w-[1080px] md:w-full"
                src="images/img_imgcoverl4.png"
                alt="imgcoverlFour"
              />
              <Img
                className="absolute h-60 inset-[0] justify-center m-auto w-[1080px]"
                src="images/img_overlay.svg"
                alt="overlay"
              />
            </div>
            <div className="bg-white-A700 flex sm:flex-col flex-row gap-10 items-center justify-end sm:px-5 px-6 w-full">
              {!!props?.profilelabel ? (
                <Button
                  className="cursor-pointer flex items-center justify-center min-w-[76px]"
                  leftIcon={
                    <Img
                      className="h-6 mr-2"
                      src="images/img_volume_blue_gray_900.svg"
                      alt="volume"
                    />
                  }
                  shape="square"
                  color="blue_gray_900"
                  size="lg"
                  variant="outline"
                >
                  <div className="!text-blue_gray-900 font-publicsans font-semibold text-left text-sm">
                    {props?.profilelabel}
                  </div>
                </Button>
              ) : null}
              <div className="flex flex-row gap-2 h-12 md:h-auto items-center justify-center w-auto">
                {!!props?.favoriteicon ? (
                  <Img
                    className="h-6 w-6"
                    alt="favorite"
                    src={props?.favoriteicon}
                  />
                ) : null}
                {!!props?.followerslabel ? (
                  <Text
                    className="text-blue_gray-500 text-sm w-auto"
                    size="txtPublicSansSemiBold14Bluegray500"
                  >
                    {props?.followerslabel}
                  </Text>
                ) : null}
              </div>
              <div className="flex flex-row gap-2 h-12 md:h-auto items-center justify-center w-auto">
                {!!props?.starticon ? (
                  <Img
                    className="h-6 w-6"
                    alt="starticon"
                    src={props?.starticon}
                  />
                ) : null}
                {!!props?.friendslabel ? (
                  <Text
                    className="text-blue_gray-500 text-sm w-auto"
                    size="txtPublicSansSemiBold14Bluegray500"
                  >
                    {props?.friendslabel}
                  </Text>
                ) : null}
              </div>
              <div className="flex flex-row gap-2 h-12 md:h-auto items-center justify-center w-auto">
                {!!props?.signalicon ? (
                  <Img
                    className="h-6 w-6"
                    alt="signal"
                    src={props?.signalicon}
                  />
                ) : null}
                {!!props?.gallerylabel ? (
                  <Text
                    className="text-blue_gray-500 text-sm w-auto"
                    size="txtPublicSansSemiBold14Bluegray500"
                  >
                    {props?.gallerylabel}
                  </Text>
                ) : null}
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-[0] flex flex-row gap-6 items-start justify-end left-[0] pb-6 sm:pl-5 pl-6 w-auto">
          <div className="flex flex-col h-32 md:h-auto items-center justify-center outline outline-[2px] outline-white-A700 rounded-[50%] w-32">
            <div className="flex flex-col h-full items-center justify-center rounded-[50%] w-32">
              <Img
                className="h-32 md:h-auto rounded-[50%] w-32"
                src="images/img_imgavatar25_128x128.png"
                alt="imgavatarTwentyFive_One"
              />
            </div>
          </div>
          <div className="flex flex-col gap-1 items-start justify-start pt-6 w-auto">
            <Text
              className="text-2xl md:text-[22px] text-white-A700 sm:text-xl w-auto"
              size="txtPublicSansBold24WhiteA700"
            >
              {props?.namefortyOne}
            </Text>
            <Text
              className="text-sm text-white-A700_85 w-auto"
              size="txtPublicSansRegular14WhiteA70085"
            >
              {props?.roleforty}
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

UserProfileGalleryStackimgcoverlfour.defaultProps = {
  namefortyOne: "Mireya Conner",
  roleforty: "Event Coordinator",
};

export default UserProfileGalleryStackimgcoverlfour;
