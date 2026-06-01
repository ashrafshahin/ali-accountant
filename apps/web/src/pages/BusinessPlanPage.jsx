
import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle2 } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

const BusinessPlanPage = () => {
  const benefits = [
    'Comprehensive market and competitor analysis',
    'Financial projections and cash flow forecasts',
    'Executive summary and business strategy',
    'Funding application support',
    'Risk assessment and mitigation planning',
    'Professional presentation and formatting',
  ];

  return (
    <>
      <Helmet>
        <title>Business Plan Services - Ali & Co Accountants</title>
        <meta name="description" content="Professional business plan preparation for startups and funding applications. Expert financial projections and strategic planning." />
      </Helmet>

      <Header />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1593630363221-fd977445c8e7"
                alt="Business planning and strategic development"
                className="rounded-2xl shadow-lg w-full h-auto"
              />
            </div>

            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight mb-6" style={{ letterSpacing: '-0.02em', textWrap: 'balance' }}>
                Business Plan
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                A well-crafted business plan is essential for securing funding, attracting investors, and guiding your business growth. Our professional business plan service combines financial expertise with strategic insight to create compelling, investor-ready documents.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed mb-8">
                Whether you're launching a startup, seeking bank finance, or planning expansion, we develop detailed business plans with realistic financial projections, market analysis, and clear growth strategies that demonstrate the viability and potential of your business.
              </p>
              <Link to="/contact">
                <Button size="lg" className="text-base px-8 py-6">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>

          <div className="mt-20">
            <h2 className="text-3xl font-bold text-foreground mb-8" style={{ letterSpacing: '-0.02em', textWrap: 'balance' }}>
              What we include in your business plan
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

export default BusinessPlanPage;
