
import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Star, Zap, DollarSign, Users } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import ImageCarousel from '@/components/ImageCarousel.jsx';

const HomePage = () => {
  const valueProps = [
    {
      icon: Zap,
      title: 'Flexible Solutions',
      description: 'Tailored accounting services that adapt to your business needs, whether you\'re a startup or established enterprise.',
    },
    {
      icon: DollarSign,
      title: 'Affordable Services',
      description: 'Competitive pricing without compromising quality. Get professional accounting support that fits your budget.',
    },
    {
      icon: Users,
      title: 'Personalized Support',
      description: 'Direct access to experienced accountants who understand your business and provide dedicated, one-on-one guidance.',
    },
  ];

  const reviews = [
    {
      name: 'Shipu Islam',
      rating: 5,
      text: 'Excellent service and very professional team. They helped me with my tax returns and made the whole process smooth and stress-free. Highly recommended!',
    },
    {
      name: 'Istiak Hossain',
      rating: 5,
      text: 'Ali & Co have been managing my business accounts for two years now. Their attention to detail and proactive advice has been invaluable to my business growth.',
    },
    {
      name: 'Muhammad Butt',
      rating: 5,
      text: 'Very knowledgeable and responsive accountants. They always go the extra mile to ensure everything is done correctly and on time. Great value for money.',
    },
    {
      name: 'Kamrul Hasan',
      rating: 5,
      text: 'I switched to Ali & Co last year and it was the best decision. They are friendly, efficient, and always available to answer my questions. Truly professional service.',
    },
  ];

  return (
    <>
      <Helmet>
        <title>Ali & Co Accountants - Smart Accounting, Smart Business</title>
        <meta name="description" content="Professional accounting services in Luton. Expert tax planning, bookkeeping, payroll, and business advisory services tailored to your needs." />
      </Helmet>

      <Header />

      {/* Main Image Carousel */}
      <ImageCarousel />
  

      {/* Value Propositions */}
      <section className="py-24 bg-black/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" style={{ letterSpacing: '-0.02em', textWrap: 'balance' }}>
              Why choose Ali & Co Accountants
            </h2>
            <h3 className='text-2xl font-bold my-3'>Your Financial Partner</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              At Ali & Co Accountants, we make managing your finances easy. Whether you need help with personal taxes or business accounts, we’re here to guide you and take the stress out of the process.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {valueProps.map((prop, index) => {
              const Icon = prop.icon;
              return (
                <Card
                  key={index}
                  className={`hover-lift ${
                    index === 0
                      ? 'shadow-lg border-primary/20'
                      : index === 1
                      ? 'bg-muted/40 border-muted-foreground/10'
                      : 'bg-primary/5 border-primary/10'
                  }`}
                >
                  <CardContent className="p-8">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary text-primary-foreground mb-6">
                      <Icon className="h-7 w-7" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-foreground">{prop.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{prop.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Hero Section Content (Positioned Below Carousel) */}
      <section className="relative bg-blue-800/80 text-primary-foreground py-16 md:py-24">
        <div className="container m-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6" style={{ letterSpacing: '-0.02em', textWrap: 'balance' }}>
            Smart Accounting, Smart Business
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/90 leading-relaxed mb-10 max-w-2xl mx-auto">
            Professional accounting services designed to help your business thrive. From tax planning to bookkeeping, we provide the expertise you need to succeed.
          </p>
          <Link to="/contact">
            <Button size="lg" variant="secondary" className="text-base font-semibold px-8 py-6 hover:scale-105 transition-all duration-300">
              Get in Touch
            </Button>
          </Link>
        </div>
      </section>

      {/* Google Reviews */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" style={{ letterSpacing: '-0.02em', textWrap: 'balance' }}>
              What our clients say
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Don't just take our word for it. Here's what our satisfied clients have to say about our services.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <Carousel className="w-full" opts={{ align: "start" }}>
              <CarouselContent>
                {reviews.map((review, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2 pl-4">
                    <Card className="h-full border-border bg-card">
                      <CardContent className="p-8 flex flex-col h-full">
                        <div className="flex mb-4">
                          {[...Array(review.rating)].map((_, i) => (
                            <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                        <p className="text-lg leading-relaxed text-foreground mb-6 flex-grow">
                          "{review.text}"
                        </p>
                        <p className="font-semibold text-foreground">{review.name}</p>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-center gap-4 mt-8">
                <CarouselPrevious className="relative inset-0 translate-y-0" />
                <CarouselNext className="relative inset-0 translate-y-0" />
              </div>
            </Carousel>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-24 bg-blue-800/80 text-primary-foreground relative overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-[.15] mix-blend-overlay pointer-events-none bg-[url('https://images.unsplash.com/photo-1551135049-8a33b5883817')] bg-cover bg-center" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ letterSpacing: '-0.02em', textWrap: 'balance' }}>
            Ready to take your business to the next level?
          </h2>
          <p className="text-lg md:text-xl leading-relaxed mb-10 max-w-2xl mx-auto text-primary-foreground/90">
            Get in touch with our team today and discover how we can help your business succeed.
          </p>
          <Link to="/contact">
            <Button size="lg" variant="secondary" className="text-base font-semibold px-8 py-6 hover:scale-105 transition-all duration-300">
              Contact Us Today
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default HomePage;
