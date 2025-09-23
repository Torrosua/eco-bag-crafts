import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { translations } from '@/lib/translations';
import { useToast } from '@/hooks/use-toast';

interface ContactPageProps {
  currentLang: 'uk' | 'en';
}

const ContactPage = ({ currentLang }: ContactPageProps) => {
  const t = translations[currentLang];
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const contactInfo = [
    {
      icon: Phone,
      title: t.contact.phone,
      value: '+38 067 487 4902',
      description: currentLang === 'uk' ? 'Пн-Пт 9:00-18:00' : 'Mon-Fri 9:00-18:00'
    },
    {
      icon: Mail,
      title: t.contact.email,
      value: 'info@paperbag.org.ua',
      description: currentLang === 'uk' ? 'Відповідаємо протягом 24 годин' : 'Response within 24 hours'
    },
    {
      icon: MapPin,
      title: t.contact.address,
      value: currentLang === 'uk' ? 'Україна' : 'Ukraine',
      description: currentLang === 'uk' ? 'Доставка по всій країні' : 'Delivery nationwide'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: currentLang === 'uk' ? 'Помилка' : 'Error',
        description: currentLang === 'uk' 
          ? 'Будь ласка, заповніть всі обов\'язкові поля'
          : 'Please fill in all required fields',
        variant: 'destructive'
      });
      return;
    }

    // Here you would typically send the form data to your backend
    toast({
      title: currentLang === 'uk' ? 'Успіх!' : 'Success!',
      description: currentLang === 'uk'
        ? 'Ваше повідомлення надіслано. Ми зв\'яжемося з вами найближчим часом.'
        : 'Your message has been sent. We will contact you soon.',
    });

    // Reset form
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
            {t.contact.title}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t.contact.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-bold text-primary mb-8">
              {currentLang === 'uk' ? 'Контактна інформація' : 'Contact Information'}
            </h2>
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="product-card border-kraft-light">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-eco rounded-full flex items-center justify-center flex-shrink-0">
                        <info.icon className="w-6 h-6 text-eco-green" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-primary mb-1">{info.title}</h3>
                        <p className="text-lg text-foreground mb-1">{info.value}</p>
                        <p className="text-sm text-muted-foreground">{info.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Working Hours */}
            <Card className="mt-8 border-kraft-light">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-primary">
                  <Clock className="w-6 h-6" />
                  {currentLang === 'uk' ? 'Графік роботи' : 'Working Hours'}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">
                      {currentLang === 'uk' ? 'Понеділок - П\'ятниця' : 'Monday - Friday'}
                    </span>
                    <span className="font-medium">9:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">
                      {currentLang === 'uk' ? 'Субота' : 'Saturday'}
                    </span>
                    <span className="font-medium">10:00 - 16:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">
                      {currentLang === 'uk' ? 'Неділя' : 'Sunday'}
                    </span>
                    <span className="font-medium">
                      {currentLang === 'uk' ? 'Вихідний' : 'Closed'}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="border-kraft-light">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">{t.contact.formTitle}</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2" htmlFor="name">
                    {t.contact.name} *
                  </label>
                  <Input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    placeholder={currentLang === 'uk' ? 'Введіть ваше ім\'я' : 'Enter your name'}
                    className="border-kraft-medium/30 focus:border-primary"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2" htmlFor="email">
                    Email *
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    placeholder={currentLang === 'uk' ? 'Введіть ваш email' : 'Enter your email'}
                    className="border-kraft-medium/30 focus:border-primary"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2" htmlFor="phone">
                    {currentLang === 'uk' ? 'Телефон' : 'Phone'}
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    placeholder={currentLang === 'uk' ? 'Введіть ваш телефон' : 'Enter your phone'}
                    className="border-kraft-medium/30 focus:border-primary"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2" htmlFor="message">
                    {t.contact.message} *
                  </label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    placeholder={currentLang === 'uk' 
                      ? 'Розкажіть про ваші потреби...'
                      : 'Tell us about your needs...'}
                    rows={5}
                    className="border-kraft-medium/30 focus:border-primary"
                  />
                </div>

                <Button type="submit" size="lg" className="w-full btn-kraft">
                  <Send className="mr-2 w-5 h-5" />
                  {t.contact.send}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Additional Info */}
        <div className="bg-gradient-kraft rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-primary mb-4">
            {currentLang === 'uk' 
              ? 'Готові почати співпрацю?'
              : 'Ready to Start Cooperation?'}
          </h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            {currentLang === 'uk'
              ? 'Наша команда завжди готова надати професійну консультацію та допомогти з вибором оптимального рішення для вашого бізнесу.'
              : 'Our team is always ready to provide professional consultation and help you choose the optimal solution for your business.'}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-accent hover:bg-accent-light btn-eco">
              <Phone className="mr-2 w-5 h-5" />
              {currentLang === 'uk' ? 'Подзвонити зараз' : 'Call Now'}
            </Button>
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              <Mail className="mr-2 w-5 h-5" />
              {currentLang === 'uk' ? 'Написати email' : 'Send Email'}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;