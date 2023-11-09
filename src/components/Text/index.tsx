import React from "react";

const sizeClasses = {
  txtPublicSansSemiBold16: "font-publicsans font-semibold",
  txtPublicSansMedium13Bluegray900: "font-medium font-publicsans",
  txtPublicSansSemiBold12: "font-publicsans font-semibold",
  txtPublicSansSemiBold16Deeporange500: "font-publicsans font-semibold",
  txtPublicSansSemiBold14: "font-publicsans font-semibold",
  txtPublicSansBold20: "font-bold font-publicsans",
  txtPublicSansSemiBold16Bluegray300: "font-publicsans font-semibold",
  txtPublicSansBold24: "font-bold font-publicsans",
  txtPublicSansExtraBold64: "font-extrabold font-publicsans",
  txtPublicSansBold12WhiteA70085: "font-bold font-publicsans",
  txtPublicSansBold12Lightblue900: "font-bold font-publicsans",
  txtPublicSansRegular14Teal900a2: "font-normal font-publicsans",
  txtPublicSansRegular16WhiteA700: "font-normal font-publicsans",
  txtPublicSansRegular14Deeporange500: "font-normal font-publicsans",
  txtPublicSansRegular16Bluegray900: "font-normal font-publicsans",
  txtPublicSansExtraBold48WhiteA700: "font-extrabold font-publicsans",
  txtPublicSansRegular12WhiteA70094: "font-normal font-publicsans",
  txtPublicSansBold20Bluegray300: "font-bold font-publicsans",
  txtPublicSansRegular16Bluegray300: "font-normal font-publicsans",
  txtPublicSansBold24Teal900: "font-bold font-publicsans",
  txtPublicSansBold18Bluegray900: "font-bold font-publicsans",
  txtPublicSansBold24WhiteA700: "font-bold font-publicsans",
  txtPublicSansRegular14WhiteA700a2: "font-normal font-publicsans",
  txtPublicSansSemiBold14WhiteA70085: "font-publicsans font-semibold",
  txtPublicSansBold12CyanA700: "font-bold font-publicsans",
  txtPublicSansRegular14Teal90001: "font-normal font-publicsans",
  txtPublicSansBold12GreenA70001: "font-bold font-publicsans",
  txtPublicSansSemiBold14DeeppurpleA20001: "font-publicsans font-semibold",
  txtPublicSansBold18WhiteA700: "font-bold font-publicsans",
  txtPublicSansExtraBold48AmberA700: "font-extrabold font-publicsans",
  txtPublicSansBold12Bluegray900: "font-bold font-publicsans",
  txtPublicSansBold32: "font-bold font-publicsans",
  txtPublicSansSemiBold16WhiteA700: "font-publicsans font-semibold",
  txtPublicSansRegular14Bluegray300: "font-normal font-publicsans",
  txtPublicSansBold12Bluegray9007e: "font-bold font-publicsans",
  txtPublicSansBold12WhiteA700: "font-bold font-publicsans",
  txtPublicSansBold12Bluegray500: "font-bold font-publicsans",
  txtPublicSansRegular12WhiteA70085: "font-normal font-publicsans",
  txtPublicSansRegular14Bluegray500: "font-normal font-publicsans",
  txtPublicSansMedium13: "font-medium font-publicsans",
  txtPublicSansMedium12: "font-medium font-publicsans",
  txtPublicSansSemiBold14WhiteA700: "font-publicsans font-semibold",
  txtPublicSansRegular12Teal500: "font-normal font-publicsans",
  txtPublicSansMedium10: "font-medium font-publicsans",
  txtPublicSansRegular14WhiteA700: "font-normal font-publicsans",
  txtPublicSansMedium14: "font-medium font-publicsans",
  txtPublicSansSemiBold14Bluegray500: "font-publicsans font-semibold",
  txtPublicSansBold12Teal500: "font-bold font-publicsans",
  txtPublicSansBold13Teal500: "font-bold font-publicsans",
  txtPublicSansSemiBold14Teal90094: "font-publicsans font-semibold",
  txtPublicSansRegular14Teal500: "font-normal font-publicsans",
  txtPublicSansSemiBold14Bluegray300: "font-publicsans font-semibold",
  txtBarlowBlack96: "font-barlow font-black",
  txtPublicSansBold12WhiteA7009b: "font-bold font-publicsans",
  txtPublicSansBold14WhiteA700: "font-bold font-publicsans",
  txtPublicSansRegular14WhiteA70085: "font-normal font-publicsans",
  txtPublicSansRegular12Bluegray300: "font-normal font-publicsans",
  txtPublicSansBold20WhiteA700: "font-bold font-publicsans",
  txtPublicSansSemiBold14Teal900: "font-publicsans font-semibold",
  txtPublicSansBold14Teal500: "font-bold font-publicsans",
  txtPublicSansExtraBold48: "font-extrabold font-publicsans",
  txtPublicSansSemiBold14Teal500: "font-publicsans font-semibold",
  txtPublicSansBold32Teal900: "font-bold font-publicsans",
  txtPublicSansRegular12Bluegray900: "font-normal font-publicsans",
  txtPublicSansRegular12: "font-normal font-publicsans",
  txtPublicSansRegular14: "font-normal font-publicsans",
  txtPublicSansRegular16: "font-normal font-publicsans",
  txtPublicSansBold11: "font-bold font-publicsans",
  txtPublicSansBold13: "font-bold font-publicsans",
  txtPublicSansBold12: "font-bold font-publicsans",
  txtPublicSansBold15: "font-bold font-publicsans",
  txtPublicSansBold14: "font-bold font-publicsans",
  txtPublicSansBold32WhiteA700: "font-bold font-publicsans",
  txtPublicSansBold18: "font-bold font-publicsans",
  txtPublicSansRegular12WhiteA700: "font-normal font-publicsans",
  txtPublicSansRegular14WhiteA70094: "font-normal font-publicsans",
  txtPublicSansItalic12: "font-normal font-publicsans italic",
} as const;

export type TextProps = Partial<{
  className: string;
  size: keyof typeof sizeClasses;
  as: any;
}> &
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
  >;

const Text: React.FC<React.PropsWithChildren<TextProps>> = ({
  children,
  className = "",
  size,
  as,
  ...restProps
}) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
