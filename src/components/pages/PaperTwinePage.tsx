import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Leaf, Package, Scissors, Truck } from 'lucide-react';
import SEOHead from '../SEOHead';
import Breadcrumbs from '../Breadcrumbs';

interface PaperTwinePageProps {
  currentLang: 'uk' | 'en';
  onPageChange: (page: string) => void;
}

const PaperTwinePage = ({ currentLang, onPageChange }: PaperTwinePageProps) => {
  const { t } = useTranslation();

  const specifications = [
    {
      title: currentLang === 'uk' ? 'Матеріал' : 'Material',
      value: currentLang === 'uk' ? '100% натуральний папір' : '100% natural paper'
    },
    {
      title: currentLang === 'uk' ? 'Товщина' : 'Thickness',
      value: '2-5 мм'
    },
    {
      title: currentLang === 'uk' ? 'Довжина' : 'Length',
      value: currentLang === 'uk' ? '50-500 метрів' : '50-500 meters'
    },
    {
      title: currentLang === 'uk' ? 'Кольори' : 'Colors',
      value: currentLang === 'uk' ? 'Натуральний, білий, коричневий' : 'Natural, white, brown'
    }
  ];

  const applications = [
    {
      title: currentLang === 'uk' ? 'Пакування подарунків' : 'Gift packaging',
      description: currentLang === 'uk' 
        ? 'Ідеально підходить для декоративного оформлення подарунків та сувенірів'
        : 'Perfect for decorative gift and souvenir wrapping',
      icon: Package
    },
    {
      title: currentLang === 'uk' ? 'Рукоділля та творчість' : 'Crafts and creativity',
      description: currentLang === 'uk'
        ? 'Популярний матеріал для hand-made проектів та декоративних робіт'
        : 'Popular material for hand-made projects and decorative work',
      icon: Scissors
    },
    {
      title: currentLang === 'uk' ? 'Промислове пакування' : 'Industrial packaging',
      description: currentLang === 'uk'
        ? 'Використовується для зв\'язування та пакування різних товарів'
        : 'Used for binding and packaging various goods',
      icon: Truck
    },
    {
      title: currentLang === 'uk' ? 'Екологічна альтернатива' : 'Eco-friendly alternative',
      description: currentLang === 'uk'
        ? 'Замінює пластикові матеріали в упаковці та декорі'
        : 'Replaces plastic materials in packaging and decoration',
      icon: Leaf
    }
  ];

  const features = [
    currentLang === 'uk' ? '100% біорозкладний' : '100% biodegradable',
    currentLang === 'uk' ? 'Міцний та надійний' : 'Strong and reliable',
    currentLang === 'uk' ? 'Легко в обробці' : 'Easy to process',
    currentLang === 'uk' ? 'Естетично привабливий' : 'Aesthetically appealing',
    currentLang === 'uk' ? 'Різні товщини в наявності' : 'Various thicknesses available',
    currentLang === 'uk' ? 'Конкурентні ціни' : 'Competitive prices'
  ];

  const breadcrumbItems = [
    { label: t('products.paperTwine.title') }
  ];

  return (
    <>
      <SEOHead
        title={currentLang === 'uk' ? 'Паперовий шпагат - PaperBag' : 'Paper Twine - PaperBag'}
        description={currentLang === 'uk' ? 'Натуральний паперовий шпагат для упаковки. 100% екологічний, міцний, різні товщини. Ідеально для подарунків та рукоділля.' : 'Natural paper twine for packaging. 100% eco-friendly, strong, various thicknesses. Perfect for gifts and crafts.'}
      />
      
      <div className="min-h-screen py-8">
        <div className="container">
          <Breadcrumbs items={breadcrumbItems} onNavigate={onPageChange} />
          
          {/* Hero Section */}
          <section className="mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge variant="outline" className="mb-4">
                  <Leaf className="w-4 h-4 mr-2" />
                  {t('common.ecoFriendly')}
                </Badge>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  {t('products.paperTwine.title')}
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  {t('products.paperTwine.description')}
                </p>
                <div className="space-y-4 mb-8">
                  <p className="text-muted-foreground">
                    {currentLang === 'uk'
                      ? 'Наш паперовий шпагат виготовляється з високоякісного натурального паперу без використання шкідливих хімічних речовин. Це ідеальне рішення для тих, хто цінує екологічність та естетику.'
                      : 'Our paper twine is made from high-quality natural paper without the use of harmful chemicals. This is the perfect solution for those who value environmental friendliness and aesthetics.'
                    }
                  </p>
                  <p className="text-muted-foreground">
                    {currentLang === 'uk'
                      ? 'Завдяки своїй міцності та привабливому зовнішньому вигляду, паперовий шпагат стає все більш популярним у сфері упаковки подарунків, рукоділля та промислового використання.'
                      : 'Due to its strength and attractive appearance, paper twine is becoming increasingly popular in gift packaging, crafts and industrial use.'
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
                <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8 h-96 flex items-center justify-center">
                  <div className="text-center">
                    <Package className="w-24 h-24 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-primary mb-2">
                      {currentLang === 'uk' ? 'Паперовий шпагат' : 'Paper Twine'}
                    </h3>
                    <p className="text-muted-foreground">
                      {currentLang === 'uk' ? 'Екологічно чистий матеріал' : 'Eco-friendly material'}
                    </p>
                  </div>
                </div>
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

          {/* Applications */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                {currentLang === 'uk' ? 'Сфери застосування' : 'Applications'}
              </h2>
              <p className="text-xl text-muted-foreground">
                {currentLang === 'uk'
                  ? 'Де можна використовувати паперовий шпагат'
                  : 'Where paper twine can be used'
                }
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {applications.map((app, index) => (
                <Card key={index} className="p-6 border-0 bg-gradient-to-br from-background to-muted/20">
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center">
                        <app.icon className="w-6 h-6" />
                      </div>
                      <CardTitle className="text-xl">{app.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-muted-foreground">{app.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Features */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                {currentLang === 'uk' ? 'Переваги' : 'Benefits'}
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3 p-4 bg-muted/30 rounded-lg">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-muted-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-3xl p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">
              {currentLang === 'uk' 
                ? 'Потрібен паперовий шпагат?'
                : 'Need paper twine?'
              }
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              {currentLang === 'uk'
                ? 'Зв\'яжіться з нами для отримання детальної інформації про наявність та ціни'
                : 'Contact us for detailed information about availability and prices'
              }
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                onClick={() => onPageChange('contacts')}
                className="group"
              >
                {t('hero.cta')}
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => onPageChange('products')}
              >
                {currentLang === 'uk' ? 'Вся продукція' : 'All Products'}
              </Button>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default PaperTwinePage;