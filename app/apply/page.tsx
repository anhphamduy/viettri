import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { ApplyForm } from '@/components/apply-form';

export default function ApplyPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1 py-20">
        <ApplyForm />
      </main>
      <Footer />
    </div>
  );
}

