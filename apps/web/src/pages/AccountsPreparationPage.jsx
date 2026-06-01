
import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle2 } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

const AccountsPreparationPage = () => {
  const benefits = [
    'Compliance with UK GAAP and FRS 102 standards',
    'Accurate financial statements for Companies House filing',
    'Detailed profit and loss accounts and balance sheets',
    'Director\'s reports and supporting documentation',
    'Year-end adjustments and reconciliations',
    'Expert advice on financial performance',
  ];

  return (
    <>
      <Helmet>
        <title>Accounts Preparation Services - Ali & Co Accountants</title>
        <meta name="description" content="Professional accounts preparation services ensuring compliance with UK accounting standards. Expert preparation of annual accounts and financial statements." />
      </Helmet>

      <Header />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight mb-6" style={{ letterSpacing: '-0.02em', textWrap: 'balance' }}>
                Accounts Preparation
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Our accounts preparation service ensures your annual accounts are prepared accurately and in full compliance with UK accounting standards. We handle everything from initial bookkeeping review to final submission to Companies House, giving you peace of mind that your statutory obligations are met.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed mb-8">
                Whether you're a small limited company or a larger enterprise, we provide tailored accounts preparation that reflects your business's true financial position. Our experienced team ensures all financial statements are clear, accurate, and ready for filing within the required deadlines.
              </p>
              <Link to="/contact">
                <Button size="lg" className="text-base px-8 py-6">
                  Request a Quote
                </Button>
              </Link>
            </div>

            <div>
              <img
                src="https://images.unsplash.com/photo-1618044733300-9472054094ee"
                alt="Professional accountant preparing financial statements"
                className="rounded-2xl shadow-lg w-full h-auto"
              />
            </div>
          </div>

          <div className="mt-20">
            <h2 className="text-3xl font-bold text-foreground mb-8" style={{ letterSpacing: '-0.02em', textWrap: 'balance' }}>
              What's included in our service
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

export default AccountsPreparationPage;
