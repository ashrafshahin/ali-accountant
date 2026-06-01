
import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle2 } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

const TaxReturnPage = () => {
  const benefits = [
    'Self-assessment tax return preparation',
    'Income tax calculation and optimization',
    'Capital gains tax reporting',
    'Rental income and property tax',
    'Dividend and investment income',
    'HMRC submission and deadline management',
  ];

  return (
    <>
      <Helmet>
        <title>Tax Return Services - Ali & Co Accountants</title>
        <meta name="description" content="Expert self-assessment tax return preparation and filing. Maximize deductions and ensure HMRC compliance." />
      </Helmet>

      <Header />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1515435187718-b41654581592"
                alt="Tax return preparation and filing"
                className="rounded-2xl shadow-lg w-full h-auto"
              />
            </div>

            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight mb-6" style={{ letterSpacing: '-0.02em', textWrap: 'balance' }}>
                Tax Return
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Filing your self-assessment tax return doesn't have to be stressful. Our expert tax return service handles all aspects of your personal tax affairs, from gathering information to calculating your liability and submitting to HMRC before the deadline.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed mb-8">
                We ensure you claim all allowable deductions and reliefs, minimizing your tax bill while maintaining full compliance. Whether you're self-employed, a company director, or have multiple income sources, we provide clear advice and accurate returns.
              </p>
              <Link to="/contact">
                <Button size="lg" className="text-base px-8 py-6">
                  File Your Return
                </Button>
              </Link>
            </div>
          </div>

          <div className="mt-20">
            <h2 className="text-3xl font-bold text-foreground mb-8" style={{ letterSpacing: '-0.02em', textWrap: 'balance' }}>
              Comprehensive tax return service
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

export default TaxReturnPage;
