import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Package, Sparkles, Heart, Gift } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import Breadcrumbs from "@/components/Breadcrumbs";
import clutchBagsImage from "@/assets/clutch-bags.jpg";

interface ClutchBagsPageProps {
  currentLang: 'uk' | 'en';
  onPageChange: (page: string) => void;
}

const ClutchBagsPage = ({ currentLang, onPageChange }: ClutchBagsPageProps) => {
  const { t } = useTranslation();

  const breadcrumbItems = [
    { label: t('nav.home'), href: '#', onClick: () => onPageChange('home') },
    { label: t('nav.bags'), href: '#', onClick: () => onPageChange('bags') },
    { label: t('bags.clutchBags'), href: '#' }
  ];

  const features = [
    {
      icon: Sparkles,
      title: currentLang === 'uk' ? 'Стильний дизайн' : 'Stylish Design',
      description: currentLang === 'uk' 
        ? 'Елегантна форма клатча для преміальної упаковки'
        : 'Elegant clutch shape for premium packaging'
    },
    {
      icon: Gift,
      title: currentLang === 'uk' ? 'Подарункова упаковка' : 'Gift Packaging',
      description: currentLang === 'uk'
        ? 'Ідеальна упаковка для подарунків та преміальних товарів'
        : 'Perfect packaging for gifts and premium products'
    },
    {
      icon: Heart,
      title: currentLang === 'uk' ? 'Високоякісна печать' : 'High-Quality Printing',
      description: currentLang === 'uk'
        ? 'Повнокольорова офсетна печать з ламінуванням'
        : 'Full-color offset printing with lamination'
    }
  ];

  const specifications = [
    {
      title: currentLang === 'uk' ? 'Розміри' : 'Dimensions',
      value: currentLang === 'uk' ? 'Від 100×80×40 мм до 400×300×100 мм' : 'From 100×80×40 mm to 400×300×100 mm'
    },
    {
      title: currentLang === 'uk' ? 'Матеріал' : 'Material',
      value: currentLang === 'uk' ? 'Крейдований картон 300-400 г/м²' : 'Coated cardboard 300-400 g/m²'
    },
    {
      title: currentLang === 'uk' ? 'Обробка' : 'Finishing',
      value: currentLang === 'uk' ? 'Матове або глянцеве ламінування' : 'Matte or glossy lamination'
    },
    {
      title: currentLang === 'uk' ? 'Мінімальний наклад' : 'Minimum Order',
      value: currentLang === 'uk' ? 'Від 500 шт.' : 'From 500 pcs'
    }
  ];

  return (
    <>
      <SEOHead 
        title={`${t('bags.clutchBags')} | ${t('contact.company')}`}
        description={currentLang === 'uk' 
          ? 'Стильні клатч-пакети з логотипом для преміальної упаковки подарунків. Високоякісна печать, ламінування, доставка по Україні.'
          : 'Stylish clutch bags with logo for premium gift packaging. High-quality printing, lamination, delivery across Ukraine.'}
        canonical={`https://paperbag.lovable.app/bags/clutch-bags`}
      />
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-8">
          <Breadcrumbs items={breadcrumbItems} />
          
          <div className="mt-8">
            <div className="text-center mb-12">
              <Badge variant="secondary" className="mb-4">
                {t('bags.title')}
              </Badge>
              <h1 className="text-4xl font-bold text-foreground mb-4">
                {t('bags.clutchBags')}
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                {currentLang === 'uk' 
                  ? 'Преміальні клатч-пакети для стильної подарункової упаковки. Елегантний дизайн, високоякісні матеріали та повнокольорова печать з ламінуванням.'
                  : 'Premium clutch bags for stylish gift packaging. Elegant design, high-quality materials and full-color printing with lamination.'
                }
              </p>
            </div>

            {/* Hero Image */}
            <div className="mb-12">
              <img 
                src={clutchBagsImage} 
                alt={t('bags.clutchBags')}
                className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg"
              />
            </div>

            {/* Features */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {features.map((feature, index) => (
                <Card key={index} className="text-center">
                  <CardHeader>
                    <feature.icon className="w-12 h-12 mx-auto text-primary mb-4" />
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Specifications */}
            <Card className="mb-12">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Package className="w-5 h-5" />
                  {t('common.specifications')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  {specifications.map((spec, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b border-border last:border-b-0">
                      <span className="font-medium">{spec.title}:</span>
                      <span className="text-muted-foreground">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Our Works */}
            <Card className="mb-12">
              <CardHeader>
                <CardTitle>{t('common.ourWorks')}</CardTitle>
                <CardDescription>
                  {currentLang === 'uk'
                    ? 'Приклади виконаних робіт з виготовлення клатч-пакетів'
                    : 'Examples of completed clutch bag production projects'
                  }
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[1, 2, 3, 4, 5, 6].map((item) => (
                    <div key={item} className="aspect-square bg-muted rounded-lg flex items-center justify-center">
                      <Package className="w-12 h-12 text-muted-foreground" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* CTA */}
            <Card className="text-center">
              <CardContent className="pt-6">
                <h3 className="text-2xl font-bold mb-4">
                  {currentLang === 'uk' ? 'Замовити клатч-пакети' : 'Order Clutch Bags'}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {currentLang === 'uk'
                    ? 'Зв\'яжіться з нами для розрахунку вартості та оформлення замовлення'
                    : 'Contact us for cost calculation and order placement'
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

export default ClutchBagsPage;