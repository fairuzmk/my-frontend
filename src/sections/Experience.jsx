import React, { useState } from 'react';
import { FaArrowDown, FaArrowUp } from 'react-icons/fa6';

const Experience = ({ experiences, loading }) => {
  const [limit, setLimit] = useState(5);

  

  if (loading) return <div className="text-center py-20 text-white/50">Loading journey...</div>;

  return (
    <section id='experience' className='py-6 md:py-32 relative overflow-hidden'>
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2"/>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className='text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in'>
            Research & Career Journey
          </span>
          <h2 className='text-2xl md:text-5xl font-bold mt-4 mb-6 text-secondary-foreground'>
            Experience that <span className='font-serif italic font-normal text-white'>speaks volumes.</span>
          </h2>
          <p className='text-sm md:text-xl  text-muted-foreground'>
            Rekam jejak profesional dalam bidang penelitian dan pengembangan.
          </p>
        </div>

        {/* Timeline Area */}
        <div className='relative'>
          {/* Garis Tengah */}
          <div className='timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)]'/>

          <div className="space-y-12">
            {experiences.length > 0 ? (
              <>
                {experiences.slice(0, limit).map((item, idx) => {
                  const displayYear = item.yearstart === item.yearend 
                    ? item.yearstart 
                    : `${item.yearstart} - ${item.yearend || 'Present'}`;

                  return (
                    <div key={item._id || idx} className='relative grid md:grid-cols-2 gap-1 animate-in fade-in slide-in-from-bottom-5 duration-700'>
                      
                      {/* Bulatan Timeline */}
                      <div className='absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-20'>
                        {idx === 0 && <span className='absolute inset-0 rounded-full bg-primary animate-ping opacity-75'/>}
                      </div>

                      {/* Card Content */}
                      <div className={`pl-8 md:pl-2 ${idx % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:col-start-2 md:pl-16'}`}>
                        <div className='bg-card p-6 rounded-2xl glass border border-white/10 hover:border-primary/50 transition-all duration-500 group hover:scale-[1.02]'> 
                          <span className='inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold mb-3'>
                            {displayYear}
                          </span>
                          <h3 className='text-sm md:text-xl font-bold text-white mb-1 group-hover:text-primary transition-colors'>
                            {item.activity_title}
                          </h3>
                          <h4 className='text-sm md:text-md font-medium text-secondary-foreground/80 mb-4 flex items-center gap-2 justify-start md:group-odd:justify-end'>
                             <span className='text-sm md:text-md h-[1px] w-4 bg-primary/50 hidden md:block group-even:hidden'></span>
                             {item.funding_source || "Independent Research"}
                             <span className='h-[1px] w-4 bg-primary/50 md:group-even:block hidden'></span>
                          </h4>
                          
                          <div className={`flex flex-wrap gap-2 ${idx % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                            {item.category?.map((cat, i) => (
                              <span key={i} className='text-[10px] uppercase tracking-widest text-muted-foreground bg-white/5 px-2 py-1 rounded'>
                                #{cat}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}

                {/* Tombol Lihat Selengkapnya dengan Divider */}
                <div className="relative flex flex-col items-center mt-20">
                  <div className="absolute inset-0 flex items-center" aria-hidden="true">
                    <div className="w-full border-t border-primary/30"></div>
                  </div>
                  <div className="relative">
                    {limit < experiences.length ? (
                      <button
                        onClick={() => setLimit(limit + 5)}
                        className="group flex items-center gap-3 px-8 py-3 rounded-full bg-[#111] border border-white/20 hover:border-primary/50 text-white hover:bg-primary transition-all duration-300 hover:scale-105 active:scale-95 shadow-2xl"
                      >
                        <span className="text-sm font-medium">More Journey</span>
                          <div className="">
                            <FaArrowDown className="animate-bounce w-auto h-4 group-hover:translate-y-0.5 transition-transform" />
                          </div>
                      </button>
                    ) : experiences.length > 5 && (
                      <button
                        onClick={() => {
                          setLimit(5);
                          document.getElementById('experience').scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="group flex items-center gap-3 px-8 py-3 rounded-full bg-[#111] border border-white/20 hover:border-primary/50 text-white hover:bg-primary transition-all duration-300 hover:scale-105 active:scale-95 shadow-2xl"
                      >
                        <span className="text-sm font-medium">Collapse Journey</span>
                        <div className="bg-primary/10 p-1 rounded-full">
                           <FaArrowUp className="animate-bounce w-auto h-4 group-hover:translate-y-0.5 transition-transform" />
                        </div>
                      </button>
                    )}
                  </div>
                </div>
              </>
            ) : (
              <div className="text-center text-muted-foreground py-10 glass rounded-2xl">
                No experience journey found.
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;