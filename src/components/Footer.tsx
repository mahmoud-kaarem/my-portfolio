import { useLanguage } from "@/contexts/LanguageContext";
import { Linkedin, Github, Mail, MessageCircle, Heart } from "lucide-react";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-border bg-card">
      <div className="container-narrow px-4 py-10">
        <div className="flex flex-col items-center text-center gap-4">
          <h3 className="text-lg font-bold text-gradient">Mahmoud Kaarem</h3>
          <p className="text-sm text-muted-foreground">{t("hero.title")}</p>

          <div className="flex items-center gap-3">
            {[
              { icon: Linkedin, href: "https://www.linkedin.com/in/mahmoud-kaarem/" },
              { icon: Github, href: "https://github.com/mahmoud-kaarem" },
              { icon: Mail, href: "mailto:mahmoudkaarem9@gmail.com" },
              { icon: MessageCircle, href: "https://wa.me/201553670002" },
            ].map(({ icon: Icon, href }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full text-muted-foreground hover:text-primary transition-colors"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>

          <div className="text-xs text-muted-foreground space-y-1">
            <p>© {new Date().getFullYear()} Mahmoud Kaarem. {t("footer.rights")}</p>
            <p className="flex items-center justify-center gap-1">
              {t("footer.built")} <Heart size={12} className="text-primary" />
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
