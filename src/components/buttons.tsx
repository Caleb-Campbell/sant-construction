import React, { type ButtonHTMLAttributes } from 'react';

type ButtonVariant = 'outline' | 'warning' | 'primary' | 'secondary';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
};

const Button: React.FC<ButtonProps> = ({ variant = 'primary', ...rest }) => {
  let variantClasses = '';
  switch (variant) {
    case 'outline':
      variantClasses = 'border border-gray-500 text-gray-500 hover:bg-gray-500 hover:text-white';
      break;
    case 'warning':
      variantClasses = 'bg-red-500 text-white hover:bg-red-600';
      break;
    case 'primary':
      variantClasses = 'bg-blue-500 text-white hover:bg-blue-600';
      break;
    case 'secondary':
      variantClasses = 'bg-gray-500 text-white hover:bg-gray-600';
      break;
    default:
      break;
  }

  return (
    <button
      className={`px-4 py-2 rounded-sm transition-all focus:outline-none ${variantClasses}`}
      {...rest}
    />
  );
};

export default Button;
