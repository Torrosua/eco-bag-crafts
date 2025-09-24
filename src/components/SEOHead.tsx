import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
}

const SEOHead = ({ 
  title, 
  description = "Leading manufacturer of eco-friendly paper bags, laminated packaging, kraft bags and gift boxes in Ukraine. Custom printing, nationwide delivery, minimum 100 pcs orders.",
  keywords = "paper bags, laminated bags, kraft packaging, eco-friendly bags, custom printing, Ukraine packaging, gift boxes, paper twine, clutch bags",
  canonical,
  ogImage = "/og-image.jpg"
}: SEOHeadProps) => {
  const { t, i18n } = useTranslation();
  
  const defaultTitle = i18n.language === 'uk' 
    ? "PaperBag - Екологічна паперова упаковка | Україна"
    : "PaperBag - Eco-Friendly Paper Packaging Manufacturing | Ukraine";

  const finalTitle = title ? `${title} | ${defaultTitle}` : defaultTitle;

  useEffect(() => {
    // Update document title
    document.title = finalTitle;

    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    }

    // Update meta keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', keywords);
    }

    // Update OG tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', finalTitle);
    }

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', description);
    }

    const ogImageTag = document.querySelector('meta[property="og:image"]');
    if (ogImageTag) {
      ogImageTag.setAttribute('content', ogImage);
    }

    // Update Twitter tags
    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (twitterTitle) {
      twitterTitle.setAttribute('content', finalTitle);
    }

    const twitterDescription = document.querySelector('meta[name="twitter:description"]');
    if (twitterDescription) {
      twitterDescription.setAttribute('content', description);
    }

    // Update canonical URL
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    if (canonical) {
      canonicalLink.setAttribute('href', canonical);
    }

    // Update lang attribute
    document.documentElement.lang = i18n.language;
  }, [finalTitle, description, keywords, canonical, ogImage, i18n.language]);

  return null;
};

export default SEOHead;