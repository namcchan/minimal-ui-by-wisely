import React from "react";

import { Img, Text } from "components";

type BlogPostBreadcrumbProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "titleTwentyTwo" | "activepage" | "jobpage" | "listpage" | "plus" | "labelOne"
> &
  Partial<{
    titleTwentyTwo: string;
    activepage: string;
    jobpage: string;
    listpage: string;
    plus: string;
    labelOne: string;
  }>;

const BlogPostBreadcrumb: React.FC<BlogPostBreadcrumbProps> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-1 flex-col gap-2 items-start justify-center w-full">
          {!!props?.titleTwentyTwo ? (
            <Text
              className="text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl w-auto"
              size="txtPublicSansBold24"
            >
              {props?.titleTwentyTwo}
            </Text>
          ) : null}
          <div className="flex md:flex-col flex-row gap-4 items-center justify-start w-full">
            <div className="flex flex-col items-center justify-start w-auto">
              <Text
                className="text-blue_gray-900 text-sm w-auto"
                size="txtPublicSansRegular14"
              >
                {props?.activepage}
              </Text>
            </div>
            <div className="bg-blue_gray-300 h-1 rounded-[50%] w-1"></div>
            <div className="flex flex-col items-center justify-start w-[22px]">
              <Text
                className="text-blue_gray-900 text-sm w-auto"
                size="txtPublicSansRegular14"
              >
                {props?.jobpage}
              </Text>
            </div>
            <div className="bg-blue_gray-300 h-1 rounded-[50%] w-1"></div>
            <div className="flex flex-1 flex-col items-center justify-start w-full">
              <Text
                className="text-blue_gray-300 text-sm w-auto"
                size="txtPublicSansRegular14Bluegray300"
              >
                {props?.listpage}
              </Text>
            </div>
          </div>
        </div>
        <div className="bg-blue_gray-900 flex flex-row gap-2 h-9 md:h-auto items-center justify-center px-3 rounded-lg w-auto">
          {!!props?.plus ? (
            <Img className="h-5 w-5" alt="plus" src={props?.plus} />
          ) : null}
          {!!props?.labelOne ? (
            <Text
              className="text-center text-sm text-white-A700 w-auto"
              size="txtPublicSansBold14WhiteA700"
            >
              {props?.labelOne}
            </Text>
          ) : null}
        </div>
      </div>
    </>
  );
};

BlogPostBreadcrumb.defaultProps = {
  activepage: "Dashboard",
  jobpage: "Job",
  listpage: "List",
};

export default BlogPostBreadcrumb;
