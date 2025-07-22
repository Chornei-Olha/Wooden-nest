'use client';

import Image from 'next/image';
import { useCallback } from 'react';

export default function ConstructionProgressSection() {
  const handleSubmit = useCallback((action: string) => {
    // Здесь может быть логика записи в очередь
    console.log(`Заявка: ${action}`);
  }, []);

  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      {/* Блок с очередями */}
      <div className="relative" style={{ backgroundImage: 'url(/images/frame-bg1.png)' }}>
        <div className="container mx-auto py-16">
          <h2 className="text-3xl lg:text-[36px] font-unbounded font-extralight uppercase text-center sm:text-left text-white mb-10">
            Хід будівництва
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center mb-8">
            <Stage title="1 черга" subtitle="введена в експлуатацію" />
            <Stage title="2 черга" subtitle="2 квартал 2025р." />
            <Stage title="3 черга" subtitle="4 квартал 2025 р." />
          </div>

          <div className="text-center">
            <button
              onClick={() => {
                const el = document.getElementById('plans');
                if (el) {
                  el.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="bg-white text-global-3 px-6 py-3 rounded-full font-unbounded font-light text-lg"
            >
              Дивитись планування →
            </button>
          </div>
        </div>
        <Image
          src="/images/img__542x504.png"
          alt="Котедж 1"
          width={400}
          height={600}
          className="absolute bottom-0 right-0 w-[15%] h-auto object-cover"
        />
        <Image
          src="/images/img__528x484.png"
          alt="Котедж 1"
          width={400}
          height={600}
          className="absolute bottom-0 md:bottom-[-100px] left-0 w-[15%] h-auto object-cover"
        />
      </div>

      {/* Изображения и логотип */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 items-center mt-3">
        <div className="w-full">
          <Image
            src="/images/img__268x474.png"
            alt="Котедж 1"
            width={400}
            height={600}
            className="w-full h-auto object-cover"
          />
        </div>

        <div className="bg-[url('/images/bg-pattern.png')] bg-cover bg-center flex items-center justify-center h-full py-2 rounded-lg">
          <Image
            src="/images/img__1.png"
            alt="Дерев'яне Гніздо"
            width={400}
            height={600}
            className="w-full h-auto object-cover"
          />
        </div>

        <div className="w-full">
          <Image
            src="/images/img__2.png"
            alt="Котедж 2"
            width={400}
            height={600}
            className="w-full h-auto object-cover"
          />
        </div>
      </div>

      {/* Кнопка записи */}
      <div className="text-center mt-10">
        <button
          onClick={() => {
            const el = document.getElementById('application-form');
            if (el) {
              el.scrollIntoView({ behavior: 'smooth' });
            }
          }}
          className="bg-global-3 text-white px-10 py-5 rounded-md text-lg font-unbounded"
        >
          Записатися в чергу
        </button>
      </div>
    </section>
  );
}

// Вспомогательный подкомпонент для этапов
function Stage({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="border border-white p-6 m-2">
      <h3 className="font-unbounded text-3xl md:text-4xl lg:text-6xl font-extralight text-white mb-3">
        {title}
      </h3>
      <p className="font-unbounded text-base lg:text-xl font-extralight text-white">{subtitle}</p>
    </div>
  );
}
