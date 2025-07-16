import Navbar from '@/components/Navbar';
import Intro from '@/components/Intro';
import About from '@/components/About';
import Projects from '@/components/Projects';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-0">
        <Intro /> 
        <About />
        <Projects />
      </main>
    </>
  );
}
