'use client';

import Image from 'next/image';
import Button from '@/components/ui/Button';
import { useCallback } from 'react';
import Header from './Header';

export default function HeroSection() {
  const handleSubmit = useCallback((action: string) => {
    console.log(`Заявка: ${action}`);
  }, []);

  return (
    <section className="relative w-full h-[950px] sm:h-[850px] lg:min-h-[100vh] overflow-hidden text-white">
      {/* Background Image */}
      <Image
        src="/images/bg_gradient.webp"
        alt="Wooden Nest Hero"
        fill
        className="object-cover"
        priority
      />

      {/* Header Overlay */}
      <div className="absolute top-0 left-0 w-full z-20">
        <Header className="bg-transparent" />
      </div>

      {/* Main Content */}
      <div className="absolute inset-0 z-10 flex flex-col justify-center mt-[100px] sm:mt-[150px] px-4 sm:px-6 lg:px-12">
        <div className="container mx-auto flex flex-col lg:flex-row justify-between items-start gap-10 lg:gap-16">
          {/* Left Side */}
          <div className="flex flex-col gap-6 sm:gap-8 lg:gap-12 w-full lg:w-1/2">
            <h1 className="text-5xl sm:text-7xl lg:text-[130px] leading-none font-playfair font-semibold">
              Дерев'яне <br /> гніздо
            </h1>
            <p className="text-lg lg:text-[20px] font-montserrat">
              Котеджне містечко з власним озером в віковому лісі
            </p>

            {/* Location */}
            <div className="inline-block bg-[#4A6240] text-white rounded-2xl px-5 py-2 text-sm lg:text-base font-montserrat w-fit">
              Південний напрямок, траса Н01
            </div>

            <div className="flex flex-column sm:flex-row justify-between">
              {' '}
              {/* Features */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-10 lg:gap-16">
                {/* Feature 1 */}
                <div className="flex flex-col">
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl lg:text-[64px] font-montserrat font-medium">10</span>
                    <span className="text-2xl lg:text-[36px] font-montserrat font-medium mb-2">
                      хв
                    </span>
                  </div>
                  <p className="text-sm lg:text-base font-montserrat">від Глевахівського лісу</p>
                </div>
                <div className="hidden sm:block w-px h-20 bg-white/30"></div>
                {/* Feature 2 */}
                <div className="flex flex-col">
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl lg:text-[64px] font-montserrat font-medium">80</span>
                    <span className="text-2xl lg:text-[36px] font-montserrat font-medium mb-2">
                      соток
                    </span>
                  </div>
                  <p className="text-sm lg:text-base font-montserrat">зелені й приватності</p>
                </div>
                <div className="hidden sm:block w-px h-20 bg-white/30"></div>
                {/* Feature 3 */}
                <div className="flex flex-col items-start">
                  <Image
                    src="/images/img_icon_white_a700_44x70.svg"
                    alt="Чисте повітря"
                    width={60}
                    height={44}
                  />
                  <p className="text-sm lg:text-base font-montserrat mt-2">чисте повітря</p>
                </div>{' '}
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-between h-full gap-10 w-full lg:w-1/2">
            {' '}
            {/* Security Card */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 lg:p-8 max-w-[490px] md:w-full shadow-md text-white lg:self-end">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-2xl lg:text-[36px] font-semibold font-montserrat">Безпека</h3>
                <div className="flex gap-3">
                  <Image src="/images/img_icon_white_a700.svg" alt="icon1" width={32} height={32} />
                  <Image
                    src="/images/img_icon_white_a700_36x34.svg"
                    alt="icon2"
                    width={32}
                    height={32}
                  />
                  <Image src="/images/img_icon_36x34.svg" alt="icon3" width={32} height={32} />
                </div>
              </div>

              <div className="flex text-sm lg:text-base font-montserrat">
                <span className="w-1/2 pr-4">Організована цілодобова охорона</span>
                <div className="w-px bg-white/50 mx-2" /> {/* ← вертикальная палочка */}
                <span className="w-1/2 text-right pl-4">Комунікації на ділянці</span>
              </div>
            </div>
            <div className="lg:self-end">
              {' '}
              {/* CTA */}
              <Button
                variant="primary"
                size="md"
                onClick={() => {
                  const el = document.getElementById('application-form');
                  if (el) {
                    el.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="bg-[#4A6240] hover:bg-[#3e5036] text-white px-6 py-3 rounded-lg w-fit mb-0 sm:mb-10"
              >
                Записатися в чергу
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
