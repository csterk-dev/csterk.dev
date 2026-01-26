"use client";

import { chakra, createRecipeContext } from "@chakra-ui/react";
import { forwardRef } from "react";

const { useRecipeResult, PropsProvider } = createRecipeContext({ key: "divider" });

export interface DividerProps extends React.ComponentProps<typeof chakra.span> {
  variant?: "subtle" | "accent" | "strong";
  orientation?: "horizontal" | "vertical";
}

export const Divider = forwardRef<HTMLSpanElement, DividerProps>(function Divider(props, ref) {
  const { styles, className, props: otherProps } = useRecipeResult(props);
  const { className: userClassName, ...rest } = otherProps;
  const orientation = props.orientation ?? "horizontal";
  const mergedClassName = [className, userClassName].filter(Boolean).join(" ") || undefined;
  return (
    <chakra.span
      aria-orientation={orientation}
      className={mergedClassName}
      css={[styles, props.css]}
      ref={ref}
      role="separator"
      {...rest}
    />
  );
});

Divider.displayName = "Divider";
export const DividerPropsProvider = PropsProvider;
