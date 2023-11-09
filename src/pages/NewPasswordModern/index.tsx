import React from "react";

import { Button, FloatingInput, Img, Input, Line, Text } from "components";
import ForgotPasswordModernStackimg from "components/ForgotPasswordModernStackimg";

const NewPasswordModernPage: React.FC = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-publicsans items-center justify-end mx-auto w-full">
        <ForgotPasswordModernStackimg
          className="h-[1052px] md:px-5 relative w-full"
          iconsothericema="images/img_iconsothericemailsent.svg"
          pleasecheckyour="Request sent successfully!"
          weveemaileda={
            <>
              We&#39;ve sent a 6-digit confirmation email to your email. Please
              enter the code in below box to verify your email.
            </>
          }
          two="2"
          twoOne="2"
          twoTwo="2"
          twoThree="2"
          three="-"
          updatePassword="Update Password"
          language="Don’t have a code? "
          resendcode=" Resend code"
          arrowleft="images/img_arrowleft.svg"
          resendcode1="Return to sign in"
        />
      </div>
    </>
  );
};

export default NewPasswordModernPage;
