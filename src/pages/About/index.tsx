import React from "react";

import { Button, Img, List, RatingBar, Text } from "components";
import AboutAbouthero from "components/AboutAbouthero";
import AboutAboutminimal from "components/AboutAboutminimal";
import AboutAboutteam from "components/AboutAboutteam";
import AboutAboutvision from "components/AboutAboutvision";
import AboutColumnimgTwo from "components/AboutColumnimgTwo";
import Footer from "components/Footer";
import Header1 from "components/Header1";

const AboutPage: React.FC = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-publicsans items-center justify-start mx-auto w-auto sm:w-full md:w-full">
        <Header1
          className="bg-cover bg-no-repeat flex h-20 md:h-auto items-center justify-center px-36 md:px-5 w-full"
          style={{ backgroundImage: "url('images/img_mainheader.svg')" }}
        />
        <AboutAbouthero
          className="flex flex-col items-center justify-start w-full"
          username={
            <Text className="font-extrabold leading-[80.00px] md:text-5xl text-[64px] text-white-A700">
              <span className="text-teal-500 font-publicsans text-left">
                Who
              </span>
              <span className="text-white-A700 font-publicsans text-left">
                <>
                  {" "}
                  <br />
                  we are?
                </>
              </span>
            </Text>
          }
        />
        <AboutAboutminimal className="bg-white-A700 flex md:flex-col flex-row md:gap-10 gap-20 items-start justify-start max-w-[1440px] md:px-10 px-36 sm:px-5 py-[120px] w-full" />
        <div className="bg-gray-100 flex flex-col md:gap-10 gap-20 items-center justify-start pb-20 w-auto md:w-full">
          <AboutAboutvision className="flex flex-col md:px-5 relative w-full" />
          <Text
            className="leading-[48.00px] max-w-[848px] md:max-w-full md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-900 text-center"
            size="txtPublicSansBold32"
          >
            Our vision offering the best product nulla vehicula tortor
            scelerisque ultrices malesuada.{" "}
          </Text>
        </div>
        <AboutAboutteam className="bg-white-A700 flex flex-col md:gap-10 gap-20 items-center justify-start max-w-[1440px] md:px-10 px-36 sm:px-5 py-[120px] w-full" />
        <AboutColumnimgTwo className="flex flex-col items-center justify-start w-full" />
        <Footer className="bg-white-A700 border-blue_gray-300_33 border-solid border-t flex gap-20 items-center justify-center pb-10 pt-20 px-36 md:px-5 w-full" />
      </div>
    </>
  );
};

export default AboutPage;
