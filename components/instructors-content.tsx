'use client';

import { useLanguage } from '@/components/language-provider';
import { Card } from '@/components/ui/card';
import Image from 'next/image';

export function InstructorsContent() {
  const { t } = useLanguage();

  return (
    <section className="py-20 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            {t('instructors.title')}
          </h1>
        </div>

        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          {/* Anh Pham */}
          <Card className="p-8">
            <div className="flex flex-col items-center text-center mb-6">
              <div className="relative w-32 h-32 rounded-full overflow-hidden mb-4 bg-muted">
                {/* Placeholder for photo - replace with actual image */}
                <div className="w-full h-full flex items-center justify-center text-4xl font-bold text-primary">
                  AP
                </div>
              </div>
              <h2 className="text-2xl font-bold">{t('instructors.anh.name')}</h2>
              <p className="text-muted-foreground">{t('instructors.anh.title')}</p>
            </div>
            <p className="text-muted-foreground text-center">
              {t('instructors.anh.bio')}
            </p>
          </Card>

          {/* Khang Cu */}
          <Card className="p-8">
            <div className="flex flex-col items-center text-center mb-6">
              <div className="relative w-32 h-32 rounded-full overflow-hidden mb-4 bg-muted">
                {/* Placeholder for photo - replace with actual image */}
                <div className="w-full h-full flex items-center justify-center text-4xl font-bold text-primary">
                  KC
                </div>
              </div>
              <h2 className="text-2xl font-bold">{t('instructors.khang.name')}</h2>
              <p className="text-muted-foreground">{t('instructors.khang.title')}</p>
            </div>
            <p className="text-muted-foreground text-center">
              {t('instructors.khang.bio')}
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}

