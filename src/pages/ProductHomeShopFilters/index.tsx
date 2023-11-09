import React from "react";

import {
  Button,
  Img,
  Input,
  Line,
  List,
  RatingBar,
  SelectBox,
  Text,
} from "components";
import ComingSoonColumnvalue from "components/ComingSoonColumnvalue";
import ProductHomeShopColumniconssolidic from "components/ProductHomeShopColumniconssolidic";
import ProductHomeShopFiltersColumnstackOne from "components/ProductHomeShopFiltersColumnstackOne";
import ProductHomeShopMainheader from "components/ProductHomeShopMainheader";
import ProductHomeShopProductcard from "components/ProductHomeShopProductcard";

import { CloseSVG } from "../../assets/images";

const pagesOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const ProductHomeShopFiltersPage: React.FC = () => {
  const [wrapvalue, setWrapvalue] = React.useState<string>("");

  return (
    <>
      <div className="bg-white-A700 font-publicsans mx-auto relative w-[1440px] sm:w-full md:w-full">
        <div className="flex flex-col items-center justify-end mt-auto mx-auto w-full">
          <div className="flex flex-col items-center justify-start w-full">
            <ProductHomeShopMainheader
              className="bg-cover bg-no-repeat flex flex-col h-20 md:h-auto items-center justify-center max-w-[1440px] md:px-10 px-36 sm:px-5 w-full"
              style={{ backgroundImage: "url('images/img_mainheader.svg')" }}
              label="Login"
              labelOne="Purchase Now"
            />
            <div className="flex flex-col gap-10 items-start justify-start max-w-[1440px] pb-20 pt-10 md:px-10 px-36 sm:px-5 w-full">
              <Text
                className="text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl w-full"
                size="txtPublicSansBold24"
              >
                Shop
              </Text>
              <div className="flex flex-col items-start justify-start max-w-6xl mx-auto w-full">
                <div className="flex sm:flex-col flex-row gap-[13px] items-center justify-between max-w-6xl w-full">
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
                <div className="flex flex-col items-start justify-start pt-4 w-full">
                  <Text
                    className="text-blue_gray-900 text-sm w-full"
                    size="txtPublicSansRegular14"
                  >
                    1 Products found
                  </Text>
                  <div className="flex md:flex-col flex-row gap-2 items-start justify-start pt-4 w-auto md:w-full">
                    <div className="border border-blue_gray-300_28 border-dashed flex flex-row gap-2 items-center justify-start p-2 rounded-lg w-auto">
                      <Text
                        className="text-blue_gray-900 text-sm w-auto"
                        size="txtPublicSansSemiBold14"
                      >
                        Gender:
                      </Text>
                      <Button
                        className="cursor-pointer flex h-6 items-center justify-center min-w-[61px]"
                        rightIcon={
                          <Img
                            className="h-5 ml-[3px]"
                            src="images/img_close_white_a700.svg"
                            alt="close"
                          />
                        }
                        shape="round"
                        color="blue_gray_900"
                        size="xs"
                        variant="fill"
                      >
                        <div className="font-medium text-[13px] text-center">
                          Kids
                        </div>
                      </Button>
                      <Button
                        className="cursor-pointer flex h-6 items-center justify-center min-w-[80px]"
                        rightIcon={
                          <Img
                            className="h-5 ml-[3px]"
                            src="images/img_close_white_a700.svg"
                            alt="close"
                          />
                        }
                        shape="round"
                        color="blue_gray_900"
                        size="xs"
                        variant="fill"
                      >
                        <div className="font-medium text-[13px] text-center">
                          Women
                        </div>
                      </Button>
                    </div>
                    <div className="border border-blue_gray-300_28 border-dashed flex flex-row gap-2 items-center justify-start p-2 rounded-lg w-auto">
                      <Text
                        className="text-blue_gray-900 text-sm w-auto"
                        size="txtPublicSansSemiBold14"
                      >
                        Category:
                      </Text>
                      <Button
                        className="cursor-pointer flex h-6 items-center justify-center min-w-[83px]"
                        rightIcon={
                          <Img
                            className="h-5 ml-[3px]"
                            src="images/img_close_white_a700.svg"
                            alt="close"
                          />
                        }
                        shape="round"
                        color="blue_gray_900"
                        size="xs"
                        variant="fill"
                      >
                        <div className="font-medium text-[13px] text-center">
                          Apparel
                        </div>
                      </Button>
                      <Button
                        className="cursor-pointer flex h-6 items-center justify-center min-w-[62px]"
                        rightIcon={
                          <Img
                            className="h-5 ml-[3px]"
                            src="images/img_close_white_a700.svg"
                            alt="close"
                          />
                        }
                        shape="round"
                        color="blue_gray_900"
                        size="xs"
                        variant="fill"
                      >
                        <div className="font-medium text-[13px] text-center">
                          Chip
                        </div>
                      </Button>
                      <Button
                        className="cursor-pointer flex h-6 items-center justify-center min-w-[62px]"
                        rightIcon={
                          <Img
                            className="h-5 ml-[3px]"
                            src="images/img_close_white_a700.svg"
                            alt="close"
                          />
                        }
                        shape="round"
                        color="blue_gray_900"
                        size="xs"
                        variant="fill"
                      >
                        <div className="font-medium text-[13px] text-center">
                          Chip
                        </div>
                      </Button>
                    </div>
                    <div className="border border-blue_gray-300_28 border-dashed flex flex-row gap-2 items-center justify-start p-2 rounded-lg w-auto">
                      <Text
                        className="text-blue_gray-900 text-sm w-auto"
                        size="txtPublicSansSemiBold14"
                      >
                        Colors:
                      </Text>
                      <List
                        className="sm:flex-col flex-row gap-2 grid grid-cols-3 w-[73%]"
                        orientation="horizontal"
                      >
                        <div className="bg-blue_gray-900 flex flex-row gap-[-2px] h-6 md:h-auto items-center justify-start px-[3px] rounded-lg w-auto">
                          <div className="bg-teal-500 h-[18px] rounded-[50%] w-[18px]"></div>
                          <Img
                            className="h-5 w-5"
                            src="images/img_close_white_a700.svg"
                            alt="close"
                          />
                        </div>
                        <div className="bg-blue_gray-900 flex flex-row gap-[-2px] h-6 md:h-auto items-center justify-start px-[3px] rounded-lg w-auto">
                          <div className="bg-deep_purple-A200_01 h-[18px] rounded-[50%] w-[18px]"></div>
                          <Img
                            className="h-5 w-5"
                            src="images/img_close_white_a700.svg"
                            alt="close"
                          />
                        </div>
                        <div className="bg-blue_gray-900 flex flex-row gap-[-2px] h-6 md:h-auto items-center justify-start px-[3px] rounded-lg w-auto">
                          <div className="bg-cyan-A700 h-[18px] rounded-[50%] w-[18px]"></div>
                          <Img
                            className="h-5 w-5"
                            src="images/img_close_white_a700.svg"
                            alt="close"
                          />
                        </div>
                      </List>
                    </div>
                    <div className="border border-blue_gray-300_28 border-dashed flex flex-row gap-2 items-center justify-start p-2 rounded-lg w-auto">
                      <Text
                        className="text-blue_gray-900 text-sm w-auto"
                        size="txtPublicSansSemiBold14"
                      >
                        Price:
                      </Text>
                      <Button
                        className="cursor-pointer flex h-6 items-center justify-center min-w-[83px]"
                        rightIcon={
                          <Img
                            className="h-5 ml-[3px]"
                            src="images/img_close_white_a700.svg"
                            alt="close"
                          />
                        }
                        shape="round"
                        color="blue_gray_900"
                        size="xs"
                        variant="fill"
                      >
                        <div className="font-medium text-[13px] text-center">
                          $2 - 200
                        </div>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start max-w-6xl mx-auto w-full">
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
                      labelFour="SALE"
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
                    />
                    <ProductHomeShopProductcard
                      className="bg-white-A700 flex flex-1 flex-col items-end justify-start rounded-[16px] shadow-bs4 w-full"
                      productimage="images/img_imgproductm11.png"
                      country="Arizona Soft Footbed Sandal"
                    />
                    <ProductHomeShopProductcard
                      className="bg-white-A700 flex flex-1 flex-col items-end justify-start rounded-[16px] shadow-bs4 w-full"
                      productimage="images/img_imgproductm12.png"
                      country="Arizona Soft Footbed Sandal"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ProductHomeShopColumniconssolidic
          className="absolute flex flex-col items-center justify-start pt-32 md:px-5 right-[0] top-[0] w-auto"
          badgenumber="2"
        />
        <ProductHomeShopFiltersColumnstackOne
          className="absolute bg-cover bg-no-repeat flex flex-col md:h-auto h-full inset-y-[0] items-center justify-start my-auto md:px-5 right-[0] shadow-bs15 w-[280px]"
          style={{
            backgroundImage: "url('images/img_ecommerceproductfilters.svg')",
          }}
        />
      </div>
    </>
  );
};

export default ProductHomeShopFiltersPage;
