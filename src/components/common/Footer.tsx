import Image from 'next/image';

export default function Footer() {
  return (
    <footer
      id="contacts"
      className="bg-global-3 py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 relative"
    >
      <div className="absolute inset-0">
        <Image
          src="/images/img__5.png"
          alt="Footer Background"
          fill
          className="object-cover opacity-30"
        />
      </div>
      <div className="relative w-full container mx-auto">
        <div className="border-t border-b border-gray-400 py-8 sm:py-12">
          <div className="flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-16">
            {/* Левая часть */}
            <div className="flex flex-col gap-6 sm:gap-8 w-full lg:w-1/3">
              <div className="flex items- gap-4">
                <div
                  className="w-12 sm:w-16 lg:w-[68px] h-12 sm:h-16 lg:h-[82px] bg-cover bg-center rounded-lg"
                  style={{ backgroundImage: 'url(/images/img_vector_white_a700_82x69.svg)' }}
                >
                  <div className="w-full h-full flex items-center justify-center">
                    <Image
                      src="/images/img_vector_white_a700_12x10.svg"
                      alt="Logo Icon"
                      width={10}
                      height={12}
                      className="w-2 sm:w-3 h-2 sm:h-3"
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <h3 className="text-2xl sm:text-3xl lg:text-[36px] font-montserrat font-semibold text-global-12 leading-tight">
                    Дерев'яне
                    <br />
                    гніздо
                  </h3>
                  <p className="text-xs sm:text-sm lg:text-[13px] font-montserrat font-normal text-global-12">
                    котеджне містечко
                  </p>
                </div>
              </div>

              <div className="flex gap-4 sm:gap-5">
                <a
                  href="tel:+380984838855"
                  className="text-lg sm:text-xl lg:text-[20px] font-montserrat font-normal text-global-12 hover:text-global-11 transition-colors duration-200"
                >
                  +38(098) 483-88-55
                </a>

                <Image
                  src="/images/img_link_white_a700.svg"
                  alt="Telegram"
                  width={24}
                  height={20}
                />
                <Image
                  src="/images/img_link_white_a700_18x18.svg"
                  alt="WhatsApp"
                  width={20}
                  height={20}
                />
              </div>
              <div className="flex gap-4 sm:gap-5">
                <Image src="/images/img_item.svg" alt="Instagram" width={40} height={40} />
                <div className="bg-global-10 rounded-full p-2 sm:p-2.5">
                  <Image src="/images/img_youtube.svg" alt="YouTube" width={18} height={18} />
                </div>
                <Image
                  src="/images/img_link_white_a700_40x40.svg"
                  alt="Telegram Circle"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2 pt-6 w-full lg:w-1/4">
              <a
                href="#"
                className="text-sm sm:text-base lg:text-[16px] font-montserrat text-global-12 hover:underline"
              >
                Головна
              </a>
              <a
                href="#houses"
                className="text-sm sm:text-base lg:text-[16px] font-montserrat text-global-12 hover:underline"
              >
                Сучасні будинки
              </a>
              <a
                href="#about"
                className="text-sm sm:text-base lg:text-[16px] font-montserrat text-global-12 hover:underline"
              >
                Про нас
              </a>
              <a
                href="#contacts"
                className="text-sm sm:text-base lg:text-[16px] font-montserrat text-global-12 hover:underline"
              >
                Контакти
              </a>
            </div>

            {/* Правая часть */}
            <div className="flex flex-col gap-6 sm:gap-8 w-full lg:w-1/3">
              <div className="space-y-4">
                <h4 className="text-lg sm:text-xl lg:text-[20px] font-montserrat font-semibold text-global-11 max-w-md">
                  Нові Безрадичі, Київська область
                </h4>
                <div className="flex items-center gap-3 sm:gap-4">
                  <span className="text-sm sm:text-base lg:text-[16px] font-montserrat font-medium uppercase text-global-11">
                    Прокласти маршрут
                  </span>
                  <a
                    href="https://www.google.com/maps/dir/?api=1&origin=Київ&destination=Нові+Безрадичі,+Київська+область"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div
                      className="w-6 sm:w-8 h-6 sm:h-8 bg-cover bg-center rounded-2xl"
                      style={{ backgroundImage: 'url(/images/img_background.svg)' }}
                    ></div>
                  </a>
                </div>
                <div className="space-y-2">
                  <span className="text-xs lg:text-[12px] font-montserrat font-normal text-global-12 block">
                    Години роботи
                  </span>
                  <span className="text-sm sm:text-[15px] font-montserrat font-normal text-global-12">
                    09:00 - 20:00
                  </span>
                </div>
              </div>
              <div
                className="w-16 sm:w-20 lg:w-[98px] h-16 sm:h-20 lg:h-[98px] bg-cover bg-center rounded-lg ml-auto"
                style={{ backgroundImage: 'url(/images/img_search.svg)' }}
              >
                <a href="tel:+380984838855">
                  <div
                    className="w-full h-full flex items-center justify-center bg-cover bg-center cursor-pointer"
                    style={{ backgroundImage: 'url(/images/img_phonecall3svg.svg)' }}
                  >
                    <Image
                      src="/images/img_phone_call_2_svg.svg"
                      alt="Phone Call"
                      width={60}
                      height={60}
                      className="w-12 sm:w-14 lg:w-[60px] h-12 sm:h-14 lg:h-[60px]"
                    />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
