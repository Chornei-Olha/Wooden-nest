// components/LifestyleSection.tsx
import Image from 'next/image';
import Button from '@/components/ui/Button';

export default function LifestyleSection() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="absolute inset-0">
        <Image src="/images/img__0x0.png" alt="Background" fill className="object-cover" />
      </div>
      <div className="relative w-full max-w-7xl mx-auto">
        <div className="text-left mb-12 lg:mb-16">
          <h2 className="text-5xl sm:text-8xl lg:text-[115px] font-montserrat font-thin uppercase text-global-8 leading-tight mb-8 lg:mb-16">
            Дерев&apos;яне гніздо об&apos;єднує
          </h2>

          <div className="flex flex-col lg:flex-row gap-10">
            <div className="max-w-2xl mx-auto space-y-8 lg:space-y-12">
              <h3 className="text-3xl sm:text-4xl lg:text-[44px] font-playfair-display font-semibold text-global-5 mb-8">
                Дерев&apos;яне гніздо-
                <br />
                це особливий спосіб
                <br />
                життя
              </h3>
              <p className="text-sm lg:text-[14px] font-montserrat font-normal leading-relaxed text-global-5">
                Ми створюємо не просто котеджне містечко — ми формуємо новий стиль життя, де головне
                — гармонія з природою, спокій і комфорт.
                <br />
                <br />
                Це місце, де кожен зможе відчути затишок і безпеку власного дому, не відмовляючись
                від сучасних зручностей.
                <br />
                Наше містечко — це поєднання натуральних матеріалів, екологічного дизайну та
                продуманих інфраструктурних рішень.
                <br />
                <br />
                Ми вже на етапі активного планування, щоб зробити цей проєкт унікальним і справжнім
                домом для родин, які цінують якість життя
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
  );
}
