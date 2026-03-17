import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Database, FileSpreadsheet, Code2, BarChart3, Wrench, Brain, GitBranch, Github, Search, CheckCircle, MessageSquare, Eye, BookOpen } from "lucide-react";

const skillCategories = [
  {
    titleKey: "skills.technical",
    skills: [
      { name: "SQL (PostgreSQL)", icon: Database },
      { name: "Python", icon: Code2 },
      { name: "Data Cleaning", icon: Wrench },
      { name: "Data Visualization", icon: BarChart3 },
      { name: "Exploratory Data Analysis", icon: Search },
      { name: "Data Validation", icon: CheckCircle },
    ],
  },
  {
    titleKey: "skills.tools",
    skills: [
      { name: "Power BI", icon: BarChart3 },
      { name: "Excel", icon: FileSpreadsheet },
      { name: "Git", icon: GitBranch },
      { name: "GitHub", icon: Github },
    ],
  },
  {
    titleKey: "skills.soft",
    skills: [
      { name: "Analytical Thinking", icon: Brain },
      { name: "Problem Solving", icon: Search },
      { name: "Communication", icon: MessageSquare },
      { name: "Attention to Detail", icon: Eye },
      { name: "Data Storytelling", icon: BookOpen },
    ],
  },
];

const Skills = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="section-padding">
      <div className="container-narrow" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-2">{t("skills.title")}</h2>
          <div className="w-16 h-1 bg-hero-gradient mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {skillCategories.map((cat, catIdx) => (
            <motion.div
              key={cat.titleKey}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: catIdx * 0.15 }}
              className="p-6 rounded-xl bg-card border border-border card-shadow hover:card-shadow-hover transition-shadow"
            >
              <h3 className="text-lg font-semibold mb-5 text-gradient">{t(cat.titleKey)}</h3>
              <div className="space-y-3">
                {cat.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-3 p-2 rounded-lg hover:bg-accent transition-colors"
                  >
                    <skill.icon size={18} className="text-primary shrink-0" />
                    <span className="text-sm text-foreground">{skill.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
