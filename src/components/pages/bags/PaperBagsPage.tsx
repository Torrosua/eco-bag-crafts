import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Palette, Package, Award, Printer } from 'lucide-react';
import SEOHead from '../../SEOHead';
import Breadcrumbs from '../../Breadcrumbs';
import paperBagsImage from '@/assets/paper-bags.jpg';

interface PaperBagsPageProps {
  currentLang: 'uk' | 'en';
  onPageChange: (page: string) => void;
}

const PaperBagsPage = ({ currentLang, onPageChange }: PaperBagsPageProps) => {
  const { t } = useTranslation();

  const specifications = [
    {
      title: currentLang === 'uk' ? 'Матеріал' : 'Material',
      value: currentLang === 'uk' ? 'Крафт папір 90-150 г/м²' : 'Kraft paper 90-150 g/m²'
    },
    {
      title: currentLang === 'uk' ? 'Розміри' : 'Sizes',
      value: currentLang === 'uk' ? 'Від 150×80×200 до 540×140×490 мм' : 'From 150×80×200 to 540×140×490 mm'
    },
    {
      title: currentLang === 'uk' ? 'Друк' : 'Printing',
      value: currentLang === 'uk' ? 'Флексографія, до 4 кольорів' : 'Flexography, up to 4 colors'
    },
    {
      title: currentLang === 'uk' ? 'Мінімальний тираж' : 'Minimum quantity',
      value: currentLang === 'uk' ? 'від 100 штук' : 'from 100 pieces'
    }
  ];

  const features = [
    {
      title: currentLang === 'uk' ? 'Індивідуальний дизайн' : 'Custom design',
      description: currentLang === 'uk' 
        ? 'Створюємо унікальний дизайн згідно з вашим брендом та вимогами'
        : 'We create unique designs according to your brand and requirements',
      icon: Palette
    },
    {
      title: currentLang === 'uk' ? 'Якісні матеріали' : 'Quality materials',
      description: currentLang === 'uk'
        ? 'Використовуємо лише сертифікований крафт папір європейського виробництва'
        : 'We use only certified kraft paper of European production',
      icon: Award
    },
    {
      title: currentLang === 'uk' ? 'Професійний друк' : 'Professional printing',
      description: currentLang === 'uk'
        ? 'Сучасне обладнання забезпечує яскравість та стійкість кольорів'
        : 'Modern equipment ensures brightness and color fastness',
      icon: Printer
    },
    {
      title: currentLang === 'uk' ? 'Швидке виготовлення' : 'Fast production',
      description: currentLang === 'uk'
        ? 'Стандартний термін виготовлення 3-7 робочих днів'
        : 'Standard production time 3-7 working days',
      icon: Package
    }
  ];

  const sizes = [
    '150×80×200',
    '180×80×250', 
    '220×100×280',
    '250×110×320',
    '260×150×340',
    '330×160×340',
    '330×160×420',
    '450×160×480',
    '540×140×490'
  ];

  const applications = [
    currentLang === 'uk' ? 'Магазини одягу та взуття' : 'Clothing and shoe stores',
    currentLang === 'uk' ? 'Ювелірні салони' : 'Jewelry stores',
    currentLang === 'uk' ? 'Книжкові магазини' : 'Bookstores',
    currentLang === 'uk' ? 'Кафе та ресторани' : 'Cafes and restaurants',
    currentLang === 'uk' ? 'Подарункова упаковка' : 'Gift packaging',
    currentLang === 'uk' ? 'Промо-акції та виставки' : 'Promotions and exhibitions'
  ];

  const breadcrumbItems = [
    { 
      label: t('bags.title'), 
      onClick: () => onPageChange('bags')
    },
    { label: t('bags.paperBags') }
  ];

  return (
    <>
      <SEOHead
        title={currentLang === 'uk' ? 'Паперові пакети під замовлення - PaperBag' : 'Custom Paper Bags - PaperBag'}
        description={currentLang === 'uk' ? 'Виготовлення паперових пакетів з логотипом. Якісний крафт папір, професійний друк, швидкі терміни. Від 100 штук.' : 'Manufacturing paper bags with logo. Quality kraft paper, professional printing, fast turnaround. From 100 pieces.'}
      />
      
      <div className="min-h-screen py-8">
        <div className="container">
          <Breadcrumbs items={breadcrumbItems} onNavigate={onPageChange} />
          
          {/* Hero Section */}
          <section className="mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge variant="outline" className="mb-4">
                  <Package className="w-4 h-4 mr-2" />
                  {t('common.customPrinting')}
                </Badge>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  {t('products.paperBags.title')}
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  {t('products.paperBags.description')}
                </p>
                <div className="space-y-4 mb-8">
                  <p className="text-muted-foreground">
                    {currentLang === 'uk'
                      ? 'Паперові пакети з логотипом - це ефективний спосіб реклами вашого бренду. Кожен пакет стає мобільним носієм вашої айдентики, створюючи позитивне враження про компанію.'
                      : 'Paper bags with logo are an effective way to advertise your brand. Each bag becomes a mobile carrier of your identity, creating a positive impression of the company.'
                    }
                  </p>
                  <p className="text-muted-foreground">
                    {currentLang === 'uk'
                      ? 'Ми виготовляємо паперові пакети різних розмірів та форм, використовуючи високоякісний крафт папір та сучасні технології друку.'
                      : 'We manufacture paper bags of various sizes and shapes, using high-quality kraft paper and modern printing technologies.'
                    }
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    size="lg" 
                    onClick={() => onPageChange('contacts')}
                    className="group"
                  >
                    {currentLang === 'uk' ? 'Замовити зараз' : 'Order Now'}
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg"
                    onClick={() => onPageChange('prices')}
                  >
                    {t('prices.downloadPriceList')}
                  </Button>
                </div>
              </div>
              
              <div className="relative">
                <img
                  src={paperBagsImage}
                  alt={t('products.paperBags.title')}
                  className="rounded-2xl shadow-2xl w-full h-auto"
                />
              </div>
            </div>
          </section>

          {/* Specifications */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                {t('common.specifications')}
              </h2>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {specifications.map((spec, index) => (
                <Card key={index} className="text-center p-6 border-0 bg-gradient-to-br from-background to-muted/20">
                  <CardContent className="p-0">
                    <h4 className="font-semibold text-primary mb-2">{spec.title}</h4>
                    <p className="text-muted-foreground">{spec.value}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Features */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                {currentLang === 'uk' ? 'Переваги наших пакетів' : 'Our Bags Benefits'}
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="p-6 border-0 bg-gradient-to-br from-background to-muted/20">
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center">
                        <feature.icon className="w-6 h-6" />
                      </div>
                      <CardTitle className="text-xl">{feature.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Available Sizes */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                {currentLang === 'uk' ? 'Доступні розміри' : 'Available Sizes'}
              </h2>
              <p className="text-muted-foreground">
                {currentLang === 'uk' ? 'Розміри в мм (ширина × дно × висота)' : 'Sizes in mm (width × bottom × height)'}
              </p>
            </div>
            
            <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-4">
              {sizes.map((size, index) => (
                <div key={index} className="text-center p-4 bg-muted/30 rounded-lg">
                  <span className="text-sm font-medium">{size}</span>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-8">
              <p className="text-muted-foreground mb-4">
                {currentLang === 'uk' 
                  ? 'Потрібен інший розмір? Ми виготовимо пакети будь-якого розміру під замовлення!'
                  : 'Need a different size? We will manufacture bags of any size to order!'
                }
              </p>
              <Button variant="outline" onClick={() => onPageChange('contacts')}>
                {currentLang === 'uk' ? 'Замовити нестандартний розмір' : 'Order Custom Size'}
              </Button>
            </div>
          </section>

          {/* Applications */}
          <section className="mb-16 bg-muted/30 rounded-3xl p-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                {currentLang === 'uk' ? 'Сфери застосування' : 'Applications'}
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {applications.map((app, index) => (
                <div key={index} className="flex items-center gap-3 p-4 bg-background rounded-lg">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-muted-foreground">{app}</span>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground rounded-3xl p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">
              {currentLang === 'uk' 
                ? 'Готові створити унікальні пакети для вашого бренду?'
                : 'Ready to create unique bags for your brand?'
              }
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              {currentLang === 'uk'
                ? 'Наші фахівці допоможуть вам розробити дизайн та виготовити пакети, які ідеально відповідають вашому бренду'
                : 'Our specialists will help you develop a design and produce bags that perfectly match your brand'
              }
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="secondary"
                onClick={() => onPageChange('contacts')}
                className="group"
              >
                {t('hero.cta')}
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => onPageChange('artwork-requirements')}
                className="bg-transparent border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10"
              >
                {t('artworkRequirements.title')}
              </Button>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default PaperBagsPage;