import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'accent' | 'outline' | 'white';
  fullWidth?: boolean;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  fullWidth = false, 
  children, 
  className = '', 
  ...props 
}) => {
  const baseStyles = "font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2 text-sm tracking-wide";
  
  const variants = {
    primary: "bg-brand-primary text-white hover:bg-blue-700 shadow-lg shadow-blue-500/30 border border-transparent",
    accent: "bg-brand-accent text-white hover:bg-orange-600 shadow-lg shadow-orange-500/30 border border-transparent",
    outline: "bg-transparent border-2 border-brand-dark text-brand-dark hover:bg-brand-dark hover:text-white",
    white: "bg-white text-brand-primary hover:bg-gray-50 shadow-md border border-gray-100",
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;