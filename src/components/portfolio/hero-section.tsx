import { useState, useEffect } from 'react';
import { ChevronDown, Download, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

// Custom SVG Icons
const GitHubIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);

const LinkedInIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const CodeforcesIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M4.5 7.5C5.328 7.5 6 8.172 6 9v10.5C6 20.328 5.328 21 4.5 21h-3C.672 21 0 20.328 0 19.5V9c0-.828.672-1.5 1.5-1.5h3zm9-4.5C15.328 3 16 3.672 16 4.5v15c0 .828-.672 1.5-1.5 1.5h-3c-.828 0-1.5-.672-1.5-1.5v-15c0-.828.672-1.5 1.5-1.5h3zm9 7.5C24.328 10.5 25 11.172 25 12v7.5c0 .828-.672 1.5-1.5 1.5h-3c-.828 0-1.5-.672-1.5-1.5V12c0-.828.672-1.5 1.5-1.5h3z"/>
  </svg>
);

const LeetCodeIcon = ({ className }: { className?: string }) => (
  <svg className={`h-8 w-8 ${className ?? ''}`} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <title>LeetCode</title>
    <path d="M20.205 17.722a.748.748 0 0 1 1.06 1.06l-2.363 2.363a6.53 6.53 0 0 1-9.238 0l-5.147-5.147a6.53 6.53 0 0 1 0-9.238l5.147-5.147a6.53 6.53 0 0 1 9.238 0l2.363 2.363a.748.748 0 1 1-1.06 1.06l-2.363-2.363a5.03 5.03 0 0 0-7.118 0l-5.147 5.147a5.03 5.03 0 0 0 0 7.118l5.147 5.147a5.03 5.03 0 0 0 7.118 0zm-7.118-2.363a.748.748 0 0 1 0-1.06l5.147-5.147a.748.748 0 1 1 1.06 1.06l-5.147 5.147a.748.748 0 0 1-1.06 0zm-2.363-2.363a.748.748 0 0 1 0-1.06l2.363-2.363a.748.748 0 1 1 1.06 1.06l-2.363 2.363a.748.748 0 0 1-1.06 0z" fill="currentColor"/>
  </svg>
);

const HeroSection = () => {
  const [typingText, setTypingText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const texts = ['Full Stack Developer', 'Problem Solver', 'Tech Enthusiast', 'Competitive Programmer'];

  useEffect(() => {
    const timeout = setTimeout(() => {
      const currentText = texts[currentIndex];
      
      if (isDeleting) {
        setTypingText(currentText.substring(0, typingText.length - 1));
      } else {
        setTypingText(currentText.substring(0, typingText.length + 1));
      }

      if (!isDeleting && typingText === currentText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && typingText === '') {
        setIsDeleting(false);
        setCurrentIndex((prev) => (prev + 1) % texts.length);
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [typingText, isDeleting, currentIndex, texts]);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleResumeDownload = async () => {
    try {
      // Create a link element to trigger download
      const link = document.createElement('a');
      link.href = '/Milan_Savaliya_Resume.pdf';
      link.download = 'Milan_Savaliya_Resume.pdf';
      link.target = '_blank';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Failed to download resume:', error);
      // Fallback: open in new tab
      window.open('/Milan_Savaliya_Resume.pdf', '_blank');
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative px-6">
      <div className="max-w-4xl mx-auto text-center">

        
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-muted-foreground to-chart-1 bg-clip-text text-transparent"
        >
          Milan Savaliya
        </motion.h1>
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-2xl md:text-3xl mb-8 text-muted-foreground"
        >
          <span className="typing">{typingText}</span>
        </motion.div>
        
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl mb-12 text-muted-foreground max-w-2xl mx-auto leading-relaxed"
        >
          Computer Science student at Nirma University with expertise in React.js, Node.js, and MongoDB. 
          Passionate about building scalable web applications and competitive programming.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-6 mb-12"
        >
          <Button
            onClick={() => scrollToSection('#contact')}
            className="glass px-8 py-4 text-lg hover:bg-primary/10 transition-all duration-300 card-hover"
            variant="ghost"
          >
            <Mail className="mr-3 h-5 w-5" />
            Get In Touch
          </Button>
          <Button
            onClick={handleResumeDownload}
            className="glass px-8 py-4 text-lg hover:bg-muted-foreground/10 transition-all duration-300 card-hover"
            variant="ghost"
          >
            <Download className="mr-3 h-5 w-5" />
            Download Resume
          </Button>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex justify-center space-x-8"
        >
          {[
            { href: 'https://github.com/milan1125', icon: GitHubIcon, label: 'GitHub' },
            { href: 'https://www.linkedin.com/in/milan-savaliya-27400228b/', icon: LinkedInIcon, label: 'LinkedIn' },
            { href: 'https://codeforces.com/profile/Milan1125', icon: CodeforcesIcon, label: 'Codeforces' },
            { href: 'https://leetcode.com/u/milan1125/', icon: LeetCodeIcon, label: 'LeetCode', className: 'text-white' }
          ].map((social) => (
            <a
              key={social.href}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl hover:text-primary transition-colors duration-300 card-hover"
              aria-label={social.label}
            >
              {social.label === 'LeetCode' ? (
                <social.icon className="h-8 w-8 dark:text-white" />
              ) : (
                <social.icon className="h-8 w-8" />
              )}
            </a>
          ))}
        </motion.div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-2xl text-primary h-8 w-8" />
      </div>
    </section>
  );
};

export default HeroSection;
