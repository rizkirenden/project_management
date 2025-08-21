import React from "react";

type BadgeProps = {
  children: React.ReactNode;
  color?: "gray" | "blue" | "green" | "red";
  className?: string;
};

export const Badge: React.FC<BadgeProps> = ({
  children,
  color = "gray",
  className = "",
}) => {
  const colors = {
    gray: "bg-gray-200 text-gray-700",
    blue: "bg-blue-100 text-blue-700",
    green: "bg-green-100 text-green-700",
    red: "bg-red-100 text-red-700",
  };

  return (
    <span
      className={`inline-block px-2 py-1 text-xs font-medium rounded-full ${colors[color]} ${className}`}
    >
      {children}
    </span>
  );
};
