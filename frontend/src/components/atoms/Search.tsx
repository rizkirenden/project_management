import React from "react";

type SearchProps = React.InputHTMLAttributes<HTMLInputElement> & {
  className?: string;
};

export const Search: React.FC<SearchProps> = ({ className = "", ...props }) => {
  return (
    <input
      type="text"
      className={`border rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
      {...props}
    />
  );
};
