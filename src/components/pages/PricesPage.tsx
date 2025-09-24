import { Download, FileText, Calendar } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import SEOHead from '@/components/SEOHead';
import Breadcrumbs from '@/components/Breadcrumbs';

interface PricesPageProps {
  currentLang: 'uk' | 'en';
  onPageChange: (page: string) => void;
}

const PricesPage = ({ onPageChange }: PricesPageProps) => {
  const { t } = useTranslation();

  const handleDownloadPriceList = () => {
    // Create a link element and trigger download
    const link = document.createElement('a');
    link.href = '/price/price-bumagnie-paketi-25.09.2024.pdf';
    link.download = 'price-bumagnie-paketi-25.09.2024.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const breadcrumbItems = [
    { label: t('prices.title') }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-brown-50">
      <SEOHead
        title={t('prices.title')}
        description="Download our complete price list for paper bags, laminated bags, kraft packaging and accessories. Updated 25.09.2024. Minimum orders from 100 pieces."
      />
      
      <div className="container mx-auto px-4 py-8">
        <Breadcrumbs items={breadcrumbItems} onNavigate={onPageChange} />
        
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              {t('prices.title')}
            </h1>
            <p className="text-xl text-muted-foreground">
              {t('prices.subtitle')}
            </p>
          </div>

          {/* Main Price Card */}
          <Card className="mb-8 shadow-lg border-primary/20">
            <CardHeader className="text-center">
              <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <FileText className="w-8 h-8 text-primary" />
              </div>
              <CardTitle className="text-2xl">
                {t('prices.downloadPriceList')}
              </CardTitle>
              <CardDescription className="flex items-center justify-center gap-2 text-base">
                <Calendar className="w-4 h-4" />
                {t('prices.lastUpdated')}
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center pb-8">
              <Button 
                onClick={handleDownloadPriceList}
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white px-8 py-3 text-lg"
              >
                <Download className="w-5 h-5 mr-2" />
                {t('common.downloadPDF')}
              </Button>
            </CardContent>
          </Card>

          {/* Additional Information */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  {t('common.minOrder')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  {t('common.minOrder')} - 100 {t('nav.tagline').toLowerCase()}
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  {t('common.customPrinting')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  {t('common.customPrinting')} {t('common.nationwideDelivery').toLowerCase()}
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Contact CTA */}
          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="text-center py-8">
              <h3 className="text-xl font-semibold mb-4">
                {t('contact.formTitle')}
              </h3>
              <p className="text-muted-foreground mb-6">
                {t('contact.subtitle')}
              </p>
              <Button 
                onClick={() => onPageChange('contacts')}
                variant="default"
                size="lg"
              >
                {t('hero.cta')}
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default PricesPage;