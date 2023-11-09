import React from "react";

import { Button, Img, Input, List, Text } from "components";
import BlogPostcardhome from "components/BlogPostcardhome";
import BlogPostcardhome1 from "components/BlogPostcardhome1";
import BlogPostcardhome2 from "components/BlogPostcardhome2";
import ComingSoonColumnvalue from "components/ComingSoonColumnvalue";
import Header1 from "components/Header1";

import { CloseSVG } from "../../assets/images";

const BlogPage: React.FC = () => {
  const [wrapvalue, setWrapvalue] = React.useState<string>("");
  const blogPostcardhome2PropList = [
    {},
    {
      date: "11 Jul 2022",
      imgcovermfour: "images/img_imgcoverm5_202x270.png",
      titlerand: "10 Effective Strategies for Digital Marketing Success",
    },
    {
      date: "29 Dec 2022",
      imgcovermfour: "images/img_imgcoverm6_202x270.png",
      titlerand: "10 Essential Tips for Healthy Living",
    },
    {
      date: "15 Nov 2022",
      imgcovermfour: "images/img_imgcoverm7_202x270.png",
      titlerand: "Travel Photography Tips: Capturing Memories Around the World",
    },
    {
      date: "05 Oct 2022",
      imgcovermfour: "images/img_imgcoverm8.png",
      titlerand: "Delicious Recipes for a Vegan Diet",
    },
    {
      titlerand:
        "Understanding Blockchain Technology and its Potential Applications",
      imgcovermfour: "images/img_imgcoverm9.png",
    },
    {
      date: "30 Mar 2022",
      imgcovermfour: "images/img_imgcoverm10.png",
      titlerand: "The Importance of Mental Health Awareness",
    },
    {
      date: "24 Apr 2022",
      imgcovermfour: "images/img_imgcoverm11.png",
      titlerand: "The Benefits of Mindfulness Meditation",
    },
    { date: "02 Feb 2022", imgcovermfour: "images/img_imgcoverm12.png" },
    { date: "06 May 2022", imgcovermfour: "images/img_imgcoverm13.png" },
    {
      date: "12 Jan 2022",
      imgcovermfour: "images/img_imgcoverm14.png",
      titlerand: "Unveiling the Secrets of Successful Entrepreneurs",
    },
    {
      date: "12 Jan 2022",
      imgcovermfour: "images/img_imgcoverm15.png",
      titlerand: "Exploring the Hidden Gems of [Destination]",
    },
  ];

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-publicsans items-start justify-start mx-auto w-auto sm:w-full md:w-full">
        <Header1
          className="bg-cover bg-no-repeat flex h-20 md:h-auto items-center justify-center px-36 md:px-5 w-full"
          style={{ backgroundImage: "url('images/img_mainheader.svg')" }}
        />
        <div className="flex flex-col gap-10 items-center justify-start max-w-[1440px] pb-[88px] pt-10 md:px-10 px-36 sm:px-5 w-full">
          <Text
            className="text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl w-full"
            size="txtPublicSansBold24"
          >
            Blog
          </Text>
          <div className="flex sm:flex-col flex-row md:gap-10 items-center justify-between max-w-6xl mx-auto w-full">
            <ComingSoonColumnvalue className="flex sm:flex-1 flex-col items-start justify-start w-[260px] sm:w-full" />
            <div className="flex flex-row gap-2 h-9 md:h-auto items-center justify-center px-2 rounded-lg w-auto">
              <Text
                className="text-blue_gray-900 text-center text-sm w-auto"
                size="txtPublicSansBold14"
              >
                Sort By: Featured
              </Text>
              <Img
                className="h-5 w-5"
                src="images/img_arrowdown_blue_gray_900.svg"
                alt="arrowdown_One"
              />
            </div>
          </div>
          <div className="flex flex-col items-start justify-start max-w-6xl mx-auto w-full">
            <div className="flex flex-col gap-6 items-center justify-start w-full">
              <List
                className="sm:flex-col flex-row gap-6 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center w-full"
                orientation="horizontal"
              >
                <BlogPostcardhome className="flex sm:flex-1 flex-col gap-[-22px] h-[386px] md:h-auto items-start justify-between sm:ml-[0] rounded-[16px] shadow-bs4 w-[564px] sm:w-full" />
                <BlogPostcardhome1 className="flex flex-col gap-[-31px] h-[386px] md:h-auto items-start justify-between sm:ml-[0] rounded-[16px] shadow-bs4 w-[270px]" />
                <BlogPostcardhome1
                  className="flex flex-col gap-[-31px] h-[386px] md:h-auto items-start justify-between sm:ml-[0] rounded-[16px] shadow-bs4 w-[270px]"
                  imgcovermtwo="images/img_imgcoverm3_386x270.png"
                  date="05 Mar 2022"
                  title="Exploring the Hidden Gems of [Destination]"
                />
              </List>
              <div className="md:gap-5 gap-6 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center min-h-[auto] w-full">
                {blogPostcardhome2PropList.map((props, index) => (
                  <React.Fragment key={`BlogPostcardhome2${index}`}>
                    <BlogPostcardhome2
                      className="bg-white-A700 flex flex-1 flex-col items-center justify-start rounded-[16px] shadow-bs4 w-full"
                      {...props}
                    />
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
          <Button
            className="cursor-pointer flex items-center justify-center min-w-[139px]"
            leftIcon={
              <Img
                className="h-6 mr-2"
                src="images/img_brightness_blue_gray_900.svg"
                alt="brightness"
              />
            }
            shape="round"
            color="blue_gray_300_51"
            size="lg"
            variant="outline"
          >
            <div className="font-bold text-[15px] text-left">Load More</div>
          </Button>
        </div>
      </div>
    </>
  );
};

export default BlogPage;
