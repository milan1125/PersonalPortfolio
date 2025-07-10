import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Code, Laptop } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useMutation } from '@tanstack/react-query';
import { apiRequest } from '@/lib/queryClient';
import { type ContactForm } from '@/lib/types';

const ContactSection = () => {
  const [formData, setFormData] = useState<ContactForm>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const { toast } = useToast();

  const contactMutation = useMutation({
    mutationFn: (data: ContactForm) => apiRequest('POST', '/api/contact', data),
    onSuccess: () => {
      toast({
        title: "Message Sent!",
        description: "Thank you for your message. I'll get back to you soon!",
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    }
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    contactMutation.mutate(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'milansavaliya1125@gmail.com',
      color: 'text-primary'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 7069397562',
      color: 'text-accent'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Ahmedabad, Gujarat, India',
      color: 'text-chart-1'
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/milan1125',
      label: 'GitHub',
      color: 'hover:text-primary'
    },
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/milan-savaliya-27400228b/',
      label: 'LinkedIn',
      color: 'hover:text-primary'
    },
    {
      icon: Code,
      href: 'https://codeforces.com/profile/Milan1125',
      label: 'Codeforces',
      color: 'hover:text-primary'
    },
    {
      icon: Laptop,
      href: 'https://leetcode.com/u/milan1125/',
      label: 'LeetCode',
      color: 'hover:text-primary'
    }
  ];

  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          Get In <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Touch</span>
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-8">Let's Connect</h3>
            <div className="space-y-6">
              {contactInfo.map((info) => (
                <div key={info.label} className="flex items-center">
                  <div className={`w-12 h-12 ${info.color.replace('text-', 'bg-')}/20 rounded-full flex items-center justify-center mr-4`}>
                    <info.icon className={`h-6 w-6 ${info.color}`} />
                  </div>
                  <div>
                    <p className="text-muted-foreground">{info.label}</p>
                    <p className="text-lg font-medium">{info.value}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8">
              <h4 className="text-lg font-semibold mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <Button
                    key={social.label}
                    variant="ghost"
                    size="icon"
                    asChild
                    className={`glass ${social.color} transition-colors duration-300`}
                  >
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                    >
                      <social.icon className="h-5 w-5" />
                    </a>
                  </Button>
                ))}
              </div>
            </div>
          </motion.div>
          
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Card className="glass border-0">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                      className="glass border-muted"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      required
                      className="glass border-muted"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Project collaboration"
                      required
                      className="glass border-muted"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project or say hello!"
                      rows={5}
                      required
                      className="glass border-muted resize-none"
                    />
                  </div>
                  
                  <Button
                    type="submit"
                    disabled={contactMutation.isPending}
                    className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/80 hover:to-accent/80"
                  >
                    <Send className="mr-2 h-4 w-4" />
                    {contactMutation.isPending ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
