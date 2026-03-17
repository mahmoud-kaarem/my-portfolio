import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Briefcase } from "lucide-react";

const experiences = [
  { roleKey: "exp1.role", descKey: "exp1.desc" },
  { roleKey: "exp2.role", descKey: "exp2.desc" },
  { roleKey: "exp3.role", descKey: "exp3.desc" },
];

const Experience = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="section-padding">
      <div className="container-narrow" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-2">{t("experience.title")}</h2>
          <div className="w-16 h-1 bg-hero-gradient mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-2xl mx-auto relative">
          {/* Timeline line */}
          <div className="absolute top-0 bottom-0 left-5 w-px bg-border" />

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.roleKey}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="relative flex gap-5"
              >
                <div className="relative z-10 flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground shrink-0">
                  <Briefcase size={18} />
                </div>
                <div className="p-5 rounded-xl bg-card border border-border card-shadow flex-1">
                  <h3 className="font-semibold text-lg mb-2">{t(exp.roleKey)}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{t(exp.descKey)}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
