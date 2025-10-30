'use client';

import { useLanguage } from '@/components/language-provider';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function FooterCTA() {
  const { t } = useLanguage();

  return (
    <section className="sticky bottom-0 z-40 w-full border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 md:hidden">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <p className="text-sm font-medium">{t('footer.cta')}</p>
          <Link href="/apply">
            <Button className="bg-[#11A97D] hover:bg-[#11A97D]/90">
              {t('footer.apply')}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

