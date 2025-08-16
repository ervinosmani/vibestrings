import * as React from "react";

type CardProps = React.HTMLAttributes<HTMLDivElement> & {
  hover?: boolean;
  padded?: boolean;
};

export default function Card({
  className = "",
  hover = true,
  padded = true,
  ...rest
}: CardProps) {
  return (
    <div
      className={[
        "rounded-2xl border border-white/10 bg-white/[0.02] shadow-sm",
        hover ? "transition-colors hover:bg-white/[0.04]" : "",
        padded ? "p-4" : "",
        className,
      ].join(" ")}
      {...rest}
    />
  );
}
