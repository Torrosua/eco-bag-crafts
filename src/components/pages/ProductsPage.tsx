import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Package } from 'lucide-react';
import { translations } from '@/lib/translations';
import paperBagsImg from '@/assets/paper-bags.jpg';
import laminatedBagsImg from '@/assets/laminated-bags.jpg';
import kraftBagsImg from '@/assets/kraft-bags.jpg';
import clutchBagsImg from '@/assets/clutch-bags.jpg';

interface ProductsPageProps {
  currentLang: 'uk' | 'en';
  onPageChange: (page: string) => void;
}

const ProductsPage = ({ currentLang, onPageChange }: ProductsPageProps) => {
  const t = translations[currentLang];

  const products = [
    {
      id: 'paper-bags',
      title: t.products.paperBags.title,
      description: t.products.paperBags.description,
      image: paperBagsImg,
      features: currentLang === 'uk' 
        ? ['Друк логотипу', 'Різні розміри', 'Екологічно чисті', 'Міцні ручки']
        : ['Logo printing', 'Various sizes', 'Eco-friendly', 'Strong handles']
    },
    {
      id: 'laminated-bags',
      title: t.products.laminatedBags.title,
      description: t.products.laminatedBags.description,
      image: laminatedBagsImg,
      features: currentLang === 'uk' 
        ? ['Водостійкі', 'Яскраві кольори', 'Глянцева поверхня', 'Довговічні']
        : ['Water-resistant', 'Bright colors', 'Glossy surface', 'Durable']
    },
    {
      id: 'kraft-bags',
      title: t.products.kraftBags.title,
      description: t.products.kraftBags.description,
      image: kraftBagsImg,
      features: currentLang === 'uk' 
        ? ['100% натуральний крафт', 'Кастомний друк', 'Біо-розкладний', 'Стильний дизайн']
        : ['100% natural kraft', 'Custom print', 'Biodegradable', 'Stylish design']
    },
    {
      id: 'clutch-bags',
      title: t.products.clutchBags.title,
      description: t.products.clutchBags.description,
      image: clutchBagsImg,
      features: currentLang === 'uk' 
        ? ['Преміум якість', 'Стрічкові ручки', 'Подарункова упаковка', 'Елегантний вигляд']
        : ['Premium quality', 'Ribbon handles', 'Gift packaging', 'Elegant appearance']
    }
  ];

  const accessories = [
    {
      title: t.products.paperTwine.title,
      description: t.products.paperTwine.description,
      icon: Package
    },
    {
      title: t.products.paperHandles.title,
      description: t.products.paperHandles.description,
      icon: Package
    },
    {
      title: t.products.ecoBoxes.title,
      description: t.products.ecoBoxes.description,
      icon: Package
    }
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
            {t.products.title}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            {t.products.subtitle}
          </p>
        </div>

        {/* Main Products */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-20">
          {products.map((product) => (
            <Card key={product.id} className="product-card overflow-hidden border-kraft-light">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-full object-cover transition-smooth hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
              </div>
              <CardHeader>
                <CardTitle className="text-2xl text-primary">{product.title}</CardTitle>
                <p className="text-muted-foreground">{product.description}</p>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <h4 className="font-semibold text-primary mb-3">
                    {currentLang === 'uk' ? 'Особливості:' : 'Features:'}
                  </h4>
                  <ul className="grid grid-cols-2 gap-2">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-2 h-2 bg-eco-green rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <Button 
                  className="w-full btn-kraft"
                  onClick={() => onPageChange('contact')}
                >
                  {currentLang === 'uk' ? 'Замовити' : 'Order Now'}
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Accessories */}
        <div className="bg-kraft-light/20 rounded-2xl p-8 mb-12">
          <h2 className="text-3xl font-bold text-primary text-center mb-8">
            {currentLang === 'uk' ? 'Комплектуючі та аксесуари' : 'Components and Accessories'}
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {accessories.map((accessory, index) => (
              <Card key={index} className="text-center p-6 border-kraft-medium/30">
                <CardContent className="p-0">
                  <div className="w-12 h-12 bg-gradient-eco rounded-full flex items-center justify-center mx-auto mb-4">
                    <accessory.icon className="w-6 h-6 text-eco-green" />
                  </div>
                  <h3 className="text-lg font-semibold text-primary mb-2">{accessory.title}</h3>
                  <p className="text-muted-foreground text-sm">{accessory.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-kraft rounded-2xl p-12">
          <h2 className="text-3xl font-bold text-primary mb-4">
            {currentLang === 'uk' 
              ? 'Потрібна індивідуальна пропозиція?' 
              : 'Need a Custom Quote?'}
          </h2>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            {currentLang === 'uk'
              ? 'Наші фахівці допоможуть підібрати оптимальне рішення для вашого бізнесу'
              : 'Our specialists will help you choose the optimal solution for your business'}
          </p>
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary-hover btn-kraft"
            onClick={() => onPageChange('contact')}
          >
            {currentLang === 'uk' ? 'Отримати консультацію' : 'Get Consultation'}
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;