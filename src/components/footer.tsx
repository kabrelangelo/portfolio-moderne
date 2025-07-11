import { Github, Linkedin, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';

const socialLinks = [
  { icon: Github, href: 'https://github.com/kabrelangelo' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/ange-kabrel-kenne-298b36240/' },
  { icon: Twitter, href: 'https://twitter.com'},
];

export function Footer() {
  return (
    <footer className="py-12 border-t">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Tous droits réservés.
          </p>
          
          <div className="flex items-center space-x-4">
            {socialLinks.map((social) => (
              <Button
                key={social.href}
                variant="ghost"
                size="icon"
                asChild
              >
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}