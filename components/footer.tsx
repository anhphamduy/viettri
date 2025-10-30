'use client';

import { useLanguage } from '@/components/language-provider';

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t bg-background py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          <div>
            <h3 className="text-lg font-bold mb-4">VietTri</h3>
            <p className="text-sm text-muted-foreground">
              AI Engineer Bootcamp by Anh Pham & Khang Cu
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#why-choose" className="text-muted-foreground hover:text-primary">{t('whyChoose.title')}</a></li>
              <li><a href="#curriculum" className="text-muted-foreground hover:text-primary">{t('curriculum.title')}</a></li>
              <li><a href="#faq" className="text-muted-foreground hover:text-primary">{t('faq.title')}</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="/apply" className="hover:text-primary">Apply Now</a></li>
              <li><a href="#info-session" className="hover:text-primary">Book Info Session</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} VietTri — AI Engineer Bootcamp. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

