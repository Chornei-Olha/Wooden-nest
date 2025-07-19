'use client';
import React, { useState, forwardRef } from 'react';

interface EditTextProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string;
  error?: string;
  helperText?: string;
  variant?: 'filled' | 'outlined' | 'standard';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  className?: string;
}

const EditText = forwardRef<HTMLInputElement, EditTextProps>(
  (
    {
      label,
      error,
      helperText,
      variant = 'filled',
      size = 'md',
      fullWidth = true,
      startIcon,
      endIcon,
      className = '',
      disabled = false,
      ...props
    },
    ref
  ) => {
    const [focused, setFocused] = useState(false);

    const variants = {
      filled: `bg-global-11 border-0 focus:bg-global-10 focus:ring-2 focus:ring-global-3`,
      outlined: `bg-transparent border border-global-7 focus:border-global-3 focus:ring-2 focus:ring-global-3`,
      standard: `bg-transparent border-0 border-b border-global-7 focus:border-global-3 rounded-none`,
    };

    const sizes = {
      sm: 'px-3 py-2 text-sm sm:px-4 sm:py-2.5 sm:text-sm',
      md: 'px-4 py-4 text-sm sm:px-5 sm:py-5 sm:text-base md:px-[16px] md:py-[22px] md:text-[14px]',
      lg: 'px-5 py-4 text-base sm:px-6 sm:py-5 sm:text-lg',
    };

    const inputClasses = `
    w-full
    font-montserrat
    font-normal
    text-global-9
    placeholder:text-global-9
    transition-all
    duration-200
    ease-in-out
    focus:outline-none
    disabled:opacity-50
    disabled:cursor-not-allowed
    ${variants[variant]}
    ${sizes[size]}
    ${variant !== 'standard' ? 'rounded-sm sm:rounded md:rounded-lg' : ''}
    ${error ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''}
    ${fullWidth ? 'w-full' : ''}
    ${className}
  `
      .trim()
      .replace(/\s+/g, ' ');

    return (
      <div className={`${fullWidth ? 'w-full' : ''} space-y-1`}>
        {label && (
          <label className="block text-sm font-medium text-global-2 mb-1 sm:mb-2">{label}</label>
        )}

        <div className="relative">
          {startIcon && (
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-global-9">
              {startIcon}
            </div>
          )}

          <input
            ref={ref}
            className={`${inputClasses} ${startIcon ? 'pl-10' : ''} ${endIcon ? 'pr-10' : ''}`}
            disabled={disabled}
            onFocus={(e) => {
              setFocused(true);
              props.onFocus?.(e);
            }}
            onBlur={(e) => {
              setFocused(false);
              props.onBlur?.(e);
            }}
            {...props}
          />

          {endIcon && (
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-global-9">
              {endIcon}
            </div>
          )}
        </div>

        {(error || helperText) && (
          <p className={`text-xs sm:text-sm mt-1 ${error ? 'text-red-500' : 'text-global-9'}`}>
            {error || helperText}
          </p>
        )}
      </div>
    );
  }
);

EditText.displayName = 'EditText';

export default EditText;
