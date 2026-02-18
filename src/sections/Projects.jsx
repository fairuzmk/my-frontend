import React, { useEffect, useState } from 'react';
import { FaArrowUp, FaBookBookmark } from 'react-icons/fa6';
import axios from 'axios';

const Projects = ({ userId }) => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchResearches = async () => {
      try {
        // Panggil endpoint yang tadi kita buat
        const response = await axios.get(`https://fzmilky-backend.onrender.com/api/fzmilky/research/${userId}`);
        setProjects(response.data);
      } catch (error) {
        console.error("Error fetching researches:", error);
      } finally {
        setLoading(false);
      }
    };

    if (userId) {
      fetchResearches();
    }
  }, [userId]);

  if (loading) {
    return (
      <div className="text-center py-20 text-white/50 animate-pulse">
        Loading amazing work...
      </div>
    );
  }

  return (
    <section id='projects' className='py-32 relative overflow-hidden'>
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className='text-center mx-auto max-w-3xl mb-16'>
          <span className='text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in'>
            Research & Publications
          </span>
          <h2 className='text-4xl md:text-5xl font-bold mt-4 mb-6 text-secondary-foreground'>
            Works that 
            <span className='font-serif italic font-normal text-white'> {" "} make an impact</span>
          </h2>
          <p className='text-muted-foreground'>
            Kumpulan publikasi ilmiah dan hasil riset yang telah diterbitkan pada jurnal terakreditasi.
          </p>
        </div>

        {/* Projects Grid */}
        <div className='grid gap-8'>
          {projects.length > 0 ? (
            projects.map((project, idx) => (
              <div 
                key={project._id || idx} 
                className='glass rounded-3xl overflow-hidden hover:scale-[1.01] transition-all duration-500 ease-in-out glow-border p-6 flex flex-col md:flex-row gap-8 items-center group'
              >
                {/* Visual Placeholder (Kiri) */}
                <div className='relative overflow-hidden h-40 w-full md:w-56 shrink-0 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors'>
                  <FaBookBookmark className="w-12 h-12 text-primary/40 group-hover:scale-110 transition-transform duration-500" />
                  
                  {/* Badge Tahun di pojok kiri atas */}
                  <div className='absolute top-3 left-3 bg-primary/20 backdrop-blur-md border border-primary/30 px-3 py-1 rounded-full text-[10px] font-bold text-primary'>
                    {project.year}
                  </div>
                </div>

                {/* Content Area (Kanan) */}
                <div className="flex-grow text-left w-full">
                  <div className="flex justify-between items-start gap-4">
                    <div className="max-w-[85%]">
                      <h3 className='text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-primary transition-colors'>
                        {project.title_en}
                      </h3>
                      <p className='text-primary/80 font-medium text-sm mb-4 italic'>
                        {project.journal_name}
                      </p>
                    </div>

                    {/* Tombol Link (Jika ada URL publikasi) */}
                    <a 
                      href={project.doi_link || "#"} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className='p-4 rounded-full glass hover:bg-white hover:text-black transition-all duration-300'
                    >
                      <FaArrowUp className='w-5 h-5 rotate-45'/>
                    </a>
                  </div>
                  
                  {/* Jika ada deskripsi atau abstrak singkat */}
                  <p className='text-muted-foreground text-sm leading-relaxed line-clamp-2'>
                    {project.description || "Penelitian ini berfokus pada pengembangan dan analisis dalam bidang terkait untuk memberikan kontribusi akademis yang signifikan."}
                  </p>

                  {/* Tags Dinamis */}
                  <div className='flex flex-wrap gap-2 mt-6'>
                    <span className='px-4 py-1.5 text-[10px] uppercase tracking-widest rounded-full bg-white/5 border border-white/10 text-white/70'>
                      Academic Journal
                    </span>
                    <span className='px-4 py-1.5 text-[10px] uppercase tracking-widest rounded-full bg-white/5 border border-white/10 text-white/70'>
                      {project.year}
                    </span>
                  </div>
                </div>
              </div>
            ))
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

export default Projects;