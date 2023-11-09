import React from "react";

import { Button, Img, Input, List, Text, TextArea } from "components";
import ContactContactcontent from "components/ContactContactcontent";
import ContactContacthero from "components/ContactContacthero";
import Footer from "components/Footer";
import Header1 from "components/Header1";

const ContactPage: React.FC = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-publicsans items-start justify-start mx-auto w-auto sm:w-full md:w-full">
        <Header1
          className="bg-cover bg-no-repeat flex h-20 md:h-auto items-center justify-center px-36 md:px-5 w-full"
          style={{ backgroundImage: "url('images/img_mainheader.svg')" }}
        />
        <ContactContacthero
          className="flex flex-col items-center justify-start w-full"
          wheretofindus={
            <Text className="font-extrabold leading-[80.00px] md:text-5xl text-[64px] text-white-A700">
              <span className="text-teal-500 font-publicsans text-left">
                Where
              </span>
              <span className="text-white-A700 font-publicsans text-left">
                <>
                  {" "}
                  <br />
                  to find us?
                </>
              </span>
            </Text>
          }
        />
        <ContactContactcontent className="bg-white-A700 flex md:flex-col flex-row md:gap-10 gap-20 items-start justify-start max-w-[1440px] md:px-10 px-36 sm:px-5 py-20 w-full" />
        <Footer className="bg-white-A700 border-blue_gray-300_33 border-solid border-t flex gap-20 items-center justify-center pb-10 pt-20 px-36 md:px-5 w-full" />
      </div>
    </>
  );
};

export default ContactPage;
