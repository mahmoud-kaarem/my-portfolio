import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { ExternalLink, Github, ShoppingCart, BarChart3, CheckCircle, Eye } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import ecommerceDashboard from "@/assets/ecommerce-dashboard.png";
import superstoreDashboard from "@/assets/superstore-dashboard.png";

const projects = [
  {
    titleKey: "project5.title",
    descKey: "project5.desc",
    tools: ["Excel", "Pivot Tables", "Dashboard", "Data Cleaning"],
    icon: ShoppingCart,
    github: "https://github.com/mahmoud-kaarem/elevvo_projects/tree/main/level_1_tasks/task_1",
    demo: null,
    status: "done",
    snapshot: ecommerceDashboard,
  },
  {
    titleKey: "project6.title",
    descKey: "project6.desc",
    tools: ["Power BI", "DAX", "Data Cleaning", "CSV", "Dashboard"],
    icon: BarChart3,
    github: "https://github.com/mahmoud-kaarem/elevvo_projects/tree/main/level%203%20task",
    demo: null,
    status: "done",
    snapshot: superstoreDashboard,
  },
];

const Projects = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="section-padding bg-muted/30">
      <div className="container-narrow" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-2">{t("projects.title")}</h2>
          <div className="w-16 h-1 bg-hero-gradient mx-auto rounded-full" />
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.titleKey}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group p-6 rounded-xl bg-card border border-border card-shadow hover:card-shadow-hover transition-all hover:-translate-y-1"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-lg bg-accent text-primary">
                  <project.icon size={22} />
                </div>
                <h3 className="font-semibold text-lg">{t(project.titleKey)}</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                {t(project.descKey)}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-2.5 py-1 text-xs font-medium rounded-md bg-accent text-accent-foreground"
                  >
                    {tool}
                  </span>
                ))}
              </div>
              {project.status === "done" && (
                <div className="flex items-center gap-1.5 mb-4 text-xs font-medium text-green-600 dark:text-green-400">
                  <CheckCircle size={14} />
                  <span>{t("projects.done")}</span>
                </div>
              )}
              <div className="flex items-center gap-3 flex-wrap">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
                >
                  <Github size={15} /> {t("projects.viewGithub")}
                </a>

                <Dialog>
                  <DialogTrigger asChild>
                    <button className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline cursor-pointer">
                      <Eye size={15} /> {t("projects.viewSnapshot")}
                    </button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-3xl">
                    <DialogHeader>
                      <DialogTitle>{t(project.titleKey)}</DialogTitle>
                    </DialogHeader>
                    <div className="mt-2 rounded-lg overflow-hidden border border-border">
                      <img
                        src={project.snapshot}
                        alt={`${t(project.titleKey)} dashboard snapshot`}
                        className="w-full h-auto object-contain"
                      />
                    </div>
                  </DialogContent>
                </Dialog>

                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
                  >
                    <ExternalLink size={15} /> {t("projects.liveDemo")}
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
