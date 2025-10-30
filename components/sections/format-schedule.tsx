'use client';

import { useLanguage } from '@/components/language-provider';
import { Card } from '@/components/ui/card';
import { Calendar, Video, Clock } from 'lucide-react';

export function FormatSchedule() {
  const { t } = useLanguage();

  return (
    <section id="format" className="py-20 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {t('format.title')}
          </h2>
        </div>
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-3 lg:mx-0 lg:max-w-none">
          <Card className="p-6 text-center">
            <Calendar className="h-10 w-10 mx-auto mb-4 text-primary" />
            <h3 className="font-semibold mb-2">{t('format.classes')}</h3>
          </Card>
          <Card className="p-6 text-center">
            <Video className="h-10 w-10 mx-auto mb-4 text-primary" />
            <h3 className="font-semibold mb-2">{t('format.live')}</h3>
          </Card>
          <Card className="p-6 text-center">
            <Clock className="h-10 w-10 mx-auto mb-4 text-primary" />
            <h3 className="font-semibold mb-2">{t('format.hours')}</h3>
          </Card>
        </div>
      </div>
    </section>
  );
}

