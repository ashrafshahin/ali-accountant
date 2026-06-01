
import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle2 } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

const PayrollPensionPage = () => {
  const benefits = [
    'Complete payroll processing and PAYE administration',
    'Automatic pension auto-enrolment compliance',
    'RTI submissions to HMRC',
    'Payslip generation and distribution',
    'P60 and P45 preparation',
    'Workplace pension scheme management',
  ];

  return (
    <>
      <Helmet>
        <title>Payroll & Pension Services - Ali & Co Accountants</title>
        <meta name="description" content="Professional payroll and pension services. Complete PAYE administration, auto-enrolment compliance, and pension scheme management." />
      </Helmet>

      <Header />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1684563983781-ce52a026f139"
                alt="Payroll processing and pension management"
                className="rounded-2xl shadow-lg w-full h-auto"
              />
            </div>

            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight mb-6" style={{ letterSpacing: '-0.02em', textWrap: 'balance' }}>
                Payroll & Pension
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Managing payroll and pension obligations can be complex and time-consuming. Our comprehensive payroll service handles everything from calculating wages and deductions to submitting RTI returns to HMRC, ensuring you stay compliant with all employment tax regulations.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed mb-8">
                We also manage your workplace pension auto-enrolment obligations, including employee assessments, contribution calculations, and pension scheme administration. Our service gives you confidence that your employees are paid accurately and on time, every time.
              </p>
              <Link to="/contact">
                <Button size="lg" className="text-base px-8 py-6">
                  Discuss Your Needs
                </Button>
              </Link>
            </div>
          </div>

          <div className="mt-20">
            <h2 className="text-3xl font-bold text-foreground mb-8" style={{ letterSpacing: '-0.02em', textWrap: 'balance' }}>
              Complete payroll and pension support
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

export default PayrollPensionPage;
