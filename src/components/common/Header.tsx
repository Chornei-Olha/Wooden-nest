'use client';
import React, { useState } from 'react';
import Image from 'next/image';

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className = '' }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className={`w-full py-12 sm:py-16 lg:py-10 px-4 sm:px-6 lg:px-8
${className}`}
    >
      <div className="container mx-auto">
        <div className="flex flex-row justify-between items-left gap-4 lg:gap-0">
          {/* Logo and Brand Section */}
          <div className="flex flex-row gap-4 sm:gap-5 justify-left items-center w-full lg:w-auto">
            <div className="w-[50px] sm:w-[60px] lg:w-[70px]">
              <Image
                src="/images/img_link.svg"
                alt="Wooden Nest Logo"
                width={70}
                height={82}
                className="w-full h-auto"
              />
            </div>
            <div className="text-center lg:text-left">
              <h1 className="text-lg sm:text-2xl lg:text-[36px] font-montserrat font-semibold leading-tight text-global-12">
                Дерев'яне гніздо
              </h1>
              <p className="text-xs sm:text-sm lg:text-[13px] font-montserrat font-normal leading-relaxed text-global-12 mt-1">
                котеджне містечко
              </p>
            </div>
          </div>

          {/* Hamburger Menu Icon (Mobile only) */}
          <button
            className="block lg:hidden p-3 text-global-12"
            aria-label="Open menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          {/* Navigation Menu */}
          <nav className={`${menuOpen ? 'block' : 'hidden'} lg:block w-full lg:w-auto`}>
            <div className="flex flex-col lg:flex-row justify-center items-center gap-4 lg:gap-8 py-4 lg:py-0">
              {/* Menu Items */}
              <div className="flex flex-col lg:flex-row gap-4 lg:gap-8 items-center">
                <button
                  role="menuitem"
                  className="text-xs sm:text-sm lg:text-[13px] font-montserrat font-normal text-global-12 hover:text-global-11 transition-colors duration-200"
                >
                  Генплан
                </button>
                <button
                  role="menuitem"
                  className="text-xs sm:text-sm lg:text-[13px] font-montserrat font-normal text-global-12 hover:text-global-11 transition-colors duration-200"
                >
                  Сучасні будинки
                </button>
                <button
                  role="menuitem"
                  className="text-xs sm:text-sm lg:text-[14px] font-montserrat font-normal text-global-12 hover:text-global-11 transition-colors duration-200"
                >
                  Про нас
                </button>
                <button
                  role="menuitem"
                  className="text-xs sm:text-sm lg:text-[14px] font-montserrat font-normal text-global-12 hover:text-global-11 transition-colors duration-200"
                >
                  Контакти
                </button>
              </div>

              {/* Contact Info */}
              <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 items-center">
                <div
                  role="menuitem"
                  aria-haspopup="true"
                  aria-expanded="false"
                  className="flex flex-row gap-3 lg:gap-4 justify-center items-center"
                >
                  <Image
                    src="/images/img_icon.svg"
                    alt="Phone Icon"
                    width={22}
                    height={20}
                    className="w-[18px] sm:w-[20px] lg:w-[22px] h-auto"
                  />
                  <span className="text-xs sm:text-sm lg:text-[13px] font-montserrat font-normal text-global-12">
                    +38(098) 483-88-55
                  </span>
                </div>

                {/* Social Links */}
                <div className="flex flex-row gap-4 lg:gap-8 items-center">
                  <a href="#" className="hover:opacity-80 transition-opacity duration-200">
                    <Image
                      src="/images/img_link_white_a700.svg"
                      alt="Social Link"
                      width={22}
                      height={18}
                      className="w-[18px] sm:w-[20px] lg:w-[22px] h-auto"
                    />
                  </a>
                  <a href="#" className="hover:opacity-80 transition-opacity duration-200">
                    <Image
                      src="/images/img_link_white_a700_18x18.svg"
                      alt="Social Link"
                      width={18}
                      height={18}
                      className="w-[16px] sm:w-[17px] lg:w-[18px] h-auto"
                    />
                  </a>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
