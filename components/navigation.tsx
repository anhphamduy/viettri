'use client';

import Link from 'next/link';
import { useLanguage } from './language-provider';
import { Button } from './ui/button';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Navigation() {
  const { locale, setLocale, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-[#2E8BFE] bg-clip-text text-transparent">
              VietTri
            </span>
            <span className="text-sm text-muted-foreground">AI Engineer Bootcamp</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-sm font-medium hover:text-primary transition-colors">
              {t('nav.home')}
            </Link>
            <Link href="/instructors" className="text-sm font-medium hover:text-primary transition-colors">
              {t('nav.instructors')}
            </Link>
            <Link href="/syllabus" className="text-sm font-medium hover:text-primary transition-colors">
              {t('nav.syllabus')}
            </Link>
            <Link href="/apply">
              <Button className="bg-[#11A97D] hover:bg-[#11A97D]/90">
                {t('nav.apply')}
              </Button>
            </Link>
            
            {/* Language Toggle */}
            <div className="flex items-center gap-2 border rounded-md p-1">
              <button
                onClick={() => setLocale('en')}
                className={`px-2 py-1 text-xs rounded transition-colors ${
                  locale === 'en' 
                    ? 'bg-primary text-primary-foreground' 
                    : 'hover:bg-muted'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLocale('vi')}
                className={`px-2 py-1 text-xs rounded transition-colors ${
                  locale === 'vi' 
                    ? 'bg-primary text-primary-foreground' 
                    : 'hover:bg-muted'
                }`}
              >
                VI
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <div className="flex items-center gap-2 border rounded-md p-1">
              <button
                onClick={() => setLocale('en')}
                className={`px-2 py-1 text-xs rounded transition-colors ${
                  locale === 'en' 
                    ? 'bg-primary text-primary-foreground' 
                    : 'hover:bg-muted'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLocale('vi')}
                className={`px-2 py-1 text-xs rounded transition-colors ${
                  locale === 'vi' 
                    ? 'bg-primary text-primary-foreground' 
                    : 'hover:bg-muted'
                }`}
              >
                VI
              </button>
            </div>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t pb-4 pt-4">
            <div className="flex flex-col gap-4">
              <Link 
                href="/" 
                className="text-sm font-medium hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t('nav.home')}
              </Link>
              <Link 
                href="/instructors" 
                className="text-sm font-medium hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t('nav.instructors')}
              </Link>
              <Link 
                href="/syllabus" 
                className="text-sm font-medium hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t('nav.syllabus')}
              </Link>
              <Link href="/apply" onClick={() => setMobileMenuOpen(false)}>
                <Button className="w-full bg-[#11A97D] hover:bg-[#11A97D]/90">
                  {t('nav.apply')}
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

