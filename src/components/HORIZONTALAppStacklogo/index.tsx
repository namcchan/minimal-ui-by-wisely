import React from "react";

import { Button, Img, List, RatingBar, SelectBox, Text } from "components";

type HORIZONTALAppStacklogoProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  | "badge"
  | "dashboard"
  | "title"
  | "cart"
  | "title1"
  | "icon"
  | "title2"
  | "icon1"
  | "title3"
  | "booking"
  | "icon2"
  | "title4"
  | "title5"
  | "title6"
  | "title7"
  | "title8"
  | "title9"
  | "title10"
  | "title11"
  | "titleOne"
  | "title12"
  | "title13"
  | "title14"
  | "numbershortone"
  | "label"
  | "iconsbookingict"
  | "numbershortone1"
  | "label1"
  | "iconsbookingics"
  | "numbershortone2"
  | "label2"
  | "notification"
  | "vector"
  | "checkmark"
  | "trash"
  | "question"
  | "send"
  | "vectorOne"
  | "bg"
  | "text"
  | "price"
  | "cursor"
  | "numberpercentone"
  | "language"
  | "chartline"
  | "titleTwo"
  | "text1"
  | "numbershorttwo"
  | "progress"
  | "text2"
  | "numbershortone3"
  | "progress1"
  | "text3"
  | "numbershortfour"
  | "progress2"
  | "stroke"
  | "numberpercent"
  | "numberlongone"
  | "sold"
  | "layer"
  | "numberpercentnine"
  | "numberlongtwo"
  | "pendingforpaymeOne"
  | "titleThree"
  | "subtitle"
  | "action"
  | "color"
  | "legend"
  | "colorOne"
  | "legendOne"
  | "labelOne"
  | "labelTwo"
  | "labelThree"
  | "labelFour"
  | "labelFive"
  | "dividerOne"
  | "dividerTwo"
  | "dividerThree"
  | "dividerFour"
  | "dividerFive"
  | "chartcolumn"
  | "zipcode"
  | "zipcodeOne"
  | "zipcodeTwo"
  | "zipcodeThree"
  | "zipcodeFour"
  | "zipcodeFive"
  | "zipcodeSix"
  | "titleFour"
  | "stroke1"
  | "textOne"
  | "numberlong"
  | "layer1"
  | "text4"
  | "tourscounter"
  | "companynameeleven"
  | "text5"
  | "tourscounter1"
  | "titleFive"
  | "reviewscounter"
  | "arrowleft"
  | "arrowright"
  | "avatartwo"
  | "name"
  | "time"
  | "stack"
  | "sentenceone"
  | "greatSevice"
  | "recommended"
  | "bestPrice"
  | "reject"
  | "accept"
  | "textTwo"
  | "bookingscounter"
  | "arrowleftOne"
  | "arrowrightOne"
  | "imgavatarone"
  | "nameone"
  | "time1"
  | "iconssolidic"
  | "iconssolidicOne"
  | "duration"
  | "iconssolidicTwo"
  | "guestscounter"
  | "imgtravelmtwo"
  | "p72"
  | "imgavatartwo"
  | "nametwo"
  | "time2"
  | "iconssolidic1"
  | "iconssolidicone1"
  | "duration1"
  | "iconssolidictwo1"
  | "personcounter"
  | "imgtravelmthree"
  | "p721"
  | "imgavatarthree"
  | "namethree"
  | "time3"
  | "iconssolidic2"
  | "iconssolidicone2"
  | "duration2"
  | "iconssolidictwo2"
  | "personcounter1"
  | "imgtravelmfour"
  | "p722"
  | "imgavatarfour"
  | "namefour"
  | "time4"
  | "iconssolidic3"
  | "iconssolidicone3"
  | "duration3"
  | "iconssolidictwo3"
  | "guestscounter1"
  | "imgtravelmfive"
  | "seventytwo"
  | "titleSix"
  | "thtext"
  | "thtextOne"
  | "thtextTwo"
  | "thtextThree"
  | "thtextFour"
  | "tablecell"
  | "createfromframe"
  | "imgtravelstwo"
  | "duration4"
  | "namerand"
  | "phonenumberone"
  | "date"
  | "time5"
  | "dateOne"
  | "timeOne"
  | "paid"
  | "iconssolidic4"
  | "createfromframe1"
  | "imgtravelsthree"
  | "duration5"
  | "namerand1"
  | "phonenumberone1"
  | "date1"
  | "time6"
  | "dateone1"
  | "timeone1"
  | "pending"
  | "iconssolidic5"
  | "createfromframe2"
  | "imgtravelsfour"
  | "duration6"
  | "namerand2"
  | "phonenumberone2"
  | "date2"
  | "time7"
  | "dateone2"
  | "timeone2"
  | "cancelled"
  | "iconssolidic6"
  | "createfromframe3"
  | "imgtravelsfive"
  | "country"
  | "namerand3"
  | "phonenumberone3"
  | "date3"
  | "time8"
  | "dateone3"
  | "timeone3"
  | "paid1"
  | "iconssolidic7"
  | "createfromframe4"
  | "imgtravelssix"
  | "duration7"
  | "namerand4"
  | "phonenumberone4"
  | "date4"
  | "time9"
  | "dateone4"
  | "timeone4"
  | "paid2"
  | "iconssolidic8"
  | "labelSix"
  | "arrowrightTwo"
> &
  Partial<{
    badge: string;
    dashboard: string;
    title: string;
    cart: string;
    title1: string;
    icon: string;
    title2: string;
    icon1: string;
    title3: string;
    booking: string;
    icon2: string;
    title4: string;
    title5: string;
    title6: string;
    title7: string;
    title8: string;
    title9: string;
    title10: string;
    title11: string;
    titleOne: string;
    title12: string;
    title13: string;
    title14: string;
    numbershortone: string;
    label: string;
    iconsbookingict: string;
    numbershortone1: string;
    label1: string;
    iconsbookingics: string;
    numbershortone2: string;
    label2: string;
    notification: string;
    vector: string;
    checkmark: string;
    trash: string;
    question: string;
    send: string;
    vectorOne: string;
    bg: string;
    text: string;
    price: JSX.Element | string;
    cursor: string;
    numberpercentone: string;
    language: string;
    chartline: string;
    titleTwo: string;
    text1: string;
    numbershorttwo: string;
    progress: string;
    text2: string;
    numbershortone3: string;
    progress1: string;
    text3: string;
    numbershortfour: string;
    progress2: string;
    stroke: string;
    numberpercent: string;
    numberlongone: string;
    sold: string;
    layer: string;
    numberpercentnine: string;
    numberlongtwo: string;
    pendingforpaymeOne: string;
    titleThree: string;
    subtitle: string;
    action: string;
    color: string;
    legend: string;
    colorOne: string;
    legendOne: string;
    labelOne: string;
    labelTwo: string;
    labelThree: string;
    labelFour: string;
    labelFive: string;
    dividerOne: string;
    dividerTwo: string;
    dividerThree: string;
    dividerFour: string;
    dividerFive: string;
    chartcolumn: string;
    zipcode: string;
    zipcodeOne: string;
    zipcodeTwo: string;
    zipcodeThree: string;
    zipcodeFour: string;
    zipcodeFive: string;
    zipcodeSix: string;
    titleFour: string;
    stroke1: string;
    textOne: string;
    numberlong: string;
    layer1: string;
    text4: string;
    tourscounter: string;
    companynameeleven: string;
    text5: string;
    tourscounter1: string;
    titleFive: string;
    reviewscounter: string;
    arrowleft: string;
    arrowright: string;
    avatartwo: string;
    name: string;
    time: string;
    stack: number;
    sentenceone: string;
    greatSevice: string;
    recommended: string;
    bestPrice: string;
    reject: string;
    accept: string;
    textTwo: string;
    bookingscounter: string;
    arrowleftOne: string;
    arrowrightOne: string;
    imgavatarone: string;
    nameone: string;
    time1: string;
    iconssolidic: string;
    iconssolidicOne: string;
    duration: string;
    iconssolidicTwo: string;
    guestscounter: string;
    imgtravelmtwo: string;
    p72: string;
    imgavatartwo: string;
    nametwo: string;
    time2: string;
    iconssolidic1: string;
    iconssolidicone1: string;
    duration1: string;
    iconssolidictwo1: string;
    personcounter: string;
    imgtravelmthree: string;
    p721: string;
    imgavatarthree: string;
    namethree: string;
    time3: string;
    iconssolidic2: string;
    iconssolidicone2: string;
    duration2: string;
    iconssolidictwo2: string;
    personcounter1: string;
    imgtravelmfour: string;
    p722: string;
    imgavatarfour: string;
    namefour: string;
    time4: string;
    iconssolidic3: string;
    iconssolidicone3: string;
    duration3: string;
    iconssolidictwo3: string;
    guestscounter1: string;
    imgtravelmfive: string;
    seventytwo: string;
    titleSix: string;
    thtext: string;
    thtextOne: string;
    thtextTwo: string;
    thtextThree: string;
    thtextFour: string;
    tablecell: string;
    createfromframe: string;
    imgtravelstwo: string;
    duration4: string;
    namerand: string;
    phonenumberone: string;
    date: string;
    time5: string;
    dateOne: string;
    timeOne: string;
    paid: string;
    iconssolidic4: string;
    createfromframe1: string;
    imgtravelsthree: string;
    duration5: string;
    namerand1: string;
    phonenumberone1: string;
    date1: string;
    time6: string;
    dateone1: string;
    timeone1: string;
    pending: string;
    iconssolidic5: string;
    createfromframe2: string;
    imgtravelsfour: string;
    duration6: string;
    namerand2: string;
    phonenumberone2: string;
    date2: string;
    time7: string;
    dateone2: string;
    timeone2: string;
    cancelled: string;
    iconssolidic6: string;
    createfromframe3: string;
    imgtravelsfive: string;
    country: string;
    namerand3: string;
    phonenumberone3: string;
    date3: string;
    time8: string;
    dateone3: string;
    timeone3: string;
    paid1: string;
    iconssolidic7: string;
    createfromframe4: string;
    imgtravelssix: string;
    duration7: string;
    namerand4: string;
    phonenumberone4: string;
    date4: string;
    time9: string;
    dateone4: string;
    timeone4: string;
    paid2: string;
    iconssolidic8: string;
    labelSix: string;
    arrowrightTwo: string;
  }>;

const actionOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const HORIZONTALAppStacklogo: React.FC<HORIZONTALAppStacklogoProps> = (
  props,
) => {
  return (
    <>
      <div className={props.className}>
        <header className="absolute flex flex-col inset-x-[0] items-center justify-center mx-auto top-[0] w-full">
          <div
            className="bg-cover bg-no-repeat bg-white-A700 flex flex-1 flex-col h-16 md:h-auto items-center justify-between max-w-[1440px] px-10 sm:px-5 w-full"
            style={{ backgroundImage: "url('images/img_mainheader.svg')" }}
          >
            <div className="flex flex-row md:gap-10 items-start justify-between w-full">
              <div className="flex flex-row gap-4 items-center justify-start mt-0.5 w-auto">
                <Img
                  className="h-10 md:h-auto object-cover w-10"
                  src="images/img_logo.png"
                  alt="logo"
                />
                <Button
                  className="flex h-9 items-center justify-center w-9"
                  shape="circle"
                  size="md"
                >
                  <Img
                    className="h-5"
                    src="images/img_search.svg"
                    alt="search"
                  />
                </Button>
              </div>
              <div className="flex flex-row gap-2 items-center justify-center w-auto">
                <div className="flex flex-col h-10 md:h-auto items-center justify-center rounded-[50%] w-10">
                  <div className="flex flex-col items-start justify-start rounded-[5px] w-auto">
                    <Img
                      className="h-5 md:h-auto object-cover rounded-[5px] w-[27px] sm:w-full"
                      src="images/img_img_20x27.png"
                      alt="img"
                    />
                  </div>
                </div>
                <div className="relative w-[42px]">
                  <Button
                    className="flex h-10 items-center justify-center mt-auto rounded-[50%] w-10"
                    shape="circle"
                    size="md"
                  >
                    <Img
                      className="h-6"
                      src="images/img_lightbulb.svg"
                      alt="lightbulb"
                    />
                  </Button>
                  <Text
                    className="absolute bg-deep_orange-500 flex h-5 items-center justify-center right-[0] rounded-[50%] text-center text-white-A700 text-xs top-[0] w-5"
                    size="txtPublicSansBold12WhiteA700"
                  >
                    {props?.badge}
                  </Text>
                </div>
                <Button
                  className="flex h-10 items-center justify-center rounded-[50%] w-10"
                  shape="circle"
                  size="md"
                >
                  <Img
                    className="h-6"
                    src="images/img_user_blue_gray_500_40x40.svg"
                    alt="user"
                  />
                </Button>
                <Button
                  className="flex h-10 items-center justify-center rounded-[50%] w-10"
                  shape="circle"
                  size="md"
                >
                  <Img
                    className="h-6"
                    src="images/img_iconsduotoneicsettings.svg"
                    alt="iconsduotoneics"
                  />
                </Button>
                <div className="flex flex-col h-10 md:h-auto items-start justify-start outline outline-[2px] outline-blue_gray-300_14 p-0.5 rounded-[50%] w-10">
                  <div className="flex flex-col h-full items-center justify-center rounded-[50%] w-9">
                    <div className="flex flex-col h-9 md:h-auto items-center justify-center rounded-[50%] w-9">
                      <Img
                        className="h-9 md:h-auto rounded-[50%] w-9"
                        src="images/img_imgavatar25_36x36.png"
                        alt="imgavatarTwentyFive"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Img
            className="flex-1 sm:h-auto h-px object-cover w-full"
            src="images/img_divider_blue_gray_300_1x1440.png"
            alt="divider"
          />
          <div
            className="bg-cover bg-no-repeat flex md:flex-1 flex-col h-16 md:h-auto items-center justify-start overflow-auto sm:px-5 px-6 w-auto md:w-full"
            style={{
              backgroundImage: "url('images/img_dashboardnavhorizontal.png')",
            }}
          >
            <div className="flex md:flex-col flex-row gap-1.5 items-center justify-start w-auto">
              <List
                className="sm:flex-col flex-row gap-1.5 grid sm:grid-cols-1 grid-cols-4 w-[23%] md:w-full"
                orientation="horizontal"
              >
                <div className="flex flex-row h-8 md:h-auto items-center justify-start px-1.5 rounded-md w-auto">
                  <div className="flex flex-col items-center justify-center pr-2 w-auto">
                    {!!props?.dashboard ? (
                      <Img
                        className="h-[22px] w-[22px]"
                        alt="dashboard"
                        src={props?.dashboard}
                      />
                    ) : null}
                  </div>
                  {!!props?.title ? (
                    <Text
                      className="text-blue_gray-500 text-sm w-auto"
                      size="txtPublicSansMedium14"
                    >
                      {props?.title}
                    </Text>
                  ) : null}
                </div>
                <div className="flex flex-row h-8 md:h-auto items-center justify-start px-1.5 rounded-md w-auto">
                  <div className="flex flex-col items-center justify-center pr-2 w-auto">
                    {!!props?.cart ? (
                      <Img
                        className="h-[22px] w-[22px]"
                        alt="cart"
                        src={props?.cart}
                      />
                    ) : null}
                  </div>
                  {!!props?.title1 ? (
                    <Text
                      className="text-blue_gray-500 text-sm w-auto"
                      size="txtPublicSansMedium14"
                    >
                      {props?.title1}
                    </Text>
                  ) : null}
                </div>
                <div className="flex flex-row h-8 md:h-auto items-center justify-start px-1.5 rounded-md w-auto">
                  <div className="flex flex-col items-center justify-center pr-2 w-auto">
                    {!!props?.icon ? (
                      <Img
                        className="h-[22px] w-[22px]"
                        alt="icon"
                        src={props?.icon}
                      />
                    ) : null}
                  </div>
                  {!!props?.title2 ? (
                    <Text
                      className="text-blue_gray-500 text-sm w-auto"
                      size="txtPublicSansMedium14"
                    >
                      {props?.title2}
                    </Text>
                  ) : null}
                </div>
                <div className="flex flex-row h-8 md:h-auto items-center justify-start px-1.5 rounded-md w-auto">
                  <div className="flex flex-col items-center justify-center pr-2 w-auto">
                    {!!props?.icon1 ? (
                      <Img
                        className="h-[22px] w-[22px]"
                        alt="icon"
                        src={props?.icon1}
                      />
                    ) : null}
                  </div>
                  {!!props?.title3 ? (
                    <Text
                      className="text-blue_gray-500 text-sm w-auto"
                      size="txtPublicSansMedium14"
                    >
                      {props?.title3}
                    </Text>
                  ) : null}
                </div>
              </List>
              {!!props?.booking ? (
                <Button
                  className="cursor-pointer flex items-center justify-center min-w-[97px] rounded-md"
                  leftIcon={
                    <Img
                      className="h-[22px] mr-2"
                      src="images/img_icon_22x22.svg"
                      alt="icon"
                    />
                  }
                  shape="round"
                  color="blue_gray_300_28"
                  size="sm"
                  variant="fill"
                >
                  <div className="!text-blue_gray-900 font-publicsans font-semibold text-left text-sm">
                    {props?.booking}
                  </div>
                </Button>
              ) : null}
              <div className="flex flex-row h-8 md:h-auto items-center justify-start px-1.5 rounded-md w-auto">
                <div className="flex flex-col items-center justify-center pr-2 w-auto">
                  {!!props?.icon2 ? (
                    <Img
                      className="h-[22px] w-[22px]"
                      alt="icon"
                      src={props?.icon2}
                    />
                  ) : null}
                </div>
                {!!props?.title4 ? (
                  <Text
                    className="text-blue_gray-500 text-sm w-auto"
                    size="txtPublicSansMedium14"
                  >
                    {props?.title4}
                  </Text>
                ) : null}
              </div>
              <List
                className="sm:flex-col flex-row gap-1.5 grid sm:grid-cols-1 md:grid-cols-4 grid-cols-7 w-[39%] md:w-full"
                orientation="horizontal"
              >
                <div className="flex flex-col items-start justify-start w-auto">
                  <div className="flex flex-row h-8 md:h-auto items-center justify-start px-1.5 rounded-md w-auto">
                    <div className="flex flex-col items-center justify-center pr-2 w-auto">
                      <Img
                        className="h-[22px] w-[22px]"
                        src="images/img_user_blue_gray_500.svg"
                        alt="user"
                      />
                    </div>
                    <Text
                      className="text-blue_gray-500 text-sm w-auto"
                      size="txtPublicSansMedium14"
                    >
                      {props?.title5}
                    </Text>
                    <div className="flex flex-col items-center justify-center pl-1 w-auto">
                      <Img
                        className="h-4 w-4"
                        src="images/img_arrowdown_blue_gray_500_16x16.svg"
                        alt="arrowdown"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start w-auto">
                  <div className="flex flex-row h-8 md:h-auto items-center justify-start px-1.5 rounded-md w-auto">
                    <div className="flex flex-col items-center justify-center pr-2 w-auto">
                      <Img
                        className="h-[22px] w-[22px]"
                        src="images/img_icon_2.svg"
                        alt="icon"
                      />
                    </div>
                    <Text
                      className="text-blue_gray-500 text-sm w-auto"
                      size="txtPublicSansMedium14"
                    >
                      {props?.title6}
                    </Text>
                    <div className="flex flex-col items-center justify-center pl-1 w-auto">
                      <Img
                        className="h-4 w-4"
                        src="images/img_arrowdown_blue_gray_500_16x16.svg"
                        alt="arrowdown"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start w-auto">
                  <div className="flex flex-row h-8 md:h-auto items-center justify-start px-1.5 rounded-md w-auto">
                    <div className="flex flex-col items-center justify-center pr-2 w-auto">
                      <Img
                        className="h-[22px] w-[22px]"
                        src="images/img_cart_blue_gray_500.svg"
                        alt="cart"
                      />
                    </div>
                    <Text
                      className="text-blue_gray-500 text-sm w-auto"
                      size="txtPublicSansMedium14"
                    >
                      {props?.title7}
                    </Text>
                    <div className="flex flex-col items-center justify-center pl-1 w-auto">
                      <Img
                        className="h-4 w-4"
                        src="images/img_arrowdown_blue_gray_500_16x16.svg"
                        alt="arrowdown"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start w-auto">
                  <div className="flex flex-row h-8 md:h-auto items-center justify-start px-1.5 rounded-md w-auto">
                    <div className="flex flex-col items-center justify-center pr-2 w-auto">
                      <Img
                        className="h-[22px] w-[22px]"
                        src="images/img_call.svg"
                        alt="call"
                      />
                    </div>
                    <Text
                      className="text-blue_gray-500 text-sm w-auto"
                      size="txtPublicSansMedium14"
                    >
                      {props?.title8}
                    </Text>
                    <div className="flex flex-col items-center justify-center pl-1 w-auto">
                      <Img
                        className="h-4 w-4"
                        src="images/img_arrowdown_blue_gray_500_16x16.svg"
                        alt="arrowdown"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start w-auto">
                  <div className="flex flex-row h-8 md:h-auto items-center justify-start px-1.5 rounded-md w-auto">
                    <div className="flex flex-col items-center justify-center pr-2 w-auto">
                      <Img
                        className="h-[22px] w-[22px]"
                        src="images/img_sort_blue_gray_500.svg"
                        alt="sort"
                      />
                    </div>
                    <Text
                      className="text-blue_gray-500 text-sm w-auto"
                      size="txtPublicSansMedium14"
                    >
                      {props?.title9}
                    </Text>
                    <div className="flex flex-col items-center justify-center pl-1 w-auto">
                      <Img
                        className="h-4 w-4"
                        src="images/img_arrowdown_blue_gray_500_16x16.svg"
                        alt="arrowdown"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start w-auto">
                  <div className="flex flex-row h-8 md:h-auto items-center justify-start px-1.5 rounded-md w-auto">
                    <div className="flex flex-col items-center justify-center pr-2 w-auto">
                      <Img
                        className="h-[22px] w-[22px]"
                        src="images/img_icon_3.svg"
                        alt="icon"
                      />
                    </div>
                    <Text
                      className="text-blue_gray-500 text-sm w-auto"
                      size="txtPublicSansMedium14"
                    >
                      {props?.title10}
                    </Text>
                    <div className="flex flex-col items-center justify-center pl-1 w-auto">
                      <Img
                        className="h-4 w-4"
                        src="images/img_arrowdown_blue_gray_500_16x16.svg"
                        alt="arrowdown"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start w-auto">
                  <div className="flex flex-row h-8 md:h-auto items-center justify-start px-1.5 rounded-md w-auto">
                    <div className="flex flex-col items-center justify-center pr-2 w-auto">
                      <Img
                        className="h-[22px] w-[22px]"
                        src="images/img_icon_4.svg"
                        alt="icon"
                      />
                    </div>
                    <Text
                      className="text-blue_gray-500 text-sm w-auto"
                      size="txtPublicSansMedium14"
                    >
                      {props?.title11}
                    </Text>
                    <div className="flex flex-col items-center justify-center pl-1 w-auto">
                      <Img
                        className="h-4 w-4"
                        src="images/img_arrowdown_blue_gray_500_16x16.svg"
                        alt="arrowdown"
                      />
                    </div>
                  </div>
                </div>
              </List>
              <div className="flex flex-row h-8 md:h-auto items-center justify-start px-1.5 rounded-md w-auto">
                <div className="flex flex-col items-center justify-center pr-2 w-auto">
                  <Img
                    className="h-[22px] w-[22px]"
                    src="images/img_map.svg"
                    alt="map"
                  />
                </div>
                <Text
                  className="text-blue_gray-500 text-sm w-auto"
                  size="txtPublicSansMedium14"
                >
                  {props?.titleOne}
                </Text>
              </div>
              <List
                className="sm:flex-col flex-row gap-1.5 grid grid-cols-3 w-[16%] md:w-full"
                orientation="horizontal"
              >
                <div className="flex flex-row h-8 md:h-auto items-center justify-start px-1.5 rounded-md w-auto">
                  <div className="flex flex-col items-center justify-center pr-2 w-auto">
                    <Img
                      className="h-[22px] w-[22px]"
                      src="images/img_call_blue_gray_500.svg"
                      alt="call"
                    />
                  </div>
                  <Text
                    className="text-blue_gray-500 text-sm w-auto"
                    size="txtPublicSansMedium14"
                  >
                    {props?.title12}
                  </Text>
                </div>
                <div className="flex flex-row h-8 md:h-auto items-center justify-start px-1.5 rounded-md w-auto">
                  <div className="flex flex-col items-center justify-center pr-2 w-auto">
                    <Img
                      className="h-[22px] w-[22px]"
                      src="images/img_calendar.svg"
                      alt="calendar"
                    />
                  </div>
                  <Text
                    className="text-blue_gray-500 text-sm w-auto"
                    size="txtPublicSansMedium14"
                  >
                    {props?.title13}
                  </Text>
                </div>
                <div className="flex flex-row h-8 md:h-auto items-center justify-start px-1.5 rounded-md w-auto">
                  <div className="flex flex-col items-center justify-center pr-2 w-auto">
                    <Img
                      className="h-[22px] w-[22px]"
                      src="images/img_icon_5.svg"
                      alt="icon"
                    />
                  </div>
                  <Text
                    className="text-blue_gray-500 text-sm w-auto"
                    size="txtPublicSansMedium14"
                  >
                    {props?.title14}
                  </Text>
                </div>
              </List>
            </div>
          </div>
        </header>
        <div className="absolute flex flex-col gap-6 h-max inset-[0] items-center justify-start m-auto max-w-6xl pb-20 pt-[168px] md:px-10 px-36 sm:px-5 w-full">
          <div className="flex md:flex-col flex-row gap-6 items-start justify-start w-full">
            <List
              className="md:flex-1 sm:flex-col flex-row gap-6 grid md:grid-cols-1 grid-cols-2 w-[66%] md:w-full"
              orientation="horizontal"
            >
              <div className="bg-white-A700 flex flex-row items-center justify-between sm:px-5 px-6 py-4 rounded-[16px] shadow-bs4 w-full">
                <div className="flex flex-col gap-2 items-start justify-start w-auto">
                  {!!props?.numbershortone2 ? (
                    <Text
                      className="md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-900 w-auto"
                      size="txtPublicSansBold32"
                    >
                      {props?.numbershortone2}
                    </Text>
                  ) : null}
                  {!!props?.label2 ? (
                    <Text
                      className="text-blue_gray-500 text-sm w-auto"
                      size="txtPublicSansSemiBold14Bluegray500"
                    >
                      {props?.label2}
                    </Text>
                  ) : null}
                </div>
                <div className="bg-gray-100 flex flex-col h-[120px] items-center justify-start rounded-[50%] w-[120px]">
                  {!!props?.iconsbookingics ? (
                    <div className="md:h-[101px] h-[120px] p-[3px] relative w-[120px]">
                      <div className="absolute flex flex-col h-max inset-[0] justify-center m-auto w-3/4">
                        {!!props?.notification ? (
                          <Img
                            className="h-[15px] md:ml-[0] ml-[50px]"
                            alt="notification"
                            src={props?.notification}
                          />
                        ) : null}
                        <div className="h-24 md:h-[75px] relative w-full">
                          <div className="h-24 m-auto w-full">
                            {!!props?.question ? (
                              <Img
                                className="h-[23px] mb-[-2.7px] ml-auto mr-[17px] z-[1]"
                                alt="question"
                                src={props?.question}
                              />
                            ) : null}
                            <div className="flex flex-row items-end justify-evenly mt-auto mx-auto w-full">
                              <div className="h-[55px] md:h-[74px] mt-[19px] relative w-[44%]">
                                {!!props?.vector ? (
                                  <Img
                                    className="absolute bottom-[0] h-[42px] inset-x-[0] mx-auto object-cover"
                                    alt="vector"
                                    src={props?.vector}
                                  />
                                ) : null}
                                {!!props?.checkmark ? (
                                  <Img
                                    className="absolute h-[55px] inset-[0] justify-center m-auto"
                                    alt="checkmark"
                                    src={props?.checkmark}
                                  />
                                ) : null}
                              </div>
                              {!!props?.trash ? (
                                <Img
                                  className="h-[74px]"
                                  alt="trash"
                                  src={props?.trash}
                                />
                              ) : null}
                            </div>
                          </div>
                          {!!props?.send ? (
                            <Img
                              className="absolute h-[50px] right-[0] top-[0]"
                              alt="send"
                              src={props?.send}
                            />
                          ) : null}
                        </div>
                      </div>
                      {!!props?.vectorOne ? (
                        <Img
                          className="absolute h-[101px] inset-y-[0] my-auto right-[12%]"
                          alt="vector_One"
                          src={props?.vectorOne}
                        />
                      ) : null}
                    </div>
                  ) : null}
                </div>
              </div>
              <div className="bg-white-A700 flex flex-row items-center justify-between sm:px-5 px-6 py-4 rounded-[16px] shadow-bs4 w-full">
                <div className="flex flex-col gap-2 items-start justify-start w-auto">
                  {!!props?.numbershortone2 ? (
                    <Text
                      className="md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-900 w-auto"
                      size="txtPublicSansBold32"
                    >
                      {props?.numbershortone2}
                    </Text>
                  ) : null}
                  {!!props?.label2 ? (
                    <Text
                      className="text-blue_gray-500 text-sm w-auto"
                      size="txtPublicSansSemiBold14Bluegray500"
                    >
                      {props?.label2}
                    </Text>
                  ) : null}
                </div>
                <div className="bg-gray-100 flex flex-col h-[120px] items-center justify-start rounded-[50%] w-[120px]">
                  {!!props?.iconsbookingics ? (
                    <div className="md:h-[101px] h-[120px] p-[3px] relative w-[120px]">
                      <div className="absolute flex flex-col h-max inset-[0] justify-center m-auto w-3/4">
                        {!!props?.notification ? (
                          <Img
                            className="h-[15px] md:ml-[0] ml-[50px]"
                            alt="notification"
                            src={props?.notification}
                          />
                        ) : null}
                        <div className="h-24 md:h-[75px] relative w-full">
                          <div className="h-24 m-auto w-full">
                            {!!props?.question ? (
                              <Img
                                className="h-[23px] mb-[-2.7px] ml-auto mr-[17px] z-[1]"
                                alt="question"
                                src={props?.question}
                              />
                            ) : null}
                            <div className="flex flex-row items-end justify-evenly mt-auto mx-auto w-full">
                              <div className="h-[55px] md:h-[74px] mt-[19px] relative w-[44%]">
                                {!!props?.vector ? (
                                  <Img
                                    className="absolute bottom-[0] h-[42px] inset-x-[0] mx-auto object-cover"
                                    alt="vector"
                                    src={props?.vector}
                                  />
                                ) : null}
                                {!!props?.checkmark ? (
                                  <Img
                                    className="absolute h-[55px] inset-[0] justify-center m-auto"
                                    alt="checkmark"
                                    src={props?.checkmark}
                                  />
                                ) : null}
                              </div>
                              {!!props?.trash ? (
                                <Img
                                  className="h-[74px]"
                                  alt="trash"
                                  src={props?.trash}
                                />
                              ) : null}
                            </div>
                          </div>
                          {!!props?.send ? (
                            <Img
                              className="absolute h-[50px] right-[0] top-[0]"
                              alt="send"
                              src={props?.send}
                            />
                          ) : null}
                        </div>
                      </div>
                      {!!props?.vectorOne ? (
                        <Img
                          className="absolute h-[101px] inset-y-[0] my-auto right-[12%]"
                          alt="vector_One"
                          src={props?.vectorOne}
                        />
                      ) : null}
                    </div>
                  ) : null}
                </div>
              </div>
            </List>
            <div className="bg-white-A700 flex flex-1 flex-row items-center justify-between sm:px-5 px-6 py-4 rounded-[16px] shadow-bs4 w-full">
              <div className="flex flex-col gap-2 items-start justify-start w-auto">
                {!!props?.numbershortone2 ? (
                  <Text
                    className="md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-900 w-auto"
                    size="txtPublicSansBold32"
                  >
                    {props?.numbershortone2}
                  </Text>
                ) : null}
                {!!props?.label2 ? (
                  <Text
                    className="text-blue_gray-500 text-sm w-auto"
                    size="txtPublicSansSemiBold14Bluegray500"
                  >
                    {props?.label2}
                  </Text>
                ) : null}
              </div>
              <div className="bg-gray-100 flex flex-col h-[120px] items-center justify-start rounded-[50%] w-[120px]">
                {!!props?.iconsbookingics ? (
                  <div className="md:h-[101px] h-[120px] p-[3px] relative w-[120px]">
                    <div className="absolute flex flex-col h-max inset-[0] justify-center m-auto w-3/4">
                      {!!props?.notification ? (
                        <Img
                          className="h-[15px] md:ml-[0] ml-[50px]"
                          alt="notification"
                          src={props?.notification}
                        />
                      ) : null}
                      <div className="h-24 md:h-[75px] relative w-full">
                        <div className="h-24 m-auto w-full">
                          {!!props?.question ? (
                            <Img
                              className="h-[23px] mb-[-2.7px] ml-auto mr-[17px] z-[1]"
                              alt="question"
                              src={props?.question}
                            />
                          ) : null}
                          <div className="flex flex-row items-end justify-evenly mt-auto mx-auto w-full">
                            <div className="h-[55px] md:h-[74px] mt-[19px] relative w-[44%]">
                              {!!props?.vector ? (
                                <Img
                                  className="absolute bottom-[0] h-[42px] inset-x-[0] mx-auto object-cover"
                                  alt="vector"
                                  src={props?.vector}
                                />
                              ) : null}
                              {!!props?.checkmark ? (
                                <Img
                                  className="absolute h-[55px] inset-[0] justify-center m-auto"
                                  alt="checkmark"
                                  src={props?.checkmark}
                                />
                              ) : null}
                            </div>
                            {!!props?.trash ? (
                              <Img
                                className="h-[74px]"
                                alt="trash"
                                src={props?.trash}
                              />
                            ) : null}
                          </div>
                        </div>
                        {!!props?.send ? (
                          <Img
                            className="absolute h-[50px] right-[0] top-[0]"
                            alt="send"
                            src={props?.send}
                          />
                        ) : null}
                      </div>
                    </div>
                    {!!props?.vectorOne ? (
                      <Img
                        className="absolute h-[101px] inset-y-[0] my-auto right-[12%]"
                        alt="vector_One"
                        src={props?.vectorOne}
                      />
                    ) : null}
                  </div>
                ) : null}
              </div>
            </div>
          </div>
          <div className="flex md:flex-col flex-row gap-6 items-start justify-start w-full">
            <div className="flex flex-1 flex-col gap-6 items-start justify-start w-full">
              <div className="flex md:flex-col flex-row gap-6 items-start justify-start w-full">
                <div className="bg-white-A700 p-6 sm:px-5 relative rounded-[16px] w-full">
                  <div className="absolute bg-white-A700 flex flex-col h-full inset-[0] items-center justify-center m-auto rounded-[16px] w-full">
                    {!!props?.bg ? (
                      <div className="bg-gradient2  h-[268px] rounded-[16px] w-full"></div>
                    ) : null}
                  </div>
                  <div className="flex flex-col gap-6 items-center justify-start m-auto relative w-[87%] md:w-full">
                    <div className="flex flex-row gap-6 items-start justify-between w-full">
                      <div className="flex flex-col gap-2 items-start justify-start w-auto">
                        {!!props?.text ? (
                          <Text
                            className="text-sm text-teal-900 w-auto"
                            size="txtPublicSansSemiBold14Teal900"
                          >
                            {props?.text}
                          </Text>
                        ) : null}
                        {!!props?.price ? props?.price : null}
                      </div>
                      <div className="flex flex-col gap-1 items-end justify-start w-auto">
                        <div className="flex flex-row gap-1 items-center justify-start w-auto">
                          {!!props?.cursor ? (
                            <Img
                              className="h-5 w-5"
                              alt="cursor"
                              src={props?.cursor}
                            />
                          ) : null}
                          <div className="flex flex-col items-center justify-start w-auto">
                            {!!props?.numberpercentone ? (
                              <Text
                                className="text-sm text-teal-900 w-auto"
                                size="txtPublicSansSemiBold14Teal900"
                              >
                                {props?.numberpercentone}
                              </Text>
                            ) : null}
                          </div>
                        </div>
                        {!!props?.language ? (
                          <Text
                            className="text-sm text-teal-900_a2 w-auto"
                            size="txtPublicSansRegular14Teal900a2"
                          >
                            {props?.language}
                          </Text>
                        ) : null}
                      </div>
                    </div>
                    {!!props?.chartline ? (
                      <Img
                        className="h-[118px] md:h-auto object-cover w-full"
                        alt="chartline"
                        src={props?.chartline}
                      />
                    ) : null}
                  </div>
                </div>
                <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start rounded-[16px] shadow-bs4 w-full">
                  <div className="flex flex-col items-start justify-start sm:pl-5 pl-6 pr-4 py-6 w-full">
                    <div className="flex flex-col items-center justify-start w-full">
                      <div className="flex flex-col items-start justify-start w-full">
                        {!!props?.titleTwo ? (
                          <Text
                            className="text-blue_gray-900 text-lg w-full"
                            size="txtPublicSansBold18Bluegray900"
                          >
                            {props?.titleTwo}
                          </Text>
                        ) : null}
                      </div>
                    </div>
                  </div>
                  <List
                    className="flex flex-col gap-6 items-start pb-6 sm:px-5 px-6 w-full"
                    orientation="vertical"
                  >
                    <div className="flex flex-1 md:flex-1 flex-col gap-2 items-start justify-start my-0 w-auto md:w-full">
                      <div className="flex flex-row items-center justify-between w-full">
                        {!!props?.text1 ? (
                          <Text
                            className="flex-1 text-blue_gray-900 text-xs uppercase w-auto"
                            size="txtPublicSansBold12Bluegray900"
                          >
                            {props?.text1}
                          </Text>
                        ) : null}
                        {!!props?.numbershorttwo ? (
                          <Text
                            className="text-base text-blue_gray-900 w-auto"
                            size="txtPublicSansSemiBold16"
                          >
                            {props?.numbershorttwo}
                          </Text>
                        ) : null}
                      </div>
                      {!!props?.progress ? (
                        <Img
                          className="h-2 w-full"
                          alt="progress"
                          src={props?.progress}
                        />
                      ) : null}
                    </div>
                    <div className="flex flex-1 md:flex-1 flex-col gap-2 items-start justify-start my-0 w-auto md:w-full">
                      <div className="flex flex-row items-center justify-between w-full">
                        {!!props?.text2 ? (
                          <Text
                            className="flex-1 text-blue_gray-900 text-xs uppercase w-auto"
                            size="txtPublicSansBold12Bluegray900"
                          >
                            {props?.text2}
                          </Text>
                        ) : null}
                        {!!props?.numbershortone3 ? (
                          <Text
                            className="text-base text-blue_gray-900 w-auto"
                            size="txtPublicSansSemiBold16"
                          >
                            {props?.numbershortone3}
                          </Text>
                        ) : null}
                      </div>
                      {!!props?.progress1 ? (
                        <Img
                          className="h-2 w-full"
                          alt="progress"
                          src={props?.progress1}
                        />
                      ) : null}
                    </div>
                    <div className="flex flex-1 md:flex-1 flex-col gap-2 items-start justify-start my-0 w-auto md:w-full">
                      <div className="flex flex-row items-center justify-between w-full">
                        {!!props?.text3 ? (
                          <Text
                            className="flex-1 text-blue_gray-900 text-xs uppercase w-auto"
                            size="txtPublicSansBold12Bluegray900"
                          >
                            {props?.text3}
                          </Text>
                        ) : null}
                        {!!props?.numbershortfour ? (
                          <Text
                            className="text-base text-blue_gray-900 w-auto"
                            size="txtPublicSansSemiBold16"
                          >
                            {props?.numbershortfour}
                          </Text>
                        ) : null}
                      </div>
                      {!!props?.progress2 ? (
                        <Img
                          className="h-2 w-full"
                          alt="progress"
                          src={props?.progress2}
                        />
                      ) : null}
                    </div>
                  </List>
                </div>
              </div>
              <List
                className="bg-white-A700 sm:flex-col flex-row md:gap-5 grid md:grid-cols-1 grid-cols-2 justify-start rounded-[16px] shadow-bs4 w-full"
                orientation="horizontal"
              >
                <div className="border-blue_gray-300_33 border-dashed border-r flex flex-1 flex-row gap-10 items-center justify-center sm:ml-[0] p-10 sm:px-5 w-full">
                  <div className="h-20 md:h-[76px] p-0.5 relative w-20">
                    {!!props?.stroke ? (
                      <div className="absolute h-[76px] inset-[0] justify-center m-auto outline outline-[4px] outline-blue_gray-300_28 rounded-[50%] w-[76px]"></div>
                    ) : null}
                    <div
                      className="absolute bg-cover bg-no-repeat flex flex-col h-max inset-[0] items-center justify-center m-auto p-4 w-[76px]"
                      style={{
                        backgroundImage: "url('images/img_group87.png')",
                      }}
                    >
                      {!!props?.numberpercent ? (
                        <Text
                          className="my-[13px] text-blue_gray-900 text-center text-sm"
                          size="txtPublicSansSemiBold14"
                        >
                          {props?.numberpercent}
                        </Text>
                      ) : null}
                    </div>
                  </div>
                  <div className="flex flex-col gap-1 items-start justify-start w-auto">
                    {!!props?.numberlongone ? (
                      <Text
                        className="text-2xl md:text-[22px] text-blue_gray-900 text-center sm:text-xl w-auto"
                        size="txtPublicSansBold24"
                      >
                        {props?.numberlongone}
                      </Text>
                    ) : null}
                    {!!props?.sold ? (
                      <Text
                        className="text-blue_gray-500 text-center text-sm w-auto"
                        size="txtPublicSansRegular14Bluegray500"
                      >
                        {props?.sold}
                      </Text>
                    ) : null}
                  </div>
                </div>
                <div className="flex flex-1 flex-row gap-10 items-center justify-center sm:ml-[0] p-10 sm:px-5 w-full">
                  <div className="h-20 md:h-[76px] p-0.5 relative w-20">
                    {!!props?.layer ? (
                      <div className="absolute h-[76px] inset-[0] justify-center m-auto outline outline-[4px] outline-blue_gray-300_28 rounded-[50%] w-[76px]"></div>
                    ) : null}
                    <div
                      className="absolute bg-cover bg-no-repeat flex flex-col h-max inset-[0] items-center justify-center m-auto p-[15px] w-[76px]"
                      style={{
                        backgroundImage: "url('images/img_group87.png')",
                      }}
                    >
                      {!!props?.numberpercentnine ? (
                        <Text
                          className="my-[13px] text-blue_gray-900 text-center text-sm"
                          size="txtPublicSansSemiBold14"
                        >
                          {props?.numberpercentnine}
                        </Text>
                      ) : null}
                    </div>
                  </div>
                  <div className="flex flex-col gap-1 items-start justify-start w-auto">
                    {!!props?.numberlongtwo ? (
                      <Text
                        className="text-2xl md:text-[22px] text-blue_gray-900 text-center sm:text-xl w-auto"
                        size="txtPublicSansBold24"
                      >
                        {props?.numberlongtwo}
                      </Text>
                    ) : null}
                    {!!props?.pendingforpaymeOne ? (
                      <Text
                        className="text-blue_gray-500 text-center text-sm w-auto"
                        size="txtPublicSansRegular14Bluegray500"
                      >
                        {props?.pendingforpaymeOne}
                      </Text>
                    ) : null}
                  </div>
                </div>
              </List>
              <div className="bg-white-A700 flex flex-col items-center justify-start rounded-[16px] shadow-bs4 w-full">
                <div className="flex md:flex-col flex-row gap-4 items-start justify-start sm:pl-5 pl-6 pr-4 py-6 w-full">
                  <div className="flex flex-1 flex-col items-center justify-start w-full">
                    <div className="flex flex-col gap-1 items-start justify-start w-full">
                      {!!props?.titleThree ? (
                        <Text
                          className="text-blue_gray-900 text-lg w-full"
                          size="txtPublicSansBold18Bluegray900"
                        >
                          {props?.titleThree}
                        </Text>
                      ) : null}
                      {!!props?.subtitle ? (
                        <Text
                          className="text-blue_gray-500 text-sm w-full"
                          size="txtPublicSansRegular14Bluegray500"
                        >
                          {props?.subtitle}
                        </Text>
                      ) : null}
                    </div>
                  </div>
                  {!!props?.action ? (
                    <SelectBox
                      className="!text-blue_gray-900 md:flex-1 font-publicsans font-semibold text-left text-sm w-[10%] md:w-full"
                      placeholderClassName="!text-blue_gray-900"
                      value={props?.action}
                      isSearchable={false}
                      placeholder="Year"
                      indicator={
                        <Img
                          className="h-4 w-4"
                          src="images/img_arrowup_blue_gray_900.svg"
                          alt="arrow_down"
                        />
                      }
                      name="action"
                      isMulti={false}
                      options={actionOptionsList}
                      shape="round"
                      color="blue_gray_300_14"
                      size="xs"
                      variant="fill"
                    />
                  ) : null}
                </div>
                <div className="flex flex-row gap-4 items-start justify-end sm:px-5 px-6 w-full">
                  <div className="flex flex-row gap-2 items-center justify-start w-auto">
                    {!!props?.color ? (
                      <div className="bg-teal-500 h-3 rounded-[50%] w-3"></div>
                    ) : null}
                    {!!props?.legend ? (
                      <Text
                        className="text-[13px] text-blue_gray-900 w-auto"
                        size="txtPublicSansMedium13Bluegray900"
                      >
                        {props?.legend}
                      </Text>
                    ) : null}
                  </div>
                  <div className="flex flex-row gap-2 items-center justify-start w-auto">
                    {!!props?.colorOne ? (
                      <div className="bg-deep_orange-A100 h-3 rounded-[50%] w-3"></div>
                    ) : null}
                    {!!props?.legendOne ? (
                      <Text
                        className="text-[13px] text-blue_gray-900 w-auto"
                        size="txtPublicSansMedium13Bluegray900"
                      >
                        {props?.legendOne}
                      </Text>
                    ) : null}
                  </div>
                </div>
                <div className="flex flex-col items-end justify-start p-6 sm:px-5 w-full">
                  <div className="flex md:flex-col flex-row gap-5 items-start justify-start w-full">
                    <div className="flex flex-col gap-[41px] h-[259px] md:h-auto items-end justify-start w-auto">
                      <div className="flex flex-col items-end justify-start w-auto">
                        {!!props?.labelOne ? (
                          <Text
                            className="text-blue_gray-300 text-right text-xs w-auto"
                            size="txtPublicSansRegular12Bluegray300"
                          >
                            {props?.labelOne}
                          </Text>
                        ) : null}
                      </div>
                      <div className="flex flex-col items-end justify-start w-auto">
                        {!!props?.labelTwo ? (
                          <Text
                            className="text-blue_gray-300 text-right text-xs"
                            size="txtPublicSansRegular12Bluegray300"
                          >
                            {props?.labelTwo}
                          </Text>
                        ) : null}
                      </div>
                      <div className="flex flex-col items-end justify-start w-auto">
                        {!!props?.labelThree ? (
                          <Text
                            className="text-blue_gray-300 text-right text-xs"
                            size="txtPublicSansRegular12Bluegray300"
                          >
                            {props?.labelThree}
                          </Text>
                        ) : null}
                      </div>
                      <div className="flex flex-col items-end justify-start w-auto">
                        {!!props?.labelFour ? (
                          <Text
                            className="text-blue_gray-300 text-right text-xs"
                            size="txtPublicSansRegular12Bluegray300"
                          >
                            {props?.labelFour}
                          </Text>
                        ) : null}
                      </div>
                      <div className="flex flex-col items-end justify-start w-auto">
                        {!!props?.labelFive ? (
                          <Text
                            className="text-blue_gray-300 text-right text-xs w-auto"
                            size="txtPublicSansRegular12Bluegray300"
                          >
                            {props?.labelFive}
                          </Text>
                        ) : null}
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col gap-3 items-start justify-center w-full">
                      <div className="flex flex-col gap-[42px] items-start justify-start w-full">
                        {!!props?.dividerOne ? (
                          <Img
                            className="h-[18px] w-full"
                            alt="divider_One"
                            src={props?.dividerOne}
                          />
                        ) : null}
                        <div className="relative w-full">
                          <div className="flex flex-col items-center justify-start mt-auto mx-auto w-full">
                            <div className="flex flex-col gap-[42px] items-center justify-start w-full">
                              {!!props?.dividerTwo ? (
                                <Img
                                  className="h-[18px] w-full"
                                  alt="divider_Two"
                                  src={props?.dividerTwo}
                                />
                              ) : null}
                              {!!props?.dividerThree ? (
                                <Img
                                  className="h-[18px] w-full"
                                  alt="divider_Three"
                                  src={props?.dividerThree}
                                />
                              ) : null}
                              {!!props?.dividerFour ? (
                                <Img
                                  className="h-[18px] w-full"
                                  alt="divider_Four"
                                  src={props?.dividerFour}
                                />
                              ) : null}
                              {!!props?.dividerFive ? (
                                <Img
                                  className="h-[18px] w-full"
                                  alt="divider_Five"
                                  src={props?.dividerFive}
                                />
                              ) : null}
                            </div>
                          </div>
                          {!!props?.chartcolumn ? (
                            <Img
                              className="absolute h-[200px] inset-x-[0] mx-auto top-[0] w-[646px]"
                              alt="chartcolumn"
                              src={props?.chartcolumn}
                            />
                          ) : null}
                        </div>
                      </div>
                      <div className="flex flex-row items-center justify-between w-full">
                        {!!props?.zipcode ? (
                          <Text
                            className="text-blue_gray-300 text-center text-xs w-auto"
                            size="txtPublicSansRegular12Bluegray300"
                          >
                            {props?.zipcode}
                          </Text>
                        ) : null}
                        {!!props?.zipcodeOne ? (
                          <Text
                            className="text-blue_gray-300 text-center text-xs w-auto"
                            size="txtPublicSansRegular12Bluegray300"
                          >
                            {props?.zipcodeOne}
                          </Text>
                        ) : null}
                        {!!props?.zipcodeTwo ? (
                          <Text
                            className="text-blue_gray-300 text-center text-xs w-auto"
                            size="txtPublicSansRegular12Bluegray300"
                          >
                            {props?.zipcodeTwo}
                          </Text>
                        ) : null}
                        {!!props?.zipcodeThree ? (
                          <Text
                            className="text-blue_gray-300 text-center text-xs w-auto"
                            size="txtPublicSansRegular12Bluegray300"
                          >
                            {props?.zipcodeThree}
                          </Text>
                        ) : null}
                        {!!props?.zipcodeFour ? (
                          <Text
                            className="text-blue_gray-300 text-center text-xs w-auto"
                            size="txtPublicSansRegular12Bluegray300"
                          >
                            {props?.zipcodeFour}
                          </Text>
                        ) : null}
                        {!!props?.zipcodeFive ? (
                          <Text
                            className="text-blue_gray-300 text-center text-xs w-auto"
                            size="txtPublicSansRegular12Bluegray300"
                          >
                            {props?.zipcodeFive}
                          </Text>
                        ) : null}
                        {!!props?.zipcodeSix ? (
                          <Text
                            className="text-blue_gray-300 text-center text-xs w-auto"
                            size="txtPublicSansRegular12Bluegray300"
                          >
                            {props?.zipcodeSix}
                          </Text>
                        ) : null}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-6 items-start justify-start w-[368px]">
              <div className="bg-white-A700 flex flex-col gap-10 items-center justify-start rounded-[16px] shadow-bs4 w-full">
                <div className="flex flex-col items-start justify-start sm:pl-5 pl-6 pr-4 py-6 w-full">
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="flex flex-col items-start justify-start w-full">
                      {!!props?.titleFour ? (
                        <Text
                          className="text-blue_gray-900 text-lg w-full"
                          size="txtPublicSansBold18Bluegray900"
                        >
                          {props?.titleFour}
                        </Text>
                      ) : null}
                    </div>
                  </div>
                </div>
                <div className="md:h-[199px] h-[210px] p-[5px] relative w-[210px]">
                  <div className="absolute flex flex-col h-max inset-[0] items-center justify-center m-auto outline outline-[10px] outline-blue_gray-300_28 rounded-[99px] w-[199px]">
                    {!!props?.stroke1 ? (
                      <Img
                        className="h-[199px] md:h-auto object-cover rounded-tl-[99px] rounded-tr-[99px] w-[199px]"
                        alt="stroke"
                        src={props?.stroke1}
                      />
                    ) : null}
                  </div>
                  <div className="absolute flex flex-col gap-[7px] h-max inset-[0] items-center justify-start m-auto w-auto">
                    {!!props?.textOne ? (
                      <Text
                        className="text-blue_gray-500 text-center text-sm w-auto"
                        size="txtPublicSansSemiBold14Bluegray500"
                      >
                        {props?.textOne}
                      </Text>
                    ) : null}
                    {!!props?.numberlong ? (
                      <Text
                        className="md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-900 text-center w-auto"
                        size="txtPublicSansBold32"
                      >
                        {props?.numberlong}
                      </Text>
                    ) : null}
                  </div>
                </div>
                <List
                  className="flex flex-col gap-4 items-start pb-10 px-10 sm:px-5 w-full"
                  orientation="vertical"
                >
                  <div className="flex flex-1 flex-row items-center justify-between my-0 w-full">
                    <div className="flex flex-row gap-2 items-center justify-start w-auto">
                      {!!props?.layer1 ? (
                        <div className="bg-teal-500 h-5 rounded-md w-5"></div>
                      ) : null}
                      {!!props?.text4 ? (
                        <Text
                          className="text-blue_gray-500 text-sm w-auto"
                          size="txtPublicSansSemiBold14Bluegray500"
                        >
                          {props?.text4}
                        </Text>
                      ) : null}
                    </div>
                    {!!props?.tourscounter ? (
                      <Text
                        className="text-blue_gray-900 text-sm w-auto"
                        size="txtPublicSansSemiBold14"
                      >
                        {props?.tourscounter}
                      </Text>
                    ) : null}
                  </div>
                  <div className="flex flex-1 flex-row items-center justify-between my-0 w-full">
                    <div className="flex flex-row gap-2 items-center justify-start w-auto">
                      {!!props?.companynameeleven ? (
                        <div className="bg-blue_gray-300_28 h-5 rounded-md w-5"></div>
                      ) : null}
                      {!!props?.text5 ? (
                        <Text
                          className="text-blue_gray-500 text-sm w-auto"
                          size="txtPublicSansSemiBold14Bluegray500"
                        >
                          {props?.text5}
                        </Text>
                      ) : null}
                    </div>
                    {!!props?.tourscounter1 ? (
                      <Text
                        className="text-blue_gray-900 text-sm w-auto"
                        size="txtPublicSansSemiBold14"
                      >
                        {props?.tourscounter1}
                      </Text>
                    ) : null}
                  </div>
                </List>
              </div>
              <div className="bg-white-A700 flex flex-col items-center justify-start rounded-[16px] shadow-bs4 w-full">
                <div className="sm:pl-5 pl-6 pr-4 py-6 relative w-full">
                  <div className="flex flex-1 flex-col items-center justify-start m-auto w-full">
                    <div className="flex flex-col gap-1 items-start justify-start w-full">
                      {!!props?.titleFive ? (
                        <Text
                          className="text-blue_gray-900 text-lg w-full"
                          size="txtPublicSansBold18Bluegray900"
                        >
                          {props?.titleFive}
                        </Text>
                      ) : null}
                      {!!props?.reviewscounter ? (
                        <Text
                          className="text-blue_gray-500 text-sm w-full"
                          size="txtPublicSansRegular14Bluegray500"
                        >
                          {props?.reviewscounter}
                        </Text>
                      ) : null}
                    </div>
                  </div>
                  <div className="absolute flex flex-row items-start justify-center pr-4 pt-6 right-[0] top-[0] w-auto">
                    {!!props?.arrowleft ? (
                      <Button
                        className="flex h-9 items-center justify-center w-9"
                        shape="circle"
                        size="md"
                      >
                        <Img
                          className="h-5"
                          alt="arrowleft"
                          src={props?.arrowleft}
                        />
                      </Button>
                    ) : null}
                    {!!props?.arrowright ? (
                      <Button
                        className="flex h-9 items-center justify-center w-9"
                        shape="circle"
                        size="md"
                      >
                        <Img
                          className="h-5"
                          alt="arrowright"
                          src={props?.arrowright}
                        />
                      </Button>
                    ) : null}
                  </div>
                </div>
                <div className="flex flex-col gap-4 items-start justify-start pb-6 sm:px-5 px-6 w-full">
                  <div className="flex flex-row gap-4 items-center justify-start w-auto">
                    <div className="flex flex-col items-center justify-center rounded-[50%] w-12">
                      <div className="flex flex-col h-12 md:h-auto items-center justify-center rounded-[50%] w-12">
                        {!!props?.avatartwo ? (
                          <Img
                            className="h-12 md:h-auto rounded-[50%] w-12"
                            alt="avatarTwo"
                            src={props?.avatartwo}
                          />
                        ) : null}
                      </div>
                    </div>
                    <div className="flex flex-col gap-1 items-start justify-start w-auto">
                      {!!props?.name ? (
                        <Text
                          className="text-blue_gray-900 text-sm w-auto"
                          size="txtPublicSansSemiBold14"
                        >
                          {props?.name}
                        </Text>
                      ) : null}
                      {!!props?.time ? (
                        <Text
                          className="text-blue_gray-300 text-xs w-auto"
                          size="txtPublicSansRegular12Bluegray300"
                        >
                          {props?.time}
                        </Text>
                      ) : null}
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start w-auto">
                    {!!props?.stack ? (
                      <RatingBar
                        className="flex justify-between w-[100px]"
                        value={props?.stack}
                        starCount={5}
                        size={20}
                      ></RatingBar>
                    ) : null}
                  </div>
                  {!!props?.sentenceone ? (
                    <Text
                      className="leading-[22.00px] md:max-w-full max-w-xs text-blue_gray-900 text-sm"
                      size="txtPublicSansRegular14"
                    >
                      {props?.sentenceone}
                    </Text>
                  ) : null}
                  <div className="flex flex-row gap-2 items-start justify-start w-auto">
                    {!!props?.greatSevice ? (
                      <Button
                        className="!text-blue_gray-900 cursor-pointer font-medium font-publicsans h-6 min-w-[94px] text-[13px] text-center"
                        shape="round"
                        color="blue_gray_300_14"
                        size="xs"
                        variant="fill"
                      >
                        {props?.greatSevice}
                      </Button>
                    ) : null}
                    {!!props?.recommended ? (
                      <Button
                        className="!text-blue_gray-900 cursor-pointer font-medium font-publicsans h-6 min-w-[107px] text-[13px] text-center"
                        shape="round"
                        color="blue_gray_300_14"
                        size="xs"
                        variant="fill"
                      >
                        {props?.recommended}
                      </Button>
                    ) : null}
                    {!!props?.bestPrice ? (
                      <Button
                        className="!text-blue_gray-900 cursor-pointer font-medium font-publicsans h-6 min-w-[79px] text-[13px] text-center"
                        shape="round"
                        color="blue_gray_300_14"
                        size="xs"
                        variant="fill"
                      >
                        {props?.bestPrice}
                      </Button>
                    ) : null}
                  </div>
                </div>
                <div className="border-blue_gray-300_33 border-dashed border-t flex flex-row gap-4 items-center justify-center p-6 sm:px-5 w-full">
                  {!!props?.reject ? (
                    <Button
                      className="!text-red-900 cursor-pointer flex-1 font-bold font-publicsans h-9 text-center text-sm w-full"
                      shape="round"
                      color="deep_orange_500_14"
                      size="md"
                      variant="fill"
                    >
                      {props?.reject}
                    </Button>
                  ) : null}
                  {!!props?.accept ? (
                    <Button
                      className="cursor-pointer flex-1 font-bold font-publicsans h-9 text-center text-sm w-full"
                      shape="round"
                      color="blue_gray_900"
                      size="md"
                      variant="fill"
                    >
                      {props?.accept}
                    </Button>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-6 items-start justify-start py-4 w-full">
            <div className="flex md:flex-col flex-row md:gap-5 items-center justify-center w-full">
              <div className="flex flex-1 flex-col gap-1 items-start justify-center w-full">
                {!!props?.textTwo ? (
                  <Text
                    className="text-blue_gray-900 text-lg w-auto"
                    size="txtPublicSansBold18Bluegray900"
                  >
                    {props?.textTwo}
                  </Text>
                ) : null}
                {!!props?.bookingscounter ? (
                  <Text
                    className="text-blue_gray-500 text-sm w-auto"
                    size="txtPublicSansRegular14Bluegray500"
                  >
                    {props?.bookingscounter}
                  </Text>
                ) : null}
              </div>
              <div className="flex flex-row items-start justify-start w-auto">
                {!!props?.arrowleftOne ? (
                  <Button
                    className="flex h-9 items-center justify-center w-9"
                    shape="circle"
                    size="md"
                  >
                    <Img
                      className="h-5"
                      alt="arrowleft_One"
                      src={props?.arrowleftOne}
                    />
                  </Button>
                ) : null}
                {!!props?.arrowrightOne ? (
                  <Button
                    className="flex h-9 items-center justify-center w-9"
                    shape="circle"
                    size="md"
                  >
                    <Img
                      className="h-5"
                      alt="arrowright_One"
                      src={props?.arrowrightOne}
                    />
                  </Button>
                ) : null}
              </div>
            </div>
            <List
              className="sm:flex-col flex-row gap-6 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-start w-full"
              orientation="horizontal"
            >
              <div className="bg-gray-100 flex flex-1 flex-col items-start justify-start rounded-[16px] w-full">
                <div className="flex flex-col items-start justify-start pb-2 pt-5 px-4 w-full">
                  <div className="flex flex-col gap-4 items-start justify-start w-full">
                    <div className="flex flex-row gap-[31px] items-start justify-between w-full">
                      <div className="flex flex-row gap-4 items-center justify-start mt-5 rotate-[180deg] w-auto">
                        <div className="bg-gray-300 flex flex-col items-center justify-center rotate-[180deg] rounded-[50%] w-10">
                          <div className="flex flex-col h-10 md:h-auto items-center justify-center rounded-[50%] w-10">
                            {!!props?.imgavatarfour ? (
                              <Img
                                className="h-10 md:h-auto rounded-[50%] w-10"
                                alt="imgavatarFour"
                                src={props?.imgavatarfour}
                              />
                            ) : null}
                          </div>
                        </div>
                        <div className="flex flex-col gap-1 items-start justify-start rotate-[180deg] w-auto">
                          {!!props?.namefour ? (
                            <Text
                              className="text-blue_gray-900 text-sm w-auto"
                              size="txtPublicSansSemiBold14"
                            >
                              {props?.namefour}
                            </Text>
                          ) : null}
                          {!!props?.time4 ? (
                            <Text
                              className="text-blue_gray-300 text-xs w-auto"
                              size="txtPublicSansRegular12Bluegray300"
                            >
                              {props?.time4}
                            </Text>
                          ) : null}
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-start mb-5 p-2 w-11">
                        {!!props?.iconssolidic3 ? (
                          <Button
                            className="flex h-7 items-center justify-center rounded-[50%] w-7"
                            shape="circle"
                            size="sm"
                          >
                            <Img
                              className="h-[18px]"
                              alt="iconssolidic"
                              src={props?.iconssolidic3}
                            />
                          </Button>
                        ) : null}
                      </div>
                    </div>
                    <div className="flex flex-row gap-4 items-center justify-start w-full">
                      <div className="flex flex-row gap-1 items-center justify-start w-auto">
                        {!!props?.iconssolidicone3 ? (
                          <Img
                            className="h-4 w-4"
                            alt="iconssolidic_One"
                            src={props?.iconssolidicone3}
                          />
                        ) : null}
                        {!!props?.duration3 ? (
                          <Text
                            className="text-blue_gray-500 text-xs w-auto"
                            size="txtPublicSansRegular12"
                          >
                            {props?.duration3}
                          </Text>
                        ) : null}
                      </div>
                      <div className="flex flex-row gap-1 items-center justify-start w-auto">
                        {!!props?.iconssolidictwo3 ? (
                          <Img
                            className="h-4 w-4"
                            alt="iconssolidic_Two"
                            src={props?.iconssolidictwo3}
                          />
                        ) : null}
                        {!!props?.guestscounter1 ? (
                          <Text
                            className="text-blue_gray-500 text-xs w-auto"
                            size="txtPublicSansRegular12"
                          >
                            {props?.guestscounter1}
                          </Text>
                        ) : null}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-2 relative w-[270px]">
                  <div className="bg-orange-50 flex flex-1 flex-col items-center justify-start m-auto rounded-[12px] w-[254px]">
                    {!!props?.imgtravelmfive ? (
                      <Img
                        className="h-[254px] md:h-auto object-cover rounded-[12px] w-[254px]"
                        alt="imgtravelmFive"
                        src={props?.imgtravelmfive}
                      />
                    ) : null}
                  </div>
                  <div className="absolute bottom-[0] flex flex-col items-end justify-end p-4 right-[0] w-auto">
                    {!!props?.seventytwo ? (
                      <Button
                        className="cursor-pointer font-bold font-publicsans h-6 min-w-[50px] rounded-md text-center text-xs"
                        shape="round"
                        color="blue_gray_900"
                        size="xs"
                        variant="fill"
                      >
                        {props?.seventytwo}
                      </Button>
                    ) : null}
                  </div>
                </div>
              </div>
              <div className="bg-gray-100 flex flex-1 flex-col items-start justify-start rounded-[16px] w-full">
                <div className="flex flex-col items-start justify-start pb-2 pt-5 px-4 w-full">
                  <div className="flex flex-col gap-4 items-start justify-start w-full">
                    <div className="flex flex-row gap-[38px] items-start justify-between w-full">
                      <div className="flex flex-row gap-4 items-center justify-start mt-5 rotate-[180deg] w-auto">
                        <div className="bg-gray-300 flex flex-col items-center justify-center rotate-[180deg] rounded-[50%] w-10">
                          <div className="flex flex-col h-10 md:h-auto items-center justify-center rounded-[50%] w-10">
                            {!!props?.imgavatarfour ? (
                              <Img
                                className="h-10 md:h-auto rounded-[50%] w-10"
                                alt="imgavatarFour"
                                src={props?.imgavatarfour}
                              />
                            ) : null}
                          </div>
                        </div>
                        <div className="flex flex-col gap-1 items-start justify-start rotate-[180deg] w-auto">
                          {!!props?.namefour ? (
                            <Text
                              className="text-blue_gray-900 text-sm w-auto"
                              size="txtPublicSansSemiBold14"
                            >
                              {props?.namefour}
                            </Text>
                          ) : null}
                          {!!props?.time4 ? (
                            <Text
                              className="text-blue_gray-300 text-xs w-auto"
                              size="txtPublicSansRegular12Bluegray300"
                            >
                              {props?.time4}
                            </Text>
                          ) : null}
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-start mb-5 p-2 w-11">
                        {!!props?.iconssolidic3 ? (
                          <Button
                            className="flex h-7 items-center justify-center rounded-[50%] w-7"
                            shape="circle"
                            size="sm"
                          >
                            <Img
                              className="h-[18px]"
                              alt="iconssolidic"
                              src={props?.iconssolidic3}
                            />
                          </Button>
                        ) : null}
                      </div>
                    </div>
                    <div className="flex flex-row gap-4 items-center justify-start w-full">
                      <div className="flex flex-row gap-1 items-center justify-start w-auto">
                        {!!props?.iconssolidicone3 ? (
                          <Img
                            className="h-4 w-4"
                            alt="iconssolidic_One"
                            src={props?.iconssolidicone3}
                          />
                        ) : null}
                        {!!props?.duration3 ? (
                          <Text
                            className="text-blue_gray-500 text-xs w-auto"
                            size="txtPublicSansRegular12"
                          >
                            {props?.duration3}
                          </Text>
                        ) : null}
                      </div>
                      <div className="flex flex-row gap-1 items-center justify-start w-auto">
                        {!!props?.iconssolidictwo3 ? (
                          <Img
                            className="h-4 w-4"
                            alt="iconssolidic_Two"
                            src={props?.iconssolidictwo3}
                          />
                        ) : null}
                        {!!props?.guestscounter1 ? (
                          <Text
                            className="text-blue_gray-500 text-xs w-auto"
                            size="txtPublicSansRegular12"
                          >
                            {props?.guestscounter1}
                          </Text>
                        ) : null}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-2 relative w-[270px]">
                  <div className="bg-orange-50 flex flex-1 flex-col items-center justify-start m-auto rounded-[12px] w-[254px]">
                    {!!props?.imgtravelmfive ? (
                      <Img
                        className="h-[254px] md:h-auto object-cover rounded-[12px] w-[254px]"
                        alt="imgtravelmFive"
                        src={props?.imgtravelmfive}
                      />
                    ) : null}
                  </div>
                  <div className="absolute bottom-[0] flex flex-col items-end justify-end p-4 right-[0] w-auto">
                    {!!props?.seventytwo ? (
                      <Button
                        className="cursor-pointer font-bold font-publicsans h-6 min-w-[50px] rounded-md text-center text-xs"
                        shape="round"
                        color="blue_gray_900"
                        size="xs"
                        variant="fill"
                      >
                        {props?.seventytwo}
                      </Button>
                    ) : null}
                  </div>
                </div>
              </div>
              <div className="bg-gray-100 flex flex-1 flex-col items-start justify-start rounded-[16px] w-full">
                <div className="flex flex-col items-start justify-start pb-2 pt-5 px-4 w-full">
                  <div className="flex flex-col gap-4 items-start justify-start w-full">
                    <div className="flex flex-row gap-[35px] items-start justify-between w-full">
                      <div className="flex flex-row gap-4 items-center justify-start mt-5 rotate-[180deg] w-auto">
                        <div className="bg-gray-300 flex flex-col items-center justify-center rotate-[180deg] rounded-[50%] w-10">
                          <div className="flex flex-col h-10 md:h-auto items-center justify-center rounded-[50%] w-10">
                            {!!props?.imgavatarfour ? (
                              <Img
                                className="h-10 md:h-auto rounded-[50%] w-10"
                                alt="imgavatarFour"
                                src={props?.imgavatarfour}
                              />
                            ) : null}
                          </div>
                        </div>
                        <div className="flex flex-col gap-1 items-start justify-start rotate-[180deg] w-auto">
                          {!!props?.namefour ? (
                            <Text
                              className="text-blue_gray-900 text-sm w-auto"
                              size="txtPublicSansSemiBold14"
                            >
                              {props?.namefour}
                            </Text>
                          ) : null}
                          {!!props?.time4 ? (
                            <Text
                              className="text-blue_gray-300 text-xs w-auto"
                              size="txtPublicSansRegular12Bluegray300"
                            >
                              {props?.time4}
                            </Text>
                          ) : null}
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-start mb-5 p-2 w-11">
                        {!!props?.iconssolidic3 ? (
                          <Button
                            className="flex h-7 items-center justify-center rounded-[50%] w-7"
                            shape="circle"
                            size="sm"
                          >
                            <Img
                              className="h-[18px]"
                              alt="iconssolidic"
                              src={props?.iconssolidic3}
                            />
                          </Button>
                        ) : null}
                      </div>
                    </div>
                    <div className="flex flex-row gap-4 items-center justify-start w-full">
                      <div className="flex flex-row gap-1 items-center justify-start w-auto">
                        {!!props?.iconssolidicone3 ? (
                          <Img
                            className="h-4 w-4"
                            alt="iconssolidic_One"
                            src={props?.iconssolidicone3}
                          />
                        ) : null}
                        {!!props?.duration3 ? (
                          <Text
                            className="text-blue_gray-500 text-xs w-auto"
                            size="txtPublicSansRegular12"
                          >
                            {props?.duration3}
                          </Text>
                        ) : null}
                      </div>
                      <div className="flex flex-row gap-1 items-center justify-start w-auto">
                        {!!props?.iconssolidictwo3 ? (
                          <Img
                            className="h-4 w-4"
                            alt="iconssolidic_Two"
                            src={props?.iconssolidictwo3}
                          />
                        ) : null}
                        {!!props?.guestscounter1 ? (
                          <Text
                            className="text-blue_gray-500 text-xs w-auto"
                            size="txtPublicSansRegular12"
                          >
                            {props?.guestscounter1}
                          </Text>
                        ) : null}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-2 relative w-[270px]">
                  <div className="bg-orange-50 flex flex-1 flex-col items-center justify-start m-auto rounded-[12px] w-[254px]">
                    {!!props?.imgtravelmfive ? (
                      <Img
                        className="h-[254px] md:h-auto object-cover rounded-[12px] w-[254px]"
                        alt="imgtravelmFive"
                        src={props?.imgtravelmfive}
                      />
                    ) : null}
                  </div>
                  <div className="absolute bottom-[0] flex flex-col items-end justify-end p-4 right-[0] w-auto">
                    {!!props?.seventytwo ? (
                      <Button
                        className="cursor-pointer font-bold font-publicsans h-6 min-w-[50px] rounded-md text-center text-xs"
                        shape="round"
                        color="blue_gray_900"
                        size="xs"
                        variant="fill"
                      >
                        {props?.seventytwo}
                      </Button>
                    ) : null}
                  </div>
                </div>
              </div>
              <div className="bg-gray-100 flex flex-1 flex-col items-start justify-start rounded-[16px] w-full">
                <div className="flex flex-col items-start justify-start pb-2 pt-5 px-4 w-full">
                  <div className="flex flex-col gap-4 items-start justify-start w-full">
                    <div className="flex flex-row gap-[33px] items-start justify-between w-full">
                      <div className="flex flex-row gap-4 items-center justify-start mt-5 rotate-[180deg] w-auto">
                        <div className="bg-gray-300 flex flex-col items-center justify-center rotate-[180deg] rounded-[50%] w-10">
                          <div className="flex flex-col h-10 md:h-auto items-center justify-center rounded-[50%] w-10">
                            {!!props?.imgavatarfour ? (
                              <Img
                                className="h-10 md:h-auto rounded-[50%] w-10"
                                alt="imgavatarFour"
                                src={props?.imgavatarfour}
                              />
                            ) : null}
                          </div>
                        </div>
                        <div className="flex flex-col gap-1 items-start justify-start rotate-[180deg] w-auto">
                          {!!props?.namefour ? (
                            <Text
                              className="text-blue_gray-900 text-sm w-auto"
                              size="txtPublicSansSemiBold14"
                            >
                              {props?.namefour}
                            </Text>
                          ) : null}
                          {!!props?.time4 ? (
                            <Text
                              className="text-blue_gray-300 text-xs w-auto"
                              size="txtPublicSansRegular12Bluegray300"
                            >
                              {props?.time4}
                            </Text>
                          ) : null}
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-start mb-5 p-2 w-11">
                        {!!props?.iconssolidic3 ? (
                          <Button
                            className="flex h-7 items-center justify-center rounded-[50%] w-7"
                            shape="circle"
                            size="sm"
                          >
                            <Img
                              className="h-[18px]"
                              alt="iconssolidic"
                              src={props?.iconssolidic3}
                            />
                          </Button>
                        ) : null}
                      </div>
                    </div>
                    <div className="flex flex-row gap-4 items-center justify-start w-full">
                      <div className="flex flex-row gap-1 items-center justify-start w-auto">
                        {!!props?.iconssolidicone3 ? (
                          <Img
                            className="h-4 w-4"
                            alt="iconssolidic_One"
                            src={props?.iconssolidicone3}
                          />
                        ) : null}
                        {!!props?.duration3 ? (
                          <Text
                            className="text-blue_gray-500 text-xs w-auto"
                            size="txtPublicSansRegular12"
                          >
                            {props?.duration3}
                          </Text>
                        ) : null}
                      </div>
                      <div className="flex flex-row gap-1 items-center justify-start w-auto">
                        {!!props?.iconssolidictwo3 ? (
                          <Img
                            className="h-4 w-4"
                            alt="iconssolidic_Two"
                            src={props?.iconssolidictwo3}
                          />
                        ) : null}
                        {!!props?.guestscounter1 ? (
                          <Text
                            className="text-blue_gray-500 text-xs w-auto"
                            size="txtPublicSansRegular12"
                          >
                            {props?.guestscounter1}
                          </Text>
                        ) : null}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-2 relative w-[270px]">
                  <div className="bg-orange-50 flex flex-1 flex-col items-center justify-start m-auto rounded-[12px] w-[254px]">
                    {!!props?.imgtravelmfive ? (
                      <Img
                        className="h-[254px] md:h-auto object-cover rounded-[12px] w-[254px]"
                        alt="imgtravelmFive"
                        src={props?.imgtravelmfive}
                      />
                    ) : null}
                  </div>
                  <div className="absolute bottom-[0] flex flex-col items-end justify-end p-4 right-[0] w-auto">
                    {!!props?.seventytwo ? (
                      <Button
                        className="cursor-pointer font-bold font-publicsans h-6 min-w-[50px] rounded-md text-center text-xs"
                        shape="round"
                        color="blue_gray_900"
                        size="xs"
                        variant="fill"
                      >
                        {props?.seventytwo}
                      </Button>
                    ) : null}
                  </div>
                </div>
              </div>
            </List>
          </div>
          <div className="bg-white-A700 flex flex-col items-start justify-start rounded-[16px] shadow-bs4 w-full">
            <div className="flex flex-col items-start justify-start sm:pl-5 pl-6 pr-4 py-6 w-full">
              <div className="flex flex-col items-center justify-start w-full">
                <div className="flex flex-col items-start justify-start w-full">
                  {!!props?.titleSix ? (
                    <Text
                      className="text-blue_gray-900 text-lg w-full"
                      size="txtPublicSansBold18Bluegray900"
                    >
                      {props?.titleSix}
                    </Text>
                  ) : null}
                </div>
              </div>
            </div>
            <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-full">
              <div className="bg-gray-100 flex flex-1 flex-col items-center justify-start w-full">
                <div className="flex flex-col items-center justify-start p-4 w-auto">
                  {!!props?.thtext ? (
                    <Text
                      className="text-blue_gray-500 text-sm w-auto"
                      size="txtPublicSansSemiBold14Bluegray500"
                    >
                      {props?.thtext}
                    </Text>
                  ) : null}
                </div>
              </div>
              <div className="bg-gray-100 flex flex-col items-center justify-start w-[200px]">
                <div className="flex flex-col items-center justify-start p-4 w-auto">
                  {!!props?.thtextOne ? (
                    <Text
                      className="text-blue_gray-500 text-sm w-auto"
                      size="txtPublicSansSemiBold14Bluegray500"
                    >
                      {props?.thtextOne}
                    </Text>
                  ) : null}
                </div>
              </div>
              <div className="bg-gray-100 flex flex-col items-center justify-start w-40">
                <div className="flex flex-col items-center justify-start p-4 w-auto">
                  {!!props?.thtextTwo ? (
                    <Text
                      className="text-blue_gray-500 text-sm w-auto"
                      size="txtPublicSansSemiBold14Bluegray500"
                    >
                      {props?.thtextTwo}
                    </Text>
                  ) : null}
                </div>
              </div>
              <div className="bg-gray-100 flex flex-col items-center justify-start w-40">
                <div className="flex flex-col items-center justify-start p-4 w-auto">
                  {!!props?.thtextThree ? (
                    <Text
                      className="text-blue_gray-500 text-sm w-auto"
                      size="txtPublicSansSemiBold14Bluegray500"
                    >
                      {props?.thtextThree}
                    </Text>
                  ) : null}
                </div>
              </div>
              <div className="bg-gray-100 flex flex-col items-center justify-start w-[100px]">
                <div className="flex flex-col items-center justify-start p-4 w-auto">
                  {!!props?.thtextFour ? (
                    <Text
                      className="text-blue_gray-500 text-sm w-auto"
                      size="txtPublicSansSemiBold14Bluegray500"
                    >
                      {props?.thtextFour}
                    </Text>
                  ) : null}
                </div>
              </div>
              {!!props?.tablecell ? (
                <div className="bg-gray-100 h-14 w-[6%]"></div>
              ) : null}
            </div>
            <List
              className="flex flex-col gap-px items-center w-full"
              orientation="vertical"
            >
              <div className="bg-white-A700 border-b border-blue_gray-300_33 border-dashed flex flex-1 md:flex-col flex-row md:gap-5 items-center justify-start w-full">
                <div className="flex flex-1 flex-col items-center justify-start w-full">
                  <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start py-4 w-full">
                    <div className="flex flex-col items-start justify-start pl-4 w-auto">
                      {!!props?.createfromframe ? (
                        <div className="h-12 relative w-11">
                          {!!props?.createfromframe ? (
                            <Img
                              className="absolute h-10 inset-y-[0] my-auto object-cover right-[0] rounded-[12px] w-10"
                              alt="createfromframe"
                              src={props?.createfromframe}
                            />
                          ) : null}
                          <div className="absolute flex flex-col md:h-auto h-full inset-[0] items-center justify-center m-auto w-11">
                            {!!props?.imgtravelstwo ? (
                              <Img
                                className="md:h-auto h-full object-cover rounded-bl-[12px] rounded-br-[12px] w-full"
                                alt="imgtravelsTwo"
                                src={props?.imgtravelstwo}
                              />
                            ) : null}
                          </div>
                        </div>
                      ) : null}
                    </div>
                    <div className="flex flex-1 flex-col items-start justify-center px-4 w-full">
                      {!!props?.duration4 ? (
                        <Text
                          className="text-blue_gray-900 text-sm w-full"
                          size="txtPublicSansRegular14"
                        >
                          {props?.duration4}
                        </Text>
                      ) : null}
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start w-[200px]">
                  <div className="flex flex-col items-center justify-start py-4 w-auto">
                    <div className="flex flex-col gap-1 items-start justify-center px-4 w-auto">
                      {!!props?.namerand ? (
                        <Text
                          className="text-blue_gray-900 text-sm w-auto"
                          size="txtPublicSansRegular14"
                        >
                          {props?.namerand}
                        </Text>
                      ) : null}
                      {!!props?.phonenumberone ? (
                        <Text
                          className="text-blue_gray-500 text-xs w-auto"
                          size="txtPublicSansRegular12"
                        >
                          {props?.phonenumberone}
                        </Text>
                      ) : null}
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start w-40">
                  <div className="flex flex-col items-center justify-start py-4 w-auto">
                    <div className="flex flex-col gap-1 items-start justify-center px-4 w-auto">
                      {!!props?.date ? (
                        <Text
                          className="text-blue_gray-900 text-sm w-auto"
                          size="txtPublicSansRegular14"
                        >
                          {props?.date}
                        </Text>
                      ) : null}
                      {!!props?.time5 ? (
                        <Text
                          className="text-blue_gray-500 text-xs w-auto"
                          size="txtPublicSansRegular12"
                        >
                          {props?.time5}
                        </Text>
                      ) : null}
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start w-40">
                  <div className="flex flex-col items-center justify-start py-4 w-auto">
                    <div className="flex flex-col gap-1 items-start justify-center px-4 w-auto">
                      {!!props?.dateOne ? (
                        <Text
                          className="text-blue_gray-900 text-sm w-auto"
                          size="txtPublicSansRegular14"
                        >
                          {props?.dateOne}
                        </Text>
                      ) : null}
                      {!!props?.timeOne ? (
                        <Text
                          className="text-blue_gray-500 text-xs w-auto"
                          size="txtPublicSansRegular12"
                        >
                          {props?.timeOne}
                        </Text>
                      ) : null}
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-end justify-start p-4 w-[100px]">
                  {!!props?.paid ? (
                    <Button
                      className="!text-teal-700_01 cursor-pointer font-bold font-publicsans h-6 min-w-[38px] rounded-md text-center text-xs"
                      shape="round"
                      color="green_A700_28"
                      size="xs"
                      variant="fill"
                    >
                      {props?.paid}
                    </Button>
                  ) : null}
                </div>
                <div className="flex flex-col items-center justify-end p-4 w-[68px]">
                  {!!props?.iconssolidic4 ? (
                    <Button
                      className="flex h-9 items-center justify-center w-9"
                      shape="circle"
                      size="md"
                    >
                      <Img
                        className="h-5"
                        alt="iconssolidic"
                        src={props?.iconssolidic4}
                      />
                    </Button>
                  ) : null}
                </div>
              </div>
              <div className="bg-white-A700 border-b border-blue_gray-300_33 border-dashed flex flex-1 md:flex-col flex-row md:gap-5 items-center justify-start w-full">
                <div className="flex flex-1 flex-col items-center justify-start w-full">
                  <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start py-4 w-full">
                    <div className="flex flex-col items-start justify-start pl-4 w-auto">
                      {!!props?.createfromframe1 ? (
                        <div className="h-12 relative w-11">
                          {!!props?.createfromframe1 ? (
                            <Img
                              className="absolute h-10 inset-y-[0] my-auto object-cover right-[0] rounded-[12px] w-10"
                              alt="createfromframe"
                              src={props?.createfromframe1}
                            />
                          ) : null}
                          <div className="absolute flex flex-col md:h-auto h-full inset-[0] items-center justify-center m-auto w-11">
                            {!!props?.imgtravelsthree ? (
                              <Img
                                className="md:h-auto h-full object-cover rounded-bl-[12px] rounded-br-[12px] w-full"
                                alt="imgtravelsThree"
                                src={props?.imgtravelsthree}
                              />
                            ) : null}
                          </div>
                        </div>
                      ) : null}
                    </div>
                    <div className="flex flex-1 flex-col items-start justify-center px-4 w-full">
                      {!!props?.duration5 ? (
                        <Text
                          className="text-blue_gray-900 text-sm w-full"
                          size="txtPublicSansRegular14"
                        >
                          {props?.duration5}
                        </Text>
                      ) : null}
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start w-[200px]">
                  <div className="flex flex-col items-center justify-start py-4 w-auto">
                    <div className="flex flex-col gap-1 items-start justify-center px-4 w-auto">
                      {!!props?.namerand1 ? (
                        <Text
                          className="text-blue_gray-900 text-sm w-auto"
                          size="txtPublicSansRegular14"
                        >
                          {props?.namerand1}
                        </Text>
                      ) : null}
                      {!!props?.phonenumberone1 ? (
                        <Text
                          className="text-blue_gray-500 text-xs w-auto"
                          size="txtPublicSansRegular12"
                        >
                          {props?.phonenumberone1}
                        </Text>
                      ) : null}
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start w-40">
                  <div className="flex flex-col items-center justify-start py-4 w-auto">
                    <div className="flex flex-col gap-1 items-start justify-center px-4 w-auto">
                      {!!props?.date1 ? (
                        <Text
                          className="text-blue_gray-900 text-sm w-auto"
                          size="txtPublicSansRegular14"
                        >
                          {props?.date1}
                        </Text>
                      ) : null}
                      {!!props?.time6 ? (
                        <Text
                          className="text-blue_gray-500 text-xs w-auto"
                          size="txtPublicSansRegular12"
                        >
                          {props?.time6}
                        </Text>
                      ) : null}
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start w-40">
                  <div className="flex flex-col items-center justify-start py-4 w-auto">
                    <div className="flex flex-col gap-1 items-start justify-center px-4 w-auto">
                      {!!props?.dateone1 ? (
                        <Text
                          className="text-blue_gray-900 text-sm w-auto"
                          size="txtPublicSansRegular14"
                        >
                          {props?.dateone1}
                        </Text>
                      ) : null}
                      {!!props?.timeone1 ? (
                        <Text
                          className="text-blue_gray-500 text-xs w-auto"
                          size="txtPublicSansRegular12"
                        >
                          {props?.timeone1}
                        </Text>
                      ) : null}
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-end justify-start p-4 w-[100px]">
                  {!!props?.pending ? (
                    <Button
                      className="!text-orange-900 cursor-pointer font-bold font-publicsans h-6 min-w-[59px] rounded-md text-center text-xs"
                      shape="round"
                      color="amber_A700_28"
                      size="xs"
                      variant="fill"
                    >
                      {props?.pending}
                    </Button>
                  ) : null}
                </div>
                <div className="flex flex-col items-center justify-end p-4 w-[68px]">
                  {!!props?.iconssolidic5 ? (
                    <Button
                      className="flex h-9 items-center justify-center w-9"
                      shape="circle"
                      size="md"
                    >
                      <Img
                        className="h-5"
                        alt="iconssolidic"
                        src={props?.iconssolidic5}
                      />
                    </Button>
                  ) : null}
                </div>
              </div>
              <div className="bg-white-A700 border-b border-blue_gray-300_33 border-dashed flex flex-1 md:flex-col flex-row md:gap-5 items-center justify-start w-full">
                <div className="flex flex-1 flex-col items-center justify-start w-full">
                  <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start py-4 w-full">
                    <div className="flex flex-col items-start justify-start pl-4 w-auto">
                      {!!props?.createfromframe2 ? (
                        <div className="h-12 relative w-11">
                          {!!props?.createfromframe2 ? (
                            <Img
                              className="absolute h-10 inset-y-[0] my-auto object-cover right-[0] rounded-[12px] w-10"
                              alt="createfromframe"
                              src={props?.createfromframe2}
                            />
                          ) : null}
                          <div className="absolute flex flex-col md:h-auto h-full inset-[0] items-center justify-center m-auto w-11">
                            {!!props?.imgtravelsfour ? (
                              <Img
                                className="md:h-auto h-full object-cover rounded-bl-[12px] rounded-br-[12px] w-full"
                                alt="imgtravelsFour"
                                src={props?.imgtravelsfour}
                              />
                            ) : null}
                          </div>
                        </div>
                      ) : null}
                    </div>
                    <div className="flex flex-1 flex-col items-start justify-center px-4 w-full">
                      {!!props?.duration6 ? (
                        <Text
                          className="text-blue_gray-900 text-sm w-full"
                          size="txtPublicSansRegular14"
                        >
                          {props?.duration6}
                        </Text>
                      ) : null}
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start w-[200px]">
                  <div className="flex flex-col items-center justify-start py-4 w-auto">
                    <div className="flex flex-col gap-1 items-start justify-center px-4 w-auto">
                      {!!props?.namerand2 ? (
                        <Text
                          className="text-blue_gray-900 text-sm w-auto"
                          size="txtPublicSansRegular14"
                        >
                          {props?.namerand2}
                        </Text>
                      ) : null}
                      {!!props?.phonenumberone2 ? (
                        <Text
                          className="text-blue_gray-500 text-xs w-auto"
                          size="txtPublicSansRegular12"
                        >
                          {props?.phonenumberone2}
                        </Text>
                      ) : null}
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start w-40">
                  <div className="flex flex-col items-center justify-start py-4 w-auto">
                    <div className="flex flex-col gap-1 items-start justify-center px-4 w-auto">
                      {!!props?.date2 ? (
                        <Text
                          className="text-blue_gray-900 text-sm w-auto"
                          size="txtPublicSansRegular14"
                        >
                          {props?.date2}
                        </Text>
                      ) : null}
                      {!!props?.time7 ? (
                        <Text
                          className="text-blue_gray-500 text-xs w-auto"
                          size="txtPublicSansRegular12"
                        >
                          {props?.time7}
                        </Text>
                      ) : null}
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start w-40">
                  <div className="flex flex-col items-center justify-start py-4 w-auto">
                    <div className="flex flex-col gap-1 items-start justify-center px-4 w-auto">
                      {!!props?.dateone2 ? (
                        <Text
                          className="text-blue_gray-900 text-sm w-auto"
                          size="txtPublicSansRegular14"
                        >
                          {props?.dateone2}
                        </Text>
                      ) : null}
                      {!!props?.timeone2 ? (
                        <Text
                          className="text-blue_gray-500 text-xs w-auto"
                          size="txtPublicSansRegular12"
                        >
                          {props?.timeone2}
                        </Text>
                      ) : null}
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-end justify-start p-4 w-[100px]">
                  {!!props?.cancelled ? (
                    <Button
                      className="!text-red-900 cursor-pointer font-bold font-publicsans h-6 min-w-[70px] rounded-md text-center text-xs"
                      shape="round"
                      color="deep_orange_500_28"
                      size="xs"
                      variant="fill"
                    >
                      {props?.cancelled}
                    </Button>
                  ) : null}
                </div>
                <div className="flex flex-col items-center justify-end p-4 w-[68px]">
                  {!!props?.iconssolidic6 ? (
                    <Button
                      className="flex h-9 items-center justify-center w-9"
                      shape="circle"
                      size="md"
                    >
                      <Img
                        className="h-5"
                        alt="iconssolidic"
                        src={props?.iconssolidic6}
                      />
                    </Button>
                  ) : null}
                </div>
              </div>
              <div className="bg-white-A700 border-b border-blue_gray-300_33 border-dashed flex flex-1 md:flex-col flex-row md:gap-5 items-center justify-start w-full">
                <div className="flex flex-1 flex-col items-center justify-start w-full">
                  <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start py-4 w-full">
                    <div className="flex flex-col items-start justify-start pl-4 w-auto">
                      {!!props?.createfromframe3 ? (
                        <div className="h-12 relative w-11">
                          {!!props?.createfromframe3 ? (
                            <Img
                              className="absolute h-10 inset-y-[0] my-auto object-cover right-[0] rounded-[12px] w-10"
                              alt="createfromframe"
                              src={props?.createfromframe3}
                            />
                          ) : null}
                          <div className="absolute flex flex-col md:h-auto h-full inset-[0] items-center justify-center m-auto w-11">
                            {!!props?.imgtravelsfive ? (
                              <Img
                                className="md:h-auto h-full object-cover rounded-bl-[12px] rounded-br-[12px] w-full"
                                alt="imgtravelsFive"
                                src={props?.imgtravelsfive}
                              />
                            ) : null}
                          </div>
                        </div>
                      ) : null}
                    </div>
                    <div className="flex flex-1 flex-col items-start justify-center px-4 w-full">
                      {!!props?.country ? (
                        <Text
                          className="text-blue_gray-900 text-sm w-full"
                          size="txtPublicSansRegular14"
                        >
                          {props?.country}
                        </Text>
                      ) : null}
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start w-[200px]">
                  <div className="flex flex-col items-center justify-start py-4 w-auto">
                    <div className="flex flex-col gap-1 items-start justify-center px-4 w-auto">
                      {!!props?.namerand3 ? (
                        <Text
                          className="text-blue_gray-900 text-sm w-auto"
                          size="txtPublicSansRegular14"
                        >
                          {props?.namerand3}
                        </Text>
                      ) : null}
                      {!!props?.phonenumberone3 ? (
                        <Text
                          className="text-blue_gray-500 text-xs w-auto"
                          size="txtPublicSansRegular12"
                        >
                          {props?.phonenumberone3}
                        </Text>
                      ) : null}
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start w-40">
                  <div className="flex flex-col items-center justify-start py-4 w-auto">
                    <div className="flex flex-col gap-1 items-start justify-center px-4 w-auto">
                      {!!props?.date3 ? (
                        <Text
                          className="text-blue_gray-900 text-sm w-auto"
                          size="txtPublicSansRegular14"
                        >
                          {props?.date3}
                        </Text>
                      ) : null}
                      {!!props?.time8 ? (
                        <Text
                          className="text-blue_gray-500 text-xs w-auto"
                          size="txtPublicSansRegular12"
                        >
                          {props?.time8}
                        </Text>
                      ) : null}
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start w-40">
                  <div className="flex flex-col items-center justify-start py-4 w-auto">
                    <div className="flex flex-col gap-1 items-start justify-center px-4 w-auto">
                      {!!props?.dateone3 ? (
                        <Text
                          className="text-blue_gray-900 text-sm w-auto"
                          size="txtPublicSansRegular14"
                        >
                          {props?.dateone3}
                        </Text>
                      ) : null}
                      {!!props?.timeone3 ? (
                        <Text
                          className="text-blue_gray-500 text-xs w-auto"
                          size="txtPublicSansRegular12"
                        >
                          {props?.timeone3}
                        </Text>
                      ) : null}
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-end justify-start p-4 w-[100px]">
                  {!!props?.paid1 ? (
                    <Button
                      className="!text-teal-700_01 cursor-pointer font-bold font-publicsans h-6 min-w-[38px] rounded-md text-center text-xs"
                      shape="round"
                      color="green_A700_28"
                      size="xs"
                      variant="fill"
                    >
                      {props?.paid1}
                    </Button>
                  ) : null}
                </div>
                <div className="flex flex-col items-center justify-end p-4 w-[68px]">
                  {!!props?.iconssolidic7 ? (
                    <Button
                      className="flex h-9 items-center justify-center w-9"
                      shape="circle"
                      size="md"
                    >
                      <Img
                        className="h-5"
                        alt="iconssolidic"
                        src={props?.iconssolidic7}
                      />
                    </Button>
                  ) : null}
                </div>
              </div>
              <div className="bg-white-A700 border-b border-blue_gray-300_33 border-dashed flex flex-1 md:flex-col flex-row md:gap-5 items-center justify-start w-full">
                <div className="flex flex-1 flex-col items-center justify-start w-full">
                  <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start py-4 w-full">
                    <div className="flex flex-col items-start justify-start pl-4 w-auto">
                      {!!props?.createfromframe4 ? (
                        <div className="h-12 relative w-11">
                          {!!props?.createfromframe4 ? (
                            <Img
                              className="absolute h-10 inset-y-[0] my-auto object-cover right-[0] rounded-[12px] w-10"
                              alt="createfromframe"
                              src={props?.createfromframe4}
                            />
                          ) : null}
                          <div className="absolute flex flex-col md:h-auto h-full inset-[0] items-center justify-center m-auto w-11">
                            {!!props?.imgtravelssix ? (
                              <Img
                                className="md:h-auto h-full object-cover rounded-bl-[12px] rounded-br-[12px] w-full"
                                alt="imgtravelsSix"
                                src={props?.imgtravelssix}
                              />
                            ) : null}
                          </div>
                        </div>
                      ) : null}
                    </div>
                    <div className="flex flex-1 flex-col items-start justify-center px-4 w-full">
                      {!!props?.duration7 ? (
                        <Text
                          className="text-blue_gray-900 text-sm w-full"
                          size="txtPublicSansRegular14"
                        >
                          {props?.duration7}
                        </Text>
                      ) : null}
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start w-[200px]">
                  <div className="flex flex-col items-center justify-start py-4 w-auto">
                    <div className="flex flex-col gap-1 items-start justify-center px-4 w-auto">
                      {!!props?.namerand4 ? (
                        <Text
                          className="text-blue_gray-900 text-sm w-auto"
                          size="txtPublicSansRegular14"
                        >
                          {props?.namerand4}
                        </Text>
                      ) : null}
                      {!!props?.phonenumberone4 ? (
                        <Text
                          className="text-blue_gray-500 text-xs w-auto"
                          size="txtPublicSansRegular12"
                        >
                          {props?.phonenumberone4}
                        </Text>
                      ) : null}
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start w-40">
                  <div className="flex flex-col items-center justify-start py-4 w-auto">
                    <div className="flex flex-col gap-1 items-start justify-center px-4 w-auto">
                      {!!props?.date4 ? (
                        <Text
                          className="text-blue_gray-900 text-sm w-auto"
                          size="txtPublicSansRegular14"
                        >
                          {props?.date4}
                        </Text>
                      ) : null}
                      {!!props?.time9 ? (
                        <Text
                          className="text-blue_gray-500 text-xs w-auto"
                          size="txtPublicSansRegular12"
                        >
                          {props?.time9}
                        </Text>
                      ) : null}
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start w-40">
                  <div className="flex flex-col items-center justify-start py-4 w-auto">
                    <div className="flex flex-col gap-1 items-start justify-center px-4 w-auto">
                      {!!props?.dateone4 ? (
                        <Text
                          className="text-blue_gray-900 text-sm w-auto"
                          size="txtPublicSansRegular14"
                        >
                          {props?.dateone4}
                        </Text>
                      ) : null}
                      {!!props?.timeone4 ? (
                        <Text
                          className="text-blue_gray-500 text-xs w-auto"
                          size="txtPublicSansRegular12"
                        >
                          {props?.timeone4}
                        </Text>
                      ) : null}
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-end justify-start p-4 w-[100px]">
                  {!!props?.paid2 ? (
                    <Button
                      className="!text-teal-700_01 cursor-pointer font-bold font-publicsans h-6 min-w-[38px] rounded-md text-center text-xs"
                      shape="round"
                      color="green_A700_28"
                      size="xs"
                      variant="fill"
                    >
                      {props?.paid2}
                    </Button>
                  ) : null}
                </div>
                <div className="flex flex-col items-center justify-end p-4 w-[68px]">
                  {!!props?.iconssolidic8 ? (
                    <Button
                      className="flex h-9 items-center justify-center w-9"
                      shape="circle"
                      size="md"
                    >
                      <Img
                        className="h-5"
                        alt="iconssolidic"
                        src={props?.iconssolidic8}
                      />
                    </Button>
                  ) : null}
                </div>
              </div>
            </List>
            <div className="flex flex-col items-end justify-start p-4 w-full">
              <div className="flex flex-row gap-2 h-[30px] md:h-auto items-center justify-center px-1 rounded-lg w-auto">
                {!!props?.labelSix ? (
                  <Text
                    className="text-[13px] text-blue_gray-900 w-auto"
                    size="txtPublicSansBold13"
                  >
                    {props?.labelSix}
                  </Text>
                ) : null}
                {!!props?.arrowrightTwo ? (
                  <Img
                    className="h-[18px] w-[18px]"
                    alt="arrowright_Two"
                    src={props?.arrowrightTwo}
                  />
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

HORIZONTALAppStacklogo.defaultProps = {
  badge: "1",
  title5: "User",
  title6: "Product",
  title7: "Order",
  title8: "Invoice",
  title9: "Blog",
  title10: "Job",
  title11: "Tour",
  titleOne: "File Manager",
  title12: "Chat",
  title13: "Calendar",
  title14: "Kanban",
  price: (
    <Text
      className="md:text-3xl sm:text-[28px] text-[32px] text-teal-900 w-auto"
      size="txtPublicSansBold32Teal900"
    >
      <span className="text-teal-900 font-publicsans text-left font-bold">
        $
      </span>
      <span className="text-teal-900 font-publicsans text-left font-bold">
        9,990
      </span>
    </Text>
  ),
};

export default HORIZONTALAppStacklogo;
