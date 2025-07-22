import Image from 'next/image';
import Button from '@/components/ui/Button';

export default function LocationSection() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="w-full container mx-auto">
        <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-playfair font-semibold text-global-5 mb-4">
          Розташування та інфраструктура
        </h2>
        <p className="text-sm lg:text-[14px] font-montserrat font-normal leading-relaxed text-global-7 max-w-4xl mb-8 lg:mb-12">
          У Дерев&apos;яному гнізді ми розуміємо важливість доступності та зручності. Розташований у
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
          <div className="mx-auto mt-3 lg:mt-0 lg:absolute top-4 left-4 sm:top-8 sm:left-8 bg-global-10 border border-gray-200 rounded-lg p-4 sm:p-6 lg:p-8 max-w-sm shadow-lg">
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
                src="/images/map.webp"
                alt="Location Preview"
                width={288}
                height={258}
                className="w-full h-auto rounded-md mt-4"
              />
              <a
                href="https://www.google.com/maps/dir/?api=1&origin=Київ&destination=Нові+Безрадичі,+Київська+область"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="primary" size="sm" className="bg-global-3 text-global-12 w-full">
                  Прокласти маршрут
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
