import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Package, Scissors, FileText } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import paperBagsImg from '@/assets/paper-bags.jpg';
import { Briefcase } from 'lucide-react';

interface ProductsPageProps {
  currentLang: 'uk' | 'en';
  onPageChange: (page: string) => void;
}

const ProductsPage = ({ currentLang, onPageChange }: ProductsPageProps) => {
  const { t } = useTranslation();

  // Main product categories based on original site structure
  const productCategories = [
    {
      id: 'bags',
      title: t('products.bags.title'),
      description: currentLang === 'uk' 
        ? 'Повний асортимент паперових пакетів: звичайні, ламіновані, крафт, клатч та еко-картонні'
        : 'Complete range of paper bags: regular, laminated, kraft, clutch and eco-cardboard',
      image: paperBagsImg,
      icon: <Package className="w-8 h-8" />,
      items: currentLang === 'uk' ? [
        'Паперові пакети під замовлення',
        'Ламіновані пакети', 
        'Крафт пакети з друком',
        'Крафт пакети з ручками',
        'Пакети «клатч»',
        'Еко картонні пакети та коробки'
      ] : [
        'Custom paper bags',
        'Laminated bags',
        'Kraft bags with print', 
        'Kraft bags with handles',
        'Clutch bags',
        'Eco cardboard bags and boxes'
      ]
    },
    {
      id: 'components',
      title: t('products.components.title'),
      description: currentLang === 'uk'
        ? 'Комплектуючі для виробництва пакетів: ручки, люверси та інші аксесуари'
        : 'Components for bag production: handles, eyelets and other accessories',
      image: paperBagsImg, // Will replace with proper image
      icon: <Briefcase className="w-8 h-8" />,
      items: currentLang === 'uk' ? [
        'Паперові ручки',
        'Ручки з наконечниками',
        'Люверси для пакетів'
      ] : [
        'Paper handles',
        'Handles with tips',
        'Eyelets for bags'
      ]
    },
    {
      id: 'paper-twine',
      title: t('products.paperTwine.title'),
      description: currentLang === 'uk'
        ? 'Натуральний паперовий шпагат різних кольорів та діаметрів для упаковки та рукоділля'
        : 'Natural paper twine in various colors and diameters for packaging and crafts',
      image: paperBagsImg, // Will replace with proper image
      icon: <Package className="w-8 h-8" />,
      items: currentLang === 'uk' ? [
        'Діаметр: 1.8мм, 2.8мм, 3.8мм, 5.5мм',
        'Кольори: білий, бурий, чорний, кольоровий',
        'Упаковка від 1кг до 18кг',
        'Намотка будь-якої довжини'
      ] : [
        'Diameter: 1.8mm, 2.8mm, 3.8mm, 5.5mm',
        'Colors: white, brown, black, colored',
        'Packaging from 1kg to 18kg',
        'Any length winding'
      ]
    },
    {
      id: 'paper-cutting',
      title: t('products.paperCutting.title'),
      description: t('products.paperCutting.description'),
      image: paperBagsImg, // Will replace with proper image  
      icon: <Scissors className="w-8 h-8" />,
      items: currentLang === 'uk' ? [
        'Крафт папір',
        'Офсетний папір',
        'Кольоровий папір',
        'Товщина 60-300 г/м²'
      ] : [
        'Kraft paper',
        'Offset paper', 
        'Colored paper',
        'Thickness 60-300 g/m²'
      ],
      isNew: true
    }
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
            {t('products.title')}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            {currentLang === 'uk' 
              ? 'Повний каталог нашої продукції для всіх ваших потреб в упаковці'
              : 'Complete catalog of our products for all your packaging needs'
            }
          </p>
        </div>

        {/* Product Categories */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {productCategories.map((category) => (
            <Card key={category.id} className="product-card overflow-hidden border-kraft-light hover:shadow-lg transition-all duration-300">
              <div className="relative">
                {category.isNew && (
                  <div className="absolute top-4 right-4 z-10">
                    <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {currentLang === 'uk' ? 'Новинка' : 'New'}
                    </span>
                  </div>
                )}
                <div className="p-6 bg-gradient-to-br from-primary/5 to-secondary/5">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-primary/10 rounded-full">
                      {category.icon}
                    </div>
                    <CardTitle className="text-2xl text-primary">{category.title}</CardTitle>
                  </div>
                  <CardDescription className="text-base mb-6">
                    {category.description}
                  </CardDescription>
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="mb-6">
                  <h4 className="font-semibold text-primary mb-3">
                    {currentLang === 'uk' ? 'Включає:' : 'Includes:'}
                  </h4>
                  <ul className="space-y-2">
                    {category.items.map((item, index) => (
                      <li key={index} className="flex items-start text-sm text-muted-foreground">
                        <div className="w-2 h-2 bg-eco-green rounded-full mr-3 mt-2 flex-shrink-0"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Button 
                  className="w-full btn-kraft"
                  onClick={() => onPageChange(category.id)}
                >
                  {currentLang === 'uk' ? 'Дивитися каталог' : 'View Catalog'}
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Services */}
        <div className="bg-kraft-light/20 rounded-2xl p-8 mb-12">
          <h2 className="text-3xl font-bold text-primary text-center mb-8">
            {currentLang === 'uk' ? 'Додаткові послуги' : 'Additional Services'}
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="text-center p-6 border-kraft-medium/30">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-gradient-eco rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-6 h-6 text-eco-green" />
                </div>
                <h3 className="text-lg font-semibold text-primary mb-2">
                  {currentLang === 'uk' ? 'Індивідуальний дизайн' : 'Custom Design'}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {currentLang === 'uk' 
                    ? 'Розробка унікального дизайну для вашої упаковки'
                    : 'Development of unique design for your packaging'
                  }
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6 border-kraft-medium/30">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-gradient-eco rounded-full flex items-center justify-center mx-auto mb-4">
                  <Package className="w-6 h-6 text-eco-green" />
                </div>
                <h3 className="text-lg font-semibold text-primary mb-2">
                  {currentLang === 'uk' ? 'Швидке виробництво' : 'Fast Production'}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {currentLang === 'uk' 
                    ? 'Термін виготовлення від 3 до 7 робочих днів'
                    : 'Production time from 3 to 7 working days'
                  }
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6 border-kraft-medium/30">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-gradient-eco rounded-full flex items-center justify-center mx-auto mb-4">
                  <ArrowRight className="w-6 h-6 text-eco-green" />
                </div>
                <h3 className="text-lg font-semibold text-primary mb-2">
                  {currentLang === 'uk' ? 'Доставка по Україні' : 'Delivery across Ukraine'}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {currentLang === 'uk' 
                    ? 'Надійна доставка в будь-який куточок України'
                    : 'Reliable delivery to any corner of Ukraine'
                  }
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-kraft rounded-2xl p-12">
          <h2 className="text-3xl font-bold text-primary mb-4">
            {currentLang === 'uk' 
              ? 'Потрібна консультація?' 
              : 'Need Consultation?'}
          </h2>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            {currentLang === 'uk'
              ? 'Наші фахівці допоможуть підібрати оптимальне рішення для вашого бізнесу та розрахують вартість замовлення'
              : 'Our specialists will help you choose the optimal solution for your business and calculate the cost of the order'}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary-hover btn-kraft"
              onClick={() => onPageChange('contacts')}
            >
              {currentLang === 'uk' ? 'Зв\'язатися з нами' : 'Contact Us'}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              variant="outline"
              size="lg" 
              onClick={() => onPageChange('prices')}
            >
              {currentLang === 'uk' ? 'Переглянути ціни' : 'View Prices'}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;