
import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle2 } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

const CompanyFormationPage = () => {
  const benefits = [
    'Complete company registration with Companies House',
    'Director and shareholder appointment',
    'Registered office address service',
    'Memorandum and Articles of Association',
    'Initial compliance and statutory registers',
    'Business bank account setup guidance',
  ];

  return (
    <>
      <Helmet>
        <title>Company Formation Services - Ali & Co Accountants</title>
        <meta name="description" content="Professional company formation services. Complete registration, compliance setup, and expert guidance to get your business started." />
      </Helmet>

      <Header />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight mb-6" style={{ letterSpacing: '-0.02em', textWrap: 'balance' }}>
                Company Formation
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Starting a new business? Our company formation service takes care of all the legal and administrative requirements to get your company registered and ready to trade. We handle the entire incorporation process, from choosing the right company structure to filing with Companies House.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed mb-8">
                We provide expert advice on company structure, share capital, and director responsibilities. Our team ensures all documentation is completed correctly and submitted promptly, so you can focus on building your business from day one.
              </p>
              <Link to="/contact">
                <Button size="lg" className="text-base px-8 py-6">
                  Start Your Company
                </Button>
              </Link>
            </div>

            <div>
              <img
                src="https://images.unsplash.com/photo-1695487562553-c71a77e6c656"
                alt="Business professionals discussing company formation"
                className="rounded-2xl shadow-lg w-full h-auto"
              />
            </div>
          </div>

          <div className="mt-20">
            <h2 className="text-3xl font-bold text-foreground mb-8" style={{ letterSpacing: '-0.02em', textWrap: 'balance' }}>
              What we handle for you
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

export default CompanyFormationPage;
