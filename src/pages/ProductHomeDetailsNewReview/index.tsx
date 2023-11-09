import React from "react";

import {
  Button,
  Img,
  Input,
  Line,
  List,
  RatingBar,
  Text,
  TextArea,
} from "components";
import BlogPostBreadcrumb from "components/BlogPostBreadcrumb";
import Header1 from "components/Header1";
import ProductDetailsProductdetails from "components/ProductDetailsProductdetails";
import ProductDetailsProductvalues from "components/ProductDetailsProductvalues";
import ProductDetailsTabs from "components/ProductDetailsTabs";
import ProductHomeDetailsNewReviewColumntitle from "components/ProductHomeDetailsNewReviewColumntitle";
import ProductHomeDetailsReviewColumnimgavatartwo from "components/ProductHomeDetailsReviewColumnimgavatartwo";
import ProductHomeDetailsReviewReviewsummary from "components/ProductHomeDetailsReviewReviewsummary";

const ProductHomeDetailsNewReviewPage: React.FC = () => {
  return (
    <>
      <div className="bg-white-A700 font-publicsans mx-auto relative w-[1440px] sm:w-full md:w-full">
        <div className="flex flex-col items-center justify-end mt-auto mx-auto w-full">
          <div className="flex flex-col items-center justify-start w-full">
            <Header1
              className="bg-cover bg-no-repeat flex h-20 md:h-auto items-center justify-center px-36 md:px-5 w-full"
              style={{ backgroundImage: "url('images/img_mainheader.svg')" }}
            />
            <div className="flex flex-col gap-10 items-start justify-start max-w-[1440px] pb-20 pt-10 md:px-10 px-36 sm:px-5 w-full">
              <BlogPostBreadcrumb
                className="flex flex-col gap-2 items-center justify-start max-w-6xl mx-auto w-full"
                activepage="Home"
                jobpage="Product"
                listpage="AE 24/7 Active Hoodie With Gaiter"
              />
              <ProductDetailsProductdetails className="bg-white-A700 flex md:flex-col flex-row md:gap-10 gap-16 items-start justify-start max-w-6xl mx-auto md:px-5 w-full" />
              <ProductDetailsProductvalues className="bg-white-A700 sm:flex-col flex-row gap-10 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center max-w-6xl mx-auto md:px-5 py-10 w-full" />
              <div className="bg-white-A700 flex flex-col items-start justify-start max-w-[1080px] md:px-5 rounded-[16px] shadow-bs4 w-full">
                <ProductDetailsTabs
                  className="sm:px-5 px-6 relative w-full"
                  userdescription="Description"
                />
                <ProductHomeDetailsReviewReviewsummary className="bg-white-A700 border-b border-blue_gray-300_33 border-dashed flex md:flex-col flex-row md:gap-5 items-center justify-center w-full" />
                <ProductHomeDetailsReviewColumnimgavatartwo className="bg-white-A700 flex flex-col gap-10 items-end justify-start max-w-[1080px] py-10 w-full" />
              </div>
            </div>
          </div>
        </div>
        <ProductHomeDetailsNewReviewColumntitle
          className="absolute bg-cover bg-no-repeat flex flex-col h-full inset-[0] items-center justify-center m-auto p-[281px] md:px-10 sm:px-5 rounded-[24px] w-full"
          style={{
            backgroundImage: "url('images/img_dialognewcreditcard.svg')",
          }}
        />
      </div>
    </>
  );
};

export default ProductHomeDetailsNewReviewPage;
