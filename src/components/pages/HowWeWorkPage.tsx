import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MessageSquare, Palette, Settings, Truck, ArrowRight, CheckCircle } from 'lucide-react';
import { translations } from '@/lib/translations';

interface HowWeWorkPageProps {
  currentLang: 'uk' | 'en';
  onPageChange: (page: string) => void;
}

const HowWeWorkPage = ({ currentLang, onPageChange }: HowWeWorkPageProps) => {
  const t = translations[currentLang];

  const steps = [
    {
      icon: MessageSquare,
      title: t.howWeWork.step1,
      description: t.howWeWork.step1Desc,
      details: currentLang === 'uk' 
        ? ['Обговорення ваших потреб', 'Визначення технічних вимог', 'Розрахунок вартості', 'Погодження умов']
        : ['Discussing your needs', 'Defining technical requirements', 'Cost calculation', 'Agreement on terms']
    },
    {
      icon: Palette,
      title: t.howWeWork.step2,
      description: t.howWeWork.step2Desc,
      details: currentLang === 'uk'
        ? ['Створення макету', 'Підбір матеріалів', 'Вибір кольорів', 'Узгодження дизайну']
        : ['Creating layout', 'Material selection', 'Color choice', 'Design approval']
    },
    {
      icon: Settings,
      title: t.howWeWork.step3,
      description: t.howWeWork.step3Desc,
      details: currentLang === 'uk'
        ? ['Підготовка до друку', 'Виробництво', 'Контроль якості', 'Упаковка готової продукції']
        : ['Print preparation', 'Production', 'Quality control', 'Packaging finished products']
    },
    {
      icon: Truck,
      title: t.howWeWork.step4,
      description: t.howWeWork.step4Desc,
      details: currentLang === 'uk'
        ? ['Упаковка замовлення', 'Відправка', 'Відстеження доставки', 'Отримання товару']
        : ['Order packaging', 'Shipping', 'Delivery tracking', 'Product receipt']
    }
  ];

  const features = [
    {
      title: currentLang === 'uk' ? 'Мінімальний тираж' : 'Minimum Quantity',
      value: currentLang === 'uk' ? 'від 100 шт' : 'from 100 pcs',
      icon: CheckCircle
    },
    {
      title: currentLang === 'uk' ? 'Термін виробництва' : 'Production Time',
      value: currentLang === 'uk' ? '3-7 днів' : '3-7 days',
      icon: CheckCircle
    },
    {
      title: currentLang === 'uk' ? 'Варіанти оплати' : 'Payment Options',
      value: currentLang === 'uk' ? 'Готівка / Безготівка' : 'Cash / Non-cash',
      icon: CheckCircle
    },
    {
      title: currentLang === 'uk' ? 'Доставка' : 'Delivery',
      value: currentLang === 'uk' ? 'По всій Україні' : 'Throughout Ukraine',
      icon: CheckCircle
    }
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
            {t.howWeWork.title}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t.howWeWork.subtitle}
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-20">
          {steps.map((step, index) => (
            <Card key={index} className="product-card border-kraft-light overflow-hidden">
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 bg-gradient-eco rounded-full flex items-center justify-center mb-4">
                      <step.icon className="w-8 h-8 text-eco-green" />
                    </div>
                    <div className="w-1 h-20 bg-gradient-to-b from-eco-green to-transparent"></div>
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-2xl font-bold text-primary">0{index + 1}</span>
                      <h3 className="text-2xl font-bold text-primary">{step.title}</h3>
                    </div>
                    <p className="text-muted-foreground mb-6">{step.description}</p>
                    
                    <div className="space-y-2">
                      {step.details.map((detail, detailIndex) => (
                        <div key={detailIndex} className="flex items-center">
                          <div className="w-2 h-2 bg-eco-green rounded-full mr-3"></div>
                          <span className="text-sm text-muted-foreground">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Features Grid */}
        <div className="bg-kraft-light/20 rounded-2xl p-8 mb-12">
          <h2 className="text-3xl font-bold text-primary text-center mb-8">
            {currentLang === 'uk' ? 'Умови співпраці' : 'Cooperation Terms'}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="text-center p-6 border-kraft-medium/30">
                <CardContent className="p-0">
                  <feature.icon className="w-8 h-8 text-eco-green mx-auto mb-4" />
                  <h3 className="font-semibold text-primary mb-2">{feature.title}</h3>
                  <p className="text-lg font-bold text-accent">{feature.value}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Customization Options */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-primary mb-6">
              {currentLang === 'uk' ? 'Варіанти кастомізації' : 'Customization Options'}
            </h2>
            <div className="space-y-4">
              {[
                currentLang === 'uk' ? 'Друк логотипу (1-4 кольори)' : 'Logo printing (1-4 colors)',
                currentLang === 'uk' ? 'Вибір матеріалу (крафт, білий папір, ламінований)' : 'Material choice (kraft, white paper, laminated)',
                currentLang === 'uk' ? 'Тип ручок (паперові, стрічкові, відсутні)' : 'Handle type (paper, ribbon, none)',
                currentLang === 'uk' ? 'Індивідуальні розміри' : 'Custom sizes',
                currentLang === 'uk' ? 'Спеціальні форми (клатч, з дном)' : 'Special shapes (clutch, with bottom)',
                currentLang === 'uk' ? 'Додаткова обробка (тиснення, лакування)' : 'Additional processing (embossing, varnishing)'
              ].map((option, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-eco-green mr-3" />
                  <span className="text-muted-foreground">{option}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="kraft-texture rounded-2xl p-8 bg-kraft-light/30">
            <h2 className="text-2xl font-bold text-primary mb-6">
              {currentLang === 'uk' ? 'Оплата та доставка' : 'Payment and Delivery'}
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-primary mb-2">
                  {currentLang === 'uk' ? 'Способи оплати:' : 'Payment methods:'}
                </h3>
                <ul className="text-muted-foreground text-sm space-y-1">
                  <li>• {currentLang === 'uk' ? 'Готівковий розрахунок' : 'Cash payment'}</li>
                  <li>• {currentLang === 'uk' ? 'Безготівковий розрахунок' : 'Non-cash payment'}</li>
                  <li>• {currentLang === 'uk' ? 'Оплата при отриманні' : 'Payment on delivery'}</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-primary mb-2">
                  {currentLang === 'uk' ? 'Доставка:' : 'Delivery:'}
                </h3>
                <ul className="text-muted-foreground text-sm space-y-1">
                  <li>• {currentLang === 'uk' ? 'Нова Пошта' : 'Nova Poshta'}</li>
                  <li>• {currentLang === 'uk' ? 'Укрпошта' : 'Ukrposhta'}</li>
                  <li>• {currentLang === 'uk' ? 'Власний транспорт (Київ)' : 'Own transport (Kyiv)'}</li>
                  <li>• {currentLang === 'uk' ? 'Самовивіз' : 'Self-pickup'}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-kraft rounded-2xl p-12">
          <h2 className="text-3xl font-bold text-primary mb-4">
            {currentLang === 'uk' 
              ? 'Готові розпочати замовлення?'
              : 'Ready to Start Your Order?'}
          </h2>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            {currentLang === 'uk'
              ? 'Зв\'яжіться з нами для отримання детальної консультації та розрахунку вартості'
              : 'Contact us for detailed consultation and cost calculation'}
          </p>
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary-hover btn-kraft"
            onClick={() => onPageChange('contact')}
          >
            {currentLang === 'uk' ? 'Розрахувати вартість' : 'Calculate Cost'}
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HowWeWorkPage;