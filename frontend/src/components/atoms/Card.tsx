import React from "react";

type CardProps = {
  children: React.ReactNode;
  className?: string;
};

export const Card: React.FC<CardProps> = ({ children, className = "" }) => {
  return (
    <div className={`rounded-xl shadow-md p-4 bg-white ${className}`}>
      {children}
    </div>
  );
};
