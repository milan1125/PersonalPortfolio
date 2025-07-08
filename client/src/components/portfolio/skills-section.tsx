import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code2, Layers, Database, Cloud, BookOpen, Wrench } from 'lucide-react';

const SkillsSection = () => {
  const skillCategories = [
    {
      icon: Code2,
      title: 'Languages',
      color: 'text-blue-400',
      borderColor: 'border-blue-400/30',
      skills: [
        { name: 'C/C++', color: 'bg-blue-600 hover:bg-blue-500' },
        { name: 'Python', color: 'bg-green-600 hover:bg-green-500' },
        { name: 'JavaScript', color: 'bg-yellow-600 hover:bg-yellow-500' },
        { name: 'HTML+CSS', color: 'bg-orange-600 hover:bg-orange-500' },
        { name: 'Java', color: 'bg-red-600 hover:bg-red-500' }
      ]
    },
    {
      icon: Layers,
      title: 'Libraries and Frameworks',
      color: 'text-emerald-400',
      borderColor: 'border-emerald-400/30',
      skills: [
        { name: 'React.js', color: 'bg-cyan-600 hover:bg-cyan-500' },
        { name: 'Next.js', color: 'bg-gray-700 hover:bg-gray-600' },
        { name: 'Express.js', color: 'bg-green-700 hover:bg-green-600' },
        { name: 'Node.js', color: 'bg-green-600 hover:bg-green-500' },
        { name: 'Redux Toolkit', color: 'bg-purple-600 hover:bg-purple-500' },
        { name: 'Tailwind CSS', color: 'bg-teal-600 hover:bg-teal-500' },
        { name: 'Flask', color: 'bg-gray-600 hover:bg-gray-500' }
      ]
    },
    {
      icon: Wrench,
      title: 'Web Dev Tools',
      color: 'text-purple-400',
      borderColor: 'border-purple-400/30',
      skills: [
        { name: 'Git', color: 'bg-orange-700 hover:bg-orange-600' },
        { name: 'GitHub', color: 'bg-gray-800 hover:bg-gray-700' },
        { name: 'Postman', color: 'bg-orange-600 hover:bg-orange-500' },
        { name: 'Vercel', color: 'bg-black hover:bg-gray-900' },
        { name: 'Vite', color: 'bg-purple-700 hover:bg-purple-600' }
      ]
    },
    {
      icon: Database,
      title: 'Cloud/Databases',
      color: 'text-orange-400',
      borderColor: 'border-orange-400/30',
      skills: [
        { name: 'AWS', color: 'bg-yellow-700 hover:bg-yellow-600' },
        { name: 'MongoDB', color: 'bg-green-700 hover:bg-green-600' },
        { name: 'MySQL', color: 'bg-blue-700 hover:bg-blue-600' },
        { name: 'Firebase', color: 'bg-orange-700 hover:bg-orange-600' }
      ]
    },
    {
      icon: BookOpen,
      title: 'Relevant Coursework',
      color: 'text-cyan-400',
      borderColor: 'border-cyan-400/30',
      skills: [
        { name: 'Data Structures & Algorithms', color: 'bg-indigo-600 hover:bg-indigo-500' },
        { name: 'Operating Systems', color: 'bg-purple-700 hover:bg-purple-600' },
        { name: 'Object Oriented Programming', color: 'bg-pink-600 hover:bg-pink-500' },
        { name: 'Database Management System', color: 'bg-blue-700 hover:bg-blue-600' },
        { name: 'Computer Networks', color: 'bg-teal-700 hover:bg-teal-600' },
        { name: 'Machine Learning', color: 'bg-emerald-700 hover:bg-emerald-600' },
        { name: 'Cloud Computing', color: 'bg-sky-600 hover:bg-sky-500' },
        { name: 'Data Visualization', color: 'bg-violet-600 hover:bg-violet-500' }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Technologies and expertise from academics and projects
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <Card className={`glass border-0 card-hover h-full transition-all duration-300 ${category.borderColor} border-2 border-opacity-30 hover:border-opacity-60`}>
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <category.icon className={`h-8 w-8 ${category.color} mr-4`} />
                    <h3 className={`text-xl font-bold ${category.color}`}>
                      {category.title}
                    </h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-3">
                    {category.skills.map((skill) => (
                      <Badge
                        key={skill.name}
                        variant="secondary"
                        className={`${skill.color} text-white border-0 px-3 py-1.5 text-sm font-medium transition-all duration-300 hover:scale-105 cursor-default`}
                      >
                        {skill.name}
                      </Badge>
                    ))}
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

export default SkillsSection;
