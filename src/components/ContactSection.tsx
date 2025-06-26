import { Linkedin, Mail } from "lucide-react";
import { SiGithub } from "@icons-pack/react-simple-icons";
import { SocialLink } from "./SocialLink";

export function ContactSection() {
  return (
    <section id="contact" className="py-12 md:py-20 bg-portfolio-dark">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-xl md:text-3xl font-bold text-center mb-6 md:mb-16">Contactemos</h2>
        <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-8">
          <SocialLink
            href="https://github.com/CharlyBGood"
            icon={<SiGithub />}
            label="GitHub"
          />
          <SocialLink
            href="https://linkedin.com/in/carlos-bonavita"
            icon={<Linkedin />}
            label="LinkedIn"
          />
          <SocialLink
            href="mailto:bonavita.carlos@gmail.com"
            icon={<Mail />}
            label="Email"
          />
        </div>
      </div>
    </section>
  )
}