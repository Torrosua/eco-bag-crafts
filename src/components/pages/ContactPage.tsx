import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import SEOHead from '../SEOHead';

interface ContactPageProps {
  currentLang: 'uk' | 'en';
}

const ContactPage = ({ currentLang }: ContactPageProps) => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
    consent: false
  });

  const formatPhoneNumber = (value: string) => {
    // Ukrainian phone number formatting
    const numbers = value.replace(/\D/g, '');
    if (numbers.startsWith('380')) {
      return numbers.replace(/(\d{3})(\d{2})(\d{3})(\d{2})(\d{2})/, '+$1 $2 $3 $4 $5');
    } else if (numbers.startsWith('0')) {
      return numbers.replace(/(\d{3})(\d{3})(\d{2})(\d{2})/, '+38 $1 $2 $3 $4');
    }
    return value;
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhoneNumber(e.target.value);
    setFormData({ ...formData, phone: formatted });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission will be implemented later
    console.log('Form data:', formData);
  };

  return (
    <>
      <SEOHead
        title={currentLang === 'uk' ? 'Контакти - PaperBag' : 'Contact - PaperBag'}
        description={currentLang === 'uk' ? 'Зв\'яжіться з нами для замовлення паперових пакетів. Телефони, електронна пошта, адреса офісу в Києві.' : 'Contact us to order paper bags. Phones, email, office address in Kyiv.'}
      />
      
      <div className="min-h-screen py-12">
        <div className="container">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">{t('contact.title')}</h1>
            <p className="text-xl text-muted-foreground">{t('contact.subtitle')}</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Phone className="w-5 h-5" />
                    {t('contact.company')}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <p className="text-muted-foreground mb-4">{t('contact.questions')}</p>
                    <p className="font-medium mb-4">{t('contact.orderBags')}</p>
                    <p className="text-muted-foreground mb-4">{t('contact.callOrFill')}</p>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex items-center gap-3 p-4 bg-muted/50 rounded-lg">
                      <Phone className="w-5 h-5 text-primary" />
                      <div>
                        <p className="font-medium">+38 067 487 4902</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-4 bg-muted/50 rounded-lg">
                      <Phone className="w-5 h-5 text-primary" />
                      <div>
                        <p className="font-medium">+38 067 463 2998</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <p className="font-medium mb-2">{t('contact.managers')}</p>
                    <div className="space-y-2">
                      <div className="flex items-center gap-3 p-4 bg-muted/50 rounded-lg">
                        <Mail className="w-5 h-5 text-primary" />
                        <span>sale@paperbag.org.ua</span>
                      </div>
                      <div className="flex items-center gap-3 p-4 bg-muted/50 rounded-lg">
                        <Mail className="w-5 h-5 text-primary" />
                        <span>sale1@paperbag.org.ua</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 bg-muted/50 rounded-lg">
                    <MapPin className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <p className="font-medium">{t('contact.address')}</p>
                      <p className="text-muted-foreground">{t('contact.addressValue')}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-4 bg-muted/50 rounded-lg">
                    <Clock className="w-5 h-5 text-primary" />
                    <div>
                      <p className="font-medium">
                        {currentLang === 'uk' ? 'Години роботи' : 'Working hours'}
                      </p>
                      <p className="text-muted-foreground">
                        {currentLang === 'uk' ? 'Пн-Пт: 9:00-18:00' : 'Mon-Fri: 9:00-18:00'}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle>{t('contact.formTitle')}</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">{t('contact.name')} *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">{t('contact.phone')} *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handlePhoneChange}
                      placeholder="+38 067 123 45 67"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">{t('contact.email')} *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">{t('contact.message')} *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={5}
                      required
                    />
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="consent"
                      checked={formData.consent}
                      onCheckedChange={(checked) => setFormData({ ...formData, consent: checked as boolean })}
                      required
                    />
                    <Label htmlFor="consent" className="text-sm text-muted-foreground">
                      {t('contact.consent')} *
                    </Label>
                  </div>

                  <div className="bg-muted/50 p-4 rounded-lg">
                    <p className="text-sm text-muted-foreground text-center">
                      {t('contact.submissionComingSoon')}
                    </p>
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full"
                    disabled={true}
                  >
                    {t('contact.send')}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  );

};

export default ContactPage;