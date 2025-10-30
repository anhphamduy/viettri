import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { ThankYouContent } from '@/components/thank-you-content';

export default function ThankYouPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        <ThankYouContent />
      </main>
      <Footer />
    </div>
  );
}

