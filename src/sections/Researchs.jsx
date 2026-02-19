import React, { useState } from 'react';
import { FaArrowDown, FaArrowUp } from 'react-icons/fa6';

const Researchs = ({ researchs, loading }) => {
  
  
  const [limit, setLimit] = useState(5); // Default tampilkan 5

  

  if (loading) {
    return (
      <div className="text-center py-20 text-white/50 animate-pulse">
        Loading amazing work...
      </div>
    );
  }

  const formatDOI = (doi) => {
    if (!doi) return "#"; // Hindari error jika data kosong
  
    // Jika sudah diawali http atau https, langsung kembalikan
    if (doi.startsWith("http")) {
      return doi;
    }
  
    // Jika hanya ID (seperti 10.1016...), tambahkan prefix doi.org
    return `https://doi.org/${doi}`;
  };

  return (
    <section id='researchs' className='py-6 md:py-32 relative overflow-hidden'>
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className='text-center mx-auto max-w-3xl mb-16'>
          <span className='text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in'>
            Research & Publications
          </span>
          <h2 className='text-2xl md:text-4xl  font-bold mt-4 mb-6 text-secondary-foreground'>
            Works that 
            <span className='font-serif italic font-normal text-white'> {" "} make an impact</span>
          </h2>
          <p className='text-sm md:text-xl text-muted-foreground'>
            Kumpulan publikasi ilmiah dan hasil riset yang telah diterbitkan pada jurnal terakreditasi.
          </p>
        </div>

        {/* researchs Grid */}
        <div className='grid gap-8'>
        {researchs.length > 0 ? (
        <>
          {/* Kita potong array-nya di sini menggunakan slice(0, limit) */}
          {researchs.slice(0, limit).map((research, idx) => (
            <div 
              key={research._id || idx} 
              className='glass rounded-3xl overflow-hidden hover:scale-[1.01] transition-all duration-500 ease-in-out glow-border p-6 flex flex-col md:flex-row gap-8 items-center group'
              >
                {/* Visual Placeholder (Kiri) */}
                <div className='relative overflow-hidden h-40 w-full md:w-40 shrink-0 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-white/90 transition-colors'>
                {(() => {
                  const publishers = {
                    "Elsevier": { src: "/Elsevier.svg", class: "w-auto h-30 invert brightness-0 invert group-hover:invert-0 group-hover:brightness-100" },
                    "Springer": { src: "/springer-logo.png", class: "w-50 h-auto invert brightness-0 invert group-hover:invert-0 group-hover:brightness-100" },
                    "Taylor & Francis": { src: "/taylor_and_francis.png", class: "w-auto h-30 invert brightness-0 invert group-hover:invert-0 group-hover:brightness-100" }
                  };

                  const config = publishers[research.journal_publisher];

                  // Jika publisher tidak ada, tampilkan logo default atau teks nama publisher
                  return config ? (
                    <img src={config.src} alt={research.journal_publisher} className={config.class} />
                  ) : (
                    <span className="font-bold text-gray-500 text-center">{research.journal_name}</span>
                  );
                })()}
                  
                  
                  {/* Badge Tahun di pojok kiri atas */}
                  <div className='absolute top-3 left-3 bg-primary/20 backdrop-blur-md border border-primary/30 px-3 py-1 rounded-full text-[10px] font-bold text-primary'>
                    {research.journal_rank}
                  </div>
                </div>

                {/* Content Area (Kanan) */}
                <div className="flex-grow text-left w-full">
                  <div className="flex justify-between items-start gap-1 md:gap-4">
                    <div className="max-w-[85%]">
                      <h3 className='text-sm md:text-lg font-bold text-white mb-2 group-hover:text-primary transition-colors'>
                        {research.title_en}
                      </h3>
                      <p className='text-primary/80 font-medium text-sm mb-4 italic'>
                        {research.journal_name}
                      </p>
                      
                    </div>

                    {/* Tombol Link (Jika ada URL publikasi) */}
                    <a 
                      href={formatDOI(research.doi_link)}
                      target="_blank" 
                      rel="noopener noreferrer"
                      className='p-4 rounded-full glass hover:bg-white hover:text-black transition-all duration-300'
                    >
                      <FaArrowUp className='w-5 h-5 rotate-45'/>
                    </a>
                  </div>
                  
                  {/* Jika ada deskripsi atau abstrak singkat */}
                

                  {/* Tags Dinamis */}
                  <div className='flex flex-wrap gap-2 mt-6'>
                    <span className='px-4 py-1.5 text-[10px] uppercase tracking-widest rounded-full bg-white/5 border border-white/10 text-white/70'>
                      {research.journal_publisher}
                    </span>
                    <span className='px-4 py-1.5 text-[10px] uppercase tracking-widest rounded-full bg-white/5 border border-white/10 text-white/70'>
                      {research.year}
                    </span>
                  </div>
                </div>
              </div>
              ))}

              <div className="relative flex flex-col items-center mt-10">
                      
                      {/* Garis Horizontal Pemisah dengan Gradien */}
                      <div className="absolute inset-0 flex items-center" aria-hidden="true">
                        <div className="w-full border-t border-primary/30"></div>
                      </div>

                      {/* Tombol di Tengah Garis */}
                      <div className="relative">
                        {limit < researchs.length ? (
                          <button
                            onClick={() => setLimit(limit + 5)}
                            className="group flex items-center gap-3 px-8 py-3 rounded-full bg-[#111] border border-white/20 hover:border-primary/50 text-white hover:bg-primary transition-all duration-300 hover:scale-105 active:scale-95 shadow-2xl"
                          >
                            <span className="text-sm font-medium">More</span>
                            <div className="">
                              <FaArrowDown className="animate-bounce w-auto h- group-hover:translate-y-0.5 transition-transform" />
                            </div>
                          </button>
                        ) : researchs.length > 5 && (
                          <button
                            onClick={() => {
                              setLimit(5);
                              document.getElementById('researchs').scrollIntoView({ behavior: 'smooth' });
                            }}
                            className="group flex items-center gap-3 px-8 py-3 rounded-full bg-[#111] border border-white/20 hover:border-primary/50 text-white hover:bg-primary transition-all duration-300 hover:scale-105 active:scale-95 shadow-2xl"
                          >
                            <span className="text-sm font-medium">Tampilkan Lebih Sedikit</span>
                            <div className="bg-primary/10 p-1 rounded-full">
                              <FaArrowUp className="animate-bounce w-auto h- group-hover:translate-y-0.5 transition-transform" />
                            </div>
                          </button>
                        )}
                      </div>
                    </div>
            </>
          ) : (
            <div className="text-center text-muted-foreground py-10 glass rounded-2xl">
              Belum ada data publikasi yang tersedia.
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Researchs;