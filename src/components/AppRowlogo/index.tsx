import React from "react";

import { Menu, MenuItem, Sidebar, SubMenu } from "react-pro-sidebar";

import { Button, Img, Input, List, Text } from "components";

import { CloseSVG } from "../../assets/images";

type AppRowlogoProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  | "subheader"
  | "dashboard"
  | "title"
  | "icon"
  | "titleOne"
  | "iconOne"
  | "titleTwo"
  | "iconTwo"
  | "titleThree"
  | "iconThree"
  | "titleFour"
  | "iconFour"
  | "titleFive"
  | "subheaderOne"
  | "user"
  | "titleSix"
  | "arrowright"
  | "iconFive"
  | "titleSeven"
  | "arrowrightOne"
  | "cart"
  | "titleEight"
  | "arrowrightTwo"
  | "call"
  | "titleNine"
  | "arrowrightThree"
  | "sort"
  | "titleTen"
  | "arrowrightFour"
  | "iconSix"
  | "titleEleven"
  | "arrowrightFive"
  | "iconSeven"
  | "titleTwelve"
  | "arrowrightSix"
  | "volume"
  | "titleThirteen"
  | "bag"
  | "titleFourteen"
  | "p32"
  | "callOne"
  | "titleFifteen"
  | "calendar"
  | "titleSixteen"
  | "iconEight"
  | "titleSeventeen"
  | "label"
  | "nameforty"
  | "email"
  | "upgradeToPro"
  | "badge"
  | "titleEighteen"
  | "upload"
  | "wrap"
  | "labelOne"
  | "arrowdown"
  | "labelTwo"
  | "arrowdownOne"
  | "iconssolidic"
  | "grid"
  | "titleNineteen"
  | "plus"
  | "folderscounter"
  | "arrowdownTwo"
  | "checkmark"
  | "star"
  | "iconssolidic1"
  | "name"
  | "filesize"
  | "dot"
  | "filescounter"
  | "imgavatarrand"
  | "checkmark1"
  | "star1"
  | "iconssolidic2"
  | "name1"
  | "filesize1"
  | "dot1"
  | "filescounter1"
  | "imgavatartwo"
  | "imgavatarthree"
  | "iconsfileicfold"
  | "star2"
  | "iconssolidic3"
  | "name2"
  | "filesize2"
  | "dot2"
  | "filescounter2"
  | "imgavatarfour"
  | "imgavatarfive"
  | "iconsfileicfold1"
  | "star3"
  | "iconssolidic4"
  | "name3"
  | "filesize3"
  | "dot3"
  | "filescounter3"
  | "imgavatarsix"
  | "iconsfileicfold2"
  | "star4"
  | "iconssolidic5"
  | "name4"
  | "filesize4"
  | "dot4"
  | "filescounter4"
  | "imgavatarseven"
  | "iconsfileicfold3"
  | "star5"
  | "iconssolidic6"
  | "name5"
  | "filesize5"
  | "dot5"
  | "filescounter5"
  | "imgavatareight"
  | "divider"
  | "titleTwenty"
  | "plusOne"
  | "filescounter6"
  | "arrowdownThree"
  | "stack"
  | "star6"
  | "iconssolidic7"
  | "weburl"
  | "filesize6"
  | "dot6"
  | "filescounter7"
  | "imgavatarrand1"
  | "imgavatarrandOne"
  | "stack1"
  | "star7"
  | "iconssolidic8"
  | "filenametwo"
  | "filesize7"
  | "dot7"
  | "filescounter8"
  | "imgavatarthree1"
  | "cut"
  | "star8"
  | "iconssolidic9"
  | "filenamethree"
  | "filesize8"
  | "dot8"
  | "filescounter9"
  | "imgavatarfour1"
  | "grid1"
  | "star9"
  | "iconssolidic10"
  | "weburl1"
  | "filesize9"
  | "dot9"
  | "filescounter10"
  | "imgavatarfive1"
  | "stack2"
  | "star10"
  | "iconssolidic11"
  | "weburl2"
  | "filesize10"
  | "dot10"
  | "filescounter11"
  | "imgavatarrand2"
  | "imgavatarrandone1"
  | "imgavatarrandTwo"
  | "more"
  | "offer"
  | "star11"
  | "iconssolidic12"
  | "weburl3"
  | "filesize11"
  | "dot11"
  | "filescounter12"
  | "imgavatarrand3"
  | "imgavatarrandone2"
  | "imgavatarrandtwo1"
  | "more1"
  | "grid2"
  | "star12"
  | "iconssolidic13"
  | "weburl4"
  | "filesize12"
  | "dot12"
  | "filescounter13"
  | "imgavatarrand4"
  | "imgavatarrandone3"
  | "imgavatarrandtwo2"
  | "more2"
  | "stack3"
  | "star13"
  | "iconssolidic14"
  | "weburl5"
  | "filesize13"
  | "dot13"
  | "filescounter14"
  | "imgavatarrand5"
  | "imgavatarrandone4"
  | "imgavatarrandtwo3"
  | "more3"
  | "forward"
  | "star14"
  | "iconssolidic15"
  | "weburl6"
  | "filesize14"
  | "dot14"
  | "filescounter15"
  | "imgavatarrand6"
  | "imgavatarrandone5"
  | "imgavatarrandtwo4"
  | "eight"
  | "stack4"
  | "star15"
  | "iconssolidic16"
  | "weburl7"
  | "filesize15"
  | "dot15"
  | "filescounter16"
  | "imgavatarrand7"
  | "imgavatarrandone6"
  | "imgavatarrandtwo5"
  | "eight1"
  | "iconsfileicfold4"
  | "star16"
  | "iconssolidic17"
  | "weburl8"
  | "filesize16"
  | "dot16"
  | "filescounter17"
  | "imgavatarrand8"
  | "imgavatarrandone7"
  | "imgavatarrandtwo6"
  | "eight2"
  | "iconsfileicfold5"
  | "star17"
  | "iconssolidic18"
  | "weburl9"
  | "filesize17"
  | "dot17"
  | "filescounter18"
  | "imgavatarrand9"
  | "imgavatarrandone8"
  | "imgavatarrandtwo7"
  | "eight3"
  | "checkmark2"
  | "labelThree"
  | "delete"
  | "share"
> &
  Partial<{
    subheader: string;
    dashboard: string;
    title: string;
    icon: string;
    titleOne: string;
    iconOne: string;
    titleTwo: string;
    iconTwo: string;
    titleThree: string;
    iconThree: string;
    titleFour: string;
    iconFour: string;
    titleFive: string;
    subheaderOne: string;
    user: string;
    titleSix: string;
    arrowright: string;
    iconFive: string;
    titleSeven: string;
    arrowrightOne: string;
    cart: string;
    titleEight: string;
    arrowrightTwo: string;
    call: string;
    titleNine: string;
    arrowrightThree: string;
    sort: string;
    titleTen: string;
    arrowrightFour: string;
    iconSix: string;
    titleEleven: string;
    arrowrightFive: string;
    iconSeven: string;
    titleTwelve: string;
    arrowrightSix: string;
    volume: string;
    titleThirteen: string;
    bag: string;
    titleFourteen: string;
    p32: string;
    callOne: string;
    titleFifteen: string;
    calendar: string;
    titleSixteen: string;
    iconEight: string;
    titleSeventeen: string;
    label: string;
    nameforty: string;
    email: string;
    upgradeToPro: string;
    badge: string;
    titleEighteen: string;
    upload: string;
    wrap: string;
    labelOne: string;
    arrowdown: string;
    labelTwo: string;
    arrowdownOne: string;
    iconssolidic: string;
    grid: string;
    titleNineteen: string;
    plus: string;
    folderscounter: string;
    arrowdownTwo: string;
    checkmark: string;
    star: string;
    iconssolidic1: string;
    name: string;
    filesize: string;
    dot: string;
    filescounter: string;
    imgavatarrand: string;
    checkmark1: string;
    star1: string;
    iconssolidic2: string;
    name1: string;
    filesize1: string;
    dot1: string;
    filescounter1: string;
    imgavatartwo: string;
    imgavatarthree: string;
    iconsfileicfold: string;
    star2: string;
    iconssolidic3: string;
    name2: string;
    filesize2: string;
    dot2: string;
    filescounter2: string;
    imgavatarfour: string;
    imgavatarfive: string;
    iconsfileicfold1: string;
    star3: string;
    iconssolidic4: string;
    name3: string;
    filesize3: string;
    dot3: string;
    filescounter3: string;
    imgavatarsix: string;
    iconsfileicfold2: string;
    star4: string;
    iconssolidic5: string;
    name4: string;
    filesize4: string;
    dot4: string;
    filescounter4: string;
    imgavatarseven: string;
    iconsfileicfold3: string;
    star5: string;
    iconssolidic6: string;
    name5: string;
    filesize5: string;
    dot5: string;
    filescounter5: string;
    imgavatareight: string;
    divider: string;
    titleTwenty: string;
    plusOne: string;
    filescounter6: string;
    arrowdownThree: string;
    stack: string;
    star6: string;
    iconssolidic7: string;
    weburl: string;
    filesize6: string;
    dot6: string;
    filescounter7: string;
    imgavatarrand1: string;
    imgavatarrandOne: string;
    stack1: string;
    star7: string;
    iconssolidic8: string;
    filenametwo: string;
    filesize7: string;
    dot7: string;
    filescounter8: string;
    imgavatarthree1: string;
    cut: string;
    star8: string;
    iconssolidic9: string;
    filenamethree: string;
    filesize8: string;
    dot8: string;
    filescounter9: string;
    imgavatarfour1: string;
    grid1: string;
    star9: string;
    iconssolidic10: string;
    weburl1: string;
    filesize9: string;
    dot9: string;
    filescounter10: string;
    imgavatarfive1: string;
    stack2: string;
    star10: string;
    iconssolidic11: string;
    weburl2: string;
    filesize10: string;
    dot10: string;
    filescounter11: string;
    imgavatarrand2: string;
    imgavatarrandone1: string;
    imgavatarrandTwo: string;
    more: string;
    offer: string;
    star11: string;
    iconssolidic12: string;
    weburl3: string;
    filesize11: string;
    dot11: string;
    filescounter12: string;
    imgavatarrand3: string;
    imgavatarrandone2: string;
    imgavatarrandtwo1: string;
    more1: string;
    grid2: string;
    star12: string;
    iconssolidic13: string;
    weburl4: string;
    filesize12: string;
    dot12: string;
    filescounter13: string;
    imgavatarrand4: string;
    imgavatarrandone3: string;
    imgavatarrandtwo2: string;
    more2: string;
    stack3: string;
    star13: string;
    iconssolidic14: string;
    weburl5: string;
    filesize13: string;
    dot13: string;
    filescounter14: string;
    imgavatarrand5: string;
    imgavatarrandone4: string;
    imgavatarrandtwo3: string;
    more3: string;
    forward: string;
    star14: string;
    iconssolidic15: string;
    weburl6: string;
    filesize14: string;
    dot14: string;
    filescounter15: string;
    imgavatarrand6: string;
    imgavatarrandone5: string;
    imgavatarrandtwo4: string;
    eight: string;
    stack4: string;
    star15: string;
    iconssolidic16: string;
    weburl7: string;
    filesize15: string;
    dot15: string;
    filescounter16: string;
    imgavatarrand7: string;
    imgavatarrandone6: string;
    imgavatarrandtwo5: string;
    eight1: string;
    iconsfileicfold4: string;
    star16: string;
    iconssolidic17: string;
    weburl8: string;
    filesize16: string;
    dot16: string;
    filescounter17: string;
    imgavatarrand8: string;
    imgavatarrandone7: string;
    imgavatarrandtwo6: string;
    eight2: string;
    iconsfileicfold5: string;
    star17: string;
    iconssolidic18: string;
    weburl9: string;
    filesize17: string;
    dot17: string;
    filescounter18: string;
    imgavatarrand9: string;
    imgavatarrandone8: string;
    imgavatarrandtwo7: string;
    eight3: string;
    checkmark2: string;
    labelThree: string;
    delete: string;
    share: string;
  }>;
type SideBarMenuType = {
  icon?: JSX.Element;
  label: JSX.Element | string;
  suffix?: JSX.Element;
  href?: string;
  target?: string;
  active?: boolean;
}[];

