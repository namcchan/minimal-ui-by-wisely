import React from "react";

import { Button, Img, Text } from "components";

type BlogPostPostcontentProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  | "userdescription"
  | "userdescriptionone"
  | "userdescriptiontwo"
  | "userreact"
  | "userreactredux"
  | "userjavascript"
  | "userprogramming"
  | "usersoftwaredevelopment"
  | "label"
  | "eight"
> &
  Partial<{
    userdescription: JSX.Element | string;
    userdescriptionone: JSX.Element | string;
    userdescriptiontwo: string;
    userreact: string;
    userreactredux: string;
    userjavascript: string;
    userprogramming: string;
    usersoftwaredevelopment: string;
    label: string;
    eight: string;
  }>;

const BlogPostPostcontent: React.FC<BlogPostPostcontentProps> = (props) => {
  return (
    <>
      <div className={props.className}>
        <Text
          className="leading-[24.00px] max-w-[720px] md:max-w-full text-base text-blue_gray-900"
          size="txtPublicSansSemiBold16"
        >
          {props?.userdescription}
        </Text>
        <Text
          className="leading-[24.00px] max-w-[720px] md:max-w-full text-base text-blue_gray-900"
          size="txtPublicSansRegular16Bluegray900"
        >
          {props?.userdescriptionone}
        </Text>
        <div className="bg-orange-50 flex flex-col items-start justify-start w-full">
          <Img
            className="h-[405px] sm:h-auto object-cover w-[720px] md:w-full"
            src="images/img_imgcoverl17.png"
            alt="imgcoverlSeventeen"
          />
        </div>
        <Text
          className="leading-[24.00px] max-w-[720px] md:max-w-full text-base text-blue_gray-900"
          size="txtPublicSansRegular16Bluegray900"
        >
          {props?.userdescriptiontwo}
        </Text>
        <div className="border-blue_gray-300_33 border-dashed border-y flex flex-col gap-6 items-start justify-start py-6 w-full">
          <div className="flex sm:flex-col flex-row gap-2 items-start justify-start w-full">
            <Button
              className="!text-blue_gray-900 cursor-pointer font-medium font-publicsans h-8 min-w-[60px] text-[13px] text-center"
              shape="round"
              color="blue_gray_300_1e"
              size="sm"
              variant="fill"
            >
              {props?.userreact}
            </Button>
            <Button
              className="!text-blue_gray-900 cursor-pointer font-medium font-publicsans h-8 min-w-[101px] text-[13px] text-center"
              shape="round"
              color="blue_gray_300_1e"
              size="sm"
              variant="fill"
            >
              {props?.userreactredux}
            </Button>
            <Button
              className="!text-blue_gray-900 cursor-pointer font-medium font-publicsans h-8 min-w-[88px] text-[13px] text-center"
              shape="round"
              color="blue_gray_300_1e"
              size="sm"
              variant="fill"
            >
              {props?.userjavascript}
            </Button>
            <Button
              className="!text-blue_gray-900 cursor-pointer font-medium font-publicsans h-8 min-w-[107px] text-[13px] text-center"
              shape="round"
              color="blue_gray_300_1e"
              size="sm"
              variant="fill"
            >
              {props?.userprogramming}
            </Button>
            <Button
              className="!text-blue_gray-900 cursor-pointer font-medium font-publicsans h-8 min-w-[164px] text-[13px] text-center"
              shape="round"
              color="blue_gray_300_1e"
              size="sm"
              variant="fill"
            >
              {props?.usersoftwaredevelopment}
            </Button>
          </div>
          <div className="flex flex-row gap-2 items-center justify-start w-auto">
            <div className="flex flex-row items-center justify-start w-auto">
              <div className="flex flex-col items-center justify-center p-2 w-10">
                <Img
                  className="h-6 w-6"
                  src="images/img_favorite_deep_orange_500.svg"
                  alt="favorite"
                />
              </div>
              <Text
                className="text-blue_gray-900 text-sm w-auto"
                size="txtPublicSansRegular14"
              >
                {props?.label}
              </Text>
            </div>
            <div className="flex relative w-[110px]">
              <div className="flex my-auto w-[77%]">
                <div className="flex my-auto w-[70%]">
                  <div
                    className="bg-cover bg-no-repeat flex flex-col h-8 items-center justify-center ml-[undefinedpx] my-auto outline outline-[2px] outline-white-A700 rounded-[50%] w-8 z-[1]"
                    style={{ backgroundImage: "url('images/img_avatar1.png')" }}
                  >
                    <div className="flex flex-col h-8 md:h-auto items-center justify-center rounded-[50%] w-8">
                      <Img
                        className="h-8 md:h-auto rounded-[50%] w-8"
                        src="images/img_imgavatar1_32x32.png"
                        alt="imgavatarOne"
                      />
                    </div>
                  </div>
                  <div
                    className="bg-cover bg-no-repeat flex flex-col h-8 items-center justify-center ml-[-6px] my-auto outline outline-[2px] outline-white-A700 rounded-[50%] w-8 z-[1]"
                    style={{
                      backgroundImage: "url('images/img_avatar2_24x24.png')",
                    }}
                  >
                    <div className="flex flex-col h-8 md:h-auto items-center justify-center rounded-[50%] w-8">
                      <Img
                        className="h-8 md:h-auto rounded-[50%] w-8"
                        src="images/img_imgavatar2_3.png"
                        alt="imgavatarTwo"
                      />
                    </div>
                  </div>
                </div>
                <div
                  className="bg-cover bg-no-repeat flex flex-col h-8 items-center justify-center ml-[-6px] my-auto outline outline-[2px] outline-white-A700 rounded-[50%] w-8 z-[1]"
                  style={{ backgroundImage: "url('images/img_avatar3.png')" }}
                >
                  <div className="flex flex-col h-8 md:h-auto items-center justify-center rounded-[50%] w-8">
                    <Img
                      className="h-8 md:h-auto rounded-[50%] w-8"
                      src="images/img_imgavatar4_32x32.png"
                      alt="imgavatarFour"
                    />
                  </div>
                </div>
              </div>
              <div className="bg-green-A100 flex flex-col items-center justify-start ml-[-6px] my-auto outline outline-[2px] outline-white-A700 rounded-[50%] w-8 z-[1]">
                {!!props?.eight ? (
                  <Text
                    className="h-8 leading-[18.00px] max-w-[32px] md:max-w-full text-center text-teal-700 text-xs"
                    size="txtPublicSansMedium12"
                  >
                    {props?.eight}
                  </Text>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

BlogPostPostcontent.defaultProps = {
  userdescription: (
    <>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry&#39;s standard dummy text ever since the
      1500s, when an unknown printer took a galley of type and scrambled it to
      make a type specimen book.{" "}
    </>
  ),
  userdescriptionone: (
    <>
      What is MTAweb Directory?
      <br />
      <br />
      So you have heard about this site or you have been to it, but you cannot
      figure out what it is or what it can do. MTA web directory is the simplest
      way in which one can bid on a link, or a few links if they wish to do so.
      The link directory on MTA displays all of the links it currently has, and
      does so in alphabetical order, which makes it much easier for someone to
      find what they are looking for if it is something specific and they do not
      want to go through all the other sites and links as well. It allows you to
      start your bid at the bottom and slowly work your way to the top of the
      list.
    </>
  ),
  userdescriptiontwo:
    "It is important that you buy links because the links are what get you the results that you want. The popularity of the links that are listed in the MTA directory is in fact one of the most important factors in the performance of the search engine. Links are important and this is why you have to purchase a link in order to bid on something and the best part is that a link will only cost you $1, which is nothing compared to what you would pay if you decided to do it through any other company or website.",
  userreact: "React",
  userreactredux: "React Redux",
  userjavascript: "JavaScript",
  userprogramming: "Programming",
  usersoftwaredevelopment: "Software Development",
  label: "32",
};

export default BlogPostPostcontent;
