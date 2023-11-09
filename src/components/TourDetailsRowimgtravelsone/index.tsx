import React from "react";

import { Img } from "components";

type TourDetailsRowimgtravelsoneProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  Partial<{}>;

const TourDetailsRowimgtravelsone: React.FC<
  TourDetailsRowimgtravelsoneProps
> = (props) => {
  return (
    <>
      <div className={props.className}>
        <Img
          className="flex-1 md:flex-none h-[536px] sm:h-auto object-cover rounded-[12px] w-full"
          src="images/img_imgtravels1_536x536.png"
          alt="imgtravelsOne"
        />
        <div className="flex flex-col gap-2 sm:h-auto h-full items-start justify-start w-[536px] sm:w-full">
          <div className="flex sm:flex-col flex-row gap-2 h-full items-start justify-start w-full">
            <Img
              className="flex-1 h-[264px] md:h-auto object-cover rounded-[12px] w-full"
              src="defaultNoData.png"
              alt="imgtravelsTwo"
            />
            <Img
              className="flex-1 h-[264px] md:h-auto object-cover rounded-[12px] w-full"
              src="images/img_imgtravels3.png"
              alt="imgtravelsThree"
            />
          </div>
          <div className="flex sm:flex-col flex-row gap-2 h-full items-start justify-start w-full">
            <Img
              className="flex-1 h-[264px] md:h-auto object-cover rounded-[12px] w-full"
              src="images/img_imgtravels4_48x44.png"
              alt="imgtravelsFour"
            />
            <Img
              className="flex-1 h-[264px] md:h-auto object-cover rounded-[12px] w-full"
              src="images/img_imgtravels5.png"
              alt="imgtravelsFive"
            />
          </div>
        </div>
      </div>
    </>
  );
};

TourDetailsRowimgtravelsone.defaultProps = {};

export default TourDetailsRowimgtravelsone;