const AppRowlogo: React.FC<AppRowlogoProps> = (props) => {
  const sideBarMenu: SideBarMenuType = [
    {
      icon: (
        <Img
          className="h-6 mb-0.5 w-6"
          alt="dashboard"
          src={props?.dashboard}
        />
      ),
      label: <>{props?.title}</>,
      href: "/app",
      active: window.location.pathname === "/app",
    },
    {
      icon: <Img className="h-6 w-6" alt="icon" src={props?.icon} />,
      label: <>{props?.titleOne}</>,
      href: "/ecommerce",
      active: window.location.pathname === "/ecommerce",
    },
    {
      icon: <Img className="h-6 w-6" alt="icon_One" src={props?.iconOne} />,
      label: <>{props?.titleTwo}</>,
      href: "/analytics",
      active: window.location.pathname === "/analytics",
    },
    {
      icon: (
        <Img className="h-6 mb-0.5 w-6" alt="icon_Two" src={props?.iconTwo} />
      ),
      label: <>{props?.titleThree}</>,
      href: "/banking",
      active: window.location.pathname === "/banking",
    },
    {
      icon: (
        <Img
          className="h-6 mb-0.5 w-6"
          alt="icon_Three"
          src={props?.iconThree}
        />
      ),
      label: <>{props?.titleFour}</>,
      href: "/booking",
      active: window.location.pathname === "/booking",
    },
    {
      icon: <Img className="h-6 w-6" alt="icon_Four" src={props?.iconFour} />,
      label: <>{props?.titleFive}</>,
      href: "/file",
      active: window.location.pathname === "/file",
    },
  ];
  const sideBarMenu1: SideBarMenuType = [
    {
      icon: <Img className="h-6 mb-0.5 w-6" alt="volume" src={props?.volume} />,
      label: <Text>{props?.titleThirteen}</Text>,
      href: "/file",
      active: window.location.pathname === "/file",
    },
    {
      icon: <Img className="h-6 w-6" alt="bag" src={props?.bag} />,
      label: (
        <>
          <Text>{props?.titleFourteen}</Text>
          {!!props?.p32 ? (
            <Button
              className="!text-red-900 cursor-pointer font-bold font-publicsans h-6 min-w-[35px] rounded-md text-center text-xs"
              shape="round"
              color="deep_orange_500_28"
              size="xs"
              variant="fill"
            >
              {props?.p32}
            </Button>
          ) : null}
        </>
      ),
      href: "/mail",
      active: window.location.pathname === "/mail",
    },
    {
      icon: <Img className="h-6 w-6" alt="call_One" src={props?.callOne} />,
      label: <Text>{props?.titleFifteen}</Text>,
      href: "/chat",
      active: window.location.pathname === "/chat",
    },
    {
      icon: <Img className="h-6 w-6" alt="calendar" src={props?.calendar} />,
      label: <Text>{props?.titleSixteen}</Text>,
      href: "/calendar",
      active: window.location.pathname === "/calendar",
    },
    {
      icon: <Img className="h-6 w-6" alt="icon_Eight" src={props?.iconEight} />,
      label: <Text>{props?.titleSeventeen}</Text>,
      href: "/kanban",
      active: window.location.pathname === "/kanban",
    },
  ];
  const [wrapvalue, setWrapvalue] = React.useState<string>("");

  return (
    <>
      <div className={props.className}>
        <Sidebar className="!sticky !w-[280px] bg-white-A700 border-blue_gray-300_33 border-dashed border-r flex h-screen md:hidden justify-start overflow-auto top-[0]">
          <div className="flex flex-col items-start justify-start mb-[1728px] mx-auto pb-2 pt-6 px-4 w-[248px]">
            <Img
              className="h-10 md:h-auto object-cover w-10"
              src="images/img_logo.png"
              alt="logo"
            />
          </div>
          <Menu
            menuItemStyles={{
              button: {
                padding: "9px 9px 9px 8px",
                gap: "16px",
                width: "100%",
                color: "#637381",
                fontWeight: 500,
                fontSize: "14px",
                fontFamily: "Public Sans",
                borderRadius: "8px",
                [`&:hover, &.ps-active`]: {
                  color: "#00a76f",
                  fontWeight: "600 !important",
                  backgroundColor: "#00a76f14 !important",
                },
              },
            }}
            className="flex flex-col items-center justify-end mb-[789px] mt-[58px] pt-[13px] px-4 w-[89%]"
          >
            <div className="flex flex-col items-center justify-start w-full">
              <Text
                className="bg-white-A700 justify-center pb-2.5 pl-3 sm:pr-5 pr-[35px] pt-[18px] rounded-lg text-[11px] text-blue_gray-300 uppercase w-full"
                size="txtPublicSansBold11"
              >
                {props?.subheader}
              </Text>
              <div className="flex flex-col gap-[2.87px] items-center justify-start mt-1 w-full">
                {sideBarMenu?.map((menu, i) => (
                  <MenuItem key={`sideBarMenuItem${i}`} {...menu}>
                    {menu.label}
                  </MenuItem>
                ))}
              </div>
            </div>
            <div className="flex flex-col items-center justify-end mt-1 w-full">
              <Text
                className="bg-white-A700 justify-center pb-2.5 pl-3 sm:pr-5 pr-[35px] pt-[18px] rounded-lg text-[11px] text-blue_gray-300 uppercase w-full"
                size="txtPublicSansBold11"
              >
                {props?.subheaderOne}
              </Text>
              <div className="flex flex-col items-center justify-start mt-1 w-full">
                <SubMenu
                  icon={
                    <Img className="h-6 w-6" alt="user" src={props?.user} />
                  }
                  label={
                    <>
                      <Text className="flex-1">{props?.titleSix}</Text>
                      <div className="flex flex-col items-center justify-center pl-2 w-auto">
                        <Img
                          className="h-4 w-4"
                          alt="arrowright"
                          src={props?.arrowright}
                        />
                      </div>
                    </>
                  }
                >
                  <MenuItem>Submenu Item</MenuItem>
                </SubMenu>
                <SubMenu
                  icon={
                    <Img
                      className="h-6 w-6"
                      alt="icon_Five"
                      src={props?.iconFive}
                    />
                  }
                  label={
                    <>
                      <Text className="flex-1">{props?.titleSeven}</Text>
                      <div className="flex flex-col items-center justify-center pl-2 w-auto">
                        <Img
                          className="h-4 w-4"
                          alt="arrowright_One"
                          src={props?.arrowrightOne}
                        />
                      </div>
                    </>
                  }
                >
                  <MenuItem>Submenu Item</MenuItem>
                </SubMenu>
                <SubMenu
                  icon={
                    <Img className="h-6 w-6" alt="cart" src={props?.cart} />
                  }
                  label={
                    <>
                      <Text className="flex-1">{props?.titleEight}</Text>
                      <div className="flex flex-col items-center justify-center pl-2 w-auto">
                        <Img
                          className="h-4 w-4"
                          alt="arrowright_Two"
                          src={props?.arrowrightTwo}
                        />
                      </div>
                    </>
                  }
                >
                  <MenuItem>Submenu Item</MenuItem>
                </SubMenu>
                <SubMenu
                  icon={
                    <Img className="h-6 w-6" alt="call" src={props?.call} />
                  }
                  label={
                    <>
                      <Text className="flex-1">{props?.titleNine}</Text>
                      <div className="flex flex-col items-center justify-center pl-2 w-auto">
                        <Img
                          className="h-4 w-4"
                          alt="arrowright_Three"
                          src={props?.arrowrightThree}
                        />
                      </div>
                    </>
                  }
                >
                  <MenuItem>Submenu Item</MenuItem>
                </SubMenu>
                <SubMenu
                  icon={
                    <Img
                      className="h-6 my-0.5 w-6"
                      alt="sort"
                      src={props?.sort}
                    />
                  }
                  label={
                    <>
                      <Text className="flex-1 mt-[5px]">{props?.titleTen}</Text>
                      <div className="flex flex-col items-center justify-center mt-[5px] pl-2 w-auto">
                        <Img
                          className="h-4 w-4"
                          alt="arrowright_Four"
                          src={props?.arrowrightFour}
                        />
                      </div>
                    </>
                  }
                >
                  <MenuItem>Submenu Item</MenuItem>
                </SubMenu>
                <SubMenu
                  icon={
                    <Img
                      className="h-6 w-6"
                      alt="icon_Six"
                      src={props?.iconSix}
                    />
                  }
                  label={
                    <>
                      <Text className="flex-1">{props?.titleEleven}</Text>
                      <div className="flex flex-col items-center justify-center pl-2 w-auto">
                        <Img
                          className="h-4 w-4"
                          alt="arrowright_Five"
                          src={props?.arrowrightFive}
                        />
                      </div>
                    </>
                  }
                >
                  <MenuItem>Submenu Item</MenuItem>
                </SubMenu>
                <SubMenu
                  icon={
                    <Img
                      className="h-6 w-6"
                      alt="icon_Seven"
                      src={props?.iconSeven}
                    />
                  }
                  label={
                    <>
                      <Text className="flex-1">{props?.titleTwelve}</Text>
                      <div className="flex flex-col items-center justify-center pl-2 w-auto">
                        <Img
                          className="h-4 w-4"
                          alt="arrowright_Six"
                          src={props?.arrowrightSix}
                        />
                      </div>
                    </>
                  }
                >
                  <MenuItem>Submenu Item</MenuItem>
                </SubMenu>
                {sideBarMenu1?.map((menu, i) => (
                  <MenuItem key={`sideBarMenu1Item${i}`} {...menu}>
                    {menu.label}
                  </MenuItem>
                ))}
              </div>
            </div>
          </Menu>
          <div className="mb-[154px] ml-[116px] mr-[86px] mt-[1592px] relative w-[28%]">
            <div className="bg-gray-300 flex flex-col items-center justify-center mt-auto rounded-[50%] w-12">
              <div className="flex flex-col h-12 md:h-auto items-center justify-center rounded-[50%] w-12">
                <Img
                  className="h-12 md:h-auto rounded-[50%] w-12"
                  src="images/img_imgavatar1_48x48.png"
                  alt="imgavatarOne"
                />
              </div>
            </div>
            {!!props?.label ? (
              <Text
                className="absolute bg-green-A700_01 h-6 justify-center px-1.5 py-0.5 right-[0] rounded-md text-center text-white-A700 text-xs top-[0] w-auto"
                size="txtPublicSansBold12WhiteA700"
              >
                {props?.label}
              </Text>
            ) : null}
          </div>
          <Text
            className="mb-[118px] mt-[1658px] mx-auto text-base text-blue_gray-900 text-center w-auto"
            size="txtPublicSansSemiBold16"
          >
            {props?.nameforty}
          </Text>
          <Text
            className="mb-[92px] mt-[1686px] mx-auto text-blue_gray-300 text-center text-sm w-auto"
            size="txtPublicSansRegular14Bluegray300"
          >
            {props?.email}
          </Text>
          <Button
            className="cursor-pointer font-bold font-publicsans h-9 mb-10 min-w-[124px] mt-[1724px] mx-auto text-center text-sm"
            shape="round"
            color="blue_gray_900"
            size="md"
            variant="fill"
          >
            {props?.upgradeToPro}
          </Button>
        </Sidebar>
        <div className="flex-1 h-[1465px] md:h-[2598px] sm:h-[3605px] relative w-full">
          <div
            className="absolute bg-cover bg-no-repeat bg-white-A700 flex flex-col h-20 md:h-auto inset-x-[0] items-center justify-between max-w-[1160px] mx-auto px-10 sm:px-5 top-[0] w-full"
            style={{ backgroundImage: "url('images/img_mainheader.svg')" }}
          >
            <div className="flex flex-row md:gap-10 items-start justify-between w-full">
              <Button
                className="flex h-9 items-center justify-center mt-1 w-9"
                shape="circle"
                size="md"
              >
                <Img className="h-5" src="images/img_search.svg" alt="search" />
              </Button>
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
                  {!!props?.badge ? (
                    <Text
                      className="absolute bg-deep_orange-500 flex h-5 items-center justify-center right-[0] rounded-[50%] text-center text-white-A700 text-xs top-[0] w-5"
                      size="txtPublicSansBold12WhiteA700"
                    >
                      {props?.badge}
                    </Text>
                  ) : null}
                </div>
                <Button
                  className="flex h-10 items-center justify-center rounded-[50%] w-10"
                  shape="circle"
                  size="md"
                >
                  <Img
                    className="h-6"
                    src="images/img_user_blue_gray_500_40x40.svg"
                    alt="user_One"
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
          <div className="absolute flex flex-col gap-10 h-full inset-[0] items-center justify-center m-auto max-w-[1160px] px-10 sm:px-5 py-[88px] w-full">
            <div className="flex flex-row md:gap-10 items-center justify-between w-full">
              {!!props?.titleEighteen ? (
                <Text
                  className="flex-1 text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl w-auto"
                  size="txtPublicSansBold24"
                >
                  {props?.titleEighteen}
                </Text>
              ) : null}
              {!!props?.upload ? (
                <Button
                  className="cursor-pointer flex items-center justify-center min-w-[100px]"
                  leftIcon={
                    <Img
                      className="h-5 mr-2"
                      src="images/img_icons_solid_icevaclouduploadfill.svg"
                      alt="icons/solid/ic-eva:cloud-upload-fill"
                    />
                  }
                  shape="round"
                  color="blue_gray_900"
                  size="md"
                  variant="fill"
                >
                  <div className="font-bold font-publicsans text-center text-sm">
                    {props?.upload}
                  </div>
                </Button>
              ) : null}
            </div>
            <div className="bg-white-A700 flex md:flex-col flex-row gap-4 items-center justify-start w-full">
              <div className="flex sm:flex-1 flex-col items-start justify-start w-[260px] sm:w-full">
                {!!props?.wrap ? (
                  <Input
                    name="wrap"
                    placeholder="Search"
                    value={wrapvalue}
                    onChange={(e) => setWrapvalue(e)}
                    className="!placeholder:text-blue_gray-300 !text-blue_gray-300 font-publicsans p-0 text-left text-sm w-full"
                    wrapClassName="flex w-full"
                    prefix={
                      <Img
                        className="cursor-pointer h-6 mr-2 my-auto"
                        src="images/img_search_blue_gray_300.svg"
                        alt="search"
                      />
                    }
                    suffix={
                      <CloseSVG
                        fillColor="#919eab"
                        className="cursor-pointer h-6 my-auto"
                        onClick={() => setWrapvalue("")}
                        style={{
                          visibility:
                            wrapvalue?.length <= 0 ? "hidden" : "visible",
                        }}
                        height={24}
                        width={24}
                        viewBox="0 0 24 24"
                      />
                    }
                    shape="round"
                    color="blue_gray_300_33"
                    size="xs"
                    variant="outline"
                  ></Input>
                ) : null}
              </div>
              <div className="flex flex-1 flex-row gap-2 items-center justify-end w-full">
                <div className="flex flex-row gap-2 h-9 md:h-auto items-center justify-center px-2 rounded-lg">
                  {!!props?.labelOne ? (
                    <Text
                      className="text-blue_gray-900 text-center text-sm w-auto"
                      size="txtPublicSansBold14"
                    >
                      {props?.labelOne}
                    </Text>
                  ) : null}
                  {!!props?.arrowdown ? (
                    <Img
                      className="h-5 w-5"
                      alt="arrowdown"
                      src={props?.arrowdown}
                    />
                  ) : null}
                </div>
                <div className="flex flex-row gap-2 h-9 md:h-auto items-center justify-center px-2 rounded-lg w-auto">
                  {!!props?.labelTwo ? (
                    <Text
                      className="text-blue_gray-900 text-center text-sm w-auto"
                      size="txtPublicSansBold14"
                    >
                      {props?.labelTwo}
                    </Text>
                  ) : null}
                  {!!props?.arrowdownOne ? (
                    <Img
                      className="h-5 w-5"
                      alt="arrowdown_One"
                      src={props?.arrowdownOne}
                    />
                  ) : null}
                </div>
              </div>
              <div className="bg-white-A700 border border-blue_gray-300_14 border-solid flex flex-row gap-1 items-start justify-start p-1 rounded-lg w-auto">
                {!!props?.iconssolidic ? (
                  <Button
                    className="flex h-9 items-center justify-center w-9"
                    shape="round"
                    color="blue_gray_300_14"
                    size="md"
                    variant="fill"
                  >
                    <Img
                      className="h-5"
                      alt="iconssolidic"
                      src={props?.iconssolidic}
                    />
                  </Button>
                ) : null}
                {!!props?.grid ? (
                  <Button
                    className="flex h-9 items-center justify-center w-9"
                    shape="round"
                    size="md"
                  >
                    <Img className="h-5" alt="grid" src={props?.grid} />
                  </Button>
                ) : null}
              </div>
            </div>
            <div className="h-[1119px] md:h-[2140px] sm:h-[3259px] relative w-[1120px] md:w-full">
              <div className="absolute flex flex-col gap-10 h-full inset-[0] items-center justify-start m-auto max-w-[1080px] w-full">
                <div className="flex flex-col gap-6 items-start justify-start w-full">
                  <div className="bg-white-A700 flex md:flex-col flex-row md:gap-5 items-center justify-start w-full">
                    <div className="flex flex-1 flex-col gap-1 items-start justify-center w-full">
                      <div className="flex flex-row gap-2 items-center justify-start w-auto">
                        {!!props?.titleTwenty ? (
                          <Text
                            className="text-blue_gray-900 text-lg w-auto"
                            size="txtPublicSansBold18Bluegray900"
                          >
                            {props?.titleTwenty}
                          </Text>
                        ) : null}
                        {!!props?.plusOne ? (
                          <Button
                            className="flex h-7 items-center justify-center rounded-[50%] w-7"
                            shape="circle"
                            color="teal_500"
                            size="sm"
                            variant="fill"
                          >
                            <Img
                              className="h-[18px]"
                              alt="plus_One"
                              src={props?.plusOne}
                            />
                          </Button>
                        ) : null}
                      </div>
                      {!!props?.filescounter6 ? (
                        <Text
                          className="text-blue_gray-300 text-sm w-auto"
                          size="txtPublicSansRegular14Bluegray300"
                        >
                          {props?.filescounter6}
                        </Text>
                      ) : null}
                    </div>
                    {!!props?.arrowdownThree ? (
                      <Button
                        className="flex h-9 items-center justify-center w-9"
                        shape="circle"
                        size="md"
                      >
                        <Img
                          className="h-5"
                          alt="arrowdown_Three"
                          src={props?.arrowdownThree}
                        />
                      </Button>
                    ) : null}
                  </div>
                  <div className="flex md:flex-col flex-row gap-6 items-start justify-start w-full">
                    <List
                      className="md:flex-1 sm:flex-col flex-row gap-6 grid sm:grid-cols-1 grid-cols-2 w-[49%] md:w-full"
                      orientation="horizontal"
                    >
                      <div className="bg-white-A700 border border-blue_gray-300_28 border-solid flex flex-col items-start justify-start p-5 rounded-[16px] shadow-bs11 w-full">
                        <div className="flex flex-col gap-2 items-start justify-start w-full">
                          <div className="flex flex-col gap-2 items-start justify-start w-full">
                            <div className="flex flex-row items-start justify-between w-full">
                              <div className="flex flex-col items-center justify-start mt-5 w-9">
                                <div className="flex flex-col items-center justify-center p-2 w-9">
                                  {!!props?.checkmark1 ? (
                                    <Img
                                      className="h-5 w-5"
                                      alt="checkmark"
                                      src={props?.checkmark1}
                                    />
                                  ) : null}
                                </div>
                              </div>
                              <div className="flex flex-row items-center justify-start mb-3 pr-2 pt-2 w-auto">
                                <div className="flex flex-col items-center justify-start w-9">
                                  <div className="flex flex-col items-center justify-center p-2 w-9">
                                    {!!props?.star1 ? (
                                      <Img
                                        className="h-5 w-5"
                                        alt="star"
                                        src={props?.star1}
                                      />
                                    ) : null}
                                  </div>
                                </div>
                                {!!props?.iconssolidic2 ? (
                                  <Button
                                    className="flex h-9 items-center justify-center w-9"
                                    shape="circle"
                                    size="md"
                                  >
                                    <Img
                                      className="h-5"
                                      alt="iconssolidic"
                                      src={props?.iconssolidic2}
                                    />
                                  </Button>
                                ) : null}
                              </div>
                            </div>
                            <div className="flex flex-col gap-1 items-start justify-start w-full">
                              {!!props?.name1 ? (
                                <Text
                                  className="text-base text-blue_gray-900 w-full"
                                  size="txtPublicSansSemiBold16"
                                >
                                  {props?.name1}
                                </Text>
                              ) : null}
                              <div className="flex flex-row gap-1.5 items-center justify-center w-auto">
                                {!!props?.filesize1 ? (
                                  <Text
                                    className="text-blue_gray-300 text-xs w-auto"
                                    size="txtPublicSansRegular12Bluegray300"
                                  >
                                    {props?.filesize1}
                                  </Text>
                                ) : null}
                                {!!props?.dot1 ? (
                                  <div className="bg-blue_gray-300 h-0.5 rounded-[50%] w-0.5"></div>
                                ) : null}
                                {!!props?.filescounter1 ? (
                                  <Text
                                    className="text-blue_gray-300 text-xs w-auto"
                                    size="txtPublicSansRegular12Bluegray300"
                                  >
                                    {props?.filescounter1}
                                  </Text>
                                ) : null}
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col items-end justify-end w-6">
                            <div
                              className="bg-cover bg-no-repeat flex flex-col h-6 items-center justify-center outline outline-[2px] outline-white-A700 rounded-[50%] w-6"
                              style={{
                                backgroundImage:
                                  "url('images/img_avatar1.png')",
                              }}
                            >
                              <div className="flex flex-col h-6 md:h-auto items-center justify-center rounded-[50%] w-6">
                                {!!props?.imgavatartwo ? (
                                  <Img
                                    className="h-6 md:h-auto rounded-[50%] w-6"
                                    alt="imgavatarTwo"
                                    src={props?.imgavatartwo}
                                  />
                                ) : null}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-white-A700 border border-blue_gray-300_28 border-solid flex flex-col items-start justify-start p-5 rounded-[16px] shadow-bs11 w-full">
                        <div className="flex flex-col gap-2 items-start justify-start w-full">
                          <div className="flex flex-row items-start justify-between w-full">
                            <div className="flex flex-col items-center justify-start mt-5 w-9">
                              <div className="flex flex-col items-center justify-center p-2 w-9">
                                {!!props?.checkmark1 ? (
                                  <Img
                                    className="h-5 w-5"
                                    alt="checkmark"
                                    src={props?.checkmark1}
                                  />
                                ) : null}
                              </div>
                            </div>
                            <div className="flex flex-row items-center justify-start mb-3 pr-2 pt-2 w-auto">
                              <div className="flex flex-col items-center justify-start w-9">
                                <div className="flex flex-col items-center justify-center p-2 w-9">
                                  {!!props?.star1 ? (
                                    <Img
                                      className="h-5 w-5"
                                      alt="star"
                                      src={props?.star1}
                                    />
                                  ) : null}
                                </div>
                              </div>
                              {!!props?.iconssolidic2 ? (
                                <Button
                                  className="flex h-9 items-center justify-center w-9"
                                  shape="circle"
                                  size="md"
                                >
                                  <Img
                                    className="h-5"
                                    alt="iconssolidic"
                                    src={props?.iconssolidic2}
                                  />
                                </Button>
                              ) : null}
                            </div>
                          </div>
                          <div className="flex flex-col gap-1 items-start justify-start w-full">
                            {!!props?.name1 ? (
                              <Text
                                className="text-base text-blue_gray-900 w-full"
                                size="txtPublicSansSemiBold16"
                              >
                                {props?.name1}
                              </Text>
                            ) : null}
                            <div className="flex flex-row gap-1.5 items-center justify-center w-auto">
                              {!!props?.filesize1 ? (
                                <Text
                                  className="text-blue_gray-300 text-xs w-auto"
                                  size="txtPublicSansRegular12Bluegray300"
                                >
                                  {props?.filesize1}
                                </Text>
                              ) : null}
                              {!!props?.dot1 ? (
                                <div className="bg-blue_gray-300 h-0.5 rounded-[50%] w-0.5"></div>
                              ) : null}
                              {!!props?.filescounter1 ? (
                                <Text
                                  className="text-blue_gray-300 text-xs w-auto"
                                  size="txtPublicSansRegular12Bluegray300"
                                >
                                  {props?.filescounter1}
                                </Text>
                              ) : null}
                            </div>
                          </div>
                          <div className="flex relative w-11">
                            <div
                              className="bg-cover bg-no-repeat flex flex-col h-6 items-center justify-center ml-[undefinedpx] my-auto outline outline-[2px] outline-white-A700 rounded-[50%] w-6 z-[1]"
                              style={{
                                backgroundImage:
                                  "url('images/img_avatar1.png')",
                              }}
                            >
                              <div className="flex flex-col h-6 md:h-auto items-center justify-center rounded-[50%] w-6">
                                {!!props?.imgavatartwo ? (
                                  <Img
                                    className="h-6 md:h-auto rounded-[50%] w-6"
                                    alt="imgavatarTwo"
                                    src={props?.imgavatartwo}
                                  />
                                ) : null}
                              </div>
                            </div>
                            <div
                              className="bg-cover bg-no-repeat flex flex-col h-6 items-center justify-center ml-[-4px] my-auto outline outline-[2px] outline-white-A700 rounded-[50%] w-6 z-[1]"
                              style={{
                                backgroundImage:
                                  "url('images/img_avatar2_24x24.png')",
                              }}
                            >
                              <div className="flex flex-col h-6 md:h-auto items-center justify-center rounded-[50%] w-6">
                                {!!props?.imgavatarthree ? (
                                  <Img
                                    className="h-6 md:h-auto rounded-[50%] w-6"
                                    alt="imgavatarThree"
                                    src={props?.imgavatarthree}
                                  />
                                ) : null}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </List>
                    <List
                      className="md:flex-1 sm:flex-col flex-row gap-6 grid sm:grid-cols-1 grid-cols-2 w-[49%] md:w-full"
                      orientation="horizontal"
                    >
                      <div className="bg-white-A700 border border-blue_gray-300_28 border-solid flex flex-col items-start justify-start p-5 rounded-[16px] w-full">
                        <div className="flex flex-col gap-2 items-start justify-start w-full">
                          <div className="flex flex-row items-start justify-between w-full">
                            {!!props?.iconsfileicfold5 ? (
                              <Img
                                className="h-9 mt-5 w-9"
                                alt="iconsfileicfold"
                                src={props?.iconsfileicfold5}
                              />
                            ) : null}
                            <div className="flex flex-row items-center justify-start mb-3 pr-2 pt-2 w-auto">
                              <div className="flex flex-col items-center justify-start w-9">
                                <div className="flex flex-col items-center justify-center p-2 w-9">
                                  {!!props?.star17 ? (
                                    <Img
                                      className="h-5 w-5"
                                      alt="star"
                                      src={props?.star17}
                                    />
                                  ) : null}
                                </div>
                              </div>
                              {!!props?.iconssolidic18 ? (
                                <Button
                                  className="flex h-9 items-center justify-center w-9"
                                  shape="circle"
                                  size="md"
                                >
                                  <Img
                                    className="h-5"
                                    alt="iconssolidic"
                                    src={props?.iconssolidic18}
                                  />
                                </Button>
                              ) : null}
                            </div>
                          </div>
                          <div className="flex flex-col gap-1 items-start justify-start w-full">
                            {!!props?.weburl9 ? (
                              <Text
                                className="leading-[22.00px] max-w-[212px] md:max-w-full text-blue_gray-900 text-sm"
                                size="txtPublicSansSemiBold14"
                              >
                                {props?.weburl9}
                              </Text>
                            ) : null}
                            <div className="flex flex-row gap-1.5 items-center justify-center w-auto">
                              {!!props?.filesize17 ? (
                                <Text
                                  className="text-blue_gray-300 text-xs w-auto"
                                  size="txtPublicSansRegular12Bluegray300"
                                >
                                  {props?.filesize17}
                                </Text>
                              ) : null}
                              {!!props?.dot17 ? (
                                <div className="bg-blue_gray-300 h-0.5 rounded-[50%] w-0.5"></div>
                              ) : null}
                              {!!props?.filescounter18 ? (
                                <Text
                                  className="text-blue_gray-300 text-xs w-auto"
                                  size="txtPublicSansRegular12Bluegray300"
                                >
                                  {props?.filescounter18}
                                </Text>
                              ) : null}
                            </div>
                          </div>
                          <div className="flex relative w-11">
                            <div
                              className="bg-cover bg-no-repeat flex flex-col h-6 items-center justify-center ml-[undefinedpx] my-auto outline outline-[2px] outline-white-A700 rounded-[50%] w-6 z-[1]"
                              style={{
                                backgroundImage:
                                  "url('images/img_avatar1.png')",
                              }}
                            >
                              <div className="flex flex-col h-6 md:h-auto items-center justify-center rounded-[50%] w-6">
                                {!!props?.imgavatarrand9 ? (
                                  <Img
                                    className="h-6 md:h-auto rounded-[50%] w-6"
                                    alt="imgavatarrand"
                                    src={props?.imgavatarrand9}
                                  />
                                ) : null}
                              </div>
                            </div>
                            <div
                              className="bg-cover bg-no-repeat flex flex-col h-6 items-center justify-center ml-[-4px] my-auto outline outline-[2px] outline-white-A700 rounded-[50%] w-6 z-[1]"
                              style={{
                                backgroundImage:
                                  "url('images/img_avatar2_24x24.png')",
                              }}
                            >
                              <div className="flex flex-col h-6 md:h-auto items-center justify-center rounded-[50%] w-6">
                                {!!props?.imgavatarrandone8 ? (
                                  <Img
                                    className="h-6 md:h-auto rounded-[50%] w-6"
                                    alt="imgavatarrand_One"
                                    src={props?.imgavatarrandone8}
                                  />
                                ) : null}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-white-A700 border border-blue_gray-300_28 border-solid flex flex-col items-start justify-start p-5 rounded-[16px] w-full">
                        <div className="flex flex-col gap-2 items-start justify-start w-full">
                          <div className="flex flex-col gap-2 items-start justify-start w-full">
                            <div className="flex flex-row items-start justify-between w-full">
                              {!!props?.iconsfileicfold5 ? (
                                <Img
                                  className="h-9 mt-5 w-9"
                                  alt="iconsfileicfold"
                                  src={props?.iconsfileicfold5}
                                />
                              ) : null}
                              <div className="flex flex-row items-center justify-start mb-3 pr-2 pt-2 w-auto">
                                <div className="flex flex-col items-center justify-start w-9">
                                  <div className="flex flex-col items-center justify-center p-2 w-9">
                                    {!!props?.star17 ? (
                                      <Img
                                        className="h-5 w-5"
                                        alt="star"
                                        src={props?.star17}
                                      />
                                    ) : null}
                                  </div>
                                </div>
                                {!!props?.iconssolidic18 ? (
                                  <Button
                                    className="flex h-9 items-center justify-center w-9"
                                    shape="circle"
                                    size="md"
                                  >
                                    <Img
                                      className="h-5"
                                      alt="iconssolidic"
                                      src={props?.iconssolidic18}
                                    />
                                  </Button>
                                ) : null}
                              </div>
                            </div>
                            <div className="flex flex-col gap-1 items-start justify-start w-full">
                              {!!props?.weburl9 ? (
                                <Text
                                  className="leading-[22.00px] max-w-[212px] md:max-w-full text-blue_gray-900 text-sm"
                                  size="txtPublicSansSemiBold14"
                                >
                                  {props?.weburl9}
                                </Text>
                              ) : null}
                              <div className="flex flex-row gap-1.5 items-center justify-center w-auto">
                                {!!props?.filesize17 ? (
                                  <Text
                                    className="text-blue_gray-300 text-xs w-auto"
                                    size="txtPublicSansRegular12Bluegray300"
                                  >
                                    {props?.filesize17}
                                  </Text>
                                ) : null}
                                {!!props?.dot17 ? (
                                  <div className="bg-blue_gray-300 h-0.5 rounded-[50%] w-0.5"></div>
                                ) : null}
                                {!!props?.filescounter18 ? (
                                  <Text
                                    className="text-blue_gray-300 text-xs w-auto"
                                    size="txtPublicSansRegular12Bluegray300"
                                  >
                                    {props?.filescounter18}
                                  </Text>
                                ) : null}
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col items-end justify-end w-6">
                            <div
                              className="bg-cover bg-no-repeat flex flex-col h-6 items-center justify-center outline outline-[2px] outline-white-A700 rounded-[50%] w-6"
                              style={{
                                backgroundImage:
                                  "url('images/img_avatar1.png')",
                              }}
                            >
                              <div className="flex flex-col h-6 md:h-auto items-center justify-center rounded-[50%] w-6">
                                {!!props?.imgavatarrand9 ? (
                                  <Img
                                    className="h-6 md:h-auto rounded-[50%] w-6"
                                    alt="imgavatarrand"
                                    src={props?.imgavatarrand9}
                                  />
                                ) : null}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </List>
                  </div>
                  <List
                    className="sm:flex-col flex-row gap-6 grid sm:grid-cols-1 grid-cols-2 justify-start w-auto sm:w-full"
                    orientation="horizontal"
                  >
                    <div className="bg-white-A700 border border-blue_gray-300_28 border-solid flex flex-col items-start justify-start p-5 rounded-[16px] w-[252px]">
                      <div className="flex flex-col gap-2 items-start justify-start w-full">
                        <div className="flex flex-col gap-2 items-start justify-start w-full">
                          <div className="flex flex-row items-start justify-between w-full">
                            {!!props?.iconsfileicfold5 ? (
                              <Img
                                className="h-9 mt-5 w-9"
                                alt="iconsfileicfold"
                                src={props?.iconsfileicfold5}
                              />
                            ) : null}
                            <div className="flex flex-row items-center justify-start mb-3 pr-2 pt-2 w-auto">
                              <div className="flex flex-col items-center justify-start w-9">
                                <div className="flex flex-col items-center justify-center p-2 w-9">
                                  {!!props?.star17 ? (
                                    <Img
                                      className="h-5 w-5"
                                      alt="star"
                                      src={props?.star17}
                                    />
                                  ) : null}
                                </div>
                              </div>
                              {!!props?.iconssolidic18 ? (
                                <Button
                                  className="flex h-9 items-center justify-center w-9"
                                  shape="circle"
                                  size="md"
                                >
                                  <Img
                                    className="h-5"
                                    alt="iconssolidic"
                                    src={props?.iconssolidic18}
                                  />
                                </Button>
                              ) : null}
                            </div>
                          </div>
                          <div className="flex flex-col gap-1 items-start justify-start w-full">
                            {!!props?.weburl9 ? (
                              <Text
                                className="leading-[22.00px] max-w-[212px] md:max-w-full text-blue_gray-900 text-sm"
                                size="txtPublicSansSemiBold14"
                              >
                                {props?.weburl9}
                              </Text>
                            ) : null}
                            <div className="flex flex-row gap-1.5 items-center justify-center w-auto">
                              {!!props?.filesize17 ? (
                                <Text
                                  className="text-blue_gray-300 text-xs w-auto"
                                  size="txtPublicSansRegular12Bluegray300"
                                >
                                  {props?.filesize17}
                                </Text>
                              ) : null}
                              {!!props?.dot17 ? (
                                <div className="bg-blue_gray-300 h-0.5 rounded-[50%] w-0.5"></div>
                              ) : null}
                              {!!props?.filescounter18 ? (
                                <Text
                                  className="text-blue_gray-300 text-xs w-auto"
                                  size="txtPublicSansRegular12Bluegray300"
                                >
                                  {props?.filescounter18}
                                </Text>
                              ) : null}
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col items-end justify-end w-6">
                          <div
                            className="bg-cover bg-no-repeat flex flex-col h-6 items-center justify-center outline outline-[2px] outline-white-A700 rounded-[50%] w-6"
                            style={{
                              backgroundImage: "url('images/img_avatar1.png')",
                            }}
                          >
                            <div className="flex flex-col h-6 md:h-auto items-center justify-center rounded-[50%] w-6">
                              {!!props?.imgavatarrand9 ? (
                                <Img
                                  className="h-6 md:h-auto rounded-[50%] w-6"
                                  alt="imgavatarrand"
                                  src={props?.imgavatarrand9}
                                />
                              ) : null}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white-A700 border border-blue_gray-300_28 border-solid flex flex-col items-start justify-start p-5 rounded-[16px] w-[252px]">
                      <div className="flex flex-col gap-2 items-start justify-start w-full">
                        <div className="flex flex-col gap-2 items-start justify-start w-full">
                          <div className="flex flex-row items-start justify-between w-full">
                            {!!props?.iconsfileicfold5 ? (
                              <Img
                                className="h-9 mt-5 w-9"
                                alt="iconsfileicfold"
                                src={props?.iconsfileicfold5}
                              />
                            ) : null}
                            <div className="flex flex-row items-center justify-start mb-3 pr-2 pt-2 w-auto">
                              <div className="flex flex-col items-center justify-start w-9">
                                <div className="flex flex-col items-center justify-center p-2 w-9">
                                  {!!props?.star17 ? (
                                    <Img
                                      className="h-5 w-5"
                                      alt="star"
                                      src={props?.star17}
                                    />
                                  ) : null}
                                </div>
                              </div>
                              {!!props?.iconssolidic18 ? (
                                <Button
                                  className="flex h-9 items-center justify-center w-9"
                                  shape="circle"
                                  size="md"
                                >
                                  <Img
                                    className="h-5"
                                    alt="iconssolidic"
                                    src={props?.iconssolidic18}
                                  />
                                </Button>
                              ) : null}
                            </div>
                          </div>
                          <div className="flex flex-col gap-1 items-start justify-start w-full">
                            {!!props?.weburl9 ? (
                              <Text
                                className="leading-[22.00px] max-w-[212px] md:max-w-full text-blue_gray-900 text-sm"
                                size="txtPublicSansSemiBold14"
                              >
                                {props?.weburl9}
                              </Text>
                            ) : null}
                            <div className="flex flex-row gap-1.5 items-center justify-center w-auto">
                              {!!props?.filesize17 ? (
                                <Text
                                  className="text-blue_gray-300 text-xs w-auto"
                                  size="txtPublicSansRegular12Bluegray300"
                                >
                                  {props?.filesize17}
                                </Text>
                              ) : null}
                              {!!props?.dot17 ? (
                                <div className="bg-blue_gray-300 h-0.5 rounded-[50%] w-0.5"></div>
                              ) : null}
                              {!!props?.filescounter18 ? (
                                <Text
                                  className="text-blue_gray-300 text-xs w-auto"
                                  size="txtPublicSansRegular12Bluegray300"
                                >
                                  {props?.filescounter18}
                                </Text>
                              ) : null}
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col items-end justify-end w-6">
                          <div
                            className="bg-cover bg-no-repeat flex flex-col h-6 items-center justify-center outline outline-[2px] outline-white-A700 rounded-[50%] w-6"
                            style={{
                              backgroundImage: "url('images/img_avatar1.png')",
                            }}
                          >
                            <div className="flex flex-col h-6 md:h-auto items-center justify-center rounded-[50%] w-6">
                              {!!props?.imgavatarrand9 ? (
                                <Img
                                  className="h-6 md:h-auto rounded-[50%] w-6"
                                  alt="imgavatarrand"
                                  src={props?.imgavatarrand9}
                                />
                              ) : null}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </List>
                </div>
                {!!props?.divider ? (
                  <Img
                    className="h-px w-full"
                    alt="divider"
                    src={props?.divider}
                  />
                ) : null}
                <div className="flex flex-col gap-6 items-end justify-start w-full">
                  <div className="bg-white-A700 flex md:flex-col flex-row md:gap-5 items-center justify-start w-full">
                    <div className="flex flex-1 flex-col gap-1 items-start justify-center w-full">
                      <div className="flex flex-row gap-2 items-center justify-start w-auto">
                        {!!props?.titleTwenty ? (
                          <Text
                            className="text-blue_gray-900 text-lg w-auto"
                            size="txtPublicSansBold18Bluegray900"
                          >
                            {props?.titleTwenty}
                          </Text>
                        ) : null}
                        {!!props?.plusOne ? (
                          <Button
                            className="flex h-7 items-center justify-center rounded-[50%] w-7"
                            shape="circle"
                            color="teal_500"
                            size="sm"
                            variant="fill"
                          >
                            <Img
                              className="h-[18px]"
                              alt="plus_One"
                              src={props?.plusOne}
                            />
                          </Button>
                        ) : null}
                      </div>
                      {!!props?.filescounter6 ? (
                        <Text
                          className="text-blue_gray-300 text-sm w-auto"
                          size="txtPublicSansRegular14Bluegray300"
                        >
                          {props?.filescounter6}
                        </Text>
                      ) : null}
                    </div>
                    {!!props?.arrowdownThree ? (
                      <Button
                        className="flex h-9 items-center justify-center w-9"
                        shape="circle"
                        size="md"
                      >
                        <Img
                          className="h-5"
                          alt="arrowdown_Three"
                          src={props?.arrowdownThree}
                        />
                      </Button>
                    ) : null}
                  </div>
                  <div className="gap-6 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-start min-h-[auto] w-full">
                    <div className="bg-white-A700 border border-blue_gray-300_28 border-solid flex flex-1 flex-col items-start justify-start p-5 rounded-[16px] w-full">
                      <div className="flex flex-col gap-2 items-start justify-start w-full">
                        <div className="flex flex-row items-start justify-between w-full">
                          {!!props?.iconsfileicfold5 ? (
                            <div
                              className="bg-cover bg-no-repeat flex flex-col h-9 items-center justify-end mt-5 p-2 w-9"
                              style={{
                                backgroundImage:
                                  "url('images/img_iconsfileicpts.svg')",
                              }}
                            >
                              {!!props?.stack4 ? (
                                <Img
                                  className="h-3 mt-[5px] w-3"
                                  alt="stack"
                                  src={props?.stack4}
                                />
                              ) : null}
                            </div>
                          ) : null}
                          <div className="flex flex-row items-center justify-start mb-3 pr-2 pt-2 w-auto">
                            <div className="flex flex-col items-center justify-start w-9">
                              <div className="flex flex-col items-center justify-center p-2 w-9">
                                {!!props?.star17 ? (
                                  <Img
                                    className="h-5 w-5"
                                    alt="star"
                                    src={props?.star17}
                                  />
                                ) : null}
                              </div>
                            </div>
                            {!!props?.iconssolidic18 ? (
                              <Button
                                className="flex h-9 items-center justify-center w-9"
                                shape="circle"
                                size="md"
                              >
                                <Img
                                  className="h-5"
                                  alt="iconssolidic"
                                  src={props?.iconssolidic18}
                                />
                              </Button>
                            ) : null}
                          </div>
                        </div>
                        <div className="flex flex-col gap-1 items-start justify-start w-full">
                          {!!props?.weburl9 ? (
                            <Text
                              className="leading-[22.00px] max-w-[212px] md:max-w-full text-blue_gray-900 text-sm"
                              size="txtPublicSansSemiBold14"
                            >
                              {props?.weburl9}
                            </Text>
                          ) : null}
                          <div className="flex flex-row gap-1.5 items-center justify-center w-auto">
                            {!!props?.filesize17 ? (
                              <Text
                                className="text-blue_gray-300 text-xs w-auto"
                                size="txtPublicSansRegular12Bluegray300"
                              >
                                {props?.filesize17}
                              </Text>
                            ) : null}
                            {!!props?.dot17 ? (
                              <div className="bg-blue_gray-300 h-0.5 rounded-[50%] w-0.5"></div>
                            ) : null}
                            {!!props?.filescounter18 ? (
                              <Text
                                className="text-blue_gray-300 text-xs w-auto"
                                size="txtPublicSansRegular12Bluegray300"
                              >
                                {props?.filescounter18}
                              </Text>
                            ) : null}
                          </div>
                        </div>
                        <div className="flex relative w-11">
                          <div
                            className="bg-cover bg-no-repeat flex flex-col h-6 items-center justify-center ml-[undefinedpx] my-auto outline outline-[2px] outline-white-A700 rounded-[50%] w-6 z-[1]"
                            style={{
                              backgroundImage: "url('images/img_avatar1.png')",
                            }}
                          >
                            <div className="flex flex-col h-6 md:h-auto items-center justify-center rounded-[50%] w-6">
                              {!!props?.imgavatarrand9 ? (
                                <Img
                                  className="h-6 md:h-auto rounded-[50%] w-6"
                                  alt="imgavatarrand"
                                  src={props?.imgavatarrand9}
                                />
                              ) : null}
                            </div>
                          </div>
                          <div
                            className="bg-cover bg-no-repeat flex flex-col h-6 items-center justify-center ml-[-4px] my-auto outline outline-[2px] outline-white-A700 rounded-[50%] w-6 z-[1]"
                            style={{
                              backgroundImage:
                                "url('images/img_avatar2_24x24.png')",
                            }}
                          >
                            <div className="flex flex-col h-6 md:h-auto items-center justify-center rounded-[50%] w-6">
                              {!!props?.imgavatarrandone8 ? (
                                <Img
                                  className="h-6 md:h-auto rounded-[50%] w-6"
                                  alt="imgavatarrand_One"
                                  src={props?.imgavatarrandone8}
                                />
                              ) : null}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white-A700 border border-blue_gray-300_28 border-solid flex flex-1 flex-col items-start justify-start p-5 rounded-[16px] w-full">
                      <div className="flex flex-col gap-2 items-start justify-start w-full">
                        <div className="flex flex-col gap-2 items-start justify-start w-full">
                          <div className="flex flex-row items-start justify-between w-full">
                            {!!props?.iconsfileicfold5 ? (
                              <div
                                className="bg-cover bg-no-repeat flex flex-col h-9 items-center justify-end mt-5 p-[7px] w-9"
                                style={{
                                  backgroundImage:
                                    "url('images/img_iconsfileictxt.svg')",
                                }}
                              >
                                {!!props?.stack4 ? (
                                  <Img
                                    className="h-3 mt-[5px] w-3"
                                    alt="stack"
                                    src={props?.stack4}
                                  />
                                ) : null}
                              </div>
                            ) : null}
                            <div className="flex flex-row items-center justify-start mb-3 pr-2 pt-2 w-auto">
                              <div className="flex flex-col items-center justify-start w-9">
                                <div className="flex flex-col items-center justify-center p-2 w-9">
                                  {!!props?.star17 ? (
                                    <Img
                                      className="h-5 w-5"
                                      alt="star"
                                      src={props?.star17}
                                    />
                                  ) : null}
                                </div>
                              </div>
                              {!!props?.iconssolidic18 ? (
                                <Button
                                  className="flex h-9 items-center justify-center w-9"
                                  shape="circle"
                                  size="md"
                                >
                                  <Img
                                    className="h-5"
                                    alt="iconssolidic"
                                    src={props?.iconssolidic18}
                                  />
                                </Button>
                              ) : null}
                            </div>
                          </div>
                          <div className="flex flex-col gap-1 items-start justify-start w-full">
                            {!!props?.weburl9 ? (
                              <Text
                                className="leading-[22.00px] max-w-[212px] md:max-w-full text-blue_gray-900 text-sm"
                                size="txtPublicSansSemiBold14"
                              >
                                {props?.weburl9}
                              </Text>
                            ) : null}
                            <div className="flex flex-row gap-1.5 items-center justify-center w-auto">
                              {!!props?.filesize17 ? (
                                <Text
                                  className="text-blue_gray-300 text-xs w-auto"
                                  size="txtPublicSansRegular12Bluegray300"
                                >
                                  {props?.filesize17}
                                </Text>
                              ) : null}
                              {!!props?.dot17 ? (
                                <div className="bg-blue_gray-300 h-0.5 rounded-[50%] w-0.5"></div>
                              ) : null}
                              {!!props?.filescounter18 ? (
                                <Text
                                  className="text-blue_gray-300 text-xs w-auto"
                                  size="txtPublicSansRegular12Bluegray300"
                                >
                                  {props?.filescounter18}
                                </Text>
                              ) : null}
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col items-end justify-end w-6">
                          <div
                            className="bg-cover bg-no-repeat flex flex-col h-6 items-center justify-center outline outline-[2px] outline-white-A700 rounded-[50%] w-6"
                            style={{
                              backgroundImage: "url('images/img_avatar1.png')",
                            }}
                          >
                            <div className="flex flex-col h-6 md:h-auto items-center justify-center rounded-[50%] w-6">
                              {!!props?.imgavatarrand9 ? (
                                <Img
                                  className="h-6 md:h-auto rounded-[50%] w-6"
                                  alt="imgavatarrand"
                                  src={props?.imgavatarrand9}
                                />
                              ) : null}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white-A700 border border-blue_gray-300_28 border-solid flex flex-1 flex-col items-start justify-start p-5 rounded-[16px] w-full">
                      <div className="flex flex-col gap-2 items-start justify-start w-full">
                        <div className="flex flex-col gap-2 items-start justify-start w-full">
                          <div className="flex flex-row items-start justify-between w-full">
                            {!!props?.iconsfileicfold5 ? (
                              <div
                                className="bg-cover bg-no-repeat flex flex-col h-9 items-start justify-end mt-5 p-[9px] w-9"
                                style={{
                                  backgroundImage:
                                    "url('images/img_iconsfileicpdf.svg')",
                                }}
                              >
                                {!!props?.stack4 ? (
                                  <Img
                                    className="h-3 mt-[5px] w-3"
                                    alt="stack"
                                    src={props?.stack4}
                                  />
                                ) : null}
                              </div>
                            ) : null}
                            <div className="flex flex-row items-center justify-start mb-3 pr-2 pt-2 w-auto">
                              <div className="flex flex-col items-center justify-start w-9">
                                <div className="flex flex-col items-center justify-center p-2 w-9">
                                  {!!props?.star17 ? (
                                    <Img
                                      className="h-5 w-5"
                                      alt="star"
                                      src={props?.star17}
                                    />
                                  ) : null}
                                </div>
                              </div>
                              {!!props?.iconssolidic18 ? (
                                <Button
                                  className="flex h-9 items-center justify-center w-9"
                                  shape="circle"
                                  size="md"
                                >
                                  <Img
                                    className="h-5"
                                    alt="iconssolidic"
                                    src={props?.iconssolidic18}
                                  />
                                </Button>
                              ) : null}
                            </div>
                          </div>
                          <div className="flex flex-col gap-1 items-start justify-start w-full">
                            {!!props?.weburl9 ? (
                              <Text
                                className="leading-[22.00px] max-w-[212px] md:max-w-full text-blue_gray-900 text-sm"
                                size="txtPublicSansSemiBold14"
                              >
                                {props?.weburl9}
                              </Text>
                            ) : null}
                            <div className="flex flex-row gap-1.5 items-center justify-center w-auto">
                              {!!props?.filesize17 ? (
                                <Text
                                  className="text-blue_gray-300 text-xs w-auto"
                                  size="txtPublicSansRegular12Bluegray300"
                                >
                                  {props?.filesize17}
                                </Text>
                              ) : null}
                              {!!props?.dot17 ? (
                                <div className="bg-blue_gray-300 h-0.5 rounded-[50%] w-0.5"></div>
                              ) : null}
                              {!!props?.filescounter18 ? (
                                <Text
                                  className="text-blue_gray-300 text-xs w-auto"
                                  size="txtPublicSansRegular12Bluegray300"
                                >
                                  {props?.filescounter18}
                                </Text>
                              ) : null}
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col items-end justify-end w-6">
                          <div
                            className="bg-cover bg-no-repeat flex flex-col h-6 items-center justify-center outline outline-[2px] outline-white-A700 rounded-[50%] w-6"
                            style={{
                              backgroundImage: "url('images/img_avatar1.png')",
                            }}
                          >
                            <div className="flex flex-col h-6 md:h-auto items-center justify-center rounded-[50%] w-6">
                              {!!props?.imgavatarrand9 ? (
                                <Img
                                  className="h-6 md:h-auto rounded-[50%] w-6"
                                  alt="imgavatarrand"
                                  src={props?.imgavatarrand9}
                                />
                              ) : null}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white-A700 border border-blue_gray-300_28 border-solid flex flex-1 flex-col items-start justify-start p-5 rounded-[16px] w-full">
                      <div className="flex flex-col gap-2 items-start justify-start w-full">
                        <div className="flex flex-col gap-2 items-start justify-start w-full">
                          <div className="flex flex-row items-start justify-between w-full">
                            {!!props?.iconsfileicfold5 ? (
                              <div
                                className="bg-cover bg-no-repeat flex flex-col h-9 items-start justify-end mt-5 p-[9px] w-9"
                                style={{
                                  backgroundImage:
                                    "url('images/img_iconsfileicexcel.svg')",
                                }}
                              >
                                {!!props?.stack4 ? (
                                  <Img
                                    className="h-3 mt-[5px] w-3"
                                    alt="stack"
                                    src={props?.stack4}
                                  />
                                ) : null}
                              </div>
                            ) : null}
                            <div className="flex flex-row items-center justify-start mb-3 pr-2 pt-2 w-auto">
                              <div className="flex flex-col items-center justify-start w-9">
                                <div className="flex flex-col items-center justify-center p-2 w-9">
                                  {!!props?.star17 ? (
                                    <Img
                                      className="h-5 w-5"
                                      alt="star"
                                      src={props?.star17}
                                    />
                                  ) : null}
                                </div>
                              </div>
                              {!!props?.iconssolidic18 ? (
                                <Button
                                  className="flex h-9 items-center justify-center w-9"
                                  shape="circle"
                                  size="md"
                                >
                                  <Img
                                    className="h-5"
                                    alt="iconssolidic"
                                    src={props?.iconssolidic18}
                                  />
                                </Button>
                              ) : null}
                            </div>
                          </div>
                          <div className="flex flex-col gap-1 items-start justify-start w-full">
                            {!!props?.weburl9 ? (
                              <Text
                                className="leading-[22.00px] max-w-[212px] md:max-w-full text-blue_gray-900 text-sm"
                                size="txtPublicSansSemiBold14"
                              >
                                {props?.weburl9}
                              </Text>
                            ) : null}
                            <div className="flex flex-row gap-1.5 items-center justify-center w-auto">
                              {!!props?.filesize17 ? (
                                <Text
                                  className="text-blue_gray-300 text-xs w-auto"
                                  size="txtPublicSansRegular12Bluegray300"
                                >
                                  {props?.filesize17}
                                </Text>
                              ) : null}
                              {!!props?.dot17 ? (
                                <div className="bg-blue_gray-300 h-0.5 rounded-[50%] w-0.5"></div>
                              ) : null}
                              {!!props?.filescounter18 ? (
                                <Text
                                  className="text-blue_gray-300 text-xs w-auto"
                                  size="txtPublicSansRegular12Bluegray300"
                                >
                                  {props?.filescounter18}
                                </Text>
                              ) : null}
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col items-end justify-end w-6">
                          <div
                            className="bg-cover bg-no-repeat flex flex-col h-6 items-center justify-center outline outline-[2px] outline-white-A700 rounded-[50%] w-6"
                            style={{
                              backgroundImage: "url('images/img_avatar1.png')",
                            }}
                          >
                            <div className="flex flex-col h-6 md:h-auto items-center justify-center rounded-[50%] w-6">
                              {!!props?.imgavatarrand9 ? (
                                <Img
                                  className="h-6 md:h-auto rounded-[50%] w-6"
                                  alt="imgavatarrand"
                                  src={props?.imgavatarrand9}
                                />
                              ) : null}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white-A700 border border-blue_gray-300_28 border-solid flex flex-1 flex-col items-start justify-start p-5 rounded-[16px] w-full">
                      <div className="flex flex-col gap-2 items-start justify-start w-full">
                        <div className="flex flex-row items-start justify-between w-full">
                          {!!props?.iconsfileicfold5 ? (
                            <div
                              className="bg-cover bg-no-repeat flex flex-col h-9 items-start justify-end mt-5 p-[9px] w-9"
                              style={{
                                backgroundImage:
                                  "url('images/img_iconsfileiczip.svg')",
                              }}
                            >
                              {!!props?.stack4 ? (
                                <Img
                                  className="h-3 mt-[5px] w-3"
                                  alt="stack"
                                  src={props?.stack4}
                                />
                              ) : null}
                            </div>
                          ) : null}
                          <div className="flex flex-row items-center justify-start mb-3 pr-2 pt-2 w-auto">
                            <div className="flex flex-col items-center justify-start w-9">
                              <div className="flex flex-col items-center justify-center p-2 w-9">
                                {!!props?.star17 ? (
                                  <Img
                                    className="h-5 w-5"
                                    alt="star"
                                    src={props?.star17}
                                  />
                                ) : null}
                              </div>
                            </div>
                            {!!props?.iconssolidic18 ? (
                              <Button
                                className="flex h-9 items-center justify-center w-9"
                                shape="circle"
                                size="md"
                              >
                                <Img
                                  className="h-5"
                                  alt="iconssolidic"
                                  src={props?.iconssolidic18}
                                />
                              </Button>
                            ) : null}
                          </div>
                        </div>
                        <div className="flex flex-col gap-1 items-start justify-start w-full">
                          {!!props?.weburl9 ? (
                            <Text
                              className="leading-[22.00px] max-w-[212px] md:max-w-full text-blue_gray-900 text-sm"
                              size="txtPublicSansSemiBold14"
                            >
                              {props?.weburl9}
                            </Text>
                          ) : null}
                          <div className="flex flex-row gap-1.5 items-center justify-center w-auto">
                            {!!props?.filesize17 ? (
                              <Text
                                className="text-blue_gray-300 text-xs w-auto"
                                size="txtPublicSansRegular12Bluegray300"
                              >
                                {props?.filesize17}
                              </Text>
                            ) : null}
                            {!!props?.dot17 ? (
                              <div className="bg-blue_gray-300 h-0.5 rounded-[50%] w-0.5"></div>
                            ) : null}
                            {!!props?.filescounter18 ? (
                              <Text
                                className="text-blue_gray-300 text-xs w-auto"
                                size="txtPublicSansRegular12Bluegray300"
                              >
                                {props?.filescounter18}
                              </Text>
                            ) : null}
                          </div>
                        </div>
                        <div className="flex relative w-[84px]">
                          <div className="flex my-auto w-[77%]">
                            <div className="flex my-auto w-[69%]">
                              <div
                                className="bg-cover bg-no-repeat flex flex-col h-6 items-center justify-center ml-[undefinedpx] my-auto outline outline-[2px] outline-white-A700 rounded-[50%] w-6 z-[1]"
                                style={{
                                  backgroundImage:
                                    "url('images/img_avatar1.png')",
                                }}
                              >
                                <div className="flex flex-col h-6 md:h-auto items-center justify-center rounded-[50%] w-6">
                                  {!!props?.imgavatarrand9 ? (
                                    <Img
                                      className="h-6 md:h-auto rounded-[50%] w-6"
                                      alt="imgavatarrand"
                                      src={props?.imgavatarrand9}
                                    />
                                  ) : null}
                                </div>
                              </div>
                              <div
                                className="bg-cover bg-no-repeat flex flex-col h-6 items-center justify-center ml-[-4px] my-auto outline outline-[2px] outline-white-A700 rounded-[50%] w-6 z-[1]"
                                style={{
                                  backgroundImage:
                                    "url('images/img_avatar2_24x24.png')",
                                }}
                              >
                                <div className="flex flex-col h-6 md:h-auto items-center justify-center rounded-[50%] w-6">
                                  {!!props?.imgavatarrandone8 ? (
                                    <Img
                                      className="h-6 md:h-auto rounded-[50%] w-6"
                                      alt="imgavatarrand_One"
                                      src={props?.imgavatarrandone8}
                                    />
                                  ) : null}
                                </div>
                              </div>
                            </div>
                            <div
                              className="bg-cover bg-no-repeat flex flex-col h-6 items-center justify-center ml-[-4px] my-auto outline outline-[2px] outline-white-A700 rounded-[50%] w-6 z-[1]"
                              style={{
                                backgroundImage:
                                  "url('images/img_avatar3.png')",
                              }}
                            >
                              <div className="flex flex-col h-6 md:h-auto items-center justify-center rounded-[50%] w-6">
                                {!!props?.imgavatarrandtwo7 ? (
                                  <Img
                                    className="h-6 md:h-auto rounded-[50%] w-6"
                                    alt="imgavatarrand_Two"
                                    src={props?.imgavatarrandtwo7}
                                  />
                                ) : null}
                              </div>
                            </div>
                          </div>
                          {!!props?.more3 ? (
                            <div className="bg-green-A100 flex flex-col items-center justify-start ml-[-4px] my-auto outline outline-[2px] outline-white-A700 rounded-[50%] w-6 z-[1]">
                              {!!props?.eight3 ? (
                                <Text
                                  className="h-6 leading-[18.00px] max-w-[24px] md:max-w-full text-center text-teal-700 text-xs"
                                  size="txtPublicSansMedium12"
                                >
                                  {props?.eight3}
                                </Text>
                              ) : null}
                            </div>
                          ) : null}
                        </div>
                      </div>
                    </div>
                    <div className="bg-white-A700 border border-blue_gray-300_28 border-solid flex flex-1 flex-col items-start justify-start p-5 rounded-[16px] w-full">
                      <div className="flex flex-col gap-2 items-start justify-start w-full">
                        <div className="flex flex-row items-start justify-between w-full">
                          {!!props?.iconsfileicfold5 ? (
                            <div
                              className="bg-cover bg-no-repeat flex flex-col h-9 items-center justify-end mt-5 p-2 w-9"
                              style={{
                                backgroundImage:
                                  "url('images/img_iconsfileicai.svg')",
                              }}
                            >
                              {!!props?.stack4 ? (
                                <Img
                                  className="h-3 mt-[5px] w-3"
                                  alt="stack"
                                  src={props?.stack4}
                                />
                              ) : null}
                            </div>
                          ) : null}
                          <div className="flex flex-row items-center justify-start mb-3 pr-2 pt-2 w-auto">
                            <div className="flex flex-col items-center justify-start w-9">
                              <div className="flex flex-col items-center justify-center p-2 w-9">
                                {!!props?.star17 ? (
                                  <Img
                                    className="h-5 w-5"
                                    alt="star"
                                    src={props?.star17}
                                  />
                                ) : null}
                              </div>
                            </div>
                            {!!props?.iconssolidic18 ? (
                              <Button
                                className="flex h-9 items-center justify-center w-9"
                                shape="circle"
                                size="md"
                              >
                                <Img
                                  className="h-5"
                                  alt="iconssolidic"
                                  src={props?.iconssolidic18}
                                />
                              </Button>
                            ) : null}
                          </div>
                        </div>
                        <div className="flex flex-col gap-1 items-start justify-start w-full">
                          {!!props?.weburl9 ? (
                            <Text
                              className="leading-[22.00px] max-w-[212px] md:max-w-full text-blue_gray-900 text-sm"
                              size="txtPublicSansSemiBold14"
                            >
                              {props?.weburl9}
                            </Text>
                          ) : null}
                          <div className="flex flex-row gap-1.5 items-center justify-center w-auto">
                            {!!props?.filesize17 ? (
                              <Text
                                className="text-blue_gray-300 text-xs w-auto"
                                size="txtPublicSansRegular12Bluegray300"
                              >
                                {props?.filesize17}
                              </Text>
                            ) : null}
                            {!!props?.dot17 ? (
                              <div className="bg-blue_gray-300 h-0.5 rounded-[50%] w-0.5"></div>
                            ) : null}
                            {!!props?.filescounter18 ? (
                              <Text
                                className="text-blue_gray-300 text-xs w-auto"
                                size="txtPublicSansRegular12Bluegray300"
                              >
                                {props?.filescounter18}
                              </Text>
                            ) : null}
                          </div>
                        </div>
                        <div className="flex relative w-[84px]">
                          <div className="flex my-auto w-[77%]">
                            <div className="flex my-auto w-[69%]">
                              <div
                                className="bg-cover bg-no-repeat flex flex-col h-6 items-center justify-center ml-[undefinedpx] my-auto outline outline-[2px] outline-white-A700 rounded-[50%] w-6 z-[1]"
                                style={{
                                  backgroundImage:
                                    "url('images/img_avatar1.png')",
                                }}
                              >
                                <div className="flex flex-col h-6 md:h-auto items-center justify-center rounded-[50%] w-6">
                                  {!!props?.imgavatarrand9 ? (
                                    <Img
                                      className="h-6 md:h-auto rounded-[50%] w-6"
                                      alt="imgavatarrand"
                                      src={props?.imgavatarrand9}
                                    />
                                  ) : null}
                                </div>
                              </div>
                              <div
                                className="bg-cover bg-no-repeat flex flex-col h-6 items-center justify-center ml-[-4px] my-auto outline outline-[2px] outline-white-A700 rounded-[50%] w-6 z-[1]"
                                style={{
                                  backgroundImage:
                                    "url('images/img_avatar2_24x24.png')",
                                }}
                              >
                                <div className="flex flex-col h-6 md:h-auto items-center justify-center rounded-[50%] w-6">
                                  {!!props?.imgavatarrandone8 ? (
                                    <Img
                                      className="h-6 md:h-auto rounded-[50%] w-6"
                                      alt="imgavatarrand_One"
                                      src={props?.imgavatarrandone8}
                                    />
                                  ) : null}
                                </div>
                              </div>
                            </div>
                            <div
                              className="bg-cover bg-no-repeat flex flex-col h-6 items-center justify-center ml-[-4px] my-auto outline outline-[2px] outline-white-A700 rounded-[50%] w-6 z-[1]"
                              style={{
                                backgroundImage:
                                  "url('images/img_avatar3.png')",
                              }}
                            >
                              <div className="flex flex-col h-6 md:h-auto items-center justify-center rounded-[50%] w-6">
                                {!!props?.imgavatarrandtwo7 ? (
                                  <Img
                                    className="h-6 md:h-auto rounded-[50%] w-6"
                                    alt="imgavatarrand_Two"
                                    src={props?.imgavatarrandtwo7}
                                  />
                                ) : null}
                              </div>
                            </div>
                          </div>
                          {!!props?.more3 ? (
                            <div className="bg-green-A100 flex flex-col items-center justify-start ml-[-4px] my-auto outline outline-[2px] outline-white-A700 rounded-[50%] w-6 z-[1]">
                              {!!props?.eight3 ? (
                                <Text
                                  className="h-6 leading-[18.00px] max-w-[24px] md:max-w-full text-center text-teal-700 text-xs"
                                  size="txtPublicSansMedium12"
                                >
                                  {props?.eight3}
                                </Text>
                              ) : null}
                            </div>
                          ) : null}
                        </div>
                      </div>
                    </div>
                    <div className="bg-white-A700 border border-blue_gray-300_28 border-solid flex flex-1 flex-col items-start justify-start p-5 rounded-[16px] w-full">
                      <div className="flex flex-col gap-2 items-start justify-start w-full">
                        <div className="flex flex-row items-start justify-between w-full">
                          {!!props?.iconsfileicfold5 ? (
                            <div
                              className="bg-cover bg-no-repeat flex flex-col h-9 items-start justify-end mt-5 p-[9px] w-9"
                              style={{
                                backgroundImage:
                                  "url('images/img_iconsfileicexcel.svg')",
                              }}
                            >
                              {!!props?.stack4 ? (
                                <Img
                                  className="h-3 mt-[5px] w-3"
                                  alt="stack"
                                  src={props?.stack4}
                                />
                              ) : null}
                            </div>
                          ) : null}
                          <div className="flex flex-row items-center justify-start mb-3 pr-2 pt-2 w-auto">
                            <div className="flex flex-col items-center justify-start w-9">
                              <div className="flex flex-col items-center justify-center p-2 w-9">
                                {!!props?.star17 ? (
                                  <Img
                                    className="h-5 w-5"
                                    alt="star"
                                    src={props?.star17}
                                  />
                                ) : null}
                              </div>
                            </div>
                            {!!props?.iconssolidic18 ? (
                              <Button
                                className="flex h-9 items-center justify-center w-9"
                                shape="circle"
                                size="md"
                              >
                                <Img
                                  className="h-5"
                                  alt="iconssolidic"
                                  src={props?.iconssolidic18}
                                />
                              </Button>
                            ) : null}
                          </div>
                        </div>
                        <div className="flex flex-col gap-1 items-start justify-start w-full">
                          {!!props?.weburl9 ? (
                            <Text
                              className="leading-[22.00px] max-w-[212px] md:max-w-full text-blue_gray-900 text-sm"
                              size="txtPublicSansSemiBold14"
                            >
                              {props?.weburl9}
                            </Text>
                          ) : null}
                          <div className="flex flex-row gap-1.5 items-center justify-center w-auto">
                            {!!props?.filesize17 ? (
                              <Text
                                className="text-blue_gray-300 text-xs w-auto"
                                size="txtPublicSansRegular12Bluegray300"
                              >
                                {props?.filesize17}
                              </Text>
                            ) : null}
                            {!!props?.dot17 ? (
                              <div className="bg-blue_gray-300 h-0.5 rounded-[50%] w-0.5"></div>
                            ) : null}
                            {!!props?.filescounter18 ? (
                              <Text
                                className="text-blue_gray-300 text-xs w-auto"
                                size="txtPublicSansRegular12Bluegray300"
                              >
                                {props?.filescounter18}
                              </Text>
                            ) : null}
                          </div>
                        </div>
                        <div className="flex relative w-[84px]">
                          <div className="flex my-auto w-[77%]">
                            <div className="flex my-auto w-[69%]">
                              <div
                                className="bg-cover bg-no-repeat flex flex-col h-6 items-center justify-center ml-[undefinedpx] my-auto outline outline-[2px] outline-white-A700 rounded-[50%] w-6 z-[1]"
                                style={{
                                  backgroundImage:
                                    "url('images/img_avatar1.png')",
                                }}
                              >
                                <div className="flex flex-col h-6 md:h-auto items-center justify-center rounded-[50%] w-6">
                                  {!!props?.imgavatarrand9 ? (
                                    <Img
                                      className="h-6 md:h-auto rounded-[50%] w-6"
                                      alt="imgavatarrand"
                                      src={props?.imgavatarrand9}
                                    />
                                  ) : null}
                                </div>
                              </div>
                              <div
                                className="bg-cover bg-no-repeat flex flex-col h-6 items-center justify-center ml-[-4px] my-auto outline outline-[2px] outline-white-A700 rounded-[50%] w-6 z-[1]"
                                style={{
                                  backgroundImage:
                                    "url('images/img_avatar2_24x24.png')",
                                }}
                              >
                                <div className="flex flex-col h-6 md:h-auto items-center justify-center rounded-[50%] w-6">
                                  {!!props?.imgavatarrandone8 ? (
                                    <Img
                                      className="h-6 md:h-auto rounded-[50%] w-6"
                                      alt="imgavatarrand_One"
                                      src={props?.imgavatarrandone8}
                                    />
                                  ) : null}
                                </div>
                              </div>
                            </div>
                            <div
                              className="bg-cover bg-no-repeat flex flex-col h-6 items-center justify-center ml-[-4px] my-auto outline outline-[2px] outline-white-A700 rounded-[50%] w-6 z-[1]"
                              style={{
                                backgroundImage:
                                  "url('images/img_avatar3.png')",
                              }}
                            >
                              <div className="flex flex-col h-6 md:h-auto items-center justify-center rounded-[50%] w-6">
                                {!!props?.imgavatarrandtwo7 ? (
                                  <Img
                                    className="h-6 md:h-auto rounded-[50%] w-6"
                                    alt="imgavatarrand_Two"
                                    src={props?.imgavatarrandtwo7}
                                  />
                                ) : null}
                              </div>
                            </div>
                          </div>
                          {!!props?.more3 ? (
                            <div className="bg-green-A100 flex flex-col items-center justify-start ml-[-4px] my-auto outline outline-[2px] outline-white-A700 rounded-[50%] w-6 z-[1]">
                              {!!props?.eight3 ? (
                                <Text
                                  className="h-6 leading-[18.00px] max-w-[24px] md:max-w-full text-center text-teal-700 text-xs"
                                  size="txtPublicSansMedium12"
                                >
                                  {props?.eight3}
                                </Text>
                              ) : null}
                            </div>
                          ) : null}
                        </div>
                      </div>
                    </div>
                    <div className="bg-white-A700 border border-blue_gray-300_28 border-solid flex flex-1 flex-col items-start justify-start p-5 rounded-[16px] w-full">
                      <div className="flex flex-col gap-2 items-start justify-start w-full">
                        <div className="flex flex-row items-start justify-between w-full">
                          {!!props?.iconsfileicfold5 ? (
                            <div
                              className="bg-cover bg-no-repeat flex flex-col h-9 items-start justify-end mt-5 p-[9px] w-9"
                              style={{
                                backgroundImage:
                                  "url('images/img_iconsfileicvideo.svg')",
                              }}
                            >
                              {!!props?.stack4 ? (
                                <Img
                                  className="h-3 mt-[5px] w-3"
                                  alt="stack"
                                  src={props?.stack4}
                                />
                              ) : null}
                            </div>
                          ) : null}
                          <div className="flex flex-row items-center justify-start mb-3 pr-2 pt-2 w-auto">
                            <div className="flex flex-col items-center justify-start w-9">
                              <div className="flex flex-col items-center justify-center p-2 w-9">
                                {!!props?.star17 ? (
                                  <Img
                                    className="h-5 w-5"
                                    alt="star"
                                    src={props?.star17}
                                  />
                                ) : null}
                              </div>
                            </div>
                            {!!props?.iconssolidic18 ? (
                              <Button
                                className="flex h-9 items-center justify-center w-9"
                                shape="circle"
                                size="md"
                              >
                                <Img
                                  className="h-5"
                                  alt="iconssolidic"
                                  src={props?.iconssolidic18}
                                />
                              </Button>
                            ) : null}
                          </div>
                        </div>
                        <div className="flex flex-col gap-1 items-start justify-start w-full">
                          {!!props?.weburl9 ? (
                            <Text
                              className="leading-[22.00px] max-w-[212px] md:max-w-full text-blue_gray-900 text-sm"
                              size="txtPublicSansSemiBold14"
                            >
                              {props?.weburl9}
                            </Text>
                          ) : null}
                          <div className="flex flex-row gap-1.5 items-center justify-center w-auto">
                            {!!props?.filesize17 ? (
                              <Text
                                className="text-blue_gray-300 text-xs w-auto"
                                size="txtPublicSansRegular12Bluegray300"
                              >
                                {props?.filesize17}
                              </Text>
                            ) : null}
                            {!!props?.dot17 ? (
                              <div className="bg-blue_gray-300 h-0.5 rounded-[50%] w-0.5"></div>
                            ) : null}
                            {!!props?.filescounter18 ? (
                              <Text
                                className="text-blue_gray-300 text-xs w-auto"
                                size="txtPublicSansRegular12Bluegray300"
                              >
                                {props?.filescounter18}
                              </Text>
                            ) : null}
                          </div>
                        </div>
                        <div className="flex relative w-[84px]">
                          <div className="flex my-auto w-[77%]">
                            <div className="flex my-auto w-[69%]">
                              <div
                                className="bg-cover bg-no-repeat flex flex-col h-6 items-center justify-center ml-[undefinedpx] my-auto outline outline-[2px] outline-white-A700 rounded-[50%] w-6 z-[1]"
                                style={{
                                  backgroundImage:
                                    "url('images/img_avatar1.png')",
                                }}
                              >
                                <div className="flex flex-col h-6 md:h-auto items-center justify-center rounded-[50%] w-6">
                                  {!!props?.imgavatarrand9 ? (
                                    <Img
                                      className="h-6 md:h-auto rounded-[50%] w-6"
                                      alt="imgavatarrand"
                                      src={props?.imgavatarrand9}
                                    />
                                  ) : null}
                                </div>
                              </div>
                              <div
                                className="bg-cover bg-no-repeat flex flex-col h-6 items-center justify-center ml-[-4px] my-auto outline outline-[2px] outline-white-A700 rounded-[50%] w-6 z-[1]"
                                style={{
                                  backgroundImage:
                                    "url('images/img_avatar2_24x24.png')",
                                }}
                              >
                                <div className="flex flex-col h-6 md:h-auto items-center justify-center rounded-[50%] w-6">
                                  {!!props?.imgavatarrandone8 ? (
                                    <Img
                                      className="h-6 md:h-auto rounded-[50%] w-6"
                                      alt="imgavatarrand_One"
                                      src={props?.imgavatarrandone8}
                                    />
                                  ) : null}
                                </div>
                              </div>
                            </div>
                            <div
                              className="bg-cover bg-no-repeat flex flex-col h-6 items-center justify-center ml-[-4px] my-auto outline outline-[2px] outline-white-A700 rounded-[50%] w-6 z-[1]"
                              style={{
                                backgroundImage:
                                  "url('images/img_avatar3.png')",
                              }}
                            >
                              <div className="flex flex-col h-6 md:h-auto items-center justify-center rounded-[50%] w-6">
                                {!!props?.imgavatarrandtwo7 ? (
                                  <Img
                                    className="h-6 md:h-auto rounded-[50%] w-6"
                                    alt="imgavatarrand_Two"
                                    src={props?.imgavatarrandtwo7}
                                  />
                                ) : null}
                              </div>
                            </div>
                          </div>
                          {!!props?.more3 ? (
                            <div className="bg-green-A100 flex flex-col items-center justify-start ml-[-4px] my-auto outline outline-[2px] outline-white-A700 rounded-[50%] w-6 z-[1]">
                              {!!props?.eight3 ? (
                                <Text
                                  className="h-6 leading-[18.00px] max-w-[24px] md:max-w-full text-center text-teal-700 text-xs"
                                  size="txtPublicSansMedium12"
                                >
                                  {props?.eight3}
                                </Text>
                              ) : null}
                            </div>
                          ) : null}
                        </div>
                      </div>
                    </div>
                    <div className="bg-white-A700 border border-blue_gray-300_28 border-solid flex flex-1 flex-col items-start justify-start p-5 rounded-[16px] w-full">
                      <div className="flex flex-col gap-2 items-start justify-start w-full">
                        <div className="flex flex-row items-start justify-between w-full">
                          {!!props?.iconsfileicfold5 ? (
                            <div
                              className="bg-cover bg-no-repeat flex flex-col h-9 items-start justify-end mt-5 p-[9px] w-9"
                              style={{
                                backgroundImage:
                                  "url('images/img_iconsfileicimg.svg')",
                              }}
                            >
                              {!!props?.stack4 ? (
                                <Img
                                  className="h-3 mt-[5px] w-3"
                                  alt="stack"
                                  src={props?.stack4}
                                />
                              ) : null}
                            </div>
                          ) : null}
                          <div className="flex flex-row items-center justify-start mb-3 pr-2 pt-2 w-auto">
                            <div className="flex flex-col items-center justify-start w-9">
                              <div className="flex flex-col items-center justify-center p-2 w-9">
                                {!!props?.star17 ? (
                                  <Img
                                    className="h-5 w-5"
                                    alt="star"
                                    src={props?.star17}
                                  />
                                ) : null}
                              </div>
                            </div>
                            {!!props?.iconssolidic18 ? (
                              <Button
                                className="flex h-9 items-center justify-center w-9"
                                shape="circle"
                                size="md"
                              >
                                <Img
                                  className="h-5"
                                  alt="iconssolidic"
                                  src={props?.iconssolidic18}
                                />
                              </Button>
                            ) : null}
                          </div>
                        </div>
                        <div className="flex flex-col gap-1 items-start justify-start w-full">
                          {!!props?.weburl9 ? (
                            <Text
                              className="leading-[22.00px] max-w-[212px] md:max-w-full text-blue_gray-900 text-sm"
                              size="txtPublicSansSemiBold14"
                            >
                              {props?.weburl9}
                            </Text>
                          ) : null}
                          <div className="flex flex-row gap-1.5 items-center justify-center w-auto">
                            {!!props?.filesize17 ? (
                              <Text
                                className="text-blue_gray-300 text-xs w-auto"
                                size="txtPublicSansRegular12Bluegray300"
                              >
                                {props?.filesize17}
                              </Text>
                            ) : null}
                            {!!props?.dot17 ? (
                              <div className="bg-blue_gray-300 h-0.5 rounded-[50%] w-0.5"></div>
                            ) : null}
                            {!!props?.filescounter18 ? (
                              <Text
                                className="text-blue_gray-300 text-xs w-auto"
                                size="txtPublicSansRegular12Bluegray300"
                              >
                                {props?.filescounter18}
                              </Text>
                            ) : null}
                          </div>
                        </div>
                        <div className="flex relative w-[84px]">
                          <div className="flex my-auto w-[77%]">
                            <div className="flex my-auto w-[69%]">
                              <div
                                className="bg-cover bg-no-repeat flex flex-col h-6 items-center justify-center ml-[undefinedpx] my-auto outline outline-[2px] outline-white-A700 rounded-[50%] w-6 z-[1]"
                                style={{
                                  backgroundImage:
                                    "url('images/img_avatar1.png')",
                                }}
                              >
                                <div className="flex flex-col h-6 md:h-auto items-center justify-center rounded-[50%] w-6">
                                  {!!props?.imgavatarrand9 ? (
                                    <Img
                                      className="h-6 md:h-auto rounded-[50%] w-6"
                                      alt="imgavatarrand"
                                      src={props?.imgavatarrand9}
                                    />
                                  ) : null}
                                </div>
                              </div>
                              <div
                                className="bg-cover bg-no-repeat flex flex-col h-6 items-center justify-center ml-[-4px] my-auto outline outline-[2px] outline-white-A700 rounded-[50%] w-6 z-[1]"
                                style={{
                                  backgroundImage:
                                    "url('images/img_avatar2_24x24.png')",
                                }}
                              >
                                <div className="flex flex-col h-6 md:h-auto items-center justify-center rounded-[50%] w-6">
                                  {!!props?.imgavatarrandone8 ? (
                                    <Img
                                      className="h-6 md:h-auto rounded-[50%] w-6"
                                      alt="imgavatarrand_One"
                                      src={props?.imgavatarrandone8}
                                    />
                                  ) : null}
                                </div>
                              </div>
                            </div>
                            <div
                              className="bg-cover bg-no-repeat flex flex-col h-6 items-center justify-center ml-[-4px] my-auto outline outline-[2px] outline-white-A700 rounded-[50%] w-6 z-[1]"
                              style={{
                                backgroundImage:
                                  "url('images/img_avatar3.png')",
                              }}
                            >
                              <div className="flex flex-col h-6 md:h-auto items-center justify-center rounded-[50%] w-6">
                                {!!props?.imgavatarrandtwo7 ? (
                                  <Img
                                    className="h-6 md:h-auto rounded-[50%] w-6"
                                    alt="imgavatarrand_Two"
                                    src={props?.imgavatarrandtwo7}
                                  />
                                ) : null}
                              </div>
                            </div>
                          </div>
                          {!!props?.more3 ? (
                            <div className="bg-green-A100 flex flex-col items-center justify-start ml-[-4px] my-auto outline outline-[2px] outline-white-A700 rounded-[50%] w-6 z-[1]">
                              {!!props?.eight3 ? (
                                <Text
                                  className="h-6 leading-[18.00px] max-w-[24px] md:max-w-full text-center text-teal-700 text-xs"
                                  size="txtPublicSansMedium12"
                                >
                                  {props?.eight3}
                                </Text>
                              ) : null}
                            </div>
                          ) : null}
                        </div>
                      </div>
                    </div>
                    <div className="bg-white-A700 border border-blue_gray-300_28 border-solid flex flex-1 flex-col items-start justify-start p-5 rounded-[16px] w-full">
                      <div className="flex flex-col gap-2 items-start justify-start w-full">
                        <div className="flex flex-row items-start justify-between w-full">
                          {!!props?.iconsfileicfold5 ? (
                            <div
                              className="bg-cover bg-no-repeat flex flex-col h-9 items-start justify-end mt-5 p-[9px] w-9"
                              style={{
                                backgroundImage:
                                  "url('images/img_iconsfileicpowerpoint.svg')",
                              }}
                            >
                              {!!props?.stack4 ? (
                                <Img
                                  className="h-3 mt-[5px] w-3"
                                  alt="stack"
                                  src={props?.stack4}
                                />
                              ) : null}
                            </div>
                          ) : null}
                          <div className="flex flex-row items-center justify-start mb-3 pr-2 pt-2 w-auto">
                            <div className="flex flex-col items-center justify-start w-9">
                              <div className="flex flex-col items-center justify-center p-2 w-9">
                                {!!props?.star17 ? (
                                  <Img
                                    className="h-5 w-5"
                                    alt="star"
                                    src={props?.star17}
                                  />
                                ) : null}
                              </div>
                            </div>
                            {!!props?.iconssolidic18 ? (
                              <Button
                                className="flex h-9 items-center justify-center w-9"
                                shape="circle"
                                size="md"
                              >
                                <Img
                                  className="h-5"
                                  alt="iconssolidic"
                                  src={props?.iconssolidic18}
                                />
                              </Button>
                            ) : null}
                          </div>
                        </div>
                        <div className="flex flex-col gap-1 items-start justify-start w-full">
                          {!!props?.weburl9 ? (
                            <Text
                              className="leading-[22.00px] max-w-[212px] md:max-w-full text-blue_gray-900 text-sm"
                              size="txtPublicSansSemiBold14"
                            >
                              {props?.weburl9}
                            </Text>
                          ) : null}
                          <div className="flex flex-row gap-1.5 items-center justify-center w-auto">
                            {!!props?.filesize17 ? (
                              <Text
                                className="text-blue_gray-300 text-xs w-auto"
                                size="txtPublicSansRegular12Bluegray300"
                              >
                                {props?.filesize17}
                              </Text>
                            ) : null}
                            {!!props?.dot17 ? (
                              <div className="bg-blue_gray-300 h-0.5 rounded-[50%] w-0.5"></div>
                            ) : null}
                            {!!props?.filescounter18 ? (
                              <Text
                                className="text-blue_gray-300 text-xs w-auto"
                                size="txtPublicSansRegular12Bluegray300"
                              >
                                {props?.filescounter18}
                              </Text>
                            ) : null}
                          </div>
                        </div>
                        <div className="flex relative w-[84px]">
                          <div className="flex my-auto w-[77%]">
                            <div className="flex my-auto w-[69%]">
                              <div
                                className="bg-cover bg-no-repeat flex flex-col h-6 items-center justify-center ml-[undefinedpx] my-auto outline outline-[2px] outline-white-A700 rounded-[50%] w-6 z-[1]"
                                style={{
                                  backgroundImage:
                                    "url('images/img_avatar1.png')",
                                }}
                              >
                                <div className="flex flex-col h-6 md:h-auto items-center justify-center rounded-[50%] w-6">
                                  {!!props?.imgavatarrand9 ? (
                                    <Img
                                      className="h-6 md:h-auto rounded-[50%] w-6"
                                      alt="imgavatarrand"
                                      src={props?.imgavatarrand9}
                                    />
                                  ) : null}
                                </div>
                              </div>
                              <div
                                className="bg-cover bg-no-repeat flex flex-col h-6 items-center justify-center ml-[-4px] my-auto outline outline-[2px] outline-white-A700 rounded-[50%] w-6 z-[1]"
                                style={{
                                  backgroundImage:
                                    "url('images/img_avatar2_24x24.png')",
                                }}
                              >
                                <div className="flex flex-col h-6 md:h-auto items-center justify-center rounded-[50%] w-6">
                                  {!!props?.imgavatarrandone8 ? (
                                    <Img
                                      className="h-6 md:h-auto rounded-[50%] w-6"
                                      alt="imgavatarrand_One"
                                      src={props?.imgavatarrandone8}
                                    />
                                  ) : null}
                                </div>
                              </div>
                            </div>
                            <div
                              className="bg-cover bg-no-repeat flex flex-col h-6 items-center justify-center ml-[-4px] my-auto outline outline-[2px] outline-white-A700 rounded-[50%] w-6 z-[1]"
                              style={{
                                backgroundImage:
                                  "url('images/img_avatar3.png')",
                              }}
                            >
                              <div className="flex flex-col h-6 md:h-auto items-center justify-center rounded-[50%] w-6">
                                {!!props?.imgavatarrandtwo7 ? (
                                  <Img
                                    className="h-6 md:h-auto rounded-[50%] w-6"
                                    alt="imgavatarrand_Two"
                                    src={props?.imgavatarrandtwo7}
                                  />
                                ) : null}
                              </div>
                            </div>
                          </div>
                          {!!props?.more3 ? (
                            <div className="bg-green-A100 flex flex-col items-center justify-start ml-[-4px] my-auto outline outline-[2px] outline-white-A700 rounded-[50%] w-6 z-[1]">
                              {!!props?.eight3 ? (
                                <Text
                                  className="h-6 leading-[18.00px] max-w-[24px] md:max-w-full text-center text-teal-700 text-xs"
                                  size="txtPublicSansMedium12"
                                >
                                  {props?.eight3}
                                </Text>
                              ) : null}
                            </div>
                          ) : null}
                        </div>
                      </div>
                    </div>
                    <div className="bg-white-A700 border border-blue_gray-300_28 border-solid flex flex-1 flex-col items-start justify-start p-5 rounded-[16px] w-full">
                      <div className="flex flex-col gap-2 items-start justify-start w-full">
                        <div className="flex flex-row items-start justify-between w-full">
                          {!!props?.iconsfileicfold5 ? (
                            <Img
                              className="h-9 mt-5 w-9"
                              alt="iconsfileicfold"
                              src={props?.iconsfileicfold5}
                            />
                          ) : null}
                          <div className="flex flex-row items-center justify-start mb-3 pr-2 pt-2 w-auto">
                            <div className="flex flex-col items-center justify-start w-9">
                              <div className="flex flex-col items-center justify-center p-2 w-9">
                                {!!props?.star17 ? (
                                  <Img
                                    className="h-5 w-5"
                                    alt="star"
                                    src={props?.star17}
                                  />
                                ) : null}
                              </div>
                            </div>
                            {!!props?.iconssolidic18 ? (
                              <Button
                                className="flex h-9 items-center justify-center w-9"
                                shape="circle"
                                size="md"
                              >
                                <Img
                                  className="h-5"
                                  alt="iconssolidic"
                                  src={props?.iconssolidic18}
                                />
                              </Button>
                            ) : null}
                          </div>
                        </div>
                        <div className="flex flex-col gap-1 items-start justify-start w-full">
                          {!!props?.weburl9 ? (
                            <Text
                              className="leading-[22.00px] max-w-[212px] md:max-w-full text-blue_gray-900 text-sm"
                              size="txtPublicSansSemiBold14"
                            >
                              {props?.weburl9}
                            </Text>
                          ) : null}
                          <div className="flex flex-row gap-1.5 items-center justify-center w-auto">
                            {!!props?.filesize17 ? (
                              <Text
                                className="text-blue_gray-300 text-xs w-auto"
                                size="txtPublicSansRegular12Bluegray300"
                              >
                                {props?.filesize17}
                              </Text>
                            ) : null}
                            {!!props?.dot17 ? (
                              <div className="bg-blue_gray-300 h-0.5 rounded-[50%] w-0.5"></div>
                            ) : null}
                            {!!props?.filescounter18 ? (
                              <Text
                                className="text-blue_gray-300 text-xs w-auto"
                                size="txtPublicSansRegular12Bluegray300"
                              >
                                {props?.filescounter18}
                              </Text>
                            ) : null}
                          </div>
                        </div>
                        <div className="flex relative w-[84px]">
                          <div className="flex my-auto w-[77%]">
                            <div className="flex my-auto w-[69%]">
                              <div
                                className="bg-cover bg-no-repeat flex flex-col h-6 items-center justify-center ml-[undefinedpx] my-auto outline outline-[2px] outline-white-A700 rounded-[50%] w-6 z-[1]"
                                style={{
                                  backgroundImage:
                                    "url('images/img_avatar1.png')",
                                }}
                              >
                                <div className="flex flex-col h-6 md:h-auto items-center justify-center rounded-[50%] w-6">
                                  {!!props?.imgavatarrand9 ? (
                                    <Img
                                      className="h-6 md:h-auto rounded-[50%] w-6"
                                      alt="imgavatarrand"
                                      src={props?.imgavatarrand9}
                                    />
                                  ) : null}
                                </div>
                              </div>
                              <div
                                className="bg-cover bg-no-repeat flex flex-col h-6 items-center justify-center ml-[-4px] my-auto outline outline-[2px] outline-white-A700 rounded-[50%] w-6 z-[1]"
                                style={{
                                  backgroundImage:
                                    "url('images/img_avatar2_24x24.png')",
                                }}
                              >
                                <div className="flex flex-col h-6 md:h-auto items-center justify-center rounded-[50%] w-6">
                                  {!!props?.imgavatarrandone8 ? (
                                    <Img
                                      className="h-6 md:h-auto rounded-[50%] w-6"
                                      alt="imgavatarrand_One"
                                      src={props?.imgavatarrandone8}
                                    />
                                  ) : null}
                                </div>
                              </div>
                            </div>
                            <div
                              className="bg-cover bg-no-repeat flex flex-col h-6 items-center justify-center ml-[-4px] my-auto outline outline-[2px] outline-white-A700 rounded-[50%] w-6 z-[1]"
                              style={{
                                backgroundImage:
                                  "url('images/img_avatar3.png')",
                              }}
                            >
                              <div className="flex flex-col h-6 md:h-auto items-center justify-center rounded-[50%] w-6">
                                {!!props?.imgavatarrandtwo7 ? (
                                  <Img
                                    className="h-6 md:h-auto rounded-[50%] w-6"
                                    alt="imgavatarrand_Two"
                                    src={props?.imgavatarrandtwo7}
                                  />
                                ) : null}
                              </div>
                            </div>
                          </div>
                          {!!props?.more3 ? (
                            <div className="bg-green-A100 flex flex-col items-center justify-start ml-[-4px] my-auto outline outline-[2px] outline-white-A700 rounded-[50%] w-6 z-[1]">
                              {!!props?.eight3 ? (
                                <Text
                                  className="h-6 leading-[18.00px] max-w-[24px] md:max-w-full text-center text-teal-700 text-xs"
                                  size="txtPublicSansMedium12"
                                >
                                  {props?.eight3}
                                </Text>
                              ) : null}
                            </div>
                          ) : null}
                        </div>
                      </div>
                    </div>
                    <div className="bg-white-A700 border border-blue_gray-300_28 border-solid flex flex-1 flex-col items-start justify-start p-5 rounded-[16px] w-full">
                      <div className="flex flex-col gap-2 items-start justify-start w-full">
                        <div className="flex flex-row items-start justify-between w-full">
                          {!!props?.iconsfileicfold5 ? (
                            <Img
                              className="h-9 mt-5 w-9"
                              alt="iconsfileicfold"
                              src={props?.iconsfileicfold5}
                            />
                          ) : null}
                          <div className="flex flex-row items-center justify-start mb-3 pr-2 pt-2 w-auto">
                            <div className="flex flex-col items-center justify-start w-9">
                              <div className="flex flex-col items-center justify-center p-2 w-9">
                                {!!props?.star17 ? (
                                  <Img
                                    className="h-5 w-5"
                                    alt="star"
                                    src={props?.star17}
                                  />
                                ) : null}
                              </div>
                            </div>
                            {!!props?.iconssolidic18 ? (
                              <Button
                                className="flex h-9 items-center justify-center w-9"
                                shape="circle"
                                size="md"
                              >
                                <Img
                                  className="h-5"
                                  alt="iconssolidic"
                                  src={props?.iconssolidic18}
                                />
                              </Button>
                            ) : null}
                          </div>
                        </div>
                        <div className="flex flex-col gap-1 items-start justify-start w-full">
                          {!!props?.weburl9 ? (
                            <Text
                              className="leading-[22.00px] max-w-[212px] md:max-w-full text-blue_gray-900 text-sm"
                              size="txtPublicSansSemiBold14"
                            >
                              {props?.weburl9}
                            </Text>
                          ) : null}
                          <div className="flex flex-row gap-1.5 items-center justify-center w-auto">
                            {!!props?.filesize17 ? (
                              <Text
                                className="text-blue_gray-300 text-xs w-auto"
                                size="txtPublicSansRegular12Bluegray300"
                              >
                                {props?.filesize17}
                              </Text>
                            ) : null}
                            {!!props?.dot17 ? (
                              <div className="bg-blue_gray-300 h-0.5 rounded-[50%] w-0.5"></div>
                            ) : null}
                            {!!props?.filescounter18 ? (
                              <Text
                                className="text-blue_gray-300 text-xs w-auto"
                                size="txtPublicSansRegular12Bluegray300"
                              >
                                {props?.filescounter18}
                              </Text>
                            ) : null}
                          </div>
                        </div>
                        <div className="flex relative w-[84px]">
                          <div className="flex my-auto w-[77%]">
                            <div className="flex my-auto w-[69%]">
                              <div
                                className="bg-cover bg-no-repeat flex flex-col h-6 items-center justify-center ml-[undefinedpx] my-auto outline outline-[2px] outline-white-A700 rounded-[50%] w-6 z-[1]"
                                style={{
                                  backgroundImage:
                                    "url('images/img_avatar1.png')",
                                }}
                              >
                                <div className="flex flex-col h-6 md:h-auto items-center justify-center rounded-[50%] w-6">
                                  {!!props?.imgavatarrand9 ? (
                                    <Img
                                      className="h-6 md:h-auto rounded-[50%] w-6"
                                      alt="imgavatarrand"
                                      src={props?.imgavatarrand9}
                                    />
                                  ) : null}
                                </div>
                              </div>
                              <div
                                className="bg-cover bg-no-repeat flex flex-col h-6 items-center justify-center ml-[-4px] my-auto outline outline-[2px] outline-white-A700 rounded-[50%] w-6 z-[1]"
                                style={{
                                  backgroundImage:
                                    "url('images/img_avatar2_24x24.png')",
                                }}
                              >
                                <div className="flex flex-col h-6 md:h-auto items-center justify-center rounded-[50%] w-6">
                                  {!!props?.imgavatarrandone8 ? (
                                    <Img
                                      className="h-6 md:h-auto rounded-[50%] w-6"
                                      alt="imgavatarrand_One"
                                      src={props?.imgavatarrandone8}
                                    />
                                  ) : null}
                                </div>
                              </div>
                            </div>
                            <div
                              className="bg-cover bg-no-repeat flex flex-col h-6 items-center justify-center ml-[-4px] my-auto outline outline-[2px] outline-white-A700 rounded-[50%] w-6 z-[1]"
                              style={{
                                backgroundImage:
                                  "url('images/img_avatar3.png')",
                              }}
                            >
                              <div className="flex flex-col h-6 md:h-auto items-center justify-center rounded-[50%] w-6">
                                {!!props?.imgavatarrandtwo7 ? (
                                  <Img
                                    className="h-6 md:h-auto rounded-[50%] w-6"
                                    alt="imgavatarrand_Two"
                                    src={props?.imgavatarrandtwo7}
                                  />
                                ) : null}
                              </div>
                            </div>
                          </div>
                          {!!props?.more3 ? (
                            <div className="bg-green-A100 flex flex-col items-center justify-start ml-[-4px] my-auto outline outline-[2px] outline-white-A700 rounded-[50%] w-6 z-[1]">
                              {!!props?.eight3 ? (
                                <Text
                                  className="h-6 leading-[18.00px] max-w-[24px] md:max-w-full text-center text-teal-700 text-xs"
                                  size="txtPublicSansMedium12"
                                >
                                  {props?.eight3}
                                </Text>
                              ) : null}
                            </div>
                          ) : null}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-[9%] flex flex-col items-center justify-center p-6 sm:px-5 right-[0] w-auto">
                <div className="bg-blue_gray-900 flex flex-row gap-4 items-center justify-center pl-2 pr-4 py-3 rounded-[12px] shadow-bs12 w-auto">
                  <div className="flex flex-row items-center justify-start w-auto">
                    <div className="flex flex-col items-center justify-center p-2 w-10">
                      {!!props?.checkmark2 ? (
                        <Img
                          className="h-6 w-6"
                          alt="checkmark"
                          src={props?.checkmark2}
                        />
                      ) : null}
                    </div>
                    {!!props?.labelThree ? (
                      <Text
                        className="text-sm text-white-A700 w-auto"
                        size="txtPublicSansSemiBold14WhiteA700"
                      >
                        {props?.labelThree}
                      </Text>
                    ) : null}
                  </div>
                  <div className="flex flex-row gap-2 items-center justify-center w-auto">
                    {!!props?.delete ? (
                      <Button
                        className="border border-deep_orange-500 border-solid cursor-pointer flex items-center justify-center min-w-[83px]"
                        leftIcon={
                          <Img
                            className="h-[18px] mr-2"
                            src="images/img_trash_white_a700.svg"
                            alt="trash"
                          />
                        }
                        shape="round"
                        color="deep_orange_500"
                        size="sm"
                        variant="fill"
                      >
                        <div className="!text-white-A700 font-bold font-publicsans text-[13px] text-left">
                          {props?.delete}
                        </div>
                      </Button>
                    ) : null}
                    {!!props?.share ? (
                      <Button
                        className="cursor-pointer flex items-center justify-center min-w-[79px]"
                        leftIcon={
                          <Img
                            className="h-[18px] mr-2"
                            src="images/img_search_white_a700_16x16.svg"
                            alt="search"
                          />
                        }
                        shape="round"
                        color="teal_500"
                        size="sm"
                        variant="fill"
                      >
                        <div className="!text-white-A700 font-bold font-publicsans text-[13px] text-left">
                          {props?.share}
                        </div>
                      </Button>
                    ) : null}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

AppRowlogo.defaultProps = {
  subheader: "Overview",
  dashboard: "images/img_dashboard_blue_gray_500.svg",
  title: "App",
  icon: "images/img_icon_blue_gray_300.svg",
  titleOne: "E-commerce",
  iconOne: "images/img_icon_blue_gray_300_24x24.svg",
  titleTwo: "Analytics",
  iconTwo: "images/img_icon_blue_gray_500_24x24.svg",
  titleThree: "Banking",
  iconThree: "images/img_icon_24x24.svg",
  titleFour: "Booking",
  iconFour: "images/img_icon_1.svg",
  titleFive: "File",
  subheaderOne: "Management",
  user: "images/img_user_blue_gray_500.svg",
  titleSix: "User",
  arrowright: "images/img_arrowright_blue_gray_500_16x16.svg",
  iconFive: "images/img_icon_2.svg",
  titleSeven: "Product",
  arrowrightOne: "images/img_arrowright_blue_gray_500_16x16.svg",
  cart: "images/img_cart_blue_gray_500.svg",
  titleEight: "Order",
  arrowrightTwo: "images/img_arrowright_blue_gray_500_16x16.svg",
  call: "images/img_call.svg",
  titleNine: "Invoice",
  arrowrightThree: "images/img_arrowright_blue_gray_500_16x16.svg",
  sort: "images/img_sort_blue_gray_500.svg",
  titleTen: "Blog",
  arrowrightFour: "images/img_arrowright_blue_gray_500_16x16.svg",
  iconSix: "images/img_icon_3.svg",
  titleEleven: "Job",
  arrowrightFive: "images/img_arrowright_blue_gray_500_16x16.svg",
  iconSeven: "images/img_icon_4.svg",
  titleTwelve: "Tour",
  arrowrightSix: "images/img_arrowright_blue_gray_500_16x16.svg",
  volume: "images/img_volume_teal_500.svg",
  titleThirteen: "File Manager",
  bag: "images/img_bag.svg",
  titleFourteen: "Mail",
  callOne: "images/img_call_blue_gray_500.svg",
  titleFifteen: "Chat",
  calendar: "images/img_calendar.svg",
  titleSixteen: "Calendar",
  iconEight: "images/img_icon_5.svg",
  titleSeventeen: "Kanban",
  nameforty: "Hudson Alvarez",
  email: "hudson.alvarez@gmail.com",
  upgradeToPro: "Upgrade to Pro",
};

export default AppRowlogo;
