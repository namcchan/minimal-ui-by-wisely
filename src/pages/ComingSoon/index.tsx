import React from "react";

import { Button, Img, Text } from "components";
import ComingSoonColumnvalue from "components/ComingSoonColumnvalue";
import ComingSoonIllustrationsi from "components/ComingSoonIllustrationsi";
import Header from "components/Header";

const ComingSoonPage: React.FC = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-publicsans sm:gap-10 md:gap-10 gap-[60px] items-center justify-center mx-auto w-auto sm:w-full md:w-full">
        <Header
          className="bg-cover bg-no-repeat flex h-20 md:h-auto items-center justify-between md:px-5 px-6 w-full"
          style={{ backgroundImage: "url('images/img_mainheader.svg')" }}
        />
        <div className="flex flex-col md:gap-10 gap-20 items-center justify-center md:px-5 w-[400px] sm:w-full">
          <div className="flex flex-col gap-4 items-center justify-start w-full">
            <Text
              className="md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-900 text-center w-full"
              size="txtPublicSansBold32"
            >
              Coming Soon!
            </Text>
            <Text
              className="text-base text-blue_gray-500 text-center w-full"
              size="txtPublicSansRegular16"
            >
              We are currently working hard on this page!
            </Text>
          </div>
          <ComingSoonIllustrationsi
            className="bg-cover bg-no-repeat flex flex-col h-60 items-center justify-start p-5 w-[82%] md:w-full"
            style={{ backgroundImage: "url('images/img_illustrationsi.png')" }}
          />
          <div className="flex flex-col gap-10 items-center justify-start w-full">
            <div className="flex sm:flex-col flex-row gap-5 items-start justify-center w-full">
              <div className="flex flex-col gap-[7px] items-center justify-start w-auto">
                <Text
                  className="text-5xl sm:text-[38px] md:text-[44px] text-blue_gray-900 text-center w-auto"
                  size="txtPublicSansExtraBold48"
                >
                  19
                </Text>
                <Text
                  className="text-blue_gray-500 text-center text-sm w-auto"
                  size="txtPublicSansRegular14Bluegray500"
                >
                  Days
                </Text>
              </div>
              <Text
                className="text-5xl sm:text-[38px] md:text-[44px] text-blue_gray-900 text-center w-auto"
                size="txtPublicSansExtraBold48"
              >
                :
              </Text>
              <div className="flex flex-col gap-1.5 items-center justify-start w-auto">
                <Text
                  className="text-5xl sm:text-[38px] md:text-[44px] text-blue_gray-900 text-center w-auto"
                  size="txtPublicSansExtraBold48"
                >
                  15
                </Text>
                <Text
                  className="text-blue_gray-500 text-center text-sm w-auto"
                  size="txtPublicSansRegular14Bluegray500"
                >
                  Hours
                </Text>
              </div>
              <Text
                className="text-5xl sm:text-[38px] md:text-[44px] text-blue_gray-900 text-center w-auto"
                size="txtPublicSansExtraBold48"
              >
                :
              </Text>
              <div className="flex flex-col gap-1.5 items-center justify-start w-auto">
                <Text
                  className="text-5xl sm:text-[38px] md:text-[44px] text-blue_gray-900 text-center w-auto"
                  size="txtPublicSansExtraBold48"
                >
                  32
                </Text>
                <Text
                  className="text-blue_gray-500 text-center text-sm w-auto"
                  size="txtPublicSansRegular14Bluegray500"
                >
                  Minutes
                </Text>
              </div>
              <Text
                className="text-5xl sm:text-[38px] md:text-[44px] text-blue_gray-900 text-center w-auto"
                size="txtPublicSansExtraBold48"
              >
                :
              </Text>
              <div className="flex flex-col gap-1.5 items-center justify-start w-auto">
                <Text
                  className="text-5xl sm:text-[38px] md:text-[44px] text-blue_gray-900 text-center w-auto"
                  size="txtPublicSansExtraBold48"
                >
                  09
                </Text>
                <Text
                  className="text-blue_gray-500 text-center text-sm w-auto"
                  size="txtPublicSansRegular14Bluegray500"
                >
                  Seconds
                </Text>
              </div>
            </div>
            <ComingSoonColumnvalue
              className="flex flex-col items-start justify-start w-full"
              useremail="Enter your email"
              notifyme="Notify Me"
            />
            <div className="flex flex-row gap-2 items-start justify-start w-auto">
              <Button
                className="flex h-9 items-center justify-center w-9"
                shape="circle"
                size="md"
              >
                <Img
                  className="h-5"
                  src="images/img_facebook.svg"
                  alt="facebook"
                />
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
                <Img
                  className="h-5"
                  src="images/img_twitter.svg"
                  alt="twitter"
                />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ComingSoonPage;
