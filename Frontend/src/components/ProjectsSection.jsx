import { ArrowRight, ExternalLink, Github } from 'lucide-react'
import React from 'react'

const projects = [
    {
        id: 1,
        title: "ReferralX - Employee Referral Web App",
        description: "A full-stack employee referral platform that connects employees and freshers through referral links. Built role-based dashboards for employees, HR, and candidates with referral tracking, job applications, and approval workflows.",
        image: "/projects/project1.png",
        tags: ["React", "Node.js", "Express.js", "PostgreSQL", "REST APIs", "Tailwind CSS"],
        demoUrl: "#",
        githubUrl: "https://github.com/ShashikantShirsath/ReferralX--Employee-Referral-Web-App"
    },
    {
        id: 2,
        title: "Airbnb Replica – Property Booking Platform",
        description: "A full-stack Airbnb-like application with authentication, property listings, reviews, and secure image uploads. Focused on modular architecture, validation, and optimized backend logic.",
        image: "/projects/project1.png",
        tags: ["React", "Node.js", "Express", "MongoDB Atlas", "REST APIs", "Multer"],
        demoUrl: "https://airbnb-replica-xagc.onrender.com/",
        githubUrl: "https://github.com/ShashikantShirsath/Airbnb-Replica"
    },
    {
        id: 3,
        title: "Personal Portfolio Website",
        description: "A modern, responsive personal portfolio website to showcase my projects, skills, and experience. Built with React and Tailwind CSS, featuring smooth animations, reusable components, and a clean, professional UI.",
        image: "/projects/portfolio.png",
        tags: ["React", "Tailwind CSS", "JavaScript", "Responsive Design"],
        demoUrl: "https://shashikantshirsath.github.io/ShashikantShashikant-Portfolio/",
        githubUrl: "https://github.com/ShashikantShirsath/ShashikantShashikant-Portfolio"
    }
]

const ProjectsSection = () => {
    return (
        <section id='projects' className='py-24 px-4 relative'>
            <div className='container mx-auto max-w-5xl'>
                <h2 className='text-3xl md:text-4xl font-bold mb-4 text-center'>
                    Featured
                    <span className='text-primary'> Projects</span>
                </h2>

                <p className='text-center text-muted-foreground mb-12 max-w-2xl mx-auto'>
                    Here are some of my recent projects showcasing my skills in full stack
                    development using the MERN stack and PostgreSQL.
                </p>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {projects.map((project) => (
                        <div className='group bg-card rounded-lg overflow-hidden shadow-xs card-hover'>
                            <div className='h-48 overflow-hidden'>
                                <img src={project.image} alt={project.title} className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110' />
                            </div>

                            <div className='p-6'>
                                <div className='flex flex-wrap gap-2 mb-4'>
                                    {project.tags.map((tag, index) => (
                                        <span key={index} className='bg-primary/10 text-secondary-foreground text-xs font-medium px-2 py-1 rounded'>
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <h3 className='text-xl font-semibold mb-1'>{project.title}</h3>

                                <p className='text-muted-foreground text-sm mb-4'> {project.description} </p>

                                <div className='flex justify-between items-center'>
                                    <div className='flex space-x-3'>
                                        <a href={project.demoUrl} className='text-foreground/80 hover:text-primary transition-colors duration-300' target='_blank'>
                                            <ExternalLink size={20} />
                                        </a>
                                        <a href={project.githubUrl} className='text-foreground/80 hover:text-primary transition-colors duration-300' target='_blank'>
                                            <Github size={20} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className='text-center mt-12'>
                    <a href="https://github.com/ShashikantShirsath/" target='_blank' className='cosmic-button w-fit flex items-center mx-auto gap-2'>
                        Check My GitHub <ArrowRight size={16} />
                    </a>
                </div>
            </div>
        </section>
    )
}

export default ProjectsSection
