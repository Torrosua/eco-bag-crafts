import { Card, CardContent } from '@/components/ui/card';
import { Award, Users, Leaf, Clock } from 'lucide-react';
import { translations } from '@/lib/translations';
import SEOHead from '@/components/SEOHead';

interface AboutPageProps {
  currentLang: 'uk' | 'en';
}

const AboutPage = ({ currentLang }: AboutPageProps) => {
  const t = translations[currentLang];

  const stats = [
    {
      icon: Clock,
      number: '10+',
      label: t.about.experience,
      color: 'eco-green'
    },
    {
      icon: Award,
      number: '50+',
      label: t.about.products,
      color: 'primary'
    },
    {
      icon: Users,
      number: '1000+',
      label: t.about.clients,
      color: 'accent'
    }
  ];

  const advantages = [
    {
      icon: Leaf,
      title: currentLang === 'uk' ? 'Екологічність' : 'Eco-Friendly',
      description: currentLang === 'uk' 
        ? 'Використовуємо лише сертифіковані матеріали, що не шкодять довкіллю'
        : 'We use only certified materials that do not harm the environment'
    },
    {
      icon: Award,
      title: currentLang === 'uk' ? 'Висока якість' : 'High Quality',
      description: currentLang === 'uk'
        ? 'Сучасне обладнання та контроль якості на всіх етапах виробництва'
        : 'Modern equipment and quality control at all stages of production'
    },
    {
      icon: Users,
      title: currentLang === 'uk' ? 'Індивідуальний підхід' : 'Individual Approach',
      description: currentLang === 'uk'
        ? 'Розробляємо унікальні рішення для кожного клієнта'
        : 'We develop unique solutions for each client'
    }
  ];

  return (
    <>
      <SEOHead 
        title={currentLang === 'uk' ? 'Про нас' : 'About Us'}
        description={currentLang === 'uk' 
          ? 'Дізнайтеся більше про нашу компанію - провідного виробника екологічної паперової упаковки в Україні. Наш досвід, можливості та переваги.'
          : 'Learn more about our company - a leading manufacturer of eco-friendly paper packaging in Ukraine. Our experience, capabilities and advantages.'
        }
        canonical="https://paperbag.lovable.app/about"
      />
      <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
            {t.about.title}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t.about.subtitle}
          </p>
        </div>

        {/* Company Description */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <div className="kraft-texture rounded-2xl p-8 bg-kraft-light/30">
            <h2 className="text-2xl font-bold text-primary mb-6">
              {currentLang === 'uk' ? 'Наша історія' : 'Our Story'}
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                {currentLang === 'uk' 
                  ? 'Наша компанія була заснована з метою виробництва якісної та екологічної паперової упаковки в Україні. Ми спеціалізуємося на виготовленні широкого асортименту паперових пакетів, ламінованих пакетів та супутніх товарів.'
                  : 'Our company was founded with the goal of producing high-quality and eco-friendly paper packaging in Ukraine. We specialize in manufacturing a wide range of paper bags, laminated bags, and related products.'}
              </p>
              <p>
                {currentLang === 'uk'
                  ? 'За роки роботи ми налагодили виробництво на сучасному обладнанні, що дозволяє нам забезпечувати високу якість продукції та оперативне виконання замовлень.'
                  : 'Over the years, we have established production on modern equipment, which allows us to ensure high product quality and prompt order fulfillment.'}
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-primary mb-6">
              {currentLang === 'uk' ? 'Наші можливості' : 'Our Capabilities'}
            </h2>
            <div className="space-y-4">
              {[
                currentLang === 'uk' ? 'Кастомний друк логотипів та дизайнів' : 'Custom printing of logos and designs',
                currentLang === 'uk' ? 'Широкий вибір матеріалів та кольорів' : 'Wide selection of materials and colors',
                currentLang === 'uk' ? 'Мінімальні тиражі від 100 штук' : 'Minimum quantities from 100 pieces',
                currentLang === 'uk' ? 'Доставка по всій Україні' : 'Delivery throughout Ukraine',
                currentLang === 'uk' ? 'Гнучка система знижок' : 'Flexible discount system'
              ].map((capability, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-3 h-3 bg-eco-green rounded-full mr-3"></div>
                  <span className="text-muted-foreground">{capability}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center p-8 border-kraft-light product-card">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-gradient-eco rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-eco-green" />
                </div>
                <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Advantages */}
        <div className="bg-gradient-kraft rounded-2xl p-12">
          <h2 className="text-3xl font-bold text-primary text-center mb-12">
            {currentLang === 'uk' ? 'Наші переваги' : 'Our Advantages'}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-background rounded-full flex items-center justify-center mx-auto mb-6 shadow-elegant">
                  <advantage.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-4">{advantage.title}</h3>
                <p className="text-muted-foreground">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default AboutPage;