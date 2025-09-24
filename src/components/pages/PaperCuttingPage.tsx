import { useTranslation } from 'react-i18next';
import SEOHead from '@/components/SEOHead';
import Breadcrumbs from '@/components/Breadcrumbs';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Scissors, Package, Truck, CheckCircle } from 'lucide-react';

interface PaperCuttingPageProps {
  currentLang: 'uk' | 'en';
  onPageChange: (page: string) => void;
}

const PaperCuttingPage = ({ currentLang, onPageChange }: PaperCuttingPageProps) => {
  const { t } = useTranslation();
  
  const breadcrumbItems = [
    { label: t('nav.home'), href: '#', onClick: () => onPageChange('home') },
    { label: t('nav.products'), href: '#', onClick: () => onPageChange('products') },
    { label: t('products.paperCutting.title'), href: '#' }
  ];

  const specifications = currentLang === 'uk' ? [
    { label: 'Типи паперу', value: 'Крафт, офсетний, кольоровий' },
    { label: 'Товщина', value: '60-300 г/м²' },
    { label: 'Формати', value: 'A4, A3, A2, A1 та нестандартні' },
    { label: 'Мінімальне замовлення', value: 'від 100 аркушів' }
  ] : [
    { label: 'Paper Types', value: 'Kraft, offset, colored' },
    { label: 'Thickness', value: '60-300 g/m²' },
    { label: 'Formats', value: 'A4, A3, A2, A1 and custom' },
    { label: 'Minimum Order', value: 'from 100 sheets' }
  ];

  const features = currentLang === 'uk' ? [
    {
      icon: <Scissors className="w-6 h-6" />,
      title: 'Точна різка',
      description: 'Високоточне обладнання для ідеальних розрізів'
    },
    {
      icon: <Package className="w-6 h-6" />,
      title: 'Будь-які формати',
      description: 'Стандартні та нестандартні розміри під замовлення'
    },
    {
      icon: <Truck className="w-6 h-6" />,
      title: 'Швидка доставка',
      description: 'Оперативне виконання замовлень'
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: 'Контроль якості',
      description: 'Перевірка кожної партії перед відправкою'
    }
  ] : [
    {
      icon: <Scissors className="w-6 h-6" />,
      title: 'Precise Cutting',
      description: 'High-precision equipment for perfect cuts'
    },
    {
      icon: <Package className="w-6 h-6" />,
      title: 'Any Formats',
      description: 'Standard and custom sizes to order'
    },
    {
      icon: <Truck className="w-6 h-6" />,
      title: 'Fast Delivery',
      description: 'Quick order fulfillment'
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: 'Quality Control',
      description: 'Checking each batch before shipment'
    }
  ];

  return (
    <div className="min-h-screen">
      <SEOHead 
        title={currentLang === 'uk' ? 'Нарізка паперу під замовлення | PaperBag' : 'Paper Cutting Services | PaperBag'}
        description={currentLang === 'uk' ? 'Професійна нарізка паперу різних форматів. Точна різка крафт, офсетного та кольорового паперу під замовлення.' : 'Professional paper cutting services in various formats. Precise cutting of kraft, offset and colored paper to order.'}
      />
      
      <div className="container mx-auto px-4 py-8">
        <Breadcrumbs items={breadcrumbItems} />
        
        {/* Hero Section */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <Badge variant="secondary" className="mb-4">
              {currentLang === 'uk' ? 'Нова послуга' : 'New Service'}
            </Badge>
            <h1 className="text-4xl font-bold mb-4">
              {t('products.paperCutting.title')}
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t('products.paperCutting.description')}
            </p>
          </div>
        </div>

        {/* Specifications */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-center">
            {currentLang === 'uk' ? 'Технічні характеристики' : 'Specifications'}
          </h2>
          <Card>
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {specifications.map((spec, index) => (
                  <div key={index} className="flex justify-between items-center p-4 bg-muted/50 rounded-lg">
                    <span className="font-medium">{spec.label}:</span>
                    <span className="text-muted-foreground">{spec.value}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Features */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-center">
            {currentLang === 'uk' ? 'Переваги' : 'Features'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Coming Soon Section */}
        <div className="mb-12">
          <Card className="bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">
                {currentLang === 'uk' ? 'Розділ в розробці' : 'Section Under Development'}
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                {currentLang === 'uk' 
                  ? 'Ми працюємо над наповненням цього розділу детальною інформацією про наші послуги з нарізки паперу. Незабаром тут з\'явиться повний каталог послуг, приклади робіт та детальні технічні характеристики.'
                  : 'We are working on filling this section with detailed information about our paper cutting services. Soon there will be a complete catalog of services, work examples and detailed technical specifications.'
                }
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button onClick={() => onPageChange('contacts')} size="lg">
                  {currentLang === 'uk' ? 'Зв\'язатися з нами' : 'Contact Us'}
                </Button>
                <Button variant="outline" onClick={() => onPageChange('prices')} size="lg">
                  {currentLang === 'uk' ? 'Дивитися ціни' : 'View Prices'}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Card className="bg-primary text-primary-foreground">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">
                {currentLang === 'uk' ? 'Потрібна нарізка паперу?' : 'Need Paper Cutting Services?'}
              </h3>
              <p className="mb-6 opacity-90">
                {currentLang === 'uk' 
                  ? 'Зв\'яжіться з нами для обговорення деталей замовлення'
                  : 'Contact us to discuss your order details'
                }
              </p>
              <Button 
                variant="secondary" 
                size="lg"
                onClick={() => onPageChange('contacts')}
              >
                {currentLang === 'uk' ? 'Замовити послугу' : 'Order Service'}
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default PaperCuttingPage;