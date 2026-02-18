import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Experience = ({ userId }) => {
  const [experiences, setExperiences] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchExperiences = async () => {
      try {
        // Asumsi endpoint yang sama atau sesuaikan dengan route experience kamu
        const response = await axios.get(`https://fzmilky-backend.onrender.com/api/fzmilky/exp/${userId}`);
        setExperiences(response.data);
      } catch (error) {
        console.error("Error fetching experience:", error);
      } finally {
        setLoading(false);
      }
    };

    if (userId) fetchExperiences();
  }, [userId]);

  if (loading) return <div className="text-center py-20 text-white/50">Loading journey...</div>;

  return (
    <section id='experience' className='py-32 relative overflow-hidden'>
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2"/>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className='text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in'>
            Research & Career Journey
          </span>
          <h2 className='text-4xl md:text-5xl font-bold mt-4 mb-6 text-secondary-foreground'>
            Experience that <span className='font-serif italic font-normal text-white'>speaks volumes.</span>
          </h2>
          <p className='text-muted-foreground'>
            Rekam jejak profesional dalam bidang penelitian dan pengembangan, mencakup berbagai proyek strategis dan kolaborasi industri.
          </p>
        </div>

        {/* Timeline */}
        <div className='relative'>
          {/* Garis Tengah (Glow Line) */}
          <div className='timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)]'/>

          <div className="space-y-12">
            {experiences.length > 0 ? experiences.map((item, idx) => {
              // Logika untuk menampilkan tahun (misal: 2025 atau 2025 - 2026)
              const displayYear = item.yearstart === item.yearend 
                ? item.yearstart 
                : `${item.yearstart} - ${item.yearend || 'Present'}`;

              return (
                <div key={item._id || idx} className='relative grid md:grid-cols-2 gap-1'>
                  
                  {/* Bulatan Timeline */}
                  <div className='absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-20'>
                    {/* Efek ping hanya untuk data terbaru (misal tahun 2026 atau sesuai kondisi) */}
                    {idx === 0 && <span className='absolute inset-0 rounded-full bg-primary animate-ping opacity-75'/>}
                  </div>

                  {/* Content Container */}
                  <div className={`pl-8 md:pl-2 ${idx % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:col-start-2 md:pl-16'}`}>
                    <div className='bg-card p-6 rounded-2xl glass border border-white/10 hover:border-primary/50 transition-all duration-500 group'> 
                      
                      {/* Badge Tahun */}
                      <span className='inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold mb-3'>
                        {displayYear}
                      </span>

                      {/* Judul Kegiatan (Activity Title) */}
                      <h3 className='text-xl font-bold text-white mb-1 group-hover:text-primary transition-colors'>
                        {item.activity_title}
                      </h3>

                      {/* Sumber Dana / Role (Funding Source) */}
                      <h4 className='text-md font-medium text-secondary-foreground/80 mb-4 flex items-center gap-2 justify-start md:group-odd:justify-end lg:group-odd:justify-end'>
                         <span className='h-[1px] w-4 bg-primary/50 hidden md:block group-even:hidden'></span>
                         {item.funding_source || "Independent Research"}
                         <span className='h-[1px] w-4 bg-primary/50 md:group-even:block hidden'></span>
                      </h4>

                      {/* Detail Tambahan (Partners/Category) */}
                      <div className={`flex flex-wrap gap-2 ${idx % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                        {item.category?.map((cat, i) => (
                          <span key={i} className='text-[10px] uppercase tracking-widest text-muted-foreground bg-white/5 px-2 py-1 rounded'>
                            #{cat}
                          </span>
                        ))}
                        {item.research_partner && (
                           <span className='text-[10px] uppercase tracking-widest text-primary/70 bg-primary/5 px-2 py-1 rounded'>
                            Partner: {item.research_partner}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            }) : (
              <div className="text-center text-muted-foreground py-10">No experience journey found.</div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;