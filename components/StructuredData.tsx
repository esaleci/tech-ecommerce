import Script from 'next/script';

export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Artificial Projects",
    "description": "AI-powered e-commerce automation solutions for scaling online businesses",
    "url": "https://artificialprojects.com",
    "logo": "https://artificialprojects.com/logo.png",
    "sameAs": [
      "https://instagram.com/artificialprojects",
      "https://t.me/artificialprojects",
      "https://wa.me/1234567890"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1234567890",
      "contactType": "Customer Service",
      "areaServed": "Worldwide",
      "availableLanguage": ["English"]
    },
    "offers": {
      "@type": "Service",
      "name": "E-commerce Automation Services",
      "description": "AI-powered automation for customer support, operations, and marketing workflows",
      "provider": {
        "@type": "Organization",
        "name": "Artificial Projects"
      }
    }
  };

  return (
    <Script
      id="structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

