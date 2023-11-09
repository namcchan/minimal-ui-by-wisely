import React from "react";

import { Button, Img, Input, Text } from "components";
import ForgotPasswordModernStackimg from "components/ForgotPasswordModernStackimg";

const ForgotPasswordModernPage: React.FC = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-publicsans items-center justify-end mx-auto w-full">
        <ForgotPasswordModernStackimg className="h-[1052px] md:px-5 relative w-full" />
      </div>
    </>
  );
};

export default ForgotPasswordModernPage;
