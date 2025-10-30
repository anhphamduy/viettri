'use client';

import { useLanguage } from '@/components/language-provider';
import { Card } from '@/components/ui/card';
import { Sparkles, Code, Zap, Users, Briefcase, Globe } from 'lucide-react';

const icons = [Sparkles, Code, Zap, Users, Briefcase, Globe];

export function Benefits() {
  const { t } = useLanguage();

  const benefits = [
    { key: 'benefit1', icon: 0 },
    { key: 'benefit2', icon: 1 },
    { key: 'benefit3', icon: 2 },
    { key: 'benefit4', icon: 3 },
    { key: 'benefit5', icon: 4 },
    { key: 'benefit6', icon: 5 },
  ];

  return (
    <section id="why-choose" className="py-20 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {t('whyChoose.title')}
          </h2>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {benefits.map((benefit) => {
            const Icon = icons[benefit.icon];
            return (
              <Card key={benefit.key} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">
                    {t(`whyChoose.${benefit.key}.title`)}
                  </h3>
                </div>
                <p className="text-muted-foreground">
                  {t(`whyChoose.${benefit.key}.description`)}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

