import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const About = ({ experienceCount, researchCount, hIndex }) => {
  // Hook untuk mendeteksi kapan section ini terlihat di layar
  const { ref, inView } = useInView({
    triggerOnce: true, // Animasi hanya jalan sekali
    threshold: 0.2,    // Mulai animasi saat 20% section terlihat
  });
  const currentYear = new Date().getFullYear();
  const experienceYears = currentYear - 2018;

  const highlights = [
    {
      number: experienceCount || 0,
      title: "Projects Completed",
      suffix: "+"
    },
    {
      number: researchCount || 0,
      title: "Research Published",
      suffix: ""
    },
    {
      number: experienceYears || 5, // Default jika belum dihitung
      title: "Years of Experience",
      suffix: "+"
    },
    {
      number: hIndex || 0,
      title: "H-Index",
      suffix: ""
    }
  ];

  return (
    <section id="about" ref={ref} className="py-6 md:py-32 relative overflow-hidden">
      <div className='container mx-auto px-6 relative z-10'>
        <div className='grid lg:grid-cols-2 gap-16 items-center'>
          
          {/* Left Column */}
          <div className='space-y-8'>
            <div className='animate-fade-in'>
              <span className='text-secondary-foreground text-sm font-medium tracking-wider uppercase'>About Me</span>
            </div>
            <h2 className='text-2xl md:text-5xl font-bold leading-tight text-secondary-foreground'>
              Building the future,
              <span className='font-serif italic font-normal text-white'> one component at a time</span>
            </h2>
            <div className='text-sm md:text-xl space-y-4 text-muted-foreground'>
              <p>
                Berfokus pada integrasi antara teknologi modern dan riset ilmiah untuk menciptakan solusi yang berdampak luas.
              </p>
            </div>
          </div>

          {/* Right Column (Statistik) */}
          <div className='grid sm:grid-cols-2 gap-6'>
            {highlights.map((item, idx) => (
              <div key={idx} className="glass p-6 rounded-2xl glow-border hover:scale-105 transition-transform duration-500">
                <p className='text-4xl font-bold text-primary mb-2'>
                  {inView ? (
                    <CountUp end={item.number} duration={2.5} />
                  ) : "0"}
                  {item.suffix}
                </p>
                <h3 className='text-lg font-semibold text-white/80'>{item.title}</h3>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;