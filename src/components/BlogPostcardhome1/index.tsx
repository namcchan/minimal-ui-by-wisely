import React from "react";

import { Img, Text } from "components";

type BlogPostcardhome1Props = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "imgcovermtwo" | "date" | "title" | "date1" | "views" | "searches"
> &
  Partial<{
    imgcovermtwo: string;
    date: string;
    title: string;
    date1: string;
    views: string;
    searches: string;
  }>;

const BlogPostcardhome1: React.FC<BlogPostcardhome1Props> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="bg-orange-50 h-[386px] md:h-auto relative rounded-[16px] w-[270px] md:w-full">
          <Img
            className="absolute h-[386px] inset-[0] justify-center m-auto object-cover rounded-[16px] w-[270px] md:w-full"
            alt="imgcovermTwo"
            src={props?.imgcovermtwo}
          />
          <div
            className="bg-cover bg-no-repeat flex flex-col h-[386px] items-center justify-start m-auto relative rounded-[16px] w-full"
            style={{ backgroundImage: "url('images/img_group89.svg')" }}
          >
            <div className="flex flex-col md:gap-10 gap-[162px] items-start justify-start w-full">
              <div className="flex flex-col items-start justify-start sm:pl-5 pl-6 pt-6 w-16">
                <div className="flex flex-col items-center justify-center rounded-[50%] w-10">
                  <div className="flex flex-col h-10 md:h-auto items-center justify-center rounded-[50%] w-10">
                    <Img
                      className="h-10 md:h-auto rounded-[50%] w-10"
                      src="images/img_imgavatar2_40x40.png"
                      alt="imgavatarTwo"
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
                    className="leading-[22.00px] max-w-[222px] md:max-w-full text-sm text-white-A700"
                    size="txtPublicSansSemiBold14WhiteA700"
                  >
                    {props?.title}
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
                      {props?.date1}
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
                      {props?.views}
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
                      {props?.searches}
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

BlogPostcardhome1.defaultProps = {
  imgcovermtwo: "images/img_imgcoverm2_386x270.png",
  date: "02 Feb 2022",
  title: "The Future of Artificial Intelligence: Trends and Insights",
  date1: "5",
  views: "12",
  searches: "4",
};

export default BlogPostcardhome1;
