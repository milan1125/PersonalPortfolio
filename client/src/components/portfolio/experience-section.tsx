import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle } from 'lucide-react';
import { type Experience } from '@/lib/types';

const ExperienceSection = () => {
  const experiences: Experience[] = [
    {
      id: '1',
      company: 'Agevole Technologies Pvt. Ltd.',
      position: 'Full Stack Developer Intern',
      location: 'Surat, Gujarat',
      duration: 'May - June 2025',
      description: [
        'Led development of SkillHive, a peer-learning platform with multi-role access and media streaming',
        'Built full-stack features using React.js, Node.js, MongoDB; deployed via Vercel and Render',
        'Managed APIs, course logic, video progress, and secure RBAC for students and instructors',
        'Directed GitHub workflows, UI prototyping in Figma, and coordinated delivery with a 15-member team'
      ]
    },
    {
      id: '2',
      company: 'Knovator Technologies',
      position: 'Front-End Developer Intern',
      location: 'Remote',
      duration: 'June - July 2024',
      description: [
        'Developed reusable React.js components for a data-import platform',
        'Improved performance and UX through responsive design implementation',
        'Integrated REST APIs and optimized Context API state management',
        'Recognized as top-performing intern for exceptional contributions'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          Work <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Experience</span>
        </motion.h2>
        
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary to-accent"></div>
          
          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className={`relative flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-start md:items-center`}
              >
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'} mb-8 md:mb-0`}>
                  <Card className="glass border-0 card-hover">
                    <CardContent className="p-8">
                      <div className="flex items-center mb-4">
                        <div className="w-16 h-16 rounded-full mr-4 bg-gradient-to-br from-primary to-accent flex items-center justify-center text-2xl font-bold text-white">
                          {exp.company.split(' ').map(word => word[0]).join('').slice(0, 2)}
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-primary">{exp.position}</h3>
                          <p className="text-muted-foreground">{exp.company}</p>
                          <Badge variant="outline" className="mt-1">
                            {exp.duration} | {exp.location}
                          </Badge>
                        </div>
                      </div>
                      <ul className="space-y-2 text-muted-foreground">
                        {exp.description.map((item, i) => (
                          <li key={i} className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-chart-2 mr-3 mt-0.5 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
                
                {/* Timeline dot */}
                <div className="hidden md:block w-4 h-4 bg-primary rounded-full border-4 border-background absolute left-1/2 transform -translate-x-1/2 z-10"></div>
                
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pl-8' : 'md:pr-8'}`}></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
