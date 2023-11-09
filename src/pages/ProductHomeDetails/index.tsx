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
import ProductHomeShopColumniconssolidic from "components/ProductHomeShopColumniconssolidic";
import ProductHomeShopMainheader from "components/ProductHomeShopMainheader";

const pagesOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const ProductHomeDetailsPage: React.FC = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-publicsans items-end justify-start mx-auto w-auto sm:w-full md:w-full">
        <div className="md:px-5 relative w-full">
          <div className="flex flex-col items-center justify-start m-auto w-full">
            <div className="flex flex-col items-center justify-start w-full">
              <ProductHomeShopMainheader
                className="bg-cover bg-no-repeat flex flex-col h-20 md:h-auto items-center justify-center max-w-[1440px] md:px-10 px-36 sm:px-5 w-full"
                style={{ backgroundImage: "url('images/img_mainheader.svg')" }}
              />
              <div className="flex flex-col gap-10 items-start justify-start max-w-[1440px] pb-20 pt-10 md:px-10 px-36 sm:px-5 w-full">
                <BlogPostBreadcrumb
                  className="flex flex-col gap-2 items-center justify-start w-full"
                  activepage="Home"
                  jobpage="Shop"
                  listpage="AE 24/7 Active Hoodie With Gaiter"
                />
                <ProductDetailsProductdetails className="bg-white-A700 flex md:flex-col flex-row md:gap-10 gap-16 items-start justify-start w-full" />
                <ProductDetailsProductvalues className="bg-white-A700 sm:flex-col flex-row gap-10 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center py-10 w-full" />
                <div className="bg-white-A700 flex flex-col items-start justify-start rounded-[16px] shadow-bs4 w-full">
                  <ProductDetailsTabs
                    className="sm:px-5 px-6 relative w-full"
                    userdescription="Description"
                  />
                  <div className="flex flex-col gap-10 items-start justify-start p-6 sm:px-5 w-full">
                    <div className="flex flex-col gap-4 items-start justify-start w-full">
                      <Text
                        className="text-blue_gray-900 text-lg w-full"
                        size="txtPublicSansBold18Bluegray900"
                      >
                        Specifications
                      </Text>
                      <div className="flex flex-row gap-2 items-start justify-start w-full">
                        <Text
                          className="text-blue_gray-900 text-sm w-auto"
                          size="txtPublicSansRegular14"
                        >
                          Category
                        </Text>
                        <Text
                          className="flex-1 text-blue_gray-900 text-sm w-auto"
                          size="txtPublicSansRegular14"
                        >
                          Shoes
                        </Text>
                      </div>
                      <div className="flex flex-row gap-2 items-start justify-start w-full">
                        <Text
                          className="text-blue_gray-900 text-sm w-auto"
                          size="txtPublicSansRegular14"
                        >
                          Manufacturer
                        </Text>
                        <Text
                          className="flex-1 text-blue_gray-900 text-sm w-auto"
                          size="txtPublicSansRegular14"
                        >
                          Nike
                        </Text>
                      </div>
                      <div className="flex flex-row gap-2 items-start justify-start w-full">
                        <Text
                          className="text-blue_gray-900 text-sm w-auto"
                          size="txtPublicSansRegular14"
                        >
                          Serial number
                        </Text>
                        <Text
                          className="flex-1 text-blue_gray-900 text-sm w-auto"
                          size="txtPublicSansRegular14"
                        >
                          358607726380311
                        </Text>
                      </div>
                      <div className="flex flex-row gap-2 items-start justify-start w-full">
                        <Text
                          className="text-blue_gray-900 text-sm w-auto"
                          size="txtPublicSansRegular14"
                        >
                          Ships From
                        </Text>
                        <Text
                          className="flex-1 text-blue_gray-900 text-sm w-auto"
                          size="txtPublicSansRegular14"
                        >
                          United States
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col gap-4 items-start justify-start w-full">
                      <Text
                        className="text-blue_gray-900 text-lg w-full"
                        size="txtPublicSansBold18Bluegray900"
                      >
                        Product Details
                      </Text>
                      <Text
                        className="leading-[22.00px] text-blue_gray-900 text-sm"
                        size="txtPublicSansRegular14"
                      >
                        <>
                          The foam sockliner feels soft and comfortable
                          <br />
                          Pull tab
                          <br />
                          Not intended for use as Personal Protective Equipment
                          <br />
                          Colour Shown: White/Black/Oxygen Purple/Action Grape
                          <br />
                          Style: 921826-109
                          <br />
                          Country/Region of Origin: China
                        </>
                      </Text>
                      <Text
                        className="text-blue_gray-900 text-lg w-full"
                        size="txtPublicSansBold18Bluegray900"
                      >
                        Benefits
                      </Text>
                      <Text
                        className="leading-[22.00px] text-blue_gray-900 text-sm"
                        size="txtPublicSansRegular14"
                      >
                        <>
                          Mesh and synthetic materials on the upper keep the
                          fluid look of the OG while adding comfort and
                          durability.
                          <br />
                          Originally designed for performance running, the
                          full-length Max Air unit adds soft, comfortable
                          cushioning underfoot.
                          <br />
                          The foam midsole feels springy and soft.
                          <br />
                          The rubber outsole adds traction and durability.
                        </>
                      </Text>
                      <Text
                        className="text-blue_gray-900 text-lg w-full"
                        size="txtPublicSansBold18Bluegray900"
                      >
                        Delivery and Returns
                      </Text>
                      <Text
                        className="text-blue_gray-900 text-sm w-full"
                        size="txtPublicSansRegular14"
                      >
                        Your order of $200 or more gets free standard delivery.
                      </Text>
                      <Text
                        className="leading-[22.00px] text-blue_gray-900 text-sm"
                        size="txtPublicSansRegular14"
                      >
                        <>
                          Standard delivered 4-5 Business Days <br />
                          Express delivered 2-4 Business Days
                        </>
                      </Text>
                      <Text
                        className="text-blue_gray-900 text-sm w-full"
                        size="txtPublicSansRegular14"
                      >
                        Orders are processed and delivered Monday-Friday
                        (excluding public holidays)
                      </Text>
                    </div>
                  </div>
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

export default ProductHomeDetailsPage;
