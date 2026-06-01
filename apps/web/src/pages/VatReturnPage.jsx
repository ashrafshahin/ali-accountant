
import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle2 } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

const VatReturnPage = () => {
  const benefits = [
    'Accurate VAT return preparation and submission',
    'VAT registration and deregistration support',
    'Making Tax Digital (MTD) compliance',
    'VAT scheme optimization advice',
    'Input and output VAT reconciliation',
    'HMRC correspondence handling',
  ];

  return (
    <>
      <Helmet>
        <title>VAT Return Services - Ali & Co Accountants</title>
        <meta name="description" content="Professional VAT return preparation and submission. MTD compliance, VAT registration, and expert HMRC support." />
      </Helmet>

      <Header />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight mb-6" style={{ letterSpacing: '-0.02em', textWrap: 'balance' }}>
                VAT Return
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                VAT compliance requires accurate record-keeping and timely submissions to HMRC. Our VAT return service ensures your returns are prepared correctly, submitted on time, and fully compliant with Making Tax Digital requirements.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed mb-8">
                We handle all aspects of VAT administration, from initial registration to quarterly return preparation and submission. Our team stays current with VAT legislation changes and helps you choose the most beneficial VAT scheme for your business.
              </p>
              <Link to="/contact">
                <Button size="lg" className="text-base px-8 py-6">
                  Get VAT Support
                </Button>
              </Link>
            </div>

            <div>
              <img
                src="https://images.unsplash.com/photo-1618044733300-9472054094ee"
                alt="VAT return preparation and compliance"
                className="rounded-2xl shadow-lg w-full h-auto"
              />
            </div>
          </div>

          <div className="mt-20">
            <h2 className="text-3xl font-bold text-foreground mb-8" style={{ letterSpacing: '-0.02em', textWrap: 'balance' }}>
              Complete VAT management
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <Card key={index} className="border-2">
                  <CardContent className="p-6 flex items-start space-x-4">
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-base leading-relaxed">{benefit}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default VatReturnPage;
