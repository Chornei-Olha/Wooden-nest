'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className = '' }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }

    // Чистим при размонтировании
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [menuOpen]);

  return (
    <header className={`w-full py-7 sm:py-16 lg:py-10 px-4 sm:px-6 lg:px-8 relative ${className}`}>
      <div className="container mx-auto relative z-30">
        <div className="flex flex-row justify-between items-center gap-4 lg:gap-0">
          {/* Logo and Brand Section */}
          <div className="flex flex-row gap-4 sm:gap-5 items-center w-full lg:w-auto">
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
            className="absolute right-0 top-1/2 -translate-y-1/2 p-3 text-global-12 z-[50] lg:hidden"
            aria-label="Open menu"
            onClick={() => setMenuOpen(true)}
          >
            <svg className="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          {/* Desktop Navigation Menu */}
          <nav className="hidden lg:block w-full lg:w-auto">
            <div className="flex flex-col lg:flex-row justify-center items-center gap-4 lg:gap-8 py-4 lg:py-0">
              {/* Menu Items */}
              <div className="flex flex-col lg:flex-row gap-4 lg:gap-8 items-center">
                <button className="text-xs sm:text-sm lg:text-[13px] font-montserrat font-normal text-global-12 hover:text-global-11 transition-colors duration-200">
                  Генплан
                </button>
                <button className="text-xs sm:text-sm lg:text-[13px] font-montserrat font-normal text-global-12 hover:text-global-11 transition-colors duration-200">
                  Сучасні будинки
                </button>
                <button className="text-xs sm:text-sm lg:text-[14px] font-montserrat font-normal text-global-12 hover:text-global-11 transition-colors duration-200">
                  Про нас
                </button>
                <button className="text-xs sm:text-sm lg:text-[14px] font-montserrat font-normal text-global-12 hover:text-global-11 transition-colors duration-200">
                  Контакти
                </button>
              </div>

              {/* Contact Info */}
              <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 items-center">
                <div className="flex flex-row gap-3 lg:gap-4 items-center">
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
                    />
                  </a>
                  <a href="#" className="hover:opacity-80 transition-opacity duration-200">
                    <Image
                      src="/images/img_link_white_a700_18x18.svg"
                      alt="Social Link"
                      width={18}
                      height={18}
                    />
                  </a>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>

      {/* Fullscreen Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 bg-white z-[60] flex flex-col items-center justify-center gap-10 px-6 py-10 lg:hidden transition-all duration-300 ease-in-out">
          <button
            className="absolute top-9 right-9 text-global-1"
            onClick={() => setMenuOpen(false)}
            aria-label="Закрити меню"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* Menu Items */}
          <div className="flex flex-col gap-6 items-center text-center">
            <button className="text-base font-montserrat text-global-1">Генплан</button>
            <button className="text-base font-montserrat text-global-1">Сучасні будинки</button>
            <button className="text-base font-montserrat text-global-1">Про нас</button>
            <button className="text-base font-montserrat text-global-1">Контакти</button>
          </div>

          {/* Contact & Socials */}
          <div className="flex flex-col gap-6 items-center">
            <div className="flex flex-row gap-3 items-center">
              <Image src="/images/img_icon.svg" alt="Phone Icon" width={22} height={20} />
              <span className="text-sm font-montserrat text-global-12">+38(098) 483-88-55</span>
            </div>

            <div className="flex gap-6">
              <Image src="/images/img_link_white_a700.svg" alt="Social 1" width={22} height={18} />
              <Image
                src="/images/img_link_white_a700_18x18.svg"
                alt="Social 2"
                width={18}
                height={18}
              />
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
