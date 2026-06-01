
import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle2 } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

const TaxPlanningPage = () => {
  const benefits = [
    'Strategic tax efficiency planning',
    'Corporation tax optimization',
    'Capital gains tax planning',
    'Inheritance tax advice',
    'Tax relief and allowance maximization',
    'Year-round proactive tax guidance',
  ];

  return (
    <>
      <Helmet>
        <title>Tax Planning Services - Ali & Co Accountants</title>
        <meta name="description" content="Expert tax planning to minimize your tax liability legally. Strategic advice on corporation tax, capital gains, and tax efficiency." />
      </Helmet>

      <Header />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight mb-6" style={{ letterSpacing: '-0.02em', textWrap: 'balance' }}>
                Tax Planning
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Effective tax planning is essential for minimizing your tax liability while ensuring full compliance with UK tax law. Our proactive tax planning service helps you structure your finances efficiently, taking advantage of all available reliefs and allowances.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed mb-8">
                We work with you throughout the year to identify tax-saving opportunities, from optimizing your salary and dividend mix to planning capital investments and business restructuring. Our strategic approach ensures you pay the right amount of tax, not a penny more.
              </p>
              <Link to="/contact">
                <Button size="lg" className="text-base px-8 py-6">
                  Schedule a Consultation
                </Button>
              </Link>
            </div>

            <div>
              <img
                src="https://images.unsplash.com/photo-1551135049-8a33b5883817"
                alt="Tax planning strategy and financial optimization"
                className="rounded-2xl shadow-lg w-full h-auto"
              />
            </div>
          </div>

          <div className="mt-20">
            <h2 className="text-3xl font-bold text-foreground mb-8" style={{ letterSpacing: '-0.02em', textWrap: 'balance' }}>
              Strategic tax planning services
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

export default TaxPlanningPage;
