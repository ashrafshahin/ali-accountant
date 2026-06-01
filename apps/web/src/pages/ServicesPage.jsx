
import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileText, BookOpen, Building2, Users, TrendingUp, PieChart, Receipt, Calculator, ArrowRight } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

const ServicesPage = () => {
  const services = [
    {
      icon: FileText,
      title: 'Accounts Preparation',
      slug: 'accounts-preparation',
      description: 'Professional preparation of annual accounts and financial statements that comply with UK standards and Companies House.',
    },
    {
      icon: BookOpen,
      title: 'Bookkeeping',
      slug: 'bookkeeping',
      description: 'Accurate, timely recording of all financial transactions, ensuring your books are always up-to-date and audit-ready.',
    },
    {
      icon: Building2,
      title: 'Company Formation',
      slug: 'company-formation',
      description: 'Complete company registration services including incorporation, director appointments, and initial compliance setup.',
    },
    {
      icon: Users,
      title: 'Payroll & Pension',
      slug: 'payroll-pension',
      description: 'Comprehensive payroll processing and pension auto-enrolment services. We manage full compliance with HMRC regulations.',
    },
    {
      icon: TrendingUp,
      title: 'Tax Planning',
      slug: 'tax-planning',
      description: 'Strategic tax planning to minimize your liability while ensuring full compliance with current UK tax legislation.',
    },
    {
      icon: PieChart,
      title: 'Business Plan',
      slug: 'business-plan',
      description: 'Professional business plan preparation for startups, funding applications, and clear strategic business development.',
    },
    {
      icon: Receipt,
      title: 'VAT Return',
      slug: 'vat-return',
      description: 'Accurate VAT return preparation and submission. We help you stay completely compliant with HMRC MTD VAT regulations.',
    },
    {
      icon: Calculator,
      title: 'Tax Return',
      slug: 'tax-return',
      description: 'Expert preparation and filing of self-assessment tax returns for individuals and businesses, maximizing allowable deductions.',
    },
  ];

  return (
    <>
      <Helmet>
        <title>Our Services - Ali & Co Accountants</title>
        <meta name="description" content="Comprehensive accounting services including accounts preparation, bookkeeping, tax planning, payroll, VAT returns, and more. Professional support for your business." />
      </Helmet>

      <Header />

      {/* Hero Section */}
      <section className="py-20 md:py-28 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-extrabold text-foreground leading-tight mb-6" style={{ letterSpacing: '-0.02em', textWrap: 'balance' }}>
              Comprehensive Accounting Solutions
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              From foundational bookkeeping to advanced tax strategy, our services are structured to streamline your operations and foster sustainable growth.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card 
                  key={index} 
                  className="group flex flex-col h-full bg-card hover-lift border-muted-foreground/10 hover:border-primary/30 transition-all duration-300"
                >
                  <CardContent className="p-6 md:p-8 flex-grow">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                      <Icon className="h-7 w-7" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </CardContent>
                  <CardFooter className="p-6 md:p-8 pt-0 mt-auto">
                    <Link to={`/services/${service.slug}`} className="w-full">
                      <Button variant="ghost" className="w-full justify-between group-hover:bg-primary/5 group-hover:text-primary transition-colors duration-300">
                        <span>Learn More</span>
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ letterSpacing: '-0.02em', textWrap: 'balance' }}>
            Need a custom service package?
          </h2>
          <p className="text-lg md:text-xl text-primary-foreground/90 leading-relaxed mb-10 max-w-2xl mx-auto">
            Reach out to our accounting team to structure a tailored plan that exactly fits your business's financial requirements.
          </p>
          <Link to="/contact">
            <Button size="lg" variant="secondary" className="text-base font-semibold px-8 py-6 hover:scale-105 transition-all duration-300">
              Schedule a Consultation
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default ServicesPage;
