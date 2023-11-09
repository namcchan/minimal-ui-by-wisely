import React from "react";

import {
  Button,
  Img,
  Line,
  List,
  RatingBar,
  SelectBox,
  Text,
} from "components";
import BlogPostBreadcrumb from "components/BlogPostBreadcrumb";
import Footer from "components/Footer";
import ProductDetailsProductdetails from "components/ProductDetailsProductdetails";
import ProductDetailsProductvalues from "components/ProductDetailsProductvalues";
import ProductDetailsTabs from "components/ProductDetailsTabs";
import ProductHomeDetailsReviewColumnimgavatartwo from "components/ProductHomeDetailsReviewColumnimgavatartwo";
import ProductHomeDetailsReviewReviewsummary from "components/ProductHomeDetailsReviewReviewsummary";
import ProductHomeShopColumniconssolidic from "components/ProductHomeShopColumniconssolidic";
import ProductHomeShopMainheader from "components/ProductHomeShopMainheader";

const pagesOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const ProductHomeDetailsReviewPage: React.FC = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-publicsans items-start justify-start mx-auto w-auto sm:w-full md:w-full">
        <div className="md:px-5 relative w-full">
          <div className="flex flex-col items-center justify-start m-auto w-full">
            <div className="flex flex-col items-center justify-start w-full">
              <ProductHomeShopMainheader
                className="bg-cover bg-no-repeat flex flex-col h-20 md:h-auto items-center justify-center md:px-10 px-36 sm:px-5 w-full"
                style={{ backgroundImage: "url('images/img_mainheader.svg')" }}
              />
              <div className="flex flex-col gap-10 items-start justify-start pb-20 pt-10 md:px-10 px-36 sm:px-5 w-full">
                <BlogPostBreadcrumb
                  className="flex flex-col gap-2 items-center justify-start w-full"
                  activepage="Home"
                  jobpage="Product"
                  listpage="AE 24/7 Active Hoodie With Gaiter"
                />
                <ProductDetailsProductdetails className="bg-white-A700 flex md:flex-col flex-row md:gap-10 gap-16 items-start justify-start w-full" />
                <ProductDetailsProductvalues className="bg-white-A700 sm:flex-col flex-row gap-10 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center py-10 w-full" />
                <div className="bg-white-A700 flex flex-col items-start justify-start rounded-[16px] shadow-bs4 w-full">
                  <ProductDetailsTabs
                    className="sm:px-5 px-6 relative w-full"
                    userdescription="Description"
                  />
                  <ProductHomeDetailsReviewReviewsummary className="bg-white-A700 border-b border-blue_gray-300_33 border-dashed flex md:flex-col flex-row md:gap-5 items-center justify-center w-full" />
                  <ProductHomeDetailsReviewColumnimgavatartwo className="bg-white-A700 flex flex-col gap-10 items-end justify-start py-10 w-full" />
                </div>
              </div>
            </div>
          </div>
          <ProductHomeShopColumniconssolidic className="absolute flex flex-col items-center justify-start pt-32 right-[0] top-[0] w-auto" />
        </div>
        <Footer className="bg-white-A700 border-blue_gray-300_33 border-solid border-t flex gap-20 items-center justify-center pb-10 pt-20 px-36 md:px-5 w-full" />
      </div>
    </>
  );
};

export default ProductHomeDetailsReviewPage;
