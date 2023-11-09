import React from "react";

import { Button, Img, Text } from "components";

type UserCardsColumnimgcovermoneProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  | "userimage"
  | "username"
  | "userrole"
  | "label"
  | "followercount"
  | "labelOne"
  | "followingcount"
  | "labelTwo"
  | "totalpostcount"
> &
  Partial<{
    userimage: string;
    username: string;
    userrole: string;
    label: string;
    followercount: string;
    labelOne: string;
    followingcount: string;
    labelTwo: string;
    totalpostcount: string;
  }>;

const UserCardsColumnimgcovermone: React.FC<
  UserCardsColumnimgcovermoneProps
> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="md:h-[258px] h-[290px] relative w-full">
          <div className="absolute bg-orange-50 inset-x-[0] mx-auto top-[0] w-full">
            <Img
              className="absolute h-[258px] inset-[0] justify-center m-auto object-cover w-[344px] md:w-full"
              alt="imgcovermOne"
              src={props?.userimage}
            />
            <Img
              className="absolute h-[258px] inset-[0] justify-center m-auto w-[344px]"
              src="images/img_group89.svg"
              alt="overlay"
            />
          </div>
          <div className="absolute bottom-[0] md:h-16 h-[68px] inset-x-[0] mx-auto w-36">
            <Img
              className="absolute h-[62px] inset-x-[0] mx-auto top-[0] w-36"
              src="images/img_layer.svg"
              alt="layer"
            />
            <div className="absolute bg-gray-300 bottom-[0] flex flex-col inset-x-[0] items-center justify-center mx-auto rounded-[50%] w-16">
              <div className="flex flex-col h-16 md:h-auto items-center justify-center rounded-[50%] w-16">
                <Img
                  className="h-16 md:h-auto rounded-[50%] w-16"
                  src="images/img_imgavatar2_64x64.png"
                  alt="imgavatarTwo"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-1 items-center justify-start pb-2 pt-6 w-full">
          <Text
            className="text-base text-blue_gray-900 text-center w-auto"
            size="txtPublicSansSemiBold16"
          >
            {props?.username}
          </Text>
          <Text
            className="text-blue_gray-500 text-center text-sm w-auto"
            size="txtPublicSansRegular14Bluegray500"
          >
            {props?.userrole}
          </Text>
        </div>
        <div className="flex flex-row items-start justify-center pb-5 w-full">
          <Button
            className="flex h-9 items-center justify-center w-9"
            shape="circle"
            size="md"
          >
            <Img className="h-5" src="images/img_facebook.svg" alt="facebook" />
          </Button>
          <Button
            className="flex h-9 items-center justify-center w-9"
            shape="circle"
            size="md"
          >
            <Img
              className="h-5"
              src="images/img_instagram.svg"
              alt="instagram"
            />
          </Button>
          <Button
            className="flex h-9 items-center justify-center w-9"
            shape="circle"
            size="md"
          >
            <Img
              className="h-5"
              src="images/img_iconssocialiclinkedin.svg"
              alt="iconssocialicli"
            />
          </Button>
          <Button
            className="flex h-9 items-center justify-center w-9"
            shape="circle"
            size="md"
          >
            <Img className="h-5" src="images/img_twitter.svg" alt="twitter" />
          </Button>
        </div>
        <div className="border-blue_gray-300_33 border-dashed border-t flex flex-row items-start justify-start sm:px-5 px-6 py-4 w-full">
          <div className="flex flex-1 flex-col gap-1 items-center justify-start w-full">
            <Text
              className="text-blue_gray-500 text-center text-xs w-auto"
              size="txtPublicSansRegular12"
            >
              {props?.label}
            </Text>
            <Text
              className="text-base text-blue_gray-900 text-center w-auto"
              size="txtPublicSansSemiBold16"
            >
              {props?.followercount}
            </Text>
          </div>
          <div className="flex flex-1 flex-col gap-1 items-center justify-start w-full">
            <Text
              className="text-blue_gray-500 text-center text-xs w-auto"
              size="txtPublicSansRegular12"
            >
              {props?.labelOne}
            </Text>
            <Text
              className="text-base text-blue_gray-900 text-center w-auto"
              size="txtPublicSansSemiBold16"
            >
              {props?.followingcount}
            </Text>
          </div>
          <div className="flex flex-1 flex-col gap-1 items-center justify-start w-full">
            <Text
              className="text-blue_gray-500 text-center text-xs w-auto"
              size="txtPublicSansRegular12"
            >
              {props?.labelTwo}
            </Text>
            <Text
              className="text-base text-blue_gray-900 text-center w-auto"
              size="txtPublicSansSemiBold16"
            >
              {props?.totalpostcount}
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

UserCardsColumnimgcovermone.defaultProps = {
  userimage: "images/img_imgcoverm1_202x270.png",
  username: "Jayvion Simon",
  userrole: "CEO",
  label: "Follower",
  followercount: "34.5k",
  labelOne: "Following",
  followingcount: "46.9k",
  labelTwo: "Total Post",
  totalpostcount: "45.6k",
};

export default UserCardsColumnimgcovermone;
