'use client';

import { useLanguage } from '@/components/language-provider';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export function FAQ() {
  const { t } = useLanguage();

  const questions = [1, 2, 3, 4, 6, 7, 8, 9, 10];

  return (
    <section id="faq" className="py-20 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              {t('faq.title')}
            </h2>
          </div>
          <Accordion type="single" collapsible className="w-full">
            {questions.map((q) => (
              <AccordionItem key={q} value={`q${q}`}>
                <AccordionTrigger className="text-left font-semibold">
                  {t(`faq.q${q}.question`)}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {t(`faq.q${q}.answer`)}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}

