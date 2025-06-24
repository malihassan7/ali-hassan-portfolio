
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";

import { Links } from "@/data/links";

const ContactSection = () => {




  return (
    <section id="contact" className="py-14 bg-background">
      <div className="section-container">
        <h2 className="section-heading">Get In Touch</h2>
        <p className="text-muted-foreground max-w-2xl mb-12">
          Have a question or want to work together? Feel free to drop me a
          message. I'd love to hear from you!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-1 space-y-8">
            <div>
              <h3 className="text-lg font-semibold mb-3 text-foreground">
                Contact Information
              </h3>

            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 mt-1 text-primary" />
                <div>
                  <h4 className="font-medium text-foreground">Email</h4>
                  <p className="text-sm text-muted-foreground">
                    <a href={`mailto:${Links.emailonly}`}>{Links.emailonly}</a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 mt-1 text-primary" />
                <div>
                  <h4 className="font-medium text-foreground">Phone</h4>
                  <p className="text-sm text-muted-foreground">
                    <a href={Links.whatsapp}>{Links.phone}</a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-1 text-primary" />
                <div>
                  <h4 className="font-medium text-foreground">Location</h4>
                  <p className="text-sm text-muted-foreground">
                    {Links.location}
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3 text-foreground">
                Connect with me
              </h3>
              <div className="flex space-x-4">
                <a
                  href={Links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="bg-muted p-3 rounded-full text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <Github size={20} />
                </a>
                <a
                  href={Links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="bg-muted p-3 rounded-full text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href={Links.email}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Email"
                  className="bg-muted p-3 rounded-full text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;
