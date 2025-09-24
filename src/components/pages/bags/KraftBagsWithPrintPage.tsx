import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Package, Palette, Recycle, Truck } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import Breadcrumbs from "@/components/Breadcrumbs";
import kraftBagsImage from "@/assets/kraft-bags.jpg";

interface KraftBagsWithPrintPageProps {
  currentLang: 'uk' | 'en';
  onPageChange: (page: string) => void;
}

const KraftBagsWithPrintPage = ({ currentLang, onPageChange }: KraftBagsWithPrintPageProps) => {
  const { t } = useTranslation();

  const breadcrumbItems = [
    { label: t('nav.home'), href: '#', onClick: () => onPageChange('home') },
    { label: t('nav.bags'), href: '#', onClick: () => onPageChange('bags') },
    { label: t('bags.kraftBagsWithPrint'), href: '#' }
  ];

  const features = [
    {
      icon: Recycle,
      title: currentLang === 'uk' ? 'Екологічність' : 'Eco-Friendly',
      description: currentLang === 'uk' 
        ? '100% натуральна крафт-бумага, що повністю розкладається'
        : '100% natural kraft paper, completely biodegradable'
    },
    {
      icon: Palette,
      title: currentLang === 'uk' ? 'Якісна печать' : 'Quality Printing',
      description: currentLang === 'uk'
        ? 'Флексографічна та шовкографічна печать логотипів'
        : 'Flexographic and silk screen printing of logos'
    },
    {
      icon: Package,
      title: currentLang === 'uk' ? 'Міцність' : 'Durability',
      description: currentLang === 'uk'
        ? 'Високоміцна крафт-бумага витримує до 10 кг'
        : 'High-strength kraft paper withstands up to 10 kg'
    }
  ];

  const printingOptions = [
    {
      type: currentLang === 'uk' ? 'Флексографічна печать' : 'Flexographic printing',
      description: currentLang === 'uk' 
        ? 'До 2-х кольорів, простий дизайн, економічна опція'
        : 'Up to 2 colors, simple design, economical option'
    },
    {
      type: currentLang === 'uk' ? 'Шовкографічна печать' : 'Silk screen printing',  
      description: currentLang === 'uk'
        ? 'До 4-х кольорів, складний дизайн, преміальна якість'
        : 'Up to 4 colors, complex design, premium quality'
    },
    {
      type: currentLang === 'uk' ? 'Цифрова печать' : 'Digital printing',
      description: currentLang === 'uk'
        ? 'Повнокольорова печать, фотографії, малі тиражі'
        : 'Full-color printing, photos, small runs'
    }
  ];

  const sizes = [
    { size: '150×80×210', description: currentLang === 'uk' ? 'Малий' : 'Small' },
    { size: '200×100×250', description: currentLang === 'uk' ? 'Середній' : 'Medium' },
    { size: '250×110×320', description: currentLang === 'uk' ? 'Великий' : 'Large' },
    { size: '320×130×410', description: currentLang === 'uk' ? 'XL' : 'XL' },
    { size: currentLang === 'uk' ? 'Індивідуальний розмір' : 'Custom size', description: currentLang === 'uk' ? 'За вашими вимогами' : 'According to your requirements' }
  ];

  return (
    <>
      <SEOHead 
        title={`${t('bags.kraftBagsWithPrint')} | ${t('contact.company')}`}
        description={currentLang === 'uk' 
          ? 'Крафт-пакети з друком логотипа від українського виробника. Екологічна упаковка з якісною печаттю. Мінімальний наклад 500 шт.'
          : 'Kraft bags with logo printing from Ukrainian manufacturer. Ecological packaging with quality printing. Minimum order 500 pcs.'}
        canonical={`https://paperbag.lovable.app/bags/kraft-bags-with-print`}
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
                {t('bags.kraftBagsWithPrint')}
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                {currentLang === 'uk' 
                  ? 'Екологічні крафт-пакети з друком вашого логотипа. Натуральна бумага, якісна печать та швидке виготовлення від українського виробника.'
                  : 'Ecological kraft bags with your logo printing. Natural paper, quality printing and fast production from Ukrainian manufacturer.'
                }
              </p>
            </div>

            {/* Hero Image */}
            <div className="mb-12">
              <img 
                src={kraftBagsImage} 
                alt={t('bags.kraftBagsWithPrint')}
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

            {/* Printing Options */}
            <Card className="mb-12">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Palette className="w-5 h-5" />
                  {currentLang === 'uk' ? 'Варіанти печаті' : 'Printing Options'}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {printingOptions.map((option, index) => (
                    <div key={index} className="border border-border rounded-lg p-4">
                      <h4 className="font-semibold mb-2">{option.type}</h4>
                      <p className="text-muted-foreground">{option.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Available Sizes */}
            <Card className="mb-12">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Package className="w-5 h-5" />
                  {currentLang === 'uk' ? 'Доступні розміри (мм)' : 'Available Sizes (mm)'}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {sizes.map((size, index) => (
                    <div key={index} className="border border-border rounded-lg p-4 text-center">
                      <div className="font-mono text-lg font-semibold mb-2">{size.size}</div>
                      <div className="text-sm text-muted-foreground">{size.description}</div>
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
                    ? 'Приклади виконаних робіт з друку на крафт-пакетах'
                    : 'Examples of completed kraft bag printing projects'
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

            {/* Advantages */}
            <div className="grid md:grid-cols-4 gap-6 mb-12">
              <Card className="text-center">
                <CardContent className="pt-6">
                  <Recycle className="w-8 h-8 mx-auto text-green-600 mb-3" />
                  <h4 className="font-semibold mb-2">{t('common.ecoFriendly')}</h4>
                  <p className="text-sm text-muted-foreground">
                    {currentLang === 'uk' ? 'Повністю розкладається' : 'Completely biodegradable'}
                  </p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <Package className="w-8 h-8 mx-auto text-blue-600 mb-3" />
                  <h4 className="font-semibold mb-2">{t('common.minOrder')}</h4>
                  <p className="text-sm text-muted-foreground">
                    {currentLang === 'uk' ? 'Від 500 шт.' : 'From 500 pcs'}
                  </p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <Palette className="w-8 h-8 mx-auto text-purple-600 mb-3" />
                  <h4 className="font-semibold mb-2">{t('common.customPrinting')}</h4>
                  <p className="text-sm text-muted-foreground">
                    {currentLang === 'uk' ? 'Ваш логотип' : 'Your logo'}
                  </p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <Truck className="w-8 h-8 mx-auto text-orange-600 mb-3" />
                  <h4 className="font-semibold mb-2">{t('common.nationwideDelivery')}</h4>
                  <p className="text-sm text-muted-foreground">
                    {currentLang === 'uk' ? 'По всій Україні' : 'Across Ukraine'}
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* CTA */}
            <Card className="text-center">
              <CardContent className="pt-6">
                <h3 className="text-2xl font-bold mb-4">
                  {currentLang === 'uk' ? 'Замовити крафт-пакети з логотипом' : 'Order Kraft Bags with Logo'}
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

export default KraftBagsWithPrintPage;