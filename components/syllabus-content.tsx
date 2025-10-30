'use client';

import { useLanguage } from '@/components/language-provider';
import { Card } from '@/components/ui/card';
import { BookOpen, Code2 } from 'lucide-react';

export function SyllabusContent() {
  const { t } = useLanguage();

  const weeks = Array.from({ length: 8 }, (_, i) => i + 1);

  return (
    <section className="py-20 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              {t('curriculum.title')}
            </h1>
            <p className="text-muted-foreground">
              Detailed 8-week curriculum covering everything you need to become an AI Engineer
            </p>
          </div>

          <div className="space-y-6">
            {weeks.map((week) => (
              <Card key={week} className="p-6">
                <div className="mb-6">
                  <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-2">
                    Week {week}
                  </div>
                  <h2 className="text-2xl font-bold mt-2">
                    {t(`curriculum.week${week}.title`)}
                  </h2>
                </div>
                
                <div className="space-y-4">
                  {/* Study Topics Section */}
                  <div className="flex gap-3">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center">
                        <BookOpen className="h-5 w-5 text-blue-600" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-base text-gray-900 mb-2">
                        {t('curriculum.studyLabel')}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {t(`curriculum.week${week}.study`)}
                      </p>
                    </div>
                  </div>

                  {/* Project Section */}
                  <div className="flex gap-3">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center">
                        <Code2 className="h-5 w-5 text-green-600" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-base text-gray-900 mb-2">
                        {t('curriculum.projectLabel')}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {t(`curriculum.week${week}.project`)}
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

