import React from "react";

const shapes = {
  square: "rounded-none",
  round: "rounded-lg",
  circle: "rounded-[50%]",
} as const;
const variants = {
  outline: {
    blue_gray_900: "border border-blue_gray-900 border-solid",
    white_A700_7a: "border border-solid border-white-A700_7a",
    blue_gray_300_51:
      "border border-blue_gray-300_51 border-solid text-blue_gray-900",
    blue_gray_300_33: "border border-blue_gray-300_33 border-solid",
  },
  fill: {
    teal_500_14: "bg-teal-500_14",
    cyan_A700: "bg-cyan-A700 shadow-bs",
    blue_gray_300_33: "bg-blue_gray-300_33",
    blue_gray_900_85: "bg-blue_gray-900_85",
    deep_orange_500: "bg-deep_orange-500",
    gray_100: "bg-gray-100",
    teal_500_28: "bg-teal-500_28",
    deep_purple_A200_28: "bg-deep_purple-A200_28",
    teal_700: "bg-teal-700",
    teal_500: "bg-teal-500",
    deep_orange_500_14: "bg-deep_orange-500_14",
    cyan_A700_28: "bg-cyan-A700_28",
    amber_A700: "bg-amber-A700",
    amber_A700_28: "bg-amber-A700_28",
    blue_gray_300_28: "bg-blue_gray-300_28",
    blue_gray_300_1e: "bg-blue_gray-300_1e",
    white_A700: "bg-white-A700",
    deep_orange_500_28: "bg-deep_orange-500_28",
    blue_gray_300_14: "bg-blue_gray-300_14",
    green_A700_28: "bg-green-A700_28",
    blue_gray_900: "bg-blue_gray-900 text-white-A700",
  },
} as const;
const sizes = {
  xs: "p-0.5",
  sm: "pl-[5px] pr-1.5 py-1.5",
  md: "p-2",
  lg: "p-3",
  xl: "p-[15px]",
  "2xl": "p-[18px]",
} as const;

export type ButtonProps = Omit<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >,
  "onClick"
> &
  Partial<{
    className: string;
    shape: keyof typeof shapes;
    variant: keyof typeof variants;
    size: keyof typeof sizes;
    color: string;
    leftIcon: React.ReactNode;
    rightIcon: React.ReactNode;
    onClick: () => void;
  }>;

const Button: React.FC<React.PropsWithChildren<ButtonProps>> = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "",
  variant = "",
  color = "",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

export { Button };
