import React from "react";

const variantClasses = {
  h1: "font-semibold sm:text-5xl md:text-5xl text-[64px]",
  h2: "font-semibold md:text-5xl sm:text-[42px] text-[56px]",
  h3: "font-black md:text-4xl sm:text-[34px] text-[38px]",
  h4: "md:text-3xl sm:text-[28px] text-[32px]",
  h5: "text-2xl md:text-[22px] sm:text-xl",
  h6: "font-extrabold text-[22px] sm:text-lg md:text-xl",
  body1: "font-black text-lg",
  body2: "text-base",
  body3: "font-normal text-sm",
  body4: "text-xs",
  body5: "font-medium text-[10px]",
};

const Text = ({ children, className = "", variant, as, ...restProps }) => {
  const Component = as || "span";
  return (
    <Component
      className={`${className} ${variant && variantClasses[variant]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
