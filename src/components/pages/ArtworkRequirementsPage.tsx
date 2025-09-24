import { FileImage, Ruler, Palette, CheckCircle, AlertTriangle } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';
import SEOHead from '@/components/SEOHead';
import Breadcrumbs from '@/components/Breadcrumbs';

interface ArtworkRequirementsPageProps {
  currentLang: 'uk' | 'en';
  onPageChange: (page: string) => void;
}

const ArtworkRequirementsPage = ({ onPageChange }: ArtworkRequirementsPageProps) => {
  const { t, i18n } = useTranslation();

  const breadcrumbItems = [
    { label: t('artworkRequirements.title') }
  ];

  const requirements = i18n.language === 'uk' ? [
    {
      icon: FileImage,
      title: "Формат файлів",
      items: [
        "AI (Adobe Illustrator) - найкращий формат",
        "PDF - векторний, не растровий",
        "CDR (CorelDRAW) - версія до 2018",
        "EPS - векторний формат",
        "PSD (Photoshop) - мінімум 300 dpi"
      ]
    },
    {
      icon: Ruler,
      title: "Розміри та роздільна здатність",
      items: [
        "Роздільна здатність растрових зображень - мінімум 300 dpi",
        "Розміри макету в реальному масштабі 1:1",
        "Вихід під обріз (блід) - 2-3 мм з кожного боку",
        "Безпечна зона для тексту - 5 мм від краю",
        "Векторні файли бажані для логотипів"
      ]
    },
    {
      icon: Palette,
      title: "Кольори та друк",
      items: [
        "Колірна модель CMYK для друку",
        "Pantone кольори для точного відтворення",
        "Використання готових кольорів Pantone",
        "Уникайте RGB кольорів для друку",
        "Чорний колір - C:0 M:0 Y:0 K:100"
      ]
    }
  ] : [
    {
      icon: FileImage,
      title: "File Formats",
      items: [
        "AI (Adobe Illustrator) - best format",
        "PDF - vector, not raster",
        "CDR (CorelDRAW) - version up to 2018",
        "EPS - vector format",
        "PSD (Photoshop) - minimum 300 dpi"
      ]
    },
    {
      icon: Ruler,
      title: "Dimensions and Resolution",
      items: [
        "Raster image resolution - minimum 300 dpi",
        "Layout dimensions in real scale 1:1",
        "Bleed area - 2-3 mm on each side",
        "Safe zone for text - 5 mm from edge",
        "Vector files preferred for logos"
      ]
    },
    {
      icon: Palette,
      title: "Colors and Printing",
      items: [
        "CMYK color model for printing",
        "Pantone colors for precise reproduction",
        "Use ready-made Pantone colors",
        "Avoid RGB colors for printing",
        "Black color - C:0 M:0 Y:0 K:100"
      ]
    }
  ];

  const tips = i18n.language === 'uk' ? [
    "Надсилайте макети в оригінальних форматах (AI, CDR)",
    "Переведіть всі тексти в криві (outline)",
    "Вкладайте або надсилайте шрифти окремо",
    "Перевірте правильність контактної інформації",
    "Зберігайте резервні копії оригінальних файлів"
  ] : [
    "Send layouts in original formats (AI, CDR)",
    "Convert all text to curves (outline)",
    "Embed or send fonts separately",
    "Verify contact information accuracy",
    "Keep backup copies of original files"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      <SEOHead
        title={t('artworkRequirements.title')}
        description="Technical requirements for artwork preparation. File formats, dimensions, colors, and printing specifications for paper bags and packaging."
      />
      
      <div className="container mx-auto px-4 py-8">
        <Breadcrumbs items={breadcrumbItems} onNavigate={onPageChange} />
        
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              {t('artworkRequirements.title')}
            </h1>
            <p className="text-xl text-muted-foreground">
              {t('artworkRequirements.subtitle')}
            </p>
          </div>

          {/* Requirements Cards */}
          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            {requirements.map((req, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <req.icon className="w-5 h-5 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{req.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {req.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Tips Alert */}
          <Alert className="mb-8">
            <AlertTriangle className="h-4 w-4" />
            <AlertDescription>
              <div className="space-y-2">
                <p className="font-medium">
                  {i18n.language === 'uk' ? 'Корисні поради:' : 'Useful Tips:'}
                </p>
                <ul className="space-y-1">
                  {tips.map((tip, index) => (
                    <li key={index} className="text-sm">• {tip}</li>
                  ))}
                </ul>
              </div>
            </AlertDescription>
          </Alert>

          {/* Contact CTA */}
          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="text-center py-8">
              <h3 className="text-xl font-semibold mb-4">
                {i18n.language === 'uk' ? 'Потрібна допомога з макетом?' : 'Need help with artwork?'}
              </h3>
              <p className="text-muted-foreground mb-6">
                {i18n.language === 'uk' 
                  ? 'Наші дизайнери допоможуть підготувати макет відповідно до всіх вимог.'
                  : 'Our designers will help you prepare artwork according to all requirements.'
                }
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

export default ArtworkRequirementsPage;