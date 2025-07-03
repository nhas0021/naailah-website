import Navbar from '@/components/Navbar'; // adjust path if needed

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-20"> {/* Add padding to offset sticky navbar */}
        {/* Your sections: About, Experience, etc. */}
      </main>
    </>
  );
}
