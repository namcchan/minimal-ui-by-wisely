import React from "react";

import { Button, Img, Text } from "components";

type BlogPostPostheroProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  | "time"
  | "useravatar"
  | "username"
  | "userdate"
  | "facebookicon"
  | "instagramicon"
  | "linkedinicon"
  | "twittericon"
  | "searchicon"
> &
  Partial<{
    time: string;
    useravatar: string;
    username: string;
    userdate: string;
    facebookicon: string;
    instagramicon: string;
    linkedinicon: string;
    twittericon: string;
    searchicon: string;
  }>;

const BlogPostPosthero: React.FC<BlogPostPostheroProps> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="bg-orange-50 h-[480px] md:h-auto relative w-full">
          <Img
            className="absolute h-[480px] inset-[0] justify-center m-auto object-cover w-[1440px] md:w-full"
            src="images/img_imgcoverl10.png"
            alt="imgcoverlTen"
          />
          <div
            className="bg-cover bg-no-repeat flex flex-col h-[480px] items-center justify-start m-auto relative w-full"
            style={{ backgroundImage: "url('images/img_group89.svg')" }}
          >
            <div className="flex flex-col md:gap-10 gap-48 items-center justify-start w-full">
              <div className="flex flex-col items-start justify-start max-w-[1440px] pt-16 md:px-10 px-36 sm:px-5 w-full">
                <Text
                  className="leading-[48.00px] max-w-[466px] md:max-w-full md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
                  size="txtPublicSansBold32WhiteA700"
                >
                  {props?.time}
                </Text>
              </div>
              <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start max-w-[1440px] pb-16 md:px-10 px-36 sm:px-5 w-full">
                <div className="flex flex-1 flex-row gap-4 items-center justify-start w-full">
                  <div className="flex flex-col items-center justify-center rounded-[50%] w-16">
                    <div className="flex flex-col h-16 md:h-auto items-center justify-center rounded-[50%] w-16">
                      {!!props?.useravatar ? (
                        <Img
                          className="h-16 md:h-auto rounded-[50%] w-16"
                          alt="imgavatarOne"
                          src={props?.useravatar}
                        />
                      ) : null}
                    </div>
                  </div>
                  <div className="flex flex-col gap-1 items-start justify-start w-auto">
                    {!!props?.username ? (
                      <Text
                        className="text-base text-white-A700 w-auto"
                        size="txtPublicSansSemiBold16WhiteA700"
                      >
                        {props?.username}
                      </Text>
                    ) : null}
                    {!!props?.userdate ? (
                      <Text
                        className="text-sm text-white-A700_94 w-auto"
                        size="txtPublicSansRegular14WhiteA70094"
                      >
                        {props?.userdate}
                      </Text>
                    ) : null}
                  </div>
                </div>
                <div className="flex flex-row gap-6 items-center justify-start w-auto">
                  <div className="flex flex-row gap-4 items-start justify-start w-auto">
                    {!!props?.facebookicon ? (
                      <Button
                        className="flex h-9 items-center justify-center w-9"
                        shape="circle"
                        color="white_A700"
                        size="md"
                        variant="fill"
                      >
                        <Img
                          className="h-5"
                          alt="facebook"
                          src={props?.facebookicon}
                        />
                      </Button>
                    ) : null}
                    {!!props?.instagramicon ? (
                      <Button
                        className="flex h-9 items-center justify-center w-9"
                        shape="circle"
                        color="white_A700"
                        size="md"
                        variant="fill"
                      >
                        <Img
                          className="h-5"
                          alt="instagram"
                          src={props?.instagramicon}
                        />
                      </Button>
                    ) : null}
                    {!!props?.linkedinicon ? (
                      <Button
                        className="flex h-9 items-center justify-center w-9"
                        shape="circle"
                        color="white_A700"
                        size="md"
                        variant="fill"
                      >
                        <Img
                          className="h-5"
                          alt="iconssocialicli"
                          src={props?.linkedinicon}
                        />
                      </Button>
                    ) : null}
                    {!!props?.twittericon ? (
                      <Button
                        className="flex h-9 items-center justify-center w-9"
                        shape="circle"
                        color="white_A700"
                        size="md"
                        variant="fill"
                      >
                        <Img
                          className="h-5"
                          alt="twitter"
                          src={props?.twittericon}
                        />
                      </Button>
                    ) : null}
                  </div>
                  {!!props?.searchicon ? (
                    <Button
                      className="flex h-12 items-center justify-center rounded-[50%] shadow-bs8 w-12"
                      shape="circle"
                      color="teal_500"
                      size="lg"
                      variant="fill"
                    >
                      <Img
                        className="h-6"
                        alt="search"
                        src={props?.searchicon}
                      />
                    </Button>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

BlogPostPosthero.defaultProps = {
  time: "Apply These 7 Secret Techniques To Improve Event",
};

export default BlogPostPosthero;
