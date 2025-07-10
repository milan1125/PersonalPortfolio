import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Trophy, Code, Star, Medal, Award, Shield } from 'lucide-react';
import { type Achievement } from '@/lib/types';

const AchievementsSection = () => {
  const achievements: Achievement[] = [
    {
      id: '1',
      title: 'LeetCode Knight',
      platform: 'LeetCode',
      rating: 1884,
      description: 'Global Rank 582 in Weekly Contest 437',
      icon: 'trophy',
      color: 'from-yellow-400 to-orange-500'
    },
    {
      id: '2',
      title: 'Codeforces Specialist',
      platform: 'Codeforces',
      rating: 1437,
      description: 'Global Rank 2222 in Round 937',
      icon: 'code',
      color: 'from-primary to-accent'
    },
    {
      id: '3',
      title: 'CodeChef 3 Star',
      platform: 'CodeChef',
      rating: 1725,
      description: 'Global Rank 168 in Starter 121',
      icon: 'star',
      color: 'from-accent to-chart-1'
    },
    {
      id: '4',
      title: 'SIH Top 5',
      platform: 'Smart India Hackathon',
      rating: '2023',
      description: 'Institute Level Travel & Tourism Project',
      icon: 'medal',
      color: 'from-chart-2 to-chart-1'
    }
  ];

  const certifications = [
    {
      title: 'AWS Academy Graduate',
      subtitle: 'Cloud Foundations',
      description: 'Comprehensive coverage of AWS core services, security, architecture, and pricing models.',
      icon: Award,
      color: 'text-yellow-500'
    },
    {
      title: 'IBM SkillsBuild',
      subtitle: 'Cybersecurity Fundamentals',
      description: 'Foundation in cyber threats, cryptography, and essential security practices.',
      icon: Shield,
      color: 'text-primary'
    }
  ];

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'trophy': return Trophy;
      case 'code': return Code;
      case 'star': return Star;
      case 'medal': return Medal;
      default: return Trophy;
    }
  };

  return (
    <section id="achievements" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Achievements</span>
        </motion.h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {achievements.map((achievement, index) => {
            const IconComponent = getIcon(achievement.icon);
            return (
              <motion.div
                key={achievement.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className={`achievement-badge border-0 text-center card-hover h-full bg-gradient-to-br ${achievement.color}`}>
                  <CardContent className="p-8 text-white">
                    <IconComponent className="h-12 w-12 mx-auto mb-4" />
                    <h3 className="text-xl font-bold mb-2">{achievement.title}</h3>
                    <p className="text-3xl font-bold mb-2">{achievement.rating}</p>
                    <p className="text-white/90 mb-2">Max Rating</p>
                    <p className="text-sm text-white/80">{achievement.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
        
        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-3xl font-bold text-center mb-12">Certifications</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Card className="glass border-0 card-hover">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-4">
                      <cert.icon className={`h-12 w-12 ${cert.color} mr-6`} />
                      <div>
                        <h4 className="text-xl font-bold">{cert.title}</h4>
                        <Badge variant="outline" className="mt-1">{cert.subtitle}</Badge>
                      </div>
                    </div>
                    <p className="text-muted-foreground">
                      {cert.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AchievementsSection;
