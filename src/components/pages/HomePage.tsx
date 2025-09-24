import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Leaf, Award, Truck } from 'lucide-react';
import { translations } from '@/lib/translations';
import heroImage from '@/assets/hero-bags.jpg';
import SEOHead from '@/components/SEOHead';

interface HomePageProps {
  currentLang: 'uk' | 'en';
  onPageChange: (page: string) => void;
}

const HomePage = ({ currentLang, onPageChange }: HomePageProps) => {
  const t = translations[currentLang];

  const features = [
    {
      icon: Leaf,
      title: currentLang === 'uk' ? 'Екологічно чисто' : 'Eco-friendly',
      description: currentLang === 'uk' 
        ? 'Використовуємо лише натуральні матеріали' 
        : 'We use only natural materials'
    },
    {
      icon: Award,
      title: currentLang === 'uk' ? 'Висока якість' : 'High Quality',
      description: currentLang === 'uk' 
        ? 'Контроль якості на всіх етапах виробництва' 
        : 'Quality control at all stages of production'
    },
    {
      icon: Truck,
      title: currentLang === 'uk' ? 'Швидка доставка' : 'Fast Delivery',
      description: currentLang === 'uk' 
        ? 'Доставка по всій Україні протягом 2-5 днів' 
        : 'Delivery throughout Ukraine within 2-5 days'
    }
  ];

  return (
    <>
      <SEOHead 
        title={currentLang === 'uk' ? 'Головна' : 'Home'}
        description={currentLang === 'uk' 
          ? 'Провідний виробник екологічної паперової упаковки в Україні. Паперові пакети, ламіновані пакети, крафт упаковка. Мінімальне замовлення 100 шт.'
          : 'Leading manufacturer of eco-friendly paper bags, laminated packaging, kraft bags and gift boxes in Ukraine. Custom printing, nationwide delivery, minimum 100 pcs orders.'
        }
        canonical="https://paperbag.lovable.app/"
      />
      <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 kraft-texture overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-90"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
                {t.hero.title}
              </h1>
              <p className="text-xl lg:text-2xl text-primary-foreground/90 mb-8 max-w-2xl">
                {t.hero.subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button 
                  size="lg" 
                  className="bg-accent hover:bg-accent-light text-accent-foreground btn-eco text-lg px-8 py-6"
                  onClick={() => onPageChange('contact')}
                >
                  {t.hero.cta}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary btn-kraft text-lg px-8 py-6"
                  onClick={() => onPageChange('products')}
                >
                  {currentLang === 'uk' ? 'Переглянути продукцію' : 'View Products'}
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-elegant">
                <img 
                  src={heroImage} 
                  alt="Paper bags and packaging products"
                  className="w-full h-[400px] lg:h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
              {currentLang === 'uk' ? 'Чому обирають нас' : 'Why Choose Us'}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {currentLang === 'uk' 
                ? 'Ми пропонуємо найкращі рішення для вашого бізнесу'
                : 'We offer the best solutions for your business'}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="product-card text-center p-8 border-kraft-light">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-gradient-eco rounded-full flex items-center justify-center mx-auto mb-6">
                    <feature.icon className="w-8 h-8 text-eco-green" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-4">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Products Preview */}
      <section className="py-20 bg-kraft-light/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
              {t.products.title}
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              {t.products.subtitle}
            </p>
            <Button 
              size="lg" 
              onClick={() => onPageChange('products')}
              className="btn-kraft"
            >
              {currentLang === 'uk' ? 'Переглянути всю продукцію' : 'View All Products'}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-kraft">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
            {currentLang === 'uk' 
              ? 'Готові почати співпрацю?' 
              : 'Ready to Start Cooperation?'}
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            {currentLang === 'uk'
              ? 'Зв\'яжіться з нами сьогодні та отримайте індивідуальну пропозицію для вашого бізнесу'
              : 'Contact us today and get a personalized offer for your business'}
          </p>
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary-hover btn-kraft text-lg px-8 py-6"
            onClick={() => onPageChange('contact')}
          >
            {t.hero.cta}
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>
      </div>
    </>
  );
};

export default HomePage;