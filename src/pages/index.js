import Navbar from '@/components/Navbar';
import Intro from '@/components/Intro';
import About from '@/components/About';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-0">
        <Intro /> 
        <About />
      </main>
    </>
  );
}
