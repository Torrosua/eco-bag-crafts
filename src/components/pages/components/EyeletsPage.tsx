import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Circle, Package, Wrench, Shield } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import Breadcrumbs from "@/components/Breadcrumbs";

interface EyeletsPageProps {
  currentLang: 'uk' | 'en';
  onPageChange: (page: string) => void;
}

const EyeletsPage = ({ currentLang, onPageChange }: EyeletsPageProps) => {
  const { t } = useTranslation();

  const breadcrumbItems = [
    { label: t('nav.home'), href: '#', onClick: () => onPageChange('home') },
    { label: t('nav.components'), href: '#', onClick: () => onPageChange('components') },
    { label: t('components.eyelets'), href: '#' }
  ];

  const features = [
    {
      icon: Shield,
      title: currentLang === 'uk' ? 'Міцність' : 'Strength',
      description: currentLang === 'uk' 
        ? 'Металеві люверси витримують високі навантаження'
        : 'Metal eyelets withstand high loads'
    },
    {
      icon: Wrench,
      title: currentLang === 'uk' ? 'Легкий монтаж' : 'Easy Installation',
      description: currentLang === 'uk'
        ? 'Швидке та надійне кріплення спеціальним інструментом'
        : 'Quick and reliable mounting with special tool'
    },
    {
      icon: Package,
      title: currentLang === 'uk' ? 'Універсальність' : 'Versatility',
      description: currentLang === 'uk'
        ? 'Підходять для всіх типів паперових пакетів'
        : 'Suitable for all types of paper bags'
    }
  ];

  const eyeletTypes = [
    {
      title: currentLang === 'uk' ? 'Стандартні люверси' : 'Standard eyelets',
      description: currentLang === 'uk' 
        ? 'Класичні круглі люверси для легких та середніх пакетів'
        : 'Classic round eyelets for light and medium bags',
      diameter: '4-6 мм',
      material: currentLang === 'uk' ? 'Латунь' : 'Brass'
    },
    {
      title: currentLang === 'uk' ? 'Посилені люверси' : 'Reinforced eyelets',
      description: currentLang === 'uk'
        ? 'Міцні люверси з товстими стінками для важких пакетів'
        : 'Strong eyelets with thick walls for heavy bags',
      diameter: '6-8 мм',
      material: currentLang === 'uk' ? 'Сталь' : 'Steel'
    },
    {
      title: currentLang === 'uk' ? 'Декоративні люверси' : 'Decorative eyelets',
      description: currentLang === 'uk'
        ? 'Кольорові люверси з декоративним покриттям'
        : 'Colored eyelets with decorative coating',
      diameter: '4-10 мм',
      material: currentLang === 'uk' ? 'Латунь з покриттям' : 'Coated brass'
    }
  ];

  const sizes = [
    { diameter: '4 мм', description: currentLang === 'uk' ? 'Легкі пакети' : 'Light bags' },
    { diameter: '5 мм', description: currentLang === 'uk' ? 'Середні пакети' : 'Medium bags' },
    { diameter: '6 мм', description: currentLang === 'uk' ? 'Важкі пакети' : 'Heavy bags' },
    { diameter: '8 мм', description: currentLang === 'uk' ? 'Промислові пакети' : 'Industrial bags' },
    { diameter: '10 мм', description: currentLang === 'uk' ? 'Спеціальні пакети' : 'Special bags' }
  ];

  const colors = [
    { name: currentLang === 'uk' ? 'Латунь (природний)' : 'Brass (natural)', code: '#B8860B' },
    { name: currentLang === 'uk' ? 'Хром' : 'Chrome', code: '#C0C0C0' },
    { name: currentLang === 'uk' ? 'Чорний' : 'Black', code: '#2C2C2C' },
    { name: currentLang === 'uk' ? 'Золото' : 'Gold', code: '#FFD700' },
    { name: currentLang === 'uk' ? 'Мідь' : 'Copper', code: '#B87333' },
    { name: currentLang === 'uk' ? 'Нікель' : 'Nickel', code: '#727472' }
  ];

  const specifications = [
    {
      title: currentLang === 'uk' ? 'Матеріал' : 'Material',
      value: currentLang === 'uk' ? 'Латунь, сталь, алюміній' : 'Brass, steel, aluminum'
    },
    {
      title: currentLang === 'uk' ? 'Діаметр' : 'Diameter',
      value: '4-10 мм'
    },
    {
      title: currentLang === 'uk' ? 'Товщина матеріалу' : 'Material thickness',
      value: currentLang === 'uk' ? 'До 3 мм' : 'Up to 3 mm'
    },
    {
      title: currentLang === 'uk' ? 'Мінімальний наклад' : 'Minimum order',
      value: currentLang === 'uk' ? 'Від 1000 шт.' : 'From 1000 pcs'
    }
  ];

  return (
    <>
      <SEOHead 
        title={`${t('components.eyelets')} | ${t('contact.company')}`}
        description={currentLang === 'uk' 
          ? 'Металеві люверси для кріплення ручок пакетів. Різні розміри та покриття. Якісна фурнітура від українського постачальника.'
          : 'Metal eyelets for bag handle attachment. Various sizes and coatings. Quality hardware from Ukrainian supplier.'}
        canonical={`https://paperbag.lovable.app/components/eyelets`}
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
                {t('components.eyelets')}
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                {currentLang === 'uk' 
                  ? 'Металеві люверси для надійного кріплення ручок до паперових пакетів. Широкий вибір розмірів, матеріалів та покриттів.'
                  : 'Metal eyelets for reliable handle attachment to paper bags. Wide selection of sizes, materials and coatings.'
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

            {/* Eyelet Types */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-center mb-8">
                {currentLang === 'uk' ? 'Типи люверсів' : 'Eyelet Types'}
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {eyeletTypes.map((type, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <Circle className="w-8 h-8 text-primary mb-2" />
                      <CardTitle className="text-lg">{type.title}</CardTitle>
                      <CardDescription>{type.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <Badge variant="outline">Ø {type.diameter}</Badge>
                        <div className="text-sm text-muted-foreground">{type.material}</div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Available Sizes */}
            <Card className="mb-12">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Circle className="w-5 h-5" />
                  {currentLang === 'uk' ? 'Доступні розміри' : 'Available Sizes'}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-5 gap-4">
                  {sizes.map((size, index) => (
                    <div key={index} className="text-center border border-border rounded-lg p-4">
                      <div className="font-mono text-lg font-semibold mb-2">{size.diameter}</div>
                      <div className="text-sm text-muted-foreground">{size.description}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Available Colors */}
            <Card className="mb-12">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Package className="w-5 h-5" />
                  {currentLang === 'uk' ? 'Доступні кольори та покриття' : 'Available Colors and Coatings'}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
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
                  <Wrench className="w-5 h-5" />
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

            {/* Installation Process */}
            <Card className="mb-12">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Wrench className="w-5 h-5" />
                  {currentLang === 'uk' ? 'Процес установки' : 'Installation Process'}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-primary font-bold">1</span>
                    </div>
                    <h4 className="font-semibold mb-2">
                      {currentLang === 'uk' ? 'Розмітка' : 'Marking'}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {currentLang === 'uk' ? 'Позначення місця установки' : 'Mark installation location'}
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-primary font-bold">2</span>
                    </div>
                    <h4 className="font-semibold mb-2">
                      {currentLang === 'uk' ? 'Пробивка' : 'Punching'}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {currentLang === 'uk' ? 'Створення отвору під люверс' : 'Create hole for eyelet'}
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-primary font-bold">3</span>
                    </div>
                    <h4 className="font-semibold mb-2">
                      {currentLang === 'uk' ? 'Установка' : 'Installation'}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {currentLang === 'uk' ? 'Вставка люверса в отвір' : 'Insert eyelet into hole'}
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-primary font-bold">4</span>
                    </div>
                    <h4 className="font-semibold mb-2">
                      {currentLang === 'uk' ? 'Закріплення' : 'Securing'}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {currentLang === 'uk' ? 'Розвальцювання спеціальним інструментом' : 'Rolling with special tool'}
                    </p>
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
                    ? 'Приклади використання люверсів в наших проектах'
                    : 'Examples of eyelet usage in our projects'
                  }
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[1, 2, 3, 4, 5, 6].map((item) => (
                    <div key={item} className="aspect-square bg-muted rounded-lg flex items-center justify-center">
                      <Circle className="w-12 h-12 text-muted-foreground" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* CTA */}
            <Card className="text-center">
              <CardContent className="pt-6">
                <h3 className="text-2xl font-bold mb-4">
                  {currentLang === 'uk' ? 'Замовити люверси' : 'Order Eyelets'}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {currentLang === 'uk'
                    ? 'Зв\'яжіться з нами для підбору люверсів та розрахунку вартості'
                    : 'Contact us for eyelet selection and cost calculation'
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

export default EyeletsPage;