import { Briefcase, Code, Database, Server, User } from 'lucide-react'
import React from 'react'

const AboutSection = () => {
  return (
    <section id='about' className="py-12 px-4 relative">
      {" "}
      <div className='container mx-auto max-w-5xl'>
        <h2 className='text-3xl md:text-4xl font-bold mb-12 text-center'>
          About <span className='text-primary'> Me</span>
        </h2>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
          <div className='space-y-6'>
            <h3 className='text-2xl font-semibold'>Passionate Full Stack Software Engineer (MERN & PostgreSQL)</h3>
            <p className='text-muted-foreground'>
              I’m a Full Stack Software Engineer with 1 year of hands-on experience in building scalable, 
              production-ready web applications and RESTful APIs using React, Node.js, Express, MongoDB, 
              and PostgreSQL. I enjoy working across the stack—from designing clean user interfaces to 
              implementing secure and efficient backend systems.
            </p>
            <p className='text-muted-foreground'>
              I focus on writing clean, maintainable code, improving application performance, and solving 
              real-life problems through technology while continuously learning and growing as a developer.
            </p>

            <div className='flex flex-col sm:flex-row gap-4 pt-4 justify-center'>
              <a href="#contact" className='cosmic-button'>
                {" "}
                Get In Touch
              </a>
              <a href="Frontend\public\resume\Shashikant_resume.pdf" className='px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300' download={true}>
                Download CV
              </a>
            </div>
          </div>

          <div className='grid grid-cols-1 gap-6'>
            <div className='gradient-border p-6 card-hover '>
              <div className='flex items-start gap-4'>
                <div className='p-3 rounded-full bg-primary/10'>
                  <Code className='h-6 w-6 text-primary' />
                </div>
                <div className='text-left'>
                  <h4 className='font-semibold text-lg'>Full Stack Web Development</h4>
                  <p className='text-muted-foreground'>
                    Designing and developing responsive, scalable web applications using modern frontend and backend 
                    technologies with a strong focus on performance and maintainability.
                  </p>
                </div>
              </div>
            </div>
            <div className='gradient-border p-6 card-hover '>
              <div className='flex items-start gap-4'>
                <div className='p-3 rounded-full bg-primary/10'>
                  <Server className='h-6 w-6 text-primary' />
                </div>
                  <div className='text-left'>
                    <h4 className='font-semibold text-lg'>Backend & API Engineering</h4>
                    <p className='text-muted-foreground'>
                      Building secure and efficient RESTful APIs, handling authentication, database 
                      design, and integrating SQL and NoSQL databases for real-world applications.
                    </p>
                  </div>
              </div>
            </div>
            <div className='gradient-border p-6 card-hover '>
              <div className='flex items-start gap-4'>
                <div className='p-3 rounded-full bg-primary/10'>
                  <Database className='h-6 w-6 text-primary' />
                </div>
                  <div className='text-left'>
                    <h4 className='font-semibold text-lg'>Professional Experience & Collaboration</h4>
                    <p className='text-muted-foreground'>
                      Hands-on experience working in Agile environments, collaborating with teams, 
                      contributing to real projects, participating in code reviews, and delivering reliable 
                      software solutions.
                      </p>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
