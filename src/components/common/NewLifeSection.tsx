'use client';

import Image from 'next/image';
import Button from '@/components/ui/Button';
import { useCallback } from 'react';

export default function NewLifeSection() {
  const handleSubmit = useCallback((action: string) => {
    // Здесь может быть логика, например: отправка данных в CRM или открытие модального окна
    console.log(`Заявка: ${action}`);
  }, []);

  return (
    <section className="relative py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      {/* Фоновый узор */}
      <div className="container mx-auto absolute inset-0 top-[-440px] lg:top-[-600px]">
        <Image src="/images/tree.svg" alt="Background Pattern" fill className="object-contain" />
      </div>

      {/* Контент с картинкой и текстом */}
      <div className="container relative z-10 mx-auto">
        <div className="rounded-lg overflow-hidden shadow-xl">
          <div className="relative w-full h-[420px] md:h-[500px] lg:h-[550px]">
            {/* Фоновое изображение дома */}
            <Image
              src="/images/Group3.png"
              alt="House background"
              fill
              className="object-cover"
              quality={100}
              priority
            />

            {/* Затемнённый градиент */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />

            {/* Контент поверх изображения */}
            <div className="absolute inset-0 flex items-center px-6 md:px-12">
              <div className="flex flex-col gap-6 sm:gap-8">
                <span className="text-xs sm:text-[11px] font-montserrat font-normal uppercase text-global-12 tracking-wider">
                  Ваш будинок. Ваш простір. Ваш час.
                </span>

                <h2 className="text-3xl sm:text-4xl lg:text-[50px] font-playfair font-semibold leading-tight text-global-12">
                  Тут починається ваше нове життя
                </h2>

                <p className="text-sm lg:text-[14px] font-montserrat font-normal leading-relaxed text-global-12 max-w-2xl">
                  Відкрийте для себе концепцію затишного котеджного містечка з парком, озером і
                  тишею — за крок до міста, але з відчуттям повної свободи.
                </p>

                <Button
                  variant="primary"
                  size="md"
                  onClick={() => {
                    const el = document.getElementById('application-form');
                    if (el) {
                      el.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="bg-global-3 text-global-12 w-fit"
                >
                  Записатися в чергу
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
