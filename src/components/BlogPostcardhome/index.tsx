import React from "react";

import { Img, Text } from "components";

type BlogPostcardhomeProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "date" | "titlerand" | "text" | "textOne" | "textTwo"
> &
  Partial<{
    date: string;
    titlerand: string;
    text: string;
    textOne: string;
    textTwo: string;
  }>;

const BlogPostcardhome: React.FC<BlogPostcardhomeProps> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="bg-orange-50 h-[386px] md:h-auto relative rounded-[16px] w-[564px] md:w-full">
          <Img
            className="absolute h-[386px] inset-[0] justify-center m-auto object-cover rounded-[16px] w-[564px] md:w-full"
            src="images/img_imgcoverm1.png"
            alt="imgcovermOne"
          />
          <div
            className="bg-cover bg-no-repeat flex flex-col h-[386px] items-center justify-start m-auto relative rounded-[16px] w-full"
            style={{ backgroundImage: "url('images/img_group89.svg')" }}
          >
            <div className="flex flex-col md:gap-10 gap-44 items-start justify-start w-full">
              <div className="flex flex-col items-start justify-start sm:pl-5 pl-6 pt-6 w-16">
                <div className="flex flex-col items-center justify-center rounded-[50%] w-10">
                  <div className="flex flex-col h-10 md:h-auto items-center justify-center rounded-[50%] w-10">
                    <Img
                      className="h-10 md:h-auto rounded-[50%] w-10"
                      src="images/img_imgavatar1_1.png"
                      alt="imgavatarOne"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-6 items-end justify-start p-6 sm:px-5 w-full">
                <div className="flex flex-col gap-2 items-start justify-start w-full">
                  <Text
                    className="text-white-A700_94 text-xs w-auto"
                    size="txtPublicSansRegular12WhiteA70094"
                  >
                    {props?.date}
                  </Text>
                  <Text
                    className="text-white-A700 text-xl w-full"
                    size="txtPublicSansBold20WhiteA700"
                  >
                    {props?.titlerand}
                  </Text>
                </div>
                <div className="flex flex-row gap-3 items-center justify-end w-full">
                  <div className="flex flex-row gap-1 items-center justify-start w-auto">
                    <Img
                      className="h-4 w-4"
                      src="images/img_user_white_a700.svg"
                      alt="user"
                    />
                    <Text
                      className="text-white-A700 text-xs w-auto"
                      size="txtPublicSansRegular12WhiteA700"
                    >
                      {props?.text}
                    </Text>
                  </div>
                  <div className="flex flex-row gap-1 items-center justify-start w-auto">
                    <Img
                      className="h-4 w-4"
                      src="images/img_eye_white_a700.svg"
                      alt="eye"
                    />
                    <Text
                      className="text-white-A700 text-xs w-auto"
                      size="txtPublicSansRegular12WhiteA700"
                    >
                      {props?.textOne}
                    </Text>
                  </div>
                  <div className="flex flex-row gap-1 items-center justify-start w-auto">
                    <Img
                      className="h-4 w-4"
                      src="images/img_search_white_a700_16x16.svg"
                      alt="search"
                    />
                    <Text
                      className="text-white-A700 text-xs w-auto"
                      size="txtPublicSansRegular12WhiteA700"
                    >
                      {props?.textTwo}
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

BlogPostcardhome.defaultProps = {
  date: "06 May 2022",
  titlerand: "Delicious Recipes for a Vegan Diet",
  text: "5",
  textOne: "12",
  textTwo: "4",
};

export default BlogPostcardhome;
