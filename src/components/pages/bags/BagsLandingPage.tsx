import { Package, ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import SEOHead from '@/components/SEOHead';
import Breadcrumbs from '@/components/Breadcrumbs';
import heroBags from '@/assets/hero-bags.jpg';
import paperBags from '@/assets/paper-bags.jpg';
import laminatedBags from '@/assets/laminated-bags.jpg';
import kraftBags from '@/assets/kraft-bags.jpg';
import clutchBags from '@/assets/clutch-bags.jpg';

interface BagsLandingPageProps {
  currentLang: 'uk' | 'en';
  onPageChange: (page: string) => void;
}

const BagsLandingPage = ({ onPageChange }: BagsLandingPageProps) => {
  const { t } = useTranslation();

  const breadcrumbItems = [
    { label: t('bags.title') }
  ];

  const bagCategories = [
    {
      id: 'paper-bags',
      title: t('bags.paperBags'),
      description: t('products.paperBags.description'),
      image: paperBags,
      route: 'bags/paper-bags'
    },
    {
      id: 'laminated-bags',
      title: t('bags.laminatedBags'),
      description: t('products.laminatedBags.description'),
      image: laminatedBags,
      route: 'bags/laminated-bags'
    },
    {
      id: 'kraft-bags-with-print',
      title: t('bags.kraftBagsWithPrint'),
      description: t('products.kraftBags.description'),
      image: kraftBags,
      route: 'bags/kraft-bags-with-print'
    },
    {
      id: 'kraft-bags-with-handles',
      title: t('bags.kraftBagsWithHandles'),
      description: t('products.kraftBagsWithHandles.description'),
      image: kraftBags,
      route: 'bags/kraft-bags-with-handles'
    },
    {
      id: 'clutch-bags',
      title: t('bags.clutchBags'),
      description: t('products.clutchBags.description'),
      image: clutchBags,
      route: 'bags/clutch-bags'
    },
    {
      id: 'eco-cardboard-bags',
      title: t('bags.ecoCardboardBags'),
      description: t('products.ecoBoxes.description'),
      image: heroBags,
      route: 'bags/eco-cardboard-bags'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-brown-50">
      <SEOHead
        title={t('bags.title')}
        description="Complete range of paper bags, laminated bags, kraft bags and clutch bags. Custom printing, eco-friendly materials, nationwide delivery in Ukraine."
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
              {t('bags.title')}
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t('products.subtitle')}
            </p>
          </div>

          {/* Hero Image */}
          <div className="mb-12">
            <div className="relative rounded-lg overflow-hidden shadow-xl h-64 md:h-96">
              <img 
                src={heroBags} 
                alt={t('bags.title')}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    {t('hero.title')}
                  </h2>
                  <p className="text-lg md:text-xl opacity-90">
                    {t('hero.subtitle')}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Categories Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {bagCategories.map((category) => (
              <Card key={category.id} className="group hover:shadow-lg transition-shadow">
                <div className="aspect-video relative overflow-hidden rounded-t-lg">
                  <img 
                    src={category.image} 
                    alt={category.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">{category.title}</CardTitle>
                  <CardDescription>{category.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button 
                    onClick={() => onPageChange(category.route)}
                    variant="outline" 
                    className="w-full group-hover:bg-primary group-hover:text-white transition-colors"
                  >
                    {t('news.readMore')}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="text-center py-12">
              <h3 className="text-2xl font-bold mb-4">
                {t('hero.getQuote')}
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                {t('contact.subtitle')}
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

export default BagsLandingPage;