import React from "react";

import { Button, Img, Input, List, Text } from "components";
import BlogPostBreadcrumb from "components/BlogPostBreadcrumb";
import BlogPostPostcontent from "components/BlogPostPostcontent";
import BlogPostPosthero from "components/BlogPostPosthero";
import BlogPostReviewlistblog from "components/BlogPostReviewlistblog";
import BlogPostcardhome2 from "components/BlogPostcardhome2";
import Header1 from "components/Header1";

const BlogPostPage: React.FC = () => {
  const blogPostcardhome2PropList = [
    {
      date: "04 Jul 2022",
      imgcovermfour: "images/img_imgcoverm1_202x270.png",
      titlerand: "10 Effective Strategies for Digital Marketing Success",
    },
    {
      date: "10 Mar 2022",
      imgcovermfour: "images/img_imgcoverm2_202x270.png",
      titlerand: "10 Home Organization Hacks for a Clutter-Free Space",
    },
    {
      date: "08 Apr 2022",
      imgcovermfour: "images/img_imgcoverm3_202x270.png",
      titlerand: "How to Create Engaging Content for Social Media",
    },
    { date: "30 Mar 2022" },
  ];

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-publicsans items-center justify-start mx-auto w-auto sm:w-full md:w-full">
        <Header1
          className="bg-cover bg-no-repeat flex h-20 md:h-auto items-center justify-center px-36 md:px-5 w-full"
          style={{ backgroundImage: "url('images/img_mainheader.svg')" }}
        />
        <BlogPostPosthero
          className="flex flex-col items-start justify-start max-w-[1440px] w-full"
          useravatar="images/img_imgavatar1_7.png"
          username="Deja Brady"
          userdate="12 Jan 2022"
          facebookicon="images/img_facebook.svg"
          instagramicon="images/img_instagram.svg"
          linkedinicon="images/img_iconssocialiclinkedin.svg"
          twittericon="images/img_twitter.svg"
          searchicon="images/img_search_white_a700_16x16.svg"
        />
        <div className="border-b border-blue_gray-300_33 border-solid flex flex-col items-center justify-center py-6 w-full">
          <BlogPostBreadcrumb
            className="flex flex-col gap-2 items-center justify-start max-w-[720px] md:px-5 w-full"
            activepage="Home"
            jobpage="Blog"
            listpage="Portfolio review is this portfolio too creative"
          />
        </div>
        <BlogPostPostcontent className="bg-white-A700 flex flex-col gap-10 items-start justify-start max-w-[720px] md:px-5 w-full" />
        <div className="flex flex-col gap-6 items-end justify-start max-w-[720px] md:px-5 w-full">
          <div className="flex flex-row items-start justify-start w-full">
            <Text
              className="text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl w-auto"
              size="txtPublicSansBold24"
            >
              Comments
            </Text>
            <Text
              className="text-blue_gray-500 text-sm w-auto"
              size="txtPublicSansSemiBold14Bluegray500"
            >
              {" "}
              (200)
            </Text>
          </div>
          <div className="flex flex-col items-start justify-start rounded-lg w-full">
            <div className="border border-blue_gray-300_33 border-solid flex flex-col items-start justify-start px-3.5 py-4 rounded-lg w-full">
              <Text
                className="text-blue_gray-300 text-sm w-auto"
                size="txtPublicSansRegular14Bluegray300"
              >
                Write some of your comments...
              </Text>
            </div>
          </div>
          <div className="flex flex-row sm:gap-10 items-center justify-between w-full">
            <div className="flex flex-row items-start justify-start w-auto">
              <Button
                className="flex h-9 items-center justify-center w-9"
                shape="circle"
                size="md"
              >
                <Img
                  className="h-5"
                  src="images/img_call_blue_gray_500_28x28.svg"
                  alt="call"
                />
              </Button>
              <Button
                className="flex h-9 items-center justify-center w-9"
                shape="circle"
                size="md"
              >
                <Img
                  className="h-5"
                  src="images/img_trash_blue_gray_500_36x36.svg"
                  alt="trash"
                />
              </Button>
              <Button
                className="flex h-9 items-center justify-center w-9"
                shape="circle"
                size="md"
              >
                <Img
                  className="h-5"
                  src="images/img_contrast_blue_gray_500.svg"
                  alt="contrast"
                />
              </Button>
            </div>
            <div className="bg-blue_gray-900 flex flex-col h-9 md:h-auto items-center justify-center px-3 rounded-lg w-auto">
              <Text
                className="text-center text-sm text-white-A700 w-auto"
                size="txtPublicSansBold14WhiteA700"
              >
                Post comment
              </Text>
            </div>
          </div>
        </div>
        <Img
          className="h-20 w-[720px]"
          src="images/img_divider_blue_gray_300_80x720.svg"
          alt="divider"
        />
        <BlogPostReviewlistblog className="bg-white-A700 flex flex-col items-start justify-start max-w-[720px] px-4 md:px-5 w-full" />
        <div className="flex flex-col gap-10 items-start justify-start max-w-6xl mx-auto pb-[120px] md:px-5 w-full">
          <Text
            className="text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl w-auto"
            size="txtPublicSansBold24"
          >
            Recent Posts
          </Text>
          <List
            className="sm:flex-col flex-row gap-6 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-start w-auto md:w-full"
            orientation="horizontal"
          >
            {blogPostcardhome2PropList.map((props, index) => (
              <React.Fragment key={`BlogPostcardhome2${index}`}>
                <BlogPostcardhome2
                  className="bg-white-A700 flex flex-col items-center justify-start rounded-[16px] shadow-bs4 w-[270px]"
                  {...props}
                />
              </React.Fragment>
            ))}
          </List>
        </div>
      </div>
    </>
  );
};

export default BlogPostPage;
