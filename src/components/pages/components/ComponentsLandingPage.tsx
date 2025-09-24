import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Package, ArrowRight, Grip, Link, Circle } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import Breadcrumbs from "@/components/Breadcrumbs";

interface ComponentsLandingPageProps {
  currentLang: 'uk' | 'en';
  onPageChange: (page: string) => void;
}

const ComponentsLandingPage = ({ currentLang, onPageChange }: ComponentsLandingPageProps) => {
  const { t } = useTranslation();

  const breadcrumbItems = [
    { label: t('nav.home'), href: '#', onClick: () => onPageChange('home') },
    { label: t('nav.components'), href: '#' }
  ];

  const components = [
    {
      id: 'paper-handles',
      icon: Grip,
      title: t('components.paperHandles'),
      description: currentLang === 'uk' 
        ? 'Міцні паперові ручки для пакетів різних розмірів та кольорів'
        : 'Strong paper handles for bags of various sizes and colors',
      features: currentLang === 'uk'
        ? ['Різні кольори', 'Високоміцна бумага', 'Екологічність', 'Доступні ціни']
        : ['Various colors', 'High-strength paper', 'Eco-friendly', 'Affordable prices']
    },
    {
      id: 'handles-with-tips',
      icon: Link,
      title: t('components.handlesWithTips'),
      description: currentLang === 'uk'
        ? 'Текстильні ручки з ПВХ наконечниками для преміальних пакетів'
        : 'Textile handles with PVC tips for premium bags',
      features: currentLang === 'uk'
        ? ['ПВХ наконечники', 'Текстильна основа', 'Преміальний вигляд', 'Довговічність']
        : ['PVC tips', 'Textile base', 'Premium appearance', 'Durability']
    },
    {
      id: 'eyelets',
      icon: Circle,
      title: t('components.eyelets'),
      description: currentLang === 'uk'
        ? 'Металеві люверси для кріплення ручок до пакетів'
        : 'Metal eyelets for attaching handles to bags',
      features: currentLang === 'uk'
        ? ['Різні розміри', 'Антикорозійне покриття', 'Міцність', 'Легкий монтаж']
        : ['Various sizes', 'Anti-corrosion coating', 'Strength', 'Easy installation']
    }
  ];

  return (
    <>
      <SEOHead 
        title={`${t('nav.components')} | ${t('contact.company')}`}
        description={currentLang === 'uk' 
          ? 'Комплектуючі для паперових пакетів: ручки, люверси, фурнітура. Якісні аксесуари від українського виробника.'
          : 'Components for paper bags: handles, eyelets, hardware. Quality accessories from Ukrainian manufacturer.'}
        canonical={`https://paperbag.lovable.app/components`}
      />
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-8">
          <Breadcrumbs items={breadcrumbItems} />
          
          <div className="mt-8">
            <div className="text-center mb-12">
              <Badge variant="secondary" className="mb-4">
                {t('nav.components')}
              </Badge>
              <h1 className="text-4xl font-bold text-foreground mb-4">
                {t('components.title')}
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                {currentLang === 'uk' 
                  ? 'Якісні комплектуючі та аксесуари для виробництва паперових пакетів. Ручки, люверси та інша фурнітура від надійного постачальника.'
                  : 'Quality components and accessories for paper bag production. Handles, eyelets and other hardware from reliable supplier.'
                }
              </p>
            </div>

            {/* Hero Stats */}
            <div className="grid md:grid-cols-4 gap-6 mb-12">
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold text-primary mb-2">15+</div>
                  <p className="text-sm text-muted-foreground">
                    {currentLang === 'uk' ? 'Років досвіду' : 'Years experience'}
                  </p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold text-primary mb-2">500+</div>
                  <p className="text-sm text-muted-foreground">
                    {currentLang === 'uk' ? 'Типів комплектуючих' : 'Component types'}
                  </p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                  <p className="text-sm text-muted-foreground">
                    {currentLang === 'uk' ? 'Наявність на складі' : 'Stock availability'}
                  </p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold text-primary mb-2">100%</div>
                  <p className="text-sm text-muted-foreground">
                    {currentLang === 'uk' ? 'Гарантія якості' : 'Quality guarantee'}
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Components Grid */}
            <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
              {components.map((component) => (
                <Card key={component.id} className="group hover:shadow-lg transition-shadow">
                  <CardHeader className="text-center">
                    <component.icon className="w-16 h-16 mx-auto text-primary mb-4 group-hover:scale-110 transition-transform" />
                    <CardTitle className="text-xl">{component.title}</CardTitle>
                    <CardDescription className="text-base">
                      {component.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 mb-6">
                      {component.features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-primary rounded-full" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <Button 
                      className="w-full" 
                      variant="outline"
                      onClick={() => onPageChange(`components/${component.id}`)}
                    >
                      {t('common.learnMore')}
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Why Choose Us */}
            <Card className="mb-12">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">
                  {currentLang === 'uk' ? 'Чому обирають нас?' : 'Why Choose Us?'}
                </CardTitle>
                <CardDescription>
                  {currentLang === 'uk'
                    ? 'Переваги співпраці з нашою компанією'
                    : 'Advantages of working with our company'
                  }
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="text-center">
                    <Package className="w-8 h-8 mx-auto text-primary mb-3" />
                    <h4 className="font-semibold mb-2">
                      {currentLang === 'uk' ? 'Широкий асортимент' : 'Wide Range'}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {currentLang === 'uk' 
                        ? 'Понад 500 видів комплектуючих в наявності'
                        : 'Over 500 types of components in stock'
                      }
                    </p>
                  </div>
                  <div className="text-center">
                    <Badge className="w-8 h-8 mx-auto text-primary mb-3 flex items-center justify-center">
                      ✓
                    </Badge>
                    <h4 className="font-semibold mb-2">
                      {t('common.qualityGuarantee')}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {currentLang === 'uk' 
                        ? 'Сертифікована продукція європейської якості'
                        : 'Certified products of European quality'
                      }
                    </p>
                  </div>
                  <div className="text-center">
                    <Grip className="w-8 h-8 mx-auto text-primary mb-3" />
                    <h4 className="font-semibold mb-2">
                      {currentLang === 'uk' ? 'Швидка доставка' : 'Fast Delivery'}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {currentLang === 'uk' 
                        ? 'Відправлення в день замовлення по всій Україні'
                        : 'Same-day shipping throughout Ukraine'
                      }
                    </p>
                  </div>
                  <div className="text-center">
                    <Link className="w-8 h-8 mx-auto text-primary mb-3" />
                    <h4 className="font-semibold mb-2">
                      {currentLang === 'uk' ? 'Технічна підтримка' : 'Technical Support'}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {currentLang === 'uk' 
                        ? 'Консультації з підбору та використання'
                        : 'Consultation on selection and usage'
                      }
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* CTA */}
            <Card className="text-center">
              <CardContent className="pt-6">
                <h3 className="text-2xl font-bold mb-4">
                  {currentLang === 'uk' ? 'Потрібні комплектуючі?' : 'Need Components?'}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {currentLang === 'uk'
                    ? 'Зв\'яжіться з нами для підбору якісних комплектуючих та розрахунку вартості'
                    : 'Contact us for quality component selection and cost calculation'
                  }
                </p>
                <Button size="lg" onClick={() => onPageChange('contacts')}>
                  {t('hero.cta')}
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default ComponentsLandingPage;