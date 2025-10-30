'use client';

import { useLanguage } from '@/components/language-provider';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle2, Mail, Calendar, BookOpen } from 'lucide-react';

export function ThankYouContent() {
  const { t } = useLanguage();

  const steps = [
    { key: 'step1', icon: Mail },
    { key: 'step2', icon: Calendar },
    { key: 'step3', icon: BookOpen },
  ];

  return (
    <section className="py-20 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl">
        <Card className="p-8 sm:p-12 text-center">
          <div className="flex justify-center mb-6">
            <CheckCircle2 className="h-16 w-16 text-[#11A97D]" />
          </div>
          
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            {t('thankYou.title')}
          </h1>
          
          <p className="text-muted-foreground mb-12 text-lg">
            {t('thankYou.message')}
          </p>

          <div className="text-left mb-8">
            <h2 className="text-xl font-semibold mb-6">{t('thankYou.nextSteps')}</h2>
            <div className="space-y-4">
              {steps.map((step) => {
                const Icon = step.icon;
                return (
                  <div key={step.key} className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-primary/10 mt-1">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <p className="text-muted-foreground flex-1 pt-2">
                      {t(`thankYou.${step.key}`)}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Optional Calendly link - update with actual link */}
          <div className="mt-8 pt-8 border-t">
            <Button asChild className="bg-[#11A97D] hover:bg-[#11A97D]/90">
              <a href="https://calendly.com/viettri/info-session" target="_blank" rel="noopener noreferrer">
                Book an Info Session
              </a>
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
}

