'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Header from '@/components/common/Header';
import Button from '@/components/ui/Button';
import { ChipView, ChipItem } from '@/components/ui/ChipView';
import EditText from '@/components/ui/EditText';

import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import FAQSection from '../../components/common/FAQSection';
import Footer from '../../components/common/Footer';
import ConsultationForm from '../../components/common/ConsultationForm';
import FeatureIntroSection from '../../components/common/FeatureIntroSection';

interface PropertyCardProps {
  image: string;
  area: string;
  title: string;
  plotSize: string;
  rooms: string;
  parkingSpaces: string;
  terrace: string;
}

const faqs = [
  { number: 1, question: 'Де знаходиться котеджне містечко?', answer: '...' },
  { number: 2, question: 'Коли планується старт будівництва?', answer: '...' },
  { number: 3, question: 'Чи можна вже забронювати ділянку або дім?', answer: '...' },
  { number: 4, question: 'Чи буде охорона, КПП та закрита територія?', answer: '...' },
  { number: 5, question: 'Які комунікації передбачені?', answer: '...' },
  {
    number: 6,
    question: 'Чи є можливість внести індивідуальні зміни в проєкт будинку?',
    answer: 'так',
  },
  { number: 7, question: 'Яка орієнтовна вартість будинку/ділянки на старті?', answer: '...' },
  { number: 8, question: 'Яка інфраструктура є в містечку?', answer: '...' },
  { number: 9, question: 'Чи буде на території інфраструктура?', answer: '...' },
  { number: 10, question: 'Чи доступна іпотека або розстрочка?', answer: '...' },
];

