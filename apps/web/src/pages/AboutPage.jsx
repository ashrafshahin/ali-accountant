
import React from 'react';
import { Helmet } from 'react-helmet';
import { Card, CardContent } from '@/components/ui/card';
import { Award } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

const AboutPage = () => {
  const teamMembers = [
    {
      name: 'Maya Chen',
      title: 'Senior Accountant',
      image: 'https://images.unsplash.com/photo-1493882552576-fce827c6161e',
    },
    {
      name: 'Raj Patel',
      title: 'Tax Specialist',
      image: 'https://images.unsplash.com/photo-1519515610653-d54c776c9901',
    },
    {
      name: 'Lucia Torres',
      title: 'Bookkeeping Manager',
      image: 'https://images.unsplash.com/photo-1479800800845-03752b6188fa',
    },
    {
      name: 'Kwame Asante',
      title: 'Financial Advisor',
      image: 'https://images.unsplash.com/photo-1566833546763-672775492199',
    },
    {
      name: 'Anika Bergström',
      title: 'Compliance Officer',
      image: 'https://images.unsplash.com/photo-1640163561346-7778a2edf353',
    },
    {
      name: 'David O\'Connor',
      title: 'Business Consultant',
      image: 'https://images.unsplash.com/photo-1690264697065-33256aa3729b',
    },
  ];

  return (
    <>
      <Helmet>
        <title>About Us - Ali & Co Accountants</title>
        <meta name="description" content="Learn about Ali & Co Accountants. Professional accounting services with IFA accreditation, committed to exceeding client expectations." />
      </Helmet>

      <Header />

      {/* Hero Section */}
      <section className="py-20 md:py-28 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-extrabold text-foreground leading-tight mb-6" style={{ letterSpacing: '-0.02em', textWrap: 'balance' }}>
              About Ali & Co Accountants
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Your trusted partner for professional, comprehensive accounting and advisory services in Luton and across the UK.
            </p>
          </div>
        </div>
      </section>

      {/* Managing Director's Message */}
      <section className="py-24 bg-background border-b border-border/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* MD Portrait */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/5]">
                <img
                  src="https://horizons-cdn.hostinger.com/bbf9a6b9-e14d-4d08-9966-94eab6aaa897/769a2eb0f7d7c7fa260eab7b3bcd96b5.jpg"
                  alt="Managing Director - Ali & Co Accountants"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            {/* MD Message Text */}
            <div className="lg:col-span-7">
              <h2 className="text-sm font-bold tracking-widest uppercase text-primary mb-3">
                Managing Director's Message
              </h2>
              <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-8" style={{ letterSpacing: '-0.02em', textWrap: 'balance' }}>
                A Commitment to Excellence
              </h3>
              
              <blockquote className="text-lg md:text-xl text-muted-foreground leading-relaxed border-l-4 border-primary pl-6 mb-8 italic">
                "Welcome to Ali & Co Accountants. I started this firm with a clear vision: to provide unparalleled financial guidance that actively empowers businesses to realize their true potential. We don't just balance the books; we seek to understand your long-term ambitions and proactively remove the financial friction standing in your way. Our success is fundamentally tied to yours, and every service we offer is delivered with transparency, precision, and a deep commitment to excellence."
              </blockquote>
              
              <div>
                <p className="text-xl font-bold text-foreground">Managing Director</p>
                <p className="text-base text-muted-foreground">Ali & Co Accountants</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Members Section */}
      <section className="py-24 bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-sm font-bold tracking-widest uppercase text-primary mb-3">Our People</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4" style={{ letterSpacing: '-0.02em', textWrap: 'balance' }}>
              Meet the Expert Team
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our experienced team of qualified professionals is dedicated to providing exceptional service and building strong, long-term relationships.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
            {teamMembers.map((member, index) => (
              <Card key={index} className="group overflow-hidden border-border bg-card hover-lift">
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <CardContent className="p-6 text-center">
                  <h4 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                    {member.name}
                  </h4>
                  <p className="text-sm font-medium text-muted-foreground mt-1">
                    {member.title}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Accreditation */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-10 text-center" style={{ letterSpacing: '-0.02em', textWrap: 'balance' }}>
              Professional Accreditation
            </h2>
            <Card className="border-border shadow-sm">
              <CardContent className="p-8 md:p-12">
                <div className="flex flex-col md:flex-row items-center md:items-start space-y-8 md:space-y-0 md:space-x-10">
                  <div className="flex h-24 w-24 items-center justify-center rounded-2xl bg-primary/10 text-primary flex-shrink-0">
                    <Award className="h-12 w-12" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-4">Institute of Financial Accountants (IFA)</h3>
                    <p className="text-base text-muted-foreground leading-relaxed mb-4">
                      We are proud members of the Institute of Financial Accountants, one of the UK's leading professional accountancy bodies. This membership demonstrates our commitment to maintaining the highest professional standards and staying current with the latest accounting practices and regulations.
                    </p>
                    <p className="text-base text-muted-foreground leading-relaxed">
                      Our IFA accreditation means you can trust that our services meet rigorous professional standards, and that we adhere to strict codes of ethics and conduct in all our client relationships.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default AboutPage;
