
import { useEffect, useState } from "react"
import Navbar from "./layout/Navbar"
import About from "./sections/About"
import Contact from "./sections/Contact"
import Experience from "./sections/Experience"
import Hero from "./sections/Hero"
import Researchs from "./sections/Researchs"
import axios from "axios"


function App() {
  const [researchs, setResearchs] = useState([]);
  const [experiences, setExperiences] = useState([]);
  const [hIndex, setHIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  const scholarId = "suWxEcoAAAAJ";
  const userId = "699050aa2890f5692974b86f";
  
  // Perhatikan penambahan VITE_ di sini
  const API = import.meta.env.VITE_API_URL; 

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        // Gunakan Promise.all agar fetch berjalan paralel (lebih cepat)
        const [expRes, resRes, scholarRes] = await Promise.all([
          axios.get(`${API}/fzmilky/exp/${userId}`),
          axios.get(`${API}/fzmilky/research/${userId}`),
          axios.get(`${API}/scholarhindex/${scholarId}`)
        ]);

        setExperiences(expRes.data);
        setResearchs(resRes.data);
        setHIndex(scholarRes.data.hIndex);
      } catch (error) {
        console.error("Error fetching data:", error);
        // Fallback jika API scholar mati
        setHIndex(8); 
      } finally {
        setLoading(false);
      }
    };

    if (userId && API) fetchData();
  }, [userId, scholarId, API]);

  // Hitung jumlah data untuk dikirim ke About
  const experienceCount = experiences.length;
  const researchCount = researchs.length;

  return (
    <>
      <div className="min-h-screen overflow-hidden">
        <Navbar />
        <main>
          <Hero />
          <About 
            // Sesuaikan prop name dengan yang ada di About.jsx
            experienceCount={experienceCount} 
            researchCount={researchCount}
            hIndex={hIndex}
          />
          <Experience experiences={experiences} loading={loading} />
          <Researchs researchs={researchs} loading={loading} />
          <Contact />
        </main>
      </div>
    </>
  );
}

export default App
