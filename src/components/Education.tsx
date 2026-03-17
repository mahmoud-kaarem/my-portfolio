import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { GraduationCap } from "lucide-react";

const Education = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="section-padding bg-muted/30">
      <div className="container-narrow" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-2">{t("education.title")}</h2>
          <div className="w-16 h-1 bg-hero-gradient mx-auto rounded-full" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-lg mx-auto p-8 rounded-xl bg-card border border-border card-shadow text-center"
        >
          <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-accent flex items-center justify-center text-primary">
            <GraduationCap size={30} />
          </div>
          <h3 className="text-xl font-bold mb-1">{t("edu.degree")}</h3>
          <p className="text-primary font-medium mb-3">{t("edu.university")}</p>
          <div className="space-y-1 text-sm text-muted-foreground">
            <p>{t("edu.major")}</p>
            <p>{t("edu.grade")}</p>
            <p>{t("edu.graduation")}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
