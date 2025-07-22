import Image from 'next/image';
import Button from '@/components/ui/Button';

type Props = {
  handleSubmit: (type: string) => void;
};

export default function FeatureIntroSection({ handleSubmit }: Props) {
  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="absolute inset-0">
        <Image src="/images/background.webp" alt="Background" fill className="object-cover" />
        <div className="absolute inset-0"></div>
      </div>

      <div className="relative w-full container mx-auto text-center">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-16 lg:mb-[317px]">
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-playfair font-semibold text-global-12 leading-tight max-w-2xl text-left">
            Дерев'яне гніздо — там, де починається життя
          </h2>

          <div className="flex flex-col gap-4 sm:gap-6 max-w-md">
            <p className="text-sm sm:text-base lg:text-[16px] font-montserrat font-normal leading-relaxed text-global-12 text-left">
              Тут народжується місце, де важливо не лише що навколо — а як ви себе відчуваєте
              всередині.
            </p>
            <Button
              variant="primary"
              size="sm"
              onClick={() => {
                const el = document.getElementById('application-form');
                if (el) {
                  el.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="bg-global-3 text-global-12 w-[50%]"
            >
              Записатися в чергу
            </Button>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-16 lg:mt-20">
          {[
            {
              title: '4 хвилини тиші',
              text: 'Після міського шуму саме стільки потрібно, щоб ви відчули, що ви вдома.',
            },
            {
              title: '3 кроки до озера',
              text: 'Озеро поруч. І це не метафора. Ми вже перевірили.',
            },
            {
              title: '1 мета',
              text: 'Створити не квадратні метри — а спосіб життя, до якого хочеться повертатись.',
            },
          ].map((item, index) => (
            <div key={index} className="relative bg-global-10 rounded-lg p-6 sm:p-8 shadow-lg">
              <div className="flex flex-col gap-4 sm:gap-6 text-left">
                <h4 className="text-2xl sm:text-3xl lg:text-[36px] font-montserrat font-medium text-global-8">
                  {item.title}
                </h4>
                <p className="text-sm sm:text-base lg:text-[16px] font-montserrat font-normal leading-relaxed text-global-3">
                  {item.text}
                </p>
              </div>

              <div className="absolute bottom-3 right-3 sm:bottom-3 sm:right-3 bg-white w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full shadow-md border border-global-12">
                <Image
                  src="/images/img_vector_blue_gray_800_12x12.svg"
                  alt="Icon"
                  width={12}
                  height={12}
                  className="w-3 h-3"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
