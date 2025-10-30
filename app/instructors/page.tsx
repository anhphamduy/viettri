import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { InstructorsContent } from '@/components/instructors-content';

export default function InstructorsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        <InstructorsContent />
      </main>
      <Footer />
    </div>
  );
}

