import React from "react";

import { Button, Img, Line, RatingBar, Text } from "components";

type HomeHomeheroProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  | "startanewprojecOne"
  | "startanewprojecTwo"
  | "thestartingpoinOne"
  | "thestartingpoinTwo"
  | "thestartingpoinThree"
  | "livePreview"
  | "thestartingpoinFour"
  | "designPreview"
  | "thestartingpoinFive"
  | "producttitletwo"
  | "price"
  | "producttitleone"
  | "priceOne"
  | "title"
  | "priceTwo"
  | "duration"
  | "titleOne"
  | "durationOne"
  | "titleTwo"
  | "date"
  | "titleThree"
  | "dateOne"
  | "titleFour"
  | "dateTwo"
  | "p35fiftyfour"
  | "numberratingran"
  | "text"
  | "time"
  | "durationTwo"
  | "countrynamerand"
  | "textOne"
  | "bookedcounter"
  | "language"
  | "value"
  | "label"
  | "timeOne"
  | "timeTwo"
  | "textTwo"
  | "numberpercent"
  | "numberlongone"
  | "sold"
  | "titleFive"
  | "totalprofit"
  | "totalincome"
  | "home"
  | "components"
  | "dashboard"
  | "documentation"
  | "login"
  | "purchaseNow"
> &
  Partial<{
    startanewprojecOne: JSX.Element | string;
    startanewprojecTwo: string;
    thestartingpoinOne: JSX.Element | string;
    thestartingpoinTwo: string;
    thestartingpoinThree: string;
    livePreview: string;
    thestartingpoinFour: string;
    designPreview: string;
    thestartingpoinFive: string;
    producttitletwo: string;
    price: string;
    producttitleone: string;
    priceOne: string;
    title: string;
    priceTwo: string;
    duration: string;
    titleOne: string;
    durationOne: string;
    titleTwo: string;
    date: string;
    titleThree: string;
    dateOne: string;
    titleFour: string;
    dateTwo: string;
    p35fiftyfour: string;
    numberratingran: string;
    text: string;
    time: string;
    durationTwo: string;
    countrynamerand: string;
    textOne: string;
    bookedcounter: string;
    language: string;
    value: string;
    label: string;
    timeOne: string;
    timeTwo: string;
    textTwo: string;
    numberpercent: string;
    numberlongone: string;
    sold: string;
    titleFive: string;
    totalprofit: string;
    totalincome: string;
    home: string;
    components: string;
    dashboard: string;
    documentation: string;
    login: string;
    purchaseNow: string;
  }>;

