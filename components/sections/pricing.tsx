'use client';

import { useLanguage } from '@/components/language-provider';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Check } from 'lucide-react';

export function Pricing() {
  const { t } = useLanguage();

  return (
    <section id="pricing" className="py-20 sm:py-24 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {t('pricing.title')}
          </h2>
        </div>
        <div className="mx-auto max-w-2xl">
          <Card className="p-8 lg:p-12">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">
                10,999,999 <span className="text-lg font-normal">VND</span>
              </div>
              <p className="text-muted-foreground mb-8">{t('pricing.tuition')}</p>
              
              <div className="space-y-4 mb-8 text-left">
                <div className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-[#11A97D] mt-0.5 flex-shrink-0" />
                  <p className="text-sm">{t('pricing.earlyBird')}</p>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-[#11A97D] mt-0.5 flex-shrink-0" />
                  <p className="text-sm">{t('pricing.group')}</p>
                </div>
              </div>

              <Link href="/apply">
                <Button size="lg" className="w-full sm:w-auto bg-[#11A97D] hover:bg-[#11A97D]/90">
                  {t('hero.ctaApply')}
                </Button>
              </Link>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}

