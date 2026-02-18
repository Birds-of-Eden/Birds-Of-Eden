import { motion } from "framer-motion";
import { Facebook, Github, Globe, Linkedin, Sparkles, X } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useMemo, useState } from "react";
import teamMembers from "../Data/teamMembers.json";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const TeamListStatic = () => {
  const { t } = useTranslation();
  const { hero, members } = teamMembers;
  const [selectedMember, setSelectedMember] = useState(null);
  const visibleMembers = useMemo(() => members.slice(0, 3), [members]);

  return (
    <motion.div
      className="min-h-screen bg-slate-50 pb-16 text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-slate-900"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <section className="container mx-auto flex flex-col gap-6 px-6 md:flex-row md:items-center md:justify-between">
        <div className="mt-4 space-y-4 md:max-w-2xl">
          <p className="text-xs uppercase tracking-[0.4em] text-slate-400 dark:text-slate-300">
            Leadership
          </p>
          <motion.h1
            className="text-4xl font-bold leading-tight text-slate-900 md:text-5xl dark:text-slate-50"
            variants={cardVariants}
          >
            {hero.title}
          </motion.h1>
          <motion.p
            className="text-lg text-slate-600 dark:text-slate-300"
            variants={cardVariants}
          >
            {hero.subtitle}
          </motion.p>
        </div>
      </section>

      <section className="container mx-auto mt-12 px-6">
        <motion.div
          className="grid gap-6 md:grid-cols-3"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {visibleMembers.map((member) => (
            <motion.article
              key={member.id}
              className="group cursor-pointer overflow-hidden rounded-3xl bg-white shadow-2xl transition hover:-translate-y-2 hover:shadow-2xl dark:bg-slate-900 dark:shadow-black/40"
              variants={cardVariants}
              onClick={() => setSelectedMember(member)}
            >
              <div className="relative h-[480px] w-full">
                <img
                  src={member.image}
                  alt={member.name}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 px-6 pb-10 pt-16 text-white">
                  <p className="text-xs uppercase tracking-[0.4em] text-white/70">
                    {member.role}
                  </p>
                  <h3 className="mt-3 text-3xl font-bold">{member.name}</h3>
                  <p className="mt-4 line-clamp-3 text-base leading-relaxed text-white/80">
                    {member.bio}
                  </p>

                  {/* Optional: Add subtle indicators for interactivity */}
                  <div className="mt-6 flex items-center gap-2 text-white/60">
                    <span className="text-xs uppercase tracking-wider">
                      Click to learn more
                    </span>
                    <span className="text-lg">→</span>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </section>

      {selectedMember && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900/90 px-4 py-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <motion.div
            className="h-[60vh] w-[50vw] overflow-hidden rounded-3xl bg-white shadow-2xl dark:bg-slate-900"
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
          >
            <div className="relative flex h-full flex-col lg:flex-row">
              <div className="relative h-72 w-full lg:h-full lg:w-1/2">
                <img
                  src={selectedMember.image}
                  alt={selectedMember.name}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <p className="text-xs uppercase tracking-[0.5em] text-white/70">
                    {selectedMember.role}
                  </p>
                  <h3 className="text-3xl font-semibold text-white">
                    {selectedMember.name}
                  </h3>
                </div>
              </div>

              <div className="flex h-full w-full flex-col gap-6 overflow-y-auto bg-white/95 p-8 dark:bg-slate-900/95">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.5em] text-slate-400 dark:text-slate-100">
                      Biography
                    </p>
                    <p className="mt-2 text-base leading-relaxed text-slate-700 dark:text-slate-100">
                      {selectedMember.bio}
                    </p>
                  </div>
                  <button
                    onClick={() => setSelectedMember(null)}
                    className="rounded-full border border-slate-200 px-4 py-1 text-xs font-semibold uppercase tracking-[0.4em] text-slate-500 transition hover:border-slate-400 dark:border-slate-700 dark:text-slate-100"
                  >
                    Close
                  </button>
                </div>
                <p className="text-sm italic text-slate-500 dark:text-slate-100">
                  “{selectedMember.quote}”
                </p>
                <div>
                  <p className="text-xs uppercase tracking-[0.4em] text-slate-400 dark:text-slate-100">
                    Areas of expertise
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {selectedMember.pillars.map((pillar) => (
                      <span
                        key={pillar}
                        className="rounded-full border border-slate-200 px-4 py-1 text-[11px] font-semibold text-slate-700 dark:border-slate-700 dark:text-slate-100"
                      >
                        {pillar}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex flex-wrap gap-4">
                  {selectedMember.linkedin && (
                    <a
                      href={selectedMember.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-blue-600 hover:text-blue-400"
                    >
                      <Linkedin className="h-4 w-4" />
                      LinkedIn
                    </a>
                  )}
                  {selectedMember.facebook && (
                    <a
                      href={selectedMember.facebook}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-blue-600 hover:text-blue-400"
                    >
                      <Facebook className="h-4 w-4" />
                      Facebook
                    </a>
                  )}
                  {selectedMember.gitlink && (
                    <a
                      href={selectedMember.gitlink}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-blue-600 hover:text-blue-400"
                    >
                      <Github className="h-4 w-4" />
                      GitHub
                    </a>
                  )}
                  {selectedMember.portfolio && (
                    <a
                      href={selectedMember.portfolio}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-blue-600 hover:text-blue-400"
                    >
                      <Globe className="h-4 w-4" />
                      {t("team.viewPortfolio")}
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default TeamListStatic;