const HomeHomehero: React.FC<HomeHomeheroProps> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col items-center justify-start w-full">
          <div className="h-[1024px] relative w-full">
            <Img
              className="absolute h-[1024px] inset-[0] justify-center m-auto object-cover w-full"
              src="images/img_img_992x928.png"
              alt="img"
            />
            <div className="absolute bg-white-A700_ab inset-[0] justify-center m-auto w-full">
              <div
                className="bg-cover bg-no-repeat flex flex-col h-[1024px] items-center justify-end ml-auto my-auto pt-20 w-[90%]"
                style={{ backgroundImage: "url('images/img_group100.png')" }}
              >
                <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
                  <div className="flex sm:flex-1 flex-col items-center justify-start md:mt-0 mt-36 w-[480px] sm:w-full">
                    <div className="flex flex-col items-center justify-start w-full">
                      <Text
                        className="leading-[64.00px] max-w-[480px] md:max-w-full text-5xl sm:text-[38px] md:text-[44px] text-blue_gray-900 text-center"
                        size="txtPublicSansExtraBold48"
                      >
                        {props?.startanewprojecOne}
                      </Text>
                      <div className="flex flex-col items-center justify-center pb-6 pt-2 w-auto sm:w-full">
                        <Text
                          className="bg-clip-text bg-gradient  md:text-5xl text-8xl text-center text-transparent tracking-[8.00px] w-auto"
                          size="txtBarlowBlack96"
                        >
                          {props?.startanewprojecTwo}
                        </Text>
                      </div>
                      <Text
                        className="leading-[22.00px] max-w-[480px] md:max-w-full text-blue_gray-900 text-center text-sm"
                        size="txtPublicSansRegular14"
                      >
                        {props?.thestartingpoinOne}
                      </Text>
                    </div>
                    <div className="flex flex-row gap-1 items-center justify-start pb-10 pt-6 w-auto">
                      <div className="flex flex-col items-center justify-start w-auto">
                        <RatingBar
                          className="flex justify-between w-[100px]"
                          value={1}
                          starCount={5}
                          size={20}
                        ></RatingBar>
                      </div>
                      <Text
                        className="text-blue_gray-900 text-center text-xs w-auto"
                        size="txtPublicSansRegular12Bluegray900"
                      >
                        {props?.thestartingpoinTwo}
                      </Text>
                      <Text
                        className="text-blue_gray-500 text-center text-xs w-auto"
                        size="txtPublicSansRegular12"
                      >
                        {props?.thestartingpoinThree}
                      </Text>
                    </div>
                    <div className="flex flex-row gap-4 items-start justify-start pb-10 w-auto">
                      <div className="flex flex-col gap-5 items-center justify-start w-auto">
                        <Button
                          className="cursor-pointer flex items-center justify-center min-w-[153px]"
                          leftIcon={
                            <Img
                              className="h-6 mr-2"
                              src="images/img_reply.svg"
                              alt="reply"
                            />
                          }
                          shape="round"
                          color="blue_gray_900"
                          size="lg"
                          variant="fill"
                        >
                          <div className="font-bold font-publicsans text-[15px] text-left">
                            {props?.livePreview}
                          </div>
                        </Button>
                        <div className="flex flex-row gap-1 items-center justify-start w-auto">
                          <Img
                            className="h-4 w-4"
                            src="images/img_iconssolidic.svg"
                            alt="iconssolidic"
                          />
                          <Text
                            className="text-blue_gray-900 text-center text-xs underline w-auto"
                            size="txtPublicSansRegular12Bluegray900"
                          >
                            {props?.thestartingpoinFour}
                          </Text>
                        </div>
                      </div>
                      <Button
                        className="cursor-pointer flex items-center justify-center min-w-[173px]"
                        leftIcon={
                          <Img
                            className="h-6 mr-2"
                            src="images/img_iconssolidic.svg"
                            alt="start icon"
                          />
                        }
                        shape="round"
                        color="blue_gray_900"
                        size="lg"
                        variant="outline"
                      >
                        <div className="!text-blue_gray-900 font-bold font-publicsans text-[15px] text-left">
                          {props?.designPreview}
                        </div>
                      </Button>
                    </div>
                    <div className="flex flex-col gap-6 items-center justify-start w-auto">
                      <Text
                        className="text-blue_gray-900_7e text-xs uppercase w-auto"
                        size="txtPublicSansBold12Bluegray9007e"
                      >
                        {props?.thestartingpoinFive}
                      </Text>
                      <div className="flex flex-row gap-4 items-center justify-center w-auto">
                        <Img
                          className="h-6 w-6"
                          src="images/img_computer.svg"
                          alt="computer"
                        />
                        <Img
                          className="h-6 w-6"
                          src="images/img_trash.svg"
                          alt="trash"
                        />
                        <Img
                          className="h-6 w-6"
                          src="images/img_sort.svg"
                          alt="sort"
                        />
                        <Img
                          className="h-6 w-6"
                          src="images/img_clock.svg"
                          alt="clock"
                        />
                        <Img
                          className="h-6 md:h-auto object-cover w-6"
                          src="images/img_iconsplatformicvite.png"
                          alt="iconsplatformic"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex md:flex-1 flex-col items-center justify-end w-[56%] md:w-full">
                    <div className="flex flex-col items-start justify-start rotate-[-16deg] w-auto md:w-full">
                      <div className="h-[1024px] md:h-[181px] relative w-full">
                        <div className="absolute md:h-44 h-[959px] right-[0] rounded-[16px] shadow-bs1 top-[0] w-[96%] md:w-full">
                          <div className="absolute h-[584px] md:h-[98px] right-[0] top-[0] w-[84%] sm:w-full">
                            <div className="absolute bg-white-A700 flex flex-col items-center justify-start right-[0] rounded-[16px] shadow-bs2 top-[0] w-[441px] sm:w-full">
                              <div className="h-[139px] md:h-[69px] pb-6 sm:px-5 px-6 relative rounded-[16px] w-full">
                                <div className="absolute flex flex-1 flex-row gap-4 items-center justify-start left-[12%] top-[0] w-full">
                                  <Img
                                    className="h-[26px] md:h-auto object-cover rounded-[12px] w-[61px]"
                                    src="images/img_imgproducts4.png"
                                    alt="imgproductsFour"
                                  />
                                  <div className="md:h-[17px] h-[39px] relative w-full">
                                    <Text
                                      className="absolute flex-1 inset-x-[0] mx-auto text-blue_gray-900 text-sm top-[0] w-max"
                                      size="txtPublicSansSemiBold14"
                                    >
                                      {props?.producttitletwo}
                                    </Text>
                                    <Text
                                      className="absolute left-[1%] text-blue_gray-500 text-sm top-[21%] w-auto"
                                      size="txtPublicSansRegular14Bluegray500"
                                    >
                                      {props?.price}
                                    </Text>
                                  </div>
                                  <Img
                                    className="h-5 w-[47px]"
                                    src="images/img_share.svg"
                                    alt="share"
                                  />
                                </div>
                                <div className="absolute bottom-[18%] flex flex-1 flex-row gap-4 items-center justify-start left-[7%] w-full">
                                  <Img
                                    className="h-[49px] md:h-auto object-cover rounded-[12px] w-[61px]"
                                    src="images/img_imgproducts5.png"
                                    alt="imgproductsFive"
                                  />
                                  <div className="h-14 md:h-[23px] relative w-full">
                                    <Text
                                      className="absolute bottom-[22%] flex-1 inset-x-[0] mx-auto text-blue_gray-900 text-sm w-max"
                                      size="txtPublicSansSemiBold14"
                                    >
                                      {props?.producttitleone}
                                    </Text>
                                    <Text
                                      className="absolute bottom-1/4 left-[1%] text-blue_gray-500 text-sm w-auto"
                                      size="txtPublicSansRegular14Bluegray500"
                                    >
                                      {props?.priceOne}
                                    </Text>
                                  </div>
                                  <Img
                                    className="h-[19px] w-[35px]"
                                    src="images/img_share_white_a700.svg"
                                    alt="share_One"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="absolute bg-white-A700 bottom-[0] h-[448px] md:h-[98px] left-[0] rounded-[16px] shadow-bs2 w-[468px] sm:w-full">
                              <div className="absolute flex flex-col items-center justify-start sm:pl-5 pl-6 pr-4 py-6 right-[0] top-[0] w-full">
                                <div className="flex flex-col items-center justify-start w-full">
                                  <div className="flex flex-col items-start justify-start w-full">
                                    <Text
                                      className="leading-[28.00px] max-w-[311px] md:max-w-full text-blue_gray-900 text-lg"
                                      size="txtPublicSansBold18Bluegray900"
                                    >
                                      {props?.title}
                                    </Text>
                                  </div>
                                </div>
                              </div>
                              <div className="absolute bottom-[0] h-[375px] md:h-[66px] left-[0] pb-6 sm:px-5 px-6 w-full">
                                <div className="absolute h-[279px] md:h-[54px] left-[6%] top-[0] w-[71%]">
                                  <div className="absolute h-[214px] md:h-[54px] right-[0] top-[0] w-[94%]">
                                    <div className="absolute h-[149px] md:h-[54px] right-[0] top-[0] w-[94%]">
                                      <div className="absolute md:h-[54px] h-[84px] right-[0] top-[0] w-[258px]">
                                        <div className="absolute md:h-[35px] h-[66px] left-[0] top-[0]">
                                          <Img
                                            className="absolute h-[35px] right-[0] top-[0] w-[22px]"
                                            src="images/img_checkmark.svg"
                                            alt="checkmark"
                                          />
                                          <Img
                                            className="absolute bottom-[0] h-full left-[0] w-[21px]"
                                            src="images/img_arrowdown.svg"
                                            alt="arrowdown"
                                          />
                                        </div>
                                        <div className="absolute md:h-[54px] h-[81px] inset-y-[0] my-auto pt-1.5 right-[0] w-full">
                                          <Text
                                            className="absolute leading-[22.00px] max-w-[217px] md:max-w-full right-[0] text-blue_gray-900 text-sm top-[7%]"
                                            size="txtPublicSansSemiBold14"
                                          >
                                            {props?.priceTwo}
                                          </Text>
                                          <div className="absolute bottom-[0] flex flex-1 flex-col inset-x-[0] items-center justify-start mx-auto w-full">
                                            <Text
                                              className="leading-[18.00px] max-w-[221px] md:max-w-full text-blue_gray-300 text-xs"
                                              size="txtPublicSansRegular12Bluegray300"
                                            >
                                              {props?.duration}
                                            </Text>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="absolute bottom-[0] md:h-[54px] h-[84px] left-[0] w-[258px]">
                                        <div className="absolute md:h-[35px] h-[66px] left-[0] top-[0]">
                                          <Img
                                            className="absolute h-[35px] right-[0] top-[0] w-[22px]"
                                            src="images/img_settings.svg"
                                            alt="settings"
                                          />
                                          <Img
                                            className="absolute bottom-[0] h-full left-[0] w-[21px]"
                                            src="images/img_arrowdown.svg"
                                            alt="arrowdown_One"
                                          />
                                        </div>
                                        <div className="absolute md:h-[54px] h-[81px] inset-y-[0] my-auto pt-1.5 right-[0] w-full">
                                          <Text
                                            className="absolute leading-[22.00px] max-w-[217px] md:max-w-full right-[0] text-blue_gray-900 text-sm top-[7%]"
                                            size="txtPublicSansSemiBold14"
                                          >
                                            {props?.titleOne}
                                          </Text>
                                          <div className="absolute bottom-[0] flex flex-1 flex-col inset-x-[0] items-center justify-start mx-auto w-full">
                                            <Text
                                              className="leading-[18.00px] max-w-[221px] md:max-w-full text-blue_gray-300 text-xs"
                                              size="txtPublicSansRegular12Bluegray300"
                                            >
                                              {props?.durationOne}
                                            </Text>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="absolute bottom-[0] md:h-11 h-[84px] left-[0] w-[258px]">
                                      <div className="absolute md:h-[35px] h-[66px] left-[0] top-[0]">
                                        <Img
                                          className="absolute h-[35px] right-[0] top-[0] w-[22px]"
                                          src="images/img_close.svg"
                                          alt="close"
                                        />
                                        <Img
                                          className="absolute bottom-[0] h-full left-[0] w-[21px]"
                                          src="images/img_arrowdown.svg"
                                          alt="arrowdown_Two"
                                        />
                                      </div>
                                      <div className="absolute md:h-11 h-[81px] inset-y-[0] my-auto pt-1.5 right-[0] w-full">
                                        <Text
                                          className="absolute leading-[22.00px] max-w-[217px] md:max-w-full right-[0] text-blue_gray-900 text-sm top-[7%]"
                                          size="txtPublicSansSemiBold14"
                                        >
                                          {props?.titleTwo}
                                        </Text>
                                        <div className="absolute bottom-[0] flex flex-1 flex-col inset-x-[0] items-start justify-start mx-auto w-full">
                                          <Text
                                            className="text-blue_gray-300 text-xs w-auto"
                                            size="txtPublicSansRegular12Bluegray300"
                                          >
                                            {props?.date}
                                          </Text>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="absolute bottom-[0] md:h-11 h-[84px] left-[0] w-[258px]">
                                    <div className="absolute md:h-[35px] h-[66px] left-[0] top-[0]">
                                      <Img
                                        className="absolute h-[35px] right-[0] top-[0] w-[22px]"
                                        src="images/img_checkmark_deep_orange_500.svg"
                                        alt="checkmark_One"
                                      />
                                      <Img
                                        className="absolute bottom-[0] h-full left-[0] w-[21px]"
                                        src="images/img_arrowdown.svg"
                                        alt="arrowdown_Three"
                                      />
                                    </div>
                                    <div className="absolute md:h-11 h-[81px] inset-y-[0] my-auto pt-1.5 right-[0] w-full">
                                      <Text
                                        className="absolute leading-[22.00px] max-w-[217px] md:max-w-full right-[0] text-blue_gray-900 text-sm top-[7%]"
                                        size="txtPublicSansSemiBold14"
                                      >
                                        {props?.titleThree}
                                      </Text>
                                      <div className="absolute bottom-[0] flex flex-1 flex-col inset-x-[0] items-start justify-start mx-auto w-full">
                                        <Text
                                          className="text-blue_gray-300 text-xs w-auto"
                                          size="txtPublicSansRegular12Bluegray300"
                                        >
                                          {props?.dateOne}
                                        </Text>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="absolute bottom-[8%] md:h-[66px] h-[84px] left-[7%] w-[258px]">
                                  <Img
                                    className="absolute h-full left-[0] top-[0] w-[31px]"
                                    src="images/img_computer_deep_purple_a200_01.svg"
                                    alt="computer_One"
                                  />
                                  <div className="absolute md:h-[54px] h-[81px] inset-y-[0] my-auto pt-1.5 right-[0] w-full">
                                    <Text
                                      className="absolute leading-[22.00px] max-w-[217px] md:max-w-full right-[0] text-blue_gray-900 text-sm top-[7%]"
                                      size="txtPublicSansSemiBold14"
                                    >
                                      {props?.titleFour}
                                    </Text>
                                    <div className="absolute bottom-[0] flex flex-1 flex-col inset-x-[0] items-center justify-start mx-auto w-full">
                                      <Text
                                        className="leading-[18.00px] max-w-[221px] md:max-w-full text-blue_gray-300 text-xs"
                                        size="txtPublicSansRegular12Bluegray300"
                                      >
                                        {props?.dateTwo}
                                      </Text>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="absolute bg-white-A700 bottom-[0] md:h-44 h-[379px] left-[0] rounded-[16px] shadow-bs2 w-[447px] sm:w-full">
                            <div className="absolute md:h-44 h-[274px] right-[0] top-[0] w-[94%] sm:w-full">
                              <div className="absolute md:h-44 h-[191px] pt-2 px-2 right-[0] top-[0] w-[392px] sm:w-full">
                                <div className="absolute h-full inset-y-[0] left-[2%] my-auto w-full">
                                  <Img
                                    className="md:h-44 h-full m-auto object-cover rounded-lg w-full"
                                    src="images/img_imgtravels2.png"
                                    alt="imgtravelsTwo"
                                  />
                                  <div className="absolute flex flex-row gap-1 items-center justify-between p-2 right-[0] top-[0] w-[255px]">
                                    <Button
                                      className="cursor-pointer font-publicsans font-semibold min-w-[67px] text-center text-sm"
                                      shape="round"
                                      color="blue_gray_900"
                                      size="sm"
                                      variant="fill"
                                    >
                                      {props?.p35fiftyfour}
                                    </Button>
                                    <div className="bg-yellow-100 flex flex-row gap-0.5 items-center justify-start px-[5px] py-0.5 rounded-lg w-auto">
                                      <Img
                                        className="h-5 w-[25px]"
                                        src="images/img_star.svg"
                                        alt="star"
                                      />
                                      <Text
                                        className="text-blue_gray-900 text-sm w-auto"
                                        size="txtPublicSansSemiBold14"
                                      >
                                        {props?.numberratingran}
                                      </Text>
                                    </div>
                                  </div>
                                </div>
                                <div className="absolute bottom-[0] h-[163px] md:h-[82px] right-[3%] w-[126px]">
                                  <Img
                                    className="absolute h-[82px] object-cover right-[0] rounded-lg top-[0] w-[102px] sm:w-full"
                                    src="images/img_imgtravels4.png"
                                    alt="imgtravelsFour"
                                  />
                                  <Img
                                    className="absolute bottom-[0] h-[82px] left-[0] object-cover rounded-lg w-[102px] sm:w-full"
                                    src="images/img_imgtravels6.png"
                                    alt="imgtravelsSix"
                                  />
                                </div>
                              </div>
                              <div className="absolute bottom-[0] md:h-12 h-[109px] left-[0] pb-4 pt-5 px-5 w-[367px]">
                                <div className="absolute flex flex-col gap-0.5 items-center justify-start left-[9%] top-[19%] w-auto">
                                  <Text
                                    className="text-blue_gray-300 text-center text-xs w-auto"
                                    size="txtPublicSansRegular12Bluegray300"
                                  >
                                    {props?.text}
                                  </Text>
                                  <Text
                                    className="text-blue_gray-300 text-center text-xs w-auto"
                                    size="txtPublicSansRegular12Bluegray300"
                                  >
                                    {props?.time}
                                  </Text>
                                </div>
                                <Text
                                  className="absolute bottom-[15%] inset-x-[0] leading-[24.00px] max-w-[309px] md:max-w-full mx-auto text-base text-blue_gray-900"
                                  size="txtPublicSansSemiBold16"
                                >
                                  {props?.durationTwo}
                                </Text>
                              </div>
                            </div>
                            <div className="absolute bottom-[0] h-[132px] md:h-[45px] left-[0] pb-5 pl-5 pr-2 w-full">
                              <div className="absolute h-[108px] md:h-[45px] left-[7%] top-[1%] w-full">
                                <div className="absolute md:h-[45px] h-[77px] inset-x-[0] mx-auto top-[0] w-[98%]">
                                  <div className="absolute flex flex-row gap-2 inset-x-[0] items-center justify-start mx-auto top-[0] w-[285px]">
                                    <Img
                                      className="h-5 w-[25px]"
                                      src="images/img_location.svg"
                                      alt="location"
                                    />
                                    <Text
                                      className="flex-1 text-blue_gray-900 text-sm w-auto"
                                      size="txtPublicSansRegular14"
                                    >
                                      {props?.countrynamerand}
                                    </Text>
                                  </div>
                                  <div className="absolute bottom-[0] flex flex-row gap-2 inset-x-[0] items-center justify-evenly mx-auto w-[285px]">
                                    <Img
                                      className="h-5 w-[25px]"
                                      src="images/img_clock_cyan_a700.svg"
                                      alt="clock_One"
                                    />
                                    <Text
                                      className="flex-1 leading-[22.00px] max-w-[257px] md:max-w-full text-blue_gray-900 text-sm"
                                      size="txtPublicSansRegular14"
                                    >
                                      {props?.textOne}
                                    </Text>
                                  </div>
                                </div>
                                <div className="absolute bottom-[0] flex flex-1 flex-row gap-2 items-center justify-start left-[0] w-full">
                                  <Img
                                    className="h-5 w-[25px]"
                                    src="images/img_iconssolidic_teal_500.svg"
                                    alt="iconssolidic_One"
                                  />
                                  <Text
                                    className="flex-1 text-blue_gray-900 text-sm w-auto"
                                    size="txtPublicSansRegular14"
                                  >
                                    {props?.bookedcounter}
                                  </Text>
                                </div>
                              </div>
                              <div className="absolute bottom-[15%] flex flex-col h-[37px] md:h-auto items-center justify-center right-[6%] rounded-[18px] w-[46px]">
                                <Img
                                  className="h-5 w-[25px]"
                                  src="images/img_iconssolidic_blue_gray_500.svg"
                                  alt="iconssolidic_Two"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="absolute flex flex-col h-full inset-[0] items-end justify-center m-auto md:pl-10 sm:pl-5 pl-[307px] w-full">
                          <div className="h-[1024px] md:h-[181px] relative rounded-[16px] shadow-bs1 w-full">
                            <div className="absolute h-[1024px] md:h-[181px] inset-y-[0] my-auto right-[0] w-4/5">
                              <div className="absolute md:h-[181px] h-[773px] right-[0] top-[0] w-3/4">
                                <div className="absolute md:h-[117px] h-[597px] right-[0] top-[0] w-[79%]">
                                  <div className="absolute bg-white-A700 md:h-[117px] h-[343px] right-[0] rounded-[16px] shadow-bs2 top-[0] w-[118px]">
                                    <div className="absolute h-[282px] md:h-[90px] right-[0] top-[0] w-[85%]">
                                      <div className="absolute md:h-20 h-[117px] right-[0] top-[0] w-[51%]">
                                        <div className="absolute flex flex-col items-end justify-start p-2 right-[0] top-[0] w-7">
                                          <div className="bg-orange-50 flex flex-col items-start justify-start rounded-[9px] w-full">
                                            <Img
                                              className="h-8 md:h-auto object-cover rounded-[9px] w-[18px] sm:w-full"
                                              src="images/img_imgtravelm2.png"
                                              alt="imgtravelmTwo"
                                            />
                                          </div>
                                        </div>
                                        <div className="absolute flex flex-col h-full inset-[0] items-center justify-between m-auto pb-6 pt-4 sm:px-5 px-6 w-[51px]">
                                          <div className="flex flex-col items-center justify-start w-auto">
                                            <div className="flex flex-col items-center justify-start w-auto">
                                              <div className="flex flex-col items-center justify-center p-2 w-auto">
                                                <Img
                                                  className="h-6 md:h-auto object-cover w-2.5"
                                                  src="images/img_favorite_deep_orange_500_24x10.png"
                                                  alt="favorite"
                                                />
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="absolute bottom-[0] h-[220px] md:h-[90px] inset-x-[0] mx-auto pb-4 sm:px-5 px-6 w-[100px]">
                                        <div className="absolute flex flex-1 flex-col items-end justify-start right-[1%] top-[1%] w-full">
                                          <div className="flex flex-col items-center justify-center rounded-[19px] w-auto">
                                            <div className="flex flex-col h-[41px] md:h-auto items-center justify-center rounded-[19px] w-[38px]">
                                              <Img
                                                className="md:h-auto h-full object-cover rounded-[19px] w-full"
                                                src="images/img_imgavatar5.png"
                                                alt="imgavatarFive"
                                              />
                                            </div>
                                          </div>
                                        </div>
                                        <div className="absolute bottom-[8%] h-[121px] md:h-[90px] right-[1%] w-full">
                                          <div className="absolute flex flex-col inset-x-[0] items-center justify-center mx-auto rounded-[20px] top-[0] w-auto">
                                            <div className="flex flex-col h-[41px] md:h-auto items-center justify-center rounded-[20px] w-[51px]">
                                              <Img
                                                className="h-[41px] md:h-auto rounded-[50%] w-full"
                                                src="images/img_imgavatar6.png"
                                                alt="imgavatarSix"
                                              />
                                            </div>
                                          </div>
                                          <div className="absolute bg-gray-100 flex flex-1 flex-col h-max inset-y-[0] items-end justify-end my-auto p-3 right-[0] rounded-[7px] w-full">
                                            <Text
                                              className="leading-[22.00px] max-w-[1px] md:max-w-full text-blue_gray-500 text-sm"
                                              size="txtPublicSansRegular14Bluegray500"
                                            >
                                              {props?.language}
                                            </Text>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="absolute bottom-[0] flex flex-row gap-4 inset-x-[0] items-center justify-end mx-auto pb-6 sm:px-5 px-6 w-[118px] md:w-full">
                                      <div className="flex flex-col items-center justify-center rounded-[20px] w-auto">
                                        <div className="flex flex-col h-[41px] md:h-auto items-center justify-center rounded-[20px] w-[51px]">
                                          <Img
                                            className="h-[41px] md:h-auto rounded-[50%] w-full"
                                            src="images/img_imgavatar25.png"
                                            alt="imgavatarTwentyFive"
                                          />
                                        </div>
                                      </div>
                                      <div className="flex flex-1 flex-col items-start justify-start w-full">
                                        <div className="border border-blue_gray-300_33 border-solid flex flex-col h-[86px] md:h-auto items-center justify-start px-3.5 rounded-lg w-full">
                                          <Text
                                            className="leading-[22.00px] max-w-[15px] md:max-w-full text-blue_gray-300 text-sm"
                                            size="txtPublicSansRegular14Bluegray300"
                                          >
                                            {props?.value}
                                          </Text>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="absolute bg-white-A700 bottom-[0] flex flex-col inset-x-[0] items-center justify-center mx-auto rounded-[16px] shadow-bs2 w-[193px]">
                                    <div className="md:h-20 h-full pb-4 pt-6 sm:px-5 px-6 relative w-full">
                                      <div className="absolute md:h-20 h-full right-[0] top-[9%] w-full">
                                        <div className="absolute md:h-[49px] h-[60px] right-[0] top-[0] w-full">
                                          <div className="absolute bg-cyan-A700_28 flex flex-col h-7 md:h-auto items-center justify-start left-[0] px-1.5 rounded-md top-[0] w-auto">
                                            <Text
                                              className="text-center text-light_blue-900 text-xs w-auto"
                                              size="txtPublicSansBold12Lightblue900"
                                            >
                                              {props?.label}
                                            </Text>
                                          </div>
                                          <Text
                                            className="absolute bottom-[0] leading-[18.00px] max-w-[45px] md:max-w-full right-[0] text-blue_gray-300 text-right text-xs"
                                            size="txtPublicSansRegular12Bluegray300"
                                          >
                                            {props?.timeOne}
                                          </Text>
                                        </div>
                                        <div className="absolute md:h-20 h-[108px] inset-y-[0] my-auto right-[0] w-full">
                                          <Text
                                            className="absolute leading-[22.00px] max-w-[126px] md:max-w-full right-[0] text-blue_gray-900 text-sm top-[0]"
                                            size="txtPublicSansSemiBold14"
                                          >
                                            {props?.timeTwo}
                                          </Text>
                                          <Text
                                            className="absolute bottom-[0] inset-x-[0] leading-[22.00px] max-w-[140px] md:max-w-full mx-auto text-blue_gray-500 text-sm"
                                            size="txtPublicSansRegular14Bluegray500"
                                          >
                                            {props?.textTwo}
                                          </Text>
                                        </div>
                                      </div>
                                      <div className="absolute bottom-[6%] flex flex-1 flex-col items-center justify-end right-[0] w-full">
                                        <div className="flex flex-col items-center justify-start w-full">
                                          <div className="flex flex-col h-[37px] md:h-auto items-center justify-center rounded-[18px] w-[46px]">
                                            <Img
                                              className="h-5 w-[25px]"
                                              src="images/img_iconssolidic_blue_gray_500_20x25.svg"
                                              alt="iconssolidic_Three"
                                            />
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="absolute bg-white-A700 bottom-[0] flex flex-col inset-x-[0] items-center justify-start mx-auto rounded-[16px] shadow-bs2 w-[246px]">
                                  <div className="border-blue_gray-300_33 border-dashed border-r flex flex-row gap-10 items-center justify-center p-10 sm:px-5 w-full">
                                    <div className="md:h-[78px] h-[82px] p-0.5 relative w-[62%]">
                                      <div className="absolute h-[78px] inset-[0] justify-center m-auto outline outline-[4px] outline-blue_gray-300_28 rounded-[48px] w-[96%]"></div>
                                      <div
                                        className="absolute bg-cover bg-no-repeat flex flex-col h-max inset-[0] items-center justify-center m-auto p-[25px] sm:px-5"
                                        style={{
                                          backgroundImage:
                                            "url('images/img_group101.png')",
                                        }}
                                      >
                                        <Text
                                          className="my-[5px] text-blue_gray-900 text-center text-sm"
                                          size="txtPublicSansSemiBold14"
                                        >
                                          {props?.numberpercent}
                                        </Text>
                                      </div>
                                    </div>
                                    <div className="flex flex-col gap-1 items-start justify-start w-auto">
                                      <Text
                                        className="text-2xl md:text-[22px] text-blue_gray-900 text-center sm:text-xl w-auto"
                                        size="txtPublicSansBold24"
                                      >
                                        {props?.numberlongone}
                                      </Text>
                                      <Text
                                        className="text-blue_gray-500 text-center text-sm w-auto"
                                        size="txtPublicSansRegular14Bluegray500"
                                      >
                                        {props?.sold}
                                      </Text>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="absolute bg-white-A700 bottom-[0] md:h-[127px] h-[283px] inset-x-[0] mx-auto rounded-[16px] shadow-bs2 w-[329px]">
                                <div className="absolute flex flex-col items-end justify-end sm:pl-5 pl-6 pr-4 py-6 right-[0] top-[0] w-full">
                                  <div className="flex flex-col items-center justify-start w-full">
                                    <div className="flex flex-col items-start justify-start w-full">
                                      <Text
                                        className="leading-[28.00px] max-w-[244px] md:max-w-full text-blue_gray-900 text-lg"
                                        size="txtPublicSansBold18Bluegray900"
                                      >
                                        {props?.titleFive}
                                      </Text>
                                    </div>
                                  </div>
                                </div>
                                <div className="absolute bottom-[0] h-[210px] md:h-[55px] inset-x-[0] mx-auto pb-6 sm:px-5 px-6 w-full">
                                  <div className="absolute h-[147px] md:h-[55px] right-[11%] top-[0] w-[85%]">
                                    <div className="absolute md:h-[55px] h-[84px] right-[0] top-[0] w-[260px]">
                                      <div className="absolute flex flex-1 flex-col inset-x-[0] items-start justify-between mx-auto top-[0] w-full">
                                        <Text
                                          className="text-blue_gray-900 text-sm w-full"
                                          size="txtPublicSansSemiBold14"
                                        >
                                          {props?.totalprofit}
                                        </Text>
                                      </div>
                                      <Img
                                        className="absolute bottom-[0] h-[55px] inset-x-[0] mx-auto object-cover w-full"
                                        src="images/img_linearprogress.png"
                                        alt="linearprogress"
                                      />
                                    </div>
                                    <div className="absolute bottom-[0] md:h-[55px] h-[84px] inset-x-[0] mx-auto w-[279px]">
                                      <div className="absolute flex flex-1 flex-col inset-x-[0] items-start justify-between mx-auto top-[0] w-full">
                                        <Text
                                          className="text-blue_gray-900 text-sm w-full"
                                          size="txtPublicSansSemiBold14"
                                        >
                                          {props?.totalincome}
                                        </Text>
                                      </div>
                                      <Img
                                        className="absolute bottom-[0] h-[55px] inset-x-[0] mx-auto object-cover w-full"
                                        src="images/img_linearprogress_cyan_a700.png"
                                        alt="linearprogress_One"
                                      />
                                    </div>
                                  </div>
                                  <div className="absolute bottom-[0] flex flex-1 flex-col items-center justify-end right-[0] w-full">
                                    <Img
                                      className="h-[53px] md:h-auto object-cover w-full"
                                      src="images/img_linearprogress_amber_a700.png"
                                      alt="linearprogress_Two"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <Line className="absolute bg-white-A700 bottom-[0] h-[5px] inset-x-[0] mx-auto rounded-sm shadow-bs2 w-full" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Img
                className="absolute bottom-[0] h-20 inset-x-[0] mx-auto w-[1440px]"
                src="images/img_polygon.svg"
                alt="polygon"
              />
              <header className="absolute flex flex-row h-20 md:h-auto inset-x-[0] items-center justify-center mx-auto md:px-10 px-36 sm:px-5 top-[0] w-full">
                <Img
                  className="h-10 md:h-auto object-cover w-10"
                  src="images/img_logo.png"
                  alt="logo"
                />
                <ul className="flex flex-1 flex-row gap-10 md:hidden items-center justify-end w-full common-row-list">
                  <li>
                    <Text
                      className="text-blue_gray-900 text-sm hover:text-teal-500"
                      size="txtPublicSansSemiBold14"
                    >
                      {props?.home}
                    </Text>
                  </li>
                  <li>
                    <Text
                      className="text-blue_gray-900 text-sm hover:text-teal-500"
                      size="txtPublicSansSemiBold14"
                    >
                      {props?.components}
                    </Text>
                  </li>
                  <li>
                    <div className="flex flex-row gap-1 items-center justify-start">
                      <div className="bg-teal-500_85 h-1.5 rounded-[50%] w-1.5"></div>
                      <Text
                        className="text-sm text-teal-500 w-auto"
                        size="txtPublicSansSemiBold14Teal500"
                      >
                        {props?.dashboard}
                      </Text>
                      <Img
                        className="h-4 w-4"
                        src="images/img_arrowdown_teal_500_16x16.svg"
                        alt="arrowdown_Four"
                      />
                    </div>
                  </li>
                  <li>
                    <Text
                      className="text-blue_gray-900 text-sm hover:text-teal-500"
                      size="txtPublicSansSemiBold14"
                    >
                      {props?.documentation}
                    </Text>
                  </li>
                </ul>
                <div className="flex flex-col items-center justify-center px-5 w-auto">
                  <Button
                    className="flex h-9 items-center justify-center w-9"
                    shape="circle"
                    size="md"
                  >
                    <Img
                      className="h-5"
                      src="images/img_iconsduotoneicsettings.svg"
                      alt="iconsduotoneics"
                    />
                  </Button>
                </div>
                <div className="flex flex-row gap-2 items-center justify-center w-auto">
                  <Button
                    className="cursor-pointer font-bold font-publicsans h-9 min-w-[64px] text-center text-sm"
                    shape="round"
                    color="blue_gray_300_51"
                    size="md"
                    variant="outline"
                  >
                    {props?.login}
                  </Button>
                  <Button
                    className="cursor-pointer font-bold font-publicsans h-9 min-w-[119px] text-center text-sm"
                    shape="round"
                    color="blue_gray_900"
                    size="md"
                    variant="fill"
                  >
                    {props?.purchaseNow}
                  </Button>
                </div>
              </header>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