const PropertyCard: React.FC<PropertyCardProps> = ({
  image,
  area,
  title,
  plotSize,
  rooms,
  parkingSpaces,
  terrace,
}) => {
  return (
    <div className="flex flex-col gap-4 sm:gap-5 w-full max-w-[366px] mx-auto">
      <div className="relative w-full h-[200px] sm:h-[244px] bg-global-1 rounded-lg overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6">
          <span className="text-lg sm:text-xl lg:text-[25px] font-inter font-bold text-global-12">
            {area}
          </span>
        </div>
      </div>
      <div className="flex flex-col gap-4 sm:gap-6 px-4 sm:px-6">
        <h3 className="text-lg sm:text-xl lg:text-[20px] font-abhaya-libre font-normal uppercase text-global-4">
          {title}
        </h3>
        <div className="flex flex-col gap-3 sm:gap-4">
          <div className="flex flex-row gap-4 sm:gap-6 items-center">
            <Image
              src="/images/img_meters_gr_svg.svg"
              alt="Plot size"
              width={36}
              height={36}
              className="w-8 sm:w-9 h-8 sm:h-9"
            />
            <div className="flex flex-col">
              <span className="text-base sm:text-[17px] font-abhaya-libre font-normal text-global-6">
                {plotSize}
              </span>
              <span className="text-sm sm:text-[15px] font-abhaya-libre font-normal text-global-10">
                Ділянка
              </span>
            </div>
            <Image
              src="/images/img_rooms_gr_svg.svg"
              alt="Rooms"
              width={40}
              height={40}
              className="w-8 sm:w-10 h-8 sm:h-10 ml-2 sm:ml-4"
            />
            <div className="flex flex-col">
              <span className="text-base sm:text-[17px] font-abhaya-libre font-normal text-global-6">
                {rooms}
              </span>
              <span className="text-sm sm:text-[15px] font-abhaya-libre font-normal text-global-10">
                Кімнат
              </span>
            </div>
          </div>
          <div className="flex flex-row gap-4 sm:gap-6 items-center">
            <span className="text-base sm:text-[17px] font-abhaya-libre font-normal text-global-6">
              {parkingSpaces}
            </span>
            <span className="text-sm sm:text-[15px] font-abhaya-libre font-normal text-global-10">
              Місця для авто
            </span>
            <span className="text-base sm:text-[17px] font-abhaya-libre font-normal text-global-6 ml-4">
              {terrace}
            </span>
            <span className="text-sm sm:text-[15px] font-abhaya-libre font-normal text-global-10">
              Тераса
            </span>
          </div>
        </div>
        <Button
          variant="primary"
          size="sm"
          className="bg-global-3 text-global-12 rounded-[18px] px-4 sm:px-6 py-2"
        >
          План будинку
        </Button>
      </div>
    </div>
  );
};
const WoodenNestPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    consultationName: '',
    consultationPhone: '',
  });
  const [selectedAmenities, setSelectedAmenities] = useState<string[]>([]);
  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };
  const handleSubmit = (type: 'queue' | 'consultation') => {
    console.log(`${type} form submitted:`, formData);
    // Handle form submission logic here
  };
  const propertyData = [
    {
      image: '/images/img__244x366.png',
      area: '169 м2',
      title: 'Котедж. Проект №1',
      plotSize: '6,79 соток',
      rooms: '4',
      parkingSpaces: '2',
      terrace: '43 м2',
    },
    {
      image: '/images/img__3.png',
      area: '168 м2',
      title: 'Котедж. Проект №2',
      plotSize: 'від 6,5 сот.',
      rooms: '4',
      parkingSpaces: '2',
      terrace: '25 м2',
    },
    {
      image: '/images/img__244x366.png',
      area: '169 м2',
      title: 'Котедж. Проект №3',
      plotSize: '6,79 соток',
      rooms: '4',
      parkingSpaces: '2',
      terrace: '43 м2',
    },
    {
      image: '/images/img__244x366.png',
      area: '169 м2',
      title: 'Котедж. Проект №4',
      plotSize: '6,79 соток',
      rooms: '4',
      parkingSpaces: '2',
      terrace: '43 м2',
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderRef, slider] = useKeenSlider({
    loop: true,
    breakpoints: {
      '(min-width: 640px)': {
        slides: {
          perView: 1.2,
          spacing: 16,
        },
      },
      '(min-width: 768px)': {
        slides: {
          perView: 2.2,
          spacing: 16,
        },
      },
      '(min-width: 1024px)': {
        slides: {
          perView: 3.2,
          spacing: 24,
        },
      },
      '(min-width: 1280px)': {
        slides: {
          perView: 4,
          spacing: 24,
        },
      },
    },
    slides: {
      perView: 1,
      spacing: 16,
    },
    slideChanged(s) {
      setCurrentSlide(s.track.details.rel);
    },
  });

  // Автоскролл каждые 5 секунд
  useEffect(() => {
    const interval = setInterval(() => {
      if (slider.current) {
        slider.current.next();
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [slider]);

  return (
    <div className="w-full bg-global-8 min-h-screen">
      {/* Hero Section */}
      <div className="relative w-full h-[600px] sm:h-[700px] lg:h-[898px] overflow-hidden">
        <Image
          src="/images/img_gradient_image.png"
          alt="Wooden Nest Hero"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        {/* Header Overlay */}
        <div className="absolute top-0 left-0 w-full z-10">
          <Header className="bg-transparent" />
        </div>
        {/* Hero Content */}
        <div className="absolute inset-0 flex flex-col justify-center items-start px-4 sm:px-6 lg:px-8 z-10">
          <div className="w-full max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-16">
              {/* Left Content */}
              <div className="flex flex-col gap-6 sm:gap-8 lg:gap-12 w-full lg:w-2/3">
                <h1 className="text-4xl sm:text-6xl lg:text-[130px] font-playfair-display font-semibold leading-tight text-global-12 tracking-wide">
                  Дерев'яне
                  <br />
                  гніздо
                </h1>
                <p className="text-base sm:text-lg lg:text-[21px] font-montserrat font-normal leading-relaxed text-global-12 max-w-lg">
                  Котеджне містечко з власним озером в<br />
                  віковому лісі
                </p>
                {/* Location Badge */}
                <div className="inline-flex items-center bg-global-3 rounded-2xl px-4 py-2 sm:px-6 sm:py-3">
                  <span className="text-sm lg:text-[14px] font-montserrat font-normal text-global-12">
                    Південний напрямок, траса Н01
                  </span>
                </div>
                {/* Stats Section */}
                <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 lg:gap-16 items-start">
                  <div className="flex flex-col gap-1">
                    <div className="flex items-end gap-4">
                      <span className="text-4xl sm:text-5xl lg:text-[64px] font-montserrat font-medium text-global-12">
                        10
                      </span>
                      <span className="text-2xl sm:text-3xl lg:text-[38px] font-montserrat font-medium text-global-12 mb-2">
                        хв
                      </span>
                    </div>
                    <span className="text-sm sm:text-base lg:text-[16px] font-montserrat font-normal text-global-12">
                      від Глевахівського лісу
                    </span>
                  </div>
                  <div className="w-px h-16 sm:h-20 lg:h-[84px] bg-global-6 hidden sm:block"></div>
                  <div className="flex flex-col gap-1">
                    <div className="flex items-end gap-4">
                      <span className="text-4xl sm:text-5xl lg:text-[64px] font-montserrat font-medium text-global-12">
                        80
                      </span>
                      <span className="text-2xl sm:text-3xl lg:text-[38px] font-montserrat font-medium text-global-12 mb-2">
                        соток
                      </span>
                    </div>
                    <span className="text-sm sm:text-base lg:text-[16px] font-montserrat font-normal text-global-12">
                      зелені й приватності
                    </span>
                  </div>
                  <div className="w-px h-16 sm:h-20 lg:h-[84px] bg-global-6 hidden sm:block"></div>
                  <div className="flex flex-col gap-3 items-start">
                    <Image
                      src="/images/img_icon_white_a700_44x70.svg"
                      alt="Clean Air"
                      width={70}
                      height={44}
                      className="w-12 sm:w-16 lg:w-[70px] h-auto"
                    />
                    <span className="text-sm sm:text-base lg:text-[16px] font-montserrat font-normal text-global-12">
                      чисте повітря
                    </span>
                  </div>
                </div>
                <Button
                  variant="primary"
                  size="md"
                  onClick={() => handleSubmit('queue')}
                  className="bg-global-3 text-global-12 w-fit"
                >
                  Записатися в чергу
                </Button>
              </div>
              {/* Right Security Card */}
              <div className="bg-global-9 backdrop-blur-sm rounded-[20px] p-4 sm:p-6 lg:p-8 w-full lg:w-1/3 max-w-md shadow-lg">
                <div className="flex flex-col gap-4">
                  <div className="flex justify-between items-center">
                    <h3 className="text-2xl sm:text-3xl lg:text-[44px] font-montserrat font-medium text-global-12">
                      Безпека
                    </h3>
                    <div className="flex gap-3 sm:gap-4">
                      <Image
                        src="/images/img_icon_white_a700.svg"
                        alt="Security Feature"
                        width={34}
                        height={36}
                        className="w-7 sm:w-8 h-7 sm:h-8"
                      />
                      <Image
                        src="/images/img_icon_white_a700_36x34.svg"
                        alt="Security Feature"
                        width={34}
                        height={36}
                        className="w-7 sm:w-8 h-7 sm:h-8"
                      />
                      <Image
                        src="/images/img_icon_36x34.svg"
                        alt="Security Feature"
                        width={34}
                        height={36}
                        className="w-7 sm:w-8 h-7 sm:h-8"
                      />
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm sm:text-[15px] font-montserrat font-normal text-global-12 max-w-[50%]">
                      Організована цілодобова охорона
                    </span>
                    <span className="text-sm lg:text-[14px] font-montserrat font-normal text-global-12">
                      Комунікації на ділянці
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Comfort Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-[#f2f1ef]">
        <div className="container mx-auto">
          <div className="flex flex-col gap-10">
            {/* Текстовая часть */}
            <div className="lg:w-full flex flex-col lg:flex-row justify-start">
              <h2 className="lg:w-1/2 text-2xl sm:text-3xl lg:text-[40px] font-playfair-display font-semibold leading-tight text-global-5 mb-6">
                Створюємо комфорт для
                <br />
                життя за містом
              </h2>
              <p className="lg:w-1/2 text-base lg:text-lg font-montserrat font-normal leading-relaxed text-global-3">
                Сучасне клубне котеджне містечко в екологічно чистому районі з власним лісовим
                озером. Чисте і свіже повітря, віддаленість від трас,тиша і усамітнення з природою.
              </p>
            </div>

            {/* Галерея */}
            <div className="lg:w-full grid grid-cols-1 lg:grid-cols-2 gap-4">
              {/* Большое изображение слева */}
              <div className="w-full h-full">
                <Image
                  src="/images/img_gallery_1p_jpg.png"
                  alt="Gallery Image 1"
                  width={636}
                  height={464}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>

              {/* Маленькие изображения справа в 2x2 сетке */}
              <div className="grid grid-cols-2 grid-rows-2 gap-4 h-full">
                <div className="w-full h-full">
                  <Image
                    src="/images/img_gallery_2p_jpg.png"
                    alt="Gallery Image 2"
                    width={314}
                    height={232}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <div className="w-full h-full">
                  <Image
                    src="/images/img_gallery_8p_jpg.png"
                    alt="Gallery Image 3"
                    width={314}
                    height={232}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <div className="w-full h-full">
                  <Image
                    src="/images/img_gallery_4p_jpg.png"
                    alt="Gallery Image 4"
                    width={314}
                    height={232}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <div className="w-full h-full">
                  <Image
                    src="/images/img_gallery_5p_jpg.png"
                    alt="Gallery Image 5"
                    width={314}
                    height={232}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* New Life Section */}
      <section className="relative py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-global-3">
        <div className="absolute inset-0">
          <Image
            src="/images/img_vector_blue_gray_800.svg"
            alt="Background Pattern"
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div className="container relative w-full mx-auto">
          <div className="bg-global-2 backdrop-blur-sm rounded-lg p-8 sm:p-12 lg:p-16 max-w-4xl">
            <div className="flex flex-col gap-6 sm:gap-8">
              <span className="text-xs sm:text-[11px] font-montserrat font-normal uppercase text-global-12 tracking-wider">
                Ваш будинок. Ваш простір. Ваш час.
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-[50px] font-playfair-display font-semibold leading-tight text-global-12">
                Тут починається ваше нове життя
              </h2>
              <p className="text-sm lg:text-[14px] font-montserrat font-normal leading-relaxed text-global-12 max-w-2xl">
                Відкрийте для себе концепцію затишного котеджного містечка з парком, озером і тишею
                — за крок до міста, але з відчуттям повної свободи.
              </p>
              <Button
                variant="primary"
                size="md"
                onClick={() => handleSubmit('queue')}
                className="bg-global-3 text-global-12 w-fit"
              >
                Записатися в чергу
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Sections */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="w-full container mx-auto space-y-16 sm:space-y-20 lg:space-y-24">
          {/* Security Feature */}
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center">
            <div className="w-full lg:w-1/2 order-2 lg:order-1">
              <div className="flex flex-col gap-6 sm:gap-8">
                <div className="flex items-center gap-4">
                  <Image
                    src="/images/img_masqk_group_png_webp.png"
                    alt="Security Icon"
                    width={34}
                    height={36}
                    className="w-8 sm:w-9 h-8 sm:h-9"
                  />
                  <h3 className="text-lg sm:text-xl lg:text-[20px] font-montserrat font-medium text-global-2">
                    Безпечність
                  </h3>
                </div>
                <div className="space-y-4 sm:space-y-6">
                  <p className="text-sm lg:text-[14px] font-montserrat leading-relaxed text-global-2">
                    <span className="font-medium">Деревяне гніздо</span> - це закрите приватне
                    містечко, його територія
                    <br />
                    повністю обгороджена і цілодобово охороняється.
                  </p>
                  <p className="text-sm lg:text-[14px] font-montserrat font-normal leading-relaxed text-global-2">
                    Передбачено освітлення вулиць, систему сигналізації для кожного будинку. У межах
                    містечка планується облаштування затишного парку для прогулянок, сучасного
                    дитячого майданчика з безпечним покриттям, а також озера з рибою — ідеального
                    місця для відпочинку та гармонійного дозвілля серед природи
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2 order-1 lg:order-2">
              <Image
                src="/images/img_524_png_webp.png"
                alt="Security Feature"
                width={634}
                height={344}
                className="w-full h-auto rounded-md"
              />
            </div>
          </div>
          {/* Recreation Zones */}
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center">
            <div className="w-full lg:w-1/2">
              <Image
                src="/images/img_524_png_webp_348x634.png"
                alt="Recreation Zones"
                width={634}
                height={348}
                className="w-full h-auto rounded-md"
              />
            </div>
            <div className="w-full lg:w-1/2">
              <div className="flex flex-col gap-6 sm:gap-8">
                <div className="flex items-center gap-4">
                  <Image
                    src="/images/img_masqk_group_png_webp.png"
                    alt="Recreation Icon"
                    width={34}
                    height={38}
                    className="w-8 sm:w-9 h-8 sm:h-9"
                  />
                  <h3 className="text-lg sm:text-xl lg:text-[20px] font-montserrat font-medium text-global-2">
                    Зони відпочинку
                  </h3>
                </div>
                <p className="text-sm lg:text-[14px] font-montserrat font-normal leading-relaxed text-global-2">
                  У межах котеджного містечка планується створення декількох зон відпочинку.
                  Центральне місце займатиме зелений парк із доріжками для прогулянок, лавками та
                  простором для пікніків. Для дітей буде облаштовано сучасний ігровий майданчик із
                  безпечним покриттям та ігровими конструкціями.
                  <br />
                  <br />
                  Окремо передбачено озеро з рибою — тихе місце для риболовлі або спокійного
                  відпочинку біля води. Усі зони відпочинку будуть інтегровані в загальну концепцію
                  містечка як місця для життя в гармонії з природою
                </p>
              </div>
            </div>
          </div>
          {/* Infrastructure */}
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center">
            <div className="w-full lg:w-1/2 order-2 lg:order-1">
              <div className="flex flex-col gap-6 sm:gap-8">
                <div className="flex items-center gap-4">
                  <Image
                    src="/images/img_masqk_group_png_webp.png"
                    alt="Infrastructure Icon"
                    width={34}
                    height={36}
                    className="w-8 sm:w-9 h-8 sm:h-9"
                  />
                  <h3 className="text-lg sm:text-xl lg:text-[20px] font-montserrat font-medium text-global-2">
                    Інфраструктура для життя
                  </h3>
                </div>
                <p className="text-sm lg:text-[14px] font-montserrat font-normal leading-relaxed text-global-2">
                  У містечку планується прокладення всіх необхідних комунікацій — електрика, вода,
                  каналізація, інтернет. Внутрішні дороги будуть асфальтовані або вимощені
                  бруківкою, передбачено вуличне освітлення, гостьові паркомісця та зручні під'їзди
                  до кожної ділянки.
                </p>
              </div>
            </div>
            <div className="w-full lg:w-1/2 order-1 lg:order-2">
              <Image
                src="/images/img_1_png_webp.png"
                alt="Infrastructure"
                width={624}
                height={370}
                className="w-full h-auto rounded-md"
              />
            </div>
          </div>
          {/* Community Development */}
          <div className="relative">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center">
              <div className="w-full lg:w-1/2">
                <Image
                  src="/images/img_1_png_webp_366x634.png"
                  alt="Community Development"
                  width={634}
                  height={366}
                  className="w-full h-auto rounded-md"
                />
              </div>
              <div className="w-full lg:w-1/2">
                <div className="flex flex-col gap-6 sm:gap-8">
                  <div className="flex items-center gap-4">
                    <Image
                      src="/images/img_masqk_group_png_webp.png"
                      alt="Community Icon"
                      width={34}
                      height={38}
                      className="w-8 sm:w-9 h-8 sm:h-9"
                    />
                    <h3 className="text-lg sm:text-xl lg:text-[20px] font-montserrat font-medium text-global-2">
                      Спільнота та простір для розвитку
                    </h3>
                  </div>
                  <p className="text-sm lg:text-[14px] font-montserrat font-normal leading-relaxed text-global-2">
                    Містечко створюється як простір для однодумців — людей, що цінують якість життя,
                    природу і затишок. У майбутньому тут можливе створення спільної зони для подій,
                    майстер-класів, сезонного ринку або мінімаркета для мешканців.
                  </p>
                </div>
              </div>
            </div>
            {/* Background Plan Image */}
            <div className="absolute top-auto right-0 z-20 transform -translate-y-1/2 opacity-100">
              <Image
                src="/images/img_.png"
                alt="Master Plan Background"
                width={878}
                height={364}
                className="w-full h-auto"
              />
            </div>
            {/* Call to Action Banner */}
            <div className="bg-global-3 rounded-lg p-6 sm:p-8 mt-8 lg:mt-12 text-center">
              <p className="text-lg sm:text-2xl lg:text-[30px] font-montserrat font-normal text-global-12 leading-relaxed max-w-4xl mx-auto">
                Генеральний план містечка відображає продуману структуру простору, де кожен елемент
                має своє місце.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Master Plan Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="w-full container mx-auto">
          <div className="flex flex-col gap-6 sm:gap-8">
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-playfair-display font-semibold text-global-5">
              Генплан
            </h2>
            {/* Amenities Chips */}
            <ChipView className="w-full" onSelectionChange={setSelectedAmenities}>
              <ChipItem className="border border-[#525252] px-5 py-2">КПП</ChipItem>
              <ChipItem className="border border-[#525252] px-5 py-2">Парк</ChipItem>
              <ChipItem className="border border-[#525252] px-5 py-2">
                Спортивний майданчик
              </ChipItem>
              <ChipItem className="border border-[#525252] px-5 py-2">
                Фітнес-зона з м'яким покриттям
              </ChipItem>
              <ChipItem className="border border-[#525252] px-5 py-2">Барбекю зона</ChipItem>
              <ChipItem className="border border-[#525252] px-5 py-2">Стежка здоров'я</ChipItem>
              <ChipItem className="border border-[#525252] px-5 py-2">Дитячий майданчик</ChipItem>
              <ChipItem className="border border-[#525252] px-5 py-2">Прогулянкова зона</ChipItem>
              <ChipItem className="border border-[#525252] px-5 py-2">Зона риболовлі</ChipItem>
            </ChipView>
          </div>
          {/* Master Plan Visual */}
          <div className="mt-8 lg:mt-12">
            <div className="text-center mb-8">
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="w-16 sm:w-20 lg:w-[260px] h-3 bg-global-7"></div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl lg:text-[47px] font-montserrat leading-tight ">
                    <h3 className="text-global-1 font-normal pb-[20px]">Оберіть</h3>
                    <h3 className="text-global-1 font-bold uppercase">будинок мрії</h3>{' '}
                  </div>
                </div>
                <div className="w-16 sm:w-20 lg:w-[260px] h-3 bg-global-7"></div>
              </div>
            </div>
            {/* Interactive Map */}
            <div
              className="relative bg-cover bg-center rounded-lg overflow-hidden"
              style={{ backgroundImage: 'url(/images/img_rendersgollandiya52_2.png)' }}
            >
              <div className="aspect-[2/1] sm:aspect-[3/2] lg:aspect-[1342/704] relative">
                {/* Plot markers would be positioned absolutely here */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6 lg:gap-8 p-4 sm:p-6 lg:p-8">
                    {Array.from({ length: 14 }, (_, i) => (
                      <div key={i + 1} className="relative">
                        <div className="w-10 sm:w-12 h-10 sm:h-12 bg-global-12 rounded-full flex items-center justify-center relative">
                          <span className="text-xs sm:text-sm font-montserrat font-bold text-global-3">
                            {i + 1}
                          </span>
                          <Image
                            src="/images/img_image.png"
                            alt={`Plot ${i + 1}`}
                            width={46}
                            height={46}
                            className="absolute -top-1 -left-1 w-12 sm:w-14 h-12 sm:h-14"
                          />
                        </div>
                        <Image
                          src="/images/img_vector_white_a700.svg"
                          alt="Plot Marker"
                          width={34}
                          height={42}
                          className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-6 sm:w-8 h-6 sm:h-8"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Construction Progress Section */}
      <section className="py-16 px-4">
        <div className="bg-global-3">
          <div className="container mx-auto py-16">
            {/* Заголовок и очереди */}
            <h2 className="text-3xl lg:text-[36px] font-unbounded font-extralight uppercase text-left text-white mb-10">
              Хід будівництва
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center mb-8">
              {/* 1 черга */}
              <div className="border border-white p-6 ">
                <h3 className="text-[36px] font-unbounded font-extralight text-white mb-2">
                  1 черга
                </h3>
                <p className="text-xl text-white">введена в експлуатацію</p>
              </div>
              {/* 2 черга */}
              <div className="border border-white p-6 ">
                <h3 className="text-[36px] font-unbounded font-extralight text-white mb-2">
                  2 черга
                </h3>
                <p className="text-xl text-white">2 квартал 2025р.</p>
              </div>
              {/* 3 черга */}
              <div className="border border-white p-6 ">
                <h3 className="text-[36px] font-unbounded font-extralight text-white mb-2">
                  3 черга
                </h3>
                <p className="text-xl text-white">4 квартал 2025 р.</p>
              </div>
            </div>

            {/* Кнопка Дивитись планування */}
            <div className="text-center">
              <button className="bg-white text-global-3 px-6 py-3 rounded-full font-unbounded font-light text-lg">
                Дивитись планування →
              </button>
            </div>
          </div>
        </div>{' '}
        {/* Изображения и логотип */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
          {/* Фото слева */}
          <div className="w-full">
            <img
              src="/images/img__268x474.png"
              alt="Котедж 1"
              className="w-full h-auto  object-cover"
            />
          </div>

          {/* Логотип по центру */}
          <div className="bg-[url('/images/bg-pattern.png')] bg-cover bg-center flex items-center justify-center h-full py-16 rounded-lg">
            <img src="/images/img__1.png" alt="Котедж 2" className="w-full h-auto  object-cover" />
          </div>

          {/* Фото справа */}
          <div className="w-full">
            <img
              src="/images/img__2.png"
              alt="Дерев'яне Гніздо"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
        {/* Кнопка записи в очередь */}
        <div className="text-center">
          <button
            onClick={() => handleSubmit('queue')}
            className="bg-white text-global-3 px-8 py-3 rounded-md text-lg font-unbounded"
          >
            Записатися в чергу
          </button>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="w-full container mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-playfair-display font-semibold text-global-5 mb-4">
            Розташування та інфраструктура
          </h2>
          <p className="text-sm lg:text-[14px] font-montserrat font-normal leading-relaxed text-global-7 max-w-4xl mb-8 lg:mb-12">
            У Дерев'яному гнізді ми розуміємо важливість доступності та зручності. Розташований у
            мальовничій та спокійній місцевості, наше котеджницьке містечко також знаходиться в
            безпосередній близькості до різноманітної зовнішньої інфраструктури, яка
            <br />
            задовольнить усі ваші потреби. Це забезпечує ідеальне поєднання усамітненого життя в
            оточенні природи зі зручностями міського життя.
          </p>
          {/* Map Section */}
          <div className="relative">
            <div className="aspect-[16/9] sm:aspect-[2/1] lg:aspect-[1326/770] bg-gray-200 rounded-lg overflow-hidden">
              <iframe
                title="Location Map"
                src="https://www.openstreetmap.org/export/embed.html?bbox=30.2%2C50.3%2C30.8%2C50.7&layer=mapnik"
                className="w-full h-full border-0"
                allowFullScreen
                loading="lazy"
              />
            </div>
            {/* Location Info Card */}
            <div className="absolute top-4 left-4 sm:top-8 sm:left-8 bg-global-10 border border-gray-200 rounded-lg p-4 sm:p-6 lg:p-8 max-w-sm shadow-lg">
              <div className="flex flex-col gap-4 sm:gap-6">
                <div className="flex items-center gap-4">
                  <Image
                    src="/images/img_shops_svg.svg"
                    alt="Lake and Beach"
                    width={38}
                    height={38}
                    className="w-8 sm:w-9 h-8 sm:h-9"
                  />
                  <span className="text-sm sm:text-base lg:text-[16px] font-montserrat-alternates font-medium text-global-5">
                    1км озеро та пляж
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <Image
                    src="/images/img_farmers_shop_svg.svg"
                    alt="Railway Station"
                    width={38}
                    height={38}
                    className="w-8 sm:w-9 h-8 sm:h-9"
                  />
                  <span className="text-sm sm:text-base lg:text-[16px] font-montserrat-alternates font-medium text-global-5">
                    1км ЖД станція
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <Image
                    src="/images/img_meat_shop_svg.svg"
                    alt="Recreation Zone"
                    width={38}
                    height={38}
                    className="w-8 sm:w-9 h-8 sm:h-9"
                  />
                  <span className="text-sm sm:text-base lg:text-[16px] font-montserrat-alternates font-medium text-global-5">
                    Зона відпочинку
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <Image
                    src="/images/img_relax_svg.svg"
                    alt="Forest Areas"
                    width={38}
                    height={38}
                    className="w-8 sm:w-9 h-8 sm:h-9"
                  />
                  <span className="text-sm lg:text-[14px] font-montserrat-alternates font-medium text-global-5">
                    Лісові масиви
                  </span>
                </div>
                <Image
                  src="/images/img_rectangle_3.png"
                  alt="Location Preview"
                  width={288}
                  height={258}
                  className="w-full h-auto rounded-md mt-4"
                />
                <Button variant="primary" size="sm" className="bg-global-3 text-global-12 w-full">
                  Прокласти маршрут
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Lifestyle Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute inset-0">
          <Image src="/images/img__0x0.png" alt="Background" fill className="object-cover" />
        </div>
        <div className="relative w-full max-w-7xl mx-auto">
          <div className="text-left mb-12 lg:mb-16">
            <h2 className="text-6xl sm:text-8xl lg:text-[115px] font-montserrat font-thin uppercase text-global-8 leading-tight mb-8 lg:mb-16">
              Дерев'яне гніздо об'єднує
            </h2>

            <div className="flex flex-col lg:flex-row gap-10">
              {' '}
              <div className="max-w-2xl mx-auto space-y-8 lg:space-y-12">
                <h3 className="text-3xl sm:text-4xl lg:text-[44px] font-playfair-display font-semibold text-global-5 mb-8">
                  Дерев'яне гніздо-
                  <br />
                  це особливий спосіб
                  <br />
                  життя
                </h3>
                <p className="text-sm lg:text-[14px] font-montserrat font-normal leading-relaxed text-global-5">
                  Ми створюємо не просто котеджне містечко — ми формуємо новий стиль життя, де
                  головне — гармонія з природою, спокій і комфорт.
                  <br />
                  <br />
                  Це місце, де кожен зможе відчути затишок і безпеку власного дому, не відмовляючись
                  від сучасних зручностей.
                  <br />
                  Наше містечко — це поєднання натуральних матеріалів, екологічного дизайну та
                  продуманих інфраструктурних рішень.
                  <br />
                  <br />
                  Ми вже на етапі активного планування, щоб зробити цей проєкт унікальним і
                  справжнім домом для родин, які цінують якість життя
                </p>
                <Button variant="primary" size="md" className="bg-global-3 text-global-12">
                  Отримати консультацію
                </Button>
              </div>
              <div>
                <Image
                  src="/images/Group2.webp"
                  alt="Cottage"
                  width={640}
                  height={734}
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Property Showcase */}

      <section className="py-12 sm:py-16 lg:py-20 px-0 relative">
        <div className="keen-slider" ref={sliderRef}>
          {propertyData.map((property, index) => (
            <div className="keen-slider__slide px-2 sm:px-4" key={index}>
              <PropertyCard {...property} />
            </div>
          ))}
        </div>

        {/* Стрелки */}
        <button
          onClick={() => slider.current?.prev()}
          className="hidden lg:flex absolute top-1/2 left-2 transform -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <button
          onClick={() => slider.current?.next()}
          className="hidden lg:flex absolute top-1/2 right-2 transform -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Точки-индикаторы */}
        <div className="flex justify-center mt-6 gap-2">
          {propertyData.map((_, idx) => (
            <button
              key={idx}
              onClick={() => slider.current?.moveToIdx(idx)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentSlide === idx ? 'bg-global-12' : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="px-4 sm:px-6 lg:px-8 bg-global-4 mx-10 my-16">
        <div className="w-full container mx-auto">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center">
            <div className="w-full lg:w-1/2">
              <Image
                src="/images/img_request_2_2_webp.png"
                alt="Contact Us"
                width={640}
                height={734}
                className="w-full h-auto"
              />
            </div>
            <div className="w-full lg:w-1/2 bg-global-4 p-6 sm:p-8 lg:p-12 rounded-lg">
              <div className="flex flex-col gap-6 sm:gap-8">
                <div className="space-y-4 sm:space-y-6">
                  <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-playfair-display font-semibold text-global-12">
                    Маєте питання? Ми поруч!
                  </h2>
                  <p className="text-sm lg:text-[14px] font-montserrat font-normal leading-relaxed text-global-12">
                    Якщо щось цікаво або хочеться дізнатись більше, просто напишіть нам! Ми з
                    задоволенням розповімо, як все планується, і відповімо на будь-які ваші питання.
                  </p>
                </div>
                <div className="space-y-4 sm:space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <EditText
                      placeholder="Ваше ім'я"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      variant="filled"
                    />
                    <EditText
                      placeholder="Номер телефона"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      variant="filled"
                    />
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                    <p className="text-xs lg:text-[10px] font-montserrat font-normal leading-relaxed text-global-12 flex-1">
                      Усі дані захищені та надійно зберігаються.
                      <br />
                      Натискаючи на "Записатися на екскурсію" ви даєте
                      <br />
                      свою згоду на обробку персональних даних.
                    </p>
                    <Button
                      variant="primary"
                      size="md"
                      onClick={() => handleSubmit('queue')}
                      className="bg-global-3 text-global-12 flex-shrink-0"
                    >
                      Надіслати
                    </Button>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Button
                      variant="outline"
                      size="md"
                      className="border border-gray-300 text-global-12 flex items-center gap-3 whitespace-nowrap"
                    >
                      <Image
                        src="/images/img_tg_svg.svg"
                        alt="Telegram"
                        width={24}
                        height={24}
                        className="w-6 sm:w-7 h-6 sm:h-7"
                      />
                      Telegram
                    </Button>

                    <Button
                      variant="outline"
                      size="md"
                      className="border border-gray-300 text-global-12 flex items-center gap-3 whitespace-nowrap"
                    >
                      <Image
                        src="/images/img_whatsappsvg_fill.svg"
                        alt="WhatsApp"
                        width={24}
                        height={24}
                        className="w-5 sm:w-6 h-5 sm:h-6"
                      />
                      WhatsApp
                    </Button>
                  </div>
                  <p className="text-sm lg:text-[14px] font-montserrat font-normal text-global-12">
                    або зв'яжіться з нами через месенджер
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FeatureIntroSection handleSubmit={() => console.log('queue submitted')} />
      <ConsultationForm />
      <FAQSection />
      <Footer />
    </div>
  );
};
export default WoodenNestPage;
