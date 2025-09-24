import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Package, Leaf, Shield, Recycle } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import Breadcrumbs from "@/components/Breadcrumbs";

interface EcoCardboardBagsPageProps {
  currentLang: 'uk' | 'en';
  onPageChange: (page: string) => void;
}

const EcoCardboardBagsPage = ({ currentLang, onPageChange }: EcoCardboardBagsPageProps) => {
  const { t } = useTranslation();

  const breadcrumbItems = [
    { label: t('nav.home'), href: '#', onClick: () => onPageChange('home') },
    { label: t('nav.bags'), href: '#', onClick: () => onPageChange('bags') },
    { label: t('bags.ecoCardboardBags'), href: '#' }
  ];

  const features = [
    {
      icon: Leaf,
      title: currentLang === 'uk' ? 'Екологічність' : 'Eco-Friendly',
      description: currentLang === 'uk' 
        ? 'Вироблені з перероблених матеріалів, повністю біорозкладаються'
        : 'Made from recycled materials, completely biodegradable'
    },
    {
      icon: Shield,
      title: currentLang === 'uk' ? 'Міцність' : 'Durability',
      description: currentLang === 'uk'
        ? 'Гофрокартон забезпечує високу міцність та захист товарів'
        : 'Corrugated cardboard provides high strength and product protection'
    },
    {
      icon: Package,
      title: currentLang === 'uk' ? 'Універсальність' : 'Versatility',
      description: currentLang === 'uk'
        ? 'Підходить для різних товарів та сфер застосування'
        : 'Suitable for various products and applications'
    }
  ];

  const productTypes = [
    {
      title: currentLang === 'uk' ? 'Еко-пакети з картону' : 'Eco Cardboard Bags',
      description: currentLang === 'uk' 
        ? 'Класичні пакети з еко-картону з ручками'
        : 'Classic eco-cardboard bags with handles',
      specs: currentLang === 'uk' ? 'Картон 250-350 г/м²' : 'Cardboard 250-350 g/m²'
    },
    {
      title: currentLang === 'uk' ? 'Картонні коробки' : 'Cardboard Boxes',
      description: currentLang === 'uk'
        ? 'Складальні коробки для транспортування та зберігання'
        : 'Folding boxes for transportation and storage',
      specs: currentLang === 'uk' ? 'Гофрокартон 3-5 мм' : 'Corrugated cardboard 3-5 mm'
    },
    {
      title: currentLang === 'uk' ? 'Подарункові коробки' : 'Gift Boxes',
      description: currentLang === 'uk'
        ? 'Преміальні коробки з друком для подарунків'
        : 'Premium printed boxes for gifts',
      specs: currentLang === 'uk' ? 'Дизайнерський картон' : 'Designer cardboard'
    },
    {
      title: currentLang === 'uk' ? 'Транспортні коробки' : 'Shipping Boxes',
      description: currentLang === 'uk'
        ? 'Міцні коробки для безпечної доставки товарів'
        : 'Strong boxes for safe product delivery',
      specs: currentLang === 'uk' ? 'Посилений гофрокартон' : 'Reinforced corrugated cardboard'
    }
  ];

  const advantages = [
    {
      icon: Recycle,
      title: currentLang === 'uk' ? '100% переробка' : '100% Recyclable',
      description: currentLang === 'uk' ? 'Повністю підлягає переробці' : 'Completely recyclable'
    },
    {
      icon: Leaf,
      title: currentLang === 'uk' ? 'Біорозкладання' : 'Biodegradable',
      description: currentLang === 'uk' ? 'Розкладається за 2-4 місяці' : 'Decomposes in 2-4 months'
    },
    {
      icon: Shield,
      title: currentLang === 'uk' ? 'Захист товарів' : 'Product Protection',
      description: currentLang === 'uk' ? 'Надійний захист від пошкоджень' : 'Reliable protection from damage'
    },
    {
      icon: Package,
      title: currentLang === 'uk' ? 'Персоналізація' : 'Personalization',
      description: currentLang === 'uk' ? 'Друк логотипу та дизайну' : 'Logo and design printing'
    }
  ];

  return (
    <>
      <SEOHead 
        title={`${t('bags.ecoCardboardBags')} | ${t('contact.company')}`}
        description={currentLang === 'uk' 
          ? 'Еко-картонні пакети та коробки з переробних матеріалів. Екологічна упаковка з друком логотипу від українського виробника.'
          : 'Eco cardboard bags and boxes from recycled materials. Ecological packaging with logo printing from Ukrainian manufacturer.'}
        canonical={`https://paperbag.lovable.app/bags/eco-cardboard-bags`}
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
                {t('bags.ecoCardboardBags')}
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                {currentLang === 'uk' 
                  ? 'Екологічні картонні пакети та коробки з переробних матеріалів. Міцна, безпечна та повністю біорозкладана упаковка для вашого бізнесу.'
                  : 'Ecological cardboard bags and boxes from recycled materials. Strong, safe and completely biodegradable packaging for your business.'
                }
              </p>
            </div>

            {/* Features */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {features.map((feature, index) => (
                <Card key={index} className="text-center">
                  <CardHeader>
                    <feature.icon className="w-12 h-12 mx-auto text-green-600 mb-4" />
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Product Types */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-center mb-8">
                {currentLang === 'uk' ? 'Типи продукції' : 'Product Types'}
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {productTypes.map((product, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle className="text-xl">{product.title}</CardTitle>
                      <CardDescription>{product.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center gap-2">
                        <Package className="w-4 h-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">{product.specs}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Advantages */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-center mb-8">
                {currentLang === 'uk' ? 'Переваги еко-упаковки' : 'Eco Packaging Advantages'}
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {advantages.map((advantage, index) => (
                  <Card key={index} className="text-center">
                    <CardContent className="pt-6">
                      <advantage.icon className="w-10 h-10 mx-auto text-green-600 mb-4" />
                      <h4 className="font-semibold mb-2">{advantage.title}</h4>
                      <p className="text-sm text-muted-foreground">{advantage.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
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
                  <div>
                    <h4 className="font-semibold mb-3">
                      {currentLang === 'uk' ? 'Матеріали' : 'Materials'}
                    </h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• {currentLang === 'uk' ? 'Еко-картон 250-400 г/м²' : 'Eco cardboard 250-400 g/m²'}</li>
                      <li>• {currentLang === 'uk' ? 'Гофрокартон 3-7 мм' : 'Corrugated cardboard 3-7 mm'}</li>
                      <li>• {currentLang === 'uk' ? 'Дизайнерський картон' : 'Designer cardboard'}</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">
                      {currentLang === 'uk' ? 'Обробка' : 'Finishing'}
                    </h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• {currentLang === 'uk' ? 'Офсетна печать' : 'Offset printing'}</li>
                      <li>• {currentLang === 'uk' ? 'УФ-лакування' : 'UV coating'}</li>
                      <li>• {currentLang === 'uk' ? 'Тиснення фольгою' : 'Foil stamping'}</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Our Works */}
            <Card className="mb-12">
              <CardHeader>
                <CardTitle>{t('common.ourWorks')}</CardTitle>
                <CardDescription>
                  {currentLang === 'uk'
                    ? 'Приклади виконаних робіт з еко-картонної упаковки'
                    : 'Examples of completed eco cardboard packaging projects'
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
                  {currentLang === 'uk' ? 'Замовити еко-упаковку' : 'Order Eco Packaging'}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {currentLang === 'uk'
                    ? 'Оберіть екологічну упаковку для вашого бізнесу. Зв\'яжіться з нами для консультації'
                    : 'Choose ecological packaging for your business. Contact us for consultation'
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

export default EcoCardboardBagsPage;