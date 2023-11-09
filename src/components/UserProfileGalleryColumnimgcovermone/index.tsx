import React from "react";

import { Button, Img, Text } from "components";

type UserProfileGalleryColumnimgcovermoneProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "imgcovermone" | "titletext" | "datetext"
> &
  Partial<{ imgcovermone: string; titletext: string; datetext: string }>;

const UserProfileGalleryColumnimgcovermone: React.FC<
  UserProfileGalleryColumnimgcovermoneProps
> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="bg-orange-50 relative w-[344px] md:w-full">
          <Img
            className="absolute h-[343px] inset-[0] justify-center m-auto object-cover w-[344px] md:w-full"
            alt="imgcovermOne"
            src={props?.imgcovermone}
          />
          <div
            className="bg-cover bg-no-repeat flex flex-col h-[343px] items-center justify-end m-auto pt-[7px] relative w-[344px] md:w-full"
            style={{ backgroundImage: "url('images/img_group86.svg')" }}
          >
            <div className="flex flex-col md:gap-10 gap-[202px] justify-start w-full">
              <Button
                className="flex h-9 items-center justify-center md:ml-[0] ml-[300px] w-9"
                shape="circle"
                size="md"
              >
                <Img
                  className="h-5"
                  src="images/img_iconssolidic_36x36.svg"
                  alt="iconssolidic"
                />
              </Button>
              <div className="flex flex-col gap-1 items-start justify-center p-6 sm:px-5 w-[344px] md:w-full">
                <Text
                  className="text-base text-white-A700 w-auto"
                  size="txtPublicSansSemiBold16WhiteA700"
                >
                  {props?.titletext}
                </Text>
                <Text
                  className="text-sm text-white-A700_85 w-auto"
                  size="txtPublicSansRegular14WhiteA70085"
                >
                  {props?.datetext}
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

UserProfileGalleryColumnimgcovermone.defaultProps = {
  imgcovermone: "images/img_imgcoverm1_202x270.png",
  titletext: "The Importance of Mental Health Awareness",
  datetext: "28 Nov 2022",
};

export default UserProfileGalleryColumnimgcovermone;
