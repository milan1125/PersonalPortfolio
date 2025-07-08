import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          About <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Me</span>
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-bold mb-6 text-primary">Computer Science Student & Developer</h3>
            <div className="space-y-6 text-muted-foreground">
              <p className="text-lg leading-relaxed">
                I'm a passionate Computer Science student at Nirma University, deeply immersed in competitive 
                programming and algorithmic problem-solving.
              </p>
              <p className="text-lg leading-relaxed">
                With expertise in algorithms, data structures, and systematic problem-solving approaches, I tackle 
                challenges across competitive programming, full-stack development, and machine learning. I 
                believe in writing clean, efficient code that not only solves problems but does so optimally.
              </p>
            </div>
            
            <div className="mt-8 flex flex-wrap gap-3">
              {[
                'Competitive Programming',
                'Algorithmic Problem Solving', 
                'Data Structures',
                'Full-Stack Development',
                'Machine Learning'
              ].map((skill) => (
                <span key={skill} className="px-4 py-2 bg-muted/50 rounded-full text-sm font-medium">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Card className="glass border-0">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-8 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Education
                </h3>
                
                <div className="space-y-8">
                  {/* Bachelor's Degree */}
                  <div className="border border-blue-400/30 rounded-lg p-6 bg-blue-400/5">
                    <div className="flex justify-between items-start mb-3">
                      <h4 className="text-lg font-bold text-blue-400">Bachelor of Technology</h4>
                      <span className="px-3 py-1 bg-green-600 text-white text-sm rounded-full font-medium">
                        8.44/10
                      </span>
                    </div>
                    <p className="font-semibold text-white mb-1">Computer Science & Engineering</p>
                    <p className="text-muted-foreground">Nirma University • 2022 - 2026</p>
                  </div>
                  
                  {/* Higher Secondary */}
                  <div className="border border-emerald-400/30 rounded-lg p-6 bg-emerald-400/5">
                    <h4 className="text-lg font-bold text-emerald-400 mb-3">Higher Secondary Education</h4>
                    <p className="font-semibold text-white mb-1">Ashadeep IIT • 2020 - 2022</p>
                    <div className="flex gap-4 text-sm text-muted-foreground mt-3">
                      <span className="px-2 py-1 bg-emerald-600/20 rounded">GUJCET: 108.75/120</span>
                      <span className="px-2 py-1 bg-emerald-600/20 rounded">Board: 99.11%</span>
                    </div>
                    <div className="mt-2">
                      <span className="px-2 py-1 bg-emerald-600/20 rounded text-sm text-muted-foreground">
                        JEE Adv. Rank: 14547
                      </span>
                    </div>
                  </div>
                  
                  {/* Secondary Education */}
                  <div className="border border-purple-400/30 rounded-lg p-6 bg-purple-400/5">
                    <h4 className="text-lg font-bold text-purple-400 mb-3">Secondary Education</h4>
                    <p className="font-semibold text-white mb-1">Samarpan High School • 2018 - 2020</p>
                    <div className="mt-3">
                      <span className="px-2 py-1 bg-purple-600/20 rounded text-sm text-muted-foreground">
                        Board: 99.75%
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
