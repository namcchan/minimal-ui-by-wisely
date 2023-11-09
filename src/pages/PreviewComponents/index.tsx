import React from "react";

import { Button, Img, List, Switch, Text } from "components";
import Footer from "components/Footer";
import Header1 from "components/Header1";
import PreviewComponentsColumnimg from "components/PreviewComponentsColumnimg";
import PreviewComponentsColumnsubtract from "components/PreviewComponentsColumnsubtract";

const PreviewComponentsPage: React.FC = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-publicsans items-center justify-start mx-auto w-auto sm:w-full md:w-full">
        <Header1
          className="bg-cover bg-no-repeat flex h-20 md:h-auto items-center justify-center px-36 md:px-5 w-full"
          style={{ backgroundImage: "url('images/img_mainheader.svg')" }}
        />
        <PreviewComponentsColumnimg className="flex flex-col items-start justify-between max-w-[1440px] md:px-10 px-36 sm:px-5 py-20 w-full" />
        <div className="flex flex-col gap-6 items-start justify-start max-w-[1132px] mx-auto pb-[120px] pt-20 md:px-5 w-full">
          <div className="flex flex-col gap-2 items-start justify-start w-auto">
            <Text
              className="text-blue_gray-900 text-xl w-auto"
              size="txtPublicSansBold20"
            >
              Foundations
            </Text>
            <Text
              className="text-blue_gray-500 text-sm w-auto"
              size="txtPublicSansRegular14Bluegray500"
            >
              Colors, Typography, Shadows…{" "}
            </Text>
          </div>
          <List
            className="sm:flex-col flex-row gap-5 grid sm:grid-cols-1 md:grid-cols-3 grid-cols-5 justify-start w-auto md:w-full"
            orientation="horizontal"
          >
            {new Array(5).fill({}).map((props, index) => (
              <React.Fragment key={`PreviewComponentsColumnsubtract${index}`}>
                <PreviewComponentsColumnsubtract
                  className="bg-white-A700 border border-blue_gray-300_28 border-solid flex flex-col items-center justify-start rounded-[12px] w-[172px]"
                  {...props}
                />
              </React.Fragment>
            ))}
          </List>
          <Img
            className="h-20 w-full"
            src="images/img_divider_blue_gray_300_80x1132.svg"
            alt="divider"
          />
          <div className="flex flex-col gap-2 items-start justify-start w-auto sm:w-full">
            <Text
              className="text-blue_gray-900 text-xl w-auto"
              size="txtPublicSansBold20"
            >
              MUI Components
            </Text>
            <Text
              className="text-sm text-teal-500 w-auto"
              size="txtPublicSansRegular14Teal500"
            >
              <span className="text-blue_gray-500 font-publicsans text-left font-normal">
                Components from{" "}
              </span>
              <span className="text-teal-500 font-publicsans text-left font-normal">
                M
              </span>
              <span className="text-teal-500 font-publicsans text-left font-normal">
                aterial UI
              </span>
              <span className="text-teal-500 font-publicsans text-left font-normal">
                .
              </span>
            </Text>
            <Text
              className="italic text-blue_gray-500 text-xs w-auto"
              size="txtPublicSansItalic12"
            >
              <span className="text-blue_gray-500 font-publicsans text-left font-normal italic">
                Some advanced components from MUI X will not be included. So you
                need to purchase a separate{" "}
              </span>
              <span className="text-teal-500 font-publicsans text-left font-normal italic">
                license
              </span>
              <span className="text-blue_gray-500 font-publicsans text-left font-normal italic">
                .
              </span>
            </Text>
          </div>
          <div className="gap-5 grid sm:grid-cols-1 md:grid-cols-3 grid-cols-6 justify-center min-h-[auto] w-full">
            {new Array(12).fill({}).map((props, index) => (
              <React.Fragment key={`PreviewComponentsColumnsubtract${index}`}>
                <PreviewComponentsColumnsubtract
                  className="bg-white-A700 border border-blue_gray-300_28 border-solid flex flex-1 flex-col items-center justify-start rounded-[12px] w-full"
                  {...props}
                />
              </React.Fragment>
            ))}
          </div>
          <List
            className="flex flex-col gap-6 items-center w-full"
            orientation="vertical"
          >
            <div className="md:flex-1 gap-5 grid sm:grid-cols-1 md:grid-cols-3 grid-cols-6 items-start justify-start w-auto md:w-full">
              <PreviewComponentsColumnsubtract className="bg-white-A700 border border-blue_gray-300_28 border-solid flex flex-col items-center justify-start rounded-[12px] w-full" />
              <PreviewComponentsColumnsubtract className="bg-white-A700 border border-blue_gray-300_28 border-solid flex flex-col items-center justify-start rounded-[12px] w-full" />
              <PreviewComponentsColumnsubtract className="bg-white-A700 border border-blue_gray-300_28 border-solid flex flex-col items-center justify-start rounded-[12px] w-full" />
              <PreviewComponentsColumnsubtract className="bg-white-A700 border border-blue_gray-300_28 border-solid flex flex-col items-center justify-start rounded-[12px] w-full" />
              <PreviewComponentsColumnsubtract className="bg-white-A700 border border-blue_gray-300_28 border-solid flex flex-col items-center justify-start rounded-[12px] w-full" />
              <PreviewComponentsColumnsubtract className="bg-white-A700 border border-blue_gray-300_28 border-solid flex flex-col items-center justify-start rounded-[12px] w-full" />
            </div>
            <div className="md:flex-1 gap-5 grid sm:grid-cols-1 md:grid-cols-3 grid-cols-6 items-start justify-start w-auto md:w-full">
              <PreviewComponentsColumnsubtract className="bg-white-A700 border border-blue_gray-300_28 border-solid flex flex-col items-center justify-start rounded-[12px] w-full" />
              <PreviewComponentsColumnsubtract className="bg-white-A700 border border-blue_gray-300_28 border-solid flex flex-col items-center justify-start rounded-[12px] w-full" />
              <PreviewComponentsColumnsubtract className="bg-white-A700 border border-blue_gray-300_28 border-solid flex flex-col items-center justify-start rounded-[12px] w-full" />
              <PreviewComponentsColumnsubtract
                className="bg-white-A700 border border-blue_gray-300_28 border-solid flex flex-col items-center justify-start rounded-[12px] w-full"
                subtractimage=""
              />
              <PreviewComponentsColumnsubtract className="bg-white-A700 border border-blue_gray-300_28 border-solid flex flex-col items-center justify-start rounded-[12px] w-full" />
              <PreviewComponentsColumnsubtract className="bg-white-A700 border border-blue_gray-300_28 border-solid flex flex-col items-center justify-start rounded-[12px] w-full" />
            </div>
            <div className="md:flex-1 gap-5 grid sm:grid-cols-1 md:grid-cols-3 grid-cols-5 items-start justify-start w-auto md:w-full">
              <PreviewComponentsColumnsubtract className="bg-white-A700 border border-blue_gray-300_28 border-solid flex flex-col items-center justify-start rounded-[12px] w-full" />
              <PreviewComponentsColumnsubtract className="bg-white-A700 border border-blue_gray-300_28 border-solid flex flex-col items-center justify-start rounded-[12px] w-full" />
              <PreviewComponentsColumnsubtract className="bg-white-A700 border border-blue_gray-300_28 border-solid flex flex-col items-center justify-start rounded-[12px] w-full" />
              <PreviewComponentsColumnsubtract className="bg-white-A700 border border-blue_gray-300_28 border-solid flex flex-col items-center justify-start rounded-[12px] w-full" />
              <PreviewComponentsColumnsubtract className="bg-white-A700 border border-blue_gray-300_28 border-solid flex flex-col items-center justify-start rounded-[12px] w-full" />
            </div>
          </List>
          <Img
            className="h-20 w-full"
            src="images/img_divider_blue_gray_300_80x1132.svg"
            alt="divider_One"
          />
          <div className="flex flex-col gap-2 items-start justify-start w-auto sm:w-full">
            <Text
              className="text-blue_gray-900 text-xl w-auto"
              size="txtPublicSansBold20"
            >
              Extra Components
            </Text>
            <Text
              className="text-blue_gray-500 text-sm w-auto"
              size="txtPublicSansRegular14Bluegray500"
            >
              Some custom components / use 3rd party dependencies (chart, map,
              editor…).
            </Text>
          </div>
          <div className="gap-5 grid sm:grid-cols-1 md:grid-cols-3 grid-cols-6 justify-center min-h-[auto] w-full">
            {new Array(18).fill({}).map((props, index) => (
              <React.Fragment key={`PreviewComponentsColumnsubtract${index}`}>
                <PreviewComponentsColumnsubtract
                  className="bg-white-A700 border border-blue_gray-300_28 border-solid flex flex-1 flex-col items-center justify-start rounded-[12px] w-full"
                  {...props}
                />
              </React.Fragment>
            ))}
          </div>
          <div className="flex flex-col items-start justify-start w-auto">
            <PreviewComponentsColumnsubtract className="bg-white-A700 border border-blue_gray-300_28 border-solid flex flex-col items-center justify-start rounded-[12px] w-[172px]" />
          </div>
        </div>
        <Footer className="bg-white-A700 border-blue_gray-300_33 border-solid border-t flex gap-20 items-center justify-center pb-10 pt-20 px-36 md:px-5 w-full" />
      </div>
    </>
  );
};

export default PreviewComponentsPage;
