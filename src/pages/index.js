import Navbar from '@/components/Navbar';
import Intro from '@/components/Intro';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-0">
        <Intro /> 
      </main>
    </>
  );
}
