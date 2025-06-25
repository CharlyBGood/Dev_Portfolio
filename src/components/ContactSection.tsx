import { Linkedin, Mail } from "lucide-react";
import { SiGithub } from "@icons-pack/react-simple-icons";
import { SocialLink } from "./SocialLink";

export function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-[#150a1a]">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-16">Conactemos</h2>
        <div className="flex justify-center gap-8">
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