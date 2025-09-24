import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Grip, Package, Palette, Ruler } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import Breadcrumbs from "@/components/Breadcrumbs";

interface PaperHandlesPageProps {
  currentLang: 'uk' | 'en';
  onPageChange: (page: string) => void;
}

const PaperHandlesPage = ({ currentLang, onPageChange }: PaperHandlesPageProps) => {
  const { t } = useTranslation();

  const breadcrumbItems = [
    { label: t('nav.home'), href: '#', onClick: () => onPageChange('home') },
    { label: t('nav.components'), href: '#', onClick: () => onPageChange('components') },
    { label: t('components.paperHandles'), href: '#' }
  ];

  const handleTypes = [
    {
      title: currentLang === 'uk' ? 'Плоскі ручки' : 'Flat Handles',
      description: currentLang === 'uk' 
        ? 'Класичні плоскі ручки з високоміцної бумаги'
        : 'Classic flat handles made of high-strength paper',
      specs: currentLang === 'uk' ? 'Ширина: 15-25 мм' : 'Width: 15-25 mm'
    },
    {
      title: currentLang === 'uk' ? 'Кручені ручки' : 'Twisted Handles',
      description: currentLang === 'uk'
        ? 'Міцні кручені ручки для важких пакетів'
        : 'Strong twisted handles for heavy bags',
      specs: currentLang === 'uk' ? 'Діаметр: 4-8 мм' : 'Diameter: 4-8 mm'
    },
    {
      title: currentLang === 'uk' ? 'Стрічкові ручки' : 'Ribbon Handles',
      description: currentLang === 'uk'
        ? 'Широкі стрічкові ручки для комфортного носіння'
        : 'Wide ribbon handles for comfortable carrying',
      specs: currentLang === 'uk' ? 'Ширина: 30-50 мм' : 'Width: 30-50 mm'
    }
  ];

  const colors = [
    { name: currentLang === 'uk' ? 'Білий' : 'White', code: '#FFFFFF' },
    { name: currentLang === 'uk' ? 'Чорний' : 'Black', code: '#000000' },
    { name: currentLang === 'uk' ? 'Червоний' : 'Red', code: '#DC2626' },
    { name: currentLang === 'uk' ? 'Синій' : 'Blue', code: '#2563EB' },
    { name: currentLang === 'uk' ? 'Зелений' : 'Green', code: '#16A34A' },
    { name: currentLang === 'uk' ? 'Жовтий' : 'Yellow', code: '#CA8A04' },
    { name: currentLang === 'uk' ? 'Коричневий' : 'Brown', code: '#A16207' },
    { name: currentLang === 'uk' ? 'Натуральний крафт' : 'Natural kraft', code: '#D2B48C' }
  ];

  const specifications = [
    {
      title: currentLang === 'uk' ? 'Матеріал' : 'Material',
      value: currentLang === 'uk' ? 'Бумага 120-150 г/м²' : 'Paper 120-150 g/m²'
    },
    {
      title: currentLang === 'uk' ? 'Довжина' : 'Length',
      value: currentLang === 'uk' ? 'Стандартно 35 см' : 'Standard 35 cm'
    },
    {
      title: currentLang === 'uk' ? 'Навантаження' : 'Load capacity',
      value: currentLang === 'uk' ? 'До 8 кг' : 'Up to 8 kg'
    },
    {
      title: currentLang === 'uk' ? 'Мінімальний наклад' : 'Minimum order',
      value: currentLang === 'uk' ? 'Від 1000 шт.' : 'From 1000 pcs'
    }
  ];

  return (
    <>
      <SEOHead 
        title={`${t('components.paperHandles')} | ${t('contact.company')}`}
        description={currentLang === 'uk' 
          ? 'Паперові ручки для пакетів різних типів та кольорів. Міцні, екологічні аксесуари від українського виробника.'
          : 'Paper handles for bags of various types and colors. Strong, eco-friendly accessories from Ukrainian manufacturer.'}
        canonical={`https://paperbag.lovable.app/components/paper-handles`}
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
                {t('components.paperHandles')}
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                {currentLang === 'uk' 
                  ? 'Високоякісні паперові ручки для пакетів різних типів. Міцні, зручні та екологічні аксесуари в широкій кольоровій гамі.'
                  : 'High-quality paper handles for bags of various types. Strong, comfortable and eco-friendly accessories in wide color range.'
                }
              </p>
            </div>

            {/* Handle Types */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-center mb-8">
                {currentLang === 'uk' ? 'Типи ручок' : 'Handle Types'}
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {handleTypes.map((type, index) => (
                  <Card key={index} className="text-center">
                    <CardHeader>
                      <Grip className="w-12 h-12 mx-auto text-primary mb-4" />
                      <CardTitle className="text-lg">{type.title}</CardTitle>
                      <CardDescription>{type.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Badge variant="outline">{type.specs}</Badge>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Available Colors */}
            <Card className="mb-12">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Palette className="w-5 h-5" />
                  {currentLang === 'uk' ? 'Доступні кольори' : 'Available Colors'}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {colors.map((color, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 border border-border rounded-lg">
                      <div 
                        className="w-6 h-6 rounded-full border-2 border-gray-300"
                        style={{ backgroundColor: color.code }}
                      />
                      <span className="text-sm font-medium">{color.name}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Specifications */}
            <Card className="mb-12">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Ruler className="w-5 h-5" />
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

            {/* Advantages */}
            <div className="grid md:grid-cols-4 gap-6 mb-12">
              <Card className="text-center">
                <CardContent className="pt-6">
                  <Grip className="w-8 h-8 mx-auto text-primary mb-3" />
                  <h4 className="font-semibold mb-2">
                    {currentLang === 'uk' ? 'Міцність' : 'Strength'}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {currentLang === 'uk' ? 'Витримують до 8 кг' : 'Withstand up to 8 kg'}
                  </p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <Package className="w-8 h-8 mx-auto text-green-600 mb-3" />
                  <h4 className="font-semibold mb-2">
                    {currentLang === 'uk' ? 'Екологічність' : 'Eco-friendly'}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {currentLang === 'uk' ? '100% переробка' : '100% recyclable'}
                  </p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <Palette className="w-8 h-8 mx-auto text-purple-600 mb-3" />
                  <h4 className="font-semibold mb-2">
                    {currentLang === 'uk' ? 'Різнокольорові' : 'Various colors'}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {currentLang === 'uk' ? '8+ кольорів' : '8+ colors'}
                  </p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <Ruler className="w-8 h-8 mx-auto text-blue-600 mb-3" />
                  <h4 className="font-semibold mb-2">
                    {currentLang === 'uk' ? 'Індивідуальні' : 'Custom sizes'}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {currentLang === 'uk' ? 'За вашими розмірами' : 'According to your sizes'}
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Our Works */}
            <Card className="mb-12">
              <CardHeader>
                <CardTitle>{t('common.ourWorks')}</CardTitle>
                <CardDescription>
                  {currentLang === 'uk'
                    ? 'Приклади виконаних робіт з виготовлення паперових ручок'
                    : 'Examples of completed paper handle production projects'
                  }
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[1, 2, 3, 4, 5, 6].map((item) => (
                    <div key={item} className="aspect-square bg-muted rounded-lg flex items-center justify-center">
                      <Grip className="w-12 h-12 text-muted-foreground" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* CTA */}
            <Card className="text-center">
              <CardContent className="pt-6">
                <h3 className="text-2xl font-bold mb-4">
                  {currentLang === 'uk' ? 'Замовити паперові ручки' : 'Order Paper Handles'}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {currentLang === 'uk'
                    ? 'Зв\'яжіться з нами для підбору ручок та розрахунку вартості'
                    : 'Contact us for handle selection and cost calculation'
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

export default PaperHandlesPage;