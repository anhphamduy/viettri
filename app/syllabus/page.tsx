import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { SyllabusContent } from '@/components/syllabus-content';

export default function SyllabusPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        <SyllabusContent />
      </main>
      <Footer />
    </div>
  );
}

