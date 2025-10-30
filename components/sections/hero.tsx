'use client';

import { useLanguage } from '@/components/language-provider';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden py-20 sm:py-32 lg:py-40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl bg-gradient-to-r from-primary via-[#2E8BFE] to-[#11A97D] bg-clip-text text-transparent">
            {t('hero.title')}
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground sm:text-xl md:text-2xl">
            {t('hero.subtitle')}
          </p>
          <div className="mt-10 flex items-center justify-center gap-4 flex-wrap">
            <Link href="/apply">
              <Button size="lg" className="bg-[#11A97D] hover:bg-[#11A97D]/90 text-white text-base px-8 py-6">
                {t('hero.ctaApply')}
              </Button>
            </Link>
          </div>
        </div>
      </div>
      {/* Decorative gradient */}
      <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
        <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#2E8BFE] to-[#11A97D] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" />
      </div>
    </section>
  );
}

