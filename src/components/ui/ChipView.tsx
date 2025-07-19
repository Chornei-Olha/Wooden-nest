'use client';
import React, { useState } from 'react';

interface ChipItemProps {
  children: React.ReactNode;
  selected?: boolean;
  onClick?: () => void;
  className?: string;
  variant?: 'default' | 'outlined';
}

interface ChipViewProps {
  children: React.ReactNode;
  className?: string;
  multiSelect?: boolean;
  onSelectionChange?: (selectedItems: string[]) => void;
}

const ChipItem: React.FC<ChipItemProps> = ({ 
  children, 
  selected = false, 
  onClick, 
  className = '',
  variant = 'outlined'
}) => {
  const baseStyles = 'inline-flex items-center justify-center px-4 py-2 sm:px-5 sm:py-3 md:px-6 md:py-3 text-xs sm:text-sm md:text-[14px] font-montserrat font-normal transition-all duration-200 ease-in-out cursor-pointer touch-manipulation min-h-[44px] sm:min-h-[46px]';
  
  const variants = {
    default: selected 
      ? 'bg-global-3 text-global-12 border border-global-3' :'bg-global-10 text-chipview-2 border border-global-7 hover:bg-global-8',
    outlined: selected 
      ? 'bg-global-3 text-global-12 border border-global-3' :'bg-transparent text-chipview-2 border border-global-7 hover:bg-global-8'
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} rounded-sm sm:rounded md:rounded-lg ${className}`}
      role="button"
      aria-pressed={selected}
    >
      {children}
    </button>
  );
};

const ChipView: React.FC<ChipViewProps> = ({ 
  children, 
  className = '', 
  multiSelect = true,
  onSelectionChange 
}) => {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  const handleItemClick = (itemText: string) => {
    let newSelection: string[];
    
    if (multiSelect) {
      newSelection = selectedItems.includes(itemText)
        ? selectedItems.filter(item => item !== itemText)
        : [...selectedItems, itemText];
    } else {
      newSelection = selectedItems.includes(itemText) ? [] : [itemText];
    }
    
    setSelectedItems(newSelection);
    onSelectionChange?.(newSelection);
  };

  const enhanceChildren = (children: React.ReactNode): React.ReactNode => {
    return React.Children.map(children, (child) => {
      if (React.isValidElement(child) && child.type === ChipItem) {
        const itemText = typeof child.props.children === 'string' 
          ? child.props.children 
          : '';
        
        return React.cloneElement(child, {
          ...child.props,
          selected: selectedItems.includes(itemText),
          onClick: () => handleItemClick(itemText)
        });
      }
      return child;
    });
  };

  return (
    <div className={`flex flex-wrap gap-2 sm:gap-3 md:gap-4 w-full ${className}`} role="group">
      {enhanceChildren(children)}
    </div>
  );
};

export { ChipView, ChipItem };
export default ChipView;