import React from "react";

/**
 * ProjectsSection - Modern grid of project cards.
 * Displays 6 projects with titles, descriptions, and technology tags.
 */
const ProjectsSection: React.FC = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A modern e-commerce solution with seamless checkout and product management.",
      tags: ["React", "Node.js", "MongoDB"],
      imgUrl: "/img/project-img1.png",
    },
    {
      title: "Fitness Tracker",
      description: "Comprehensive mobile app to track workouts, nutrition, and health goals.",
      tags: ["React Native", "Firebase"],
      imgUrl: "/img/project-img2.png",
    },
    {
      title: "Modern React Admin Dashboard",
      description: "Feature-rich dashboard with real-time analytics, charts, and dark mode support.",
      tags: ["React", "Tailwind CSS", "Recharts"],
      imgUrl: "/img/project-img3.png",
    },
    {
      title: "AI Image Generator (TensorFlow)",
      description: "Text-to-image generator utilizing deep learning models for high-quality art.",
      tags: ["Python", "React", "TensorFlow"],
      imgUrl: "/img/project-img1.png",
    },
    {
      title: "AI Image Generator (Motion)",
      description: "Interactive AI art tool with fluid animations and modern UI transitions.",
      tags: ["React JS", "Tailwind CSS", "Framer Motion"],
      imgUrl: "/img/project-img2.png",
    },
    {
      title: "AI Image Generator (UI/UX)",
      description: "Minimalist AI generation interface with seamless light and dark mode support.",
      tags: ["React JS", "CSS Modules", "Theming"],
      imgUrl: "/img/project-img3.png",
    },
  ];

  return (
    <section className="py-[70px] lg:py-[100px] px-[20px] lg:px-[85px] bg-bg-shade" id="projects">
      <div className="w-full max-w-[1333px] mx-auto">
        <h2 className="text-heading text-[35px] lg:text-[48px] font-bold leading-[40px] lg:leading-[58px] text-center">My <span className="text-primary">Projects</span></h2>
        <p className="text-black text-[21.3px] font-normal leading-[32px] text-center mt-[20px] mb-[60px] max-w-[600px] mx-auto">
          Explore my latest work, ranging from full-stack applications to AI-powered tools.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]">
          {projects.map((project, index) => (
            <div className="bg-white rounded-[20px] overflow-hidden shadow-[0_4px_15px_rgba(0,0,0,0.05)] transition-all duration-300 flex flex-col border border-transparent hover:border-primary hover:-translate-y-[10px] hover:shadow-[0_15px_30px_rgba(94,59,238,0.1)]" key={index}>
              <div className="w-full h-[220px] overflow-hidden">
                <img src={project.imgUrl} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" />
              </div>
              <div className="p-[25px] flex flex-col gap-[15px] flex-grow">
                <h3 className="text-heading text-[22px] font-bold">{project.title}</h3>
                <p className="text-darkblue text-[16px] leading-[1.5] mb-[10px]">{project.description}</p>
                <div className="flex flex-wrap gap-[10px] mt-auto">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="bg-primary/10 text-primary py-[5px] px-[12px] rounded-[50px] text-[13px] font-semibold">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
