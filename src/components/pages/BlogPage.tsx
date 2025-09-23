import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, ArrowRight, Leaf, Lightbulb, Truck } from 'lucide-react';
import { translations } from '@/lib/translations';

interface BlogPageProps {
  currentLang: 'uk' | 'en';
  onPageChange: (page: string) => void;
}

const BlogPage = ({ currentLang, onPageChange }: BlogPageProps) => {
  const articles = [
    {
      id: 1,
      title: currentLang === 'uk' 
        ? 'Екологічна упаковка: тренди 2024 року'
        : 'Eco-friendly Packaging: 2024 Trends',
      excerpt: currentLang === 'uk'
        ? 'Огляд найактуальніших трендів в сфері екологічної упаковки та їх вплив на бізнес.'
        : 'Overview of the most relevant trends in eco-friendly packaging and their impact on business.',
      date: '2024-01-15',
      category: currentLang === 'uk' ? 'Тренди' : 'Trends',
      icon: Leaf,
      readTime: currentLang === 'uk' ? '5 хв читання' : '5 min read'
    },
    {
      id: 2,
      title: currentLang === 'uk'
        ? 'Технології друку на паперових пакетах'
        : 'Printing Technologies for Paper Bags',
      excerpt: currentLang === 'uk'
        ? 'Розбираємо різні методи друку та їх переваги для різних типів упаковки.'
        : 'We analyze different printing methods and their advantages for different types of packaging.',
      date: '2024-01-10',
      category: currentLang === 'uk' ? 'Технології' : 'Technology',
      icon: Lightbulb,
      readTime: currentLang === 'uk' ? '7 хв читання' : '7 min read'
    },
    {
      id: 3,
      title: currentLang === 'uk'
        ? 'Логістика доставки упаковки по Україні'
        : 'Packaging Delivery Logistics in Ukraine',
      excerpt: currentLang === 'uk'
        ? 'Як оптимізувати доставку упаковки та зменшити вартість логістики.'
        : 'How to optimize packaging delivery and reduce logistics costs.',
      date: '2024-01-05',
      category: currentLang === 'uk' ? 'Логістика' : 'Logistics',
      icon: Truck,
      readTime: currentLang === 'uk' ? '6 хв читання' : '6 min read'
    }
  ];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return currentLang === 'uk' 
      ? date.toLocaleDateString('uk-UA', { year: 'numeric', month: 'long', day: 'numeric' })
      : date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
            {currentLang === 'uk' ? 'Блог і новини' : 'Blog & News'}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {currentLang === 'uk'
              ? 'Останні новини індустрії упаковки, корисні статті та оновлення компанії'
              : 'Latest packaging industry news, useful articles and company updates'}
          </p>
        </div>

        {/* Featured Article */}
        <Card className="mb-12 overflow-hidden border-kraft-light shadow-elegant">
          <div className="grid lg:grid-cols-2">
            <div className="kraft-texture bg-kraft-light/40 p-12 flex items-center">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-3 py-1 bg-eco-green text-eco-green-foreground text-sm font-medium rounded-full">
                    {currentLang === 'uk' ? 'Рекомендовано' : 'Featured'}
                  </span>
                  <Calendar className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">{formatDate('2024-01-20')}</span>
                </div>
                <h2 className="text-3xl font-bold text-primary mb-4">
                  {currentLang === 'uk'
                    ? 'Майбутнє екологічної упаковки: інновації та можливості'
                    : 'The Future of Eco-Packaging: Innovations and Opportunities'}
                </h2>
                <p className="text-muted-foreground mb-6">
                  {currentLang === 'uk'
                    ? 'Детальний огляд інноваційних матеріалів та технологій, які формують майбутнє індустрії упаковки.'
                    : 'A detailed overview of innovative materials and technologies shaping the future of the packaging industry.'}
                </p>
                <Button className="btn-kraft">
                  {currentLang === 'uk' ? 'Читати далі' : 'Read More'}
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </div>
            <div className="h-64 lg:h-auto bg-gradient-eco flex items-center justify-center">
              <Leaf className="w-24 h-24 text-eco-green opacity-50" />
            </div>
          </div>
        </Card>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {articles.map((article) => (
            <Card key={article.id} className="product-card border-kraft-light">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-eco rounded-full flex items-center justify-center">
                    <article.icon className="w-6 h-6 text-eco-green" />
                  </div>
                  <span className="px-2 py-1 bg-kraft-light text-kraft-dark text-xs font-medium rounded">
                    {article.category}
                  </span>
                </div>
                <CardTitle className="text-xl text-primary line-clamp-2">
                  {article.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 line-clamp-3">
                  {article.excerpt}
                </p>
                <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{formatDate(article.date)}</span>
                  </div>
                  <span>{article.readTime}</span>
                </div>
                <Button variant="outline" className="w-full">
                  {currentLang === 'uk' ? 'Читати статтю' : 'Read Article'}
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="bg-gradient-kraft rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold text-primary mb-4">
            {currentLang === 'uk' 
              ? 'Підпишіться на наші новини'
              : 'Subscribe to Our Newsletter'}
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            {currentLang === 'uk'
              ? 'Отримуйте найсвіжіші новини індустрії, корисні поради та спеціальні пропозиції'
              : 'Get the latest industry news, useful tips and special offers'}
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder={currentLang === 'uk' ? 'Ваш email' : 'Your email'}
              className="flex-1 px-4 py-3 rounded-lg border border-kraft-medium/30 focus:outline-none focus:border-primary"
            />
            <Button className="bg-primary hover:bg-primary-hover btn-kraft">
              {currentLang === 'uk' ? 'Підписатися' : 'Subscribe'}
            </Button>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-primary mb-4">
            {currentLang === 'uk' 
              ? 'Є питання про нашу продукцію?'
              : 'Have Questions About Our Products?'}
          </h2>
          <p className="text-muted-foreground mb-6">
            {currentLang === 'uk'
              ? 'Наші експерти готові надати детальну консультацію'
              : 'Our experts are ready to provide detailed consultation'}
          </p>
          <Button 
            size="lg" 
            className="btn-kraft"
            onClick={() => onPageChange('contact')}
          >
            {currentLang === 'uk' ? 'Зв\'язатися з нами' : 'Contact Us'}
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;