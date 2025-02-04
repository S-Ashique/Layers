import React, { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

const Card = (props: {
  title: string;
  description: string;
  children?: ReactNode;
  className?: string;
}) => {
  const { description, title, children, className } = props;
  return (
    <div
      className={twMerge(
        "bg-neutral-900 border border-white/10 p-6 rounded-3xl",
        className
      )}
    >
      <div className="aspect-video">{children} </div>
      <div className="">
        <h3 className="text-3xl font-medium mt-6">{title}</h3>
        <p className="text-white/50 mt-2">{description}</p>
      </div>
    </div>
  );
};

export default Card;