HomeHomehero.defaultProps = {
  startanewprojecOne: (
    <>
      Start a <br />
      New Project with
    </>
  ),
  startanewprojecTwo: "Minimal",
  thestartingpoinOne: (
    <>
      The starting point for your next project is based on MUI.
      <br />
      Easy customization Helps you build apps faster and better.
    </>
  ),
  thestartingpoinTwo: "4.95/5",
  thestartingpoinThree: "(99+ reviews)",
  livePreview: "Live Preview",
  thestartingpoinFour: "Get Free Version",
  designPreview: "Design Preview",
  thestartingpoinFive: "Available For",
  producttitletwo: "Foundations Matte Flip Flop",
  price: "$75.78",
  producttitleone: "Nike Air Force 1 NDESTRUKT",
  priceOne: "$72.80",
  title: "Order Timeline",
  priceTwo: "1983, orders, $4220",
  duration: "2 hours ago",
  titleOne: "12 Invoices have been paid",
  durationOne: "2 hours ago",
  titleTwo: "Order #37745 from September",
  date: "25 Jul 2020",
  titleThree: "New order placed #XF-2356",
  dateOne: "22 Nov 2020",
  titleFour: "New order placed #XF-2356",
  dateTwo: "24 Sep 2020",
  p35fiftyfour: "$35.54",
  numberratingran: "2",
  text: "Posted date:",
  time: "11 Aug 2022 9:00 PM",
  durationTwo: "Italian Delights - 12 Days",
  countrynamerand: "Comoros",
  textOne: "21 Feb - 27 Feb",
  bookedcounter: "223 Booked",
  language: "I love cupcake danish jujubes sweet.",
  value: "Write a comment…",
  label: "Published",
  timeOne: "12 Aug 2022 10:00 PM",
  timeTwo: "Apply These 7 Secret Techniques To Improve Event",
  textTwo: "Best 30 Tips For Event",
  numberpercent: "73.9%",
  numberlongone: "9,990",
  sold: "Sold",
  titleFive: "Sales Overview",
  totalprofit: "Total Profit",
  totalincome: "Total Income",
  home: "Home",
  components: "Components",
  dashboard: "Pages",
  documentation: "Docs",
  login: "Login",
  purchaseNow: "Purchase Now",
};

export default HomeHomehero;
