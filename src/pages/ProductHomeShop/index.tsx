import React from "react";

import { Button, Img, Input, SelectBox, Text } from "components";
import ComingSoonColumnvalue from "components/ComingSoonColumnvalue";
import Footer from "components/Footer";
import ProductHomeShopColumniconssolidic from "components/ProductHomeShopColumniconssolidic";
import ProductHomeShopMainheader from "components/ProductHomeShopMainheader";
import ProductHomeShopPagination from "components/ProductHomeShopPagination";
import ProductHomeShopProductcard from "components/ProductHomeShopProductcard";

import { CloseSVG } from "../../assets/images";

const pagesOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const ProductHomeShopPage: React.FC = () => {
  const [wrapvalue, setWrapvalue] = React.useState<string>("");

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-publicsans items-end justify-start mx-auto w-auto sm:w-full md:w-full">
        <div className="md:px-5 relative w-full">
          <div className="flex flex-col items-center justify-start m-auto w-full">
            <div className="flex flex-col items-center justify-start w-full">
              <ProductHomeShopMainheader
                className="bg-cover bg-no-repeat flex flex-col h-20 md:h-auto items-center justify-center md:px-10 px-36 sm:px-5 w-full"
                style={{ backgroundImage: "url('images/img_mainheader.svg')" }}
              />
              <div className="flex flex-col gap-10 items-center justify-start max-w-[1440px] pb-20 pt-10 md:px-10 px-36 sm:px-5 w-full">
                <Text
                  className="text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl w-full"
                  size="txtPublicSansBold24"
                >
                  Shop
                </Text>
                <div className="flex sm:flex-col flex-row gap-[13px] items-center justify-between w-full">
                  <ComingSoonColumnvalue className="flex sm:flex-1 flex-col items-start justify-start w-[260px] sm:w-full" />
                  <div className="flex flex-row gap-2 items-center justify-start w-auto">
                    <div className="flex flex-row gap-2 h-9 md:h-auto items-center justify-center px-2 rounded-lg w-auto">
                      <Text
                        className="text-blue_gray-900 text-center text-sm w-auto"
                        size="txtPublicSansBold14"
                      >
                        Filters
                      </Text>
                      <Img
                        className="h-5 w-5"
                        src="images/img_menu_blue_gray_900.svg"
                        alt="menu"
                      />
                    </div>
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
                        alt="arrowdown"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start w-full">
                  <div className="flex flex-col gap-6 items-center justify-start w-full">
                    <div className="gap-6 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 items-center justify-between w-full">
                      <ProductHomeShopProductcard
                        className="bg-white-A700 flex flex-1 flex-col items-end justify-start rounded-[16px] shadow-bs4 w-full"
                        productimage="images/img_imgproductm1_254x254.png"
                        country="Nike Air Force 1 NDESTRUKT"
                        signal="images/img_signal_amber_200.svg"
                        oldprice="$52.84"
                        price="$35.71"
                      />
                      <ProductHomeShopProductcard
                        className="bg-white-A700 flex flex-1 flex-col items-end justify-start rounded-[16px] shadow-bs4 w-full"
                        productimage="images/img_imgproductm2.png"
                        country="Foundations Matte Flip Flop"
                      />
                      <ProductHomeShopProductcard
                        className="bg-white-A700 flex flex-1 flex-col items-end justify-start rounded-[16px] shadow-bs4 w-full"
                        productimage="images/img_imgproductm3.png"
                        country="Nike Air Zoom Pegasus 37 A.I.R. Chaz Bear"
                      />
                      <ProductHomeShopProductcard
                        className="bg-white-A700 flex flex-1 flex-col items-end justify-start rounded-[16px] shadow-bs4 w-full"
                        productimage="images/img_imgproductm4.png"
                        country="Arizona Soft Footbed Sandal"
                        signal="images/img_globe.svg"
                        price="$26.92"
                      />
                    </div>
                    <div className="gap-6 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 items-center justify-between w-full">
                      <ProductHomeShopProductcard
                        className="bg-white-A700 flex flex-1 flex-col items-end justify-start rounded-[16px] shadow-bs4 w-full"
                        productimage="images/img_imgproductm5.png"
                        country="Boston Soft Footbed Sandal"
                        signal="images/img_globe_purple_a700.svg"
                        price="$44.39"
                      />
                      <ProductHomeShopProductcard
                        className="bg-white-A700 flex flex-1 flex-col items-end justify-start rounded-[16px] shadow-bs4 w-full"
                        productimage="images/img_imgproductm6.png"
                        country="Zoom Freak 2"
                        signal="images/img_globe_pink_500_01.svg"
                        price="$45.35"
                      />
                      <ProductHomeShopProductcard
                        className="bg-white-A700 flex flex-1 flex-col items-end justify-start rounded-[16px] shadow-bs4 w-full"
                        productimage="images/img_imgproductm7.png"
                        country="Gazelle Vintage low-top sneakers"
                      />
                      <ProductHomeShopProductcard
                        className="bg-white-A700 flex flex-1 flex-col items-end justify-start rounded-[16px] shadow-bs4 w-full"
                        signal="images/img_signal_lime_400.svg"
                        oldprice="$43.83"
                        price="$78.22"
                      />
                    </div>
                    <div className="gap-6 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 items-center justify-between w-full">
                      <ProductHomeShopProductcard
                        className="bg-white-A700 flex flex-1 flex-col items-end justify-start rounded-[16px] shadow-bs4 w-full"
                        productimage="images/img_imgproductm9.png"
                        country="Rod Laver low-top sneakers"
                      />
                      <ProductHomeShopProductcard
                        className="bg-white-A700 flex flex-1 flex-col items-end justify-start rounded-[16px] shadow-bs4 w-full"
                        productimage="images/img_imgproductm10.png"
                        country="Boston Soft Footbed Sandal"
                        signal="images/img_globe_green_600.svg"
                        price="$55.47"
                      />
                      <ProductHomeShopProductcard
                        className="bg-white-A700 flex flex-1 flex-col items-end justify-start rounded-[16px] shadow-bs4 w-full"
                        productimage="images/img_imgproductm11.png"
                        country="Arizona Soft Footbed Sandal"
                        signal="images/img_signal_lime_300_01.svg"
                        price="$93.10"
                      />
                      <ProductHomeShopProductcard
                        className="bg-white-A700 flex flex-1 flex-col items-end justify-start rounded-[16px] shadow-bs4 w-full"
                        productimage="images/img_imgproductm12.png"
                        country="Arizona Soft Footbed Sandal"
                        signal="images/img_signal_lime_300_01.svg"
                        price="$93.10"
                      />
                    </div>
                  </div>
                </div>
                <ProductHomeShopPagination className="flex flex-row gap-1.5 items-center justify-center pt-10" />
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

export default ProductHomeShopPage;
