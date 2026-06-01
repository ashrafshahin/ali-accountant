
import React from 'react';
import { Helmet } from 'react-helmet';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Building2, FileText, Newspaper, TrendingUp, BookOpen, Briefcase } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

const NewsResourcesPage = () => {
  const resources = [
    {
      icon: Building2,
      title: 'HM Revenue & Customs',
      description: 'Official UK tax authority providing guidance on tax obligations, filing deadlines, and compliance requirements.',
      url: 'https://www.gov.uk/government/organisations/hm-revenue-customs',
    },
    {
      icon: FileText,
      title: 'Companies House',
      description: 'Register and file company information, access company records, and stay compliant with statutory filing requirements.',
      url: 'https://www.gov.uk/government/organisations/companies-house',
    },
    {
      icon: Building2,
      title: 'GOV.UK',
      description: 'Central government portal for business guidance, regulations, and official announcements affecting UK businesses.',
      url: 'https://www.gov.uk',
    },
    {
      icon: Newspaper,
      title: 'BBC News',
      description: 'Latest business news, economic updates, and market analysis from the BBC\'s trusted news service.',
      url: 'https://www.bbc.co.uk/news/business',
    },
    {
      icon: BookOpen,
      title: 'Tax Adviser Magazine',
      description: 'Professional insights on tax planning, legislation changes, and best practices from the Chartered Institute of Taxation.',
      url: 'https://www.taxadvisermagazine.com',
    },
    {
      icon: TrendingUp,
      title: 'The Economist',
      description: 'Global business intelligence, economic analysis, and financial market insights for informed decision-making.',
      url: 'https://www.economist.com',
    },
    {
      icon: Briefcase,
      title: 'PwC',
      description: 'Industry insights, tax updates, and business advisory resources from one of the Big Four accounting firms.',
      url: 'https://www.pwc.co.uk',
    },
    {
      icon: Briefcase,
      title: 'Deloitte',
      description: 'Professional services insights, industry trends, and regulatory updates from Deloitte\'s expert teams.',
      url: 'https://www2.deloitte.com/uk',
    },
    {
      icon: Briefcase,
      title: 'KPMG',
      description: 'Audit, tax, and advisory insights with comprehensive coverage of business and regulatory developments.',
      url: 'https://home.kpmg/uk',
    },
    {
      icon: Briefcase,
      title: 'Ernst & Young',
      description: 'Global perspectives on tax, assurance, and advisory services with practical business guidance.',
      url: 'https://www.ey.com/en_uk',
    },
  ];

  return (
    <>
      <Helmet>
        <title>News & Resources - Ali & Co Accountants</title>
        <meta name="description" content="Essential business resources and news sources. Access HMRC, Companies House, industry publications, and professional insights." />
      </Helmet>

      <Header />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight mb-6" style={{ letterSpacing: '-0.02em', textWrap: 'balance' }}>
              News & Resources
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Stay informed with essential business resources, regulatory updates, and industry insights from trusted sources.
            </p>
          </div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources.map((resource, index) => {
              const Icon = resource.icon;
              return (
                <Card key={index} className="flex flex-col h-full hover:shadow-lg transition-all duration-200">
                  <CardContent className="p-6 flex-grow">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary mb-4">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-lg font-semibold mb-3">{resource.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{resource.description}</p>
                  </CardContent>
                  <CardFooter className="p-6 pt-0 mt-auto">
                    <a href={resource.url} target="_blank" rel="noopener noreferrer" className="w-full">
                      <Button variant="outline" className="w-full">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Visit Website
                      </Button>
                    </a>
                  </CardFooter>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default NewsResourcesPage;
