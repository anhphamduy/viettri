'use client';

import { useLanguage } from '@/components/language-provider';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { BookOpen, Code2 } from 'lucide-react';

export function Curriculum() {
  const { t } = useLanguage();

  const weeks = Array.from({ length: 8 }, (_, i) => i + 1);

  return (
    <section id="curriculum" className="py-20 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              {t('curriculum.title')}
            </h2>
          </div>
          <Accordion type="single" collapsible className="w-full">
            {weeks.map((week) => (
              <AccordionItem key={week} value={`week-${week}`}>
                <AccordionTrigger className="text-left font-semibold hover:no-underline">
                  {t(`curriculum.week${week}.title`)}
                </AccordionTrigger>
                <AccordionContent className="pt-4">
                  <div className="space-y-4">
                    {/* Study Topics Section */}
                    <div className="flex gap-3">
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center">
                          <BookOpen className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-sm text-gray-900 dark:text-gray-100 mb-1.5">
                          {t('curriculum.studyLabel')}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {t(`curriculum.week${week}.study`)}
                        </p>
                      </div>
                    </div>

                    {/* Project Section */}
                    <div className="flex gap-3">
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center">
                          <Code2 className="h-5 w-5 text-green-600 dark:text-green-400" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-sm text-gray-900 dark:text-gray-100 mb-1.5">
                          {t('curriculum.projectLabel')}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {t(`curriculum.week${week}.project`)}
                        </p>
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}

