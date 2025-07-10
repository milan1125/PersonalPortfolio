import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink, Calendar } from 'lucide-react';
import { type Project } from '@/lib/types';

const ProjectsSection = () => {
  const projects: Project[] = [
    {
      id: '1',
      title: 'SkillHive',
      description: 'Modern Learning Management System with multi-role access, video streaming, and real-time analytics. Features instructor tools managing 100+ modules and interactive course workflows.',
      technologies: ['React.js', 'Redux Toolkit', 'Node.js', 'MongoDB', 'Stripe', 'Cloudinary'],
      date: 'May - June 2025',
      githubUrl: 'https://github.com/milan1125/skillhive',
      liveUrl: 'https://skillhive-milan.vercel.app/'
    },
    {
      id: '2',
      title: 'Rent Home',
      description: 'MERN-stack rental property platform enabling users to browse, filter, and book properties. Features property management tools for owners and integrated search functionality.',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Vercel'],
      date: 'September 2024',
      githubUrl: 'https://github.com/milan1125/rent-home',
      liveUrl: 'https://rent-home-flax.vercel.app/'
    },
    {
      id: '3',
      title: 'Resume-Job Matching System',
      description: 'Intelligent web application for matching candidates to jobs based on skills and salary compatibility. Features rule-based matching with interactive data visualization and report generation.',
      technologies: ['Python', 'Flask', 'Pandas', 'JavaScript', 'HTML/CSS'],
      date: 'April 2025',
      githubUrl: 'https://github.com/milan1125/resume-job-matching'
    }
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          Featured <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Projects</span>
        </motion.h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="project-card border-0 card-hover h-full">
                <CardContent className="p-8">
                  {/* Project visualization */}
                  <div className="w-full h-48 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl mb-6 flex items-center justify-center text-6xl">
                    {index === 0 ? '🎓' : index === 1 ? '🏠' : '📊'}
                  </div>
                  
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-primary">{project.title}</h3>
                    <div className="flex space-x-3">
                      {project.githubUrl && (
                        <Button
                          variant="ghost"
                          size="icon"
                          asChild
                          className="hover:text-primary"
                        >
                          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                            <Github className="h-5 w-5" />
                          </a>
                        </Button>
                      )}
                      {project.liveUrl && (
                        <Button
                          variant="ghost"
                          size="icon"
                          asChild
                          className="hover:text-primary"
                        >
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-5 w-5" />
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground mb-6 line-clamp-4">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-2" />
                    {project.date}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
