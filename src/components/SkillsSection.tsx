import { motion } from 'framer-motion';

interface SkillsSectionProps {
  isDark: boolean;
}

const skills = {
  frontend: [
    { name: 'HTML', level: 90 },
    { name: 'CSS', level: 85 },
    { name: 'JavaScript', level: 75 },
    { name: 'Tailwind CSS', level: 82 },
    { name: 'Responsive Design', level: 80 },
  ],

  akademik: [
    { name: 'IPA', level: 70 },
    { name: 'IPS', level: 72 },
    { name: 'TIK', level: 78 },
    { name: 'PAI', level: 85 },
    { name: 'MATEMATIKA', level: 75 },
  ],

  tools: [
    { name: 'VS Code', level: 92 },
    { name: 'GitHub', level: 78 },
    { name: 'Figma', level: 72 },
    { name: 'Canva', level: 88 },
    { name: 'CapCut', level: 85 },
  ],
};

function SkillBar({
  name,
  level,
  delay,
  isDark,
}: {
  name: string;
  level: number;
  delay: number;
  isDark: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="space-y-2"
    >
      <div className="flex justify-between items-center">
        <span
          className={`font-medium ${
            isDark ? 'text-white' : 'text-slate-800'
          }`}
        >
          {name}
        </span>

        <span className="text-sm text-cyan-400">{level}%</span>
      </div>

      <div
        className={`
          h-2.5 rounded-full overflow-hidden border
          ${
            isDark
              ? 'bg-white/5 border-white/5'
              : 'bg-slate-200 border-slate-300'
          }
        `}
      >
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{
            duration: 1.2,
            delay: delay + 0.2,
            ease: 'easeOut',
          }}
          className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-emerald-400 to-cyan-300 shadow-[0_0_20px_rgba(34,211,238,0.45)]"
        />
      </div>
    </motion.div>
  );
}

export default function SkillsSection({
  isDark,
}: SkillsSectionProps) {
  return (
    <section
      id="skills"
      className={`
        relative overflow-hidden py-20 md:py-32 transition-colors duration-300
        ${isDark ? 'bg-[#0f172a]' : 'bg-[#f8fafc]'}
      `}
    >
      {/* background glow */}
      <div className="absolute top-[-250px] left-[-250px] w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-[-250px] right-[-250px] w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-cyan-400 font-semibold uppercase tracking-[0.3em] text-sm">
            My stack
          </span>

          <h2 className="text-4xl md:text-5xl font-black mt-4 mb-5">
            <span className="bg-gradient-to-r from-cyan-300 via-emerald-300 to-cyan-400 bg-clip-text text-transparent">
              Skills & Tools
            </span>
          </h2>

          <div className="w-32 h-1.5 mx-auto rounded-full bg-gradient-to-r from-cyan-400 via-emerald-400 to-cyan-400" />
        </motion.div>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: 'Frontend',
              emoji: '🎨',
              border: 'border-cyan-400/20',
              glow:
                'hover:shadow-[0_0_35px_rgba(34,211,238,0.12)]',
              skills: skills.frontend,
            },
            {
              title: 'Akademik',
              emoji: '📚',
              border: 'border-emerald-400/20',
              glow:
                'hover:shadow-[0_0_35px_rgba(16,185,129,0.12)]',
              skills: skills.akademik,
            },
            {
              title: 'Tools & Lainnya',
              emoji: '🛠️',
              border: 'border-blue-400/20',
              glow:
                'hover:shadow-[0_0_35px_rgba(59,130,246,0.12)]',
              skills: skills.tools,
            },
          ].map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`
                p-7 rounded-3xl border backdrop-blur-2xl transition-all duration-500
                ${card.border} ${card.glow}
                ${
                  isDark
                    ? 'bg-white/[0.04]'
                    : 'bg-white border-slate-200'
                }
              `}
            >
              <div className="flex items-center gap-4 mb-7">
                <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 flex items-center justify-center">
                  <span className="text-2xl">
                    {card.emoji}
                  </span>
                </div>

                <h3
                  className={`text-2xl font-bold ${
                    isDark
                      ? 'text-white'
                      : 'text-slate-800'
                  }`}
                >
                  {card.title}
                </h3>
              </div>

              <div className="space-y-5">
                {card.skills.map((skill, index) => (
                  <SkillBar
                    name={skill.name}
                    level={skill.level}
                    delay={index * 0.1}
                    isDark={isDark}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}