import { useState } from 'react';
import Image from 'next/image';

// Типизация FAQ-пункта
type FAQItem = {
  number: number;
  question: string;
  answer: string;
};

// Список вопросов
const faqs: FAQItem[] = [
  {
    number: 1,
    question: 'Де знаходиться котеджне містечко?',
    answer:
      'Котеджне містечко «Дерев’яне гніздо» розташоване в селі Нові Безрадичі, Київська область — усього за кількадесят хвилин їзди від столиці.',
  },
  {
    number: 2,
    question: 'Коли планується старт будівництва?',
    answer:
      'Будівництво розпочнеться після завершення підготовчих робіт та формальних процедур. Актуальні новини можна дізнатися у нашого менеджера.',
  },
  {
    number: 3,
    question: 'Чи можна вже забронювати ділянку або дім?',
    answer:
      'Так, можлива попередня бронь. Ви можете залишити заявку, і ми зв’яжемось із вами для узгодження деталей.',
  },
  {
    number: 4,
    question: 'Чи буде охорона, КПП та закрита територія?',
    answer:
      'Так, проєкт передбачає закриту територію з контрольно-пропускним пунктом, цілодобовою охороною та системою відеонагляду.',
  },
  {
    number: 5,
    question: 'Які комунікації передбачені?',
    answer:
      'Передбачено всі необхідні сучасні комунікації: електропостачання, водопостачання, каналізація, інтернет. Також проєктом передбачена енергоефективність і стабільна інфраструктура.',
  },
  {
    number: 6,
    question: 'Чи є можливість внести індивідуальні зміни в проєкт будинку?',
    answer:
      'Так, надається можливість адаптувати планування та деякі архітектурні рішення відповідно до побажань клієнта.',
  },
  {
    number: 7,
    question: 'Яка орієнтовна вартість будинку/ділянки на старті?',
    answer: 'Вартість залежить від параметрів ділянки та комплектації будинку. Детальн.',
  },
  {
    number: 8,
    question: 'Яка інфраструктура є в містечку?',
    answer:
      'У містечку планується облаштування внутрішньої інфраструктури: дитячі та спортивні майданчики, зони відпочинку, озеленення, вуличне освітлення та якісні дороги.',
  },
  {
    number: 9,
    question: 'Чи буде на території інфраструктура?',
    answer:
      'Так, уся необхідна інфраструктура буде інтегрована в межах містечка, що забезпечить комфорт для мешканців на щодень.',
  },
  {
    number: 10,
    question: 'Чи доступна іпотека або розстрочка?',
    answer:
      'Передбачені зручні фінансові умови — можливість оформлення розстрочки або участі в партнерських програмах із банками.',
  },
];

export default function FAQSection() {
  const [openNumber, setOpenNumber] = useState<number | null>(null);

  const toggle = (number: number) => {
    setOpenNumber(openNumber === number ? null : number);
  };

  const firstHalf = faqs.slice(0, 5);
  const secondHalf = faqs.slice(5);

  const renderFAQItem = (faq: FAQItem) => (
    <div key={faq.number} className="border-t border-global-6 pt-4 sm:pt-5">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => toggle(faq.number)}
      >
        <span className="text-lg sm:text-xl lg:text-[20px] font-montserrat font-medium text-global-6">
          ({faq.number}) {faq.question}
        </span>
        <Image
          src="/images/img_container.svg"
          alt="Expand"
          width={24}
          height={24}
          className="w-5 sm:w-6 h-5 sm:h-6"
        />
      </div>
      {openNumber === faq.number && (
        <div className="mt-2 text-base text-gray-600">{faq.answer}</div>
      )}
    </div>
  );

  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-7xl mx-auto">
        <div className="text-center mb-8 lg:mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-playfair-display font-semibold text-global-5">
            Популярні запитання про Дерев'яне гніздо
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          <div className="space-y-6 sm:space-y-8">{firstHalf.map(renderFAQItem)}</div>
          <div className="space-y-6 sm:space-y-8">{secondHalf.map(renderFAQItem)}</div>
        </div>
      </div>
    </section>
  );
}
