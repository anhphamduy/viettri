'use client';

import { useState } from 'react';
import { useLanguage } from '@/components/language-provider';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { useRouter } from 'next/navigation';

export function ApplyForm() {
  const { t } = useLanguage();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    background: '',
    goals: '',
    cohortDate: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // TODO: Replace with actual Airtable/Google Sheets integration
      // For now, we'll use a simple fetch to a Next.js API route
      const response = await fetch('/api/apply', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        router.push('/thank-you');
      } else {
        throw new Error('Submission failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      // For development, still redirect to thank you page
      router.push('/thank-you');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
          {t('apply.title')}
        </h1>
        <p className="text-muted-foreground">
          Fill out the form below and we'll get back to you within 1-2 business days.
        </p>
      </div>

      <Card className="p-6 sm:p-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <Label htmlFor="name">{t('apply.form.name')}</Label>
            <Input
              id="name"
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>

          <div>
            <Label htmlFor="email">{t('apply.form.email')}</Label>
            <Input
              id="email"
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>

          <div>
            <Label htmlFor="phone">{t('apply.form.phone')}</Label>
            <Input
              id="phone"
              type="tel"
              required
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            />
          </div>

          <div>
            <Label htmlFor="background">{t('apply.form.background')}</Label>
            <Textarea
              id="background"
              required
              rows={4}
              placeholder="Tell us about your background (e.g., software developer, data scientist, student, etc.)"
              value={formData.background}
              onChange={(e) => setFormData({ ...formData, background: e.target.value })}
            />
          </div>

          <div>
            <Label htmlFor="goals">{t('apply.form.goals')}</Label>
            <Textarea
              id="goals"
              required
              rows={4}
              placeholder="What are your goals for this bootcamp?"
              value={formData.goals}
              onChange={(e) => setFormData({ ...formData, goals: e.target.value })}
            />
          </div>

          <div>
            <Label htmlFor="cohortDate">{t('apply.form.cohortDate')}</Label>
            <Input
              id="cohortDate"
              type="date"
              value={formData.cohortDate}
              onChange={(e) => setFormData({ ...formData, cohortDate: e.target.value })}
            />
          </div>

          <Button
            type="submit"
            size="lg"
            className="w-full bg-[#11A97D] hover:bg-[#11A97D]/90"
            disabled={loading}
          >
            {loading ? 'Submitting...' : t('apply.form.submit')}
          </Button>
        </form>
      </Card>
    </div>
  );
}

