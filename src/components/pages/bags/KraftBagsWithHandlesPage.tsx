import { Package, Ruler, Palette, CheckCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import SEOHead from '@/components/SEOHead';
import Breadcrumbs from '@/components/Breadcrumbs';
import kraftBags from '@/assets/kraft-bags.jpg';

interface KraftBagsWithHandlesPageProps {
  currentLang: 'uk' | 'en';
  onPageChange: (page: string) => void;
}

const KraftBagsWithHandlesPage = ({ onPageChange }: KraftBagsWithHandlesPageProps) => {
  const { t, i18n } = useTranslation();

  const breadcrumbItems = [
    { label: t('bags.title'), onClick: () => onPageChange('bags') },
    { label: t('bags.kraftBagsWithHandles') }
  ];

  // Four series with exact specifications
  const series = i18n.language === 'uk' ? [
    {
      name: t('products.kraftBagsWithHandles.series.standard'),
      description: 'Класичні крафт пакети з паперовими ручками',
      sizes: [
        '160x80x210 мм',
        '180x80x210 мм', 
        '220x110x280 мм',
        '250x110x320 мм',
        '320x130x420 мм',
        '350x150x460 мм',
        '400x150x500 мм'
      ],
      features: ['Паперові ручки', 'Крафт папір 120г/м²', 'Екологічний', 'Міцний']
    },
    {
      name: t('products.kraftBagsWithHandles.series.ecoUkraine'),
      description: 'Патріотична серія з символікою України',  
      sizes: [
        '160x80x210 мм',
        '180x80x210 мм',
        '220x110x280 мм', 
        '250x110x320 мм',
        '320x130x420 мм'
      ],
      features: ['Українська символіка', 'Жовто-блакитні кольори', 'Патріотичний дизайн', 'Крафт основа']
    },
    {
      name: t('products.kraftBagsWithHandles.series.businessBrown'),
      description: 'Бізнес серія коричневого кольору',
      sizes: [
        '180x80x210 мм',
        '220x110x280 мм',
        '250x110x320 мм', 
        '320x130x420 мм',
        '350x150x460 мм',
        '400x150x500 мм'
      ],
      features: ['Преміум якість', 'Коричневий колір', 'Бізнес стиль', 'Міцні ручки']
    },
    {
      name: t('products.kraftBagsWithHandles.series.businessWhite'),
      description: 'Бізнес серія білого кольору',
      sizes: [
        '180x80x210 мм',
        '220x110x280 мм',
        '250x110x320 мм',
        '320x130x420 мм', 
        '350x150x460 мм',
        '400x150x500 мм'
      ],
      features: ['Білий колір', 'Елегантний вигляд', 'Преміум матеріали', 'Ідеально для брендингу']
    }
  ] : [
    {
      name: t('products.kraftBagsWithHandles.series.standard'),
      description: 'Classic kraft bags with paper handles',
      sizes: [
        '160x80x210 mm',
        '180x80x210 mm', 
        '220x110x280 mm',
        '250x110x320 mm',
        '320x130x420 mm',
        '350x150x460 mm',
        '400x150x500 mm'
      ],
      features: ['Paper handles', 'Kraft paper 120g/m²', 'Eco-friendly', 'Durable']
    },
    {
      name: t('products.kraftBagsWithHandles.series.ecoUkraine'),
      description: 'Patriotic series with Ukrainian symbols',  
      sizes: [
        '160x80x210 mm',
        '180x80x210 mm',
        '220x110x280 mm', 
        '250x110x320 mm',
        '320x130x420 mm'
      ],
      features: ['Ukrainian symbols', 'Yellow-blue colors', 'Patriotic design', 'Kraft base']
    },
    {
      name: t('products.kraftBagsWithHandles.series.businessBrown'),
      description: 'Business series in brown color',
      sizes: [
        '180x80x210 mm',
        '220x110x280 mm',
        '250x110x320 mm', 
        '320x130x420 mm',
        '350x150x460 mm',
        '400x150x500 mm'
      ],
      features: ['Premium quality', 'Brown color', 'Business style', 'Strong handles']
    },
    {
      name: t('products.kraftBagsWithHandles.series.businessWhite'),
      description: 'Business series in white color',
      sizes: [
        '180x80x210 mm',
        '220x110x280 mm',
        '250x110x320 mm',
        '320x130x420 mm', 
        '350x150x460 mm',
        '400x150x500 mm'
      ],
      features: ['White color', 'Elegant appearance', 'Premium materials', 'Perfect for branding']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-brown-50">
      <SEOHead
        title={t('bags.kraftBagsWithHandles')}
        description="Kraft bags with handles in 4 series: Standard, Eco-Ukraine, Business Brown and White. Multiple sizes available. Eco-friendly paper bags with custom printing."
      />
      
      <div className="container mx-auto px-4 py-8">
        <Breadcrumbs items={breadcrumbItems} onNavigate={onPageChange} />
        
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
              <Package className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-4xl font-bold text-foreground mb-4">
              {t('bags.kraftBagsWithHandles')}
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t('products.kraftBagsWithHandles.description')}
            </p>
          </div>

          {/* Hero Image */}
          <div className="mb-12">
            <div className="relative rounded-lg overflow-hidden shadow-xl h-64 md:h-96">
              <img 
                src={kraftBags} 
                alt={t('bags.kraftBagsWithHandles')}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent"></div>
              <div className="absolute left-8 top-1/2 transform -translate-y-1/2 text-white max-w-md">
                <h2 className="text-3xl font-bold mb-4">
                  {i18n.language === 'uk' ? '4 серії крафт пакетів' : '4 Series of Kraft Bags'}
                </h2>
                <p className="text-lg opacity-90">
                  {i18n.language === 'uk' 
                    ? 'Від класичних до преміум варіантів'
                    : 'From classic to premium variants'
                  }
                </p>
              </div>
            </div>
          </div>

          {/* Series Grid */}
          <div className="grid lg:grid-cols-2 gap-6 mb-12">
            {series.map((serie, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl">{serie.name}</CardTitle>
                    <Badge variant="secondary">
                      {serie.sizes.length} {i18n.language === 'uk' ? 'розмірів' : 'sizes'}
                    </Badge>
                  </div>
                  <CardDescription>{serie.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Features */}
                  <div>
                    <h4 className="font-semibold mb-3 flex items-center gap-2">
                      <Palette className="w-4 h-4" />
                      {i18n.language === 'uk' ? 'Особливості' : 'Features'}
                    </h4>
                    <div className="grid grid-cols-2 gap-2">
                      {serie.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="w-3 h-3 text-green-500" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Sizes */}
                  <div>
                    <h4 className="font-semibold mb-3 flex items-center gap-2">
                      <Ruler className="w-4 h-4" />
                      {i18n.language === 'uk' ? 'Доступні розміри' : 'Available Sizes'}
                    </h4>
                    <div className="grid grid-cols-2 gap-1 text-sm text-muted-foreground">
                      {serie.sizes.map((size, sizeIndex) => (
                        <div key={sizeIndex} className="py-1">
                          {size}
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Info */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="font-semibold mb-2">
                  {i18n.language === 'uk' ? 'Екологічність' : 'Eco-Friendly'}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {i18n.language === 'uk' 
                    ? '100% перероблювані матеріали'
                    : '100% recyclable materials'
                  }
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Palette className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-semibold mb-2">
                  {t('common.customPrinting')}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {i18n.language === 'uk' 
                    ? 'Індивідуальний дизайн та логотип'
                    : 'Custom design and logo printing'
                  }
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Package className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="font-semibold mb-2">
                  {t('common.minOrder')}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {i18n.language === 'uk' 
                    ? 'Від 100 штук'
                    : 'From 100 pieces'
                  }
                </p>
              </CardContent>
            </Card>
          </div>

          {/* CTA */}
          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="text-center py-12">
              <h3 className="text-2xl font-bold mb-4">
                {t('hero.getQuote')}
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                {i18n.language === 'uk' 
                  ? 'Зв\'яжіться з нами для індивідуального розрахунку вартості'
                  : 'Contact us for a personalized cost calculation'
                }
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  onClick={() => onPageChange('contacts')}
                  size="lg"
                >
                  {t('hero.cta')}
                </Button>
                <Button 
                  onClick={() => onPageChange('prices')}
                  variant="outline"
                  size="lg"
                >
                  {t('prices.downloadPriceList')}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default KraftBagsWithHandlesPage;