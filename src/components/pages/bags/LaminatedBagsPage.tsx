import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Shield, Droplets, Palette, Award } from 'lucide-react';
import SEOHead from '../../SEOHead';
import Breadcrumbs from '../../Breadcrumbs';
import laminatedBagsImage from '@/assets/laminated-bags.jpg';

interface LaminatedBagsPageProps {
  currentLang: 'uk' | 'en';
  onPageChange: (page: string) => void;
}

const LaminatedBagsPage = ({ currentLang, onPageChange }: LaminatedBagsPageProps) => {
  const { t } = useTranslation();

  const specifications = [
    {
      title: currentLang === 'uk' ? 'Матеріал' : 'Material',
      value: currentLang === 'uk' ? 'Ламінований картон 250-350 г/м²' : 'Laminated cardboard 250-350 g/m²'
    },
    {
      title: currentLang === 'uk' ? 'Ламінація' : 'Lamination',
      value: currentLang === 'uk' ? 'Глянцева або матова' : 'Glossy or matte'
    },
    {
      title: currentLang === 'uk' ? 'Друк' : 'Printing',
      value: currentLang === 'uk' ? 'Офсет, до 6 кольорів + лак' : 'Offset, up to 6 colors + varnish'
    },
    {
      title: currentLang === 'uk' ? 'Обробка' : 'Finishing',
      value: currentLang === 'uk' ? 'УФ-лак, тиснення, вибійка' : 'UV varnish, embossing, die-cutting'
    }
  ];

  const features = [
    {
      title: currentLang === 'uk' ? 'Водостійкість' : 'Water resistance',
      description: currentLang === 'uk' 
        ? 'Ламінація захищає пакет від вологи та механічних пошкоджень'
        : 'Lamination protects the bag from moisture and mechanical damage',
      icon: Droplets
    },
    {
      title: currentLang === 'uk' ? 'Міцність' : 'Durability', 
      description: currentLang === 'uk'
        ? 'Посилена конструкція витримує вагу до 15 кг'
        : 'Reinforced construction withstands weight up to 15 kg',
      icon: Shield
    },
    {
      title: currentLang === 'uk' ? 'Яскравий друк' : 'Vibrant printing',
      description: currentLang === 'uk'
        ? 'Ламінація підкреслює насиченість кольорів та деталей'
        : 'Lamination enhances color saturation and detail',
      icon: Palette
    },
    {
      title: currentLang === 'uk' ? 'Преміум якість' : 'Premium quality',
      description: currentLang === 'uk'
        ? 'Представницький зовнішній вигляд для люксових брендів'
        : 'Representative appearance for luxury brands',
      icon: Award
    }
  ];

  const types = [
    {
      title: currentLang === 'uk' ? 'Глянцева ламінація' : 'Glossy lamination',
      description: currentLang === 'uk' 
        ? 'Створює яскравий блиск, підкреслює кольори'
        : 'Creates bright shine, emphasizes colors',
      features: [
        currentLang === 'uk' ? 'Максимальна яскравість кольорів' : 'Maximum color brightness',
        currentLang === 'uk' ? 'Стійкість до подряпин' : 'Scratch resistance', 
        currentLang === 'uk' ? 'Легко очищується' : 'Easy to clean'
      ]
    },
    {
      title: currentLang === 'uk' ? 'Матова ламінація' : 'Matte lamination',
      description: currentLang === 'uk'
        ? 'Надає елегантний матовий відтінок'
        : 'Gives an elegant matte finish',
      features: [
        currentLang === 'uk' ? 'Відсутність відблисків' : 'No glare',
        currentLang === 'uk' ? 'Приємні тактильні відчуття' : 'Pleasant tactile sensations',
        currentLang === 'uk' ? 'Елегантний зовнішній вигляд' : 'Elegant appearance'
      ]
    }
  ];

  const applications = [
    currentLang === 'uk' ? 'Бутіки та преміум магазини' : 'Boutiques and premium stores',
    currentLang === 'uk' ? 'Ювелірні салони' : 'Jewelry stores',
    currentLang === 'uk' ? 'Косметичні бренди' : 'Cosmetic brands',
    currentLang === 'uk' ? 'Елітний алкоголь' : 'Premium alcohol',
    currentLang === 'uk' ? 'Подарункова упаковка' : 'Gift packaging',
    currentLang === 'uk' ? 'Представницькі заходи' : 'Representative events'
  ];

  const breadcrumbItems = [
    { 
      label: t('bags.title'), 
      onClick: () => onPageChange('bags')
    },
    { label: t('bags.laminatedBags') }
  ];

  return (
    <>
      <SEOHead
        title={currentLang === 'uk' ? 'Ламіновані пакети - PaperBag' : 'Laminated Bags - PaperBag'}
        description={currentLang === 'uk' ? 'Виготовлення ламінованих пакетів преміум якості. Водостійкі, міцні, з яскравим друком. Глянцева та матова ламінація.' : 'Manufacturing premium quality laminated bags. Water-resistant, durable, with vibrant printing. Glossy and matte lamination.'}
      />
      
      <div className="min-h-screen py-8">
        <div className="container">
          <Breadcrumbs items={breadcrumbItems} onNavigate={onPageChange} />
          
          {/* Hero Section */}
          <section className="mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge variant="outline" className="mb-4">
                  <Shield className="w-4 h-4 mr-2" />
                  {t('common.durable')}
                </Badge>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  {t('products.laminatedBags.title')}
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  {t('products.laminatedBags.description')}
                </p>
                <div className="space-y-4 mb-8">
                  <p className="text-muted-foreground">
                    {currentLang === 'uk'
                      ? 'Ламіновані пакети - це преміум рішення для брендів, які цінують якість та стиль. Спеціальне покриття робить пакети водостійкими та надзвичайно міцними.'
                      : 'Laminated bags are a premium solution for brands that value quality and style. Special coating makes bags water-resistant and extremely durable.'
                    }
                  </p>
                  <p className="text-muted-foreground">
                    {currentLang === 'uk'
                      ? 'Яскравий друк та різноманітні варіанти обробки дозволяють створити унікальну упаковку, яка підкреслить статус вашого бренду.'
                      : 'Vibrant printing and various finishing options allow you to create unique packaging that will emphasize your brand status.'
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
                  src={laminatedBagsImage}
                  alt={t('products.laminatedBags.title')}
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
                {currentLang === 'uk' ? 'Переваги ламінованих пакетів' : 'Laminated Bags Benefits'}
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

          {/* Types of Lamination */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                {currentLang === 'uk' ? 'Типи ламінації' : 'Types of Lamination'}
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {types.map((type, index) => (
                <Card key={index} className="p-8 border-0 bg-gradient-to-br from-background to-muted/20">
                  <CardHeader className="pb-6">
                    <CardTitle className="text-2xl text-center">{type.title}</CardTitle>
                    <p className="text-muted-foreground text-center">{type.description}</p>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="space-y-3">
                      {type.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                          <span className="text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Applications */}
          <section className="mb-16 bg-muted/30 rounded-3xl p-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                {currentLang === 'uk' ? 'Ідеально підходять для' : 'Perfect for'}
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
                ? 'Хочете підкреслити преміальність вашого бренду?'
                : 'Want to emphasize the premium quality of your brand?'
              }
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              {currentLang === 'uk'
                ? 'Ламіновані пакети - це інвестиція в імідж вашої компанії. Вони створюють враження якості та надійності'
                : 'Laminated bags are an investment in your company\'s image. They create an impression of quality and reliability'
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

export default LaminatedBagsPage;