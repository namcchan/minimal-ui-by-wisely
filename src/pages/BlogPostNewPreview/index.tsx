import React from "react";

import { Button, Img, Text } from "components";
import BlogPostPostcontent from "components/BlogPostPostcontent";
import BlogPostPosthero from "components/BlogPostPosthero";

const BlogPostNewPreviewPage: React.FC = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-publicsans items-center justify-start mx-auto pb-16 w-auto sm:w-full md:w-full">
        <header className="bg-white-A700 border-b border-blue_gray-300_33 border-solid flex items-center justify-between p-6 md:px-5 w-full">
          <Text
            className="text-blue_gray-900 text-lg w-auto"
            size="txtPublicSansBold18Bluegray900"
          >
            Preview
          </Text>
          <div className="flex flex-row gap-3 items-center justify-center w-auto">
            <Button
              className="cursor-pointer font-bold h-9 min-w-[71px] text-center text-sm"
              shape="round"
              color="blue_gray_300_51"
              size="md"
              variant="outline"
            >
              Cancel
            </Button>
            <Button
              className="cursor-pointer font-bold h-9 min-w-[102px] text-center text-sm"
              shape="round"
              color="blue_gray_900"
              size="md"
              variant="fill"
            >
              Create Post
            </Button>
          </div>
        </header>
        <BlogPostPosthero className="flex flex-col items-start justify-start max-w-[1440px] w-full" />
        <BlogPostPostcontent
          className="bg-white-A700 flex flex-col gap-10 items-start justify-start max-w-[720px] pt-10 md:px-5 w-full"
          eight="+8"
        />
      </div>
    </>
  );
};

export default BlogPostNewPreviewPage;
