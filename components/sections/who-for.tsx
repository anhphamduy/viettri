'use client';

import { useLanguage } from '@/components/language-provider';
import { Card } from '@/components/ui/card';
import { Laptop2, Database, GraduationCap, ArrowRightLeft } from 'lucide-react';

const icons = [Laptop2, Database, GraduationCap, ArrowRightLeft];

export function WhoFor() {
  const { t } = useLanguage();

  const categories = [
    { key: 'devs', icon: 0 },
    { key: 'data', icon: 1 },
    { key: 'students', icon: 2 },
    { key: 'switchers', icon: 3 },
  ];

  return (
    <section id="who-for" className="py-20 sm:py-24 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {t('whoFor.title')}
          </h2>
        </div>
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-4">
          {categories.map((category) => {
            const Icon = icons[category.icon];
            return (
              <Card key={category.key} className="p-6 text-center hover:shadow-lg transition-shadow">
                <Icon className="h-10 w-10 mx-auto mb-4 text-primary" />
                <p className="text-sm text-muted-foreground">
                  {t(`whoFor.${category.key}`)}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

