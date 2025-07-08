import AnimatedBackground from '@/components/portfolio/animated-background';
import Navigation from '@/components/portfolio/navigation';
import HeroSection from '@/components/portfolio/hero-section';
import AboutSection from '@/components/portfolio/about-section';
import SkillsSection from '@/components/portfolio/skills-section';
import ExperienceSection from '@/components/portfolio/experience-section';
import ProjectsSection from '@/components/portfolio/projects-section';
import AchievementsSection from '@/components/portfolio/achievements-section';
import ContactSection from '@/components/portfolio/contact-section';

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <AnimatedBackground />
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <AchievementsSection />
        <ContactSection />
      </main>
      
      {/* Footer */}
      <footer className="py-12 px-6 border-t border-border relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-muted-foreground bg-clip-text text-transparent mb-4">
              Milan Savaliya
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Full Stack Developer passionate about creating innovative web solutions and solving complex problems. 
              Always excited to work on challenging projects and learn new technologies.
            </p>
          </div>
          
          <div className="flex justify-center space-x-8 mb-8">
            {['#home', '#about', '#projects', '#contact'].map((link) => (
              <button
                key={link}
                onClick={() => {
                  const element = document.querySelector(link);
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                {link.replace('#', '').charAt(0).toUpperCase() + link.slice(2)}
              </button>
            ))}
          </div>
          
          <div className="border-t border-border pt-8">
            <p className="text-muted-foreground">
              © 2025 Milan Savaliya. All rights reserved. Built with passion and lots of coffee ☕
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
