import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link, Package, Shield, Star } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import Breadcrumbs from "@/components/Breadcrumbs";

interface HandlesWithTipsPageProps {
  currentLang: 'uk' | 'en';
  onPageChange: (page: string) => void;
}

const HandlesWithTipsPage = ({ currentLang, onPageChange }: HandlesWithTipsPageProps) => {
  const { t } = useTranslation();

  const breadcrumbItems = [
    { label: t('nav.home'), href: '#', onClick: () => onPageChange('home') },
    { label: t('nav.components'), href: '#', onClick: () => onPageChange('components') },
    { label: t('components.handlesWithTips'), href: '#' }
  ];

  const features = [
    {
      icon: Shield,
      title: currentLang === 'uk' ? 'Міцність' : 'Durability',
      description: currentLang === 'uk' 
        ? 'ПВХ наконечники забезпечують додаткову міцність'
        : 'PVC tips provide additional strength'
    },
    {
      icon: Star,
      title: currentLang === 'uk' ? 'Преміальний вигляд' : 'Premium Look',
      description: currentLang === 'uk'
        ? 'Елегантний дизайн для люксових пакетів'
        : 'Elegant design for luxury bags'
    },
    {
      icon: Package,
      title: currentLang === 'uk' ? 'Зручність' : 'Comfort',
      description: currentLang === 'uk'
        ? 'Комфортне носіння навіть важких пакетів'
        : 'Comfortable carrying even of heavy bags'
    }
  ];

  const handleTypes = [
    {
      title: currentLang === 'uk' ? 'Плетені ручки з ПВХ наконечниками' : 'Braided handles with PVC tips',
      description: currentLang === 'uk' 
        ? 'Класичні плетені ручки з міцними пластиковими наконечниками'
        : 'Classic braided handles with strong plastic tips',
      specs: currentLang === 'uk' ? 'Довжина: 30-40 см' : 'Length: 30-40 cm'
    },
    {
      title: currentLang === 'uk' ? 'Атласні ручки з наконечниками' : 'Satin handles with tips',
      description: currentLang === 'uk'
        ? 'Атласні стрічки з елегантними наконечниками'
        : 'Satin ribbons with elegant tips',
      specs: currentLang === 'uk' ? 'Ширина: 15-25 мм' : 'Width: 15-25 mm'
    },
    {
      title: currentLang === 'uk' ? 'Бавовняні ручки з ПВХ' : 'Cotton handles with PVC',
      description: currentLang === 'uk'
        ? 'Натуральні бавовняні ручки з пластиковими наконечниками'
        : 'Natural cotton handles with plastic tips',
      specs: currentLang === 'uk' ? 'Діаметр: 8-12 мм' : 'Diameter: 8-12 mm'
    }
  ];

  const colors = [
    { name: currentLang === 'uk' ? 'Чорний' : 'Black', textile: '#000000', tip: '#2C2C2C' },
    { name: currentLang === 'uk' ? 'Білий' : 'White', textile: '#FFFFFF', tip: '#F5F5F5' },
    { name: currentLang === 'uk' ? 'Червоний' : 'Red', textile: '#DC2626', tip: '#B91C1C' },
    { name: currentLang === 'uk' ? 'Синій' : 'Blue', textile: '#2563EB', tip: '#1D4ED8' },
    { name: currentLang === 'uk' ? 'Зелений' : 'Green', textile: '#16A34A', tip: '#15803D' },
    { name: currentLang === 'uk' ? 'Золотий' : 'Gold', textile: '#CA8A04', tip: '#A16207' }
  ];

  const specifications = [
    {
      title: currentLang === 'uk' ? 'Матеріал ручки' : 'Handle material',
      value: currentLang === 'uk' ? 'Текстиль, бавовна, атлас' : 'Textile, cotton, satin'
    },
    {
      title: currentLang === 'uk' ? 'Матеріал наконечників' : 'Tip material',
      value: currentLang === 'uk' ? 'ПВХ високої міцності' : 'High-strength PVC'
    },
    {
      title: currentLang === 'uk' ? 'Навантаження' : 'Load capacity',
      value: currentLang === 'uk' ? 'До 15 кг' : 'Up to 15 kg'
    },
    {
      title: currentLang === 'uk' ? 'Мінімальний наклад' : 'Minimum order',
      value: currentLang === 'uk' ? 'Від 500 шт.' : 'From 500 pcs'
    }
  ];

  return (
    <>
      <SEOHead 
        title={`${t('components.handlesWithTips')} | ${t('contact.company')}`}
        description={currentLang === 'uk' 
          ? 'Текстильні ручки з ПВХ наконечниками для преміальних пакетів. Міцні, стильні аксесуари від українського виробника.'
          : 'Textile handles with PVC tips for premium bags. Strong, stylish accessories from Ukrainian manufacturer.'}
        canonical={`https://paperbag.lovable.app/components/handles-with-tips`}
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
                {t('components.handlesWithTips')}
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                {currentLang === 'uk' 
                  ? 'Преміальні текстильні ручки з ПВХ наконечниками для люксових пакетів. Поєднання міцності, комфорту та елегантного дизайну.'
                  : 'Premium textile handles with PVC tips for luxury bags. Combination of strength, comfort and elegant design.'
                }
              </p>
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

            {/* Handle Types */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-center mb-8">
                {currentLang === 'uk' ? 'Типи ручок' : 'Handle Types'}
              </h2>
              <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-6">
                {handleTypes.map((type, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <Link className="w-8 h-8 text-primary mb-2" />
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
                  <Package className="w-5 h-5" />
                  {currentLang === 'uk' ? 'Доступні кольори' : 'Available Colors'}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {colors.map((color, index) => (
                    <div key={index} className="border border-border rounded-lg p-4">
                      <div className="flex items-center justify-between mb-3">
                        <span className="font-medium">{color.name}</span>
                        <div className="flex gap-2">
                          <div 
                            className="w-4 h-4 rounded-full border"
                            style={{ backgroundColor: color.textile }}
                            title={currentLang === 'uk' ? 'Текстиль' : 'Textile'}
                          />
                          <div 
                            className="w-4 h-4 rounded-full border"
                            style={{ backgroundColor: color.tip }}
                            title={currentLang === 'uk' ? 'Наконечник' : 'Tip'}
                          />
                        </div>
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {currentLang === 'uk' ? 'Текстиль + ПВХ наконечник' : 'Textile + PVC tip'}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

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

            {/* Advantages */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-center mb-8">
                {currentLang === 'uk' ? 'Переваги ручок з наконечниками' : 'Advantages of Handles with Tips'}
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card className="text-center">
                  <CardContent className="pt-6">
                    <Shield className="w-10 h-10 mx-auto text-blue-600 mb-4" />
                    <h4 className="font-semibold mb-2">
                      {currentLang === 'uk' ? 'Підвищена міцність' : 'Enhanced strength'}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {currentLang === 'uk' ? 'ПВХ наконечники в 3 рази міцніші' : 'PVC tips are 3 times stronger'}
                    </p>
                  </CardContent>
                </Card>
                <Card className="text-center">
                  <CardContent className="pt-6">
                    <Star className="w-10 h-10 mx-auto text-yellow-600 mb-4" />
                    <h4 className="font-semibold mb-2">
                      {currentLang === 'uk' ? 'Преміальний вигляд' : 'Premium appearance'}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {currentLang === 'uk' ? 'Підходить для люксових брендів' : 'Suitable for luxury brands'}
                    </p>
                  </CardContent>
                </Card>
                <Card className="text-center">
                  <CardContent className="pt-6">
                    <Link className="w-10 h-10 mx-auto text-green-600 mb-4" />
                    <h4 className="font-semibold mb-2">
                      {currentLang === 'uk' ? 'Довговічність' : 'Longevity'}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {currentLang === 'uk' ? 'Витримують багаторазове використання' : 'Withstand repeated use'}
                    </p>
                  </CardContent>
                </Card>
                <Card className="text-center">
                  <CardContent className="pt-6">
                    <Package className="w-10 h-10 mx-auto text-purple-600 mb-4" />
                    <h4 className="font-semibold mb-2">
                      {currentLang === 'uk' ? 'Комфорт' : 'Comfort'}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {currentLang === 'uk' ? 'Не натирають руки при носінні' : 'Don\'t rub hands when carrying'}
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Our Works */}
            <Card className="mb-12">
              <CardHeader>
                <CardTitle>{t('common.ourWorks')}</CardTitle>
                <CardDescription>
                  {currentLang === 'uk'
                    ? 'Приклади виконаних робіт з виготовлення ручок з наконечниками'
                    : 'Examples of completed handles with tips production projects'
                  }
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[1, 2, 3, 4, 5, 6].map((item) => (
                    <div key={item} className="aspect-square bg-muted rounded-lg flex items-center justify-center">
                      <Link className="w-12 h-12 text-muted-foreground" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* CTA */}
            <Card className="text-center">
              <CardContent className="pt-6">
                <h3 className="text-2xl font-bold mb-4">
                  {currentLang === 'uk' ? 'Замовити ручки з наконечниками' : 'Order Handles with Tips'}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {currentLang === 'uk'
                    ? 'Зв\'яжіться з нами для підбору преміальних ручок для ваших пакетів'
                    : 'Contact us for premium handle selection for your bags'
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

export default HandlesWithTipsPage;