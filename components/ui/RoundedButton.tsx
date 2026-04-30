import React from 'react';
import { IconType } from 'react-icons';

interface ButtonProps {
  icon: IconType,
  className?: string
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}



const RoundedButton: React.FC<ButtonProps> = (
  {
    variant = "primary",
    size = "md",
    icon,
    className = "",
    ...props
  }
) => {
  const baseStyles = "inline-flex rounded-full text-[30px]  cursor-pointer items-center justify-center  font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

  const variants = {
    primary: "bg-red-600 text-white hover:bg-red-700 focus:ring-red-600",
    secondary: "bg-red-100 text-red-600 hover:bg-red-200 focus:ring-red-200",
    outline: "border border-red-600 text-red-600 hover:bg-red-50 focus:ring-red-100",
    ghost: "text-red-600 hover:text-black hover:bg-red-50 focus:ring-red-50",
  };

  const sizes = {
    sm: "px-4 py-4 text-sm",
    md: "px-6 py-6 text-base",
    lg: "px-8 py-8 text-lg",
  };


  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {React.createElement(icon)}
    </button>
  );
}

export default RoundedButton;
