import React from "react";

import { Button, Img, Input, List, SelectBox, Text } from "components";
import FAQsFaqcategory from "components/FAQsFaqcategory";
import FAQsFaqcategory1 from "components/FAQsFaqcategory1";
import FAQsFaqcontent from "components/FAQsFaqcontent";
import FAQsFaqhero from "components/FAQsFaqhero";
import Footer from "components/Footer";
import Header1 from "components/Header1";

import { CloseSVG } from "../../assets/images";

const questionsCounterOneOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const questionsCounterTwoOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const questionsCounterThreeOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const questionsCounterFourOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const questionsCounterFiveOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const questionsCounterSixOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const questionsCounterSevenOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const FAQsPage: React.FC = () => {
  const [wrapvalue, setWrapvalue] = React.useState<string>("");

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-publicsans items-start justify-start mx-auto w-auto sm:w-full md:w-full">
        <Header1
          className="bg-cover bg-no-repeat flex h-20 md:h-auto items-center justify-center px-36 md:px-5 w-full"
          style={{ backgroundImage: "url('images/img_mainheader.svg')" }}
        />
        <FAQsFaqhero
          className="flex flex-col items-center justify-start w-full"
          startanewprojec={
            <Text className="font-extrabold leading-[80.00px] md:text-5xl text-[64px] text-white-A700">
              <span className="text-teal-500 font-publicsans text-left">
                How
              </span>
              <span className="text-white-A700 font-publicsans text-left">
                <>
                  {" "}
                  <br />
                </>
              </span>
              <span className="text-white-A700 font-publicsans text-left">
                C
              </span>
              <span className="text-white-A700 font-publicsans text-left">
                an we help you
              </span>
              <span className="text-white-A700 font-publicsans text-left">
                ?
              </span>
            </Text>
          }
        />
        <List
          className="sm:flex-col flex-row gap-6 grid sm:grid-cols-1 md:grid-cols-3 grid-cols-6 justify-start max-w-[1440px] pb-10 pt-[120px] md:px-10 px-36 sm:px-5 w-full"
          orientation="horizontal"
        >
          <FAQsFaqcategory
            className="bg-white-A700 border hover:border-0 border-blue_gray-300_28 border-solid hover:cursor-pointer flex flex-1 flex-col gap-4 items-center justify-start hover:mx-0 p-6 md:px-5 rounded-[16px] hover:shadow-bs9 hover:w-full w-full"
            usertext="Managing your account"
          />
          <FAQsFaqcategory1 className="bg-white-A700 border hover:border-0 border-blue_gray-300_28 border-solid hover:cursor-pointer flex flex-1 flex-col gap-4 items-center justify-start hover:mx-0 p-6 md:px-5 rounded-[16px] hover:shadow-bs9 shadow-bs9 hover:w-full w-full" />
          <FAQsFaqcategory
            className="bg-white-A700 border hover:border-0 border-blue_gray-300_28 border-solid hover:cursor-pointer flex flex-1 flex-col gap-4 items-center justify-start hover:mx-0 p-6 md:px-5 rounded-[16px] hover:shadow-bs9 hover:w-full w-full"
            userimage="images/img_car_amber_300.svg"
          />
          <FAQsFaqcategory
            className="bg-white-A700 border hover:border-0 border-blue_gray-300_28 border-solid hover:cursor-pointer flex flex-1 flex-col gap-4 items-center justify-start hover:mx-0 p-6 md:px-5 rounded-[16px] hover:shadow-bs9 hover:w-full w-full"
            userimage="images/img_stack.svg"
          />
          <FAQsFaqcategory
            className="bg-white-A700 border hover:border-0 border-blue_gray-300_28 border-solid hover:cursor-pointer flex flex-1 flex-col gap-4 items-center justify-start hover:mx-0 p-6 md:px-5 rounded-[16px] hover:shadow-bs9 hover:w-full w-full"
            userimage="images/img_alarm.svg"
          />
          <FAQsFaqcategory
            className="bg-white-A700 border hover:border-0 border-blue_gray-300_28 border-solid hover:cursor-pointer flex flex-1 flex-col gap-4 items-center justify-start hover:mx-0 p-6 md:px-5 rounded-[16px] hover:shadow-bs9 hover:w-full w-full"
            userimage="images/img_folder_amber_a700.svg"
            usertext="Guarantees and assurances"
          />
        </List>
        <FAQsFaqcontent className="bg-white-A700 flex flex-col md:gap-10 gap-20 items-start justify-start max-w-[1440px] pb-20 pt-10 md:px-10 px-36 sm:px-5 w-full" />
        <Footer className="bg-white-A700 border-blue_gray-300_33 border-solid border-t flex gap-20 items-center justify-center pb-10 pt-20 px-36 md:px-5 w-full" />
      </div>
    </>
  );
};

export default FAQsPage;
