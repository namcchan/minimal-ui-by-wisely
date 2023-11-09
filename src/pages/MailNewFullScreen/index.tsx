import React from "react";

import { Button, Img, Input, Text } from "components";
import MailNewFullScreenMailcompose from "components/MailNewFullScreenMailcompose";

const MailNewFullScreenPage: React.FC = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-publicsans items-center justify-start mx-auto w-full">
        <MailNewFullScreenMailcompose
          className="bg-cover bg-no-repeat flex flex-col h-[1024px] items-center justify-start p-4 rounded-[24px] w-full"
          style={{
            backgroundImage: "url('images/img_dialognewcreditcard.svg')",
          }}
        />
      </div>
    </>
  );
};

export default MailNewFullScreenPage;
