import React from "react";
import PropTypes from "prop-types";

const shapes = { CircleBorder20: "rounded-[20px]", RoundedBorder4: "rounded" };
const variants = {
  GradientIndigoA700LightblueA700: "bg-gradient  text-white_A700",
  OutlineRed300: "border-2 border-red_300 border-solid text-red_300",
  FillGreen500: "bg-green_500 text-white_A700",
};
const sizes = { sm: "p-2.5", md: "p-[18px]" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant,
  size,
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["CircleBorder20", "RoundedBorder4"]),
  variant: PropTypes.oneOf([
    "GradientIndigoA700LightblueA700",
    "OutlineRed300",
    "FillGreen500",
  ]),
  size: PropTypes.oneOf(["sm", "md"]),
};

Button.defaultProps = { className: "", shape: "", variant: "", size: "" };
export { Button };
