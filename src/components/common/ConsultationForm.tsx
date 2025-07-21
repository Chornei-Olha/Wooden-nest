import { useState } from 'react';
import Image from 'next/image';
import EditText from '@/components/ui/EditText';
import Button from '@/components/ui/Button';

export default function ConsultationForm() {
  const [formData, setFormData] = useState({
    consultationName: '',
    consultationPhone: '',
  });

  const handleInputChange = (field: 'consultationName' | 'consultationPhone', value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (type: 'consultation') => {
    // TODO: отправка формы (например, через API или Firebase)
    console.log('Submitting:', formData);
  };

  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="w-full container mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center">
          <div className="w-full lg:w-1/2">
            <Image
              src="/images/img__632x718.png"
              alt="Consultation"
              width={718}
              height={632}
              className="w-full h-auto rounded-lg"
            />
          </div>
          <div className="w-full lg:w-1/2">
            <div className="flex flex-col gap-6 sm:gap-8">
              <div className="space-y-2 sm:space-y-4">
                <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-playfair-display font-semibold text-global-5">
                  Отримати консультацію
                </h2>
                <p className="text-sm lg:text-[14px] font-montserrat font-normal leading-relaxed text-global-5">
                  Дізнайтеся більше про Дерев'яне гніздо. Залиште контактні дані, ми вам
                  <br />
                  передзвонимо і відповімо на всі ваші запитання.
                </p>
              </div>
              <div className="space-y-4">
                <EditText
                  placeholder="Ваше ім'я"
                  value={formData.consultationName}
                  onChange={(e) => handleInputChange('consultationName', e.target.value)}
                  variant="filled"
                  className="bg-global-11"
                />
                <EditText
                  placeholder="+380(99) 999-99-99"
                  value={formData.consultationPhone}
                  onChange={(e) => handleInputChange('consultationPhone', e.target.value)}
                  variant="filled"
                  className="bg-global-11"
                />

                <Button
                  variant="primary"
                  size="md"
                  onClick={() => handleSubmit('consultation')}
                  className="bg-global-3 text-global-12 w-full"
                >
                  Отримати консультацію
                </Button>
              </div>
              <p className="text-xs lg:text-[10px] font-montserrat font-normal text-center text-global-5 max-w-2xl">
                Усі дані захищені та надійно зберігаються. Натискаючи на "Отримати консультацію" ви
                даєте свою згоду на обробку персональних даних.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
